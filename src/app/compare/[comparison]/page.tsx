// ============================================================================
// PSEO ENGINE - COMPARISON PAGES
// Decision-stage pages comparing options (e.g., "combi vs system boiler")
// Route: /compare/[comparison]
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig, BASE_URL } from '@/lib/config';
import { comparisonPages } from '@/lib/data/comparison-pages';
import { CTASection } from '@/components/pseo';

// ============================================================================
// STATIC PARAMS GENERATION
// ============================================================================

export async function generateStaticParams() {
  return comparisonPages.map((page) => ({
    comparison: page.slug,
  }));
}

// ============================================================================
// METADATA GENERATION
// ============================================================================

interface PageProps {
  params: Promise<{
    comparison: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = comparisonPages.find(p => p.slug === resolvedParams.comparison);
  
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }
  
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'article',
      locale: 'en_GB',
      siteName: siteConfig.businessName,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
    alternates: {
      canonical: `${BASE_URL}/compare/${page.slug}`,
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function ComparisonPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = comparisonPages.find(p => p.slug === resolvedParams.comparison);
  
  if (!page) {
    notFound();
  }
  
  // Get related comparisons (same category, different page)
  const relatedComparisons = comparisonPages
    .filter(p => p.category === page.category && p.slug !== page.slug)
    .slice(0, 3);
  
  // JSON-LD Schema for comparison article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.metaDescription,
    author: {
      '@type': 'Organization',
      name: siteConfig.businessName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/compare/${page.slug}`,
    },
  };
  
  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Category Badge */}
              <span className="inline-block bg-slate-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 capitalize">
                {page.category.replace('-', ' ')} Comparison
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {page.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Make an informed decision about {page.option1.name} vs {page.option2.name} for your North London home.
              </p>
              
              {/* Quick Jump Links */}
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#comparison" className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm">
                  Comparison Table
                </a>
                <a href="#verdict" className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm">
                  Our Verdict
                </a>
                <a href="#faqs" className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Options Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Option 1 */}
                <div className="bg-blue-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    {page.option1.name}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {page.option1.description}
                  </p>
                  
                  <h3 className="font-semibold text-green-700 mb-3">✓ Advantages</h3>
                  <ul className="space-y-2 mb-6">
                    {page.option1.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold text-red-700 mb-3">✗ Disadvantages</h3>
                  <ul className="space-y-2 mb-6">
                    {page.option1.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 mt-1">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Best for:</strong> {page.option1.bestFor.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Price range:</strong> {page.option1.priceRange}
                    </p>
                  </div>
                </div>
                
                {/* Option 2 */}
                <div className="bg-amber-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">
                    {page.option2.name}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {page.option2.description}
                  </p>
                  
                  <h3 className="font-semibold text-green-700 mb-3">✓ Advantages</h3>
                  <ul className="space-y-2 mb-6">
                    {page.option2.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold text-red-700 mb-3">✗ Disadvantages</h3>
                  <ul className="space-y-2 mb-6">
                    {page.option2.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 mt-1">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Best for:</strong> {page.option2.bestFor.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Price range:</strong> {page.option2.priceRange}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section id="comparison" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Side-by-Side Comparison
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-4 text-left">Feature</th>
                        <th className="px-6 py-4 text-center bg-blue-900">{page.option1.name}</th>
                        <th className="px-6 py-4 text-center bg-amber-700">{page.option2.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {page.comparisonTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4 font-medium">{row.factor}</td>
                          <td className="px-6 py-4 text-center">{row.option1Value}</td>
                          <td className="px-6 py-4 text-center">{row.option2Value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Verdict */}
        <section id="verdict" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Expert Verdict
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-8 md:p-12">
                <p className="text-lg text-gray-700 mb-8 text-center">
                  {page.verdict.summary}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">
                      Choose {page.option1.name} if:
                    </h3>
                    <ul className="space-y-2">
                      {page.verdict.choose1When.map((reason, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600">→</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-3 text-amber-900">
                      Choose {page.option2.name} if:
                    </h3>
                    <ul className="space-y-2">
                      {page.verdict.choose2When.map((reason, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-amber-600">→</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section id="faqs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {page.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm group"
                    open={index === 0}
                  >
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-slate-600 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Comparisons */}
        {relatedComparisons.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Related Comparisons
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedComparisons.map((comparison) => (
                    <Link
                      key={comparison.slug}
                      href={`/compare/${comparison.slug}`}
                      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2">{comparison.title}</h3>
                      <span className="text-blue-600 text-sm font-medium">
                        Read comparison →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Final CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our experienced team can help you decide which option is best for your home. Get personalized advice and a free, no-obligation quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
