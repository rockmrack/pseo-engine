import { MetadataRoute } from 'next';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';
import { blogPosts } from '@/lib/data/blog-templates';
import { postcodeClusters } from '@/lib/data/postcode-clusters';
import { neighborhoodHubs } from '@/lib/data/neighborhood-hubs';
import { landmarks } from '@/lib/data/landmarks';
import { emergencyServices, emergencyAreas } from '@/lib/data/emergency-services';
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
  ];
}
