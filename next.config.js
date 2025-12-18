/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for optimized Docker/serverless deployments
  output: 'standalone',

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization with aggressive caching
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache for images
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Performance optimizations - 5x improvement features
  experimental: {
    // Tree-shake imports from large packages (framer-motion removed, keep for lucide)
    optimizePackageImports: ['lucide-react', 'clsx', 'tailwind-merge'],
    // Note: PPR and inlineCss require Next.js canary - enable when upgrading
    // ppr: 'incremental',
    // inlineCss: true,
  },

  // Enable React strict mode for better performance debugging
  reactStrictMode: true,

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Disable x-powered-by header
  poweredByHeader: false,

  // Generate ETags for caching
  generateEtags: true,

  // Compress responses
  compress: true,

  // Aggressive caching headers
  async headers() {
    return [
      // Global headers
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
      // Static assets - cache for 1 year
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // JS/CSS chunks - cache for 1 year (they have hashes)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // pSEO pages - aggressive caching with stale-while-revalidate
      {
        source: '/local/:location/:service',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=604800',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
      // Location hub pages
      {
        source: '/local/:location',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
          },
        ],
      },
      // Sitemap - cache for 1 hour
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      // Robots - cache for 1 day
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/services/:service',
        destination: '/local/london/:service',
        permanent: true,
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations only
    if (!dev) {
      // Enable tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: true,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
