// ============================================================================
// COST GUIDE SERVICE PAGE
// /cost-guides/[service] - Service-specific cost guide
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { costGuides, costGuideAreas, getCostGuide } from '@/lib/data/cost-guide-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection, FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return costGuides.map((guide) => ({
    service: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = getCostGuide(resolvedParams.service);
  
  if (!guide) {
    return { title: 'Cost Guide Not Found' };
  }

  // Calculate price range from breakdown
  const totalLow = guide.priceBreakdown.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.lowEnd, 0);
  const totalHigh = guide.priceBreakdown.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.highEnd, 0);

  return {
    title: `${guide.name} Cost Guide 2024 | £${totalLow} - £${totalHigh}`,
    description: `How much does ${guide.name.toLowerCase()} cost? £${totalLow} to £${totalHigh} in North London. Get detailed pricing breakdown and factors.`,
    openGraph: {
      title: `${guide.name} Cost Guide 2024`,
      description: `${guide.name} costs £${totalLow} - £${totalHigh}. Complete pricing guide.`,
      type: 'website',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/cost-guides/${resolvedParams.service}`,
    },
  };
}

export default async function CostGuideServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const guide = getCostGuide(resolvedParams.service);
  
  if (!guide) {
    notFound();
  }

  // Calculate totals
  const totalLow = guide.priceBreakdown.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.lowEnd, 0);
  const totalMid = guide.priceBreakdown.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.midRange, 0);
  const totalHigh = guide.priceBreakdown.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.highEnd, 0);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Cost Guides', href: '/cost-guides' },
    { name: guide.name, href: `/cost-guides/${resolvedParams.service}`, current: true },
  ];

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbs} className="mb-6 text-emerald-300" />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Much Does {guide.name} Cost?
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mb-6">
              {guide.description}
            </p>
            
            {/* Price Summary Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-2xl">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-emerald-200 text-sm mb-1">Budget</p>
                <p className="text-2xl font-bold">£{totalLow.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border-2 border-emerald-400">
                <p className="text-emerald-200 text-sm mb-1">Average</p>
                <p className="text-3xl font-bold">£{totalMid.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-emerald-200 text-sm mb-1">Premium</p>
                <p className="text-2xl font-bold">£{totalHigh.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Breakdown Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {guide.name} Price Breakdown
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-semibold text-slate-900">Item</th>
                    <th className="text-right p-4 font-semibold text-slate-900">Budget</th>
                    <th className="text-right p-4 font-semibold text-slate-900">Mid-Range</th>
                    <th className="text-right p-4 font-semibold text-slate-900">Premium</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.priceBreakdown.map((item, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="p-4 font-medium text-slate-900">{item.item}</td>
                      <td className="p-4 text-right text-slate-600">
                        £{item.lowEnd.toLocaleString()}
                        {item.unit !== 'fixed' && <span className="text-xs text-slate-400"> /{item.unit}</span>}
                      </td>
                      <td className="p-4 text-right text-slate-600">
                        £{item.midRange.toLocaleString()}
                        {item.unit !== 'fixed' && <span className="text-xs text-slate-400"> /{item.unit}</span>}
                      </td>
                      <td className="p-4 text-right text-slate-600">
                        £{item.highEnd.toLocaleString()}
                        {item.unit !== 'fixed' && <span className="text-xs text-slate-400"> /{item.unit}</span>}
                      </td>
                      <td className="p-4 text-slate-500 text-sm">{item.notes || '-'}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-emerald-50 font-bold">
                    <td className="p-4 text-slate-900">Total (Fixed Items)</td>
                    <td className="p-4 text-right text-slate-900">£{totalLow.toLocaleString()}</td>
                    <td className="p-4 text-right text-emerald-600">£{totalMid.toLocaleString()}</td>
                    <td className="p-4 text-right text-slate-900">£{totalHigh.toLocaleString()}</td>
                    <td className="p-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What Affects {guide.name} Cost?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guide.factors.map((factor, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      factor.impact === 'high' ? 'bg-red-100 text-red-700' :
                      factor.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {factor.impact} impact
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{factor.factor}</h3>
                  <p className="text-slate-600 text-sm">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Area-Specific Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {guide.name} Cost by Area
            </h2>
            <p className="text-slate-600 mb-8">
              Prices vary by location. Select an area for specific local pricing.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {guide.areaMultipliers.map((area) => (
                <Link
                  key={area.areaSlug}
                  href={`/cost-guides/${resolvedParams.service}/${area.areaSlug}`}
                  className="bg-slate-50 rounded-xl p-4 hover:bg-emerald-50 hover:border-emerald-200 transition-colors border border-slate-200"
                >
                  <h3 className="font-bold text-slate-900 mb-1">{area.areaName}</h3>
                  <p className="text-sm text-slate-600 mb-2">{area.notes}</p>
                  <p className="text-emerald-600 font-semibold">
                    From £{Math.round(totalLow * area.multiplier).toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  ✓ Included in Our Quotes
                </h2>
                <ul className="space-y-3">
                  {guide.includedInPrice.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  ✗ Not Included (May Be Extra)
                </h2>
                <ul className="space-y-3">
                  {guide.notIncludedInPrice.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Money Saving Tips */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              💡 Money-Saving Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {guide.savingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-500">
                  <p className="text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          faqs={guide.faqs}
          title={`${guide.name} Cost FAQs`}
        />

        {/* Other Cost Guides */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Other Cost Guides
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {costGuides
                .filter(g => g.slug !== resolvedParams.service)
                .slice(0, 8)
                .map((otherGuide) => (
                  <Link
                    key={otherGuide.slug}
                    href={`/cost-guides/${otherGuide.slug}`}
                    className="bg-slate-100 px-4 py-2 rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                  >
                    {otherGuide.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          cta={{
            headline: `Get an Accurate ${guide.name} Quote`,
            subtext: `Our prices are transparent with no hidden fees. Get a detailed quote for your project today.`,
            buttonText: 'Call Now',
            phoneNumber: '07459 345456',
          }}
        />
      </main>
    </>
  );
}
