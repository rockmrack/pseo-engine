// ============================================================================
// PSEO ENGINE - BOOKING PAGES
// /book/[service]/[area] - Direct booking/inquiry pages
// 10x SEO Expansion - Strategy 9
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/data/services';
import { locations, getLocationBySlug } from '@/lib/data/locations';
import { siteConfig, BASE_URL } from '@/lib/config';
import { TrustSignalsSection } from '@/components/pseo';

interface BookingPageProps {
  params: Promise<{
    service: string;
    area: string;
  }>;
}

export async function generateStaticParams() {
  const params: { service: string; area: string }[] = [];
  
  for (const service of services) {
    for (const location of locations) {
      params.push({
        service: service.slug,
        area: location.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: BookingPageProps): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(areaSlug);
  
  if (!service || !location) {
    return { title: 'Page Not Found' };
  }
  
  const title = `Book ${service.name} in ${location.name} | Free Quote | ${siteConfig.businessName}`;
  const description = `Book ${service.name.toLowerCase()} in ${location.name} with ${siteConfig.businessName}. Free consultation and quote. Trusted local specialists. Fast response. Call ${siteConfig.phone}.`;
  
  return {
    title,
    description,
    keywords: [
      `book ${service.name.toLowerCase()} ${location.name}`,
      `${service.name.toLowerCase()} quote ${location.name}`,
      `hire ${service.name.toLowerCase()} ${location.name}`,
      `${location.name} ${service.name.toLowerCase()} booking`,
      `schedule ${service.name.toLowerCase()} ${location.postcode}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/book/${serviceSlug}/${areaSlug}`,
    },
  };
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { service: serviceSlug, area: areaSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(areaSlug);
  
  if (!service || !location) {
    notFound();
  }
  
  return (
    <>
      {/* Schema removed - using simple JSON-LD instead */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "description": `Book ${service.name} in ${location.name}`,
            "url": `${BASE_URL}/book/${serviceSlug}/${areaSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": location.name,
          }),
        }}
      />
      
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book {service.name} in {location.name}
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Free consultation • No obligation quote • {location.postcode} coverage
            </p>
            <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full">
              <span className="text-2xl mr-2">📞</span>
              <span className="text-xl font-semibold">Quick response: Call {siteConfig.phone}</span>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request Your Free Quote
                </h2>
                
                <form action="/api/contact" method="POST" className="space-y-6">
                  <input type="hidden" name="service" value={service.name} />
                  <input type="hidden" name="area" value={location.name} />
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="07xxx xxxxxx"
                    />
                  </div>
                  
                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address ({location.name})
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123 Example Street"
                    />
                  </div>
                  
                  {/* Service Confirmation */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Selected Service:</strong> {service.name}
                    </p>
                    <p className="text-sm text-blue-800">
                      <strong>Area:</strong> {location.name} ({location.postcode})
                    </p>
                  </div>
                  
                  {/* Project Details */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Describe your ${service.name.toLowerCase()} requirements...`}
                    />
                  </div>
                  
                  {/* Preferred Contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="contact_preference" value="phone" className="mr-2" defaultChecked />
                        Phone
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact_preference" value="email" className="mr-2" />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact_preference" value="either" className="mr-2" />
                        Either
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Free Quote
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </form>
              </div>
              
              {/* Info Panel */}
              <div className="space-y-8">
                {/* Quick Call */}
                <div className="bg-green-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Prefer to Talk?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Call us directly for immediate assistance with your {service.name.toLowerCase()} inquiry
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors"
                  >
                    📞 {siteConfig.phone}
                  </a>
                </div>
                
                {/* What Happens Next */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    What Happens Next?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Quick Response</h4>
                        <p className="text-gray-600 text-sm">We&apos;ll contact you within 2-4 hours to discuss your requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Free Site Survey</h4>
                        <p className="text-gray-600 text-sm">We&apos;ll visit your {location.name} property to assess the work</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Detailed Quote</h4>
                        <p className="text-gray-600 text-sm">Receive a comprehensive, itemized quote with no hidden costs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Schedule Work</h4>
                        <p className="text-gray-600 text-sm">Once approved, we schedule at a time convenient for you</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service Info */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.name} in {location.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.shortDescription || `Professional ${service.name.toLowerCase()} services for ${location.name} properties. ${siteConfig.businessName} delivers quality results with expert craftsmanship.`}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      Free, no-obligation quotes
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      Fully insured and certified
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      Local {location.name} expertise
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      Comprehensive guarantees
                    </li>
                  </ul>
                </div>
                
                {/* Trust Badges */}
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl mb-2">⭐</div>
                      <p className="text-sm font-semibold">5-Star Rated</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-2">🛡️</div>
                      <p className="text-sm font-semibold">Fully Insured</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-2">✓</div>
                      <p className="text-sm font-semibold">Certified</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-2">📍</div>
                      <p className="text-sm font-semibold">Local to {location.name}</p>
                    </div>
                  </div>
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
          { type: 'distance', icon: 'map-pin', name: 'Local to You', description: `Serving ${location.name}` },
        ]} />
        
        {/* Other Services */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Book Other Services in {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {services
                .filter(s => s.slug !== serviceSlug)
                .slice(0, 6)
                .map(svc => (
                  <a
                    key={svc.slug}
                    href={`/book/${svc.slug}/${areaSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    Book {svc.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* Other Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Book {service.name} in Other Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {locations
                .filter(l => l.slug !== areaSlug)
                .slice(0, 8)
                .map(loc => (
                  <a
                    key={loc.slug}
                    href={`/book/${serviceSlug}/${loc.slug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {loc.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
