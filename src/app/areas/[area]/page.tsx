import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';

import { getServiceArea, allAreaSlugs, serviceAreas } from '@/lib/data/areas';
import { getLocation, getService } from '@/lib/data-access';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';
import { BASE_URL, siteConfig } from '@/lib/config';

// ============================================================================
// SERVICE CATEGORY ICONS
// ============================================================================

const categoryIcons: Record<string, string> = {
  plumbing: '🔧',
  electrical: '⚡',
  heating: '🔥',
  building: '🏠',
  renovation: '🛠️',
  flooring: '🪵',
  painting: '🎨',
  roofing: '🏗️',
  windows: '🪟',
  drainage: '🚿',
  default: '🔨',
};

function getServiceIcon(category: string): string {
  return categoryIcons[category] || categoryIcons.default;
}

// ============================================================================
// STATIC PARAMS - Generate all area pages at build time
// ============================================================================

export function generateStaticParams() {
  return allAreaSlugs.map(area => ({ area }));
}

// ============================================================================
// METADATA
// ============================================================================

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getServiceArea(areaSlug);

  if (!area) {
    return { title: 'Area Not Found' };
  }

  const title = `Home Services in ${area.name} | ${siteConfig.businessName}`;
  const description = `Professional plumbing, electrical, and renovation services covering ${area.name}. Trusted local tradesmen with 10+ years experience. Call ${siteConfig.phone} for a free quote.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/areas/${areaSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/areas/${areaSlug}`,
      siteName: siteConfig.businessName,
      locale: 'en_GB',
      type: 'website',
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function AreaPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = getServiceArea(areaSlug);

  if (!area) {
    notFound();
  }

  // Get location and service details
  // For postcodes, find actual street locations within this postcode area
  // For boroughs/regions, find locations in that borough/area
  const areaLocations = area.type === 'postcode'
    ? locations.filter(l => l.postcode.toLowerCase() === areaSlug.toLowerCase())
    : locations.filter(l => 
        l.borough.toLowerCase().replace(/\s+/g, '-') === areaSlug.toLowerCase() ||
        l.area.toLowerCase().replace(/\s+/g, '-') === areaSlug.toLowerCase()
      );

  const popularServices = area.popularServices
    .map(slug => services.find(s => s.slug === slug))
    .filter(Boolean);
  
  // Get the first actual location slug for service links
  const primaryLocationSlug = areaLocations.length > 0 ? areaLocations[0].slug : null;

  const typeLabel = area.type === 'postcode' ? 'Postcode Area' : area.type === 'borough' ? 'London Borough' : 'Region';

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Home Renovation Services in ${area.name}`,
            description: area.description,
            provider: {
              '@type': 'LocalBusiness',
              name: siteConfig.businessName,
              telephone: siteConfig.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                postalCode: siteConfig.address.postcode,
                addressCountry: 'GB',
              },
            },
            areaServed: areaLocations.map(loc => ({
              '@type': 'Place',
              name: loc?.name,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-luxury text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-400 text-sm font-medium rounded-full mb-4">
              {typeLabel}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Home Services in {area.name}
            </h1>
            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
              {area.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="#locations"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View All Locations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Popular Services in {area.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map(service => service && primaryLocationSlug && (
              <Link
                key={service.slug}
                href={`/local/${primaryLocationSlug}/${service.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-cream-200"
              >
                <div className="text-4xl mb-4">{getServiceIcon(service.category)}</div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-navy-600 mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-600 font-medium">
                    From {service.priceAnchor}
                  </span>
                  <ArrowRight className="w-5 h-5 text-navy-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section id="locations" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Areas We Cover in {area.name}
          </h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            Click on any location below to see all services available in that area.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areaLocations.map(location => location && (
              <Link
                key={location.slug}
                href={`/local/${location.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-cream-200 hover:border-gold-400 hover:shadow-md transition-all"
              >
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-navy-900 block">
                    {location.name}
                  </span>
                  <span className="text-sm text-navy-500">
                    {location.postcode}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Us in {area.name}?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Local Experts', desc: 'Tradesmen who know your area inside out' },
              { title: 'Fast Response', desc: 'Same-day service available across the area' },
              { title: 'Fixed Pricing', desc: 'No hidden fees, transparent quotes' },
              { title: 'Guaranteed Work', desc: 'All work backed by our quality guarantee' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-cream-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            All Services Available in {area.name}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map(service => primaryLocationSlug && (
              <Link
                key={service.slug}
                href={`/local/${primaryLocationSlug}/${service.slug}`}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-cream-200 hover:border-gold-400 transition-colors"
              >
                <span className="text-2xl">{getServiceIcon(service.category)}</span>
                <span className="text-navy-800 font-medium">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Nearby Service Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {serviceAreas
              .filter(a => a.slug !== areaSlug)
              .slice(0, 8)
              .map(relatedArea => (
                <Link
                  key={relatedArea.slug}
                  href={`/areas/${relatedArea.slug}`}
                  className="px-4 py-2 bg-cream-100 hover:bg-cream-200 text-navy-800 rounded-full transition-colors"
                >
                  {relatedArea.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Need a Tradesman in {area.name}?
          </h2>
          <p className="text-navy-800 mb-8 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Our friendly team is ready to help with any home improvement project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 86400; // 24 hours
