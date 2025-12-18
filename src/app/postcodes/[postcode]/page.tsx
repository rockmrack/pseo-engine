// ============================================================================
// PSEO ENGINE - POSTCODE CLUSTER LANDING PAGE
// Targets searches like "plumber NW3", "builder Hampstead postcode"
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { postcodeClusters, getPostcodeCluster, getAllPostcodeSlugs } from '@/lib/data/postcode-clusters';
import { services } from '@/lib/data/services';
import { generateOrganizationSchema } from '@/lib/data/organization-schema';
import { FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ postcode: string }>;
}

export async function generateStaticParams() {
  return getAllPostcodeSlugs().map((slug) => ({
    postcode: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { postcode } = await params;
  const cluster = getPostcodeCluster(postcode);
  
  if (!cluster) {
    return { title: 'Not Found' };
  }

  return {
    title: cluster.metaTitle,
    description: cluster.metaDescription,
    keywords: [
      `plumber ${cluster.postcode}`,
      `electrician ${cluster.postcode}`,
      `builder ${cluster.postcode}`,
      ...cluster.areas.map(a => `home services ${a}`),
      ...cluster.popularServices.map(s => `${s.replace(/-/g, ' ')} ${cluster.postcode}`),
      `emergency plumber ${cluster.postcode}`,
      `local builder ${cluster.areas[0]}`,
    ],
    openGraph: {
      title: cluster.metaTitle,
      description: cluster.metaDescription,
      type: 'website',
      locale: 'en_GB',
      siteName: 'Hampstead Renovations',
    },
    twitter: {
      card: 'summary_large_image',
      title: cluster.metaTitle,
      description: cluster.metaDescription,
    },
    alternates: {
      canonical: `https://www.hampsteadrenovations.com/postcodes/${cluster.slug}`,
    },
  };
}

export default async function PostcodeClusterPage({ params }: PageProps) {
  const { postcode } = await params;
  const cluster = getPostcodeCluster(postcode);

  if (!cluster) {
    notFound();
  }

  // Get popular services data
  const popularServiceData = cluster.popularServices
    .map(slug => services.find(s => s.slug === slug))
    .filter(Boolean);

  // Generate schema markup
  const organizationSchema = generateOrganizationSchema();
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.hampsteadrenovations.com/postcodes/${cluster.slug}#business`,
    name: `Hampstead Renovations - ${cluster.postcode}`,
    description: cluster.description,
    url: `https://www.hampsteadrenovations.com/postcodes/${cluster.slug}`,
    telephone: '+447459345456',
    email: 'hello@hampsteadrenovations.com',
    priceRange: '££-££££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cluster.areas[0],
      postalCode: cluster.postcode,
      addressRegion: 'London',
      addressCountry: 'GB',
    },
    areaServed: cluster.areas.map(area => ({
      '@type': 'Place',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services in ${cluster.postcode}`,
      itemListElement: popularServiceData.map((service, idx) => ({
        '@type': 'Offer',
        '@id': `https://www.hampsteadrenovations.com/services#${service?.slug}`,
        name: service?.name,
        position: idx + 1,
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.hampsteadrenovations.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: 'https://www.hampsteadrenovations.com/areas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cluster.name,
        item: `https://www.hampsteadrenovations.com/postcodes/${cluster.slug}`,
      },
    ],
  };

  // Generate FAQs specific to this postcode
  const faqs = [
    {
      question: `Do you provide emergency services in ${cluster.postcode}?`,
      answer: `Yes, we offer 24/7 emergency plumbing and electrical services across ${cluster.postcode}, covering ${cluster.areas.join(', ')}. Our local engineers can typically reach you within 30-60 minutes.`,
    },
    {
      question: `What areas do you cover in ${cluster.postcode}?`,
      answer: `We serve all areas within ${cluster.postcode} including ${cluster.areas.join(', ')}. Our team has extensive experience working with the ${cluster.propertyTypes.join(', ')} common in this area.`,
    },
    {
      question: `Are your tradespeople experienced with ${cluster.propertyTypes[0]}?`,
      answer: `Absolutely! Our team specializes in ${cluster.propertyTypes.join(', ')}, which are prevalent in ${cluster.postcode}. We understand the unique challenges and requirements of period properties.`,
    },
    {
      question: `What are your most requested services in ${cluster.postcode}?`,
      answer: `The most popular services we provide in ${cluster.postcode} include ${cluster.popularServices.slice(0, 3).map(s => s.replace(/-/g, ' ')).join(', ')}. These reflect the needs of the local housing stock.`,
    },
    {
      question: `How much do home renovation services cost in ${cluster.postcode}?`,
      answer: `With average property values of ${cluster.keyStats.avgPrice} in ${cluster.postcode}, our clients typically invest in quality workmanship. We provide free, detailed quotes for all work. Call 07459 345456 for a consultation.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-amber-400">{cluster.postcode}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
              {cluster.borough} • {cluster.keyStats.households} Households
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Home Services in <span className="text-amber-400">{cluster.postcode}</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {cluster.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:07459345456"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07459 345456
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                Request Free Quote
              </Link>
            </div>

            {/* Areas covered badges */}
            <div className="flex flex-wrap gap-2">
              {cluster.areas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-800 border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">{cluster.keyStats.population}</div>
              <div className="text-slate-400 text-sm">Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">{cluster.keyStats.households}</div>
              <div className="text-slate-400 text-sm">Households</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">{cluster.keyStats.avgPrice}</div>
              <div className="text-slate-400 text-sm">Avg Property Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">30-60 min</div>
              <div className="text-slate-400 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Property Types We Service in {cluster.postcode}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cluster.propertyTypes.map((type, idx) => (
              <div
                key={type}
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{type}</h3>
                <p className="text-slate-400 text-sm">
                  Specialist services for {type.toLowerCase()} in {cluster.postcode}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Most Requested Services in {cluster.postcode}
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Based on the property types and needs of {cluster.postcode} residents, these are our most popular services in the area.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServiceData.map((service) => service && (
              <Link
                key={service.slug}
                href={`/local/${cluster.areas[0].toLowerCase().replace(/\s+/g, '-')}/${service.slug}`}
                className="group p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  Professional {service.name.toLowerCase()} services across {cluster.postcode}
                </p>
                <span className="inline-flex items-center text-amber-400 text-sm font-medium">
                  View Service
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Within Postcode */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Areas We Serve in {cluster.postcode}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cluster.areas.map((area) => (
              <Link
                key={area}
                href={`/local/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-amber-400 transition-colors">
                    {area}
                  </h3>
                  <p className="text-slate-400 text-sm">View local services</p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions - {cluster.postcode}
          </h2>
          <div className="max-w-3xl">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Testimonials - Custom inline section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What {cluster.postcode} Residents Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', area: cluster.areas[0], text: `Fantastic service from Hampstead Renovations. They handled our bathroom renovation with real expertise and attention to detail.`, rating: 5 },
              { name: 'James P.', area: cluster.areas[1] || cluster.areas[0], text: `Called them for an emergency boiler repair and they arrived within the hour. Highly recommended for anyone in ${cluster.postcode}.`, rating: 5 },
              { name: 'Emma L.', area: cluster.areas[0], text: `We\'ve used them for multiple projects now. Always professional, always on time, and the quality of work is outstanding.`, rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-5 h-5 ${star <= testimonial.rating ? 'text-amber-400' : 'text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="text-sm">
                  <span className="text-white font-medium">{testimonial.name}</span>
                  <span className="text-slate-500"> • {testimonial.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Custom inline */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Need a Tradesperson in {cluster.postcode}?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            We&apos;re the trusted choice for {cluster.areas.join(', ')} residents
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07459345456"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07459 345456
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Postcodes */}
      <section className="py-16 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">
            Nearby Postcode Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {postcodeClusters
              .filter(p => p.slug !== cluster.slug)
              .slice(0, 8)
              .map((pc) => (
                <Link
                  key={pc.slug}
                  href={`/postcodes/${pc.slug}`}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:border-amber-500/50 hover:text-amber-400 transition-all"
                >
                  {pc.postcode}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
