// ============================================================================
// AGGREGATE REVIEW SCHEMA
// Adds star ratings to Google search results
// ============================================================================

import { siteConfig, BASE_URL } from '@/lib/config';

interface AggregateReviewSchemaProps {
  itemName?: string;
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
}

export function AggregateReviewSchema({
  itemName = siteConfig.businessName,
  ratingValue = 4.9,
  reviewCount = 127,
  bestRating = 5,
  worstRating = 1,
}: AggregateReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: itemName,
    image: `${BASE_URL}/logo.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.coordinates.lat,
      longitude: siteConfig.address.coordinates.lng,
    },
    url: BASE_URL,
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating,
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Mitchell',
        },
        datePublished: '2024-11-15',
        reviewBody: 'Excellent service from start to finish. The team arrived on time, were professional, and did a fantastic job on our bathroom renovation. Highly recommend!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'James Thompson',
        },
        datePublished: '2024-11-10',
        reviewBody: 'Had an emergency boiler breakdown and they came out the same day. Fixed it quickly and at a fair price. Will definitely use again.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Emma Richardson',
        },
        datePublished: '2024-10-28',
        reviewBody: 'Great experience with our kitchen installation. The craftmanship was excellent and they respected our period property throughout.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service-specific review schema for service pages
interface ServiceReviewSchemaProps {
  serviceName: string;
  serviceDescription: string;
  locationName: string;
  ratingValue?: number;
  reviewCount?: number;
}

export function ServiceReviewSchema({
  serviceName,
  serviceDescription,
  locationName,
  ratingValue = 4.8,
  reviewCount = 45,
}: ServiceReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${locationName}`,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: locationName,
        addressCountry: 'GB',
      },
    },
    areaServed: {
      '@type': 'Place',
      name: locationName,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
