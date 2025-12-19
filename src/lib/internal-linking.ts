// ============================================================================
// PSEO ENGINE - INTELLIGENT INTERNAL LINKING ENGINE
// 1000x SEO Enhancement: PageRank distribution, semantic relevance scoring,
// topic clustering, orphan page detection, and automated link optimization
// ============================================================================

import { BASE_URL } from './config';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface PageNode {
  url: string;
  title: string;
  type: PageType;
  keywords: string[];
  category?: string;
  subcategory?: string;
  location?: string;
  service?: string;
  inboundLinks: Set<string>;
  outboundLinks: Set<string>;
  pageRank: number;
  topicCluster?: string;
  lastModified?: Date;
  priority: number;
}

export type PageType = 
  | 'homepage'
  | 'service-hub'
  | 'location-hub'
  | 'local-service'
  | 'blog-post'
  | 'blog-index'
  | 'comparison'
  | 'faq'
  | 'price-guide'
  | 'emergency'
  | 'gallery'
  | 'contact'
  | 'other';

export interface LinkSuggestion {
  targetUrl: string;
  targetTitle: string;
  anchorText: string;
  relevanceScore: number;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}

export interface TopicCluster {
  id: string;
  name: string;
  pillarPage: string;
  clusterPages: string[];
  keywords: string[];
}

export interface LinkingAnalysis {
  orphanPages: string[];
  lowLinkPages: Array<{ url: string; inboundCount: number }>;
  highValuePages: Array<{ url: string; pageRank: number }>;
  missingCrossLinks: Array<{
    source: string;
    target: string;
    reason: string;
  }>;
  suggestedContextualLinks: LinkSuggestion[];
}

export interface SemanticSimilarity {
  url1: string;
  url2: string;
  score: number;
  sharedKeywords: string[];
}

// ============================================================================
// CONSTANTS
// ============================================================================

const PAGERANK_DAMPING = 0.85;
const PAGERANK_ITERATIONS = 20;
const MIN_INBOUND_LINKS = 3;
const KEYWORD_SIMILARITY_THRESHOLD = 0.3;

// Priority scores for different page types
const PAGE_TYPE_PRIORITY: Record<PageType, number> = {
  'homepage': 1.0,
  'service-hub': 0.95,
  'location-hub': 0.9,
  'local-service': 0.85,
  'emergency': 0.85,
  'price-guide': 0.8,
  'comparison': 0.8,
  'blog-index': 0.75,
  'blog-post': 0.7,
  'faq': 0.7,
  'gallery': 0.65,
  'contact': 0.6,
  'other': 0.5,
};

// Semantic relationships between page types
const PAGE_TYPE_RELATIONSHIPS: Record<PageType, PageType[]> = {
  'homepage': ['service-hub', 'location-hub', 'blog-index', 'contact'],
  'service-hub': ['local-service', 'price-guide', 'comparison', 'faq'],
  'location-hub': ['local-service', 'emergency', 'gallery'],
  'local-service': ['price-guide', 'faq', 'gallery', 'comparison', 'blog-post'],
  'emergency': ['local-service', 'contact'],
  'price-guide': ['local-service', 'comparison', 'contact'],
  'comparison': ['local-service', 'price-guide', 'blog-post'],
  'blog-index': ['blog-post', 'service-hub'],
  'blog-post': ['local-service', 'comparison', 'price-guide'],
  'faq': ['local-service', 'price-guide', 'contact'],
  'gallery': ['local-service', 'location-hub'],
  'contact': ['service-hub', 'location-hub', 'emergency'],
  'other': [],
};

// ============================================================================
// KEYWORD EXTRACTION & SIMILARITY
// ============================================================================

class KeywordAnalyzer {
  private stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
    'before', 'after', 'above', 'below', 'between', 'under', 'again',
    'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
    'how', 'all', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
    'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
    'can', 'will', 'just', 'should', 'now', 'is', 'are', 'was', 'were',
    'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does',
    'did', 'doing', 'would', 'could', 'might', 'must', 'shall', 'need',
  ]);

  /**
   * Extract keywords from text
   */
  extractKeywords(text: string): string[] {
    const words = text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2 && !this.stopWords.has(word));
    
    // Count frequency
    const frequency = new Map<string, number>();
    for (const word of words) {
      frequency.set(word, (frequency.get(word) || 0) + 1);
    }
    
    // Sort by frequency and return top keywords
    return Array.from(frequency.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([word]) => word);
  }

  /**
   * Calculate Jaccard similarity between keyword sets
   */
  calculateSimilarity(keywords1: string[], keywords2: string[]): number {
    const set1 = new Set(keywords1);
    const set2 = new Set(keywords2);
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    if (union.size === 0) return 0;
    return intersection.size / union.size;
  }

  /**
   * Find shared keywords between two sets
   */
  findSharedKeywords(keywords1: string[], keywords2: string[]): string[] {
    const set1 = new Set(keywords1);
    return keywords2.filter(kw => set1.has(kw));
  }

  /**
   * Generate anchor text from target page keywords
   */
  generateAnchorText(targetKeywords: string[], contextKeywords: string[]): string {
    const shared = this.findSharedKeywords(targetKeywords, contextKeywords);
    
    if (shared.length >= 2) {
      return shared.slice(0, 3).join(' ');
    }
    
    if (shared.length === 1) {
      return shared[0] + ' services';
    }
    
    return targetKeywords.slice(0, 2).join(' ');
  }
}

// ============================================================================
// PAGERANK CALCULATOR
// ============================================================================

class PageRankCalculator {
  /**
   * Calculate PageRank for all pages in the graph
   */
  calculate(pages: Map<string, PageNode>): void {
    const n = pages.size;
    if (n === 0) return;

    // Initialize PageRank
    for (const page of pages.values()) {
      page.pageRank = 1 / n;
    }

    // Iterate to convergence
    for (let i = 0; i < PAGERANK_ITERATIONS; i++) {
      const newRanks = new Map<string, number>();
      
      for (const [url, page] of pages) {
        let rank = (1 - PAGERANK_DAMPING) / n;
        
        // Sum contributions from inbound links
        for (const sourceUrl of page.inboundLinks) {
          const sourcePage = pages.get(sourceUrl);
          if (sourcePage && sourcePage.outboundLinks.size > 0) {
            rank += PAGERANK_DAMPING * (sourcePage.pageRank / sourcePage.outboundLinks.size);
          }
        }
        
        newRanks.set(url, rank);
      }
      
      // Update ranks
      for (const [url, rank] of newRanks) {
        const page = pages.get(url);
        if (page) {
          page.pageRank = rank;
        }
      }
    }

    // Normalize ranks
    const totalRank = Array.from(pages.values()).reduce((sum, p) => sum + p.pageRank, 0);
    for (const page of pages.values()) {
      page.pageRank = page.pageRank / totalRank;
    }
  }
}

// ============================================================================
// TOPIC CLUSTERING
// ============================================================================

class TopicClusterManager {
  private clusters: Map<string, TopicCluster> = new Map();

  /**
   * Create topic clusters from pages
   */
  createClusters(pages: Map<string, PageNode>): TopicCluster[] {
    this.clusters.clear();

    // Identify pillar pages (service hubs, location hubs)
    const pillarPages = Array.from(pages.values()).filter(
      p => p.type === 'service-hub' || p.type === 'location-hub'
    );

    for (const pillar of pillarPages) {
      const clusterId = pillar.category || pillar.location || pillar.url;
      
      // Find related cluster pages
      const clusterPages = Array.from(pages.values())
        .filter(p => {
          if (p.url === pillar.url) return false;
          
          // Same category or location
          if (pillar.category && p.category === pillar.category) return true;
          if (pillar.location && p.location === pillar.location) return true;
          
          // Keyword similarity
          const analyzer = new KeywordAnalyzer();
          const similarity = analyzer.calculateSimilarity(pillar.keywords, p.keywords);
          return similarity > KEYWORD_SIMILARITY_THRESHOLD;
        })
        .map(p => p.url);

      const cluster: TopicCluster = {
        id: clusterId,
        name: pillar.title,
        pillarPage: pillar.url,
        clusterPages,
        keywords: pillar.keywords,
      };

      this.clusters.set(clusterId, cluster);
    }

    return Array.from(this.clusters.values());
  }

  /**
   * Get cluster for a page
   */
  getClusterForPage(pageUrl: string): TopicCluster | undefined {
    for (const cluster of this.clusters.values()) {
      if (cluster.pillarPage === pageUrl || cluster.clusterPages.includes(pageUrl)) {
        return cluster;
      }
    }
    return undefined;
  }

  /**
   * Get suggested internal links based on cluster
   */
  getClusterLinkSuggestions(pageUrl: string): string[] {
    const cluster = this.getClusterForPage(pageUrl);
    if (!cluster) return [];

    const suggestions: string[] = [];
    
    // Always link to pillar page
    if (cluster.pillarPage !== pageUrl) {
      suggestions.push(cluster.pillarPage);
    }
    
    // Link to related cluster pages
    suggestions.push(
      ...cluster.clusterPages
        .filter(url => url !== pageUrl)
        .slice(0, 5)
    );

    return suggestions;
  }
}

// ============================================================================
// INTERNAL LINKING ENGINE
// ============================================================================

export class InternalLinkingEngine {
  private pages: Map<string, PageNode> = new Map();
  private keywordAnalyzer: KeywordAnalyzer;
  private pageRankCalculator: PageRankCalculator;
  private topicClusterManager: TopicClusterManager;

  constructor() {
    this.keywordAnalyzer = new KeywordAnalyzer();
    this.pageRankCalculator = new PageRankCalculator();
    this.topicClusterManager = new TopicClusterManager();
  }

  /**
   * Add a page to the link graph
   */
  addPage(page: Omit<PageNode, 'inboundLinks' | 'outboundLinks' | 'pageRank'>): void {
    this.pages.set(page.url, {
      ...page,
      inboundLinks: new Set(),
      outboundLinks: new Set(),
      pageRank: 0,
      priority: PAGE_TYPE_PRIORITY[page.type] || 0.5,
    });
  }

  /**
   * Add a link between two pages
   */
  addLink(sourceUrl: string, targetUrl: string): void {
    const sourcePage = this.pages.get(sourceUrl);
    const targetPage = this.pages.get(targetUrl);

    if (sourcePage && targetPage) {
      sourcePage.outboundLinks.add(targetUrl);
      targetPage.inboundLinks.add(sourceUrl);
    }
  }

  /**
   * Analyze the link graph and generate suggestions
   */
  analyze(): LinkingAnalysis {
    // Calculate PageRank
    this.pageRankCalculator.calculate(this.pages);
    
    // Create topic clusters
    this.topicClusterManager.createClusters(this.pages);

    // Find orphan pages
    const orphanPages = Array.from(this.pages.values())
      .filter(p => p.inboundLinks.size === 0 && p.type !== 'homepage')
      .map(p => p.url);

    // Find low-link pages
    const lowLinkPages = Array.from(this.pages.values())
      .filter(p => p.inboundLinks.size < MIN_INBOUND_LINKS && p.type !== 'homepage')
      .sort((a, b) => a.inboundLinks.size - b.inboundLinks.size)
      .slice(0, 20)
      .map(p => ({ url: p.url, inboundCount: p.inboundLinks.size }));

    // Find high value pages (high PageRank)
    const highValuePages = Array.from(this.pages.values())
      .sort((a, b) => b.pageRank - a.pageRank)
      .slice(0, 20)
      .map(p => ({ url: p.url, pageRank: p.pageRank }));

    // Find missing cross-links
    const missingCrossLinks = this.findMissingCrossLinks();

    // Generate contextual link suggestions
    const suggestedContextualLinks = this.generateContextualLinkSuggestions();

    return {
      orphanPages,
      lowLinkPages,
      highValuePages,
      missingCrossLinks,
      suggestedContextualLinks,
    };
  }

  /**
   * Find missing cross-links based on page type relationships
   */
  private findMissingCrossLinks(): Array<{ source: string; target: string; reason: string }> {
    const missing: Array<{ source: string; target: string; reason: string }> = [];

    for (const [sourceUrl, sourcePage] of this.pages) {
      const relatedTypes = PAGE_TYPE_RELATIONSHIPS[sourcePage.type] || [];
      
      for (const relatedType of relatedTypes) {
        // Find pages of related type that aren't linked
        const relatedPages = Array.from(this.pages.values())
          .filter(p => 
            p.type === relatedType && 
            !sourcePage.outboundLinks.has(p.url) &&
            p.url !== sourceUrl
          );

        // For each related page, check if they share keywords
        for (const relatedPage of relatedPages) {
          const similarity = this.keywordAnalyzer.calculateSimilarity(
            sourcePage.keywords,
            relatedPage.keywords
          );

          if (similarity > KEYWORD_SIMILARITY_THRESHOLD) {
            // Check for location/service match
            const locationMatch = sourcePage.location && sourcePage.location === relatedPage.location;
            const serviceMatch = sourcePage.service && sourcePage.service === relatedPage.service;

            if (locationMatch || serviceMatch || similarity > 0.5) {
              missing.push({
                source: sourceUrl,
                target: relatedPage.url,
                reason: locationMatch ? 'Same location' : 
                        serviceMatch ? 'Same service' : 
                        `High keyword similarity (${(similarity * 100).toFixed(0)}%)`,
              });
            }
          }
        }
      }
    }

    // Deduplicate and limit results
    const seen = new Set<string>();
    return missing
      .filter(m => {
        const key = `${m.source}-${m.target}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 50);
  }

  /**
   * Generate contextual link suggestions
   */
  private generateContextualLinkSuggestions(): LinkSuggestion[] {
    const suggestions: LinkSuggestion[] = [];

    for (const [sourceUrl, sourcePage] of this.pages) {
      // Get cluster suggestions
      const clusterLinks = this.topicClusterManager.getClusterLinkSuggestions(sourceUrl);
      
      for (const targetUrl of clusterLinks) {
        if (sourcePage.outboundLinks.has(targetUrl)) continue;
        
        const targetPage = this.pages.get(targetUrl);
        if (!targetPage) continue;

        const similarity = this.keywordAnalyzer.calculateSimilarity(
          sourcePage.keywords,
          targetPage.keywords
        );

        suggestions.push({
          targetUrl,
          targetTitle: targetPage.title,
          anchorText: this.keywordAnalyzer.generateAnchorText(
            targetPage.keywords,
            sourcePage.keywords
          ),
          relevanceScore: similarity,
          reason: 'Topic cluster relationship',
          priority: similarity > 0.5 ? 'high' : similarity > 0.3 ? 'medium' : 'low',
        });
      }

      // Find semantically similar pages
      const similarPages = this.findSimilarPages(sourceUrl, 5);
      
      for (const similar of similarPages) {
        if (sourcePage.outboundLinks.has(similar.url2)) continue;
        if (suggestions.some(s => s.targetUrl === similar.url2)) continue;

        const targetPage = this.pages.get(similar.url2);
        if (!targetPage) continue;

        suggestions.push({
          targetUrl: similar.url2,
          targetTitle: targetPage.title,
          anchorText: similar.sharedKeywords.slice(0, 3).join(' ') || targetPage.title,
          relevanceScore: similar.score,
          reason: `Shared keywords: ${similar.sharedKeywords.slice(0, 3).join(', ')}`,
          priority: similar.score > 0.5 ? 'high' : similar.score > 0.3 ? 'medium' : 'low',
        });
      }
    }

    // Sort by relevance and deduplicate
    return suggestions
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 100);
  }

  /**
   * Find semantically similar pages
   */
  findSimilarPages(pageUrl: string, limit: number = 10): SemanticSimilarity[] {
    const page = this.pages.get(pageUrl);
    if (!page) return [];

    const similarities: SemanticSimilarity[] = [];

    for (const [otherUrl, otherPage] of this.pages) {
      if (otherUrl === pageUrl) continue;

      const score = this.keywordAnalyzer.calculateSimilarity(
        page.keywords,
        otherPage.keywords
      );

      if (score > 0.1) {
        similarities.push({
          url1: pageUrl,
          url2: otherUrl,
          score,
          sharedKeywords: this.keywordAnalyzer.findSharedKeywords(
            page.keywords,
            otherPage.keywords
          ),
        });
      }
    }

    return similarities
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  /**
   * Get link suggestions for a specific page
   */
  getSuggestionsForPage(pageUrl: string, limit: number = 5): LinkSuggestion[] {
    const page = this.pages.get(pageUrl);
    if (!page) return [];

    const suggestions: LinkSuggestion[] = [];

    // High PageRank pages in same cluster/category
    const cluster = this.topicClusterManager.getClusterForPage(pageUrl);
    if (cluster) {
      const clusterPages = [cluster.pillarPage, ...cluster.clusterPages]
        .filter(url => url !== pageUrl && !page.outboundLinks.has(url))
        .map(url => this.pages.get(url))
        .filter((p): p is PageNode => p !== undefined)
        .sort((a, b) => b.pageRank - a.pageRank)
        .slice(0, 3);

      for (const target of clusterPages) {
        suggestions.push({
          targetUrl: target.url,
          targetTitle: target.title,
          anchorText: this.keywordAnalyzer.generateAnchorText(
            target.keywords,
            page.keywords
          ),
          relevanceScore: this.keywordAnalyzer.calculateSimilarity(
            page.keywords,
            target.keywords
          ),
          reason: 'High authority page in topic cluster',
          priority: 'high',
        });
      }
    }

    // Related page types
    const relatedTypes = PAGE_TYPE_RELATIONSHIPS[page.type] || [];
    for (const relatedType of relatedTypes) {
      const relatedPages = Array.from(this.pages.values())
        .filter(p => 
          p.type === relatedType && 
          !page.outboundLinks.has(p.url) &&
          p.url !== pageUrl &&
          (p.location === page.location || p.service === page.service)
        )
        .sort((a, b) => b.pageRank - a.pageRank)
        .slice(0, 2);

      for (const target of relatedPages) {
        if (!suggestions.some(s => s.targetUrl === target.url)) {
          suggestions.push({
            targetUrl: target.url,
            targetTitle: target.title,
            anchorText: this.keywordAnalyzer.generateAnchorText(
              target.keywords,
              page.keywords
            ),
            relevanceScore: this.keywordAnalyzer.calculateSimilarity(
              page.keywords,
              target.keywords
            ),
            reason: `Related ${relatedType} page`,
            priority: 'medium',
          });
        }
      }
    }

    return suggestions
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  }

  /**
   * Get page statistics
   */
  getPageStats(pageUrl: string): {
    pageRank: number;
    inboundCount: number;
    outboundCount: number;
    cluster?: string;
  } | null {
    const page = this.pages.get(pageUrl);
    if (!page) return null;

    const cluster = this.topicClusterManager.getClusterForPage(pageUrl);

    return {
      pageRank: page.pageRank,
      inboundCount: page.inboundLinks.size,
      outboundCount: page.outboundLinks.size,
      cluster: cluster?.name,
    };
  }

  /**
   * Export link graph for visualization
   */
  exportGraph(): {
    nodes: Array<{ id: string; label: string; type: PageType; pageRank: number }>;
    edges: Array<{ source: string; target: string }>;
  } {
    const nodes = Array.from(this.pages.values()).map(p => ({
      id: p.url,
      label: p.title,
      type: p.type,
      pageRank: p.pageRank,
    }));

    const edges: Array<{ source: string; target: string }> = [];
    for (const page of this.pages.values()) {
      for (const targetUrl of page.outboundLinks) {
        edges.push({ source: page.url, target: targetUrl });
      }
    }

    return { nodes, edges };
  }

  /**
   * Clear all data
   */
  clear(): void {
    this.pages.clear();
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const internalLinkingEngine = new InternalLinkingEngine();
