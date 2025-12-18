// ============================================================================
// COST GUIDE AREA PAGE
// /cost-guides/[service]/[area] - Area-specific cost guide
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  costGuides, 
  costGuideAreas, 
  getCostGuide,
  generateCostGuideParams 
} from '@/lib/data/cost-guide-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection, FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ service: string; area: string }>;
}

export async function generateStaticParams() {
  return generateCostGuideParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = getCostGuide(resolvedParams.service);
  const area = costGuideAreas.find(a => a.slug === resolvedParams.area);
  
  if (!guide || !area) {
    return { title: 'Cost Guide Not Found' };
  }

  // Calculate price range from breakdown
  const prices = guide.priceBreakdown.map(p => p.lowEnd);
  const minPrice = Math.min(...prices);
  const maxPrices = guide.priceBreakdown.map(p => p.highEnd);
  const maxPrice = Math.max(...maxPrices);

  return {
    title: `${guide.name} Cost in ${area.name} 2024 | Pricing Guide`,
    description: `How much does ${guide.name.toLowerCase()} cost in ${area.name}? Detailed pricing from £${minPrice} to £${maxPrice}. Local pricing guide for ${area.name}.`,
    openGraph: {
      title: `${guide.name} Cost in ${area.name} 2024`,
      description: `${guide.name} costs in ${area.name}: Complete pricing breakdown`,
      type: 'website',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/cost-guides/${resolvedParams.service}/${resolvedParams.area}`,
    },
  };
}

export default async function CostGuideAreaPage({ params }: PageProps) {
  const resolvedParams = await params;
  const guide = getCostGuide(resolvedParams.service);
  const area = costGuideAreas.find(a => a.slug === resolvedParams.area);
  
  if (!guide || !area) {
    notFound();
  }

  // Get area multiplier
  const areaMultiplier = guide.areaMultipliers.find(a => a.areaSlug === resolvedParams.area);
  const multiplier = areaMultiplier?.multiplier || 1.0;

  // Calculate adjusted prices
  const adjustedPrices = guide.priceBreakdown.map(item => ({
    ...item,
    adjustedLow: Math.round(item.lowEnd * multiplier),
    adjustedMid: Math.round(item.midRange * multiplier),
    adjustedHigh: Math.round(item.highEnd * multiplier),
  }));

  const totalLow = adjustedPrices.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.adjustedLow, 0);
  const totalHigh = adjustedPrices.filter(p => p.unit === 'fixed').reduce((sum, p) => sum + p.adjustedHigh, 0);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Cost Guides', href: '/cost-guides' },
    { name: guide.name, href: `/cost-guides/${resolvedParams.service}` },
    { name: area.name, href: `/cost-guides/${resolvedParams.service}/${resolvedParams.area}`, current: true },
  ];

  // Local FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does ${guide.name.toLowerCase()} cost in ${area.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${guide.name} in ${area.name} typically costs between £${totalLow} and £${totalHigh} for a complete project. Prices may vary based on property type and specifications.`,
        },
      },
      ...guide.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    ],
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
              {guide.name} Cost in {area.name}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mb-6">
              Find out how much {guide.name.toLowerCase()} costs in {area.name}. 
              Accurate local pricing from your trusted {area.name} specialists.
            </p>
            
            {/* Price Summary Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 inline-block">
              <p className="text-emerald-200 text-sm mb-1">Typical cost in {area.name}</p>
              <p className="text-4xl font-bold">
                £{totalLow.toLocaleString()} - £{totalHigh.toLocaleString()}
              </p>
              {areaMultiplier && (
                <p className="text-emerald-200 text-sm mt-2">
                  {areaMultiplier.notes}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-12 bg-emerald-50 border-b border-emerald-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Local {area.name} Pricing
                </h2>
                <p className="text-slate-600">
                  Prices based on actual {area.name} projects completed by our team.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-white px-4 py-2 rounded-lg text-sm text-slate-600">
                  📍 Serving {area.name} &amp; surrounding areas
                </span>
                <span className="bg-white px-4 py-2 rounded-lg text-sm text-slate-600">
                  ⏱️ Same-day quotes available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Price Breakdown Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              {guide.name} Price Breakdown in {area.name}
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
                  {adjustedPrices.map((item, index) => (
                    <tr key={index} className="border-b border-slate-200">
                      <td className="p-4 font-medium text-slate-900">{item.item}</td>
                      <td className="p-4 text-right text-slate-600">
                        £{item.adjustedLow.toLocaleString()}
                        {item.unit !== 'fixed' && <span className="text-xs text-slate-400"> /{item.unit}</span>}
                      </td>
                      <td className="p-4 text-right text-slate-600">
                        £{item.adjustedMid.toLocaleString()}
                        {item.unit !== 'fixed' && <span className="text-xs text-slate-400"> /{item.unit}</span>}
                      </td>
                      <td className="p-4 text-right text-slate-600">
                        £{item.adjustedHigh.toLocaleString()}
                        {item.unit !== 'fixed' && <span className="text-xs text-slate-400"> /{item.unit}</span>}
                      </td>
                      <td className="p-4 text-slate-500 text-sm">{item.notes || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What Affects {guide.name} Cost in {area.name}?
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

        {/* What's Included */}
        <section className="py-16 bg-white">
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
              💡 Money-Saving Tips for {guide.name} in {area.name}
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
          title={`${guide.name} Cost FAQs for ${area.name}`}
        />

        {/* Other Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {guide.name} Costs in Other Areas
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {costGuideAreas
                .filter(a => a.slug !== resolvedParams.area)
                .slice(0, 10)
                .map((otherArea) => (
                  <Link
                    key={otherArea.slug}
                    href={`/cost-guides/${resolvedParams.service}/${otherArea.slug}`}
                    className="bg-slate-100 px-4 py-2 rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                  >
                    {otherArea.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          cta={{
            headline: `Get an Accurate ${guide.name} Quote for ${area.name}`,
            subtext: `Our prices are transparent with no hidden fees. Get a detailed quote for your ${area.name} project today.`,
            buttonText: 'Call Now',
            phoneNumber: '07459 345456',
          }}
        />
      </main>
    </>
  );
}
