// ============================================================================
// PSEO ENGINE - PROBLEM-SOLUTION PAGES
// Informational pages targeting problem searches (e.g., "radiator not heating")
// Route: /problems/[problem]
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig, BASE_URL } from '@/lib/config';
import { problemPages } from '@/lib/data/problems-database';
import { FAQSection } from '@/components/pseo';

// ============================================================================
// STATIC PARAMS GENERATION
// ============================================================================

export async function generateStaticParams() {
  return problemPages.map((page) => ({
    problem: page.slug,
  }));
}

// ============================================================================
// METADATA GENERATION
// ============================================================================

interface PageProps {
  params: Promise<{
    problem: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = problemPages.find(p => p.slug === resolvedParams.problem);
  
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
      canonical: `${BASE_URL}/problems/${page.slug}`,
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function ProblemPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = problemPages.find(p => p.slug === resolvedParams.problem);
  
  if (!page) {
    notFound();
  }
  
  // Get related problems (same category)
  const relatedProblems = problemPages
    .filter(p => p.category === page.category && p.slug !== page.slug)
    .slice(0, 3);
  
  // Urgency colors
  const urgencyColors = {
    emergency: 'bg-red-100 text-red-800',
    urgent: 'bg-orange-100 text-orange-800',
    routine: 'bg-green-100 text-green-800',
  };
  
  const urgencyLabels = {
    emergency: '🚨 Emergency - Act Now',
    urgent: '⚠️ Urgent - Don\'t Delay',
    routine: '📋 Routine - Plan Ahead',
  };
  
  // JSON-LD HowTo Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Fix: ${page.title}`,
    description: page.problem.description,
    step: page.diagnosis.steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.step,
      name: step.title,
      text: step.description,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Emergency Banner for Critical Issues */}
      {page.urgency === 'emergency' && (
        <div className="bg-red-600 text-white py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="font-semibold">⚠️ This may be an emergency - if in doubt, call a professional immediately</p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-block mt-2 bg-white text-red-600 px-4 py-1 rounded font-semibold hover:bg-red-50"
            >
              Emergency: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Category Badge */}
              <span className="inline-block bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 capitalize">
                {page.category} Problems
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {page.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                {page.problem.description}
              </p>
              
              {/* Urgency Badge */}
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${urgencyColors[page.urgency]}`}>
                {urgencyLabels[page.urgency]}
              </span>
              
              {/* Quick Jump Links */}
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <a href="#diagnosis" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">
                  Diagnosis
                </a>
                <a href="#solutions" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">
                  Solutions
                </a>
                <a href="#prevention" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">
                  Prevention
                </a>
                <a href="#faqs" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Common Causes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Common Causes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {page.problem.commonCauses.map((cause, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{cause}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                {page.problem.warningSignsTitle}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {page.problem.warningSigns.map((sign, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-amber-500"
                  >
                    <span className="text-amber-600 text-xl">⚠️</span>
                    <p className="text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>

              {/* Risk If Ignored */}
              <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🚨</span> What Happens If You Ignore This?
                </h3>
                <p className="text-red-700">{page.problem.riskIfIgnored}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diagnosis Steps */}
        <section id="diagnosis" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                {page.diagnosis.title}
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-sm mt-8">
                <div className="space-y-6">
                  {page.diagnosis.steps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </span>
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700">{step.description}</p>
                        {step.safetyNote && (
                          <p className="mt-2 text-amber-700 bg-amber-50 p-2 rounded text-sm">
                            ⚠️ Safety: {step.safetyNote}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* When to Call a Pro */}
                {page.diagnosis.whenToCallPro.length > 0 && (
                  <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-3">
                      ⚠️ Call a Professional If You Notice:
                    </h3>
                    <ul className="space-y-2">
                      {page.diagnosis.whenToCallPro.map((sign, index) => (
                        <li key={index} className="flex items-start gap-2 text-red-700">
                          <span className="text-red-500">•</span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Section */}
        <section id="solutions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Solutions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* DIY Solutions */}
                {page.solutions.diyPossible && page.solutions.diySteps && (
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-semibold text-xl text-green-900 mb-4 flex items-center gap-2">
                      <span>🔧</span> DIY Solution
                    </h3>
                    
                    {page.solutions.diyDifficulty && (
                      <p className="text-sm text-green-700 mb-4">
                        Difficulty: <span className="font-semibold capitalize">{page.solutions.diyDifficulty}</span>
                      </p>
                    )}
                    
                    <ol className="space-y-3">
                      {page.solutions.diySteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {/* Professional Solution */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-xl text-blue-900 mb-4 flex items-center gap-2">
                    <span>👷</span> Professional Solution
                  </h3>
                  
                  <p className="text-gray-700 mb-6">{page.solutions.professionalSolution}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-gray-600">Typical Cost:</span>
                      <span className="font-semibold text-gray-900">{page.solutions.typicalCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Time to Fix:</span>
                      <span className="font-semibold text-gray-900">{page.solutions.timeToFix}</span>
                    </div>
                  </div>
                  
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="mt-6 block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Prevention Tips */}
        <section id="prevention" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                {page.prevention.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {page.prevention.tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-green-500 shadow-sm"
                  >
                    <span className="text-green-600 text-xl">💡</span>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section id="faqs" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={page.faqs} />
            </div>
          </div>
        </section>
        
        {/* Related Problems */}
        {relatedProblems.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Related {page.category.charAt(0).toUpperCase() + page.category.slice(1)} Problems
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedProblems.map((problem) => (
                    <Link
                      key={problem.slug}
                      href={`/problems/${problem.slug}`}
                      className="block p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${urgencyColors[problem.urgency]}`}>
                        {problem.urgency}
                      </span>
                      <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{problem.problem.description}</p>
                      <span className="text-blue-600 text-sm font-medium mt-2 inline-block">
                        Read guide →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Final CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Still Having Problems?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you&apos;ve tried the DIY solutions and still have issues, or if you&apos;d prefer a professional to handle it from the start, we&apos;re here to help.
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
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Quote
              </Link>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm">
              Free quotes • Gas Safe registered • NICEIC approved
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
