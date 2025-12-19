// ============================================================================
// PSEO ENGINE - SEASONAL URGENCY PAGE
// Targets seasonal service searches with urgency keywords
// /seasons/[season]/page.tsx
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Snowflake,
  Sun,
  Leaf,
  Flower2,
  AlertTriangle,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  Thermometer,
  Star,
} from 'lucide-react';
import { seasons, Season } from '@/lib/data/seasonal-urgency';
import { siteConfig, BASE_URL } from '@/lib/config';

interface PageProps {
  params: Promise<{ season: string }>;
}

function getSeasonData(slug: string): Season | undefined {
  return seasons.find(s => s.slug === slug);
}

export function generateStaticParams() {
  return seasons.map(s => ({ season: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { season } = await params;
  const seasonData = getSeasonData(season);

  if (!seasonData) {
    return { title: 'Season Not Found' };
  }

  const title = `${seasonData.name} Home Services London | ${seasonData.seoKeywords[0]} | ${siteConfig.businessName}`;
  const description = `Expert ${seasonData.name.toLowerCase()} home services in London. ${seasonData.callToAction} ${seasonData.seoKeywords.slice(0, 3).join(', ')}. Call ${siteConfig.phone} now!`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/seasons/${season}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

const seasonIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  winter: Snowflake,
  summer: Sun,
  autumn: Leaf,
  spring: Flower2,
};

export default async function SeasonalServicePage({ params }: PageProps) {
  const { season } = await params;
  const seasonData = getSeasonData(season);

  if (!seasonData) {
    notFound();
  }

  const SeasonIcon = seasonIcons[seasonData.slug] || Calendar;
  const allServices = [...seasonData.urgentServices, ...seasonData.popularProjects];

  // Schema markup
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${seasonData.name} Home Services`,
    description: seasonData.callToAction,
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
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${seasonData.name} Services`,
      itemListElement: allServices.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/10 rounded-2xl">
                <SeasonIcon className="w-12 h-12" />
              </div>
              <div className="flex flex-wrap gap-2">
                {seasonData.seoKeywords.slice(0, 4).map((keyword, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-yellow-500/20 text-yellow-200 text-sm font-medium rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {seasonData.name} Home Services<br />
              <span className="text-blue-200">in London</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              {seasonData.callToAction}
            </p>

            {/* Emergency CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Online</span>
              </Link>
            </div>

            {/* Season Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">{allServices.length}+</div>
                <div className="text-blue-200">Services Available</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200">Emergency Response</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">2hr</div>
                <div className="text-blue-200">Average Response</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-blue-200">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Urgent {seasonData.name} Services
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Emergency and urgent {seasonData.name.toLowerCase()} home services available 24/7.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonData.urgentServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-red-50 border border-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <h3 className="text-lg font-bold text-gray-900">{service}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <Clock className="w-4 h-4" />
                    <span>Emergency response available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Projects Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Popular {seasonData.name} Projects
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Ideal time for these home improvement projects during {seasonData.name.toLowerCase()}.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonData.popularProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{project}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Concerns */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {seasonData.name} Weather Challenges We Handle
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  Weather Conditions We Handle
                </h3>
                <ul className="space-y-3">
                  {seasonData.weatherConcerns.map((concern, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <span className="text-gray-700">{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-500" />
                  Our Response Times
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">Emergency Calls</span>
                    <span className="font-bold text-green-600">Within 1 Hour</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">Same-Day Service</span>
                    <span className="font-bold text-green-600">Available Daily</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">Weekend Availability</span>
                    <span className="font-bold text-green-600">Yes - No Extra Charge</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">Free Quotes</span>
                    <span className="font-bold text-green-600">Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Keywords */}
            <div className="flex flex-wrap gap-3 justify-center">
              {seasonData.seoKeywords.map((keyword, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need {seasonData.name} Home Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our expert team is ready to help with all your {seasonData.name.toLowerCase()} home
              maintenance and repair needs across London.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="w-6 h-6" />
                <span>{siteConfig.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="mt-8 text-blue-200">
              <Star className="w-5 h-5 inline mr-2" />
              Rated 4.9/5 by over 500 happy customers in North London
            </p>
          </div>
        </section>

        {/* Other Seasons */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              View Other Seasonal Services
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {seasons
                .filter(s => s.slug !== season)
                .map(s => {
                  const Icon = seasonIcons[s.slug] || Calendar;
                  return (
                    <Link
                      key={s.slug}
                      href={`/seasons/${s.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <Icon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">{s.name} Services</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
