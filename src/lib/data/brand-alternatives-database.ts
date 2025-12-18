// ============================================================================
// BRAND ALTERNATIVES DATABASE
// "[Brand] Alternative Near Me" - Competitor brand comparison pages
// ============================================================================

export interface BrandAlternative {
  slug: string;
  brandName: string;
  category: 'boiler' | 'bathroom' | 'kitchen' | 'electrical' | 'general';
  tagline: string;
  description: string;
  brandStrengths: string[];
  ourAdvantages: string[];
  priceComparison: {
    brandRange: string;
    ourRange: string;
    savingPotential: string;
  };
  commonSearches: string[];
  targetKeywords: string[];
  faqs: { question: string; answer: string }[];
}

export interface CategoryAlternatives {
  slug: string;
  name: string;
  description: string;
  brands: string[];
}

export const brandAlternatives: BrandAlternative[] = [
  // Boiler Brands
  {
    slug: 'british-gas-alternative',
    brandName: 'British Gas',
    category: 'boiler',
    tagline: 'Local expertise without the big company prices',
    description: 'Looking for a British Gas alternative? Hampstead Renovations offers the same quality boiler installation and servicing at competitive local rates.',
    brandStrengths: [
      'National brand recognition',
      'Large engineer network',
      'Established warranty programs',
      'HomeCare packages',
    ],
    ourAdvantages: [
      'Typically 20-30% lower prices',
      'Same-day local appointments',
      'Named engineer every visit',
      'No lengthy call center waits',
      'Flexible scheduling',
      'Local accountability',
      'Personalized service',
    ],
    priceComparison: {
      brandRange: '£2,800 - £4,500',
      ourRange: '£1,800 - £3,200',
      savingPotential: 'Up to £1,300',
    },
    commonSearches: [
      'british gas boiler installation',
      'british gas homecare alternative',
      'british gas engineer',
      'british gas service cost',
    ],
    targetKeywords: [
      'british gas alternative',
      'british gas alternative near me',
      'cheaper than british gas',
      'local british gas alternative',
    ],
    faqs: [
      {
        question: 'Are you as qualified as British Gas engineers?',
        answer: 'Yes! All our engineers are Gas Safe registered with the same qualifications. Many previously worked for national companies.',
      },
      {
        question: 'Do you offer similar cover plans to HomeCare?',
        answer: 'Yes, our maintenance packages offer similar coverage at 20-40% less than British Gas HomeCare rates.',
      },
      {
        question: 'Can you service my British Gas installed boiler?',
        answer: 'Absolutely. We service all major boiler brands regardless of who installed them.',
      },
    ],
  },
  {
    slug: 'pimlico-plumbers-alternative',
    brandName: 'Pimlico Plumbers',
    category: 'general',
    tagline: 'Premium quality without premium prices',
    description: 'Seeking a Pimlico Plumbers alternative? Get the same professional service with better value from your local North London specialists.',
    brandStrengths: [
      'Strong London brand',
      '24/7 availability',
      'Wide service range',
      'Professional presentation',
    ],
    ourAdvantages: [
      'Significantly lower labour rates',
      'No premium brand markup',
      'Same professional standards',
      'Local North London focus',
      'Faster response in our area',
      'Building long-term relationships',
    ],
    priceComparison: {
      brandRange: '£150 - £250/hour',
      ourRange: '£75 - £120/hour',
      savingPotential: 'Up to 50%',
    },
    commonSearches: [
      'pimlico plumbers prices',
      'pimlico plumbers expensive',
      'pimlico plumbers review',
    ],
    targetKeywords: [
      'pimlico plumbers alternative',
      'cheaper than pimlico plumbers',
      'local plumber hampstead',
    ],
    faqs: [
      {
        question: 'Why are your prices lower than Pimlico?',
        answer: 'As a local business without expensive branding and marketing costs, we pass the savings directly to customers.',
      },
      {
        question: 'Do you match their service quality?',
        answer: 'Our engineers have the same qualifications and we maintain the same professional standards - just at better rates.',
      },
    ],
  },
  {
    slug: 'homeserve-alternative',
    brandName: 'HomeServe',
    category: 'general',
    tagline: 'Direct access to local engineers',
    description: 'Looking for a HomeServe alternative? Skip the call center and speak directly to qualified local engineers.',
    brandStrengths: [
      'National insurance-backed cover',
      'Multi-trade coverage',
      'Monthly payment plans',
      'Established claims process',
    ],
    ourAdvantages: [
      'No annual contract required',
      'Pay as you go option',
      'Direct engineer contact',
      'No subcontractors',
      'Local knowledge',
      'Faster response times',
    ],
    priceComparison: {
      brandRange: '£20-50/month subscription',
      ourRange: 'Pay as needed or £15-55/month',
      savingPotential: 'Up to 30% on plans',
    },
    commonSearches: [
      'homeserve boiler cover',
      'homeserve reviews',
      'homeserve complaints',
    ],
    targetKeywords: [
      'homeserve alternative',
      'better than homeserve',
      'local boiler cover',
    ],
    faqs: [
      {
        question: 'Do I need to sign up for a plan?',
        answer: 'No - you can use our services on a pay-as-you-go basis, or choose one of our flexible monthly plans.',
      },
      {
        question: 'What if I already have HomeServe cover?',
        answer: 'You can still call us for services not covered, or switch when your HomeServe contract ends.',
      },
    ],
  },
  {
    slug: 'checkatrade-alternative',
    brandName: 'Checkatrade',
    category: 'general',
    tagline: 'Direct booking without the platform fees',
    description: 'Rather than searching through Checkatrade listings, book directly with a trusted local company with verifiable reviews.',
    brandStrengths: [
      'Large tradesperson network',
      'Verified reviews system',
      'Background checks',
      'Easy comparison',
    ],
    ourAdvantages: [
      'No platform commission = lower prices',
      'Build ongoing relationship',
      'Consistent quality',
      'Direct communication',
      'Local reputation at stake',
      'Comprehensive service range',
    ],
    priceComparison: {
      brandRange: 'Varies (platform adds 10-15%)',
      ourRange: 'Direct rates',
      savingPotential: '10-15% on every job',
    },
    commonSearches: [
      'checkatrade plumber',
      'checkatrade reviews real',
      'checkatrade expensive',
    ],
    targetKeywords: [
      'checkatrade alternative',
      'trusted local tradesman',
      'find tradesman directly',
    ],
    faqs: [
      {
        question: 'How can I verify your credentials?',
        answer: 'All our certifications, Gas Safe registration, and insurance are viewable on our website. Happy to show documentation on arrival.',
      },
      {
        question: 'Do you have reviews I can check?',
        answer: 'Yes! We have Google reviews, Trustpilot ratings, and can provide references from local customers.',
      },
    ],
  },
  {
    slug: 'worcester-bosch-installer-alternative',
    brandName: 'Worcester Bosch Accredited',
    category: 'boiler',
    tagline: 'Multi-brand expertise for best value',
    description: 'While Worcester Bosch is excellent, being brand-agnostic means we recommend the best boiler for YOUR home, not a sales quota.',
    brandStrengths: [
      'Brand-specific expertise',
      'Extended warranties up to 12 years',
      'Manufacturer support',
      'Quality reputation',
    ],
    ourAdvantages: [
      'Compare ALL major brands',
      'Unbiased recommendations',
      'Best boiler for your property',
      'Often better value alternatives',
      'Still offer Worcester Bosch',
      'Match extended warranty terms',
    ],
    priceComparison: {
      brandRange: '£2,500 - £4,000 (Worcester only)',
      ourRange: '£1,500 - £3,500 (multi-brand)',
      savingPotential: 'Up to £1,000',
    },
    commonSearches: [
      'worcester bosch installer',
      'worcester bosch price',
      'worcester bosch warranty',
    ],
    targetKeywords: [
      'worcester bosch alternative',
      'best boiler brand uk',
      'compare boiler brands',
    ],
    faqs: [
      {
        question: 'Do you install Worcester Bosch boilers?',
        answer: 'Yes, we install all major brands including Worcester Bosch. We just don\'t limit ourselves to one manufacturer.',
      },
      {
        question: 'Can you match the 10-year warranty?',
        answer: 'Most manufacturers offer 5-10 year warranties. We ensure you get the maximum warranty available for your chosen boiler.',
      },
    ],
  },
  {
    slug: 'dyno-rod-alternative',
    brandName: 'Dyno-Rod',
    category: 'general',
    tagline: 'Local drainage experts at better rates',
    description: 'Need a Dyno-Rod alternative? Our drainage specialists offer the same equipment and expertise without franchise markups.',
    brandStrengths: [
      'Specialist drainage focus',
      'High-tech equipment',
      'National coverage',
      '24/7 availability',
    ],
    ourAdvantages: [
      'No franchise fees in pricing',
      'Local response times',
      'Multi-trade capabilities',
      'Preventive maintenance',
      'Fixed prices available',
      'Emergency rates lower',
    ],
    priceComparison: {
      brandRange: '£150 - £400 callout',
      ourRange: '£80 - £250 callout',
      savingPotential: 'Up to £150',
    },
    commonSearches: [
      'dyno-rod prices',
      'dyno-rod expensive',
      'blocked drain near me',
    ],
    targetKeywords: [
      'dyno-rod alternative',
      'cheaper drain unblocking',
      'local drainage company',
    ],
    faqs: [
      {
        question: 'Do you have CCTV drain cameras?',
        answer: 'Yes, we have full CCTV survey equipment, high-pressure jetting, and all professional drainage tools.',
      },
      {
        question: 'Can you handle major blockages?',
        answer: 'We handle everything from simple sink blockages to main sewer line issues. Same capability, better prices.',
      },
    ],
  },
  {
    slug: 'baxi-installer-alternative',
    brandName: 'Baxi Approved',
    category: 'boiler',
    tagline: 'Expert installation for all boiler brands',
    description: 'While Baxi make great boilers, we help you compare options to find the perfect match for your home and budget.',
    brandStrengths: [
      'British brand heritage',
      'Good mid-range options',
      'Strong warranty terms',
      'Reliable performance',
    ],
    ourAdvantages: [
      'Compare Baxi vs competitors',
      'Honest brand assessments',
      'Budget-friendly options',
      'Premium alternatives too',
      'Same installation quality',
      'Broader expertise',
    ],
    priceComparison: {
      brandRange: '£1,800 - £3,200',
      ourRange: '£1,500 - £3,000 (all brands)',
      savingPotential: 'Up to £500',
    },
    commonSearches: [
      'baxi boiler price',
      'baxi vs worcester',
      'baxi installer near me',
    ],
    targetKeywords: [
      'baxi alternative',
      'baxi installer alternative',
      'compare baxi boilers',
    ],
    faqs: [
      {
        question: 'Is Baxi a good boiler brand?',
        answer: 'Baxi is a solid British brand. We\'ll advise if it\'s the best choice for your specific requirements.',
      },
    ],
  },
  {
    slug: 'ideal-installer-alternative',
    brandName: 'Ideal Boilers Installer',
    category: 'boiler',
    tagline: 'All brands, one expert installer',
    description: 'Ideal Boilers offer great value. We\'ll help you compare them against other brands to ensure you\'re getting the best deal.',
    brandStrengths: [
      'Budget-friendly range',
      'UK designed',
      'Good reliability',
      'Quick installation',
    ],
    ourAdvantages: [
      'Multi-brand comparison',
      'Match Ideal prices',
      'Show alternatives',
      'Expert guidance',
      'Best value focus',
    ],
    priceComparison: {
      brandRange: '£1,500 - £2,800',
      ourRange: '£1,400 - £2,600',
      savingPotential: 'Up to £300',
    },
    commonSearches: [
      'ideal boiler review',
      'ideal boiler installer',
      'ideal logic price',
    ],
    targetKeywords: [
      'ideal boiler alternative',
      'ideal installer near me',
      'budget boiler options',
    ],
    faqs: [
      {
        question: 'Are Ideal boilers good quality?',
        answer: 'Ideal offers excellent value in the mid-range. We\'ll show you how they compare to alternatives.',
      },
    ],
  },
];

export const categoryAlternatives: CategoryAlternatives[] = [
  {
    slug: 'boiler-brands',
    name: 'Boiler Brand Alternatives',
    description: 'Compare major boiler brands and find the best option for your home',
    brands: ['british-gas-alternative', 'worcester-bosch-installer-alternative', 'baxi-installer-alternative', 'ideal-installer-alternative'],
  },
  {
    slug: 'service-companies',
    name: 'Service Company Alternatives',
    description: 'Local alternatives to national service providers',
    brands: ['pimlico-plumbers-alternative', 'homeserve-alternative', 'dyno-rod-alternative'],
  },
  {
    slug: 'platforms',
    name: 'Platform Alternatives',
    description: 'Book direct instead of through comparison platforms',
    brands: ['checkatrade-alternative'],
  },
];

// Areas for brand alternative pages
export const brandAreas = [
  { slug: 'hampstead', name: 'Hampstead' },
  { slug: 'belsize-park', name: 'Belsize Park' },
  { slug: 'highgate', name: 'Highgate' },
  { slug: 'crouch-end', name: 'Crouch End' },
  { slug: 'muswell-hill', name: 'Muswell Hill' },
  { slug: 'kentish-town', name: 'Kentish Town' },
  { slug: 'swiss-cottage', name: 'Swiss Cottage' },
  { slug: 'camden', name: 'Camden' },
  { slug: 'islington', name: 'Islington' },
  { slug: 'north-london', name: 'North London' },
  { slug: 'finchley', name: 'Finchley' },
  { slug: 'barnet', name: 'Barnet' },
];

// Alias for page compatibility (comparison pages)
export const brandComparisons = brandAlternatives;

// Helper functions
export function getBrandAlternative(slug: string): BrandAlternative | undefined {
  return brandAlternatives.find(b => b.slug === slug);
}

export function getBrandsByCategory(category: BrandAlternative['category']): BrandAlternative[] {
  return brandAlternatives.filter(b => b.category === category);
}

export function getCategoryAlternative(slug: string): CategoryAlternatives | undefined {
  return categoryAlternatives.find(c => c.slug === slug);
}

export function generateBrandParams(): { brand: string; area: string }[] {
  const params: { brand: string; area: string }[] = [];
  
  for (const brand of brandAlternatives) {
    for (const area of brandAreas) {
      params.push({
        brand: brand.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function countBrandPages(): number {
  // Brand pages + area combinations
  return brandAlternatives.length + generateBrandParams().length;
}
