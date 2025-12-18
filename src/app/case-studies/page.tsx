// ============================================================================
// CASE STUDIES INDEX PAGE
// /case-studies - Main case studies listing
// ============================================================================

import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies, caseStudyCategories } from '@/lib/data/case-studies-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';

export const metadata: Metadata = {
  title: 'Case Studies | Real Project Examples | Hampstead Renovations',
  description: 'Explore detailed case studies of our renovation projects across North London. See how we solved real problems for real customers.',
  openGraph: {
    title: 'Case Studies | Hampstead Renovations',
    description: 'Real project examples showing our work quality and customer results.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hampsteadrenovations.co.uk/case-studies',
  },
};

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies', current: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbs} className="mb-6 text-blue-300" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover how we&apos;ve helped homeowners and landlords across North London 
            with detailed project stories and results.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <span className="text-slate-600 py-2">Filter by:</span>
            {caseStudyCategories.map((category) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="px-4 py-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 rounded-full text-sm transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies[0] && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Project</h2>
            
            <Link 
              href={`/case-studies/${caseStudies[0].slug}`}
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
                <div className="md:w-1/2 aspect-video md:aspect-auto bg-slate-200 relative flex items-center justify-center">
                  <span className="text-6xl">🏠</span>
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="md:w-1/2 p-8">
                  <p className="text-blue-600 font-medium mb-2">
                    {caseStudies[0].projectType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudies[0].title}
                  </h3>
                  <p className="text-slate-600 mb-4">{caseStudies[0].subtitle}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                    <span>📍 {caseStudies[0].area}</span>
                    <span>⏱️ {caseStudies[0].duration}</span>
                    <span>💰 {caseStudies[0].budget}</span>
                  </div>
                  
                  {/* Key Features Preview */}
                  <div className="flex flex-wrap gap-3">
                    {caseStudies[0].keyFeatures.slice(0, 2).map((feature, i) => (
                      <span key={i} className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">All Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-slate-200 relative flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs px-2 py-1 rounded">
                    {study.projectType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {study.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-4">
                    <span>📍 {study.area}</span>
                    <span>⏱️ {study.duration}</span>
                  </div>
                  
                  <div className="text-blue-600 font-medium text-sm group-hover:underline">
                    Read Case Study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-400">{caseStudies.length}+</p>
              <p className="text-slate-300">Documented Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">98%</p>
              <p className="text-slate-300">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">15+</p>
              <p className="text-slate-300">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">500+</p>
              <p className="text-slate-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
