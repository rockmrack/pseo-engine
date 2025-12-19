// ============================================================================
// PSEO ENGINE - DYNAMIC SITEMAP SPLITTING SYSTEM
// 1000x SEO Enhancement: Category-based sitemaps for optimal crawl budget
// ============================================================================

import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/config';

// ============================================================================
// TYPES
// ============================================================================

export type SitemapCategory = 
  | 'index'
  | 'services'
  | 'locations'
  | 'streets'
  | 'prices'
  | 'reviews'
  | 'blog'
  | 'emergency'
  | 'seasonal'
  | 'comparison'
  | 'problems'
  | 'property'
  | 'trust'
  | 'projects'
  | 'certifications'
  | 'faqs'
  | 'booking'
  | 'galleries'
  | 'costs'
  | 'case-studies'
  | 'checklists'
  | 'decisions'
  | 'boroughs'
  | 'landlords'
  | 'same-day'
  | 'packages'
  | 'brands'
  | 'insurance'
  | 'testimonials'
  | 'property-era'
  | 'rooms'
  | 'misc';

export interface SitemapConfig {
  category: SitemapCategory;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  maxUrls?: number;
}

export interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    url: string;
    title?: string;
    caption?: string;
    geoLocation?: string;
    license?: string;
  }>;
  videos?: Array<{
    title: string;
    thumbnailUrl: string;
    description: string;
    contentUrl?: string;
    playerUrl?: string;
    duration?: number;
  }>;
  news?: {
    publicationName: string;
    publicationLanguage: string;
    publicationDate: Date | string;
    title: string;
  };
}

// ============================================================================
// SITEMAP CONFIGURATION
// ============================================================================

export const sitemapConfigs: Record<SitemapCategory, SitemapConfig> = {
  index: { category: 'index', priority: 1.0, changeFrequency: 'daily' },
  services: { category: 'services', priority: 0.9, changeFrequency: 'weekly' },
  locations: { category: 'locations', priority: 0.9, changeFrequency: 'weekly' },
  streets: { category: 'streets', priority: 0.7, changeFrequency: 'monthly' },
  prices: { category: 'prices', priority: 0.8, changeFrequency: 'weekly' },
  reviews: { category: 'reviews', priority: 0.7, changeFrequency: 'weekly' },
  blog: { category: 'blog', priority: 0.8, changeFrequency: 'daily' },
  emergency: { category: 'emergency', priority: 0.9, changeFrequency: 'weekly' },
  seasonal: { category: 'seasonal', priority: 0.75, changeFrequency: 'monthly' },
  comparison: { category: 'comparison', priority: 0.8, changeFrequency: 'monthly' },
  problems: { category: 'problems', priority: 0.75, changeFrequency: 'monthly' },
  property: { category: 'property', priority: 0.7, changeFrequency: 'monthly' },
  trust: { category: 'trust', priority: 0.7, changeFrequency: 'monthly' },
  projects: { category: 'projects', priority: 0.75, changeFrequency: 'monthly' },
  certifications: { category: 'certifications', priority: 0.65, changeFrequency: 'monthly' },
  faqs: { category: 'faqs', priority: 0.7, changeFrequency: 'weekly' },
  booking: { category: 'booking', priority: 0.85, changeFrequency: 'weekly' },
  galleries: { category: 'galleries', priority: 0.7, changeFrequency: 'weekly' },
  costs: { category: 'costs', priority: 0.85, changeFrequency: 'weekly' },
  'case-studies': { category: 'case-studies', priority: 0.8, changeFrequency: 'monthly' },
  checklists: { category: 'checklists', priority: 0.75, changeFrequency: 'monthly' },
  decisions: { category: 'decisions', priority: 0.8, changeFrequency: 'monthly' },
  boroughs: { category: 'boroughs', priority: 0.8, changeFrequency: 'weekly' },
  landlords: { category: 'landlords', priority: 0.75, changeFrequency: 'weekly' },
  'same-day': { category: 'same-day', priority: 0.9, changeFrequency: 'weekly' },
  packages: { category: 'packages', priority: 0.75, changeFrequency: 'monthly' },
  brands: { category: 'brands', priority: 0.7, changeFrequency: 'monthly' },
  insurance: { category: 'insurance', priority: 0.75, changeFrequency: 'monthly' },
  testimonials: { category: 'testimonials', priority: 0.65, changeFrequency: 'weekly' },
  'property-era': { category: 'property-era', priority: 0.7, changeFrequency: 'monthly' },
  rooms: { category: 'rooms', priority: 0.7, changeFrequency: 'monthly' },
  misc: { category: 'misc', priority: 0.5, changeFrequency: 'monthly' },
};

// ============================================================================
// SITEMAP GENERATOR CLASS
// ============================================================================

export class SitemapGenerator {
  private baseUrl: string;
  private maxUrlsPerSitemap: number;

  constructor(baseUrl: string = BASE_URL, maxUrlsPerSitemap: number = 50000) {
    this.baseUrl = baseUrl;
    this.maxUrlsPerSitemap = maxUrlsPerSitemap;
  }

  /**
   * Generate sitemap index pointing to all category sitemaps
   */
  generateIndex(categories: SitemapCategory[]): MetadataRoute.Sitemap {
    const currentDate = new Date();
    
    return categories.map(category => ({
      url: `${this.baseUrl}/sitemap-${category}.xml`,
      lastModified: currentDate,
    }));
  }

  /**
   * Generate entries for a specific category
   */
  generateCategoryEntries(
    category: SitemapCategory,
    entries: SitemapEntry[]
  ): MetadataRoute.Sitemap {
    const config = sitemapConfigs[category];
    const currentDate = new Date();

    return entries.slice(0, this.maxUrlsPerSitemap).map(entry => ({
      url: entry.url.startsWith('http') ? entry.url : `${this.baseUrl}${entry.url}`,
      lastModified: entry.lastModified ?? currentDate,
      changeFrequency: entry.changeFrequency ?? config.changeFrequency,
      priority: entry.priority ?? config.priority,
    }));
  }

  /**
   * Split large entry sets into multiple sitemaps
   */
  splitIntoChunks(entries: SitemapEntry[]): SitemapEntry[][] {
    const chunks: SitemapEntry[][] = [];
    for (let i = 0; i < entries.length; i += this.maxUrlsPerSitemap) {
      chunks.push(entries.slice(i, i + this.maxUrlsPerSitemap));
    }
    return chunks;
  }

  /**
   * Generate news sitemap entries (for blog/press)
   */
  generateNewsSitemap(
    entries: Array<{
      url: string;
      title: string;
      publicationDate: Date | string;
      publicationName?: string;
    }>
  ): MetadataRoute.Sitemap {
    // Filter to last 48 hours for Google News
    const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);
    
    return entries
      .filter(entry => new Date(entry.publicationDate) > cutoff)
      .map(entry => ({
        url: entry.url.startsWith('http') ? entry.url : `${this.baseUrl}${entry.url}`,
        lastModified: new Date(entry.publicationDate),
        changeFrequency: 'always' as const,
        priority: 1.0,
      }));
  }

  /**
   * Generate image sitemap entries
   */
  generateImageSitemap(
    entries: Array<{
      pageUrl: string;
      images: Array<{
        url: string;
        title?: string;
        caption?: string;
      }>;
    }>
  ): MetadataRoute.Sitemap {
    return entries.map(entry => ({
      url: entry.pageUrl.startsWith('http') ? entry.pageUrl : `${this.baseUrl}${entry.pageUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  }
}

// ============================================================================
// SITEMAP DATA COLLECTORS
// Functions to collect URLs for each category
// ============================================================================

export interface SitemapDataCollector {
  collect(): Promise<SitemapEntry[]> | SitemapEntry[];
}

export class ServicesSitemapCollector implements SitemapDataCollector {
  constructor(
    private locations: Array<{ slug: string }>,
    private services: Array<{ slug: string }>
  ) {}

  collect(): SitemapEntry[] {
    const entries: SitemapEntry[] = [];
    const currentDate = new Date();

    // Service pages
    for (const service of this.services) {
      entries.push({
        url: `/services/${service.slug}`,
        lastModified: currentDate,
        priority: 0.85,
        changeFrequency: 'weekly',
      });
    }

    // Location + Service combinations
    for (const location of this.locations) {
      for (const service of this.services) {
        entries.push({
          url: `/local/${location.slug}/${service.slug}`,
          lastModified: currentDate,
          priority: 0.8,
          changeFrequency: 'weekly',
        });
      }
    }

    return entries;
  }
}

export class LocationsSitemapCollector implements SitemapDataCollector {
  constructor(
    private locations: Array<{ slug: string; area?: string; postcode?: string }>
  ) {}

  collect(): SitemapEntry[] {
    const entries: SitemapEntry[] = [];
    const currentDate = new Date();

    // Location hub pages
    for (const location of this.locations) {
      entries.push({
        url: `/local/${location.slug}`,
        lastModified: currentDate,
        priority: 0.85,
        changeFrequency: 'weekly',
      });

      // Area pages if applicable
      if (location.area) {
        entries.push({
          url: `/areas/${location.slug}`,
          lastModified: currentDate,
          priority: 0.7,
          changeFrequency: 'monthly',
        });
      }
    }

    return entries;
  }
}

export class BlogSitemapCollector implements SitemapDataCollector {
  constructor(
    private posts: Array<{ slug: string; publishDate: string | Date; updatedDate?: string | Date }>
  ) {}

  collect(): SitemapEntry[] {
    return [
      {
        url: '/blog',
        lastModified: new Date(),
        priority: 0.8,
        changeFrequency: 'daily',
      },
      ...this.posts.map(post => ({
        url: `/blog/${post.slug}`,
        lastModified: post.updatedDate ? new Date(post.updatedDate) : new Date(post.publishDate),
        priority: 0.7,
        changeFrequency: 'monthly' as const,
      })),
    ];
  }
}

// ============================================================================
// SITEMAP REGISTRY
// Central registry for all sitemap collectors
// ============================================================================

class SitemapRegistry {
  private collectors: Map<SitemapCategory, SitemapDataCollector> = new Map();
  private generator: SitemapGenerator;

  constructor(baseUrl?: string) {
    this.generator = new SitemapGenerator(baseUrl);
  }

  register(category: SitemapCategory, collector: SitemapDataCollector): void {
    this.collectors.set(category, collector);
  }

  async generateCategory(category: SitemapCategory): Promise<MetadataRoute.Sitemap> {
    const collector = this.collectors.get(category);
    if (!collector) {
      return [];
    }

    const entries = await collector.collect();
    return this.generator.generateCategoryEntries(category, entries);
  }

  async generateIndex(): Promise<MetadataRoute.Sitemap> {
    const categories = Array.from(this.collectors.keys());
    return this.generator.generateIndex(categories);
  }

  getRegisteredCategories(): SitemapCategory[] {
    return Array.from(this.collectors.keys());
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const sitemapRegistry = new SitemapRegistry();

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format sitemap XML with proper escaping
 */
export function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate lastmod in W3C datetime format
 */
export function formatW3CDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Validate URL for sitemap inclusion
 */
export function isValidSitemapUrl(url: string): boolean {
  try {
    const parsed = new URL(url, BASE_URL);
    // Exclude certain patterns
    const excludePatterns = [
      /\/api\//,
      /\/admin\//,
      /\/_next\//,
      /\/private\//,
      /\?/,  // No query strings
      /#/,   // No fragments
    ];
    return !excludePatterns.some(pattern => pattern.test(parsed.pathname));
  } catch {
    return false;
  }
}

/**
 * Calculate URL priority based on depth
 */
export function calculatePriorityByDepth(url: string, basePriority: number = 1.0): number {
  const depth = url.split('/').filter(Boolean).length;
  return Math.max(0.1, basePriority - (depth * 0.1));
}

// ============================================================================
// EXPORTS
// ============================================================================

// SitemapGenerator and SitemapRegistry are already exported via class declarations
