// ============================================================================
// PSEO ENGINE - PROPERTY-SERVICE MATRIX PAGES
// Pages targeting building type + service combinations
// Route: /property-services/[buildingType]/[service]
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig as config, BASE_URL } from '@/lib/config';
import {
  getPropertyServiceMatrix,
  getPropertyTypeForMatrix,
  generatePropertyServiceParams,
  propertyServiceMatrixPages,
  propertyTypes,
  matrixServices,
} from '@/lib/data/property-matrix';
import { CTASection } from '@/components/pseo';

// ============================================================================
// STATIC PARAMS GENERATION
// ============================================================================

export async function generateStaticParams() {
  return generatePropertyServiceParams();
}

// ============================================================================
// METADATA GENERATION
// ============================================================================

interface PageProps {
  params: Promise<{
    buildingType: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getPropertyServiceMatrix(resolvedParams.buildingType, resolvedParams.service);
  
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }
  
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'article',
      locale: 'en_GB',
      siteName: config.businessName,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `${BASE_URL}/property-services/${page.propertySlug}/${page.serviceSlug}`,
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function PropertyServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = getPropertyServiceMatrix(resolvedParams.buildingType, resolvedParams.service);
  const propertyType = getPropertyTypeForMatrix(resolvedParams.buildingType);
  
  if (!page || !propertyType) {
    notFound();
  }
  
  // Get other services for this property type
  const otherServices = propertyServiceMatrixPages
    .filter(p => p.propertySlug === page.propertySlug && p.serviceSlug !== page.serviceSlug)
    .slice(0, 4);
  
  // Get same service for other property types
  const sameServiceOtherProperties = propertyServiceMatrixPages
    .filter(p => p.serviceSlug === page.serviceSlug && p.propertySlug !== page.propertySlug)
    .slice(0, 4);
  
  // Get service name
  const serviceName = matrixServices.find(s => s.slug === page.serviceSlug)?.name || page.serviceSlug;
  
  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.introduction,
    provider: {
      '@type': 'LocalBusiness',
      name: config.businessName,
      telephone: config.phone,
    },
    offers: {
      '@type': 'Offer',
      priceRange: `${page.priceRange.from} - ${page.priceRange.to}`,
      priceCurrency: 'GBP',
    },
  };
  
  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Property Type Badge */}
              <span className="inline-block bg-emerald-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {propertyType.name}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {page.h1}
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                {page.introduction}
              </p>
              
              {/* Key Info */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <span className="bg-emerald-700/50 px-4 py-2 rounded-lg">
                  💰 {page.priceRange.from} - {page.priceRange.to}
                </span>
                <span className="bg-emerald-700/50 px-4 py-2 rounded-lg">
                  ⏱️ {page.typicalDuration}
                </span>
              </div>
              
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
                  className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Property Characteristics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Understanding {propertyType.name}s
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Common Features
                  </h3>
                  <ul className="space-y-2">
                    {propertyType.characteristics.commonFeatures.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-emerald-600">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    Property Age & Notes
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Typical age:</strong> {propertyType.characteristics.typicalAge}
                  </p>
                  <ul className="space-y-2">
                    {propertyType.characteristics.structuralNotes.slice(0, 3).map((note, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-emerald-600">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Challenges & Our Approach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-red-900">
                    ⚠️ Key Challenges
                  </h2>
                  <ul className="space-y-4">
                    {page.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <p className="text-gray-700">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Our Approach */}
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-green-900">
                    ✓ Our Approach
                  </h2>
                  <ul className="space-y-4">
                    {page.ourApproach.map((approach, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          ✓
                        </span>
                        <p className="text-gray-700">{approach}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                What's Included in the Work
              </h2>
              
              <div className="bg-emerald-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {page.typicalScope.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-emerald-600 text-xl">✓</span>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Considerations */}
              {page.considerations.length > 0 && (
                <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <h3 className="font-semibold text-amber-900 mb-3">
                    💡 Important Considerations
                  </h3>
                  <ul className="space-y-2">
                    {page.considerations.map((consideration, index) => (
                      <li key={index} className="flex items-start gap-2 text-amber-800">
                        <span className="text-amber-600">•</span>
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Pricing Guide
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-xl mx-auto">
                <p className="text-gray-600 mb-4">Typical price range for {propertyType.name.toLowerCase()}s:</p>
                <p className="text-5xl font-bold text-emerald-600 mb-2">
                  {page.priceRange.from} - {page.priceRange.to}
                </p>
                <p className="text-gray-500 mb-6">
                  Typical duration: {page.typicalDuration}
                </p>
                
                <div className="text-left bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Price depends on:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {page.priceRange.factors.map((factor, index) => (
                      <li key={index}>• {factor}</li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-block mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Exact Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {page.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg group"
                    open={index === 0}
                  >
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-emerald-600 group-open:rotate-180 transition-transform">
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
        
        {/* Other Services for This Property */}
        {otherServices.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Other Services for {propertyType.name}s
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {otherServices.map((service) => {
                    const serviceName = matrixServices.find(s => s.slug === service.serviceSlug)?.name || service.serviceSlug;
                    return (
                      <Link
                        key={service.serviceSlug}
                        href={`/property-services/${service.propertySlug}/${service.serviceSlug}`}
                        className="block p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h3 className="font-semibold text-lg mb-2">{serviceName}</h3>
                        <p className="text-gray-600 text-sm">
                          {service.priceRange.from} - {service.priceRange.to}
                        </p>
                        <span className="text-emerald-600 text-sm font-medium mt-2 inline-block">
                          Learn more →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Same Service for Other Properties */}
        {sameServiceOtherProperties.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  {serviceName} for Other Property Types
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {sameServiceOtherProperties.map((property) => {
                    const propertyName = propertyTypes.find(p => p.slug === property.propertySlug)?.name || property.propertySlug;
                    return (
                      <Link
                        key={property.propertySlug}
                        href={`/property-services/${property.propertySlug}/${property.serviceSlug}`}
                        className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <h3 className="font-semibold text-lg mb-2">{propertyName}</h3>
                        <p className="text-gray-600 text-sm">
                          {property.priceRange.from} - {property.priceRange.to}
                        </p>
                        <span className="text-emerald-600 text-sm font-medium mt-2 inline-block">
                          View details →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Final CTA */}
        <section className="py-16 bg-emerald-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for {serviceName.toLowerCase()} in your {propertyType.name.toLowerCase()}. Our specialists understand the unique requirements of period and modern properties.
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
                className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
