import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ArrowRight, Phone, CheckCircle, Clock, Navigation } from 'lucide-react';
import { locations, getLocationBySlug, getNearbyLocations } from '@/lib/data/locations';
import { services, getAllCategories } from '@/lib/data/services';
import { getDistanceFromHQ } from '@/lib/content-engine';
import { siteConfig, BASE_URL } from '@/lib/config';

interface PageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.location);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Home Services in ${location.name}, ${location.postcode} | ${siteConfig.businessName}`,
    description: `Expert plumbers, electricians, carpenters and builders serving ${location.name}, ${location.area}. Trusted local tradespeople with fast response times in ${location.postcode}.`,
    alternates: {
      canonical: `${BASE_URL}/local/${location.slug}`,
    },
  };
}

export default async function LocationHubPage({ params }: PageProps) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.location);

  if (!location) {
    notFound();
  }

  const distance = getDistanceFromHQ(location);
  const nearbyLocations = getNearbyLocations(location.slug, 6);
  const categories = getAllCategories();

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = services.filter(s => s.category === category);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16 md:py-24">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Only {distance} miles away
              </div>

              <h1 className="heading-1 mb-6">
                Home Services in{' '}
                <span className="text-gold-400">{location.name}</span>
              </h1>

              <p className="body-large text-navy-200 mb-8">
                Expert plumbers, electricians, carpenters and builders serving {location.name} and
                the {location.area} area. Based just {distance} miles away at {siteConfig.address.street}.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="badge bg-white/10 text-white backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 mr-1 text-gold-400" />
                  {location.postcode}
                </span>
                <span className="badge bg-white/10 text-white backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 mr-1 text-gold-400" />
                  {location.borough}
                </span>
                <span className="badge bg-white/10 text-white backdrop-blur-sm">
                  <Clock className="w-4 h-4 mr-1 text-gold-400" />
                  2hr Response
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call {siteConfig.phone}
                </a>
                <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Location Info Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-white mb-6">About {location.name}</h2>

              <div className="space-y-4 text-navy-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Location</div>
                    <div>{location.area}, {location.borough}, {location.postcode}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Distance from Our Office</div>
                    <div>{distance} miles from {siteConfig.address.street}</div>
                  </div>
                </div>

                {location.landmarks.length > 0 && (
                  <div className="flex items-start gap-3">
                    <span className="text-gold-400 mt-0.5">🏛️</span>
                    <div>
                      <div className="font-medium text-white">Nearby Landmarks</div>
                      <div>{location.landmarks.join(', ')}</div>
                    </div>
                  </div>
                )}

                {location.transportLinks.length > 0 && (
                  <div className="flex items-start gap-3">
                    <span className="text-gold-400 mt-0.5">🚇</span>
                    <div>
                      <div className="font-medium text-white">Transport</div>
                      <div>{location.transportLinks.join(', ')}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-white scroll-mt-20">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              Services Available in {location.name}
            </h2>
            <p className="body-large text-navy-600 max-w-2xl mx-auto">
              Browse our full range of services available in {location.name} and the surrounding area.
            </p>
          </div>

          <div className="space-y-12">
            {categories.slice(0, 6).map((category) => (
              <div key={category}>
                <h3 className="heading-4 text-navy-900 mb-6 capitalize">
                  {category.replace(/-/g, ' ')}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {servicesByCategory[category].slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/local/${location.slug}/${service.slug}`}
                      className="flex items-center justify-between p-4 bg-cream-50 hover:bg-cream-100 rounded-xl border border-cream-200 hover:border-gold-300 transition-all group"
                    >
                      <div>
                        <div className="font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                          {service.name}
                        </div>
                        <div className="text-sm text-navy-500">{service.priceAnchor}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyLocations.length > 0 && (
        <section className="section-cream">
          <div className="container-lg">
            <div className="text-center mb-10">
              <h2 className="heading-3 text-navy-900 mb-4">
                Also Serving Nearby Streets
              </h2>
              <p className="text-navy-600">
                We provide the same great service to these neighbouring streets:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/local/${nearby.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200 hover:border-gold-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <MapPin className="w-5 h-5 text-gold-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">{nearby.name}</div>
                    <div className="text-sm text-navy-500">{nearby.area}, {nearby.postcode}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-navy">
        <div className="container-lg text-center">
          <h2 className="heading-2 text-white mb-4">
            Need a Tradesperson in {location.name}?
          </h2>
          <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
            We're just {distance} miles away. Call now for a free quote or emergency callout.
          </p>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}

export const revalidate = 86400; // Revalidate every 24 hours
