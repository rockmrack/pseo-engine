// ============================================================================
// PSEO ENGINE - EMERGENCY SERVICE LANDING PAGE
// High-intent emergency searches: "emergency plumber hampstead"
// /emergency/[service]/[area]/page.tsx
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, AlertTriangle, MapPin, Star } from 'lucide-react';
import {
  emergencyServices,
  emergencyAreas,
  getEmergencyService,
  getEmergencyArea,
  generateEmergencyParams,
} from '@/lib/data/emergency-services';
import { siteConfig, BASE_URL } from '@/lib/config';

interface PageProps {
  params: Promise<{
    service: string;
    area: string;
  }>;
}

// Generate all emergency service + area combinations
export function generateStaticParams() {
  return generateEmergencyParams();
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = getEmergencyService(serviceSlug);
  const area = getEmergencyArea(areaSlug);

  if (!service || !area) {
    return { title: 'Emergency Service Not Found' };
  }

  const title = service.metaTitleTemplate
    .replace('{area}', area.name)
    .replace('{postcode}', area.postcode)
    .replace('{phone}', siteConfig.phone);

  const description = service.metaDescriptionTemplate
    .replace('{area}', area.name)
    .replace('{postcode}', area.postcode)
    .replace('{phone}', siteConfig.phone);

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/emergency/${serviceSlug}/${areaSlug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${BASE_URL}/emergency/${serviceSlug}/${areaSlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EmergencyServicePage({ params }: PageProps) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const service = getEmergencyService(serviceSlug);
  const area = getEmergencyArea(areaSlug);

  if (!service || !area) {
    notFound();
  }

  const h1 = service.h1Template
    .replace('{area}', area.name)
    .replace('{postcode}', area.postcode);

  // Schema markup for emergency service
  const emergencySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${area.name}`,
    description: service.intro,
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
    },
    areaServed: {
      '@type': 'Place',
      name: `${area.name}, ${area.postcode}`,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceType: 'Emergency',
      availableLanguage: 'English',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'emergency',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
    offers: {
      '@type': 'Offer',
      price: service.calloutFee.replace('£', '').replace(' diagnostic', '').replace(' (includes detection)', ''),
      priceCurrency: 'GBP',
      description: `Emergency callout fee: ${service.calloutFee}`,
    },
  };

  const urgencyColors = {
    critical: 'bg-red-600',
    high: 'bg-orange-500',
    medium: 'bg-yellow-500',
  };

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
      />

      <main className="min-h-screen">
        {/* URGENT HEADER - High visibility */}
        <section className={`${urgencyColors[service.urgencyLevel]} text-white py-4`}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-bold text-lg">EMERGENCY SERVICE - {service.availableHours}</span>
            </div>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              CALL NOW: {siteConfig.phone}
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-gold-400 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Serving {area.name}, {area.postcode}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {h1}
                </h1>
                
                <p className="text-xl text-gray-300 mb-6">
                  {service.intro}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 text-gold-400" />
                    <span>{service.responseTime} response</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                    <Shield className="w-5 h-5 text-gold-400" />
                    <span>Fully insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                    <Star className="w-5 h-5 text-gold-400" />
                    <span>4.9★ rated</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="btn-primary text-center text-lg py-4"
                  >
                    <Phone className="w-5 h-5 mr-2 inline" />
                    Call {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="btn-outline text-center text-lg py-4 border-white text-white hover:bg-white hover:text-navy-900"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white text-navy-900 rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">{service.shortTitle}</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-bold text-lg">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Callout Fee:</span>
                    <span className="font-bold text-lg">{service.calloutFee}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-bold text-lg">{service.availableHours}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Area:</span>
                    <span className="font-bold text-lg">{area.name}, {area.postcode}</span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Engineers available in your area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
              Signs You Need {service.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What To Do Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
              What To Do Right Now
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <ol className="space-y-4">
                {service.immediateActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-lg text-gray-700 pt-1">{action}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help in {area.name} Right Now?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our engineers are standing by. Call now for immediate assistance.
            </p>
            
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gold-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
            
            <p className="mt-4 text-gray-400">
              Available {service.availableHours} • {service.responseTime} typical response in {area.postcode}
            </p>
          </div>
        </section>

        {/* Other Areas */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              We Also Cover Nearby Areas
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {emergencyAreas
                .filter(a => a.slug !== areaSlug)
                .slice(0, 10)
                .map(otherArea => (
                  <Link
                    key={otherArea.slug}
                    href={`/emergency/${serviceSlug}/${otherArea.slug}`}
                    className="px-4 py-2 bg-white rounded-lg text-navy-700 hover:bg-navy-100 transition-colors border"
                  >
                    {otherArea.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Other Emergency Services */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Other Emergency Services in {area.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyServices
                .filter(s => s.slug !== serviceSlug)
                .slice(0, 4)
                .map(otherService => (
                  <Link
                    key={otherService.slug}
                    href={`/emergency/${otherService.slug}/${areaSlug}`}
                    className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                  >
                    <h3 className="font-semibold text-navy-900 mb-1">{otherService.shortTitle}</h3>
                    <p className="text-sm text-gray-600">{otherService.responseTime} response</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ISR - Emergency pages should be fresh
export const revalidate = 3600; // 1 hour
