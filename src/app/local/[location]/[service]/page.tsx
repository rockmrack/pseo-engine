import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { locations, getLocationBySlug } from '@/lib/data/locations';
import { services, getServiceBySlug } from '@/lib/data/services';
import { generatePageContent, getDistanceFromHQ } from '@/lib/content-engine';
import { BASE_URL, REVALIDATE_TIMES } from '@/lib/config';

import { HeroSection } from '@/components/pseo/HeroSection';
import { ServiceDetailSection } from '@/components/pseo/ServiceDetailSection';
import { TrustSignalsSection } from '@/components/pseo/TrustSignalsSection';
import { LocalMapSection } from '@/components/pseo/LocalMapSection';
import { TestimonialsSection } from '@/components/pseo/TestimonialsSection';
import { FAQSection } from '@/components/pseo/FAQSection';
import { CTASection } from '@/components/pseo/CTASection';
import { NearbyLinksSection } from '@/components/pseo/NearbyLinksSection';

// ============================================================================
// STATIC PARAMS GENERATION
// Pre-generate the most important pages at build time
// ============================================================================

export async function generateStaticParams() {
  const params: { location: string; service: string }[] = [];

  // Generate top 100 priority combinations at build time
  // The rest will be generated on-demand with ISR
  const priorityLocations = locations.slice(0, 20); // Top 20 locations
  const priorityServices = services.slice(0, 10); // Top 10 services

  for (const loc of priorityLocations) {
    for (const serv of priorityServices) {
      params.push({
        location: loc.slug,
        service: serv.slug,
      });
    }
  }

  return params;
}

// ============================================================================
// METADATA GENERATION
// Dynamic metadata for each page
// ============================================================================

interface PageProps {
  params: Promise<{
    location: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.location);
  const service = getServiceBySlug(resolvedParams.service);

  if (!location || !service) {
    return {
      title: 'Page Not Found',
    };
  }

  const content = generatePageContent(location, service);

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
      images: [
        {
          url: `${BASE_URL}/og/${location.slug}-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.title,
      description: content.meta.description,
      images: [`${BASE_URL}/og/${location.slug}-${service.slug}.jpg`],
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
// PAGE COMPONENT
// ============================================================================

export default async function LocalServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.location);
  const service = getServiceBySlug(resolvedParams.service);

  // 404 if invalid combination
  if (!location || !service) {
    notFound();
  }

  // Generate all page content
  const content = generatePageContent(location, service);
  const distance = getDistanceFromHQ(location);

  return (
    <>
      {/* Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.schema.localBusiness),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.schema.service),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.schema.breadcrumb),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.schema.faq),
        }}
      />

      {/* Hero Section */}
      <HeroSection
        h1={content.hero.h1}
        subtitle={content.hero.subtitle}
        trustBadges={content.hero.trustBadges}
        ctaText={content.hero.ctaText}
        ctaSecondary={content.hero.ctaSecondary}
        distance={distance}
        location={location.name}
      />

      {/* Service Details */}
      <ServiceDetailSection
        title={content.serviceDetail.title}
        body={content.serviceDetail.body}
        bulletPoints={content.serviceDetail.bulletPoints}
        processSteps={content.serviceDetail.processSteps}
        priceAnchor={service.priceAnchor}
      />

      {/* Local Map */}
      <LocalMapSection location={location} />

      {/* Trust Signals */}
      <TrustSignalsSection signals={content.trustSignals} />

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={content.testimonials}
        title={`${service.name} Reviews in ${location.area}`}
        subtitle={`See what our ${location.area} customers say about our ${service.name.toLowerCase()} services.`}
      />

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
// ISR CONFIGURATION
// Revalidate pages every 24 hours
// ============================================================================

export const revalidate = REVALIDATE_TIMES.landingPage;
