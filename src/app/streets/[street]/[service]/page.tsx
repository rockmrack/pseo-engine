// ============================================================================
// PSEO ENGINE - STREET-LEVEL SERVICE PAGES
// Hyper-local targeting: /streets/[street]/[service]
// 10x SEO Expansion - Strategy 1
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  streets,
  streetServices,
  getStreet,
  getStreetService,
  generateStreetParams,
} from '@/lib/data/streets-database';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  HeroSection,
  FAQSection,
  CTASection,
  TestimonialsSection,
  TrustSignalsSection,
} from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface StreetServicePageProps {
  params: Promise<{
    street: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  return generateStreetParams();
}

export async function generateMetadata({ params }: StreetServicePageProps): Promise<Metadata> {
  const { street: streetSlug, service: serviceSlug } = await params;
  
  const street = getStreet(streetSlug);
  const service = getStreetService(serviceSlug);
  
  if (!street || !service) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${service.name} on ${street.name}, ${street.area} | ${siteConfig.businessName}`;
  const description = `Expert ${service.name.toLowerCase()} services for properties on ${street.name}, ${street.area} (${street.postcode}). ${street.description} Trusted local specialists. Call ${siteConfig.phone}.`;
  
  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${street.name}`,
      `${street.area} ${service.name.toLowerCase()}`,
      `${street.postcode} renovation`,
      `${street.name} builders`,
      `${street.area} property renovation`,
      `renovation near ${street.localLandmarks[0]}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/streets/${streetSlug}/${serviceSlug}`,
    },
  };
}

export default async function StreetServicePage({ params }: StreetServicePageProps) {
  const { street: streetSlug, service: serviceSlug } = await params;
  
  const street = getStreet(streetSlug);
  const service = getStreetService(serviceSlug);
  
  if (!street || !service) {
    notFound();
  }
  
  // Generate street-specific FAQs
  const streetFaqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost on ${street.name}?`,
      answer: `${service.name} on ${street.name} typically ranges from ${service.priceRange}. The final cost depends on property size, condition, and specific requirements. ${street.propertyTypes.join(', ')} properties on ${street.name} often require specialist attention due to their ${street.averagePropertyAge} construction. Contact ${siteConfig.businessName} for a free, no-obligation quote.`,
    },
    {
      question: `Do you have experience with ${street.propertyTypes[0]} properties on ${street.name}?`,
      answer: `Yes, ${siteConfig.businessName} has extensive experience with ${street.propertyTypes.join(', ')} properties throughout ${street.area}, including ${street.name}. We understand the common issues including ${street.commonIssues.slice(0, 2).join(' and ')} that affect properties in this area.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take on ${street.name} properties?`,
      answer: `The timeline for ${service.name.toLowerCase()} on ${street.name} depends on the project scope. Properties from ${street.averagePropertyAge} may require additional considerations. Typical projects include ${service.typicalProjects.slice(0, 2).join(' and ')}. We provide detailed timelines during our initial consultation.`,
    },
    {
      question: `Is planning permission required for ${service.name.toLowerCase()} on ${street.name}?`,
      answer: `Planning requirements for ${service.name.toLowerCase()} on ${street.name} depend on the work scope and property status. Many properties in this ${street.area} location fall within conservation areas. ${siteConfig.businessName} handles all planning applications and building control notifications as part of our service.`,
    },
    {
      question: `Why choose ${siteConfig.businessName} for ${service.name.toLowerCase()} on ${street.name}?`,
      answer: `${siteConfig.businessName} brings local expertise to every project on ${street.name}. We understand the unique characteristics of ${street.propertyTypes[0]} properties and the specific requirements of working near ${street.localLandmarks[0]}. Our team delivers exceptional craftsmanship with full project management.`,
    },
  ];
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "description": `Expert ${service.name.toLowerCase()} services on ${street.name}, ${street.area}`,
            "url": `${BASE_URL}/streets/${streetSlug}/${serviceSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": street.area,
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          h1={`${service.name} on ${street.name}`}
          subtitle={`${street.description} ${siteConfig.businessName} provides expert ${service.name.toLowerCase()} for ${street.propertyTypes.slice(0, 2).join(' and ')} properties.`}
          trustBadges={[`${street.area}`, street.postcode, 'Local Experts']}
          ctaText="Get Free Quote"
          ctaSecondary="Call Now"
          location={street.area}
        />
        
        {/* Street Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {service.name} Specialists for {street.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Property Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Property Characteristics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Property Types:</strong> {street.propertyTypes.join(', ')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Average Age:</strong> {street.averagePropertyAge}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Postcode:</strong> {street.postcode}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Area:</strong> {street.area}</span>
                  </li>
                </ul>
              </div>
              
              {/* Common Issues */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Common Issues We Address
                </h3>
                <ul className="space-y-3">
                  {street.commonIssues.map((issue, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our {service.name} Services
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Benefits */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Why Choose {siteConfig.businessName}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.streetSpecificBenefits.map((benefit, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4 flex items-center">
                      <span className="text-blue-600 text-2xl mr-3">★</span>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Typical Projects */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Typical Projects on {street.name}
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.typicalProjects.map((project, index) => (
                      <li key={index} className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                          {index + 1}
                        </span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Price Range */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Investment Guide</h3>
                <p className="text-4xl font-bold mb-4">{service.priceRange}</p>
                <p className="text-blue-100 mb-6">
                  Typical investment for {service.name.toLowerCase()} on {street.name}
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Your Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Local Landmarks */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Local to {street.name}
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-center mb-8">
                {siteConfig.businessName} serves properties throughout {street.area}, 
                conveniently located near these local landmarks:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {street.localLandmarks.map((landmark, index) => (
                  <span
                    key={index}
                    className="bg-white px-6 py-3 rounded-full shadow-md text-gray-700"
                  >
                    📍 {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <TrustSignalsSection signals={[
          { type: 'insurance', icon: 'shield', name: 'Fully Insured', description: 'Complete peace of mind' },
          { type: 'award', icon: 'award', name: '20+ Years Experience', description: 'Expert craftsmanship' },
          { type: 'guarantee', icon: 'check-circle', name: 'Satisfaction Guaranteed', description: 'Quality assured' },
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: `Serving ${street.area}` },
        ]} />
        
        {/* FAQs */}
        <FAQSection
          title={`${service.name} FAQs for ${street.name}`}
          faqs={streetFaqs}
        />
        
        {/* Testimonials */}
        <TestimonialsSection
          title={`What ${street.area} Clients Say`}
          testimonials={[
            { name: 'Local Resident', location: street.area, rating: 5, text: `Excellent ${service.name.toLowerCase()} service. Professional team who understood our property needs.`, service: service.name, date: new Date().toISOString(), verified: true },
            { name: 'Happy Homeowner', location: street.area, rating: 5, text: 'Outstanding quality and attention to detail. Would highly recommend!', service: service.name, date: new Date().toISOString(), verified: true },
            { name: 'Satisfied Customer', location: street.area, rating: 5, text: 'From quote to completion, everything was handled professionally. Great results!', service: service.name, date: new Date().toISOString(), verified: true },
          ]}
        />
        
        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Ready to Transform Your ${street.name} Property?`,
            subtext: `Get expert ${service.name.toLowerCase()} from ${siteConfig.businessName}. We specialize in ${street.propertyTypes[0]} properties and understand the unique requirements of ${street.area} homes.`,
            buttonText: 'Get Free Quote',
            phoneNumber: siteConfig.phone,
          }}
        />
        
        {/* Related Streets */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Also Serving Nearby Streets in {street.area}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {streets
                .filter(s => s.area === street.area && s.slug !== street.slug)
                .slice(0, 6)
                .map(nearbyStreet => (
                  <a
                    key={nearbyStreet.slug}
                    href={`/streets/${nearbyStreet.slug}/${serviceSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {nearbyStreet.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
