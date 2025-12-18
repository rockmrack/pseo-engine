// ============================================================================
// PSEO ENGINE - FAQ HUB PAGES
// /faqs/[category]/[topic] - Comprehensive FAQ coverage
// 10x SEO Expansion - Strategy 7
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  faqCategories,
  faqTopics,
  getFAQCategory,
  getFAQTopic,
  getFAQTopicsByCategory,
  generateFAQParams,
} from '@/lib/data/faq-database';
import { siteConfig, BASE_URL } from '@/lib/config';
import { CTASection, TrustSignalsSection } from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface FAQPageProps {
  params: Promise<{
    category: string;
    topic: string;
  }>;
}

export async function generateStaticParams() {
  return generateFAQParams();
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { category: categorySlug, topic: topicSlug } = await params;
  
  const category = getFAQCategory(categorySlug);
  const topic = getFAQTopic(topicSlug);
  
  if (!category || !topic) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${topic.name} FAQs | ${category.name} | ${siteConfig.businessName}`;
  const description = `${topic.description}. Get answers to common questions about ${topic.name.toLowerCase()} from ${siteConfig.businessName}. Expert advice from trusted renovation specialists.`;
  
  return {
    title,
    description,
    keywords: [
      `${topic.name.toLowerCase()} faqs`,
      `${topic.name.toLowerCase()} questions`,
      `${category.name.toLowerCase()} advice`,
      `${topic.name.toLowerCase()} guide`,
      `${topic.name.toLowerCase()} help`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/faqs/${categorySlug}/${topicSlug}`,
    },
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { category: categorySlug, topic: topicSlug } = await params;
  
  const category = getFAQCategory(categorySlug);
  const topic = getFAQTopic(topicSlug);
  
  if (!category || !topic) {
    notFound();
  }
  
  const relatedTopics = getFAQTopicsByCategory(categorySlug).filter(t => t.slug !== topicSlug);
  
  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topic.questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "description": `Expert ${topic.name.toLowerCase()} advice`,
            "url": `${BASE_URL}/faqs/${categorySlug}/${topicSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": "North London",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {category.icon} {category.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {topic.name} FAQs
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {topic.description}
            </p>
          </div>
        </section>
        
        {/* Quick Navigation */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-600 font-medium">Jump to:</span>
              {topic.questions.map((q, index) => (
                <a
                  key={index}
                  href={`#question-${index + 1}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Q{index + 1}
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {topic.questions.map((faq, index) => (
                  <div
                    key={index}
                    id={`question-${index + 1}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden scroll-mt-8"
                  >
                    <div className="bg-blue-50 p-6">
                      <div className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          Q{index + 1}
                        </span>
                        <h2 className="text-xl font-bold text-gray-900">
                          {faq.question}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Still Have Questions */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team at {siteConfig.businessName} is happy to answer any questions about {topic.name.toLowerCase()}. 
              Get in touch for expert advice tailored to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ask a Question
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-blue-600"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <TrustSignalsSection signals={[
          { type: 'insurance', icon: 'shield', name: 'Fully Insured', description: 'Complete peace of mind' },
          { type: 'award', icon: 'award', name: '20+ Years Experience', description: 'Expert craftsmanship' },
          { type: 'guarantee', icon: 'check-circle', name: 'Satisfaction Guaranteed', description: 'Quality assured' },
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: 'Serving North London' },
        ]} />
        
        {/* Related Topics */}
        {relatedTopics.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related {category.name} Topics
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedTopics.map(relTopic => (
                  <a
                    key={relTopic.slug}
                    href={`/faqs/${categorySlug}/${relTopic.slug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {relTopic.name} FAQs
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Other Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Explore Other FAQ Categories
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {faqCategories
                .filter(c => c.slug !== categorySlug)
                .map(cat => {
                  const catTopics = getFAQTopicsByCategory(cat.slug);
                  const firstTopic = catTopics[0];
                  return firstTopic ? (
                    <a
                      key={cat.slug}
                      href={`/faqs/${cat.slug}/${firstTopic.slug}`}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
                    >
                      <div className="text-4xl mb-4">{cat.icon}</div>
                      <h3 className="font-bold text-gray-900 mb-2">{cat.name}</h3>
                      <p className="text-gray-600 text-sm">{cat.description}</p>
                    </a>
                  ) : null;
                })}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Ready to Start Your ${topic.name}?`,
            subtext: `${siteConfig.businessName} brings expert knowledge to every project. Contact us for a free consultation and quote.`,
            buttonText: 'Get Free Quote',
            phoneNumber: siteConfig.phone,
          }}
        />
      </main>
    </>
  );
}
