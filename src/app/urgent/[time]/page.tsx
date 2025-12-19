// ============================================================================
// PSEO ENGINE - URGENT SERVICE PAGE
// Targets time-based urgency searches (same-day, weekend, evening)
// /urgent/[time]/page.tsx
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Clock,
  Phone,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Zap,
  Shield,
  Star,
  MapPin,
  Timer,
} from 'lucide-react';
import { urgencyTypes, UrgencyType } from '@/lib/data/seasonal-urgency';
import { services } from '@/lib/data/services';
import { siteConfig, BASE_URL } from '@/lib/config';

interface PageProps {
  params: Promise<{ time: string }>;
}

function getUrgencyData(slug: string): UrgencyType | undefined {
  return urgencyTypes.find(u => u.slug === slug);
}

export function generateStaticParams() {
  return urgencyTypes.map(u => ({ time: u.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { time } = await params;
  const urgencyData = getUrgencyData(time);

  if (!urgencyData) {
    return { title: 'Service Not Found' };
  }

  const title = `${urgencyData.name} | ${urgencyData.responseTime} | ${siteConfig.businessName}`;
  const description = `Need ${urgencyData.name.toLowerCase()}? We guarantee ${urgencyData.responseTime} response across London. Available ${urgencyData.availability}. Call ${siteConfig.phone} now!`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/urgent/${time}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function UrgentServicePage({ params }: PageProps) {
  const { time } = await params;
  const urgencyData = getUrgencyData(time);

  if (!urgencyData) {
    notFound();
  }

  // Use all services since urgency types can apply to most services
  const availableServices = services;

  // Schema markup
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: urgencyData.name,
    description: `${urgencyData.name} - ${urgencyData.responseTime}. ${urgencyData.availability}`,
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
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Emergency Hero */}
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/10 rounded-2xl animate-pulse">
                <AlertTriangle className="w-12 h-12" />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full">
                  {urgencyData.responseTime} RESPONSE
                </span>
                <span className="px-4 py-2 bg-white/20 font-semibold rounded-full">
                  24/7 Available
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {urgencyData.name}<br />
              <span className="text-red-200">Across London</span>
            </h1>

            <p className="text-xl text-red-100 max-w-3xl mb-8">
              {urgencyData.responseTime}. Available {urgencyData.availability}. {urgencyData.surcharge}
            </p>

            {/* Emergency CTA - Prominent */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-xl transition-all text-xl"
                >
                  <Phone className="w-7 h-7" />
                  <span>{siteConfig.phone}</span>
                </a>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-lg">Call Now - Open 24/7</div>
                  <div className="text-red-200">Free quote • No obligation</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Timer className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{urgencyData.responseTime}</div>
                <div className="text-red-200 text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Guaranteed</div>
                <div className="text-red-200 text-sm">Work Quality</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">All London</div>
                <div className="text-red-200 text-sm">Coverage Area</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-red-200 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              How {urgencyData.name} Works
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Getting urgent help is simple. We&apos;ll have a qualified tradesperson at your door fast.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Phone, title: 'Call Us', desc: 'Call our 24/7 line and describe your emergency' },
                { icon: Clock, title: 'Rapid Dispatch', desc: `We dispatch the nearest available tradesperson` },
                { icon: Zap, title: 'Quick Assessment', desc: 'On-site assessment and upfront pricing' },
                { icon: CheckCircle, title: 'Problem Solved', desc: 'Work completed to highest standards' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">Step {i + 1}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Services */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Services Available with {urgencyData.responseTime} Response
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              All of these services are available with our {urgencyData.name.toLowerCase()} guarantee.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableServices.slice(0, 12).map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                      {service.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {service.shortDescription || `Professional ${service.name.toLowerCase()} service`}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium">{urgencyData.responseTime} available</span>
                  </div>
                </Link>
              ))}
            </div>

            {availableServices.length > 12 && (
              <div className="text-center mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                >
                  View All {availableServices.length} Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our {urgencyData.name}?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Timer,
                  title: 'Guaranteed Response Time',
                  desc: `We guarantee ${urgencyData.responseTime} response or your call-out fee is free.`,
                },
                {
                  icon: Shield,
                  title: 'Fully Insured & Qualified',
                  desc: 'All our tradespeople are fully insured, vetted, and qualified.',
                },
                {
                  icon: CheckCircle,
                  title: 'No Hidden Charges',
                  desc: 'Upfront pricing with no surprise fees. Know the cost before we start.',
                },
                {
                  icon: Star,
                  title: '5-Star Service',
                  desc: 'Rated 4.9/5 stars by over 500 customers across North London.',
                },
                {
                  icon: MapPin,
                  title: 'Local Teams',
                  desc: 'Tradespeople based across London for faster response times.',
                },
                {
                  icon: Phone,
                  title: '24/7 Support',
                  desc: 'Our phone lines are open 24 hours a day, 7 days a week.',
                },
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Right Now?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don&apos;t wait - call us now for {urgencyData.responseTime} response anywhere in London.
            </p>

            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-12 py-6 rounded-2xl transition-all text-2xl"
            >
              <Phone className="w-8 h-8" />
              <span>{siteConfig.phone}</span>
            </a>

            <p className="mt-6 text-blue-200">
              Open 24/7 • Free Quotes • No Call-Out Fee
            </p>
          </div>
        </section>

        {/* Other Urgency Types */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Other Response Options
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {urgencyTypes
                .filter(u => u.slug !== time)
                .map(u => (
                  <Link
                    key={u.slug}
                    href={`/urgent/${u.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">{u.name}</span>
                    <span className="text-sm text-gray-500">({u.responseTime})</span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
