// ============================================================================
// PSEO ENGINE - TYPE DEFINITIONS
// Comprehensive type system for programmatic SEO
// ============================================================================

// Location Types
export interface Location {
  slug: string;
  name: string;
  area: string;
  borough: string;
  postcode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  propertyType: PropertyType[];
  avgPropertyValue: string;
  demographics: Demographics;
  nearbyStreets: string[];
  landmarks: string[];
  transportLinks: string[];
}

export type PropertyType =
  | 'victorian-terrace'
  | 'edwardian-house'
  | 'georgian-townhouse'
  | 'period-conversion'
  | 'modern-apartment'
  | 'mansion-block'
  | 'detached-villa'
  | 'semi-detached'
  | 'cottage'
  | 'mews-house'
  | 'regency-villa'
  | 'arts-and-crafts';

export interface Demographics {
  affluenceLevel: 'ultra-prime' | 'prime' | 'affluent' | 'professional';
  primaryOccupants: string[];
  commonConcerns: string[];
}

// Service Types
export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  subcategory?: string;

  // SEO Content
  intro: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];

  // Pricing
  priceRange: {
    from: number;
    to: number;
    unit: 'fixed' | 'per-hour' | 'per-metre' | 'per-unit' | 'quote';
  };
  priceAnchor: string;

  // Technical Details
  duration: string;
  warranty: string;
  certifications: string[];

  // Content Variations
  uspVariations: string[];
  ctaVariations: string[];

  // Related Services
  relatedServices: string[];
  complementaryServices: string[];

  // FAQ Items
  faqs: FAQ[];

  // Property Type Specific Content
  propertySpecificContent: Partial<Record<PropertyType, string>>;
}

export type ServiceCategory =
  | 'plumbing'
  | 'heating'
  | 'electrical'
  | 'carpentry'
  | 'roofing'
  | 'decorating'
  | 'building'
  | 'restoration'
  | 'security'
  | 'smart-home'
  | 'outdoor'
  | 'emergency';

export interface FAQ {
  question: string;
  answer: string;
}

// Content Generation Types
export interface PageContent {
  meta: MetaContent;
  hero: HeroContent;
  serviceDetail: ServiceDetailContent;
  trustSignals: TrustSignal[];
  testimonials: Testimonial[];
  faq: FAQ[];
  cta: CTAContent;
  nearbyLinks: NearbyLink[];
  schema: SchemaMarkup;
}

export interface MetaContent {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
}

export interface HeroContent {
  h1: string;
  subtitle: string;
  trustBadges: string[];
  ctaText: string;
  ctaSecondary: string;
}

export interface ServiceDetailContent {
  title: string;
  body: string;
  bulletPoints: string[];
  processSteps: ProcessStep[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustSignal {
  type: 'certification' | 'award' | 'guarantee' | 'insurance' | 'membership' | 'distance';
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
}

export interface CTAContent {
  headline: string;
  subtext: string;
  buttonText: string;
  urgencyText?: string;
  phoneNumber: string;
}

export interface NearbyLink {
  name: string;
  slug: string;
  distance: string;
}

export interface SchemaMarkup {
  localBusiness: object;
  service: object;
  breadcrumb: object;
  faq: object;
}

// Spintax/Content Variation Types
export interface ContentVariation {
  id: string;
  weight: number;
  content: string;
}

export interface SpintaxTemplate {
  template: string;
  variations: Record<string, ContentVariation[]>;
}

// Analytics Types
export interface PageAnalytics {
  pageViews: number;
  uniqueVisitors: number;
  avgTimeOnPage: number;
  bounceRate: number;
  conversions: number;
  topKeywords: string[];
}

// Configuration Types
export interface SiteConfig {
  businessName: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  businessHours: {
    weekday: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
  serviceArea: {
    primary: string[];
    secondary: string[];
    radius: number;
  };
}
