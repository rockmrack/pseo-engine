// ============================================================================
// PSEO ENGINE - SITE CONFIGURATION
// Central configuration for the entire pSEO system
// ============================================================================

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  businessName: 'Hampstead Renovations',
  phone: '020 7946 0958',
  email: 'enquiries@hampsteadrenovations.co.uk',
  address: {
    street: '250 Finchley Road',
    city: 'London',
    postcode: 'NW3 6DN',
    coordinates: {
      lat: 51.5485,
      lng: -0.1827,
    },
  },
  socialLinks: {
    facebook: 'https://facebook.com/hampsteadrenovations',
    instagram: 'https://instagram.com/hampsteadrenovations',
    linkedin: 'https://linkedin.com/company/hampstead-renovations',
  },
  businessHours: {
    weekday: '07:00 - 19:00',
    saturday: '08:00 - 17:00',
    sunday: 'Emergency only',
    emergency: '24/7 Emergency callout available',
  },
  serviceArea: {
    primary: ['NW3', 'NW6', 'NW8', 'NW11', 'N2', 'N6', 'NW1'],
    secondary: ['N3', 'N10', 'NW2', 'NW4', 'NW7', 'NW9', 'W9', 'W11'],
    radius: 8, // miles
  },
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://hampsteadrenovations.co.uk';

// Google Maps API Key (set in environment)
export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

// ISR Revalidation times (in seconds)
export const REVALIDATE_TIMES = {
  landingPage: 86400, // 24 hours
  sitemap: 3600, // 1 hour
  staticPage: 604800, // 7 days
};

// Content generation settings
export const CONTENT_CONFIG = {
  maxH1Variations: 5,
  maxIntroVariations: 4,
  maxCTAVariations: 6,
  nearbyStreetsCount: 6,
  testimonialsPerPage: 3,
  faqsPerPage: 5,
};
