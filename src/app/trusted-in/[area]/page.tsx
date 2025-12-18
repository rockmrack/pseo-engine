// ============================================================================
// PSEO ENGINE - TRUST & RECOMMENDATION PAGES
// Local authority pages for each area served
// Route: /trusted-in/[area]
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig as config, BASE_URL } from '@/lib/config';
import {
  getTrustPage,
  getNearbyTrustPages,
  generateTrustParams,
  trustPages,
} from '@/lib/data/trust-pages';
import { CTASection } from '@/components/pseo';

// ============================================================================
// STATIC PARAMS GENERATION
// ============================================================================

export async function generateStaticParams() {
  return generateTrustParams();
}

// ============================================================================
// METADATA GENERATION
// ============================================================================

interface PageProps {
  params: Promise<{
    area: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getTrustPage(resolvedParams.area);
  
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
      type: 'website',
      locale: 'en_GB',
      siteName: config.businessName,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `${BASE_URL}/trusted-in/${page.slug}`,
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function TrustPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = getTrustPage(resolvedParams.area);
  
  if (!page) {
    notFound();
  }
  
  // Get nearby areas
  const nearbyAreas = getNearbyTrustPages(page.slug);
  
  // JSON-LD LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.businessName,
    description: page.metaDescription,
    telephone: config.phone,
    url: BASE_URL,
    areaServed: {
      '@type': 'City',
      name: page.name,
      postalCode: page.postcode,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: page.name,
      addressRegion: 'London',
      postalCode: page.postcode,
      addressCountry: 'GB',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: page.localPresence.projectsCompleted.replace('+', ''),
      bestRating: '5',
      worstRating: '1',
    },
  };
  
  // Reviews Schema
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.businessName,
    review: page.localTestimonials.map(testimonial => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewBody: testimonial.quote,
      datePublished: testimonial.date,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Area Badge */}
              <span className="inline-block bg-indigo-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {page.postcode} • {page.name}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {page.h1}
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Serving {page.name} since 2010. {page.localPresence.projectsCompleted} projects completed. Your trusted local tradespeople.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <span className="bg-indigo-700/50 px-4 py-2 rounded-lg text-sm">
                  ⏱️ {page.localPresence.avgResponseTime} avg response
                </span>
                <span className="bg-indigo-700/50 px-4 py-2 rounded-lg text-sm">
                  👷 {page.localPresence.localTeamMembers} local team members
                </span>
                <span className="bg-indigo-700/50 px-4 py-2 rounded-lg text-sm">
                  📅 {page.localPresence.yearsServing} years serving {page.name}
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
                  className="bg-white hover:bg-gray-100 text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Bar */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-indigo-600">{page.localPresence.yearsServing}</p>
                  <p className="text-gray-600 text-sm">Years in {page.name}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600">{page.localPresence.projectsCompleted}</p>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600">{page.localPresence.localTeamMembers}</p>
                  <p className="text-gray-600 text-sm">Local Team</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600">{page.localPresence.avgResponseTime}</p>
                  <p className="text-gray-600 text-sm">Avg Response</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Local Knowledge */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                We Know {page.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Property Types */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    {page.name} Property Types
                  </h3>
                  <ul className="space-y-2">
                    {page.areaKnowledge.propertyTypes.map((type, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-indigo-600">•</span>
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Common Challenges */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔧</span>
                    Common Challenges
                  </h3>
                  <ul className="space-y-2">
                    {page.areaKnowledge.commonChallenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-indigo-600">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Conservation Notes */}
              {page.areaKnowledge.conservationNotes && (
                <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <span>🏛️</span>
                    Conservation Area Expertise
                  </h3>
                  <p className="text-indigo-800">{page.areaKnowledge.conservationNotes}</p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                What {page.name} Residents Say
              </h2>
              
              <div className="grid md:grid-cols-1 gap-6">
                {page.localTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                        
                        {/* Quote */}
                        <p className="text-gray-700 text-lg italic mb-3">
                          "{testimonial.quote}"
                        </p>
                        
                        {/* Attribution */}
                        <div className="text-sm text-gray-500">
                          <span className="font-semibold text-gray-700">{testimonial.name}</span>
                          <span className="mx-2">•</span>
                          <span>{testimonial.location}</span>
                          <span className="mx-2">•</span>
                          <span>{testimonial.service}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Accreditations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Accreditations & Certifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {page.relevantAccreditations.map((accreditation, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{accreditation.name}</h3>
                      <p className="text-gray-600 text-sm">{accreditation.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Projects */}
        {page.recentProjects.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Recent Projects in {page.name}
                </h2>
                
                <div className="grid md:grid-cols-1 gap-6">
                  {page.recentProjects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded">
                          {project.completionDate}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, sIndex) => (
                          <span
                            key={sIndex}
                            className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                          >
                            {service.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
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
                Frequently Asked Questions About {page.name}
              </h2>
              
              <div className="space-y-4">
                {page.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm group"
                    open={index === 0}
                  >
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-indigo-600 group-open:rotate-180 transition-transform">
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
        
        {/* Nearby Areas */}
        {nearbyAreas.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Also Serving Nearby Areas
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {nearbyAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/trusted-in/${area.slug}`}
                      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
                    >
                      <h3 className="font-semibold text-lg mb-1">{area.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{area.postcode}</p>
                      <span className="text-indigo-600 text-sm font-medium">
                        View area →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Final CTA */}
        <section className="py-16 bg-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work with {page.name}'s Trusted Tradespeople?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of {page.name} residents who trust us with their home improvements. Get a free, no-obligation quote today.
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
                className="bg-white hover:bg-gray-100 text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Free Quote
              </Link>
            </div>
            
            <p className="mt-6 text-indigo-200 text-sm">
              {page.localPresence.projectsCompleted} projects completed in {page.name} • {page.localPresence.avgResponseTime} average response time
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
