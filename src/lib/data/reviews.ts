// ============================================================================
// PSEO ENGINE - REVIEW AGGREGATOR
// Aggregates reviews from multiple sources with JSON-LD markup
// Idea 71: Review Schema Aggregator
// ============================================================================

export interface ReviewSource {
  platform: 'google' | 'houzz' | 'checkatrade' | 'trustpilot' | 'yell';
  name: string;
  url: string;
  rating: number;
  reviewCount: number;
  lastUpdated: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
  location?: string;
  source: ReviewSource['platform'];
  verified: boolean;
  response?: {
    date: string;
    text: string;
  };
}

// ============================================================================
// AGGREGATED REVIEW SOURCES
// ============================================================================

export const reviewSources: ReviewSource[] = [
  {
    platform: 'google',
    name: 'Google Business Profile',
    url: 'https://www.google.com/maps/place/Hampstead+Renovations',
    rating: 4.9,
    reviewCount: 87,
    lastUpdated: '2024-12-15',
  },
  {
    platform: 'checkatrade',
    name: 'Checkatrade',
    url: 'https://www.checkatrade.com/trades/hampsteadrenovations',
    rating: 9.8,
    reviewCount: 42,
    lastUpdated: '2024-12-15',
  },
  {
    platform: 'houzz',
    name: 'Houzz',
    url: 'https://www.houzz.co.uk/professionals/hampstead-renovations',
    rating: 5.0,
    reviewCount: 31,
    lastUpdated: '2024-12-15',
  },
  {
    platform: 'trustpilot',
    name: 'Trustpilot',
    url: 'https://uk.trustpilot.com/review/hampsteadrenovations.co.uk',
    rating: 4.8,
    reviewCount: 23,
    lastUpdated: '2024-12-15',
  },
];

// ============================================================================
// SAMPLE REVIEWS (In production, this would come from API aggregation)
// ============================================================================

export const aggregatedReviews: Review[] = [
  // Google Reviews
  {
    id: 'g-001',
    author: 'Sarah M.',
    rating: 5,
    date: '2024-11-28',
    text: 'Absolutely transformed our Victorian terrace in Hampstead. The attention to period detail was exceptional. They restored our original cornices and installed a stunning new kitchen. Highly recommend for anyone with a period property.',
    service: 'Kitchen Installation',
    location: 'Hampstead, NW3',
    source: 'google',
    verified: true,
    response: {
      date: '2024-11-29',
      text: 'Thank you Sarah! It was a pleasure working on your beautiful home. We\'re so glad you\'re happy with the kitchen and restored features.',
    },
  },
  {
    id: 'g-002',
    author: 'James R.',
    rating: 5,
    date: '2024-11-15',
    text: 'Had our entire house rewired by Hampstead Renovations. Clean, professional work with minimal disruption. They were careful around our period features and the plastering afterwards was perfect.',
    service: 'Electrical Rewiring',
    location: 'Belsize Park, NW3',
    source: 'google',
    verified: true,
  },
  {
    id: 'g-003',
    author: 'Emily T.',
    rating: 5,
    date: '2024-10-22',
    text: 'Emergency boiler repair on a Sunday - arrived within an hour and fixed the issue quickly. Fair pricing and no callout fee gouging. Will definitely use again.',
    service: 'Boiler Repair',
    location: 'Highgate, N6',
    source: 'google',
    verified: true,
  },
  
  // Checkatrade Reviews
  {
    id: 'ct-001',
    author: 'David L.',
    rating: 5,
    date: '2024-11-20',
    text: 'Completed a side return extension for us. The whole process from planning to completion was seamless. Quality of workmanship is outstanding - you can tell these are craftsmen who take pride in their work.',
    service: 'Side Return Extension',
    location: 'Hampstead, NW3',
    source: 'checkatrade',
    verified: true,
  },
  {
    id: 'ct-002',
    author: 'Patricia W.',
    rating: 5,
    date: '2024-11-05',
    text: 'Had two bathrooms completely renovated. Beautiful tiles, underfloor heating, and the plumber was meticulous. Site was always left clean at the end of each day.',
    service: 'Bathroom Installation',
    location: 'St John\'s Wood, NW8',
    source: 'checkatrade',
    verified: true,
  },
  
  // Houzz Reviews
  {
    id: 'h-001',
    author: 'Michael & Susan P.',
    rating: 5,
    date: '2024-10-30',
    text: 'We hired Hampstead Renovations for a complete ground floor reconfiguration of our Edwardian house. They removed walls, installed steel beams, and created a wonderful open-plan living space while preserving all the original features we loved.',
    service: 'Structural Work',
    location: 'Hampstead Garden Suburb, NW11',
    source: 'houzz',
    verified: true,
  },
  {
    id: 'h-002',
    author: 'Anna K.',
    rating: 5,
    date: '2024-09-18',
    text: 'Excellent loft conversion with full mansard. The design maximised every inch of space and the finish is impeccable. Conservation area planning was handled smoothly too.',
    service: 'Loft Conversion',
    location: 'Hampstead, NW3',
    source: 'houzz',
    verified: true,
  },
  
  // Trustpilot Reviews
  {
    id: 'tp-001',
    author: 'Robert G.',
    rating: 5,
    date: '2024-11-12',
    text: 'Third time using Hampstead Renovations and they never disappoint. Latest project was a garden room office - delivered on time, on budget, and beautifully finished.',
    service: 'Garden Room',
    location: 'Kenwood, N6',
    source: 'trustpilot',
    verified: true,
  },
  {
    id: 'tp-002',
    author: 'Helen M.',
    rating: 4,
    date: '2024-10-08',
    text: 'Good quality work on our kitchen renovation. Small delay due to supply chain issues but they kept us informed throughout. Final result was worth the wait.',
    service: 'Kitchen Installation',
    location: 'Gospel Oak, NW5',
    source: 'trustpilot',
    verified: true,
    response: {
      date: '2024-10-09',
      text: 'Thank you Helen. We apologise for the delay - the worktop supplier had stock issues. We\'re glad you\'re happy with the finished kitchen!',
    },
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getAggregatedRating(): { rating: number; totalReviews: number } {
  const totalReviews = reviewSources.reduce((sum, source) => sum + source.reviewCount, 0);
  const weightedSum = reviewSources.reduce((sum, source) => {
    // Normalize Checkatrade's 10-point scale
    const normalizedRating = source.platform === 'checkatrade' 
      ? source.rating / 2 
      : source.rating;
    return sum + (normalizedRating * source.reviewCount);
  }, 0);
  
  return {
    rating: Math.round((weightedSum / totalReviews) * 10) / 10,
    totalReviews,
  };
}

export function getReviewsByService(service: string): Review[] {
  return aggregatedReviews.filter(r => 
    r.service?.toLowerCase().includes(service.toLowerCase())
  );
}

export function getReviewsByLocation(location: string): Review[] {
  return aggregatedReviews.filter(r => 
    r.location?.toLowerCase().includes(location.toLowerCase())
  );
}

export function getRecentReviews(count: number = 5): Review[] {
  return [...aggregatedReviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// ============================================================================
// JSON-LD SCHEMA GENERATORS
// ============================================================================

export function generateAggregateRatingSchema(businessName: string, url: string) {
  const { rating, totalReviews } = getAggregatedRating();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    url: url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
      reviewCount: totalReviews,
    },
  };
}

export function generateReviewSchema(reviews: Review[], businessName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  };
}
