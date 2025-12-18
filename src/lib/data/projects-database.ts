// ============================================================================
// PSEO ENGINE - PROJECTS/PORTFOLIO DATABASE
// Data for /projects/[type]/[area] pages
// 10x SEO Expansion - Strategy 5
// ============================================================================

export interface ProjectType {
  slug: string;
  name: string;
  description: string;
  categories: string[];
  typicalFeatures: string[];
  averageBudget: string;
  averageTimeline: string;
  idealFor: string[];
  beforeAfterImprovements: string[];
  valueAddedPercentage: string;
}

export const projectTypes: ProjectType[] = [
  {
    slug: 'victorian-renovation',
    name: 'Victorian House Renovation',
    description: 'Sympathetic renovation of Victorian properties, preserving period features while adding modern comfort.',
    categories: ['Period Property', 'Full Renovation', 'Heritage'],
    typicalFeatures: [
      'Sash window restoration',
      'Cornice and ceiling rose preservation',
      'Original fireplace restoration',
      'Period-appropriate kitchens',
      'Cellar conversion',
    ],
    averageBudget: '£120,000 - £250,000',
    averageTimeline: '16-24 weeks',
    idealFor: ['Victorian terrace owners', 'Period property enthusiasts', 'Heritage-conscious buyers'],
    beforeAfterImprovements: [
      'Tired Victorian to stunning family home',
      'Dark cramped layout to open-plan living',
      'Dated systems to smart home ready',
      'Cold drafty house to energy efficient',
    ],
    valueAddedPercentage: '15-25%',
  },
  {
    slug: 'georgian-restoration',
    name: 'Georgian Property Restoration',
    description: 'Expert restoration of Georgian townhouses and listed buildings with conservation expertise.',
    categories: ['Listed Building', 'Conservation', 'Restoration'],
    typicalFeatures: [
      'Original panelling restoration',
      'Sash window repair and draught-proofing',
      'Historic plasterwork repair',
      'Listed building compliance',
      'Sympathetic modern services',
    ],
    averageBudget: '£180,000 - £400,000',
    averageTimeline: '20-32 weeks',
    idealFor: ['Listed property owners', 'Conservation area residents', 'History appreciators'],
    beforeAfterImprovements: [
      'Compromised heritage to authentic restoration',
      'Non-compliant alterations corrected',
      'Hidden features revealed and restored',
      'Modern comfort without compromising character',
    ],
    valueAddedPercentage: '20-35%',
  },
  {
    slug: 'edwardian-modernisation',
    name: 'Edwardian House Modernisation',
    description: 'Updating Edwardian properties with modern amenities while respecting their distinctive character.',
    categories: ['Period Property', 'Modernisation', 'Family Home'],
    typicalFeatures: [
      'Bay window restoration',
      'Original tile preservation',
      'Stained glass repair',
      'Open-plan rear extension',
      'Loft conversion',
    ],
    averageBudget: '£100,000 - £200,000',
    averageTimeline: '14-20 weeks',
    idealFor: ['Family home buyers', 'Edwardian property owners', 'Space-conscious families'],
    beforeAfterImprovements: [
      'Compartmentalized to flowing spaces',
      'Original features enhanced not removed',
      'Traditional meets contemporary',
      'Period charm with modern function',
    ],
    valueAddedPercentage: '18-28%',
  },
  {
    slug: 'basement-dig-out',
    name: 'Basement Dig-Out Project',
    description: 'Creating valuable additional living space through professional basement excavation.',
    categories: ['Extension', 'Extra Space', 'High-Value'],
    typicalFeatures: [
      'Full excavation and underpinning',
      'Light well installation',
      'Waterproofing systems',
      'Multi-room configuration',
      'Separate entrance option',
    ],
    averageBudget: '£150,000 - £350,000',
    averageTimeline: '16-28 weeks',
    idealFor: ['Space-starved homeowners', 'High-value properties', 'Multi-generational families'],
    beforeAfterImprovements: [
      'Unused cellar to luxury living',
      'No basement to additional floor',
      'Storage space to home cinema',
      'Empty void to rental income',
    ],
    valueAddedPercentage: '25-40%',
  },
  {
    slug: 'loft-master-suite',
    name: 'Loft Master Suite Conversion',
    description: 'Transforming loft space into a luxurious master bedroom with en-suite bathroom.',
    categories: ['Loft Conversion', 'Bedroom', 'En-Suite'],
    typicalFeatures: [
      'Dormer or mansard extension',
      'Luxury en-suite bathroom',
      'Walk-in wardrobe',
      'Juliet balcony option',
      'Premium insulation and soundproofing',
    ],
    averageBudget: '£65,000 - £120,000',
    averageTimeline: '8-14 weeks',
    idealFor: ['Growing families', 'Home workers', 'Space-upgraders'],
    beforeAfterImprovements: [
      'Dusty loft to dream suite',
      'Crowded bedrooms to spacious layout',
      'Lost space to luxury retreat',
      'Cramped top floor to penthouse feel',
    ],
    valueAddedPercentage: '15-25%',
  },
  {
    slug: 'kitchen-extension',
    name: 'Kitchen Extension Project',
    description: 'Creating open-plan kitchen-dining spaces with rear or side return extensions.',
    categories: ['Extension', 'Kitchen', 'Open-Plan'],
    typicalFeatures: [
      'Structural opening',
      'Bi-fold or sliding doors',
      'Roof lantern or skylight',
      'Kitchen island',
      'Underfloor heating',
    ],
    averageBudget: '£80,000 - £150,000',
    averageTimeline: '10-16 weeks',
    idealFor: ['Entertainers', 'Family-focused homeowners', 'Modern living seekers'],
    beforeAfterImprovements: [
      'Small galley to open-plan hub',
      'Dark kitchen to light-filled space',
      'Separate rooms to social kitchen',
      'Indoor/outdoor disconnect to seamless flow',
    ],
    valueAddedPercentage: '10-20%',
  },
  {
    slug: 'whole-house-smart-home',
    name: 'Whole House Smart Home',
    description: 'Complete smart home integration with automated lighting, heating, security, and entertainment.',
    categories: ['Technology', 'Modernisation', 'Automation'],
    typicalFeatures: [
      'Centralized home automation',
      'Smart lighting throughout',
      'Multi-zone heating control',
      'Integrated security system',
      'Whole-house audio/visual',
    ],
    averageBudget: '£40,000 - £100,000',
    averageTimeline: '4-10 weeks',
    idealFor: ['Tech enthusiasts', 'Energy-conscious owners', 'Security-focused families'],
    beforeAfterImprovements: [
      'Manual controls to voice-activated',
      'Energy waste to optimized efficiency',
      'Separate systems to integrated control',
      'Standard security to smart monitoring',
    ],
    valueAddedPercentage: '5-15%',
  },
  {
    slug: 'period-bathroom-suite',
    name: 'Period Bathroom Suite',
    description: 'Creating luxury period-style bathrooms that complement heritage properties.',
    categories: ['Bathroom', 'Period Style', 'Luxury'],
    typicalFeatures: [
      'Roll-top or slipper bath',
      'Traditional sanitaryware',
      'Encaustic or marble floor tiles',
      'Period-style fixtures',
      'Underfloor heating',
    ],
    averageBudget: '£25,000 - £50,000',
    averageTimeline: '3-6 weeks',
    idealFor: ['Period property owners', 'Bathroom upgraders', 'Luxury seekers'],
    beforeAfterImprovements: [
      'Dated suite to spa sanctuary',
      'Modern clash to period harmony',
      'Basic bathroom to boutique hotel',
      'Functional to indulgent',
    ],
    valueAddedPercentage: '8-15%',
  },
  {
    slug: 'garden-room-office',
    name: 'Garden Room Home Office',
    description: 'Purpose-built garden rooms providing dedicated home working space.',
    categories: ['Home Office', 'Garden Building', 'Remote Work'],
    typicalFeatures: [
      'Fully insulated structure',
      'Full electrical installation',
      'High-speed internet connectivity',
      'Heating and cooling',
      'Bespoke interior fit-out',
    ],
    averageBudget: '£30,000 - £60,000',
    averageTimeline: '4-8 weeks',
    idealFor: ['Remote workers', 'Entrepreneurs', 'Creative professionals'],
    beforeAfterImprovements: [
      'Kitchen table to proper office',
      'Commute time to garden stroll',
      'Cramped spare room to dedicated space',
      'Work-life blur to clear boundaries',
    ],
    valueAddedPercentage: '8-12%',
  },
  {
    slug: 'sustainable-retrofit',
    name: 'Sustainable Retrofit',
    description: 'Comprehensive energy efficiency improvements for existing properties.',
    categories: ['Sustainability', 'Energy Efficiency', 'Green'],
    typicalFeatures: [
      'External wall insulation',
      'Triple-glazing upgrade',
      'Air source heat pump',
      'Solar panel installation',
      'Smart energy management',
    ],
    averageBudget: '£50,000 - £120,000',
    averageTimeline: '8-16 weeks',
    idealFor: ['Eco-conscious owners', 'Energy bill reducers', 'Future-proofers'],
    beforeAfterImprovements: [
      'Energy guzzler to efficient home',
      'High bills to minimal costs',
      'Cold drafts to comfortable living',
      'Carbon footprint slashed',
    ],
    valueAddedPercentage: '10-20%',
  },
];

// Helper functions
export function getProjectType(slug: string): ProjectType | undefined {
  return projectTypes.find(p => p.slug === slug);
}

export function generateProjectParams(): { type: string; area: string }[] {
  const params: { type: string; area: string }[] = [];
  
  const priorityAreas = ['hampstead', 'highgate', 'primrose-hill', 'belsize-park', 'st-johns-wood',
                         'crouch-end', 'muswell-hill', 'kentish-town', 'swiss-cottage', 'camden', 'islington'];
  
  for (const project of projectTypes) {
    for (const area of priorityAreas) {
      params.push({
        type: project.slug,
        area: area,
      });
    }
  }
  
  return params;
}

export function countProjectPages(): number {
  const priorityAreas = 11;
  return projectTypes.length * priorityAreas;
}
