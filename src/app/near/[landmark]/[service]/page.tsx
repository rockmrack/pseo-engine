// ============================================================================
// PSEO ENGINE - NEAR ME / PROXIMITY PAGES
// Targeting "plumber near hampstead heath" type searches
// /near/[landmark]/[service]/page.tsx
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Navigation,
} from 'lucide-react';
import {
  landmarks,
  nearMeServices,
  getLandmark,
  generateNearMeParams,
} from '@/lib/data/landmarks';
import { services } from '@/lib/data/services';
import { locations } from '@/lib/data/locations';
import { siteConfig, BASE_URL } from '@/lib/config';

interface PageProps {
  params: Promise<{
    landmark: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  return generateNearMeParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { landmark: landmarkSlug, service: serviceSlug } = await params;
  const landmark = getLandmark(landmarkSlug);
  const service = services.find(s => s.slug === serviceSlug) || 
    { name: serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), slug: serviceSlug };

  if (!landmark) {
    return { title: 'Location Not Found' };
  }

  const title = `${service.name} Near ${landmark.name} | ${landmark.postcode} | ${siteConfig.businessName}`;
  const description = `Looking for a ${service.name.toLowerCase()} near ${landmark.name}? ${siteConfig.businessName} provides expert services in ${landmark.area}, ${landmark.postcode}. Fast response, local experts. Call ${siteConfig.phone}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/near/${landmarkSlug}/${serviceSlug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function NearMePage({ params }: PageProps) {
  const { landmark: landmarkSlug, service: serviceSlug } = await params;
  const landmark = getLandmark(landmarkSlug);
  
  // Find matching service or create basic one
  const service = services.find(s => s.slug === serviceSlug) || {
    name: serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    slug: serviceSlug,
    shortDescription: `Professional ${serviceSlug.replace(/-/g, ' ')} services`,
    priceAnchor: 'Competitive rates',
    category: 'general',
  };

  if (!landmark) {
    notFound();
  }

  // Find nearby streets
  const nearbyLocations = locations.filter(loc =>
    loc.area.toLowerCase() === landmark.area.toLowerCase() ||
    loc.postcode === landmark.postcode
  ).slice(0, 8);

  // Calculate distance from HQ to landmark
  const distance = calculateDistance(
    siteConfig.address.coordinates.lat,
    siteConfig.address.coordinates.lng,
    landmark.coordinates.lat,
    landmark.coordinates.lng
  );

  // Schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} near ${landmark.name}`,
    description: `Professional ${service.name.toLowerCase()} services near ${landmark.name}, ${landmark.area}`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        postalCode: siteConfig.address.postcode,
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.address.coordinates.lat,
        longitude: siteConfig.address.coordinates.lng,
      },
    },
    areaServed: {
      '@type': 'Place',
      name: landmark.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: landmark.coordinates.lat,
        longitude: landmark.coordinates.lng,
      },
    },
  };

  const landmarkTypeLabels: Record<string, string> = {
    park: '🌳 Park',
    station: '🚇 Station',
    attraction: '🏛️ Attraction',
    school: '🎓 School',
    hospital: '🏥 Hospital',
    shopping: '🛍️ Shopping',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-gold-400 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{landmark.area} • {landmark.postcode}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {service.name} Near {landmark.name}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Need a {service.name.toLowerCase()} near {landmark.name}? 
                Our office is just {distance} miles away, and we serve the entire {landmark.area} area.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Navigation className="w-5 h-5 text-gold-400" />
                  <span>{distance} miles from our office</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>Same day service</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Star className="w-5 h-5 text-gold-400" />
                  <span>4.9★ rated</span>
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
                <Link
                  href="/contact"
                  className="btn-outline text-center border-white text-white hover:bg-white hover:text-navy-900"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About the Landmark */}
        <section className="py-12 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{landmarkTypeLabels[landmark.type]}</span>
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  About {landmark.name}
                </h2>
                <p className="text-gray-700 mb-4">{landmark.description}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{landmark.area}, {landmark.postcode}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Only {distance} miles from {landmark.name}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Local knowledge of {landmark.area} properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Same day service available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Free quotes with no obligation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Fully insured and certified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Streets */}
        {nearbyLocations.length > 0 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Streets We Serve Near {landmark.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {nearbyLocations.map(location => (
                  <Link
                    key={location.slug}
                    href={`/local/${location.slug}/${service.slug}`}
                    className="flex items-center justify-between bg-white p-4 rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div>
                      <span className="font-medium text-navy-900">{location.name}</span>
                      <p className="text-sm text-gray-500">{location.postcode}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Services Near This Landmark */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Other Services Near {landmark.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearMeServices
                .filter(s => s !== serviceSlug)
                .map(otherService => (
                  <Link
                    key={otherService}
                    href={`/near/${landmarkSlug}/${otherService}`}
                    className="px-4 py-2 bg-white rounded-lg text-navy-700 hover:bg-navy-50 transition-colors border"
                  >
                    {otherService.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need a {service.name} Near {landmark.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;re just {distance} miles away. Call now for fast, reliable service.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gold-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
          </div>
        </section>

        {/* Other Landmarks */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Find a {service.name} Near Other Locations
            </h2>
            <div className="flex flex-wrap gap-3">
              {landmarks
                .filter(l => l.slug !== landmarkSlug)
                .slice(0, 10)
                .map(otherLandmark => (
                  <Link
                    key={otherLandmark.slug}
                    href={`/near/${otherLandmark.slug}/${serviceSlug}`}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-navy-700 hover:bg-gray-200 transition-colors"
                  >
                    Near {otherLandmark.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Haversine distance calculation
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): string {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance.toFixed(1);
}

export const revalidate = 86400; // 24 hours
