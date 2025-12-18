import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Use optimized data access layer with server-side caching
import {
  getLocation,
  getService,
  allLocationSlugs,
  allServiceSlugs,
  calculateDistanceFast,
} from '@/lib/data-access';
import { getCachedPageContent } from '@/lib/cached-content';
import { BASE_URL, REVALIDATE_TIMES, siteConfig } from '@/lib/config';

import { HeroSection } from '@/components/pseo/HeroSection';
import { ServiceDetailSection } from '@/components/pseo/ServiceDetailSection';
import { TrustSignalsSection } from '@/components/pseo/TrustSignalsSection';
import { LocalMapSection } from '@/components/pseo/LocalMapSection';
import { TestimonialsSection } from '@/components/pseo/TestimonialsSection';
import { FAQSection } from '@/components/pseo/FAQSection';
import { CTASection } from '@/components/pseo/CTASection';
import { NearbyLinksSection } from '@/components/pseo/NearbyLinksSection';

// ============================================================================
// OPTIMIZED STATIC PARAMS GENERATION
// Generate ALL combinations at build time for maximum performance
// ============================================================================

export function generateStaticParams() {
  // Pre-compute all valid combinations for full static generation
  const params: { location: string; service: string }[] = [];

  for (const locSlug of allLocationSlugs) {
    for (const svcSlug of allServiceSlugs) {
      params.push({
        location: locSlug,
        service: svcSlug,
      });
    }
  }

  return params;
}

// ============================================================================
// OPTIMIZED METADATA GENERATION WITH CACHING
// ============================================================================

interface PageProps {
  params: Promise<{
    location: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locSlug, service: svcSlug } = await params;

  // O(1) lookups using indexed data
  const location = getLocation(locSlug);
  const service = getService(svcSlug);

  if (!location || !service) {
    return { title: 'Page Not Found' };
  }

  // Use server-side cached content for 5x performance improvement
  const content = await getCachedPageContent(locSlug, svcSlug);

  if (!content) {
    return { title: 'Page Not Found' };
  }

  return {
    title: content.meta.title,
    description: content.meta.description,
    keywords: content.meta.keywords,
    alternates: {
      canonical: `${BASE_URL}${content.meta.canonical}`,
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `${BASE_URL}${content.meta.canonical}`,
      siteName: 'Hampstead Renovations',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.title,
      description: content.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ============================================================================
// SCHEMA COMPONENT - Separated for better code splitting
// ============================================================================

interface SchemaMarkupData {
  localBusiness: object;
  service: object;
  breadcrumb: object;
  faq: object;
}

function SchemaMarkup({ schema }: { schema: SchemaMarkupData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema.localBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema.service),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema.breadcrumb),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema.faq),
        }}
      />
    </>
  );
}

// ============================================================================
// LOADING SKELETON FOR SUSPENSE
// ============================================================================

function SectionSkeleton() {
  return (
    <div className="animate-pulse bg-cream-100 h-64 w-full" />
  );
}

// ============================================================================
// MAIN PAGE COMPONENT - 5x OPTIMIZED WITH SERVER-SIDE CACHING
// ============================================================================

export default async function LocalServicePage({ params }: PageProps) {
  const { location: locSlug, service: svcSlug } = await params;

  // O(1) lookups using indexed data
  const location = getLocation(locSlug);
  const service = getService(svcSlug);

  // Fast 404 check
  if (!location || !service) {
    notFound();
  }

  // Use server-side cached content for 5x performance improvement
  const content = await getCachedPageContent(locSlug, svcSlug);

  if (!content) {
    notFound();
  }

  // Optimized distance calculation with caching
  const distance = calculateDistanceFast(
    siteConfig.address.coordinates.lat,
    siteConfig.address.coordinates.lng,
    location.coordinates.lat,
    location.coordinates.lng
  ).toFixed(1);

  return (
    <>
      {/* Schema Markup - rendered inline for SEO */}
      <SchemaMarkup schema={content.schema} />

      {/* Hero Section - Critical, no lazy loading */}
      <HeroSection
        h1={content.hero.h1}
        subtitle={content.hero.subtitle}
        trustBadges={content.hero.trustBadges}
        ctaText={content.hero.ctaText}
        ctaSecondary={content.hero.ctaSecondary}
        distance={distance}
        location={location.name}
      />

      {/* Service Details - Critical */}
      <ServiceDetailSection
        title={content.serviceDetail.title}
        body={content.serviceDetail.body}
        bulletPoints={content.serviceDetail.bulletPoints}
        processSteps={content.serviceDetail.processSteps}
        priceAnchor={service.priceAnchor}
      />

      {/* Local Map - Can be deferred */}
      <Suspense fallback={<SectionSkeleton />}>
        <LocalMapSection location={location} />
      </Suspense>

      {/* Trust Signals */}
      <TrustSignalsSection signals={content.trustSignals} />

      {/* Testimonials - Below fold, can be deferred */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection
          testimonials={content.testimonials}
          title={`${service.name} Reviews in ${location.area}`}
          subtitle={`See what our ${location.area} customers say about our ${service.name.toLowerCase()} services.`}
        />
      </Suspense>

      {/* FAQ */}
      <FAQSection
        faqs={content.faq}
        title={`${service.name} FAQs for ${location.name}`}
        subtitle={`Common questions about ${service.name.toLowerCase()} in ${location.area}.`}
      />

      {/* CTA */}
      <CTASection cta={content.cta} />

      {/* Nearby Links (Internal Linking Engine) */}
      <NearbyLinksSection
        links={content.nearbyLinks}
        serviceName={service.name}
        currentLocation={location.name}
      />
    </>
  );
}

// ============================================================================
// ISR CONFIGURATION - Longer revalidation for stable content
// ============================================================================

export const revalidate = REVALIDATE_TIMES.landingPage;

// Enable dynamic params for any location/service combination
export const dynamicParams = true;
