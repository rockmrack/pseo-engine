// ============================================================================
// PSEO ENGINE - NEIGHBORHOOD HUB PAGE
// Comprehensive area guides for local authority
// /neighborhoods/[slug]/page.tsx
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Train,
  Home,
  Users,
  Landmark,
  TreePine,
  Building,
  FileText,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import {
  neighborhoodHubs,
  getNeighborhoodHub,
  getAllNeighborhoodSlugs,
} from '@/lib/data/neighborhood-hubs';
import { services } from '@/lib/data/services';
import { locations } from '@/lib/data/locations';
import { siteConfig, BASE_URL } from '@/lib/config';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllNeighborhoodSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodHub(slug);

  if (!neighborhood) {
    return { title: 'Neighborhood Not Found' };
  }

  return {
    title: neighborhood.metaTitle,
    description: neighborhood.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/neighborhoods/${slug}`,
    },
    openGraph: {
      title: neighborhood.metaTitle,
      description: neighborhood.metaDescription,
      type: 'website',
    },
  };
}

export default async function NeighborhoodHubPage({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodHub(slug);

  if (!neighborhood) {
    notFound();
  }

  // Get related services
  const topServicesData = neighborhood.topServices
    .map(s => services.find(svc => svc.slug === s))
    .filter(Boolean);

  // Get locations in this neighborhood
  const localStreets = locations.filter(loc =>
    loc.area.toLowerCase() === neighborhood.name.toLowerCase() ||
    neighborhood.postcodes.some(pc => loc.postcode === pc)
  );

  // Schema markup
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/neighborhoods/${slug}/#service-point`,
    name: `${siteConfig.businessName} - ${neighborhood.name}`,
    description: neighborhood.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: `${BASE_URL}/neighborhoods/${slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: neighborhood.name,
      addressRegion: 'London',
      postalCode: neighborhood.postcodes[0],
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Place',
      name: neighborhood.name,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      '@id': `${BASE_URL}/#organization`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 47,
      bestRating: 5,
    },
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: neighborhood.name,
    description: neighborhood.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: neighborhood.name,
      addressRegion: 'London',
      postalCode: neighborhood.postcodes[0],
      addressCountry: 'GB',
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: neighborhood.borough,
    },
  };

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-gold-400 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{neighborhood.postcodes.join(' / ')} • {neighborhood.borough}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {neighborhood.h1}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {neighborhood.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Home className="w-5 h-5 text-gold-400" />
                  <span>{neighborhood.demographics.avgPropertyPrice} avg</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Users className="w-5 h-5 text-gold-400" />
                  <span>{neighborhood.demographics.population}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Star className="w-5 h-5 text-gold-400" />
                  <span>{neighborhood.demographics.affluenceLevel}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="btn-primary text-center"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call {siteConfig.phone}
                </a>
                <Link href="/contact" className="btn-outline text-center border-white text-white hover:bg-white hover:text-navy-900">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="py-12 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Train className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold text-navy-900 mb-2">Transport</h3>
                <p className="text-sm text-gray-600">Zone {neighborhood.transport.travelZone}</p>
                <p className="text-sm text-gray-600">{neighborhood.transport.stations[0]}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Building className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold text-navy-900 mb-2">Properties</h3>
                <p className="text-sm text-gray-600">{neighborhood.demographics.predominantPropertyTypes[0]}</p>
                <p className="text-sm text-gray-600">{neighborhood.demographics.predominantPropertyTypes[1]}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <FileText className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold text-navy-900 mb-2">Council</h3>
                <p className="text-sm text-gray-600">{neighborhood.council.name}</p>
                <p className="text-sm text-gray-600">{neighborhood.council.conservationAreas.length} conservation areas</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Clock className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold text-navy-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">Same day service</p>
                <p className="text-sm text-gray-600">2hr emergency response</p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Area */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">
                  About {neighborhood.name}
                </h2>
                <div className="prose prose-lg text-gray-700 mb-8">
                  {neighborhood.history.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
                <div className="prose prose-lg text-gray-700">
                  {neighborhood.character.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {/* Landmarks */}
                <div className="bg-cream-50 rounded-2xl p-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-navy-900 mb-4">
                    <Landmark className="w-6 h-6 text-gold-500" />
                    Local Landmarks
                  </h3>
                  <ul className="space-y-2">
                    {neighborhood.landmarks.map((landmark, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Parks */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-navy-900 mb-4">
                    <TreePine className="w-6 h-6 text-green-600" />
                    Parks & Green Spaces
                  </h3>
                  <ul className="space-y-2">
                    {neighborhood.parks.map((park, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {park}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Famous Residents */}
                {neighborhood.famousResidents && neighborhood.famousResidents.length > 0 && (
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-navy-900 mb-4">
                      <Star className="w-6 h-6 text-purple-600" />
                      Notable Residents
                    </h3>
                    <ul className="space-y-2">
                      {neighborhood.famousResidents.slice(0, 5).map((resident, i) => (
                        <li key={i} className="text-gray-700">{resident}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Common Property Issues */}
        <section className="py-16 bg-navy-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Common Property Challenges in {neighborhood.name}
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Our extensive experience in {neighborhood.name} means we understand the unique challenges
              of properties in this area. Here's what we commonly help with:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhood.commonIssues.map((issue, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6">
                  <p className="text-gray-100">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Popular Services in {neighborhood.name}
            </h2>
            <p className="text-gray-600 mb-12">
              Based on local property types and common requirements, here are the services most requested
              by {neighborhood.name} residents.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topServicesData.map((service) => service && (
                <Link
                  key={service.slug}
                  href={`/services/${service.category}/${service.slug}`}
                  className="group bg-white border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-600 font-semibold">{service.priceAnchor}</span>
                    <ArrowRight className="w-5 h-5 text-navy-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Streets We Cover */}
        {localStreets.length > 0 && (
          <section className="py-16 bg-cream-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                Streets We Cover in {neighborhood.name}
              </h2>
              <p className="text-gray-600 mb-8">
                We provide services to these streets and surrounding areas in {neighborhood.postcodes.join(', ')}.
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {localStreets.slice(0, 20).map(street => (
                  <Link
                    key={street.slug}
                    href={`/local/${street.slug}`}
                    className="bg-white px-4 py-3 rounded-lg text-navy-700 hover:bg-navy-50 transition-colors border flex items-center justify-between"
                  >
                    <span>{street.name}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>

              {localStreets.length > 20 && (
                <p className="mt-6 text-center text-gray-600">
                  Plus {localStreets.length - 20} more streets in {neighborhood.name}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Planning Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Planning & Conservation in {neighborhood.name}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Conservation Areas</h3>
                  {neighborhood.council.conservationAreas.length > 0 ? (
                    <ul className="space-y-2">
                      {neighborhood.council.conservationAreas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No major conservation area restrictions</p>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Planning Authority</h3>
                  <p className="text-gray-700 mb-2">{neighborhood.council.name}</p>
                  <a
                    href={neighborhood.council.planningPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Planning Portal →
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <p className="text-gray-700">
                  <strong>Need help with planning?</strong> We regularly work with {neighborhood.council.name}
                  planning department and can advise on what permissions you may need for your project.
                  Many of our services fall under Permitted Development, meaning no planning application is required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your {neighborhood.name} Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free, no-obligation quote from our local {neighborhood.name} team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="btn-primary text-center text-lg"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="btn-outline text-center text-lg border-white text-white hover:bg-white hover:text-navy-900"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Adjacent Areas */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              We Also Serve Nearby Areas
            </h2>

            <div className="flex flex-wrap gap-3">
              {neighborhood.adjacentAreas.map(areaSlug => {
                const adjacentArea = neighborhoodHubs.find(n => n.slug === areaSlug);
                return adjacentArea ? (
                  <Link
                    key={areaSlug}
                    href={`/neighborhoods/${areaSlug}`}
                    className="px-4 py-2 bg-white rounded-lg text-navy-700 hover:bg-navy-50 transition-colors border"
                  >
                    {adjacentArea.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const revalidate = 86400; // 24 hours
