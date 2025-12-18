// ============================================================================
// PSEO ENGINE - PRICE GUIDE DATABASE
// Data for /prices/[service]/[area] pages
// 10x SEO Expansion - Strategy 4
// ============================================================================

export interface PriceService {
  slug: string;
  name: string;
  description: string;
  priceRanges: PriceRange[];
  factorsAffectingPrice: string[];
  whatIsIncluded: string[];
  timeline: string;
  warranty: string;
}

export interface PriceRange {
  tier: string;
  description: string;
  priceFrom: number;
  priceTo: number;
  features: string[];
}

export const priceServices: PriceService[] = [
  {
    slug: 'full-house-renovation',
    name: 'Full House Renovation',
    description: 'Complete property renovation including structural work, electrical, plumbing, and finishes.',
    priceRanges: [
      {
        tier: 'Standard',
        description: 'Quality renovation with standard materials',
        priceFrom: 80000,
        priceTo: 120000,
        features: ['New kitchen and bathrooms', 'Full rewire', 'Central heating upgrade', 'Decoration throughout', 'New flooring'],
      },
      {
        tier: 'Premium',
        description: 'High-end renovation with premium finishes',
        priceFrom: 120000,
        priceTo: 200000,
        features: ['Bespoke kitchen', 'Designer bathrooms', 'Smart home integration', 'Underfloor heating', 'Premium fixtures'],
      },
      {
        tier: 'Luxury',
        description: 'Ultimate renovation with luxury materials',
        priceFrom: 200000,
        priceTo: 400000,
        features: ['Custom cabinetry', 'Luxury stone finishes', 'Home automation', 'Bespoke joinery', 'Architectural features'],
      },
    ],
    factorsAffectingPrice: ['Property size', 'Current condition', 'Structural work required', 'Material choices', 'Listed building status'],
    whatIsIncluded: ['Full project management', 'Architectural drawings', 'Building regulations approval', 'All labor and materials', 'Waste removal', 'Final clean'],
    timeline: '12-24 weeks',
    warranty: '10 years on structural, 2 years on finishes',
  },
  {
    slug: 'kitchen-renovation',
    name: 'Kitchen Renovation',
    description: 'Complete kitchen transformation from design to installation.',
    priceRanges: [
      {
        tier: 'Standard',
        description: 'Quality kitchen with reliable brands',
        priceFrom: 15000,
        priceTo: 25000,
        features: ['Quality cabinets', 'Laminate worktops', 'Standard appliances', 'New tiling', 'Lighting upgrade'],
      },
      {
        tier: 'Premium',
        description: 'Designer kitchen with premium appliances',
        priceFrom: 25000,
        priceTo: 45000,
        features: ['Handleless units', 'Quartz worktops', 'Integrated appliances', 'Underfloor heating', 'Bespoke storage'],
      },
      {
        tier: 'Luxury',
        description: 'Bespoke kitchen with top-tier finishes',
        priceFrom: 45000,
        priceTo: 85000,
        features: ['Handmade cabinetry', 'Natural stone', 'Professional appliances', 'Wine storage', 'Butler\'s pantry'],
      },
    ],
    factorsAffectingPrice: ['Kitchen size', 'Layout changes', 'Appliance selection', 'Worktop material', 'Structural alterations'],
    whatIsIncluded: ['Design consultation', 'Supply and fit', 'Electrical work', 'Plumbing', 'Tiling', 'Decoration'],
    timeline: '3-6 weeks',
    warranty: '5 years on installation, manufacturer warranty on units',
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    description: 'Complete bathroom design and installation services.',
    priceRanges: [
      {
        tier: 'Standard',
        description: 'Quality bathroom suite with modern fittings',
        priceFrom: 8000,
        priceTo: 12000,
        features: ['Quality sanitaryware', 'Ceramic tiling', 'Chrome fixtures', 'New lighting', 'Extractor fan'],
      },
      {
        tier: 'Premium',
        description: 'Designer bathroom with luxury features',
        priceFrom: 12000,
        priceTo: 20000,
        features: ['Designer sanitaryware', 'Large format tiles', 'Rainfall shower', 'Underfloor heating', 'Heated towel rails'],
      },
      {
        tier: 'Luxury',
        description: 'Spa-quality bathroom experience',
        priceFrom: 20000,
        priceTo: 40000,
        features: ['Freestanding bath', 'Walk-in wet room', 'Natural stone', 'Smart mirrors', 'Built-in storage'],
      },
    ],
    factorsAffectingPrice: ['Bathroom size', 'Structural changes', 'Tile selection', 'Fixture quality', 'Accessibility needs'],
    whatIsIncluded: ['Design service', 'Plumbing', 'Electrical', 'Tiling', 'Waterproofing', 'Decoration'],
    timeline: '2-4 weeks',
    warranty: '5 years on installation, 10 years on waterproofing',
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    description: 'Transform your loft into valuable living space.',
    priceRanges: [
      {
        tier: 'Velux/Rooflight',
        description: 'Simple conversion with roof windows',
        priceFrom: 30000,
        priceTo: 45000,
        features: ['Velux windows', 'Insulation', 'Flooring', 'Staircase', 'Electrical'],
      },
      {
        tier: 'Dormer',
        description: 'Extended headroom with dormer window',
        priceFrom: 45000,
        priceTo: 65000,
        features: ['Rear dormer', 'En-suite option', 'Built-in storage', 'Central heating', 'Full electrics'],
      },
      {
        tier: 'Mansard',
        description: 'Maximum space with mansard extension',
        priceFrom: 65000,
        priceTo: 120000,
        features: ['Full floor addition', 'Multiple rooms', 'Luxury en-suite', 'Balcony option', 'Full specification'],
      },
    ],
    factorsAffectingPrice: ['Conversion type', 'Roof structure', 'Planning requirements', 'En-suite bathroom', 'Staircase location'],
    whatIsIncluded: ['Structural calculations', 'Building regulations', 'All construction', 'Insulation', 'Windows', 'First-fix electrical/plumbing'],
    timeline: '6-12 weeks',
    warranty: '10 years structural guarantee',
  },
  {
    slug: 'basement-conversion',
    name: 'Basement Conversion',
    description: 'Create additional living space with a basement conversion.',
    priceRanges: [
      {
        tier: 'Cellar Conversion',
        description: 'Converting existing cellar space',
        priceFrom: 50000,
        priceTo: 80000,
        features: ['Waterproofing', 'Light wells', 'Flooring', 'Heating', 'Basic finish'],
      },
      {
        tier: 'Basement Dig-Out',
        description: 'Excavating for additional headroom',
        priceFrom: 80000,
        priceTo: 150000,
        features: ['Full excavation', 'Underpinning', 'Multi-room layout', 'Premium finish', 'Natural light solutions'],
      },
      {
        tier: 'Luxury Basement',
        description: 'High-specification basement living',
        priceFrom: 150000,
        priceTo: 350000,
        features: ['Home cinema', 'Wine cellar', 'Gym/spa', 'Staff quarters', 'Complete automation'],
      },
    ],
    factorsAffectingPrice: ['Existing structure', 'Dig depth', 'Waterproofing complexity', 'Light well requirements', 'Intended use'],
    whatIsIncluded: ['Structural engineering', 'Excavation', 'Waterproofing', 'Construction', 'Services installation', 'Project management'],
    timeline: '12-24 weeks',
    warranty: '10 years structural, 10 years waterproofing',
  },
  {
    slug: 'extension',
    name: 'House Extension',
    description: 'Extend your home with additional living space.',
    priceRanges: [
      {
        tier: 'Side Return',
        description: 'Utilizing side alley space',
        priceFrom: 30000,
        priceTo: 50000,
        features: ['Kitchen expansion', 'Roof lantern option', 'Bi-fold doors', 'New flooring', 'Complete finish'],
      },
      {
        tier: 'Single Storey Rear',
        description: 'Ground floor rear extension',
        priceFrom: 50000,
        priceTo: 90000,
        features: ['Open-plan living', 'Large glazing', 'Underfloor heating', 'Kitchen/dining', 'Garden access'],
      },
      {
        tier: 'Double Storey',
        description: 'Two-storey extension',
        priceFrom: 90000,
        priceTo: 180000,
        features: ['Additional bedrooms', 'New bathroom', 'Maximum space', 'Future-proof design', 'Premium finish'],
      },
    ],
    factorsAffectingPrice: ['Extension size', 'Construction type', 'Foundation requirements', 'Glazing specification', 'Interior finish'],
    whatIsIncluded: ['Planning drawings', 'Building regulations', 'Groundworks', 'Construction', 'Roofing', 'First-fix services'],
    timeline: '8-16 weeks',
    warranty: '10 years structural guarantee',
  },
  {
    slug: 'electrical-rewire',
    name: 'Electrical Rewire',
    description: 'Complete electrical rewiring for safety and modern standards.',
    priceRanges: [
      {
        tier: 'Flat/Apartment',
        description: '1-2 bedroom flat rewire',
        priceFrom: 3000,
        priceTo: 5000,
        features: ['New consumer unit', 'Circuit protection', 'New sockets/switches', 'Lighting circuits', 'Certificate'],
      },
      {
        tier: 'House',
        description: '3-4 bedroom house rewire',
        priceFrom: 5000,
        priceTo: 10000,
        features: ['Full rewire', 'RCBO protection', 'USB sockets', 'Outdoor circuits', 'Smart prep'],
      },
      {
        tier: 'Large Property',
        description: '5+ bedroom property rewire',
        priceFrom: 10000,
        priceTo: 20000,
        features: ['Comprehensive rewire', 'Multiple consumer units', 'Smart home wiring', 'Garden electrics', 'EV charger prep'],
      },
    ],
    factorsAffectingPrice: ['Property size', 'Access difficulty', 'Decoration requirements', 'Smart home features', 'Listed building'],
    whatIsIncluded: ['New consumer unit', 'All wiring', 'Sockets and switches', 'Lighting', 'Testing and certification'],
    timeline: '1-3 weeks',
    warranty: '6 years workmanship, Part P certificate',
  },
  {
    slug: 'plumbing-heating',
    name: 'Plumbing & Heating',
    description: 'Boiler installation and central heating systems.',
    priceRanges: [
      {
        tier: 'Boiler Replacement',
        description: 'Like-for-like boiler swap',
        priceFrom: 2500,
        priceTo: 4000,
        features: ['New A-rated boiler', 'System flush', 'Controls upgrade', 'Warranty registration', 'Gas Safe certificate'],
      },
      {
        tier: 'Heating System',
        description: 'Boiler and radiator upgrade',
        priceFrom: 4000,
        priceTo: 8000,
        features: ['Premium boiler', 'New radiators', 'Smart thermostat', 'TRVs throughout', 'Full system flush'],
      },
      {
        tier: 'Complete System',
        description: 'Full plumbing and heating overhaul',
        priceFrom: 8000,
        priceTo: 18000,
        features: ['New pipework', 'Unvented cylinder', 'Underfloor heating zones', 'Multi-zone controls', 'Premium finish'],
      },
    ],
    factorsAffectingPrice: ['Property size', 'Boiler type', 'Radiator quantity', 'Pipework condition', 'Control system'],
    whatIsIncluded: ['Survey', 'Supply and install', 'System commissioning', 'All certificates', 'Warranty registration'],
    timeline: '1-5 days for boiler, 2-4 weeks for systems',
    warranty: 'Up to 12 years manufacturer warranty',
  },
];

// Helper functions
export function getPriceService(slug: string): PriceService | undefined {
  return priceServices.find(s => s.slug === slug);
}

export function generatePriceParams(): { service: string; area: string }[] {
  const params: { service: string; area: string }[] = [];
  
  const priorityAreas = ['hampstead', 'highgate', 'primrose-hill', 'belsize-park', 'st-johns-wood',
                         'crouch-end', 'muswell-hill', 'kentish-town', 'swiss-cottage', 'camden', 'islington'];
  
  for (const service of priceServices) {
    for (const area of priorityAreas) {
      params.push({
        service: service.slug,
        area: area,
      });
    }
  }
  
  return params;
}

export function formatPrice(price: number): string {
  return `£${price.toLocaleString()}`;
}

export function countPricePages(): number {
  const priorityAreas = 11;
  return priceServices.length * priorityAreas;
}
