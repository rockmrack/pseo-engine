// ============================================================================
// PSEO ENGINE - OPTIMIZED DATA ACCESS LAYER
// High-performance data retrieval with caching and indexing
// ============================================================================

import { Location, Service } from '@/types';
import { locations } from './data/locations';
import { services } from './data/services';
import { locationCache, serviceCache, distanceCache, cacheKeys } from './cache';

// ============================================================================
// PRE-BUILT INDEXES FOR O(1) LOOKUPS
// ============================================================================

// Build location index once at module load
const locationIndex = new Map<string, Location>();
const locationsByArea = new Map<string, Location[]>();
const locationsByPostcode = new Map<string, Location[]>();

// Build service index once at module load
const serviceIndex = new Map<string, Service>();
const servicesByCategory = new Map<string, Service[]>();

// Initialize indexes
function initializeIndexes() {
  // Index locations
  for (const loc of locations) {
    locationIndex.set(loc.slug, loc);

    // Index by area
    const areaLocs = locationsByArea.get(loc.area) || [];
    areaLocs.push(loc);
    locationsByArea.set(loc.area, areaLocs);

    // Index by postcode
    const postcodeLocs = locationsByPostcode.get(loc.postcode) || [];
    postcodeLocs.push(loc);
    locationsByPostcode.set(loc.postcode, postcodeLocs);
  }

  // Index services
  for (const svc of services) {
    serviceIndex.set(svc.slug, svc);

    // Index by category
    const categorySvcs = servicesByCategory.get(svc.category) || [];
    categorySvcs.push(svc);
    servicesByCategory.set(svc.category, categorySvcs);
  }
}

// Initialize on module load
initializeIndexes();

// ============================================================================
// OPTIMIZED LOCATION ACCESS - O(1) instead of O(n)
// ============================================================================

export function getLocation(slug: string): Location | undefined {
  // Check cache first
  const cacheKey = cacheKeys.location(slug);
  const cached = locationCache.get(cacheKey) as Location | undefined;
  if (cached) return cached;

  // O(1) lookup from index
  const location = locationIndex.get(slug);
  if (location) {
    locationCache.set(cacheKey, location, 86400000); // 24 hours
  }

  return location;
}

export function getLocationsByArea(area: string): Location[] {
  return locationsByArea.get(area) || [];
}

export function getLocationsByPostcode(postcode: string): Location[] {
  return locationsByPostcode.get(postcode) || [];
}

export function getAllLocations(): Location[] {
  return locations;
}

export function getLocationCount(): number {
  return locations.length;
}

// ============================================================================
// OPTIMIZED SERVICE ACCESS - O(1) instead of O(n)
// ============================================================================

export function getService(slug: string): Service | undefined {
  // Check cache first
  const cacheKey = cacheKeys.service(slug);
  const cached = serviceCache.get(cacheKey) as Service | undefined;
  if (cached) return cached;

  // O(1) lookup from index
  const service = serviceIndex.get(slug);
  if (service) {
    serviceCache.set(cacheKey, service, 86400000); // 24 hours
  }

  return service;
}

export function getServicesByCategory(category: string): Service[] {
  return servicesByCategory.get(category) || [];
}

export function getAllServices(): Service[] {
  return services;
}

export function getServiceCount(): number {
  return services.length;
}

// ============================================================================
// OPTIMIZED DISTANCE CALCULATION WITH CACHING
// ============================================================================

const DEG_TO_RAD = Math.PI / 180;
const EARTH_RADIUS_MILES = 3959;

export function calculateDistanceFast(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  // Check cache first
  const cacheKey = cacheKeys.distance(lat1, lng1, lat2, lng2);
  const cached = distanceCache.get(cacheKey);
  if (cached !== undefined) return cached;

  // Optimized Haversine calculation
  const dLat = (lat2 - lat1) * DEG_TO_RAD;
  const dLng = (lng2 - lng1) * DEG_TO_RAD;

  const sinHalfDLat = Math.sin(dLat * 0.5);
  const sinHalfDLng = Math.sin(dLng * 0.5);

  const a =
    sinHalfDLat * sinHalfDLat +
    Math.cos(lat1 * DEG_TO_RAD) *
      Math.cos(lat2 * DEG_TO_RAD) *
      sinHalfDLng *
      sinHalfDLng;

  const distance = EARTH_RADIUS_MILES * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Cache the result
  distanceCache.set(cacheKey, distance, 86400000); // 24 hours

  return distance;
}

// ============================================================================
// OPTIMIZED NEARBY LOCATIONS
// ============================================================================

// Pre-compute nearby locations for faster access
const nearbyLocationsCache = new Map<string, Location[]>();

export function getNearbyLocationsFast(slug: string, count: number = 6): Location[] {
  const cacheKey = `${slug}:${count}`;

  // Check pre-computed cache
  const cached = nearbyLocationsCache.get(cacheKey);
  if (cached) return cached;

  const location = getLocation(slug);
  if (!location) return [];

  // Get from nearby streets defined in data
  const nearby = location.nearbyStreets
    .slice(0, count)
    .map(streetSlug => getLocation(streetSlug))
    .filter((l): l is Location => l !== undefined);

  // Cache for future use
  nearbyLocationsCache.set(cacheKey, nearby);

  return nearby;
}

// ============================================================================
// BATCH OPERATIONS FOR PERFORMANCE
// ============================================================================

export function getLocationsAndServicesBatch(
  locationSlugs: string[],
  serviceSlugs: string[]
): { locations: Map<string, Location>; services: Map<string, Service> } {
  const locs = new Map<string, Location>();
  const svcs = new Map<string, Service>();

  for (const slug of locationSlugs) {
    const loc = getLocation(slug);
    if (loc) locs.set(slug, loc);
  }

  for (const slug of serviceSlugs) {
    const svc = getService(slug);
    if (svc) svcs.set(slug, svc);
  }

  return { locations: locs, services: svcs };
}

// ============================================================================
// STATIC DATA FOR BUILD-TIME OPTIMIZATION
// ============================================================================

// Pre-computed arrays for static generation
export const allLocationSlugs = locations.map(l => l.slug);
export const allServiceSlugs = services.map(s => s.slug);
export const allAreas = Array.from(locationsByArea.keys());
export const allPostcodes = Array.from(locationsByPostcode.keys());
export const allCategories = Array.from(servicesByCategory.keys());

// Total page count for sitemap
export const totalPageCount = locations.length * services.length;
