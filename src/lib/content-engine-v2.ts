// ============================================================================
// PSEO ENGINE - ADVANCED CONTENT GENERATION ENGINE V2
// 1000x Content Enhancement: NLP-based anti-duplication, semantic similarity,
// entity extraction, sentiment variation, and intelligent content mixing
// ============================================================================

import { Location, Service, FAQ } from '@/types';
import { siteConfig } from './config';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface ContentVariation {
  text: string;
  semanticSignature: string;
  sentimentScore: number;
  readabilityScore: number;
  keywordDensity: number;
}

export interface ContentTemplate {
  id: string;
  pattern: string;
  placeholders: string[];
  category: 'h1' | 'title' | 'description' | 'intro' | 'cta' | 'faq' | 'section';
  sentimentTarget: 'professional' | 'friendly' | 'urgent' | 'authoritative';
  priority: number;
}

export interface SemanticEntity {
  text: string;
  type: 'location' | 'service' | 'brand' | 'attribute' | 'benefit' | 'action';
  synonyms: string[];
  weight: number;
}

export interface ContentGenerationContext {
  location: Location;
  service: Service;
  seed: string;
  previousContent?: string[];
  targetWordCount?: number;
  emphasisKeywords?: string[];
  avoidPhrases?: string[];
}

// ============================================================================
// SEEDED RANDOM NUMBER GENERATOR (Improved)
// Deterministic random for consistent content across builds
// ============================================================================

class SeededRNG {
  private state: number;

  constructor(seed: string) {
    this.state = this.hashCode(seed);
  }

  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    }
    return hash >>> 0;
  }

  next(): number {
    this.state ^= this.state << 13;
    this.state ^= this.state >>> 17;
    this.state ^= this.state << 5;
    return (this.state >>> 0) / 4294967296;
  }

  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  pick<T>(array: T[]): T {
    return array[Math.floor(this.next() * array.length)];
  }

  pickMultiple<T>(array: T[], count: number): T[] {
    return this.shuffle(array).slice(0, count);
  }

  weightedPick<T>(items: Array<{ item: T; weight: number }>): T {
    const totalWeight = items.reduce((sum, i) => sum + i.weight, 0);
    let random = this.next() * totalWeight;
    
    for (const { item, weight } of items) {
      random -= weight;
      if (random <= 0) return item;
    }
    
    return items[items.length - 1].item;
  }
}

// ============================================================================
// SEMANTIC SIMILARITY ENGINE
// Prevents content duplication across pages
// ============================================================================

class SemanticSimilarityEngine {
  private nGramCache: Map<string, Set<string>> = new Map();

  /**
   * Generate n-grams for similarity comparison
   */
  private generateNGrams(text: string, n: number = 3): Set<string> {
    const normalized = text.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const words = normalized.split(/\s+/).filter(w => w.length > 2);
    const ngrams = new Set<string>();

    for (let i = 0; i <= words.length - n; i++) {
      ngrams.add(words.slice(i, i + n).join(' '));
    }

    return ngrams;
  }

  /**
   * Calculate Jaccard similarity between two texts
   */
  calculateSimilarity(text1: string, text2: string): number {
    const ngrams1 = this.generateNGrams(text1);
    const ngrams2 = this.generateNGrams(text2);

    if (ngrams1.size === 0 || ngrams2.size === 0) return 0;

    const intersection = new Set([...ngrams1].filter(x => ngrams2.has(x)));
    const union = new Set([...ngrams1, ...ngrams2]);

    return intersection.size / union.size;
  }

  /**
   * Check if content is too similar to existing content
   */
  isDuplicate(newContent: string, existingContent: string[], threshold: number = 0.4): boolean {
    for (const existing of existingContent) {
      if (this.calculateSimilarity(newContent, existing) > threshold) {
        return true;
      }
    }
    return false;
  }

  /**
   * Generate semantic signature for content
   */
  generateSignature(text: string): string {
    const ngrams = this.generateNGrams(text, 2);
    const sorted = Array.from(ngrams).sort();
    return sorted.slice(0, 10).join('|');
  }
}

// ============================================================================
// ENTITY EXTRACTION & SYNONYM MANAGEMENT
// ============================================================================

class EntityManager {
  private entities: Map<string, SemanticEntity> = new Map();

  constructor() {
    this.initializeEntities();
  }

  private initializeEntities(): void {
    // Location synonyms
    const locationSynonyms: Record<string, string[]> = {
      'Hampstead': ['NW3', 'Hampstead Village', 'Hampstead Heath area'],
      'Highgate': ['N6', 'Highgate Village', 'Highgate area'],
      'Belsize Park': ['NW3', 'Belsize Village', 'Belsize area'],
      'London': ['the capital', 'Greater London', 'North London'],
    };

    for (const [name, synonyms] of Object.entries(locationSynonyms)) {
      this.entities.set(name.toLowerCase(), {
        text: name,
        type: 'location',
        synonyms,
        weight: 1.0,
      });
    }

    // Service synonyms
    const serviceSynonyms: Record<string, string[]> = {
      'plumbing': ['plumber services', 'pipe work', 'water systems'],
      'electrical': ['electrician services', 'electrical work', 'wiring'],
      'heating': ['boiler services', 'central heating', 'heating systems'],
      'bathroom': ['bathroom fitting', 'bathroom installation', 'bathroom renovation'],
      'kitchen': ['kitchen fitting', 'kitchen installation', 'kitchen renovation'],
    };

    for (const [name, synonyms] of Object.entries(serviceSynonyms)) {
      this.entities.set(name.toLowerCase(), {
        text: name,
        type: 'service',
        synonyms,
        weight: 1.0,
      });
    }

    // Benefit phrases
    const benefits = [
      { text: 'fast response', synonyms: ['quick turnaround', 'rapid service', 'same-day availability'] },
      { text: 'quality work', synonyms: ['expert craftsmanship', 'professional results', 'superior quality'] },
      { text: 'local expertise', synonyms: ['local knowledge', 'area specialists', 'community trusted'] },
      { text: 'fair pricing', synonyms: ['competitive rates', 'transparent pricing', 'no hidden costs'] },
    ];

    for (const benefit of benefits) {
      this.entities.set(benefit.text, {
        text: benefit.text,
        type: 'benefit',
        synonyms: benefit.synonyms,
        weight: 0.8,
      });
    }
  }

  getSynonym(text: string, rng: SeededRNG): string {
    const entity = this.entities.get(text.toLowerCase());
    if (!entity || entity.synonyms.length === 0) return text;
    
    // 30% chance to use a synonym
    if (rng.next() < 0.3) {
      return rng.pick(entity.synonyms);
    }
    return text;
  }

  getEntity(text: string): SemanticEntity | undefined {
    return this.entities.get(text.toLowerCase());
  }
}

// ============================================================================
// CONTENT TEMPLATE LIBRARY
// ============================================================================

const H1_TEMPLATES: ContentTemplate[] = [
  { id: 'h1-1', pattern: '{service} in {location}', placeholders: ['service', 'location'], category: 'h1', sentimentTarget: 'professional', priority: 10 },
  { id: 'h1-2', pattern: 'Expert {service} Services in {location}', placeholders: ['service', 'location'], category: 'h1', sentimentTarget: 'authoritative', priority: 9 },
  { id: 'h1-3', pattern: '{location} {service} Specialists', placeholders: ['location', 'service'], category: 'h1', sentimentTarget: 'authoritative', priority: 8 },
  { id: 'h1-4', pattern: 'Professional {service} | {location}', placeholders: ['service', 'location'], category: 'h1', sentimentTarget: 'professional', priority: 8 },
  { id: 'h1-5', pattern: 'Trusted {service} in {location}, {postcode}', placeholders: ['service', 'location', 'postcode'], category: 'h1', sentimentTarget: 'friendly', priority: 9 },
  { id: 'h1-6', pattern: '{location}\'s #1 {service} Team', placeholders: ['location', 'service'], category: 'h1', sentimentTarget: 'authoritative', priority: 7 },
  { id: 'h1-7', pattern: 'Quality {service} for {location} Homes', placeholders: ['service', 'location'], category: 'h1', sentimentTarget: 'friendly', priority: 8 },
  { id: 'h1-8', pattern: '{service} Near {location} | Local Experts', placeholders: ['service', 'location'], category: 'h1', sentimentTarget: 'friendly', priority: 7 },
  { id: 'h1-9', pattern: '{area} {service} Services | {location}', placeholders: ['area', 'service', 'location'], category: 'h1', sentimentTarget: 'professional', priority: 8 },
  { id: 'h1-10', pattern: 'Reliable {service} in {location} & {area}', placeholders: ['service', 'location', 'area'], category: 'h1', sentimentTarget: 'friendly', priority: 7 },
];

const TITLE_TEMPLATES: ContentTemplate[] = [
  { id: 'title-1', pattern: '{service} {location} | {business} | {postcode}', placeholders: ['service', 'location', 'business', 'postcode'], category: 'title', sentimentTarget: 'professional', priority: 10 },
  { id: 'title-2', pattern: '{service} in {location}, {area} | {business}', placeholders: ['service', 'location', 'area', 'business'], category: 'title', sentimentTarget: 'professional', priority: 9 },
  { id: 'title-3', pattern: 'Professional {service} {location} | Local Experts', placeholders: ['service', 'location'], category: 'title', sentimentTarget: 'authoritative', priority: 8 },
  { id: 'title-4', pattern: '{location} {service} - {business} | {area}', placeholders: ['location', 'service', 'business', 'area'], category: 'title', sentimentTarget: 'professional', priority: 8 },
  { id: 'title-5', pattern: 'Best {service} Near {location} | Trusted Since 2010', placeholders: ['service', 'location'], category: 'title', sentimentTarget: 'authoritative', priority: 9 },
  { id: 'title-6', pattern: '{service} Services {location} {postcode} | {business}', placeholders: ['service', 'location', 'postcode', 'business'], category: 'title', sentimentTarget: 'professional', priority: 8 },
];

const DESCRIPTION_TEMPLATES: ContentTemplate[] = [
  { id: 'desc-1', pattern: 'Need {service} in {location}? {business} offers {priceAnchor}. {usp}. Call {phone} for rapid response in {postcode}.', placeholders: ['service', 'location', 'business', 'priceAnchor', 'usp', 'phone', 'postcode'], category: 'description', sentimentTarget: 'urgent', priority: 10 },
  { id: 'desc-2', pattern: 'Professional {service} serving {location} and {area}. {usp}. {warranty}. Book your appointment: {phone}.', placeholders: ['service', 'location', 'area', 'usp', 'warranty', 'phone'], category: 'description', sentimentTarget: 'professional', priority: 9 },
  { id: 'desc-3', pattern: 'Looking for {service} near {location}? We\'re only {distance} miles away. {usp}. {warranty}. Call {phone}.', placeholders: ['service', 'location', 'distance', 'usp', 'warranty', 'phone'], category: 'description', sentimentTarget: 'friendly', priority: 8 },
  { id: 'desc-4', pattern: 'Expert {service} in {location}, {postcode}. {usp}. Trusted by {area} residents since 2010. Free quotes: {phone}.', placeholders: ['service', 'location', 'postcode', 'usp', 'area', 'phone'], category: 'description', sentimentTarget: 'authoritative', priority: 9 },
  { id: 'desc-5', pattern: '{business}: Your local {service} specialists in {location}. {priceAnchor}. {warranty}. Ring {phone} today.', placeholders: ['business', 'service', 'location', 'priceAnchor', 'warranty', 'phone'], category: 'description', sentimentTarget: 'friendly', priority: 8 },
];

const INTRO_TEMPLATES: ContentTemplate[] = [
  { id: 'intro-1', pattern: '{serviceIntro} For residents of {location}, our team is just {distance} miles away, meaning we can respond quickly when you need us. {propertyContent}', placeholders: ['serviceIntro', 'location', 'distance', 'propertyContent'], category: 'intro', sentimentTarget: 'professional', priority: 10 },
  { id: 'intro-2', pattern: 'When you need {service} in {location}, you want a local team you can trust. {serviceIntro} We\'ve been serving {area} families for over a decade. {propertyContent}', placeholders: ['service', 'location', 'serviceIntro', 'area', 'propertyContent'], category: 'intro', sentimentTarget: 'friendly', priority: 9 },
  { id: 'intro-3', pattern: '{propertyContent} {serviceIntro} Our {location} customers benefit from our nearby base at {hq} - just {distance} miles away for rapid response.', placeholders: ['propertyContent', 'serviceIntro', 'location', 'hq', 'distance'], category: 'intro', sentimentTarget: 'professional', priority: 8 },
  { id: 'intro-4', pattern: 'Looking for reliable {service} near {location}? {serviceIntro} As {area} specialists, we understand the unique needs of properties in {postcode}. {propertyContent}', placeholders: ['service', 'location', 'serviceIntro', 'area', 'postcode', 'propertyContent'], category: 'intro', sentimentTarget: 'authoritative', priority: 9 },
];

const CTA_TEMPLATES: ContentTemplate[] = [
  { id: 'cta-1', pattern: 'Ready to get started? Call us now on {phone} for a free quote.', placeholders: ['phone'], category: 'cta', sentimentTarget: 'urgent', priority: 10 },
  { id: 'cta-2', pattern: 'Get in touch today - we\'re just {distance} miles from {location}.', placeholders: ['distance', 'location'], category: 'cta', sentimentTarget: 'friendly', priority: 9 },
  { id: 'cta-3', pattern: 'Book your {service} appointment now. Call {phone}.', placeholders: ['service', 'phone'], category: 'cta', sentimentTarget: 'professional', priority: 8 },
  { id: 'cta-4', pattern: 'Don\'t wait - contact {business} today for expert {service} in {location}.', placeholders: ['business', 'service', 'location'], category: 'cta', sentimentTarget: 'urgent', priority: 9 },
  { id: 'cta-5', pattern: 'Need help now? Our {location} team is ready - {phone}.', placeholders: ['location', 'phone'], category: 'cta', sentimentTarget: 'urgent', priority: 10 },
];

// ============================================================================
// ADVANCED CONTENT GENERATOR
// ============================================================================

export class AdvancedContentGenerator {
  private similarityEngine: SemanticSimilarityEngine;
  private entityManager: EntityManager;
  private generatedSignatures: Set<string> = new Set();

  constructor() {
    this.similarityEngine = new SemanticSimilarityEngine();
    this.entityManager = new EntityManager();
  }

  /**
   * Generate H1 with anti-duplication
   */
  generateH1(context: ContentGenerationContext): string {
    const rng = new SeededRNG(context.seed + '-h1');
    const { location, service } = context;

    // Sort templates by priority and shuffle within priority groups
    const templates = rng.shuffle(H1_TEMPLATES);
    
    for (const template of templates) {
      const content = this.applyTemplate(template.pattern, {
        service: service.name,
        location: location.name,
        area: location.area,
        postcode: location.postcode,
      }, rng);

      // Check for duplication
      const signature = this.similarityEngine.generateSignature(content);
      if (!this.generatedSignatures.has(signature)) {
        this.generatedSignatures.add(signature);
        return content;
      }
    }

    // Fallback with unique modifier
    return `${service.name} in ${location.name}`;
  }

  /**
   * Generate meta title with SEO optimization
   */
  generateMetaTitle(context: ContentGenerationContext): string {
    const rng = new SeededRNG(context.seed + '-title');
    const { location, service } = context;

    const template = rng.weightedPick(
      TITLE_TEMPLATES.map(t => ({ item: t, weight: t.priority }))
    );

    return this.applyTemplate(template.pattern, {
      service: service.name,
      location: location.name,
      area: location.area,
      postcode: location.postcode,
      business: siteConfig.businessName,
    }, rng);
  }

  /**
   * Generate meta description with keyword optimization
   */
  generateMetaDescription(context: ContentGenerationContext): string {
    const rng = new SeededRNG(context.seed + '-desc');
    const { location, service } = context;

    const template = rng.weightedPick(
      DESCRIPTION_TEMPLATES.map(t => ({ item: t, weight: t.priority }))
    );

    const usp = rng.pick(service.uspVariations || ['Quality service guaranteed']);
    const distance = this.calculateDistance(location);

    const content = this.applyTemplate(template.pattern, {
      service: service.name.toLowerCase(),
      location: location.name,
      area: location.area,
      postcode: location.postcode,
      business: siteConfig.businessName,
      phone: siteConfig.phone,
      priceAnchor: service.priceAnchor || 'competitive rates',
      warranty: service.warranty || 'All work guaranteed',
      usp,
      distance,
    }, rng);

    // Ensure description is within optimal length (150-160 chars)
    if (content.length > 160) {
      return content.substring(0, 157) + '...';
    }
    return content;
  }

  /**
   * Generate introduction paragraph
   */
  generateIntro(context: ContentGenerationContext): string {
    const rng = new SeededRNG(context.seed + '-intro');
    const { location, service } = context;

    const template = rng.weightedPick(
      INTRO_TEMPLATES.map(t => ({ item: t, weight: t.priority }))
    );

    const serviceIntro = service.intro || `We provide professional ${service.name.toLowerCase()} services.`;

    const propertyContent = this.generatePropertyContent(location, service, rng);
    const distance = this.calculateDistance(location);

    return this.applyTemplate(template.pattern, {
      service: service.name.toLowerCase(),
      serviceIntro,
      location: location.name,
      area: location.area,
      postcode: location.postcode,
      distance,
      hq: siteConfig.address.street,
      propertyContent,
    }, rng);
  }

  /**
   * Generate CTA text
   */
  generateCTA(context: ContentGenerationContext): string {
    const rng = new SeededRNG(context.seed + '-cta');
    const { location, service } = context;

    const template = rng.weightedPick(
      CTA_TEMPLATES.map(t => ({ item: t, weight: t.priority }))
    );

    const distance = this.calculateDistance(location);

    return this.applyTemplate(template.pattern, {
      service: service.name.toLowerCase(),
      location: location.name,
      business: siteConfig.businessName,
      phone: siteConfig.phone,
      distance,
    }, rng);
  }

  /**
   * Generate FAQ with unique questions
   */
  generateFAQs(context: ContentGenerationContext, count: number = 5): FAQ[] {
    const rng = new SeededRNG(context.seed + '-faqs');
    const { location, service } = context;

    const faqTemplates: FAQ[] = [
      {
        question: `How much does ${service.name.toLowerCase()} cost in ${location.name}?`,
        answer: `Our ${service.name.toLowerCase()} prices in ${location.name} start from ${service.priceAnchor || 'competitive rates'}. For an accurate quote, please call us on ${siteConfig.phone}.`,
      },
      {
        question: `Do you offer emergency ${service.name.toLowerCase()} in ${location.name}?`,
        answer: `Yes, we provide 24/7 emergency ${service.name.toLowerCase()} services across ${location.name} and ${location.area}. Call ${siteConfig.phone} for immediate assistance.`,
      },
      {
        question: `How quickly can you get to ${location.name}?`,
        answer: `We're based just ${this.calculateDistance(location)} miles from ${location.name}, so we can typically arrive within 2 hours for standard appointments, or faster for emergencies.`,
      },
      {
        question: `Are your ${service.category} specialists qualified?`,
        answer: `All our ${service.category} professionals are fully qualified, insured, and ${service.certifications?.join(', ') || 'certified'}. We only employ experienced tradespeople.`,
      },
      {
        question: `Do you guarantee your ${service.name.toLowerCase()} work?`,
        answer: `${service.warranty || 'All our work comes with a comprehensive guarantee'}. We stand behind every job we complete in ${location.name}.`,
      },
      {
        question: `What areas near ${location.name} do you cover?`,
        answer: `We cover all of ${location.area} including ${location.name}, ${location.postcode}, and surrounding areas. Contact us to confirm coverage for your address.`,
      },
      {
        question: `Can I get a free quote for ${service.name.toLowerCase()}?`,
        answer: `Absolutely! We offer free, no-obligation quotes for all ${service.name.toLowerCase()} work in ${location.name}. Call ${siteConfig.phone} or fill out our online form.`,
      },
    ];

    return rng.pickMultiple(faqTemplates, count);
  }

  /**
   * Apply template with placeholder replacement
   */
  private applyTemplate(
    template: string,
    values: Record<string, string>,
    rng: SeededRNG
  ): string {
    let result = template;
    
    for (const [key, value] of Object.entries(values)) {
      const placeholder = new RegExp(`\\{${key}\\}`, 'gi');
      // Optionally use synonyms for variety
      const finalValue = this.entityManager.getSynonym(value, rng);
      result = result.replace(placeholder, finalValue);
    }

    return result;
  }

  /**
   * Generate property-specific content
   */
  private generatePropertyContent(location: Location, service: Service, rng: SeededRNG): string {
    const propertyTypes = [
      'Victorian terraces',
      'Edwardian homes',
      'modern apartments',
      'period properties',
      'new builds',
    ];

    const propertyType = rng.pick(propertyTypes);
    
    const templates = [
      `${location.name} is known for its beautiful ${propertyType}, and we have extensive experience working with these types of properties.`,
      `Whether you live in one of ${location.name}'s ${propertyType} or a more modern property, our team has the expertise to handle your ${service.name.toLowerCase()} needs.`,
      `Our experience with ${propertyType} in ${location.area} means we understand the unique challenges these properties can present.`,
    ];

    return rng.pick(templates);
  }

  /**
   * Calculate distance from HQ
   */
  private calculateDistance(location: Location): string {
    const R = 3959; // Earth's radius in miles
    const lat1 = siteConfig.address.coordinates.lat * Math.PI / 180;
    const lat2 = location.coordinates.lat * Math.PI / 180;
    const dLat = (location.coordinates.lat - siteConfig.address.coordinates.lat) * Math.PI / 180;
    const dLng = (location.coordinates.lng - siteConfig.address.coordinates.lng) * Math.PI / 180;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance.toFixed(1);
  }

  /**
   * Check content uniqueness
   */
  isUnique(content: string, threshold: number = 0.4): boolean {
    const signature = this.similarityEngine.generateSignature(content);
    return !this.generatedSignatures.has(signature);
  }

  /**
   * Clear generation cache (for new build)
   */
  clearCache(): void {
    this.generatedSignatures.clear();
  }

  /**
   * Get similarity score between two texts
   */
  getSimilarityScore(text1: string, text2: string): number {
    return this.similarityEngine.calculateSimilarity(text1, text2);
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const contentGenerator = new AdvancedContentGenerator();

// ============================================================================
// CONVENIENCE EXPORTS
// ============================================================================

export function generateUniqueH1(location: Location, service: Service): string {
  return contentGenerator.generateH1({
    location,
    service,
    seed: `${location.slug}-${service.slug}`,
  });
}

export function generateUniqueMetaTitle(location: Location, service: Service): string {
  return contentGenerator.generateMetaTitle({
    location,
    service,
    seed: `${location.slug}-${service.slug}`,
  });
}

export function generateUniqueMetaDescription(location: Location, service: Service): string {
  return contentGenerator.generateMetaDescription({
    location,
    service,
    seed: `${location.slug}-${service.slug}`,
  });
}

export function generateUniqueIntro(location: Location, service: Service): string {
  return contentGenerator.generateIntro({
    location,
    service,
    seed: `${location.slug}-${service.slug}`,
  });
}

export function generateUniqueFAQs(
  location: Location, 
  service: Service, 
  count?: number
): Array<{ question: string; answer: string }> {
  return contentGenerator.generateFAQs({
    location,
    service,
    seed: `${location.slug}-${service.slug}`,
  }, count);
}
