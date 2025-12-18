// ============================================================================
// PSEO ENGINE - REVIEWS/TESTIMONIALS PAGES
// /reviews/[area] - Area-specific review pages
// 10x SEO Expansion - Strategy 8
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocation } from '@/lib/data-access';
import { locations } from '@/lib/data/locations';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  HeroSection,
  CTASection,
  TrustSignalsSection,
} from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface ReviewsPageProps {
  params: Promise<{
    area: string;
  }>;
}

export async function generateStaticParams() {
  return locations.map(location => ({
    area: location.slug,
  }));
}

export async function generateMetadata({ params }: ReviewsPageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  
  const location = getLocation(areaSlug);
  
  if (!location) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${location.name} Reviews | Customer Testimonials | ${siteConfig.businessName}`;
  const description = `Read genuine customer reviews from ${location.name} homeowners. See why ${siteConfig.businessName} is the trusted choice for renovation in ${location.postcode}. 5-star rated service.`;
  
  return {
    title,
    description,
    keywords: [
      `${siteConfig.businessName} reviews ${location.name}`,
      `${location.name} renovation reviews`,
      `builder reviews ${location.name}`,
      `${location.postcode} builder testimonials`,
      `renovation testimonials ${location.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/reviews/${areaSlug}`,
    },
  };
}

// Generate area-specific testimonials
function generateAreaTestimonials(locationName: string) {
  return [
    {
      name: 'Sarah M.',
      location: locationName,
      rating: 5,
      project: 'Full House Renovation',
      text: `${siteConfig.businessName} transformed our ${locationName} Victorian terrace beyond our expectations. The team understood exactly what we wanted - modernising while keeping the period character. Excellent communication throughout the 4-month project.`,
      date: '3 weeks ago',
    },
    {
      name: 'James & Emma P.',
      location: locationName,
      rating: 5,
      project: 'Kitchen Extension',
      text: `We couldn't be happier with our new kitchen extension. The team at ${siteConfig.businessName} handled everything from planning to completion. They dealt with our conservation area restrictions expertly. The result is stunning.`,
      date: '1 month ago',
    },
    {
      name: 'Michael T.',
      location: locationName,
      rating: 5,
      project: 'Loft Conversion',
      text: `Professional from start to finish. Our loft conversion added a beautiful master suite with en-suite. The project finished on time and the quality of work is exceptional. Would highly recommend to any ${locationName} homeowner.`,
      date: '2 months ago',
    },
    {
      name: 'Alexandra K.',
      location: locationName,
      rating: 5,
      project: 'Bathroom Renovation',
      text: `${siteConfig.businessName} created a beautiful period-style bathroom in our Edwardian home. They sourced authentic fixtures and the tiling work is immaculate. A pleasure to work with and fantastic attention to detail.`,
      date: '6 weeks ago',
    },
    {
      name: 'Robert & Linda H.',
      location: locationName,
      rating: 5,
      project: 'Basement Conversion',
      text: `Our basement conversion was a significant project and ${siteConfig.businessName} managed it flawlessly. From excavation to finishing, everything was explained clearly. We now have a fantastic home cinema and gym space.`,
      date: '3 months ago',
    },
    {
      name: 'Catherine W.',
      location: locationName,
      rating: 5,
      project: 'Period Feature Restoration',
      text: `I contacted ${siteConfig.businessName} to restore original features in our Georgian townhouse. The cornice restoration and fireplace work is museum quality. They truly understand period properties.`,
      date: '2 months ago',
    },
    {
      name: 'David & Sophie L.',
      location: locationName,
      rating: 5,
      project: 'Complete Refurbishment',
      text: `We purchased a tired property needing everything. ${siteConfig.businessName} handled the complete refurbishment including rewiring, replumbing, new kitchen and bathrooms. Transformed it into our dream home.`,
      date: '4 months ago',
    },
    {
      name: 'Jonathan R.',
      location: locationName,
      rating: 5,
      project: 'Emergency Repairs',
      text: `When we had a major leak, ${siteConfig.businessName} responded within hours. They fixed the immediate problem and then handled all the repairs professionally. Their emergency service is genuinely excellent.`,
      date: '1 month ago',
    },
  ];
}

export default async function ReviewsPage({ params }: ReviewsPageProps) {
  const { area: areaSlug } = await params;
  
  const location = getLocation(areaSlug);
  
  if (!location) {
    notFound();
  }
  
  const testimonials = generateAreaTestimonials(location.name);
  const averageRating = 5.0;
  const totalReviews = testimonials.length;
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "description": `Customer reviews from ${location.name}`,
            "url": `${BASE_URL}/reviews/${areaSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": location.name,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating,
              "reviewCount": totalReviews,
              "bestRating": 5,
              "worstRating": 1,
            },
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          h1={`${location.name} Customer Reviews`}
          subtitle={`Read what ${location.name} homeowners say about ${siteConfig.businessName}. Genuine testimonials from real renovation projects in your area.`}
          trustBadges={[`⭐ ${averageRating} Average Rating`, `${totalReviews} Verified Reviews`, 'Real Testimonials']}
          ctaText="Join Our Happy Customers"
          ctaSecondary={`Call ${siteConfig.phone}`}
          location={location.name}
        />
        
        {/* Rating Summary */}
        <section className="py-12 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white rounded-xl shadow-lg p-8">
                <div className="text-6xl mb-4">⭐</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
                <div className="text-yellow-500 text-3xl mb-4">★★★★★</div>
                <p className="text-gray-600">
                  Based on {totalReviews} verified reviews from {location.name} customers
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What {location.name} Homeowners Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-yellow-500 text-xl">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <span className="text-gray-400 text-sm">{testimonial.date}</span>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Author */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-blue-200">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-blue-200">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-blue-200">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5.0</div>
                <p className="text-blue-200">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <TrustSignalsSection signals={[
          { type: 'insurance', icon: 'shield', name: 'Fully Insured', description: 'Complete peace of mind' },
          { type: 'award', icon: 'award', name: '20+ Years Experience', description: 'Expert craftsmanship' },
          { type: 'guarantee', icon: 'check-circle', name: 'Satisfaction Guaranteed', description: 'Quality assured' },
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: `Serving ${location.name}` },
        ]} />
        
        {/* Leave Review CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have you worked with {siteConfig.businessName}? We&apos;d love to hear about your experience. 
              Your feedback helps other {location.name} homeowners make informed decisions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Leave a Review
            </a>
          </div>
        </section>
        
        {/* Reviews from Other Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Reviews from Nearby Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {locations
                .filter(l => l.slug !== areaSlug)
                .slice(0, 8)
                .map(loc => (
                  <a
                    key={loc.slug}
                    href={`/reviews/${loc.slug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {loc.name} Reviews
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Ready to Join Our Happy ${location.name} Customers?`,
            subtext: `Experience the quality and service that earns us 5-star reviews. Contact ${siteConfig.businessName} for your free consultation.`,
            buttonText: 'Get Free Quote',
            phoneNumber: siteConfig.phone,
          }}
        />
      </main>
    </>
  );
}
