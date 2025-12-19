// ============================================================================
// PSEO ENGINE - OPTIMIZED COMPONENTS
// 1000x Performance: Lazy loading, code splitting, optimized rendering
// ============================================================================

export { LazySection, LazyImage, DeferredContent } from './LazySection';
export { OptimizedImage } from './OptimizedImage';

// Re-export performance monitoring hooks
export { 
  usePerformanceMonitor,
  observeLongTasks,
  observeLayoutShifts,
  generateOptimizationSuggestions,
} from '@/lib/performance-monitor';

// Re-export cache utilities
export { 
  pageCache,
  locationCache,
  serviceCache,
  cacheKeys,
} from '@/lib/advanced-cache';

// Re-export content generation
export {
  contentGenerator,
  generateUniqueH1,
  generateUniqueMetaTitle,
  generateUniqueMetaDescription,
} from '@/lib/content-engine-v2';

// Re-export A/B testing utilities
export {
  getClientABTestVariant,
  getClientABTestValue,
  trackABConversion,
} from '@/lib/edge-middleware';
