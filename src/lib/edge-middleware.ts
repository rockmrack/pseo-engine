// ============================================================================
// PSEO ENGINE - EDGE MIDDLEWARE
// 1000x Performance: Geo-routing, A/B testing, edge caching, and request optimization
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';

// ============================================================================
// TYPES
// ============================================================================

export interface GeoData {
  country?: string;
  region?: string;
  city?: string;
  latitude?: string;
  longitude?: string;
  postalCode?: string;
}

export interface ABTestConfig {
  id: string;
  name: string;
  variants: Array<{
    id: string;
    weight: number;
    value: string;
  }>;
  cookieName: string;
  duration: number; // days
}

export interface EdgeCacheConfig {
  patterns: Array<{
    path: RegExp;
    ttl: number;
    swr: number;
    tags?: string[];
  }>;
}

// ============================================================================
// GEO-ROUTING CONFIGURATION
// ============================================================================

const GEO_REDIRECTS: Array<{
  condition: (geo: GeoData) => boolean;
  destination: string;
  permanent: boolean;
}> = [
  // Example: Redirect non-UK visitors to international landing page
  // {
  //   condition: (geo) => geo.country !== 'GB',
  //   destination: '/international',
  //   permanent: false,
  // },
];

// Location-based content personalization
const LOCAL_CONTENT_OVERRIDES: Array<{
  postcodes: string[];
  nearestArea: string;
  priority: number;
}> = [
  { postcodes: ['NW3', 'NW6', 'NW5'], nearestArea: 'hampstead', priority: 1 },
  { postcodes: ['N6', 'N2', 'N10'], nearestArea: 'highgate', priority: 1 },
  { postcodes: ['N8', 'N4', 'N19'], nearestArea: 'crouch-end', priority: 1 },
  { postcodes: ['N1', 'N5', 'N7'], nearestArea: 'islington', priority: 1 },
  { postcodes: ['NW11', 'NW4', 'N12'], nearestArea: 'golders-green', priority: 1 },
];

// ============================================================================
// A/B TEST CONFIGURATIONS
// ============================================================================

export const AB_TESTS: ABTestConfig[] = [
  {
    id: 'hero-cta-v1',
    name: 'Hero CTA Button Text',
    variants: [
      { id: 'control', weight: 50, value: 'Call Now' },
      { id: 'variant-a', weight: 25, value: 'Get Free Quote' },
      { id: 'variant-b', weight: 25, value: 'Book Today' },
    ],
    cookieName: 'ab_hero_cta',
    duration: 30,
  },
  {
    id: 'trust-signals-v1',
    name: 'Trust Signals Position',
    variants: [
      { id: 'control', weight: 50, value: 'above-fold' },
      { id: 'variant-a', weight: 50, value: 'below-hero' },
    ],
    cookieName: 'ab_trust_signals',
    duration: 30,
  },
  {
    id: 'pricing-display-v1',
    name: 'Pricing Display Format',
    variants: [
      { id: 'control', weight: 33, value: 'range' },
      { id: 'variant-a', weight: 33, value: 'from' },
      { id: 'variant-b', weight: 34, value: 'table' },
    ],
    cookieName: 'ab_pricing',
    duration: 30,
  },
];

// ============================================================================
// EDGE CACHE CONFIGURATION
// ============================================================================

export const EDGE_CACHE_CONFIG: EdgeCacheConfig = {
  patterns: [
    // Static pages - long cache
    { path: /^\/$/, ttl: 3600, swr: 86400, tags: ['homepage'] },
    { path: /^\/blog\/?$/, ttl: 1800, swr: 3600, tags: ['blog-index'] },
    { path: /^\/services\/?$/, ttl: 3600, swr: 86400, tags: ['services-index'] },
    
    // Local service pages - medium cache
    { path: /^\/local\/[^/]+\/[^/]+$/, ttl: 86400, swr: 604800, tags: ['local-service'] },
    { path: /^\/local\/[^/]+$/, ttl: 86400, swr: 604800, tags: ['location-hub'] },
    
    // Blog posts - medium cache
    { path: /^\/blog\/[^/]+$/, ttl: 3600, swr: 86400, tags: ['blog-post'] },
    
    // Dynamic pages - shorter cache
    { path: /^\/contact\/?$/, ttl: 1800, swr: 3600, tags: ['contact'] },
    { path: /^\/emergency\//, ttl: 300, swr: 600, tags: ['emergency'] },
    
    // API routes - no edge cache
    { path: /^\/api\//, ttl: 0, swr: 0 },
  ],
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get geo data from request headers (Vercel Edge)
 */
function getGeoData(request: NextRequest): GeoData {
  return {
    country: request.geo?.country,
    region: request.geo?.region,
    city: request.geo?.city,
    latitude: request.geo?.latitude,
    longitude: request.geo?.longitude,
    // Vercel doesn't provide postal code directly, but we can infer from other headers
  };
}

/**
 * Get or assign A/B test variant
 */
function getABTestVariant(
  request: NextRequest,
  response: NextResponse,
  test: ABTestConfig
): string {
  // Check existing cookie
  const existingVariant = request.cookies.get(test.cookieName)?.value;
  if (existingVariant) {
    return existingVariant;
  }

  // Assign new variant based on weights
  const random = Math.random() * 100;
  let cumulative = 0;
  let selectedVariant = test.variants[0].id;

  for (const variant of test.variants) {
    cumulative += variant.weight;
    if (random <= cumulative) {
      selectedVariant = variant.id;
      break;
    }
  }

  // Set cookie for consistency
  response.cookies.set(test.cookieName, selectedVariant, {
    maxAge: test.duration * 24 * 60 * 60,
    httpOnly: false, // Accessible to client-side code
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return selectedVariant;
}

/**
 * Get edge cache headers for a path
 */
function getEdgeCacheHeaders(pathname: string): Record<string, string> {
  for (const { path, ttl, swr } of EDGE_CACHE_CONFIG.patterns) {
    if (path.test(pathname)) {
      if (ttl === 0) {
        return {
          'Cache-Control': 'no-store',
        };
      }
      return {
        'Cache-Control': `public, s-maxage=${ttl}, stale-while-revalidate=${swr}`,
        'CDN-Cache-Control': `public, max-age=${ttl}`,
        'Vercel-CDN-Cache-Control': `public, max-age=${ttl}`,
      };
    }
  }
  // Default cache headers
  return {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  };
}

/**
 * Find nearest service area based on postal code
 */
function findNearestArea(postalCode: string | undefined): string | null {
  if (!postalCode) return null;

  const prefix = postalCode.replace(/[0-9]/g, '').toUpperCase();
  
  for (const override of LOCAL_CONTENT_OVERRIDES) {
    if (override.postcodes.includes(prefix)) {
      return override.nearestArea;
    }
  }
  
  return null;
}

/**
 * Check if request is from a bot/crawler
 */
function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /embedly/i,
    /quora link preview/i,
    /showyoubot/i,
    /outbrain/i,
    /pinterest/i,
    /applebot/i,
    /semrushbot/i,
    /ahrefsbot/i,
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}

// ============================================================================
// MIDDLEWARE FUNCTION
// ============================================================================

export function edgeMiddleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  const userAgent = request.headers.get('user-agent');

  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // file extensions
  ) {
    return response;
  }

  // =========================================================================
  // 1. GEO-BASED REDIRECTS
  // =========================================================================
  const geo = getGeoData(request);
  
  for (const redirect of GEO_REDIRECTS) {
    if (redirect.condition(geo)) {
      return NextResponse.redirect(
        new URL(redirect.destination, request.url),
        redirect.permanent ? 308 : 307
      );
    }
  }

  // =========================================================================
  // 2. LOCALIZATION HEADERS
  // =========================================================================
  const nearestArea = findNearestArea(geo.postalCode);
  if (nearestArea) {
    response.headers.set('x-nearest-area', nearestArea);
  }
  if (geo.city) {
    response.headers.set('x-visitor-city', geo.city);
  }
  if (geo.country) {
    response.headers.set('x-visitor-country', geo.country);
  }

  // =========================================================================
  // 3. A/B TESTING (Skip for bots)
  // =========================================================================
  if (!isBot(userAgent)) {
    const activeTests: Record<string, string> = {};
    
    for (const test of AB_TESTS) {
      const variant = getABTestVariant(request, response, test);
      activeTests[test.id] = variant;
    }
    
    // Set header for client-side access
    response.headers.set('x-ab-tests', JSON.stringify(activeTests));
  }

  // =========================================================================
  // 4. EDGE CACHE HEADERS
  // =========================================================================
  const cacheHeaders = getEdgeCacheHeaders(pathname);
  for (const [key, value] of Object.entries(cacheHeaders)) {
    response.headers.set(key, value);
  }

  // =========================================================================
  // 5. SECURITY HEADERS
  // =========================================================================
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // =========================================================================
  // 6. PERFORMANCE HINTS
  // =========================================================================
  // Early hints for critical resources
  response.headers.set('Link', [
    '</fonts/geist-sans.woff2>; rel=preload; as=font; crossorigin',
    '</icon.svg>; rel=preload; as=image',
  ].join(', '));

  // =========================================================================
  // 7. BOT OPTIMIZATION
  // =========================================================================
  if (isBot(userAgent)) {
    // Longer cache for bots
    response.headers.set('Cache-Control', 'public, s-maxage=86400');
    // Indicate bot detection
    response.headers.set('x-is-bot', 'true');
  }

  // =========================================================================
  // 8. REQUEST ID FOR TRACING
  // =========================================================================
  const requestId = crypto.randomUUID();
  response.headers.set('x-request-id', requestId);

  return response;
}

// ============================================================================
// MATCHER CONFIG
// Export for middleware.ts
// ============================================================================

export const middlewareConfig = {
  matcher: [
    // Match all paths except static files
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};

// ============================================================================
// CLIENT-SIDE HELPERS
// ============================================================================

/**
 * Get A/B test variant on client side
 */
export function getClientABTestVariant(testId: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const test = AB_TESTS.find(t => t.id === testId);
  if (!test) return null;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === test.cookieName) {
      return value;
    }
  }
  
  return null;
}

/**
 * Get A/B test value on client side
 */
export function getClientABTestValue(testId: string): string | null {
  const variantId = getClientABTestVariant(testId);
  if (!variantId) return null;
  
  const test = AB_TESTS.find(t => t.id === testId);
  if (!test) return null;
  
  const variant = test.variants.find(v => v.id === variantId);
  return variant?.value ?? null;
}

/**
 * Track A/B test conversion
 */
export function trackABConversion(testId: string, eventName: string): void {
  const variantId = getClientABTestVariant(testId);
  if (!variantId) return;
  
  // Send to analytics (implement your analytics integration)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'ab_conversion', {
      test_id: testId,
      variant_id: variantId,
      event_name: eventName,
    });
  }
}
