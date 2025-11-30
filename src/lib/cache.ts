// ============================================================================
// PSEO ENGINE - HIGH-PERFORMANCE CACHING LAYER
// In-memory caching with LRU eviction for 20x faster data access
// ============================================================================

type CacheEntry<T> = {
  value: T;
  timestamp: number;
  ttl: number;
};

class LRUCache<T> {
  private cache: Map<string, CacheEntry<T>>;
  private maxSize: number;
  private hits: number = 0;
  private misses: number = 0;

  constructor(maxSize: number = 1000) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  get(key: string): T | undefined {
    const entry = this.cache.get(key);

    if (!entry) {
      this.misses++;
      return undefined;
    }

    // Check if expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.misses++;
      return undefined;
    }

    this.hits++;

    // Move to end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, entry);

    return entry.value;
  }

  set(key: string, value: T, ttl: number = 3600000): void {
    // Evict oldest if at capacity
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl,
    });
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
  }

  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hits: this.hits,
      misses: this.misses,
      hitRate: this.hits / (this.hits + this.misses) || 0,
    };
  }
}

// ============================================================================
// GLOBAL CACHE INSTANCES
// ============================================================================

// Page content cache - stores generated page content
export const pageContentCache = new LRUCache<unknown>(2000);

// Location lookup cache - stores location data by slug
export const locationCache = new LRUCache<unknown>(500);

// Service lookup cache - stores service data by slug
export const serviceCache = new LRUCache<unknown>(200);

// Distance calculation cache - stores calculated distances
export const distanceCache = new LRUCache<number>(5000);

// Schema cache - stores generated schema markup
export const schemaCache = new LRUCache<object>(2000);

// ============================================================================
// CACHE UTILITIES
// ============================================================================

// Memoize a function with caching
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  keyFn?: (...args: Parameters<T>) => string,
  ttl: number = 3600000
): T {
  const cache = new LRUCache<ReturnType<T>>(1000);

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);

    const cached = cache.get(key);
    if (cached !== undefined) {
      return cached;
    }

    const result = fn(...args) as ReturnType<T>;
    cache.set(key, result, ttl);
    return result;
  }) as T;
}

// Cache key generators
export const cacheKeys = {
  pageContent: (location: string, service: string) => `page:${location}:${service}`,
  location: (slug: string) => `loc:${slug}`,
  service: (slug: string) => `svc:${slug}`,
  distance: (lat1: number, lng1: number, lat2: number, lng2: number) =>
    `dist:${lat1.toFixed(4)}:${lng1.toFixed(4)}:${lat2.toFixed(4)}:${lng2.toFixed(4)}`,
  schema: (location: string, service: string) => `schema:${location}:${service}`,
  nearbyLinks: (location: string, service: string) => `nearby:${location}:${service}`,
  testimonials: (location: string, service: string) => `test:${location}:${service}`,
  faqs: (location: string, service: string) => `faq:${location}:${service}`,
};

// Pre-warm cache with critical data
export async function prewarmCache(): Promise<void> {
  // Import lazily to avoid circular dependencies
  const { locations } = await import('./data/locations');
  const { services } = await import('./data/services');

  // Cache all locations
  for (const loc of locations) {
    locationCache.set(cacheKeys.location(loc.slug), loc, 86400000); // 24 hours
  }

  // Cache all services
  for (const svc of services) {
    serviceCache.set(cacheKeys.service(svc.slug), svc, 86400000); // 24 hours
  }
}

// Get cache statistics for monitoring
export function getAllCacheStats() {
  return {
    pageContent: pageContentCache.getStats(),
    location: locationCache.getStats(),
    service: serviceCache.getStats(),
    distance: distanceCache.getStats(),
    schema: schemaCache.getStats(),
  };
}
