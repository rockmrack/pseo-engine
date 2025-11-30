'use client';

// ============================================================================
// WEB VITALS PERFORMANCE MONITORING
// Tracks Core Web Vitals for SEO and performance optimization
// ============================================================================

import { useEffect } from 'react';

type MetricName = 'CLS' | 'FCP' | 'INP' | 'LCP' | 'TTFB';

interface Metric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  entries: PerformanceEntry[];
  navigationType: string;
}

// Thresholds for Core Web Vitals (in milliseconds, except CLS)
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

function getRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
    console.log(`${color} ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
  }

  // Send to Google Analytics 4 if available
  if (typeof window !== 'undefined') {
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (win.gtag) {
      win.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_rating: metric.rating,
      });
    }
  }

  // Beacon API for reliable sending
  if (typeof navigator !== 'undefined' && navigator.sendBeacon && process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      page: window.location.pathname,
      timestamp: Date.now(),
    });

    navigator.sendBeacon(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, body);
  }
}

export function WebVitals() {
  useEffect(() => {
    // Dynamic import for web-vitals to reduce initial bundle
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      const handleMetric = (metric: { name: string; value: number; delta: number; id: string; entries: PerformanceEntry[]; navigationType: string }) => {
        const metricName = metric.name as MetricName;
        const fullMetric: Metric = {
          ...metric,
          name: metricName,
          rating: getRating(metricName, metric.value),
        };
        sendToAnalytics(fullMetric);
      };

      // Cumulative Layout Shift
      onCLS(handleMetric);
      // First Contentful Paint
      onFCP(handleMetric);
      // Interaction to Next Paint (new Core Web Vital)
      onINP(handleMetric);
      // Largest Contentful Paint
      onLCP(handleMetric);
      // Time to First Byte
      onTTFB(handleMetric);
    }).catch(() => {
      // web-vitals not available, silently fail
    });
  }, []);

  return null;
}

// ============================================================================
// PERFORMANCE OBSERVER HOOK
// For custom performance measurements
// ============================================================================

export function usePerformanceObserver(callback: (entries: PerformanceEntry[]) => void) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });

    // Observe various performance entry types
    try {
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'longtask'] });
    } catch {
      // Some entry types may not be supported
      observer.observe({ entryTypes: ['navigation'] });
    }

    return () => observer.disconnect();
  }, [callback]);
}

// ============================================================================
// PERFORMANCE MARKS FOR CUSTOM TIMING
// ============================================================================

export function markPerformance(name: string) {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(name);
  }
}

export function measurePerformance(name: string, startMark: string, endMark?: string) {
  if (typeof window !== 'undefined' && 'performance' in window) {
    try {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }

      const entries = performance.getEntriesByName(name, 'measure');
      const lastEntry = entries[entries.length - 1];

      if (process.env.NODE_ENV === 'development' && lastEntry) {
        console.log(`⏱️ ${name}: ${lastEntry.duration.toFixed(2)}ms`);
      }

      return lastEntry?.duration;
    } catch {
      return undefined;
    }
  }
  return undefined;
}
