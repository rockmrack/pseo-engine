import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ArrowRight, Phone, CheckCircle, Clock, Navigation, Home, TrendingUp, Shield, Wrench, Star, Calendar } from 'lucide-react';
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

      {/* NEW: Street-Level Authority Section */}
      {location.streetData && (
        <section className="section bg-white">
          <div className="container-lg">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">
                Your Local Experts for {location.name}
              </h2>
              <p className="body-large text-navy-600 max-w-2xl mx-auto">
                We understand the unique characteristics of properties on {location.name}. Here&apos;s what makes this street special.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Property Market Data */}
              {(location.streetData.avgSoldPrice || location.streetData.recentSales) && (
                <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-gold-600" />
                    </div>
                    <h3 className="heading-5 text-navy-900">Property Values</h3>
                  </div>
                  {location.streetData.avgSoldPrice && (
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-navy-900">{location.streetData.avgSoldPrice}</div>
                      <div className="text-sm text-navy-500">Average sold price</div>
                    </div>
                  )}
                  {location.streetData.pricePerSqFt && (
                    <div className="mb-4">
                      <div className="text-lg font-semibold text-navy-700">{location.streetData.pricePerSqFt}</div>
                      <div className="text-sm text-navy-500">Average price per sq ft</div>
                    </div>
                  )}
                  {location.streetData.recentSales && location.streetData.recentSales.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-cream-300">
                      <div className="text-sm font-medium text-navy-600 mb-2">Recent Activity</div>
                      {location.streetData.recentSales.slice(0, 3).map((sale) => (
                        <div key={sale.year} className="flex justify-between text-sm py-1">
                          <span className="text-navy-500">{sale.year}</span>
                          <span className="text-navy-700 font-medium">{sale.avgPrice} ({sale.volume} sales)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Conservation Area Status */}
              {location.streetData.conservationArea && (
                <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-gold-600" />
                    </div>
                    <h3 className="heading-5 text-navy-900">Conservation Status</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${location.streetData.conservationArea.status ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                      {location.streetData.conservationArea.status ? 'Conservation Area' : 'No Restrictions'}
                    </span>
                  </div>
                  {location.streetData.conservationArea.name && (
                    <p className="text-navy-600 mb-4">{location.streetData.conservationArea.name}</p>
                  )}
                  {location.streetData.conservationArea.restrictions && location.streetData.conservationArea.restrictions.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-navy-600 mb-2">What This Means For You:</div>
                      <ul className="space-y-2">
                        {location.streetData.conservationArea.restrictions.map((restriction, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-navy-600">
                            <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                            {restriction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="mt-4 text-sm text-navy-500 italic">
                    We have extensive experience navigating conservation area requirements.
                  </p>
                </div>
              )}

              {/* Historical & Architectural Info */}
              {location.streetData.historicalInfo && (
                <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                      <Home className="w-5 h-5 text-gold-600" />
                    </div>
                    <h3 className="heading-5 text-navy-900">Property Character</h3>
                  </div>
                  {location.streetData.historicalInfo.builtPeriod && (
                    <div className="mb-3">
                      <div className="text-sm text-navy-500">Built Period</div>
                      <div className="text-lg font-semibold text-navy-900">{location.streetData.historicalInfo.builtPeriod}</div>
                    </div>
                  )}
                  {location.streetData.historicalInfo.architecturalStyle && (
                    <div className="mb-3">
                      <div className="text-sm text-navy-500">Architectural Style</div>
                      <div className="text-lg font-semibold text-navy-900">{location.streetData.historicalInfo.architecturalStyle}</div>
                    </div>
                  )}
                  {location.streetData.historicalInfo.notableFeatures && location.streetData.historicalInfo.notableFeatures.length > 0 && (
                    <div className="mt-4">
                      <div className="text-sm font-medium text-navy-600 mb-2">Common Features We Work With:</div>
                      <div className="flex flex-wrap gap-2">
                        {location.streetData.historicalInfo.notableFeatures.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white rounded-md text-xs text-navy-600 border border-cream-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Historical Notes - Full Width */}
            {location.streetData.historicalInfo?.historicalNotes && (
              <div className="mt-8 bg-navy-50 rounded-2xl p-6 lg:p-8 border border-navy-100">
                <h3 className="heading-5 text-navy-900 mb-4">About {location.name}</h3>
                <p className="text-navy-600 leading-relaxed">{location.streetData.historicalInfo.historicalNotes}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* NEW: Completed Projects on This Street */}
      {location.streetData?.completedProjects && location.streetData.completedProjects.length > 0 && (
        <section className="section-cream">
          <div className="container-lg">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">
                Our Work on {location.name}
              </h2>
              <p className="body-large text-navy-600 max-w-2xl mx-auto">
                We&apos;ve completed {location.streetData.completedProjects.length} project{location.streetData.completedProjects.length > 1 ? 's' : ''} on this street. Here&apos;s what we&apos;ve done for your neighbours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {location.streetData.completedProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl p-6 border border-cream-200 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="heading-5 text-navy-900 mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-navy-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Wrench className="w-4 h-4" />
                          {project.service.replace(/-/g, ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-navy-600 mb-4">{project.description}</p>
                  {project.testimonialSnippet && (
                    <div className="bg-gold-50 rounded-lg p-4 border-l-4 border-gold-400">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                      <p className="text-navy-700 italic text-sm">&ldquo;{project.testimonialSnippet}&rdquo;</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEW: Local Insights */}
      {location.streetData?.localInsights && location.streetData.localInsights.length > 0 && (
        <section className="section bg-white">
          <div className="container-lg">
            <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-3 text-white mb-4">
                    Local Knowledge: {location.name}
                  </h2>
                  <p className="text-navy-200 mb-6">
                    From parking permits to basement potential, we know the ins and outs of working on {location.name}.
                  </p>
                </div>
                <div className="space-y-3">
                  {location.streetData.localInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
