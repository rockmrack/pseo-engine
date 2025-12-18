// ============================================================================
// PSEO ENGINE - CERTIFICATION PAGES
// /certified/[certification]/[service] - Trust-building certification pages
// 10x SEO Expansion - Strategy 6
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  certifications,
  certificationServices,
  getCertification,
  getCertificationService,
  generateCertificationParams,
} from '@/lib/data/certifications-database';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  HeroSection,
  FAQSection,
  CTASection,
  TrustSignalsSection,
  TestimonialsSection,
} from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface CertificationPageProps {
  params: Promise<{
    certification: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  return generateCertificationParams();
}

export async function generateMetadata({ params }: CertificationPageProps): Promise<Metadata> {
  const { certification: certSlug, service: serviceSlug } = await params;
  
  const certification = getCertification(certSlug);
  const service = getCertificationService(serviceSlug);
  
  if (!certification || !service) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${certification.name} ${service.name} | Certified | ${siteConfig.businessName}`;
  const description = `${siteConfig.businessName} is ${certification.name} for ${service.name.toLowerCase()}. ${certification.description} Verified, insured, and trusted. Call ${siteConfig.phone}.`;
  
  return {
    title,
    description,
    keywords: [
      `${certification.name.toLowerCase()} ${service.name.toLowerCase()}`,
      `certified ${service.name.toLowerCase()}`,
      `${certification.name.toLowerCase()} contractor`,
      `${service.name.toLowerCase()} near me certified`,
      `${certification.issuingBody} approved ${service.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/certified/${certSlug}/${serviceSlug}`,
    },
  };
}

export default async function CertificationPage({ params }: CertificationPageProps) {
  const { certification: certSlug, service: serviceSlug } = await params;
  
  const certification = getCertification(certSlug);
  const service = getCertificationService(serviceSlug);
  
  if (!certification || !service) {
    notFound();
  }
  
  // Generate certification-specific FAQs
  const certFaqs = [
    {
      question: `What does ${certification.name} mean for ${service.name.toLowerCase()}?`,
      answer: `${certification.name} certification ensures that ${siteConfig.businessName} meets rigorous standards for ${service.name.toLowerCase()}. Issued by ${certification.issuingBody}, this certification requires: ${certification.requirements.slice(0, 3).join(', ')}. It provides peace of mind that your work is completed safely and professionally.`,
    },
    {
      question: `How can I verify ${siteConfig.businessName}'s ${certification.name} status?`,
      answer: `You can verify our ${certification.name} status through ${certification.issuingBody}'s official website${certification.verificationUrl ? ` at ${certification.verificationUrl}` : ''}. Look for our ${certification.trustIndicators[0]}. We're happy to provide our certification details on request.`,
    },
    {
      question: `Why is ${certification.name} important for ${service.name.toLowerCase()}?`,
      answer: `${certification.name} is important because it ensures: ${certification.benefits.slice(0, 3).join(', ')}. Without proper certification, work may not meet legal requirements, could void insurance, and may be unsafe. ${siteConfig.businessName} maintains all necessary certifications for your protection.`,
    },
    {
      question: `What are the benefits of using a ${certification.name} contractor?`,
      answer: `Using a ${certification.name} contractor like ${siteConfig.businessName} provides: ${certification.benefits.join(', ')}. This ensures your ${service.name.toLowerCase()} project is completed to the highest standards with full documentation and guarantees.`,
    },
    {
      question: `Does ${siteConfig.businessName} hold other certifications?`,
      answer: `Yes, ${siteConfig.businessName} holds multiple industry certifications ensuring excellence across all services. Each certification is maintained through ongoing training and assessment. Contact us for details of all our credentials.`,
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
            "description": `${certification.name} certified for ${service.name}`,
            "url": `${BASE_URL}/certified/${certSlug}/${serviceSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": "North London",
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          h1={`${certification.name} ${service.name}`}
          subtitle={`${siteConfig.businessName} is proud to be ${certification.name} for ${service.name.toLowerCase()}. ${certification.description} Your guarantee of quality, safety, and professionalism.`}
          trustBadges={[`Verified by ${certification.issuingBody}`, 'Fully Certified', '20+ Years Experience']}
          ctaText="Book Certified Service"
          ctaSecondary="Verify Our Credentials"
        />
        
        {/* Certification Badge */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-xl shadow-xl p-10 inline-block">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{certification.fullName}</h2>
                <p className="text-xl text-blue-600 font-semibold mb-4">Issued by {certification.issuingBody}</p>
                <p className="text-gray-600 max-w-2xl">{certification.description}</p>
                {certification.verificationUrl && (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-blue-600 hover:text-blue-800 underline"
                  >
                    Verify at {certification.issuingBody} →
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Requirements & Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* What It Requires */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📋</span> Certification Requirements
                </h3>
                <ul className="space-y-4">
                  {certification.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">✅</span> Benefits to You
                </h3>
                <ul className="space-y-4">
                  {certification.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Verify Our Certification
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {certification.trustIndicators.map((indicator, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center shadow">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-xl">✓</span>
                    </div>
                    <p className="text-gray-800 font-medium">{indicator}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Certification Matters */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why {certification.name} Matters for {service.name}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Assured</h3>
                  <p className="text-gray-600">
                    Work completed to strict safety standards and regulations
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📜</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legally Compliant</h3>
                  <p className="text-gray-600">
                    Full compliance with UK building regulations and laws
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">💪</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Protected</h3>
                  <p className="text-gray-600">
                    Insurance, warranties, and consumer protection included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <TrustSignalsSection signals={[
          { type: 'insurance', icon: 'shield', name: 'Fully Insured', description: 'Complete peace of mind' },
          { type: 'award', icon: 'award', name: '20+ Years Experience', description: 'Expert craftsmanship' },
          { type: 'guarantee', icon: 'check-circle', name: 'Satisfaction Guaranteed', description: 'Quality assured' },
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: 'Serving North London' },
        ]} />
        
        {/* FAQs */}
        <FAQSection
          title={`${certification.name} ${service.name} FAQs`}
          faqs={certFaqs}
        />
        
        {/* Testimonials */}
        <TestimonialsSection
          title="What Our Certified Service Clients Say"
          testimonials={[
            { name: 'Certification Customer', location: 'North London', rating: 5, text: `Having ${certification.name} certification gave us complete confidence. Excellent work!`, service: service.name, date: new Date().toISOString(), verified: true },
            { name: 'Quality-Focused Client', location: 'North London', rating: 5, text: 'The certified professionals delivered exceptional results. Worth every penny.', service: service.name, date: new Date().toISOString(), verified: true },
            { name: 'Happy Homeowner', location: 'North London', rating: 5, text: 'Professional, certified team who knew exactly what they were doing. Highly recommend!', service: service.name, date: new Date().toISOString(), verified: true },
          ]}
        />
        
        {/* Other Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Other Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications
                .filter(c => c.slug !== certSlug)
                .slice(0, 6)
                .map(cert => (
                  <a
                    key={cert.slug}
                    href={`/certified/${cert.slug}/${serviceSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {cert.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* Other Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other {certification.name} Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certificationServices
                .filter(s => s.slug !== serviceSlug)
                .map(svc => (
                  <a
                    key={svc.slug}
                    href={`/certified/${certSlug}/${svc.slug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {certification.name} {svc.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Book Certified ${service.name} Today`,
            subtext: `Choose ${siteConfig.businessName} for ${certification.name} ${service.name.toLowerCase()}. Your guarantee of quality, safety, and professionalism backed by ${certification.issuingBody}.`,
            buttonText: 'Book Now',
            phoneNumber: siteConfig.phone,
          }}
        />
      </main>
    </>
  );
}
