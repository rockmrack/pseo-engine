// ============================================================================
// PSEO ENGINE - URGENT TIME-BASED PAGES
// /urgent/[time]/[service]/[area] - Time-specific emergency services
// 10x SEO Expansion - Strategy 3
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  emergencyTimeSlots,
  emergencyServices,
  getEmergencyTimeSlot,
  getEmergencyService,
  generateEmergencyParams,
} from '@/lib/data/emergency-database';
import { getLocation } from '@/lib/data-access';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  FAQSection,
  CTASection,
  TrustSignalsSection,
} from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface UrgentPageProps {
  params: Promise<{
    time: string;
    service: string;
    area: string;
  }>;
}

export async function generateStaticParams() {
  return generateEmergencyParams();
}

export async function generateMetadata({ params }: UrgentPageProps): Promise<Metadata> {
  const { time: timeSlug, service: serviceSlug, area: areaSlug } = await params;
  
  const timeSlot = getEmergencyTimeSlot(timeSlug);
  const service = getEmergencyService(serviceSlug);
  const location = getLocation(areaSlug);
  
  if (!timeSlot || !service || !location) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${timeSlot.shortName} ${service.name} ${location.name} | ${siteConfig.businessName}`;
  const description = `${timeSlot.name} - ${service.name.toLowerCase()} in ${location.name}. ${timeSlot.responseTime} response time. ${service.emergencyDescription} Call ${siteConfig.phone} now.`;
  
  return {
    title,
    description,
    keywords: [
      `${timeSlot.shortName.toLowerCase()} ${service.name.toLowerCase()} ${location.name}`,
      `emergency ${service.name.toLowerCase()} ${location.name}`,
      `${location.name} ${service.name.toLowerCase()} ${timeSlot.shortName.toLowerCase()}`,
      `${timeSlot.slug} ${service.slug} ${location.postcode}`,
      `urgent ${service.name.toLowerCase()} ${location.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/urgent/${timeSlug}/${serviceSlug}/${areaSlug}`,
    },
  };
}

export default async function UrgentPage({ params }: UrgentPageProps) {
  const { time: timeSlug, service: serviceSlug, area: areaSlug } = await params;
  
  const timeSlot = getEmergencyTimeSlot(timeSlug);
  const service = getEmergencyService(serviceSlug);
  const location = getLocation(areaSlug);
  
  if (!timeSlot || !service || !location) {
    notFound();
  }
  
  // Generate emergency FAQs
  const emergencyFaqs = [
    {
      question: `What is your ${timeSlot.shortName.toLowerCase()} response time for ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `${siteConfig.businessName} provides ${timeSlot.responseTime} for ${service.name.toLowerCase()} emergencies in ${location.name}. Our ${timeSlot.name.toLowerCase()} covers ${timeSlot.availability}. Call ${siteConfig.phone} for immediate assistance.`,
    },
    {
      question: `How much does ${timeSlot.shortName.toLowerCase()} ${service.name.toLowerCase()} cost in ${location.name}?`,
      answer: `${timeSlot.shortName} ${service.name.toLowerCase()} in ${location.name} typically costs ${service.typicalEmergencyCost}. Our callout fee is ${timeSlot.calloutFee}. We provide transparent pricing with no hidden charges.`,
    },
    {
      question: `What should I do while waiting for ${service.name.toLowerCase()} help?`,
      answer: `While waiting for ${siteConfig.businessName} to arrive: ${service.immediateActions.slice(0, 3).join('. ')}. Our team will guide you through any necessary immediate steps when you call.`,
    },
    {
      question: `Is ${siteConfig.businessName} really available ${timeSlot.availability.toLowerCase()}?`,
      answer: `Yes, ${siteConfig.businessName} operates ${timeSlot.availability}. Our ${timeSlot.name.toLowerCase()} ensures ${location.name} residents always have access to professional ${service.name.toLowerCase()}. We're local and ready to respond.`,
    },
    {
      question: `What ${service.name.toLowerCase()} emergencies do you handle in ${location.name}?`,
      answer: `We handle all ${service.name.toLowerCase()} emergencies in ${location.name} including: ${service.urgentSigns.slice(0, 3).join(', ')}. No job is too urgent - we're equipped to handle the most serious situations.`,
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
            "description": `${timeSlot.name} - ${service.name} in ${location.name}`,
            "url": `${BASE_URL}/urgent/${timeSlug}/${serviceSlug}/${areaSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": location.name,
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Emergency Hero */}
        <section className="bg-red-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold text-lg mb-6 animate-pulse">
              🚨 {timeSlot.shortName} EMERGENCY SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name} in {location.name}
            </h1>
            <p className="text-xl mb-4 text-red-100">
              {timeSlot.availability}
            </p>
            <p className="text-2xl font-bold mb-8">
              Response Time: {timeSlot.responseTime}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                📞 CALL NOW: {siteConfig.phone}
              </a>
              <a
                href="/contact"
                className="bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-800 transition-colors"
              >
                Request Callback
              </a>
            </div>
          </div>
        </section>
        
        {/* Urgent Signs */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ⚠️ Signs You Need {service.name} Now
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <ul className="space-y-4">
                  {service.urgentSigns.map((sign, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        !
                      </span>
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Immediate Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              While You Wait - Immediate Actions
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.immediateActions.map((action, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium">{action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our {timeSlot.name}
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Time Slot Details */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">⏰</span> Availability
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-semibold">{timeSlot.availability}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="font-semibold text-green-600">{timeSlot.responseTime}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Callout Fee:</span>
                      <span className="font-semibold">{timeSlot.calloutFee}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Typical Cost:</span>
                      <span className="font-semibold">{service.typicalEmergencyCost}</span>
                    </li>
                  </ul>
                </div>
                
                {/* Benefits */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">✅</span> Service Benefits
                  </h3>
                  <ul className="space-y-3">
                    {timeSlot.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Common Scenarios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common {timeSlot.shortName} Emergency Scenarios
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {timeSlot.scenarios.map((scenario, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-4 text-center">
                    <span className="text-red-600">🔧</span>
                    <p className="mt-2 text-gray-800">{scenario}</p>
                  </div>
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
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: `Serving ${location.name}` },
        ]} />
        
        {/* Call to Action Banner */}
        <section className="py-12 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don&apos;t Wait - Get Help Now
            </h2>
            <p className="text-xl mb-6 text-red-100">
              {siteConfig.businessName} is ready to respond to your {service.name.toLowerCase()} emergency in {location.name}
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-2xl hover:bg-gray-100 transition-colors inline-block"
            >
              📞 {siteConfig.phone}
            </a>
          </div>
        </section>
        
        {/* FAQs */}
        <FAQSection
          title={`${timeSlot.shortName} ${service.name} FAQs - ${location.name}`}
          faqs={emergencyFaqs}
        />
        
        {/* Other Emergency Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other {timeSlot.shortName} Services in {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {emergencyServices
                .filter(s => s.slug !== serviceSlug)
                .map(svc => (
                  <a
                    key={svc.slug}
                    href={`/urgent/${timeSlug}/${svc.slug}/${areaSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-red-600 hover:text-red-800"
                  >
                    {timeSlot.shortName} {svc.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* Other Time Slots */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {service.name} - All Time Options
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {emergencyTimeSlots
                .filter(t => t.slug !== timeSlug)
                .map(time => (
                  <a
                    key={time.slug}
                    href={`/urgent/${time.slug}/${serviceSlug}/${areaSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {time.shortName} {service.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <CTASection
          cta={{
            headline: `${location.name} ${service.name} Emergency?`,
            subtext: `${siteConfig.businessName} provides ${timeSlot.name.toLowerCase()} for ${location.name}. Our ${timeSlot.responseTime} response ensures you're never left waiting.`,
            buttonText: 'Call Now',
            urgencyText: `${timeSlot.responseTime} Response`,
            phoneNumber: siteConfig.phone,
          }}
        />
      </main>
    </>
  );
}
