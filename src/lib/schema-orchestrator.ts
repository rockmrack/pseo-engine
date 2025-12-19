// ============================================================================
// PSEO ENGINE - SCHEMA ORCHESTRATOR
// 1000x SEO Enhancement: Centralized schema management with validation,
// entity relationships, rich snippet optimization, and automatic linking
// ============================================================================

import { BASE_URL, siteConfig } from './config';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type SchemaType = 
  | 'Organization'
  | 'LocalBusiness'
  | 'Service'
  | 'Product'
  | 'WebPage'
  | 'WebSite'
  | 'FAQPage'
  | 'HowTo'
  | 'BreadcrumbList'
  | 'Article'
  | 'BlogPosting'
  | 'Review'
  | 'AggregateRating'
  | 'Offer'
  | 'PriceSpecification'
  | 'Place'
  | 'GeoCoordinates'
  | 'PostalAddress'
  | 'OpeningHoursSpecification'
  | 'ContactPoint'
  | 'Person'
  | 'ImageObject'
  | 'VideoObject';

export interface SchemaEntity {
  '@type': SchemaType;
  '@id': string;
  [key: string]: unknown;
}

export interface SchemaValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
  priceRange?: string;
  category?: string;
  image?: string;
}

export interface LocalBusinessSchemaData {
  name: string;
  description: string;
  url: string;
  phone: string;
  email?: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours?: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
  image?: string;
  sameAs?: string[];
  areaServed?: string[];
}

export interface ArticleSchemaData {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  keywords?: string[];
}

export interface ReviewSchemaData {
  author: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  itemReviewed: {
    type: 'LocalBusiness' | 'Service' | 'Product';
    name: string;
  };
}

// ============================================================================
// SCHEMA VALIDATION
// ============================================================================

class SchemaValidator {
  private requiredFields: Record<string, string[]> = {
    Organization: ['name', '@id'],
    LocalBusiness: ['name', 'address', '@id'],
    Service: ['name', 'provider', '@id'],
    FAQPage: ['mainEntity'],
    BreadcrumbList: ['itemListElement'],
    Article: ['headline', 'author', 'datePublished'],
    Review: ['author', 'reviewRating', 'itemReviewed'],
    AggregateRating: ['ratingValue', 'reviewCount'],
  };

  validate(schema: Record<string, unknown>): SchemaValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check @context
    if (schema['@context'] !== 'https://schema.org') {
      errors.push('Missing or invalid @context. Expected "https://schema.org"');
    }

    // Check @type
    const type = schema['@type'] as string;
    if (!type) {
      errors.push('Missing @type');
    }

    // Check required fields
    const required = this.requiredFields[type] || [];
    for (const field of required) {
      if (!(field in schema)) {
        errors.push(`Missing required field: ${field}`);
      }
    }

    // Check @id format
    if ('@id' in schema) {
      const id = schema['@id'] as string;
      if (!id.startsWith('http')) {
        warnings.push('@id should be a full URL');
      }
    }

    // Check URL fields
    const urlFields = ['url', 'image', 'logo', 'sameAs'];
    for (const field of urlFields) {
      if (field in schema) {
        const value = schema[field];
        if (typeof value === 'string' && !value.startsWith('http')) {
          warnings.push(`${field} should be a full URL`);
        }
      }
    }

    // Validate nested schemas
    for (const [key, value] of Object.entries(schema)) {
      if (value && typeof value === 'object' && '@type' in (value as Record<string, unknown>)) {
        const nestedResult = this.validate(value as Record<string, unknown>);
        errors.push(...nestedResult.errors.map(e => `${key}: ${e}`));
        warnings.push(...nestedResult.warnings.map(w => `${key}: ${w}`));
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    };
  }
}

// ============================================================================
// SCHEMA BUILDER
// ============================================================================

class SchemaBuilder {
  private entities: Map<string, SchemaEntity> = new Map();

  /**
   * Create organization schema
   */
  createOrganization(data: LocalBusinessSchemaData): SchemaEntity {
    const id = `${BASE_URL}/#organization`;
    
    const schema: SchemaEntity = {
      '@type': 'Organization',
      '@id': id,
      name: data.name,
      url: data.url,
      logo: {
        '@type': 'ImageObject',
        '@id': `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.phone,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.street,
        addressLocality: data.address.city,
        postalCode: data.address.postcode,
        addressCountry: data.address.country || 'GB',
      },
    };

    if (data.sameAs) {
      schema.sameAs = data.sameAs;
    }

    if (data.email) {
      schema.email = data.email;
    }

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create local business schema
   */
  createLocalBusiness(data: LocalBusinessSchemaData): SchemaEntity {
    const id = `${BASE_URL}/#localbusiness`;
    
    const schema: SchemaEntity = {
      '@type': 'LocalBusiness',
      '@id': id,
      name: data.name,
      description: data.description,
      url: data.url,
      telephone: data.phone,
      priceRange: data.priceRange || '££-£££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.street,
        addressLocality: data.address.city,
        postalCode: data.address.postcode,
        addressCountry: data.address.country || 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.coordinates.lat,
        longitude: data.coordinates.lng,
      },
      image: data.image || `${BASE_URL}/og-image.jpg`,
    };

    if (data.openingHours) {
      schema.openingHoursSpecification = data.openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes,
      }));
    }

    if (data.areaServed) {
      schema.areaServed = data.areaServed.map(area => ({
        '@type': 'Place',
        name: area,
      }));
    }

    if (data.sameAs) {
      schema.sameAs = data.sameAs;
    }

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create service schema
   */
  createService(data: ServiceSchemaData): SchemaEntity {
    const slug = data.url.split('/').pop() || 'service';
    const id = `${BASE_URL}/#service-${slug}`;
    
    const schema: SchemaEntity = {
      '@type': 'Service',
      '@id': id,
      name: data.name,
      description: data.description,
      url: data.url,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
      },
    };

    if (data.areaServed) {
      schema.areaServed = data.areaServed.map(area => ({
        '@type': 'Place',
        name: area,
      }));
    }

    if (data.priceRange) {
      schema.offers = {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'GBP',
          price: data.priceRange,
        },
      };
    }

    if (data.category) {
      schema.serviceType = data.category;
    }

    if (data.image) {
      schema.image = data.image;
    }

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create FAQ schema
   */
  createFAQPage(faqs: FAQItem[], pageUrl: string): SchemaEntity {
    const id = `${pageUrl}#faq`;
    
    const schema: SchemaEntity = {
      '@type': 'FAQPage',
      '@id': id,
      mainEntity: faqs.map((faq, index) => ({
        '@type': 'Question',
        '@id': `${pageUrl}#faq-${index}`,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create breadcrumb schema
   */
  createBreadcrumbList(items: BreadcrumbItem[], pageUrl: string): SchemaEntity {
    const id = `${pageUrl}#breadcrumb`;
    
    const schema: SchemaEntity = {
      '@type': 'BreadcrumbList',
      '@id': id,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
      })),
    };

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create article schema
   */
  createArticle(data: ArticleSchemaData): SchemaEntity {
    const id = `${data.url}#article`;
    
    const schema: SchemaEntity = {
      '@type': 'Article',
      '@id': id,
      headline: data.headline,
      description: data.description,
      url: data.url,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
      },
      author: data.author ? {
        '@type': 'Person',
        name: data.author.name,
        url: data.author.url,
      } : {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': data.url,
      },
    };

    if (data.image) {
      schema.image = {
        '@type': 'ImageObject',
        url: data.image,
      };
    }

    if (data.keywords) {
      schema.keywords = data.keywords.join(', ');
    }

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create aggregate rating schema
   */
  createAggregateRating(
    ratingValue: number,
    reviewCount: number,
    itemReviewed?: { type: string; name: string }
  ): SchemaEntity {
    const id = `${BASE_URL}/#aggregaterating`;
    
    const schema: SchemaEntity = {
      '@type': 'AggregateRating',
      '@id': id,
      ratingValue: ratingValue.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: reviewCount,
      reviewCount: reviewCount,
    };

    if (itemReviewed) {
      schema.itemReviewed = {
        '@type': itemReviewed.type,
        name: itemReviewed.name,
      };
    }

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create review schema
   */
  createReview(data: ReviewSchemaData): SchemaEntity {
    const id = `${BASE_URL}/#review-${Date.now()}`;
    
    const schema: SchemaEntity = {
      '@type': 'Review',
      '@id': id,
      author: {
        '@type': 'Person',
        name: data.author,
      },
      datePublished: data.datePublished,
      reviewBody: data.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: data.ratingValue,
        bestRating: data.bestRating || 5,
        worstRating: 1,
      },
      itemReviewed: {
        '@type': data.itemReviewed.type,
        name: data.itemReviewed.name,
      },
    };

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create web page schema
   */
  createWebPage(data: {
    url: string;
    name: string;
    description: string;
    isPartOf?: string;
    breadcrumb?: BreadcrumbItem[];
  }): SchemaEntity {
    const id = data.url;
    
    const schema: SchemaEntity = {
      '@type': 'WebPage',
      '@id': id,
      url: data.url,
      name: data.name,
      description: data.description,
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
      },
      about: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
      },
    };

    if (data.breadcrumb) {
      schema.breadcrumb = this.createBreadcrumbList(data.breadcrumb, data.url);
    }

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Create website schema with search action
   */
  createWebSite(): SchemaEntity {
    const id = `${BASE_URL}/#website`;
    
    const schema: SchemaEntity = {
      '@type': 'WebSite',
      '@id': id,
      url: BASE_URL,
      name: siteConfig.businessName,
      description: `Premium home renovation services in North London`,
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    this.entities.set(id, schema);
    return schema;
  }

  /**
   * Get all entities as JSON-LD graph
   */
  toJSONLDGraph(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@graph': Array.from(this.entities.values()),
    };
  }

  /**
   * Get single entity as JSON-LD
   */
  toJSONLD(entity: SchemaEntity): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      ...entity,
    };
  }

  /**
   * Clear all entities
   */
  clear(): void {
    this.entities.clear();
  }

  /**
   * Get entity by ID
   */
  getEntity(id: string): SchemaEntity | undefined {
    return this.entities.get(id);
  }
}

// ============================================================================
// SCHEMA ORCHESTRATOR
// Main class that coordinates all schema generation
// ============================================================================

export class SchemaOrchestrator {
  private builder: SchemaBuilder;
  private validator: SchemaValidator;

  constructor() {
    this.builder = new SchemaBuilder();
    this.validator = new SchemaValidator();
  }

  /**
   * Generate complete schema for a local service page
   */
  generateLocalServicePageSchema(params: {
    locationName: string;
    locationSlug: string;
    serviceName: string;
    serviceSlug: string;
    serviceDescription: string;
    priceRange?: string;
    faqs?: FAQItem[];
    reviews?: ReviewSchemaData[];
    aggregateRating?: { value: number; count: number };
  }): string {
    this.builder.clear();

    const pageUrl = `${BASE_URL}/local/${params.locationSlug}/${params.serviceSlug}`;

    // Organization
    this.builder.createOrganization({
      name: siteConfig.businessName,
      description: `${params.serviceName} services in ${params.locationName}`,
      url: BASE_URL,
      phone: siteConfig.phone,
      email: siteConfig.email,
      address: siteConfig.address,
      coordinates: siteConfig.address.coordinates,
      sameAs: Object.values(siteConfig.socialLinks).filter(Boolean) as string[],
    });

    // Local Business
    this.builder.createLocalBusiness({
      name: siteConfig.businessName,
      description: `Expert ${params.serviceName.toLowerCase()} services in ${params.locationName}`,
      url: BASE_URL,
      phone: siteConfig.phone,
      email: siteConfig.email,
      address: siteConfig.address,
      coordinates: siteConfig.address.coordinates,
      priceRange: params.priceRange || '££-£££',
      openingHours: [
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
        { dayOfWeek: ['Saturday'], opens: '08:00', closes: '17:00' },
      ],
      areaServed: [params.locationName, ...siteConfig.serviceArea.primary],
      sameAs: Object.values(siteConfig.socialLinks).filter(Boolean) as string[],
    });

    // Service
    this.builder.createService({
      name: params.serviceName,
      description: params.serviceDescription,
      url: pageUrl,
      areaServed: [params.locationName],
      priceRange: params.priceRange,
    });

    // Breadcrumbs
    this.builder.createBreadcrumbList([
      { name: 'Home', url: '/' },
      { name: params.locationName, url: `/local/${params.locationSlug}` },
      { name: params.serviceName, url: pageUrl },
    ], pageUrl);

    // WebPage
    this.builder.createWebPage({
      url: pageUrl,
      name: `${params.serviceName} in ${params.locationName}`,
      description: params.serviceDescription,
    });

    // FAQs
    if (params.faqs && params.faqs.length > 0) {
      this.builder.createFAQPage(params.faqs, pageUrl);
    }

    // Aggregate Rating
    if (params.aggregateRating) {
      this.builder.createAggregateRating(
        params.aggregateRating.value,
        params.aggregateRating.count,
        { type: 'LocalBusiness', name: siteConfig.businessName }
      );
    }

    // Individual Reviews
    if (params.reviews) {
      for (const review of params.reviews) {
        this.builder.createReview(review);
      }
    }

    // WebSite
    this.builder.createWebSite();

    const schema = this.builder.toJSONLDGraph();
    
    return JSON.stringify(schema);
  }

  /**
   * Generate schema for blog post
   */
  generateBlogPostSchema(params: ArticleSchemaData): string {
    this.builder.clear();

    this.builder.createOrganization({
      name: siteConfig.businessName,
      description: 'Home renovation experts in North London',
      url: BASE_URL,
      phone: siteConfig.phone,
      address: siteConfig.address,
      coordinates: siteConfig.address.coordinates,
    });

    this.builder.createArticle(params);

    this.builder.createBreadcrumbList([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: params.headline, url: params.url },
    ], params.url);

    this.builder.createWebSite();

    return JSON.stringify(this.builder.toJSONLDGraph());
  }

  /**
   * Generate FAQ-only schema
   */
  generateFAQSchema(faqs: FAQItem[], pageUrl: string): string {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    return JSON.stringify(schema);
  }

  /**
   * Generate breadcrumb-only schema
   */
  generateBreadcrumbSchema(items: BreadcrumbItem[]): string {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
      })),
    };

    return JSON.stringify(schema);
  }

  /**
   * Validate a schema
   */
  validate(schemaJson: string): SchemaValidationResult {
    try {
      const schema = JSON.parse(schemaJson);
      return this.validator.validate(schema);
    } catch (e) {
      return {
        valid: false,
        errors: [`Invalid JSON: ${e instanceof Error ? e.message : 'Unknown error'}`],
        warnings: [],
      };
    }
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const schemaOrchestrator = new SchemaOrchestrator();

// ============================================================================
// REACT COMPONENT HELPERS
// ============================================================================

/**
 * Generate JSON-LD script tag content
 */
export function generateJSONLDScript(schema: string): string {
  return `<script type="application/ld+json">${schema}</script>`;
}
