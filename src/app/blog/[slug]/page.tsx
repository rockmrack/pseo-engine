import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Calendar, Tag, ArrowLeft, ChevronRight } from 'lucide-react';

import { getBlogPost, allBlogSlugs, blogPosts, blogCategories } from '@/lib/data/blog-templates';
import { BASE_URL, siteConfig } from '@/lib/config';

// ============================================================================
// STATIC PARAMS - Generate all blog posts at build time
// ============================================================================

export function generateStaticParams() {
  return allBlogSlugs.map(slug => ({ slug }));
}

// ============================================================================
// METADATA
// ============================================================================

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | ${siteConfig.businessName} Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [siteConfig.businessName],
    },
  };
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.publishDate,
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
              '@id': `${BASE_URL}/blog/${slug}`,
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* Header */}
      <section className="bg-gradient-luxury text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cream-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
              <span className="bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-cream-300">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1 text-cream-300">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-navy-600 leading-relaxed mb-8">
                  {post.metaDescription.replace('...', '')}
                </p>

                {post.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">
                      {section.heading}
                    </h2>
                    <p className="text-navy-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}

                {/* FAQs */}
                {post.faqs.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-cream-200">
                    <h2 className="text-2xl font-bold text-navy-900 mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {post.faqs.map((faq, index) => (
                        <div key={index} className="bg-cream-50 rounded-xl p-6">
                          <h3 className="font-semibold text-navy-900 mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-navy-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-cream-200">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-5 h-5 text-navy-400" />
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-cream-100 text-navy-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gold-50 border border-gold-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Need Help With Your Project?
                </h3>
                <p className="text-navy-600 mb-6">
                  Our expert team is ready to help with any home improvement project across North London.
                  Get a free, no-obligation quote today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="bg-navy-100 hover:bg-navy-200 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <h3 className="font-bold text-navy-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {blogCategories.map(category => (
                    <li key={category}>
                      <Link
                        href={`/blog?category=${encodeURIComponent(category)}`}
                        className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                          category === post.category
                            ? 'bg-gold-100 text-gold-700'
                            : 'hover:bg-cream-50 text-navy-700'
                        }`}
                      >
                        <span>{category}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-cream-200">
                  <h3 className="font-bold text-navy-900 mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <li key={relatedPost.slug}>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="block hover:bg-cream-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
                        >
                          <h4 className="font-medium text-navy-800 line-clamp-2 mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-navy-500">
                            {relatedPost.readTime} min read
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-navy-900 text-white rounded-xl p-6">
                <h3 className="font-bold mb-2">Need Expert Advice?</h3>
                <p className="text-cream-300 text-sm mb-4">
                  Our team is happy to answer any questions about your home improvement project.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-center py-3 rounded-lg transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

export const revalidate = 86400; // 24 hours
