import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

import { blogPosts, blogCategories } from '@/lib/data/blog-templates';
import { BASE_URL, siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Home Improvement Blog | ${siteConfig.businessName}`,
  description: 'Expert advice on plumbing, heating, electrical work, and home renovations for North London properties. Tips for Victorian, Edwardian, and period homes.',
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const featuredPost = sortedPosts[0];
  const recentPosts = sortedPosts.slice(1, 7);
  const olderPosts = sortedPosts.slice(7);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Home Improvement Blog
            </h1>
            <p className="text-xl text-cream-200">
              Expert advice, tips, and guides for maintaining and improving your North London home.
              From Victorian terraces to modern apartments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-cream-200 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-navy-600 font-medium">Categories:</span>
            <Link
              href="/blog"
              className="px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-medium"
            >
              All
            </Link>
            {blogCategories.map(category => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="px-4 py-2 bg-white hover:bg-cream-100 text-navy-700 rounded-full text-sm font-medium transition-colors border border-cream-200"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Featured Article</h2>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-cream-200"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-navy-100 to-cream-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📖</div>
                  <span className="bg-gold-500 text-navy-900 text-sm font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-navy-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.publishDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} min read
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-navy-600 mb-6 line-clamp-3">
                  {featuredPost.metaDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-gold-600 font-semibold">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-cream-200"
              >
                <div className="aspect-video bg-gradient-to-br from-navy-50 to-cream-100 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gold-100 text-gold-700 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-navy-400">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-navy-600 line-clamp-2">
                    {post.metaDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts List */}
      {olderPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">All Articles</h2>
            <div className="space-y-4">
              {olderPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-cream-200 hover:border-gold-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-cream-100 text-navy-600 text-sm px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-medium text-navy-900">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-navy-500">
                    <span>{post.readTime} min</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-cream-300 mb-8 max-w-xl mx-auto">
            Our expert team is ready to help with any home improvement project.
            Get a free, no-obligation quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 86400; // 24 hours
