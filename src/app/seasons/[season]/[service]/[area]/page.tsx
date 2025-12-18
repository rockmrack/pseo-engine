// ============================================================================
// PSEO ENGINE - SEASONAL SERVICE LANDING PAGES
// Dynamic pages targeting time-sensitive seasonal searches
// Route: /seasons/[season]/[service]/[area]
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig as config, BASE_URL } from '@/lib/config';
import {
  getSeason,
  getSeasonalArea,
  generateSeasonalParams,
  seasons,
  seasonalAreas,
} from '@/lib/data/seasonal-services';
import { HeroSection } from '@/components/pseo';
import { FAQSection } from '@/components/pseo';
import { CTASection } from '@/components/pseo';

// ============================================================================
// STATIC PARAMS GENERATION
// ============================================================================

export async function generateStaticParams() {
  return generateSeasonalParams();
}

// ============================================================================
// METADATA GENERATION
// ============================================================================

interface PageProps {
  params: Promise<{
    season: string;
    service: string;
    area: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const season = getSeason(resolvedParams.season);
  const area = getSeasonalArea(resolvedParams.area);
  
  if (!season || !area) {
    return {
      title: 'Page Not Found',
    };
  }
  
  const service = season.services.find(s => s.slug === resolvedParams.service);
  if (!service) {
    return {
      title: 'Page Not Found',
    };
  }
  
  const title = `${service.name} in ${area.name} | ${season.name} Services | ${config.businessName}`;
  const description = `Need ${service.name.toLowerCase()} in ${area.name} this ${season.name.toLowerCase()}? ${config.businessName} offers fast, reliable ${season.name.toLowerCase()} services. ${service.urgencyLevel === 'high' ? 'Urgent callouts available.' : ''} Call ${config.phone}`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
      siteName: config.businessName,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/seasons/${season.slug}/${service.slug}/${area.slug}`,
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function SeasonalServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const season = getSeason(resolvedParams.season);
  const area = getSeasonalArea(resolvedParams.area);
  
  if (!season || !area) {
    notFound();
  }
  
  const service = season.services.find(s => s.slug === resolvedParams.service);
  if (!service) {
    notFound();
  }
  
  // Get area-specific seasonal note
  const seasonKey = season.slug as keyof typeof area.seasonalNotes;
  const areaNote = area.seasonalNotes[seasonKey] || '';
  
  // Create hero data
  const heroData = {
    title: `${service.name} in ${area.name}`,
    subtitle: `${season.name} Services`,
    description: `${service.shortDescription} Our ${area.name} team is ready to help with all your ${season.name.toLowerCase()} ${service.name.toLowerCase()} needs.${areaNote ? ` ${areaNote}` : ''}`,
  };
  
  // Create FAQs
  const faqs = [
    {
      question: `How quickly can you provide ${service.name.toLowerCase()} in ${area.name}?`,
      answer: service.urgencyLevel === 'high'
        ? `For urgent ${service.name.toLowerCase()} needs in ${area.name}, we offer same-day emergency callouts. Our local team can usually arrive within 2-4 hours during ${season.name.toLowerCase()}.`
        : `We typically schedule ${service.name.toLowerCase()} appointments in ${area.name} within 1-3 working days. During busy ${season.name.toLowerCase()} periods, we recommend booking early.`,
    },
    {
      question: `What does ${service.name.toLowerCase()} cost in ${area.name}?`,
      answer: `${service.name} costs vary depending on the specific requirements. We provide free, no-obligation quotes for all ${area.name} customers. Call us on ${config.phone} for a personalized estimate.`,
    },
    {
      question: `Why is ${service.name.toLowerCase()} important during ${season.name.toLowerCase()}?`,
      answer: `${season.name} brings specific challenges that make ${service.name.toLowerCase()} essential for maintaining your home. ${service.shortDescription}`,
    },
    {
      question: `Do you cover all of ${area.name}?`,
      answer: `Yes! We provide ${service.name.toLowerCase()} throughout ${area.name} and surrounding areas including ${area.postcode}. We know the local area well and can reach you quickly.`,
    },
  ];
  
  // Create urgency banner content
  const urgencyContent = service.urgencyLevel === 'high' ? {
    show: true,
    title: '📞 High Demand Service',
    message: `${service.name} is in high demand during ${season.name.toLowerCase()}. Book early to secure your preferred time slot.`,
  } : { show: false, title: '', message: '' };
  
  // Related services in this season
  const relatedServices = season.services
    .filter(s => s.slug !== service.slug)
    .slice(0, 4);
  
  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${area.name}`,
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: config.businessName,
      telephone: config.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: area.name,
        addressRegion: 'London',
        addressCountry: 'GB',
      },
    },
    areaServed: {
      '@type': 'City',
      name: area.name,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: config.phone,
    },
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Urgency Banner */}
      {urgencyContent.show && (
        <div className="bg-amber-600 text-white py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="font-semibold">{urgencyContent.title}</p>
            <p className="text-sm">{urgencyContent.message}</p>
            <a
              href={`tel:${config.phone.replace(/\s/g, '')}`}
              className="inline-block mt-2 bg-white text-amber-600 px-4 py-1 rounded font-semibold hover:bg-amber-50"
            >
              Call {config.phone}
            </a>
          </div>
        </div>
      )}
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Season Badge */}
              <span className="inline-block bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {season.name} Services
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {heroData.title}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {heroData.description}
              </p>
              
              {/* Peak Months Notice */}
              <p className="text-blue-200 mb-8">
                Peak demand: {service.peakMonths.join(', ')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${config.phone.replace(/\s/g, '')}`}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Call {config.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seasonal Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                {season.name} {service.name} Tips for {area.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {season.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{tip.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-700">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Urgency Indicator */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span className={`w-3 h-3 rounded-full ${
                    service.urgencyLevel === 'high' ? 'bg-orange-500' :
                    service.urgencyLevel === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`} />
                  <span className="text-gray-700 font-medium">
                    {service.urgencyLevel === 'high' ? 'High Demand Service' :
                     service.urgencyLevel === 'medium' ? 'Regular Service' :
                     'Preventative Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Choose {config.businessName} for {service.name} in {area.name}?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fast Response</h3>
                  <p className="text-gray-600">
                    {service.urgencyLevel === 'high' ? 'Same-day service available' : 'Quick appointment scheduling'}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Local to {area.name}</h3>
                  <p className="text-gray-600">
                    We know {area.name} well and can reach you quickly
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fully Certified</h3>
                  <p className="text-gray-600">
                    Gas Safe, NICEIC approved. All work guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Other {season.name} Services in {area.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedServices.map((relatedService) => (
                    <Link
                      key={relatedService.slug}
                      href={`/seasons/${season.slug}/${relatedService.slug}/${area.slug}`}
                      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2">{relatedService.name}</h3>
                      <p className="text-gray-600 text-sm">{relatedService.shortDescription}</p>
                      <span className="text-blue-600 text-sm font-medium mt-2 inline-block">
                        Learn more →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm group"
                  >
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-blue-600 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book {service.name} in {area.name}?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation quote. Our {area.name} team is ready to help with all your {season.name.toLowerCase()} home service needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${config.phone.replace(/\s/g, '')}`}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call {config.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Quote Online
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
