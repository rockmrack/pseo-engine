// ============================================================================
// PSEO ENGINE - PRICE GUIDE PAGES
// /prices/[service]/[area] - Transparent pricing by service and area
// 10x SEO Expansion - Strategy 4
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  priceServices,
  getPriceService,
  generatePriceParams,
  formatPrice,
} from '@/lib/data/price-database';
import { getLocation } from '@/lib/data-access';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  HeroSection,
  FAQSection,
  CTASection,
  TrustSignalsSection,
} from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface PricePageProps {
  params: Promise<{
    service: string;
    area: string;
  }>;
}

export async function generateStaticParams() {
  return generatePriceParams();
}

export async function generateMetadata({ params }: PricePageProps): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  
  const service = getPriceService(serviceSlug);
  const location = getLocation(areaSlug);
  
  if (!service || !location) {
    return { title: 'Page Not Found' };
  }
  
  const lowestPrice = formatPrice(service.priceRanges[0].priceFrom);
  const title = `${service.name} Prices ${location.name} | From ${lowestPrice} | ${siteConfig.businessName}`;
  const description = `${service.name} costs in ${location.name} from ${lowestPrice}. Transparent pricing, no hidden fees. ${service.description} Get your free quote from ${siteConfig.businessName} today.`;
  
  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} cost ${location.name}`,
      `${service.name.toLowerCase()} prices ${location.name}`,
      `how much does ${service.name.toLowerCase()} cost ${location.name}`,
      `${location.name} ${service.name.toLowerCase()} quote`,
      `${service.name.toLowerCase()} ${location.postcode}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/prices/${serviceSlug}/${areaSlug}`,
    },
  };
}

export default async function PricePage({ params }: PricePageProps) {
  const { service: serviceSlug, area: areaSlug } = await params;
  
  const service = getPriceService(serviceSlug);
  const location = getLocation(areaSlug);
  
  if (!service || !location) {
    notFound();
  }
  
  // Generate price-specific FAQs
  const priceFaqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${location.name}?`,
      answer: `${service.name} in ${location.name} typically ranges from ${formatPrice(service.priceRanges[0].priceFrom)} to ${formatPrice(service.priceRanges[service.priceRanges.length - 1].priceTo)}. The exact price depends on: ${service.factorsAffectingPrice.slice(0, 3).join(', ')}. ${siteConfig.businessName} provides free, no-obligation quotes for ${location.name} properties.`,
    },
    {
      question: `What's included in your ${service.name.toLowerCase()} price?`,
      answer: `Our ${service.name.toLowerCase()} price includes: ${service.whatIsIncluded.join(', ')}. There are no hidden extras - we believe in complete transparency. The quote you receive is the price you pay.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take in ${location.name}?`,
      answer: `${service.name} typically takes ${service.timeline}. The exact duration depends on project complexity and any specific requirements for ${location.name} properties. We provide detailed timelines with every quote.`,
    },
    {
      question: `What warranty do you offer on ${service.name.toLowerCase()}?`,
      answer: `${siteConfig.businessName} provides ${service.warranty}. We stand behind our work with comprehensive guarantees that give you complete peace of mind.`,
    },
    {
      question: `Why choose ${siteConfig.businessName} for ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `${siteConfig.businessName} offers: transparent pricing with no hidden fees, local expertise in ${location.name} properties, comprehensive warranties, and exceptional craftsmanship. We're trusted by hundreds of ${location.name} residents.`,
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
            "description": `${service.name} pricing for ${location.name}`,
            "url": `${BASE_URL}/prices/${serviceSlug}/${areaSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": location.name,
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          h1={`${service.name} Prices in ${location.name}`}
          subtitle={`${service.description} ${siteConfig.businessName} provides clear, honest pricing for all ${location.name} projects. No hidden fees, no surprises.`}
          trustBadges={['Transparent Pricing', `From ${formatPrice(service.priceRanges[0].priceFrom)}`, 'No Hidden Fees']}
          ctaText="Get Your Free Quote"
          ctaSecondary={`Call ${siteConfig.phone}`}
          location={location.name}
        />
        
        {/* Price Tiers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {service.name} Price Guide for {location.name}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose the right option for your project. All prices include materials, labor, and project management.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {service.priceRanges.map((tier, index) => (
                <div 
                  key={tier.tier}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                    index === 1 ? 'ring-2 ring-blue-600 transform md:-translate-y-4' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                    <p className="text-gray-600 mb-6">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-600">
                        {formatPrice(tier.priceFrom)}
                      </span>
                      <span className="text-gray-500"> - {formatPrice(tier.priceTo)}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                        index === 1
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* What Affects Price */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Affects Your {service.name} Cost in {location.name}?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.factorsAffectingPrice.map((factor, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">
                      {index + 1}
                    </div>
                    <p className="font-semibold text-gray-900">{factor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* What's Included */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What&apos;s Included in Our Price
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.whatIsIncluded.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        ✓
                      </span>
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline & Warranty */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Timeline</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{service.timeline}</p>
                <p className="text-gray-600">
                  Exact timelines provided with your free quote
                </p>
              </div>
              
              {/* Warranty */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Warranty</h3>
                <p className="text-lg font-semibold text-green-600 mb-4">{service.warranty}</p>
                <p className="text-gray-600">
                  Complete peace of mind with every project
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Transparent Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why We Believe in Transparent Pricing
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">No Hidden Fees</h3>
                  <p className="text-gray-600">The quote you receive is the price you pay. No surprises.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Detailed Breakdown</h3>
                  <p className="text-gray-600">Every quote itemizes labor, materials, and all costs.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Fixed Price Guarantee</h3>
                  <p className="text-gray-600">Agreed prices don&apos;t change unless you request extras.</p>
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
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: `Serving ${location.name}` },
        ]} />
        
        {/* FAQs */}
        <FAQSection
          title={`${service.name} Pricing FAQs - ${location.name}`}
          faqs={priceFaqs}
        />
        
        {/* Other Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              View Prices for Other Services in {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {priceServices
                .filter(s => s.slug !== serviceSlug)
                .map(svc => (
                  <a
                    key={svc.slug}
                    href={`/prices/${svc.slug}/${areaSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {svc.name} Prices
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Get Your Free ${service.name} Quote`,
            subtext: `${siteConfig.businessName} provides free, no-obligation quotes for ${location.name} properties. Contact us today for transparent pricing and expert service.`,
            buttonText: 'Request Free Quote',
            phoneNumber: siteConfig.phone,
          }}
        />
      </main>
    </>
  );
}
