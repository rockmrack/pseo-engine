// ============================================================================
// BOROUGH PAGE
// /borough/[borough] - London borough service pages
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { boroughs, getBorough } from '@/lib/data/boroughs-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ borough: string }>;
}

export async function generateStaticParams() {
  return boroughs.map((borough) => ({
    borough: borough.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const borough = getBorough(resolvedParams.borough);
  
  if (!borough) {
    return { title: 'Borough Not Found' };
  }

  return {
    title: `Plumber, Electrician & Heating Services in ${borough.name} | Hampstead Renovations`,
    description: `Expert plumbing, heating, and electrical services throughout ${borough.name}. Covering ${borough.areas.slice(0, 5).join(', ')} and more. Local, trusted, Gas Safe registered.`,
    openGraph: {
      title: `Services in ${borough.name}`,
      description: `Expert home services throughout ${borough.name} including ${borough.areas.slice(0, 3).join(', ')}.`,
      type: 'website',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/borough/${resolvedParams.borough}`,
    },
  };
}

export default async function BoroughPage({ params }: PageProps) {
  const resolvedParams = await params;
  const borough = getBorough(resolvedParams.borough);
  
  if (!borough) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'London Boroughs', href: '/boroughs' },
    { name: borough.name, href: `/borough/${resolvedParams.borough}`, current: true },
  ];

  // LocalBusiness schema with area served
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hampstead Renovations',
    description: `Plumbing, heating, and electrical services in ${borough.name}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: borough.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'Greater London',
      addressCountry: 'GB',
    },
    serviceArea: borough.areas.map(area => ({
      '@type': 'Place',
      name: area,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbs} className="mb-6 text-slate-300" />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumber, Electrician & Heating Services in {borough.name}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-6">
              {borough.description}
            </p>
            
            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">{borough.areas.length}+</p>
                <p className="text-slate-300 text-sm">Areas Covered</p>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">&lt;2hrs</p>
                <p className="text-slate-300 text-sm">Response Time</p>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-slate-300 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Borough */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our Services in {borough.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {borough.popularServices.map((serviceName, index) => (
                <Link
                  key={index}
                  href={`/local/${borough.areas[0]?.toLowerCase().replace(/\s+/g, '-') || borough.slug}/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all border border-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {serviceName}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Professional {serviceName.toLowerCase()} services across {borough.name}
                  </p>
                  <p className="text-blue-600 font-medium">
                    Get a Quote →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Cover */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Areas We Cover in {borough.name}
            </h2>
            <p className="text-slate-600 mb-8">
              We provide services throughout {borough.name}, including:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {borough.areas.map((area) => {
                const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={area}
                    href={`/local/${areaSlug}`}
                    className="bg-white px-4 py-3 rounded-lg text-center hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-200"
                  >
                    {area}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us in Borough */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Choose Us in {borough.name}?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Local Knowledge</h3>
                <p className="text-slate-600 text-sm">
                  We know {borough.name} properties - the common issues, building types, and what works.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Fast Response</h3>
                <p className="text-slate-600 text-sm">
                  Based locally, we reach {borough.name} customers within 2 hours.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Trusted & Certified</h3>
                <p className="text-slate-600 text-sm">
                  Gas Safe registered, fully insured, with verified reviews from {borough.name} customers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Fair Pricing</h3>
                <p className="text-slate-600 text-sm">
                  Transparent quotes with no hidden fees. Competitive rates for {borough.name}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Popular Services in {borough.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {borough.popularServices.slice(0, 6).map((serviceName, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{serviceName}</h3>
                  <p className="text-slate-600 mb-4">Professional {serviceName.toLowerCase()} services for homes and businesses across {borough.name}.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">Get a Quote</span>
                    <Link 
                      href={`/services`}
                      className="text-blue-600 hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Boroughs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              We Also Cover
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {boroughs
                .filter(b => b.slug !== resolvedParams.borough)
                .slice(0, 8)
                .map((otherBorough) => (
                  <Link
                    key={otherBorough.slug}
                    href={`/borough/${otherBorough.slug}`}
                    className="bg-slate-100 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {otherBorough.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          cta={{
            headline: `Need a Plumber, Electrician, or Heating Engineer in ${borough.name}?`,
            subtext: `Get a fast response from local experts. We cover all of ${borough.name} with same-day availability.`,
            buttonText: 'Get Free Quote',
            phoneNumber: '020 1234 5678',
          }}
        />
      </main>
    </>
  );
}
