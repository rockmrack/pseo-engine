// ============================================================================
// PSEO ENGINE - REVIEWS SECTION COMPONENT
// Displays aggregated reviews with schema markup
// ============================================================================

'use client';

import { useState } from 'react';
import {
  reviewSources,
  aggregatedReviews,
  getAggregatedRating,
  getReviewsByService,
  type Review,
  type ReviewSource,
} from '@/lib/data/reviews';

interface ReviewsSectionProps {
  serviceSlug?: string;
  locationSlug?: string;
  showSources?: boolean;
  maxReviews?: number;
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewSourceBadge({ source }: { source: ReviewSource }) {
  const platformColors: Record<string, string> = {
    google: 'bg-red-100 text-red-800',
    checkatrade: 'bg-green-100 text-green-800',
    houzz: 'bg-teal-100 text-teal-800',
    trustpilot: 'bg-emerald-100 text-emerald-800',
  };
  
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${platformColors[source.platform] || 'bg-gray-100 text-gray-800'}`}
    >
      <div className="text-left">
        <div className="font-medium text-sm">{source.name}</div>
        <div className="flex items-center gap-1">
          <StarRating rating={Math.round(source.rating)} size="sm" />
          <span className="text-xs">{source.rating}/5 ({source.reviewCount} reviews)</span>
        </div>
      </div>
    </a>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">{review.author}</span>
            {review.verified && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
              })}
            </span>
          </div>
        </div>
        <span className="text-xs text-gray-400 capitalize">{review.source}</span>
      </div>
      
      <p className="text-gray-700 leading-relaxed">{review.text}</p>
      
      {review.service && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            Service: <span className="font-medium">{review.service.replace(/-/g, ' ')}</span>
          </span>
          {review.location && (
            <span className="text-xs text-gray-500 ml-4">
              Location: <span className="font-medium">{review.location}</span>
            </span>
          )}
        </div>
      )}
      
      {review.response && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <span className="text-sm font-medium text-gray-900">Our Response:</span>
          <p className="text-sm text-gray-600 mt-1">{review.response.text}</p>
        </div>
      )}
    </div>
  );
}

export function ReviewsSection({ 
  serviceSlug,
  locationSlug,
  showSources = true,
  maxReviews = 6,
}: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  
  // Get relevant reviews
  let reviews = serviceSlug 
    ? getReviewsByService(serviceSlug)
    : aggregatedReviews;
    
  if (locationSlug) {
    reviews = reviews.filter(r => 
      r.location?.toLowerCase().includes(locationSlug.toLowerCase())
    );
  }
  
  // If no specific reviews, show all
  if (reviews.length === 0) {
    reviews = aggregatedReviews;
  }
  
  const { rating: averageRating, totalReviews } = getAggregatedRating();
  const displayedReviews = showAll ? reviews : reviews.slice(0, maxReviews);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-gray-900">{averageRating}</span>
              <div>
                <StarRating rating={Math.round(averageRating)} size="lg" />
                <span className="text-sm text-gray-500">{totalReviews} verified reviews</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Review Sources */}
        {showSources && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {reviewSources.map((source) => (
              <ReviewSourceBadge key={source.platform} source={source} />
            ))}
          </div>
        )}
        
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        {/* Show More Button */}
        {reviews.length > maxReviews && !showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Show More Reviews ({reviews.length - maxReviews} more)
            </button>
          </div>
        )}
        
        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-4">Verified member of:</p>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
            <span className="font-semibold text-gray-700">Checkatrade</span>
            <span className="font-semibold text-gray-700">Houzz</span>
            <span className="font-semibold text-gray-700">Google Business</span>
            <span className="font-semibold text-gray-700">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
