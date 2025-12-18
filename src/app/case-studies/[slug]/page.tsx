// ============================================================================
// CASE STUDY DETAIL PAGE
// /case-studies/[slug] - Individual case study page
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies, getCaseStudy, getRelatedCaseStudies } from '@/lib/data/case-studies-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const study = getCaseStudy(resolvedParams.slug);
  
  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${study.title} | Case Study | Hampstead Renovations`,
    description: study.subtitle,
    openGraph: {
      title: study.title,
      description: study.subtitle,
      type: 'article',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/case-studies/${resolvedParams.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const study = getCaseStudy(resolvedParams.slug);
  
  if (!study) {
    notFound();
  }

  const relatedStudies = getRelatedCaseStudies(resolvedParams.slug).slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: study.title, href: `/case-studies/${resolvedParams.slug}`, current: true },
  ];

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.subtitle,
    author: {
      '@type': 'Organization',
      name: 'Hampstead Renovations',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hampstead Renovations',
    },
    datePublished: study.completionDate,
    about: {
      '@type': 'Service',
      name: study.projectType,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbs} className="mb-6 text-slate-300" />
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                {study.projectType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              <span className="text-slate-400">📍 {study.area}</span>
              <span className="text-slate-400">⏱️ {study.duration}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {study.subtitle}
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{study.duration}</p>
                <p className="text-slate-600 text-sm">Project Duration</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{study.area}</p>
                <p className="text-slate-600 text-sm">Location</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{study.propertyType}</p>
                <p className="text-slate-600 text-sm">Property Type</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">{study.budget}</p>
                <p className="text-slate-600 text-sm">Investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* The Challenge */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Our Approach */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Approach</h2>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {study.approach}
                </p>
              </div>

              {/* Our Solution */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {study.solution}
                </p>
                
                {/* Key Features */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Key Features:</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {study.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Outcome */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Outcome</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {study.outcome}
                </p>

                {/* Stats */}
                {study.stats.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {study.stats.map((stat, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-green-700">{stat.value}</p>
                        <p className="text-sm text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Used */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Services Used</h2>
                <div className="flex flex-wrap gap-2">
                  {study.servicesUsed.map((service, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {study.testimonial && (
                <div className="mb-12 bg-blue-50 rounded-xl p-8">
                  <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-lg text-slate-700 italic mb-4">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="text-slate-600 not-italic font-medium">
                    — {study.testimonial.author}, {study.testimonial.role}
                  </cite>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Related Projects
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedStudies.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/case-studies/${related.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video bg-slate-200 relative flex items-center justify-center">
                      <span className="text-4xl">🏠</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {related.area} • {related.duration}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          cta={{
            headline: 'Ready to Transform Your Property?',
            subtext: 'Get a free consultation and see how we can help with your project.',
            buttonText: 'Get Free Quote',
            phoneNumber: '020 1234 5678',
          }}
        />
      </main>
    </>
  );
}
