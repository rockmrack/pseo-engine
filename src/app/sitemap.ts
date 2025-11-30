import { MetadataRoute } from 'next';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';
import { serviceAreas } from '@/lib/data/areas';
import { blogPosts } from '@/lib/data/blog-templates';
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
  ];
}
