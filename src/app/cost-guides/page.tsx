// ============================================================================
// COST GUIDES INDEX PAGE
// /cost-guides - Main cost guide landing page
// ============================================================================

import { Metadata } from 'next';
import Link from 'next/link';
import { costGuides, costGuideAreas } from '@/lib/data/cost-guide-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

export const metadata: Metadata = {
  title: 'Home Improvement Cost Guides 2024 | Hampstead Renovations',
  description: 'Comprehensive cost guides for boilers, bathrooms, kitchens, and more in North London. Get accurate pricing for your home improvement projects.',
  openGraph: {
    title: 'Home Improvement Cost Guides 2024',
    description: 'Accurate pricing guides for all home improvement projects in North London.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hampsteadrenovations.co.uk/cost-guides',
  },
};

export default function CostGuidesPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Cost Guides', href: '/cost-guides', current: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbs} className="mb-6 text-emerald-300" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Home Improvement Cost Guides
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Transparent, up-to-date pricing for all our services. Find out exactly 
            what your project will cost in your area.
          </p>
          
          {/* Last Updated Badge */}
          <div className="mt-6 inline-flex items-center bg-emerald-800/50 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Prices updated: January 2025</span>
          </div>
        </div>
      </section>

      {/* Cost Guide Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Choose a Service Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costGuides.map((guide) => {
              // Calculate price range from breakdown
              const totalLow = guide.priceBreakdown
                .filter(p => p.unit === 'fixed')
                .reduce((sum, p) => sum + p.lowEnd, 0);
              const totalHigh = guide.priceBreakdown
                .filter(p => p.unit === 'fixed')
                .reduce((sum, p) => sum + p.highEnd, 0);

              return (
                <Link
                  key={guide.slug}
                  href={`/cost-guides/${guide.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-500 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {guide.name}
                    </h3>
                    <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full">
                      From £{totalLow.toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  
                  {/* Price Factors Preview */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Price depends on:</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.factors.slice(0, 3).map((costFactor) => (
                        <span 
                          key={costFactor.factor}
                          className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded"
                        >
                          {costFactor.factor}
                        </span>
                      ))}
                      {guide.factors.length > 3 && (
                        <span className="text-slate-500 text-xs px-2 py-1">
                          +{guide.factors.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-emerald-600 font-medium group-hover:underline">
                      View Full Price Guide →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Local Pricing for Your Area
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Costs vary by location. Select your area to see accurate local pricing 
            based on our completed projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {costGuideAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/cost-guides/bathroom-renovation/${area.slug}`}
                className="bg-white px-4 py-2 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our Prices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Trust Our Price Guides?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Based on Real Projects</h3>
              <p className="text-slate-600">
                Our prices come from actual projects we&apos;ve completed in North London, 
                not industry averages.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Breakdown</h3>
              <p className="text-slate-600">
                See exactly what goes into each price - labour, materials, and 
                all the factors that affect cost.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Regularly Updated</h3>
              <p className="text-slate-600">
                We update our prices regularly to reflect current material costs 
                and market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        cta={{
          headline: 'Get an Accurate Quote for Your Project',
          subtext: 'Our cost guides give you a starting point. For an exact price, get in touch for a free, no-obligation quote.',
          buttonText: 'Call Now',
          phoneNumber: '07459 345456',
        }}
      />
    </main>
  );
}
