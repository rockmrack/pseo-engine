// ============================================================================
// PSEO ENGINE - CONTENT GENERATION ENGINE
// Advanced content generation with spintax, variations, and anti-duplicate logic
// ============================================================================

import { Location, Service, PageContent, MetaContent, HeroContent, FAQ, Testimonial, NearbyLink } from '@/types';
import { siteConfig } from './config';
import { locations, getNearbyLocations } from './data/locations';

// ============================================================================
// DISTANCE CALCULATOR
// Calculate distance between two coordinates using Haversine formula
// ============================================================================

export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

// Calculate distance from HQ
export function getDistanceFromHQ(location: Location): string {
  const distance = calculateDistance(
    siteConfig.address.coordinates.lat,
    siteConfig.address.coordinates.lng,
    location.coordinates.lat,
    location.coordinates.lng
  );
  return distance.toFixed(1);
}

// ============================================================================
// SEEDED RANDOM NUMBER GENERATOR
// Ensures consistent "random" values for the same location+service combination
// ============================================================================

function seededRandom(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function() {
    h = Math.imul(h ^ (h >>> 15), h | 1);
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61);
    return ((h ^ (h >>> 14)) >>> 0) / 4294967296;
  };
}

function selectFromArray<T>(array: T[], seed: string): T {
  const rng = seededRandom(seed);
  return array[Math.floor(rng() * array.length)];
}

function selectMultipleFromArray<T>(array: T[], count: number, seed: string): T[] {
  const rng = seededRandom(seed);
  const shuffled = [...array].sort(() => rng() - 0.5);
  return shuffled.slice(0, count);
}

// ============================================================================
// H1 TITLE VARIATIONS
// Generate unique H1 titles to avoid duplication
// ============================================================================

const h1Templates = [
  '{service} in {location}',
  '{service} on {location}',
  '{location} {service} Services',
  'Professional {service} in {location}',
  'Expert {service} for {location}',
  '{service} Specialists: {location}',
  '{location}\'s Trusted {service} Team',
  'Premium {service} | {location}',
  '{service} Near {location}',
  '{area} {service} Experts | {location}',
];

export function generateH1(location: Location, service: Service): string {
  const seed = `${location.slug}-${service.slug}-h1`;
  const template = selectFromArray(h1Templates, seed);

  return template
    .replace('{service}', service.name)
    .replace('{location}', location.name)
    .replace('{area}', location.area);
}

// ============================================================================
// META TITLE VARIATIONS
// SEO-optimised title tag variations
// ============================================================================

const metaTitleTemplates = [
  '{service} {location} | {business} | {postcode}',
  '{service} in {location}, {area} | {business}',
  'Professional {service} {location} | Local {category} Experts',
  '{location} {service} - {business} | {area}',
  'Best {service} Near {location} | {business}',
  '{service} Services {location} {postcode} | {business}',
  '{area} {service} Specialists | {location} | {business}',
];

export function generateMetaTitle(location: Location, service: Service): string {
  const seed = `${location.slug}-${service.slug}-meta-title`;
  const template = selectFromArray(metaTitleTemplates, seed);

  return template
    .replace('{service}', service.name)
    .replace('{location}', location.name)
    .replace('{area}', location.area)
    .replace('{postcode}', location.postcode)
    .replace('{category}', service.category)
    .replace('{business}', siteConfig.businessName);
}

// ============================================================================
// META DESCRIPTION VARIATIONS
// Compelling meta descriptions with local signals
// ============================================================================

const metaDescriptionTemplates = [
  'Need {service} in {location}? {business} offers {price}. {usp}. Call {phone} for rapid response in {postcode}.',
  'Professional {service} serving {location} and {area}. {usp}. {warranty}. Book your appointment: {phone}.',
  'Looking for {service} near {location}? We\'re only {distance} miles away. {usp}. {warranty}. Call {phone}.',
  'Expert {service} in {location}, {postcode}. {usp}. Trusted by {area} residents. Free quotes: {phone}.',
  '{business}: Your local {service} specialists in {location}. {price}. {warranty}. Ring {phone} today.',
];

export function generateMetaDescription(location: Location, service: Service): string {
  const seed = `${location.slug}-${service.slug}-meta-desc`;
  const template = selectFromArray(metaDescriptionTemplates, seed);
  const distance = getDistanceFromHQ(location);
  const usp = selectFromArray(service.uspVariations, seed);

  return template
    .replace('{service}', service.name.toLowerCase())
    .replace('{location}', location.name)
    .replace('{area}', location.area)
    .replace('{postcode}', location.postcode)
    .replace('{business}', siteConfig.businessName)
    .replace('{phone}', siteConfig.phone)
    .replace('{price}', service.priceAnchor)
    .replace('{warranty}', service.warranty)
    .replace('{distance}', distance)
    .replace('{usp}', usp);
}

// ============================================================================
// SUBTITLE/INTRO VARIATIONS
// Hero section subtitles
// ============================================================================

const subtitleTemplates = [
  'The trusted {category} team for {area}. Based just {distance} miles away at {hq}.',
  'Your local {category} specialists, serving {location} and surrounding streets in {postcode}.',
  '{area}\'s premier {category} service. We\'re only {distance} miles from {location}.',
  'Professional {category} covering {location}, {postcode}. Fast response, quality work guaranteed.',
  'Expert {service} from {business}, serving {location} residents since 2010.',
];

export function generateSubtitle(location: Location, service: Service): string {
  const seed = `${location.slug}-${service.slug}-subtitle`;
  const template = selectFromArray(subtitleTemplates, seed);
  const distance = getDistanceFromHQ(location);

  return template
    .replace('{service}', service.name.toLowerCase())
    .replace('{category}', service.category)
    .replace('{location}', location.name)
    .replace('{area}', location.area)
    .replace('{postcode}', location.postcode)
    .replace('{distance}', distance)
    .replace('{hq}', siteConfig.address.street)
    .replace('{business}', siteConfig.businessName);
}

// ============================================================================
// INTRO PARAGRAPH VARIATIONS
// Service introduction with local context
// ============================================================================

const introTemplates = [
  '{service_intro} For residents of {location}, our team is just {distance} miles away, meaning we can respond quickly when you need us. {property_content}',
  'When you need {service} in {location}, you want a local team you can trust. {service_intro} We\'ve been serving {area} families for over a decade. {property_content}',
  '{property_content} {service_intro} Our {location} customers benefit from our nearby base at {hq} - just {distance} miles away for rapid response.',
  'Looking for reliable {service} near {location}? {service_intro} As {area} specialists, we understand the unique needs of properties in {postcode}. {property_content}',
];

export function generateIntro(location: Location, service: Service): string {
  const seed = `${location.slug}-${service.slug}-intro`;
  const template = selectFromArray(introTemplates, seed);
  const distance = getDistanceFromHQ(location);

  // Get property-specific content based on most common property type
  const primaryPropertyType = location.propertyType[0];
  const propertyContent = service.propertySpecificContent[primaryPropertyType] || '';

  return template
    .replace('{service}', service.name.toLowerCase())
    .replace('{service_intro}', service.intro)
    .replace('{location}', location.name)
    .replace('{area}', location.area)
    .replace('{postcode}', location.postcode)
    .replace('{distance}', distance)
    .replace('{hq}', siteConfig.address.street)
    .replace('{property_content}', propertyContent);
}

// ============================================================================
// CTA VARIATIONS
// Call-to-action text variations
// ============================================================================

const ctaHeadlineTemplates = [
  'Ready to get started on {location}?',
  'Need {service} in {location} today?',
  'Let\'s discuss your {service} project',
  'Get a free quote for {location}',
  'We\'re currently working near {postcode}',
  'Book your {location} appointment now',
];

const ctaSubtextTemplates = [
  'We can be with you in {location} within {response_time}. No call-out charge, no obligation.',
  'Our team is just {distance} miles from {location}. Call now for same-day availability.',
  'Join hundreds of satisfied {area} customers. Free quotes, competitive prices.',
  'Currently serving {postcode}. Book now for priority scheduling.',
];

export function generateCTA(location: Location, service: Service) {
  const seed = `${location.slug}-${service.slug}-cta`;
  const distance = getDistanceFromHQ(location);

  return {
    headline: selectFromArray(ctaHeadlineTemplates, seed)
      .replace('{service}', service.name.toLowerCase())
      .replace('{location}', location.name)
      .replace('{postcode}', location.postcode),
    subtext: selectFromArray(ctaSubtextTemplates, `${seed}-sub`)
      .replace('{location}', location.name)
      .replace('{area}', location.area)
      .replace('{postcode}', location.postcode)
      .replace('{distance}', distance)
      .replace('{response_time}', '2 hours'),
    buttonText: selectFromArray(service.ctaVariations, `${seed}-btn`),
    phoneNumber: siteConfig.phone,
  };
}

// ============================================================================
// NEARBY STREETS GENERATOR
// Generate links to nearby service pages
// ============================================================================

export function generateNearbyLinks(location: Location, service: Service): NearbyLink[] {
  const nearbyLocations = getNearbyLocations(location.slug, 6);

  return nearbyLocations.map(nearby => {
    const distance = calculateDistance(
      location.coordinates.lat,
      location.coordinates.lng,
      nearby.coordinates.lat,
      nearby.coordinates.lng
    );

    return {
      name: nearby.name,
      slug: `/local/${nearby.slug}/${service.slug}`,
      distance: `${distance.toFixed(1)} miles`,
    };
  });
}

// ============================================================================
// TESTIMONIAL GENERATOR
// Generate location-appropriate testimonials
// ============================================================================

const testimonialTemplates = [
  {
    text: 'Excellent {service} work on our {property_type}. The team was professional, tidy, and completed the job to a very high standard. Highly recommended for anyone in {area}.',
    rating: 5,
  },
  {
    text: 'Used {business} for {service} and couldn\'t be happier. They arrived on time, explained everything clearly, and the price was fair. Will definitely use again.',
    rating: 5,
  },
  {
    text: 'After several quotes, we chose {business} for our {service} project. Best decision we made - quality work, great communication, and they respected our {property_type}\'s character.',
    rating: 5,
  },
  {
    text: 'Fast response to our {service} emergency. The engineer was knowledgeable and fixed the problem quickly. Great to have a reliable local company in {postcode}.',
    rating: 5,
  },
  {
    text: 'Professional service from start to finish. The {service} work on our {property_type} was completed beautifully. The team took real pride in their work.',
    rating: 4,
  },
];

const firstNames = [
  'James', 'Sarah', 'Michael', 'Emma', 'David', 'Sophie', 'Robert', 'Charlotte',
  'William', 'Olivia', 'Thomas', 'Emily', 'Daniel', 'Isabella', 'Matthew', 'Grace',
  'Alexander', 'Amelia', 'Christopher', 'Victoria', 'Jonathan', 'Eleanor', 'Nicholas', 'Catherine',
];

const lastInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W'];

export function generateTestimonials(location: Location, service: Service, count: number = 3): Testimonial[] {
  const seed = `${location.slug}-${service.slug}-testimonials`;
  const selectedTemplates = selectMultipleFromArray(testimonialTemplates, count, seed);
  const propertyType = location.propertyType[0].replace(/-/g, ' ');

  return selectedTemplates.map((template, index) => {
    const nameSeed = `${seed}-name-${index}`;
    const firstName = selectFromArray(firstNames, nameSeed);
    const lastInitial = selectFromArray(lastInitials, `${nameSeed}-last`);

    const rng = seededRandom(`${seed}-date-${index}`);
    const monthsAgo = Math.floor(rng() * 12) + 1;
    const date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);

    return {
      name: `${firstName} ${lastInitial}.`,
      location: location.area,
      rating: template.rating,
      text: template.text
        .replace('{service}', service.name.toLowerCase())
        .replace('{business}', siteConfig.businessName)
        .replace('{property_type}', propertyType)
        .replace('{area}', location.area)
        .replace('{postcode}', location.postcode),
      service: service.name,
      date: date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      verified: true,
    };
  });
}

// ============================================================================
// FAQ GENERATOR
// Combine service FAQs with location-specific ones
// ============================================================================

const locationFAQs = [
  {
    question: 'Do you cover {location}?',
    answer: 'Yes, {location} is in our core service area. We\'re based at {hq}, just {distance} miles away, so we can respond quickly to calls in {postcode}.',
  },
  {
    question: 'How quickly can you reach {location}?',
    answer: 'From our base at {hq}, we can typically reach {location} within 30-45 minutes in normal traffic. For emergencies, we aim for a 2-hour response.',
  },
  {
    question: 'Do you have experience with properties in {area}?',
    answer: 'Absolutely. We\'ve worked on many {property_type} properties throughout {area} and understand the specific requirements of homes in this area.',
  },
];

export function generateFAQs(location: Location, service: Service): FAQ[] {
  const seed = `${location.slug}-${service.slug}-faqs`;
  const distance = getDistanceFromHQ(location);
  const propertyType = location.propertyType[0].replace(/-/g, ' ');

  // Get 2-3 service FAQs
  const serviceFAQs = selectMultipleFromArray(service.faqs, Math.min(3, service.faqs.length), seed);

  // Get 1-2 location FAQs
  const selectedLocationFAQs = selectMultipleFromArray(locationFAQs, 2, `${seed}-loc`);

  const processedLocationFAQs = selectedLocationFAQs.map(faq => ({
    question: faq.question
      .replace('{location}', location.name)
      .replace('{area}', location.area),
    answer: faq.answer
      .replace('{location}', location.name)
      .replace('{area}', location.area)
      .replace('{postcode}', location.postcode)
      .replace('{hq}', siteConfig.address.street)
      .replace('{distance}', distance)
      .replace('{property_type}', propertyType),
  }));

  return [...serviceFAQs, ...processedLocationFAQs];
}

// ============================================================================
// FULL PAGE CONTENT GENERATOR
// Generate all content for a location+service page
// ============================================================================

export function generatePageContent(location: Location, service: Service): PageContent {
  const distance = getDistanceFromHQ(location);
  const seed = `${location.slug}-${service.slug}`;

  return {
    meta: {
      title: generateMetaTitle(location, service),
      description: generateMetaDescription(location, service),
      keywords: [
        `${service.name.toLowerCase()} ${location.name}`,
        `${service.name.toLowerCase()} ${location.area}`,
        `${service.name.toLowerCase()} ${location.postcode}`,
        `${service.category} ${location.name}`,
        `local ${service.category} ${location.postcode}`,
      ],
      canonical: `/local/${location.slug}/${service.slug}`,
      ogImage: `/og/${location.slug}-${service.slug}.jpg`,
    },
    hero: {
      h1: generateH1(location, service),
      subtitle: generateSubtitle(location, service),
      trustBadges: service.certifications.slice(0, 3),
      ctaText: selectFromArray(service.ctaVariations, seed),
      ctaSecondary: `Call ${siteConfig.phone}`,
    },
    serviceDetail: {
      title: `Why Choose Us for ${service.name}?`,
      body: generateIntro(location, service),
      bulletPoints: service.benefits,
      processSteps: [
        { number: 1, title: 'Get in Touch', description: `Call us or request a quote online. We'll discuss your ${service.name.toLowerCase()} needs.`, icon: 'phone' },
        { number: 2, title: 'Free Assessment', description: `We'll survey your ${location.name} property and provide a detailed, no-obligation quote.`, icon: 'clipboard' },
        { number: 3, title: 'Expert Work', description: `Our certified team completes the work to the highest standards.`, icon: 'tool' },
        { number: 4, title: 'Quality Guarantee', description: `${service.warranty}. Your satisfaction is guaranteed.`, icon: 'shield' },
      ],
    },
    trustSignals: [
      { type: 'distance', name: `Only ${distance} miles away`, description: `We're local to ${location.name}`, icon: 'map-pin' },
      { type: 'certification', name: service.certifications[0] || 'Fully Certified', description: 'Industry accredited', icon: 'award' },
      { type: 'guarantee', name: service.warranty, description: 'Work guaranteed', icon: 'shield' },
      { type: 'insurance', name: 'Fully Insured', description: '£5m public liability', icon: 'check-circle' },
    ],
    testimonials: generateTestimonials(location, service, 3),
    faq: generateFAQs(location, service),
    cta: generateCTA(location, service),
    nearbyLinks: generateNearbyLinks(location, service),
    schema: generateSchemaMarkup(location, service),
  };
}

// ============================================================================
// SCHEMA MARKUP GENERATOR
// Generate structured data for SEO
// ============================================================================

export function generateSchemaMarkup(location: Location, service: Service) {
  const distance = getDistanceFromHQ(location);

  return {
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `https://hampsteadrenovations.co.uk/#business`,
      name: siteConfig.businessName,
      image: 'https://hampsteadrenovations.co.uk/logo.png',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: 'London',
        postalCode: siteConfig.address.postcode,
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.address.coordinates.lat,
        longitude: siteConfig.address.coordinates.lng,
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng,
        },
        geoRadius: '5000',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '17:00',
        },
      ],
      priceRange: '££-£££',
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.name} in ${location.name}`,
      description: service.fullDescription,
      provider: {
        '@type': 'LocalBusiness',
        name: siteConfig.businessName,
      },
      areaServed: {
        '@type': 'Place',
        name: `${location.name}, ${location.area}, ${location.postcode}`,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: service.name,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: service.priceRange.from,
              priceCurrency: 'GBP',
              minPrice: service.priceRange.from,
              maxPrice: service.priceRange.to,
            },
          },
        ],
      },
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://hampsteadrenovations.co.uk',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: location.area,
          item: `https://hampsteadrenovations.co.uk/areas/${location.area.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: location.name,
          item: `https://hampsteadrenovations.co.uk/local/${location.slug}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: service.name,
          item: `https://hampsteadrenovations.co.uk/local/${location.slug}/${service.slug}`,
        },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: generateFAQs(location, service).map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  };
}
