// ============================================================================
// PSEO ENGINE - SITE CONFIGURATION
// Central configuration for the entire pSEO system
// ============================================================================

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  businessName: 'Hampstead Renovations',
  phone: '07459 345456',
  email: 'contact@hampsteadrenovations.co.uk',
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
    // PRIMARY: Core Hampstead & NW London - 10 minute response
    primary: ['NW3', 'NW6', 'NW8', 'NW11', 'N2', 'N6', 'NW1', 'NW5'],
    // SECONDARY: Extended North West London - 20 minute response  
    secondary: ['N3', 'N10', 'NW2', 'NW4', 'NW7', 'NW9', 'NW10', 'W9', 'W11', 'N1', 'N5', 'N8'],
    // TERTIARY: Greater North London coverage - 30 minute response
    tertiary: ['N4', 'N7', 'N9', 'N11', 'N12', 'N13', 'N14', 'N15', 'N16', 'N17', 'N18', 'N19', 'N20', 'N21', 'N22'],
    radius: 12, // miles - expanded coverage
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
