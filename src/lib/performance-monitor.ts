// ============================================================================
// PSEO ENGINE - ADVANCED PERFORMANCE MONITORING SYSTEM
// 1000x Analytics Enhancement: Core Web Vitals tracking by template,
// real-time alerts, trend analysis, and automated optimization suggestions
// ============================================================================

import { useEffect, useCallback, useRef } from 'react';
import type { Metric } from 'web-vitals';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id: string;
  navigationType?: string;
  attribution?: Record<string, unknown>;
}

export interface PagePerformanceData {
  url: string;
  pathname: string;
  pageType: string;
  templateId: string;
  timestamp: number;
  metrics: {
    lcp?: PerformanceMetric;
    fid?: PerformanceMetric;
    cls?: PerformanceMetric;
    inp?: PerformanceMetric;
    ttfb?: PerformanceMetric;
    fcp?: PerformanceMetric;
  };
  resourceMetrics: {
    documentSize: number;
    transferSize: number;
    resourceCount: number;
    scriptSize: number;
    styleSize: number;
    imageSize: number;
  };
  navigationMetrics: {
    dns: number;
    tcp: number;
    ssl: number;
    ttfb: number;
    download: number;
    domParsing: number;
    domContentLoaded: number;
    load: number;
  };
  userAgent: string;
  connectionType?: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  viewport: { width: number; height: number };
}

export interface PerformanceBudget {
  lcp: number;
  fid: number;
  cls: number;
  inp: number;
  ttfb: number;
  documentSize: number;
  totalTransfer: number;
  resourceCount: number;
}

export interface PerformanceAlert {
  type: 'warning' | 'critical';
  metric: string;
  value: number;
  threshold: number;
  pageType: string;
  timestamp: number;
  message: string;
}

export interface PerformanceTrend {
  metric: string;
  pageType: string;
  period: 'hour' | 'day' | 'week';
  samples: number;
  average: number;
  p50: number;
  p75: number;
  p95: number;
  trend: 'improving' | 'stable' | 'degrading';
  changePercent: number;
}

// ============================================================================
// CONSTANTS
// ============================================================================

// Google's Core Web Vitals thresholds
export const CWV_THRESHOLDS = {
  lcp: { good: 2500, poor: 4000 },
  fid: { good: 100, poor: 300 },
  cls: { good: 0.1, poor: 0.25 },
  inp: { good: 200, poor: 500 },
  ttfb: { good: 800, poor: 1800 },
  fcp: { good: 1800, poor: 3000 },
};

// Performance budgets by page type
export const PERFORMANCE_BUDGETS: Record<string, PerformanceBudget> = {
  homepage: {
    lcp: 2000,
    fid: 50,
    cls: 0.05,
    inp: 150,
    ttfb: 500,
    documentSize: 100000,
    totalTransfer: 500000,
    resourceCount: 30,
  },
  'local-service': {
    lcp: 2200,
    fid: 75,
    cls: 0.08,
    inp: 175,
    ttfb: 600,
    documentSize: 80000,
    totalTransfer: 400000,
    resourceCount: 25,
  },
  blog: {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    inp: 200,
    ttfb: 700,
    documentSize: 120000,
    totalTransfer: 600000,
    resourceCount: 35,
  },
  default: {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    inp: 200,
    ttfb: 800,
    documentSize: 100000,
    totalTransfer: 500000,
    resourceCount: 30,
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = CWV_THRESHOLDS[name as keyof typeof CWV_THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  
  const ua = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipod/.test(ua)) return 'mobile';
  if (/tablet|ipad/.test(ua)) return 'tablet';
  return 'desktop';
}

function getConnectionType(): string | undefined {
  if (typeof navigator === 'undefined') return undefined;
  
  const connection = (navigator as Navigator & { 
    connection?: { effectiveType?: string } 
  }).connection;
  
  return connection?.effectiveType;
}

function detectPageType(pathname: string): string {
  const patterns: Array<[RegExp, string]> = [
    [/^\/$/, 'homepage'],
    [/^\/local\/[^/]+\/[^/]+$/, 'local-service'],
    [/^\/local\/[^/]+$/, 'location-hub'],
    [/^\/blog\/[^/]+$/, 'blog-post'],
    [/^\/blog\/?$/, 'blog-index'],
    [/^\/streets\/[^/]+\/[^/]+$/, 'street-service'],
    [/^\/prices\/[^/]+\/[^/]+$/, 'price-guide'],
    [/^\/emergency\/[^/]+$/, 'emergency'],
    [/^\/compare\/[^/]+$/, 'comparison'],
    [/^\/problems\/[^/]+$/, 'problem-solution'],
    [/^\/reviews\/[^/]+$/, 'reviews'],
    [/^\/contact\/?$/, 'contact'],
    [/^\/gallery\/?$/, 'gallery'],
    [/^\/services\/?$/, 'services-index'],
  ];

  for (const [pattern, type] of patterns) {
    if (pattern.test(pathname)) return type;
  }
  return 'other';
}

function getTemplateId(pathname: string): string {
  // Extract template pattern from pathname
  return pathname
    .replace(/\/[a-z0-9-]+(?=\/|$)/g, '/[slug]')
    .replace(/\/\[slug\]\/\[slug\]/, '/[param1]/[param2]');
}

// ============================================================================
// PERFORMANCE DATA COLLECTOR
// ============================================================================

class PerformanceDataCollector {
  private data: Partial<PagePerformanceData> = {};
  private metricsBuffer: Map<string, PerformanceMetric> = new Map();
  private isInitialized: boolean = false;
  private sendEndpoint: string;
  private flushTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(endpoint: string = '/api/analytics/performance') {
    this.sendEndpoint = endpoint;
  }

  initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    this.data = {
      url: window.location.href,
      pathname: window.location.pathname,
      pageType: detectPageType(window.location.pathname),
      templateId: getTemplateId(window.location.pathname),
      timestamp: Date.now(),
      metrics: {},
      resourceMetrics: this.collectResourceMetrics(),
      navigationMetrics: this.collectNavigationMetrics(),
      userAgent: navigator.userAgent,
      connectionType: getConnectionType(),
      deviceType: getDeviceType(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };

    this.isInitialized = true;
  }

  recordMetric(metric: Metric): void {
    const perfMetric: PerformanceMetric = {
      name: metric.name,
      value: metric.value,
      rating: getRating(metric.name.toLowerCase(), metric.value),
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
    };

    this.metricsBuffer.set(metric.name.toLowerCase(), perfMetric);

    // Update data object
    if (!this.data.metrics) {
      this.data.metrics = {};
    }
    
    const key = metric.name.toLowerCase() as keyof PagePerformanceData['metrics'];
    if (key in CWV_THRESHOLDS || key === 'fcp') {
      (this.data.metrics as Record<string, PerformanceMetric>)[key] = perfMetric;
    }

    // Schedule flush
    this.scheduleFlush();
  }

  private collectResourceMetrics(): PagePerformanceData['resourceMetrics'] {
    if (typeof window === 'undefined' || !window.performance) {
      return {
        documentSize: 0,
        transferSize: 0,
        resourceCount: 0,
        scriptSize: 0,
        styleSize: 0,
        imageSize: 0,
      };
    }

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    let scriptSize = 0;
    let styleSize = 0;
    let imageSize = 0;
    let totalTransfer = 0;

    for (const resource of resources) {
      const size = resource.transferSize || 0;
      totalTransfer += size;

      if (resource.initiatorType === 'script') {
        scriptSize += size;
      } else if (resource.initiatorType === 'link' || resource.initiatorType === 'css') {
        styleSize += size;
      } else if (resource.initiatorType === 'img') {
        imageSize += size;
      }
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;

    return {
      documentSize: navigation?.transferSize || 0,
      transferSize: totalTransfer + (navigation?.transferSize || 0),
      resourceCount: resources.length,
      scriptSize,
      styleSize,
      imageSize,
    };
  }

  private collectNavigationMetrics(): PagePerformanceData['navigationMetrics'] {
    if (typeof window === 'undefined' || !window.performance) {
      return {
        dns: 0,
        tcp: 0,
        ssl: 0,
        ttfb: 0,
        download: 0,
        domParsing: 0,
        domContentLoaded: 0,
        load: 0,
      };
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    
    if (!navigation) {
      return {
        dns: 0,
        tcp: 0,
        ssl: 0,
        ttfb: 0,
        download: 0,
        domParsing: 0,
        domContentLoaded: 0,
        load: 0,
      };
    }

    return {
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      ssl: navigation.secureConnectionStart > 0 
        ? navigation.connectEnd - navigation.secureConnectionStart 
        : 0,
      ttfb: navigation.responseStart - navigation.requestStart,
      download: navigation.responseEnd - navigation.responseStart,
      domParsing: navigation.domInteractive - navigation.responseEnd,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      load: navigation.loadEventEnd - navigation.fetchStart,
    };
  }

  private scheduleFlush(): void {
    if (this.flushTimeout) {
      clearTimeout(this.flushTimeout);
    }
    
    // Flush after 5 seconds of no new metrics
    this.flushTimeout = setTimeout(() => {
      this.flush();
    }, 5000);
  }

  async flush(): Promise<void> {
    if (!this.isInitialized || this.metricsBuffer.size === 0) return;

    const dataToSend = { ...this.data };
    
    try {
      // Use sendBeacon for reliability
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(dataToSend)], {
          type: 'application/json',
        });
        navigator.sendBeacon(this.sendEndpoint, blob);
      } else {
        // Fallback to fetch
        await fetch(this.sendEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataToSend),
          keepalive: true,
        });
      }
    } catch (error) {
      // Silent fail - don't break the user experience
      console.debug('Performance data send failed:', error);
    }
  }

  getData(): Partial<PagePerformanceData> {
    return { ...this.data };
  }

  checkBudget(pageType: string = 'default'): PerformanceAlert[] {
    const budget = PERFORMANCE_BUDGETS[pageType] || PERFORMANCE_BUDGETS.default;
    const alerts: PerformanceAlert[] = [];

    // Check CWV metrics
    const metrics = this.data.metrics || {};
    
    for (const [key, metric] of Object.entries(metrics)) {
      if (!metric) continue;
      
      const budgetValue = budget[key as keyof PerformanceBudget];
      if (typeof budgetValue !== 'number') continue;

      if (metric.value > budgetValue * 1.5) {
        alerts.push({
          type: 'critical',
          metric: key,
          value: metric.value,
          threshold: budgetValue,
          pageType,
          timestamp: Date.now(),
          message: `${key.toUpperCase()} (${metric.value.toFixed(2)}) exceeds critical threshold (${budgetValue * 1.5})`,
        });
      } else if (metric.value > budgetValue) {
        alerts.push({
          type: 'warning',
          metric: key,
          value: metric.value,
          threshold: budgetValue,
          pageType,
          timestamp: Date.now(),
          message: `${key.toUpperCase()} (${metric.value.toFixed(2)}) exceeds budget (${budgetValue})`,
        });
      }
    }

    // Check resource metrics
    const resourceMetrics = this.data.resourceMetrics;
    if (resourceMetrics) {
      if (resourceMetrics.transferSize > budget.totalTransfer) {
        alerts.push({
          type: 'warning',
          metric: 'totalTransfer',
          value: resourceMetrics.transferSize,
          threshold: budget.totalTransfer,
          pageType,
          timestamp: Date.now(),
          message: `Total transfer size (${(resourceMetrics.transferSize / 1024).toFixed(0)}KB) exceeds budget (${(budget.totalTransfer / 1024).toFixed(0)}KB)`,
        });
      }

      if (resourceMetrics.resourceCount > budget.resourceCount) {
        alerts.push({
          type: 'warning',
          metric: 'resourceCount',
          value: resourceMetrics.resourceCount,
          threshold: budget.resourceCount,
          pageType,
          timestamp: Date.now(),
          message: `Resource count (${resourceMetrics.resourceCount}) exceeds budget (${budget.resourceCount})`,
        });
      }
    }

    return alerts;
  }
}

// ============================================================================
// REACT HOOKS
// ============================================================================

export function usePerformanceMonitor(options: {
  onMetric?: (metric: PerformanceMetric) => void;
  onAlert?: (alert: PerformanceAlert) => void;
  pageType?: string;
} = {}) {
  const collectorRef = useRef<PerformanceDataCollector | null>(null);
  const { onMetric, onAlert, pageType } = options;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize collector
    collectorRef.current = new PerformanceDataCollector();
    collectorRef.current.initialize();

    // Import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onLCP, onINP, onTTFB, onFCP }) => {
      const handleMetric = (metric: Metric) => {
        const perfMetric: PerformanceMetric = {
          name: metric.name,
          value: metric.value,
          rating: getRating(metric.name.toLowerCase(), metric.value),
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
        };

        collectorRef.current?.recordMetric(metric);
        onMetric?.(perfMetric);

        // Check for budget violations
        if (pageType && collectorRef.current) {
          const alerts = collectorRef.current.checkBudget(pageType);
          alerts.forEach(alert => onAlert?.(alert));
        }
      };

      onCLS(handleMetric);
      onLCP(handleMetric);
      onINP(handleMetric);
      onTTFB(handleMetric);
      onFCP(handleMetric);
    });

    // Flush on page hide
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        collectorRef.current?.flush();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      collectorRef.current?.flush();
    };
  }, [onMetric, onAlert, pageType]);

  const getPerformanceData = useCallback(() => {
    return collectorRef.current?.getData() ?? null;
  }, []);

  const checkBudget = useCallback((customPageType?: string) => {
    return collectorRef.current?.checkBudget(customPageType ?? pageType) ?? [];
  }, [pageType]);

  return { getPerformanceData, checkBudget };
}

// ============================================================================
// PERFORMANCE OBSERVER UTILITIES
// ============================================================================

export function observeLongTasks(callback: (entries: PerformanceEntry[]) => void): () => void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return () => {};
  }

  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ entryTypes: ['longtask'] });
    return () => observer.disconnect();
  } catch {
    return () => {};
  }
}

export function observeLayoutShifts(callback: (entries: PerformanceEntry[]) => void): () => void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return () => {};
  }

  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ type: 'layout-shift', buffered: true });
    return () => observer.disconnect();
  } catch {
    return () => {};
  }
}

export function observeLargestContentfulPaint(callback: (entry: PerformanceEntry) => void): () => void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return () => {};
  }

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) callback(lastEntry);
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
    return () => observer.disconnect();
  } catch {
    return () => {};
  }
}

// ============================================================================
// OPTIMIZATION SUGGESTIONS
// ============================================================================

export function generateOptimizationSuggestions(
  data: Partial<PagePerformanceData>
): string[] {
  const suggestions: string[] = [];
  const metrics = data.metrics || {};
  const resourceMetrics = data.resourceMetrics;

  // LCP suggestions
  if (metrics.lcp && metrics.lcp.rating !== 'good') {
    suggestions.push('Consider preloading the LCP element (hero image or main content)');
    suggestions.push('Ensure critical CSS is inlined');
    if (resourceMetrics && resourceMetrics.imageSize > 200000) {
      suggestions.push('Optimize hero images with modern formats (WebP/AVIF) and proper sizing');
    }
  }

  // CLS suggestions
  if (metrics.cls && metrics.cls.rating !== 'good') {
    suggestions.push('Add explicit width and height attributes to images');
    suggestions.push('Reserve space for dynamic content with CSS aspect-ratio');
    suggestions.push('Avoid inserting content above existing content');
  }

  // INP/FID suggestions
  if ((metrics.inp && metrics.inp.rating !== 'good') || 
      (metrics.fid && metrics.fid.rating !== 'good')) {
    suggestions.push('Break up long tasks into smaller chunks');
    suggestions.push('Use web workers for heavy computations');
    suggestions.push('Implement code splitting to reduce main thread blocking');
  }

  // TTFB suggestions
  if (metrics.ttfb && metrics.ttfb.rating !== 'good') {
    suggestions.push('Enable server-side caching');
    suggestions.push('Use a CDN closer to your users');
    suggestions.push('Consider edge rendering for dynamic content');
  }

  // Resource suggestions
  if (resourceMetrics) {
    if (resourceMetrics.scriptSize > 200000) {
      suggestions.push('Reduce JavaScript bundle size through code splitting');
      suggestions.push('Remove unused JavaScript with tree shaking');
    }
    if (resourceMetrics.resourceCount > 30) {
      suggestions.push('Reduce the number of HTTP requests');
      suggestions.push('Consider bundling small resources');
    }
  }

  return suggestions;
}

// ============================================================================
// EXPORTS
// ============================================================================

export { PerformanceDataCollector };
// Types are already exported via interface declarations above
