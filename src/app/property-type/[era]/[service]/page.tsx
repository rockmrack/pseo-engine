// ============================================================================
// PROPERTY AGE/ERA SERVICE PAGE
// /property-type/[era]/[service] - Era-specific service pages
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  propertyEras, 
  getPropertyEra, 
  servicesForPropertyTypes,
  getServiceForPropertyType 
} from '@/lib/data/property-age-database';
import { CTASection, FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ era: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { era: string; service: string }[] = [];
  
  // Generate from servicesForPropertyTypes combinations
  servicesForPropertyTypes.forEach((combo) => {
    params.push({
      era: combo.propertySlug,
      service: combo.serviceSlug,
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const era = getPropertyEra(resolvedParams.era);
  const serviceCombo = getServiceForPropertyType(resolvedParams.service, resolvedParams.era);
  
  if (!era || !serviceCombo) {
    return { title: 'Not Found' };
  }

  return {
    title: `${serviceCombo.title} | Specialist Services | London Property Experts`,
    description: serviceCombo.description,
    openGraph: {
      title: serviceCombo.title,
      description: serviceCombo.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://example.co.uk/property-type/${resolvedParams.era}/${resolvedParams.service}`,
    },
  };
}

export default async function PropertyEraServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const era = getPropertyEra(resolvedParams.era);
  const serviceCombo = getServiceForPropertyType(resolvedParams.service, resolvedParams.era);
  
  if (!era || !serviceCombo) {
    notFound();
  }

  // Get related property eras for cross-linking
  const relatedEras = propertyEras.filter(e => e.slug !== era.slug).slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-700 to-stone-900 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-stone-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/property-type" className="hover:text-white">Property Types</Link>
            <span className="mx-2">/</span>
            <Link href={`/property-type/${era.slug}`} className="hover:text-white">{era.name}</Link>
            <span className="mx-2">/</span>
            <span>{serviceCombo.serviceName}</span>
          </nav>
          
          <div className="max-w-3xl">
            <span className="inline-block bg-stone-500/30 text-stone-200 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {era.name} ({era.yearRange})
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {serviceCombo.title}
            </h1>
            <p className="text-xl text-stone-300 mb-6">
              {serviceCombo.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-stone-800 px-6 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors"
              >
                Get Expert Advice
              </Link>
              <Link
                href="tel:02012345678"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call: 020 1234 5678
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Era Characteristics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Understanding {era.name} Properties
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Property Characteristics</h3>
              <ul className="space-y-3">
                {era.characteristics.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-stone-600 text-xl"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Common Issues</h3>
              <ul className="space-y-3">
                {era.commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-amber-600 text-xl"></span>
                    <span className="text-slate-700">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Challenges */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {serviceCombo.serviceName} Challenges in {era.name} Properties
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCombo.specificChallenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl"></span>
                <p className="text-slate-700">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Our Specialist Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCombo.ourApproach.map((approach, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                <svg className="w-6 h-6 text-stone-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-slate-700">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Timeframe */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Investment & Timeline
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-stone-700 p-6 rounded-xl">
                <span className="text-4xl mb-4 block"></span>
                <h3 className="font-bold text-xl mb-2">Typical Cost</h3>
                <p className="text-stone-300">{serviceCombo.typicalCost}</p>
              </div>
              <div className="bg-stone-700 p-6 rounded-xl">
                <span className="text-4xl mb-4 block"></span>
                <h3 className="font-bold text-xl mb-2">Timeframe</h3>
                <p className="text-stone-300">{serviceCombo.timeframe}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Era-Specific Considerations */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {era.name} Heating & Plumbing Considerations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Heating Considerations</h3>
              <ul className="space-y-2">
                {era.heatingConsiderations.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600">
                    <span className="text-stone-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Plumbing Considerations</h3>
              <ul className="space-y-2">
                {era.plumbingConsiderations.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600">
                    <span className="text-stone-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {serviceCombo.faqs.length > 0 && (
        <FAQSection
          title={`FAQs: ${serviceCombo.serviceName} for ${era.name}`}
          faqs={serviceCombo.faqs}
        />
      )}

      {/* Related Property Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Other Property Types We Serve
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {relatedEras.map((relatedEra) => (
              <Link
                key={relatedEra.slug}
                href={`/property-type/${relatedEra.slug}`}
                className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-bold text-slate-900 mb-1">{relatedEra.name}</h3>
                <p className="text-sm text-slate-500">{relatedEra.yearRange}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        cta={{
          headline: `Expert ${serviceCombo.serviceName} for ${era.name} Properties`,
          subtext: 'Our specialists understand the unique challenges of period properties.',
          buttonText: 'Get a Quote',
          phoneNumber: '020 1234 5678',
        }}
      />
    </main>
  );
}