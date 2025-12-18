// ============================================================================
// PSEO ENGINE - FIX/PROBLEM + AREA PAGES
// /fix/[problem]/[area] - Problem-solving combined with location targeting
// 10x SEO Expansion - Strategy 2
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { problemPages, getProblemPage } from '@/lib/data/problems-database';
import { getLocation } from '@/lib/data-access';
import { locations } from '@/lib/data/locations';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  HeroSection,
  FAQSection,
  CTASection,
  TestimonialsSection,
  TrustSignalsSection,
} from '@/components/pseo';

interface FixProblemAreaPageProps {
  params: Promise<{
    problem: string;
    area: string;
  }>;
}

export async function generateStaticParams() {
  const params: { problem: string; area: string }[] = [];
  
  for (const problem of problemPages) {
    for (const location of locations) {
      params.push({
        problem: problem.slug,
        area: location.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: FixProblemAreaPageProps): Promise<Metadata> {
  const { problem: problemSlug, area: areaSlug } = await params;
  
  const problemPage = getProblemPage(problemSlug);
  const location = getLocation(areaSlug);
  
  if (!problemPage || !location) {
    return { title: 'Page Not Found' };
  }
  
  const title = `Fix ${problemPage.title} in ${location.name} | Emergency Repairs | ${siteConfig.businessName}`;
  const description = `Need to fix ${problemPage.title.toLowerCase()} in ${location.name}? ${siteConfig.businessName} provides fast, reliable repairs. ${problemPage.problem.description} Call ${siteConfig.phone} for same-day service.`;
  
  return {
    title,
    description,
    keywords: [
      `fix ${problemPage.title.toLowerCase()} ${location.name}`,
      `${problemPage.title.toLowerCase()} repair ${location.name}`,
      `${location.name} ${problemPage.title.toLowerCase()}`,
      `emergency ${problemPage.title.toLowerCase()} ${location.postcode}`,
      `${problemPage.title.toLowerCase()} help ${location.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/fix/${problemSlug}/${areaSlug}`,
    },
  };
}

export default async function FixProblemAreaPage({ params }: FixProblemAreaPageProps) {
  const { problem: problemSlug, area: areaSlug } = await params;
  
  const problemPage = getProblemPage(problemSlug);
  const location = getLocation(areaSlug);
  
  if (!problemPage || !location) {
    notFound();
  }
  
  // Generate area-specific problem FAQs
  const areaFaqs = [
    {
      question: `How quickly can you fix ${problemPage.title.toLowerCase()} in ${location.name}?`,
      answer: `${siteConfig.businessName} offers rapid response for ${problemPage.title.toLowerCase()} in ${location.name}. Our typical response time is ${problemPage.urgency === 'emergency' ? 'within 1-2 hours' : problemPage.urgency === 'urgent' ? 'same day' : 'within 24-48 hours'}. We're local to ${location.area || location.name} and understand the urgency of property issues.`,
    },
    {
      question: `What causes ${problemPage.title.toLowerCase()} in ${location.name} properties?`,
      answer: `${problemPage.title} in ${location.name} properties is typically caused by: ${problemPage.problem.commonCauses.slice(0, 3).join(', ')}. ${siteConfig.businessName} has extensive experience diagnosing and fixing these issues.`,
    },
    {
      question: `How much does it cost to fix ${problemPage.title.toLowerCase()} in ${location.name}?`,
      answer: `Fixing ${problemPage.title.toLowerCase()} in ${location.name} typically costs ${problemPage.solutions.typicalCost}. The final price depends on the severity and underlying cause. ${siteConfig.businessName} provides free assessments and transparent quotes before any work begins.`,
    },
    {
      question: `Can ${problemPage.title.toLowerCase()} cause serious damage to my ${location.name} property?`,
      answer: `Yes, if left untreated, ${problemPage.title.toLowerCase()} can cause significant damage. ${problemPage.problem.riskIfIgnored} We recommend addressing ${problemPage.title.toLowerCase()} promptly to prevent costly repairs.`,
    },
    {
      question: `Do you guarantee your ${problemPage.title.toLowerCase()} repairs in ${location.name}?`,
      answer: `Absolutely. ${siteConfig.businessName} provides a comprehensive guarantee on all ${problemPage.title.toLowerCase()} repairs in ${location.name}. We stand behind our workmanship and only use quality materials. Our reputation in ${location.area || location.name} is built on reliable, lasting repairs.`,
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
            "description": `Emergency ${problemPage.title.toLowerCase()} repair services in ${location.name}`,
            "url": `${BASE_URL}/fix/${problemSlug}/${areaSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": location.name,
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Emergency Hero */}
        <HeroSection
          h1={`Fix ${problemPage.title} in ${location.name}`}
          subtitle={`${problemPage.problem.description} ${siteConfig.businessName} provides expert ${problemPage.title.toLowerCase()} solutions for ${location.name} properties. Fast response, lasting repairs, guaranteed results.`}
          trustBadges={[problemPage.urgency === 'emergency' ? '🚨 Emergency Response' : 'Professional Repairs', location.postcode, 'Fast Response']}
          ctaText={problemPage.urgency === 'emergency' ? 'Emergency Call Now' : 'Get Free Quote'}
          ctaSecondary="Book Assessment"
          location={location.name}
        />
        
        {/* Problem Overview */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {problemPage.title} in {location.name} - What You Need to Know
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Warning Signs */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                    <span className="mr-2">⚠️</span> {problemPage.problem.warningSignsTitle}
                  </h3>
                  <ul className="space-y-3">
                    {problemPage.problem.warningSigns.slice(0, 5).map((sign, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Common Causes */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <span className="mr-2">🔍</span> Common Causes
                  </h3>
                  <ul className="space-y-3">
                    {problemPage.problem.commonCauses.slice(0, 5).map((cause, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Solution */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our {problemPage.title} Solution for {location.name}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Diagnosis Steps */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{problemPage.diagnosis.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {problemPage.diagnosis.steps.slice(0, 3).map((step) => (
                    <div key={step.step} className="bg-blue-50 rounded-lg p-6">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-center mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm text-center">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Prevention Tips */}
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">
                  {problemPage.prevention.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {problemPage.prevention.tips.slice(0, 6).map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Urgency & Cost Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Urgency Level */}
                <div className={`rounded-lg p-8 text-center ${
                  problemPage.urgency === 'emergency' ? 'bg-red-600 text-white' :
                  problemPage.urgency === 'urgent' ? 'bg-orange-500 text-white' :
                  'bg-blue-600 text-white'
                }`}>
                  <h3 className="text-2xl font-bold mb-4">Urgency Level</h3>
                  <p className="text-4xl font-bold mb-4 capitalize">{problemPage.urgency}</p>
                  <p className="opacity-90">
                    {problemPage.urgency === 'emergency' 
                      ? 'Requires immediate attention - call now' 
                      : problemPage.urgency === 'urgent'
                      ? 'Should be addressed within 24-48 hours'
                      : 'Can be scheduled at your convenience'}
                  </p>
                </div>
                
                {/* Typical Cost */}
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Cost</h3>
                  <p className="text-4xl font-bold text-blue-600 mb-4">{problemPage.solutions.typicalCost}</p>
                  <p className="text-gray-600">
                    Free assessment & no-obligation quote for {location.name} properties
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Typical time to fix: {problemPage.solutions.timeToFix}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Risk Warning */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Happens If You Don&apos;t Fix {problemPage.title}?
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-lg text-gray-700">{problemPage.problem.riskIfIgnored}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <TrustSignalsSection signals={[
          { type: 'insurance', icon: 'shield', name: 'Fully Insured', description: 'Complete peace of mind' },
          { type: 'award', icon: 'award', name: '20+ Years Experience', description: 'Expert craftsmanship' },
          { type: 'guarantee', icon: 'check-circle', name: 'Satisfaction Guaranteed', description: 'Quality assured' },
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: `Serving ${location.name}` },
        ]} />
        
        {/* Local Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {problemPage.title} Repair Throughout {location.area || location.name}
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 mb-8">
                {siteConfig.businessName} provides {problemPage.title.toLowerCase()} repair services 
                across {location.name} ({location.postcode}) and surrounding areas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {locations
                  .filter(l => l.slug !== areaSlug)
                  .slice(0, 6)
                  .map(loc => (
                    <a
                      key={loc.slug}
                      href={`/fix/${problemSlug}/${loc.slug}`}
                      className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                    >
                      Fix in {loc.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <FAQSection
          title={`${problemPage.title} FAQs - ${location.name}`}
          faqs={areaFaqs}
        />
        
        {/* Testimonials */}
        <TestimonialsSection
          title={`${location.name} Customer Reviews`}
          testimonials={[
            { name: 'Emergency Customer', location: location.name, rating: 5, text: `Fast response to our ${problemPage.title.toLowerCase()} issue. Professional and thorough repair work.`, service: problemPage.title, date: new Date().toISOString(), verified: true },
            { name: 'Grateful Homeowner', location: location.name, rating: 5, text: 'Excellent emergency service. They arrived quickly and fixed the problem completely.', service: problemPage.title, date: new Date().toISOString(), verified: true },
            { name: 'Local Resident', location: location.name, rating: 5, text: 'Highly recommend for any repair needs. Honest pricing and quality workmanship.', service: problemPage.title, date: new Date().toISOString(), verified: true },
          ]}
        />
        
        {/* Emergency CTA */}
        <CTASection
          cta={{
            headline: `Need to Fix ${problemPage.title} in ${location.name}?`,
            subtext: `Don't let ${problemPage.title.toLowerCase()} damage your property. ${siteConfig.businessName} provides ${problemPage.urgency === 'emergency' ? 'emergency same-day' : 'fast, reliable'} repairs throughout ${location.name}. Professional service, guaranteed results.`,
            buttonText: problemPage.urgency === 'emergency' ? 'Emergency Call Now' : 'Get Free Quote',
            urgencyText: problemPage.urgency === 'emergency' ? 'Same-Day Emergency Service' : undefined,
            phoneNumber: siteConfig.phone,
          }}
        />
        
        {/* Related Problems */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other Problems We Fix in {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {problemPages
                .filter(p => p.slug !== problemSlug)
                .slice(0, 6)
                .map(prob => (
                  <a
                    key={prob.slug}
                    href={`/fix/${prob.slug}/${areaSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    Fix {prob.title}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
