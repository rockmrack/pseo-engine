import { MetadataRoute } from 'next';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';
import { blogPosts } from '@/lib/data/blog-templates';
import { postcodeClusters } from '@/lib/data/postcode-clusters';
import { neighborhoodHubs } from '@/lib/data/neighborhood-hubs';
import { landmarks } from '@/lib/data/landmarks';
import { emergencyServices, emergencyAreas } from '@/lib/data/emergency-services';
// 5x SEO Domination imports
import { generateSeasonalParams } from '@/lib/data/seasonal-services';
import { generateComparisonParams } from '@/lib/data/comparison-pages';
import { generateProblemParams } from '@/lib/data/problems-database';
import { generatePropertyServiceParams } from '@/lib/data/property-matrix';
import { generateTrustParams } from '@/lib/data/trust-pages';
// 10x SEO Domination imports
import { generateStreetParams } from '@/lib/data/streets-database';
import { generateCertificationParams } from '@/lib/data/certifications-database';
import { generateFAQParams } from '@/lib/data/faq-database';
import { generatePriceParams } from '@/lib/data/price-database';
import { generateProjectParams } from '@/lib/data/projects-database';
import { generateEmergencyParams } from '@/lib/data/emergency-database';
import { BASE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service category pages
  const serviceCategories = Array.from(new Set(services.map(s => s.category)));
  const serviceCategoryPages: MetadataRoute.Sitemap = serviceCategories.map(category => ({
    url: `${baseUrl}/services/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Individual service pages
  const servicePages: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/services/${service.category}/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Area hub pages
  const areas = Array.from(new Set(locations.map(l => l.area)));
  const areaPages: MetadataRoute.Sitemap = areas.map(area => ({
    url: `${baseUrl}/areas/${area.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location hub pages
  const locationHubPages: MetadataRoute.Sitemap = locations.map(location => ({
    url: `${baseUrl}/local/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // pSEO pages: Location + Service combinations
  // This is where the magic happens - generating 5000+ URLs
  const pseoPages: MetadataRoute.Sitemap = [];

  for (const location of locations) {
    for (const service of services) {
      pseoPages.push({
        url: `${baseUrl}/local/${location.slug}/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  // Service area hub pages (postcode areas, boroughs)
  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map(area => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    ...blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Gallery page
  const galleryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // ============================================================================
  // NEW pSEO PAGE TYPES FOR 10x SEO DOMINATION
  // ============================================================================

  // Postcode cluster pages (NW3, NW6, N6, etc.)
  const postcodePages: MetadataRoute.Sitemap = postcodeClusters.map(cluster => ({
    url: `${baseUrl}/postcodes/${cluster.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Neighborhood hub pages (comprehensive area guides)
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoodHubs.map(hub => ({
    url: `${baseUrl}/neighborhoods/${hub.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Emergency service pages (high-intent searches)
  const emergencyPages: MetadataRoute.Sitemap = [];
  for (const emergency of emergencyServices) {
    for (const area of emergencyAreas) {
      emergencyPages.push({
        url: `${baseUrl}/emergency/${emergency.slug}/${area.slug}`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const, // High priority for emergency pages
        priority: 0.95, // Highest priority for high-intent emergency searches
      });
    }
  }

  // Near landmark pages (proximity searches like "plumber near hampstead heath")
  const nearLandmarkPages: MetadataRoute.Sitemap = [];
  // Select top services for landmark combinations
  const topServices = services.filter(s => 
    ['plumbing', 'electrical', 'heating'].includes(s.category) ||
    s.slug.includes('boiler') || 
    s.slug.includes('bathroom') ||
    s.slug.includes('kitchen')
  ).slice(0, 15);
  
  for (const landmark of landmarks) {
    for (const service of topServices) {
      nearLandmarkPages.push({
        url: `${baseUrl}/near/${landmark.slug}/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      });
    }
  }

  // ============================================================================
  // 5x SEO DOMINATION - NEW PAGE TYPES
  // ============================================================================

  // Seasonal service pages (e.g., "winter boiler service in hampstead")
  const seasonalParams = generateSeasonalParams();
  const seasonalPages: MetadataRoute.Sitemap = seasonalParams.map(p => ({
    url: `${baseUrl}/seasons/${p.season}/${p.service}/${p.area}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Comparison pages (e.g., "combi vs system boiler")
  const comparisonParams = generateComparisonParams();
  const comparisonPages: MetadataRoute.Sitemap = comparisonParams.map(p => ({
    url: `${baseUrl}/compare/${p.comparison}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Problem/solution pages (e.g., "radiator not heating up")
  const problemParams = generateProblemParams();
  const problemPages: MetadataRoute.Sitemap = problemParams.map(p => ({
    url: `${baseUrl}/problems/${p.problem}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Property-service matrix pages (e.g., "rewiring victorian terraced house")
  const propertyServiceParams = generatePropertyServiceParams();
  const propertyServicePages: MetadataRoute.Sitemap = propertyServiceParams.map(p => ({
    url: `${baseUrl}/property-services/${p.buildingType}/${p.service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Trust/recommendation pages (e.g., "trusted builders in hampstead")
  const trustParams = generateTrustParams();
  const trustAreaPages: MetadataRoute.Sitemap = trustParams.map(p => ({
    url: `${baseUrl}/trusted-in/${p.area}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // ============================================================================
  // 10x SEO DOMINATION - NEW PAGE TYPES
  // ============================================================================

  // Street-level pages (e.g., "renovations on heath-street")
  const streetParams = generateStreetParams();
  const streetPages: MetadataRoute.Sitemap = streetParams.map(p => ({
    url: `${baseUrl}/streets/${p.street}/${p.service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Fix/Problem+Area pages (e.g., "fix leaking-pipe in hampstead")
  const fixProblemParams = generateProblemParams();
  const uniqueAreas = Array.from(new Set(locations.map(l => l.area)));
  const areaSlugMap = uniqueAreas.map(a => a.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''));
  const fixPages: MetadataRoute.Sitemap = [];
  for (const problem of fixProblemParams) {
    for (const areaSlug of areaSlugMap) {
      fixPages.push({
        url: `${baseUrl}/fix/${problem.problem}/${areaSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      });
    }
  }

  // Emergency time-based pages (e.g., "24-hour plumber in hampstead")
  const emergencyTimeParams = generateEmergencyParams();
  const emergencyTimePages: MetadataRoute.Sitemap = emergencyTimeParams.map(p => ({
    url: `${baseUrl}/urgent/${p.time}/${p.service}/${p.area}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.95,
  }));

  // Price guide pages (e.g., "bathroom-renovation prices in hampstead")
  const priceParams = generatePriceParams();
  const priceGuidePages: MetadataRoute.Sitemap = priceParams.map(p => ({
    url: `${baseUrl}/prices/${p.service}/${p.area}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Project portfolio pages (e.g., "victorian-renovation projects in hampstead")
  const projectParams = generateProjectParams();
  const projectPortfolioPages: MetadataRoute.Sitemap = projectParams.map(p => ({
    url: `${baseUrl}/projects/${p.type}/${p.area}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  // Certification pages (e.g., "gas-safe certified boiler-installation")
  const certificationParams = generateCertificationParams();
  const certificationPages: MetadataRoute.Sitemap = certificationParams.map(p => ({
    url: `${baseUrl}/certified/${p.certification}/${p.service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // FAQ hub pages (e.g., "renovation faqs about planning")
  const faqParams = generateFAQParams();
  const faqHubPages: MetadataRoute.Sitemap = faqParams.map(p => ({
    url: `${baseUrl}/faqs/${p.category}/${p.topic}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Reviews by area pages
  const reviewsPages: MetadataRoute.Sitemap = areaSlugMap.map(areaSlug => ({
    url: `${baseUrl}/reviews/${areaSlug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Booking pages (e.g., "book bathroom-renovation in hampstead")
  const bookingPages: MetadataRoute.Sitemap = [];
  for (const service of services.slice(0, 15)) {
    for (const areaSlug of areaSlugMap) {
      bookingPages.push({
        url: `${baseUrl}/book/${service.slug}/${areaSlug}`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      });
    }
  }

  // Combine all pages
  return [
    ...staticPages,
    ...serviceCategoryPages,
    ...servicePages,
    ...areaPages,
    ...serviceAreaPages,
    ...locationHubPages,
    ...pseoPages,
    ...blogPages,
    ...galleryPages,
    // New 10x SEO pages
    ...postcodePages,
    ...neighborhoodPages,
    ...emergencyPages,
    ...nearLandmarkPages,
    // 5x SEO Domination pages
    ...seasonalPages,
    ...comparisonPages,
    ...problemPages,
    ...propertyServicePages,
    ...trustAreaPages,
    // 10x SEO Domination pages
    ...streetPages,
    ...fixPages,
    ...emergencyTimePages,
    ...priceGuidePages,
    ...projectPortfolioPages,
    ...certificationPages,
    ...faqHubPages,
    ...reviewsPages,
    ...bookingPages,
  ];
}
