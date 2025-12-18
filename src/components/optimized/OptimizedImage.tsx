// ============================================================================
// OPTIMIZED IMAGE COMPONENT
// Next.js optimized image with lazy loading, blur placeholder, and SEO
// ============================================================================

import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16';
  fallback?: string;
  caption?: string;
}

// Blur placeholder SVG for images without blurDataURL
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f1f5f9" offset="20%" />
      <stop stop-color="#e2e8f0" offset="50%" />
      <stop stop-color="#f1f5f9" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f1f5f9" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export function OptimizedImage({
  src,
  alt,
  aspectRatio = '16/9',
  fallback = '/images/placeholder.jpg',
  caption,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  // Map aspect ratio to Tailwind classes
  const aspectRatioClasses: Record<string, string> = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '9/16': 'aspect-[9/16]',
  };

  return (
    <figure className={cn('relative overflow-hidden', className)}>
      <div className={cn('relative w-full', aspectRatioClasses[aspectRatio])}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
          onError={(e) => {
            // Fallback to placeholder on error
            const target = e.target as HTMLImageElement;
            target.src = fallback;
          }}
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ============================================================================
// HERO IMAGE - Priority loaded for above-the-fold content
// ============================================================================

interface HeroImageProps extends Omit<OptimizedImageProps, 'priority'> {
  overlay?: boolean;
  overlayOpacity?: number;
}

export function HeroImage({
  overlay = true,
  overlayOpacity = 0.5,
  className,
  ...props
}: HeroImageProps) {
  return (
    <div className={cn('relative', className)}>
      <OptimizedImage priority {...props} className="rounded-none" />
      {overlay && (
        <div 
          className="absolute inset-0 bg-slate-900"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}

// ============================================================================
// GALLERY IMAGE - Optimized for gallery grids with lightbox support
// ============================================================================

interface GalleryImageProps extends OptimizedImageProps {
  onClick?: () => void;
  showZoomIcon?: boolean;
}

export function GalleryImage({
  onClick,
  showZoomIcon = true,
  className,
  ...props
}: GalleryImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative group cursor-pointer overflow-hidden rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      aria-label={`View ${props.alt}`}
    >
      <OptimizedImage {...props} />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
        {showZoomIcon && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg 
              className="w-12 h-12 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
              />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}

// ============================================================================
// BEFORE/AFTER IMAGE - Side-by-side comparison
// ============================================================================

interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterImageProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-4', className)}>
      <div className="relative">
        <OptimizedImage
          src={beforeSrc}
          alt={beforeAlt}
          aspectRatio="4/3"
        />
        <span className="absolute top-2 left-2 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">
          Before
        </span>
      </div>
      <div className="relative">
        <OptimizedImage
          src={afterSrc}
          alt={afterAlt}
          aspectRatio="4/3"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          After
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// AVATAR IMAGE - Circular profile images
// ============================================================================

interface AvatarImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function AvatarImage({
  src,
  alt,
  size = 'md',
  className,
}: AvatarImageProps) {
  const sizeClasses: Record<string, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="96px"
      />
    </div>
  );
}
