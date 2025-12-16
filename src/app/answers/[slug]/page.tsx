// ============================================================================
// PSEO ENGINE - VOICE SEARCH Q&A PAGE
// Optimized for voice search and featured snippets
// /answers/[slug]/page.tsx
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  voiceSearchQAs,
  getVoiceSearchQABySlug,
  generateSpeakableSchema,
} from '@/lib/data/voice-search-qa';
import { HeroSection, CTASection, FAQSection } from '@/components/pseo';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all voice search Q&As
export async function generateStaticParams() {
  return voiceSearchQAs.map((qa) => ({
    slug: qa.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const qa = getVoiceSearchQABySlug(slug);
  
  if (!qa) {
    return {
      title: 'Question Not Found',
    };
  }
  
  return {
    title: qa.metaTitle,
    description: qa.metaDescription,
    openGraph: {
      title: qa.metaTitle,
      description: qa.metaDescription,
    },
  };
}

export default async function VoiceSearchQAPage({ params }: PageProps) {
  const { slug } = await params;
  const qa = getVoiceSearchQABySlug(slug);
  
  if (!qa) {
    notFound();
  }
  
  // Generate schemas
  const speakableSchema = generateSpeakableSchema(qa);
  
  // FAQ schema for related questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: qa.voiceQuery,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.directAnswer,
        },
      },
      ...qa.relatedQuestions.map((q) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Read our detailed guide about ${q.toLowerCase().replace('?', '')} on our website.`,
        },
      })),
    ],
  };
  
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-gray-50">
        {/* Voice Query Header - Optimized for Speakable */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-sm font-medium">Voice Search Answer</span>
            </div>
            
            {/* The voice query - marked with voice-query class for speakable */}
            <h1 className="voice-query text-3xl md:text-4xl font-bold mb-8 leading-tight">
              {qa.voiceQuery}
            </h1>
            
            {/* Direct answer - optimized for featured snippet */}
            <div className="direct-answer bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="text-xl leading-relaxed">
                {qa.directAnswer}
              </p>
            </div>
          </div>
        </section>
        
        {/* Full Answer Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Complete Answer</h2>
            
            {/* Render markdown-like content */}
            <article className="prose prose-lg max-w-none">
              {qa.fullAnswer.split('\n\n').map((paragraph, index) => {
                // Check if it's a header
                if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                      {paragraph.replace(/\*\*/g, '').replace(':', '')}
                    </h3>
                  );
                }
                
                // Check if it's a table
                if (paragraph.includes('|')) {
                  const rows = paragraph.split('\n').filter(row => !row.includes('---'));
                  const headers = rows[0]?.split('|').filter(Boolean).map(h => h.trim());
                  const data = rows.slice(1).map(row => 
                    row.split('|').filter(Boolean).map(cell => cell.trim())
                  );
                  
                  return (
                    <div key={index} className="overflow-x-auto my-6">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {headers?.map((header, i) => (
                              <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                
                // Check if it's a list
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.replace('- ', '').replace(/\*\*/g, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Check if it's a numbered list
                if (/^\d+\.\s/.test(paragraph)) {
                  const items = paragraph.split('\n').filter(item => /^\d+\.\s/.test(item));
                  return (
                    <ol key={index} className="list-decimal pl-6 my-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.replace(/^\d+\.\s/, '').replace(/\*\*/g, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }
                
                // Default paragraph
                return (
                  <p key={index} className="text-gray-700 my-4 leading-relaxed">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              })}
            </article>
          </div>
        </section>
        
        {/* Alternative Queries */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">People also ask this as:</h2>
            <div className="grid gap-3">
              {qa.alternativeQueries.map((query, index) => (
                <div key={index} className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">&ldquo;{query}&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Questions */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Questions</h2>
            <div className="space-y-4">
              {qa.relatedQuestions.map((question, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                    <span className="font-medium text-gray-900">{question}</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600">
                    <p>
                      We have a detailed guide covering this question. 
                      <Link href="/contact" className="text-blue-600 hover:underline ml-1">
                        Contact us for a personalised answer
                      </Link>.
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Context */}
        {qa.locationSpecific && qa.locations && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">This answer applies to:</h2>
              <div className="flex flex-wrap gap-2">
                {qa.locations.map((location, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Related Service CTA */}
        {qa.relatedService && (
          <section className="py-16 bg-blue-900 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help With This?</h2>
              <p className="text-blue-200 mb-8">
                We specialise in {qa.relatedService.replace(/-/g, ' ')} services across North London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  href={`tel:02071234567`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call 020 7123 4567
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
