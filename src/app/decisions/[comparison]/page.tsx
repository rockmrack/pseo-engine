// ============================================================================
// DECISION GUIDES PAGE
// /decisions/[comparison] - X vs Y comparison decision guides
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  decisionGuides, 
  getDecisionGuide,
  getGuidesByCategory 
} from '@/lib/data/decision-guides-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection, FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ comparison: string }>;
}

export async function generateStaticParams() {
  return decisionGuides.map((guide) => ({
    comparison: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = getDecisionGuide(resolvedParams.comparison);
  
  if (!guide) {
    return { title: 'Decision Guide Not Found' };
  }

  return {
    title: `${guide.title} | Which is Better? | Hampstead Renovations`,
    description: guide.introduction,
    openGraph: {
      title: guide.title,
      description: guide.introduction,
      type: 'article',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/decisions/${resolvedParams.comparison}`,
    },
  };
}

export default async function DecisionGuidePage({ params }: PageProps) {
  const resolvedParams = await params;
  const guide = getDecisionGuide(resolvedParams.comparison);
  
  if (!guide) {
    notFound();
  }

  const relatedGuides = getGuidesByCategory(guide.category)
    .filter(g => g.slug !== guide.slug)
    .slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Decision Guides', href: '/decisions' },
    { name: guide.title, href: `/decisions/${resolvedParams.comparison}`, current: true },
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

  // Comparison Schema
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.introduction,
    articleBody: guide.introduction,
    author: {
      '@type': 'Organization',
      name: 'Hampstead Renovations',
    },
    about: [
      { '@type': 'Thing', name: guide.optionA.name },
      { '@type': 'Thing', name: guide.optionB.name },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbs} className="mb-6 text-indigo-300" />
            
            <span className="bg-indigo-700 text-indigo-100 text-sm px-3 py-1 rounded-full mb-4 inline-block">
              {guide.category.charAt(0).toUpperCase() + guide.category.slice(1)} Decision Guide
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl">
              {guide.introduction}
            </p>
          </div>
        </section>

        {/* Quick Comparison Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Option A */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  {guide.optionA.name}
                </h2>
                <p className="text-blue-700 mb-6">{guide.optionA.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {guide.optionA.pros.map((pro, i) => (
                        <li key={i} className="text-blue-800 text-sm flex items-start">
                          <span className="text-green-500 mr-2">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {guide.optionA.cons.map((con, i) => (
                        <li key={i} className="text-blue-800 text-sm flex items-start">
                          <span className="text-red-500 mr-2">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-blue-200">
                    <p className="text-sm text-blue-700">
                      <span className="font-semibold">Typical cost:</span> {guide.optionA.typicalCost}
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      <span className="font-semibold">Best for:</span> {guide.optionA.bestFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Option B */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-purple-900 mb-2">
                  {guide.optionB.name}
                </h2>
                <p className="text-purple-700 mb-6">{guide.optionB.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {guide.optionB.pros.map((pro, i) => (
                        <li key={i} className="text-purple-800 text-sm flex items-start">
                          <span className="text-green-500 mr-2">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {guide.optionB.cons.map((con, i) => (
                        <li key={i} className="text-purple-800 text-sm flex items-start">
                          <span className="text-red-500 mr-2">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-purple-200">
                    <p className="text-sm text-purple-700">
                      <span className="font-semibold">Typical cost:</span> {guide.optionB.typicalCost}
                    </p>
                    <p className="text-sm text-purple-700 mt-1">
                      <span className="font-semibold">Best for:</span> {guide.optionB.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Side-by-Side Comparison
            </h2>
            
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-slate-600 font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-blue-600 font-semibold">{guide.optionA.name}</th>
                    <th className="px-6 py-4 text-center text-purple-600 font-semibold">{guide.optionB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {guide.comparisonTable.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900 font-medium">{row.factor}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{row.optionA}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{row.optionB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Our Recommendation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Our Expert Recommendation
              </h2>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {guide.expertVerdict}
                </p>
                
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-blue-600 mb-2">Choose {guide.optionA.name} if:</h3>
                    <p className="text-sm text-slate-600">{guide.optionA.bestFor}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-purple-600 mb-2">Choose {guide.optionB.name} if:</h3>
                    <p className="text-sm text-slate-600">{guide.optionB.bestFor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          faqs={guide.faqs}
          title={`${guide.optionA.name} vs ${guide.optionB.name} FAQs`}
        />

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Related Decision Guides
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/decisions/${related.slug}`}
                    className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {related.introduction}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          cta={{
            headline: "Need Help Deciding?",
            subtext: "Our experts can assess your specific situation and recommend the best option for your home.",
            buttonText: "Get Free Advice",
            phoneNumber: "020 8000 0000"
          }}
        />
      </main>
    </>
  );
}
