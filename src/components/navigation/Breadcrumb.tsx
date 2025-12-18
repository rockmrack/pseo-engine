// ============================================================================
// BREADCRUMB COMPONENT WITH SCHEMA MARKUP
// SEO Improvement #26 - Structured breadcrumb navigation
// ============================================================================

import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb component with BreadcrumbList schema markup
 * Improves navigation UX and enables rich snippets in search results
 */
export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href.startsWith('http') 
        ? item.href 
        : `https://hampsteadrenovations.co.uk${item.href}`,
    })),
  };

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual breadcrumb */}
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="h-4 w-4 text-gray-400 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {item.current ? (
                <span 
                  className="text-gray-500"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Helper function to generate breadcrumb items for common page structures
 */
export function generateBreadcrumbs(
  pageType: string,
  params: Record<string, string>
): BreadcrumbItem[] {
  const home: BreadcrumbItem = { name: 'Home', href: '/' };
  
  switch (pageType) {
    case 'service':
      return [
        home,
        { name: 'Services', href: '/services' },
        { name: params.serviceName, href: `/services/${params.service}`, current: true },
      ];
      
    case 'local-service':
      return [
        home,
        { name: 'Services', href: '/services' },
        { name: params.serviceName, href: `/services/${params.service}` },
        { name: params.locationName, href: `/local/${params.location}/${params.service}`, current: true },
      ];
      
    case 'area':
      return [
        home,
        { name: 'Areas', href: '/areas' },
        { name: params.areaName, href: `/areas/${params.area}`, current: true },
      ];
      
    case 'cost-guide':
      return [
        home,
        { name: 'Cost Guides', href: '/cost-guides' },
        { name: params.serviceName, href: `/cost-guides/${params.service}` },
        { name: params.areaName, href: `/cost-guides/${params.service}/${params.area}`, current: true },
      ];
      
    case 'case-study':
      return [
        home,
        { name: 'Case Studies', href: '/case-studies' },
        { name: params.title, href: `/case-studies/${params.slug}`, current: true },
      ];
      
    case 'checklist':
      return [
        home,
        { name: 'Checklists', href: '/checklists' },
        { name: params.name, href: `/checklists/${params.type}`, current: true },
      ];
      
    case 'decision-guide':
      return [
        home,
        { name: 'Decision Guides', href: '/decisions' },
        { name: params.title, href: `/decisions/${params.comparison}`, current: true },
      ];
      
    case 'borough':
      return [
        home,
        { name: 'London Boroughs', href: '/boroughs' },
        { name: params.boroughName, href: `/borough/${params.borough}`, current: true },
      ];
      
    case 'landlord':
      return [
        home,
        { name: 'Landlord Services', href: '/landlords' },
        { name: params.serviceName, href: `/landlords/${params.service}`, current: true },
      ];
      
    case 'same-day':
      return [
        home,
        { name: 'Same Day Services', href: '/same-day' },
        { name: params.serviceName, href: `/same-day/${params.service}` },
        { name: params.areaName, href: `/same-day/${params.service}/${params.area}`, current: true },
      ];
      
    case 'gallery':
      return [
        home,
        { name: 'Gallery', href: '/gallery' },
        { name: params.serviceName, href: `/gallery/${params.service}`, current: true },
      ];
      
    case 'package':
      return [
        home,
        { name: 'Maintenance Packages', href: '/packages' },
        { name: params.packageName, href: `/packages/${params.package}`, current: true },
      ];
      
    case 'brand-alternative':
      return [
        home,
        { name: 'Brand Alternatives', href: '/alternatives' },
        { name: params.brandName, href: `/alternatives/${params.brand}`, current: true },
      ];
      
    case 'testimonials':
      return [
        home,
        { name: 'Reviews', href: '/reviews' },
        { name: params.categoryName, href: `/reviews/${params.category}`, current: true },
      ];
      
    case 'blog':
      return [
        home,
        { name: 'Blog', href: '/blog' },
        { name: params.title, href: `/blog/${params.slug}`, current: true },
      ];
      
    default:
      return [home];
  }
}

export default Breadcrumb;
