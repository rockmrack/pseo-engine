// Server Component - No 'use client' for zero JS bundle impact
// CSS animations replace framer-motion (~140KB saved)

import { Star, Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'text-gold-400 fill-gold-400'
              : 'text-cream-300'
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection({
  testimonials,
  title = 'What Our Customers Say',
  subtitle = 'Real reviews from satisfied customers in your area.',
}: TestimonialsSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-lg">
        {/* CSS animation instead of framer-motion */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="heading-3 text-navy-900 mb-4">{title}</h2>
          <p className="body-large text-navy-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 relative animate-fade-in-up hover-lift"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-cream-200">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Text */}
              <blockquote className="text-navy-700 mb-6 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-cream-100">
                <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-navy-900 flex items-center gap-2">
                    {testimonial.name}
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div className="text-sm text-navy-500">
                    {testimonial.location} • {testimonial.date}
                  </div>
                </div>
              </div>

              {/* Service Tag */}
              <div className="mt-4">
                <span className="badge badge-gold text-xs">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link - CSS animation */}
        <div className="text-center mt-10 animate-fade-in-up animation-delay-400">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-cream-100 rounded-xl">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
              <span className="font-bold text-navy-900">4.9</span>
            </div>
            <span className="text-navy-600">Average rating from 200+ Google reviews</span>
            <a href="#" className="text-gold-600 font-medium hover:text-gold-700">
              View all →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
