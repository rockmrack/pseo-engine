// ============================================================================
// PSEO ENGINE - PROPERTY TYPES & ERAS DATABASE
// 500x SEO Expansion - Targeting property type + era + service searches
// ============================================================================

export interface PropertyEra {
  slug: string;
  name: string;
  period: string;
  characteristics: string[];
  commonIssues: string[];
  renovationFocus: string[];
  popularIn: string[]; // Areas where this type is common
  seoKeywords: string[];
}

export interface PropertyType {
  slug: string;
  name: string;
  description: string;
  typicalFeatures: string[];
  renovationServices: string[];
  seoKeywords: string[];
}

export const propertyEras: PropertyEra[] = [
  {
    slug: 'georgian',
    name: 'Georgian',
    period: '1714-1837',
    characteristics: [
      'Symmetrical facades',
      'Sash windows with multiple panes',
      'High ceilings (3m+)',
      'Decorative plasterwork',
      'Original fireplaces',
      'Shuttered windows',
      'Elegant proportions',
      'Grand entrance halls',
    ],
    commonIssues: [
      'Damp in basements',
      'Original windows needing restoration',
      'Outdated electrical systems',
      'Subsidence in older properties',
      'Lead paint',
      'Asbestos in later modifications',
      'Roof and chimney repairs',
    ],
    renovationFocus: [
      'Period-sensitive restoration',
      'Sash window repair and draught-proofing',
      'Damp proofing',
      'Rewiring to modern standards',
      'Central heating installation',
      'Basement conversions',
      'Kitchen and bathroom updates',
    ],
    popularIn: ['Islington', 'Canonbury', 'Barnsbury', 'Highgate', 'Hampstead', 'Primrose Hill', 'Camden', 'Angel'],
    seoKeywords: ['georgian house renovation', 'georgian property restoration', 'georgian townhouse refurbishment', 'period property renovation'],
  },
  {
    slug: 'regency',
    name: 'Regency',
    period: '1811-1820',
    characteristics: [
      'Stucco facades',
      'Wrought iron balconies',
      'Bow windows',
      'Curved terraces',
      'Elegant proportions',
      'Tall sash windows',
      'Decorative mouldings',
      'Fanlights above doors',
    ],
    commonIssues: [
      'Stucco repairs needed',
      'Sash window maintenance',
      'Damp from render failure',
      'Listed building restrictions',
      'Iron balcony rust',
      'Roof maintenance',
    ],
    renovationFocus: [
      'Stucco restoration',
      'Period window restoration',
      'Balcony restoration',
      'Sympathetic modernisation',
      'Heritage-compliant heating',
      'Basement waterproofing',
    ],
    popularIn: ['Primrose Hill', 'Regent\'s Park', 'St John\'s Wood', 'Hampstead', 'Canonbury'],
    seoKeywords: ['regency house renovation', 'regency property restoration', 'stucco house repair', 'regency terrace renovation'],
  },
  {
    slug: 'victorian-early',
    name: 'Early Victorian',
    period: '1837-1860',
    characteristics: [
      'Yellow London stock brick',
      'Bay windows emerging',
      'Higher ceilings',
      'Ornate cornicing',
      'Original fireplaces',
      'Tiled entrance paths',
      'Slate roofs',
      'Basement sculleries',
    ],
    commonIssues: [
      'Rising damp',
      'Failed pointing',
      'Chimney issues',
      'Subsidence',
      'Outdated plumbing',
      'Single-glazed windows',
    ],
    renovationFocus: [
      'Damp proofing',
      'Repointing',
      'Chimney repairs',
      'Period-appropriate updates',
      'Sash window overhaul',
      'Basement conversion',
    ],
    popularIn: ['Islington', 'Kentish Town', 'Holloway', 'Camden', 'Stoke Newington', 'Highbury'],
    seoKeywords: ['victorian house renovation', 'victorian terrace refurbishment', 'victorian property restoration'],
  },
  {
    slug: 'victorian-mid',
    name: 'Mid Victorian',
    period: '1860-1880',
    characteristics: [
      'Red and yellow brick mix',
      'Larger bay windows',
      'More elaborate detailing',
      'Decorative roof tiles',
      'Stained glass panels',
      'Cast iron railings',
      'Tiled hallways',
      'Servant quarters',
    ],
    commonIssues: [
      'Timber decay',
      'Original window failure',
      'Roof and chimney maintenance',
      'Structural movement',
      'Outdated services',
      'Lead pipes',
    ],
    renovationFocus: [
      'Timber repairs',
      'Structural underpinning',
      'Period window restoration',
      'Modern heating systems',
      'Full rewiring',
      'Lead pipe replacement',
    ],
    popularIn: ['Crouch End', 'Muswell Hill', 'Hampstead', 'Belsize Park', 'Tufnell Park', 'Highgate'],
    seoKeywords: ['mid victorian renovation', 'victorian house extension', 'period property modernisation'],
  },
  {
    slug: 'victorian-late',
    name: 'Late Victorian',
    period: '1880-1901',
    characteristics: [
      'Red brick prevalent',
      'Decorative terracotta',
      'Large bay windows',
      'Queen Anne influences',
      'Elaborate porches',
      'Tile hanging',
      'Decorative ridge tiles',
      'Internal bathrooms',
    ],
    commonIssues: [
      'Terracotta decay',
      'Decorative features damage',
      'Bay window subsidence',
      'Damp penetration',
      'Original heating failure',
    ],
    renovationFocus: [
      'Bay window underpinning',
      'Terracotta restoration',
      'Decorative feature repair',
      'Energy efficiency upgrades',
      'Loft conversions',
      'Rear extensions',
    ],
    popularIn: ['Muswell Hill', 'Crouch End', 'Finchley', 'Wood Green', 'Palmers Green', 'Stoke Newington'],
    seoKeywords: ['late victorian renovation', 'queen anne house restoration', 'victorian family house renovation'],
  },
  {
    slug: 'edwardian',
    name: 'Edwardian',
    period: '1901-1910',
    characteristics: [
      'Wider frontages',
      'Front gardens',
      'Larger windows',
      'Lighter interiors',
      'Arts and Crafts influences',
      'Mock Tudor details',
      'Porches common',
      'Indoor bathrooms standard',
    ],
    commonIssues: [
      'Porch subsidence',
      'Bay window movement',
      'Damp in bay windows',
      'Roof timber issues',
      'Original heating decay',
    ],
    renovationFocus: [
      'Porch restoration',
      'Bay window repairs',
      'Period-sympathetic extensions',
      'Energy upgrades',
      'Open-plan conversions',
      'Garden room additions',
    ],
    popularIn: ['Muswell Hill', 'Crouch End', 'Palmers Green', 'Winchmore Hill', 'Finchley', 'Golders Green'],
    seoKeywords: ['edwardian house renovation', 'edwardian property extension', 'edwardian terrace modernisation'],
  },
  {
    slug: '1920s',
    name: '1920s Inter-War',
    period: '1920-1929',
    characteristics: [
      'Semi-detached popular',
      'Mock Tudor style',
      'Pebbledash rendering',
      'Metal Crittall windows',
      'Smaller rooms',
      'Built-in furniture',
      'Art Deco influences',
      'Garages appearing',
    ],
    commonIssues: [
      'Crittall window failure',
      'Pebbledash damage',
      'Flat roof issues',
      'Small room layouts',
      'Asbestos materials',
    ],
    renovationFocus: [
      'Window replacement',
      'Render repairs',
      'Room layout changes',
      'Asbestos removal',
      'Extension additions',
      'Kitchen-diner conversions',
    ],
    popularIn: ['Mill Hill', 'Hendon', 'Finchley', 'Hampstead Garden Suburb', 'Golders Green', 'Southgate'],
    seoKeywords: ['1920s house renovation', 'inter-war property modernisation', '1920s semi renovation'],
  },
  {
    slug: '1930s',
    name: '1930s Semi-Detached',
    period: '1930-1939',
    characteristics: [
      'Bay windows',
      'Semi-detached layout',
      'Front and rear gardens',
      'Garages common',
      'Art Deco details',
      'Parquet flooring',
      'Curved features',
      'Sunburst motifs',
    ],
    commonIssues: [
      'Bay window subsidence',
      'Cavity wall problems',
      'Original central heating failure',
      'Single glazing',
      'Parquet floor damage',
    ],
    renovationFocus: [
      'Bay window underpinning',
      'Double glazing installation',
      'Central heating upgrade',
      'Parquet restoration',
      'Loft conversion',
      'Side return extension',
    ],
    popularIn: ['Arnos Grove', 'Southgate', 'Oakwood', 'Mill Hill', 'Hendon', 'Finchley', 'Muswell Hill borders'],
    seoKeywords: ['1930s house renovation', '1930s semi modernisation', '1930s property extension'],
  },
  {
    slug: '1950s',
    name: '1950s Post-War',
    period: '1950-1959',
    characteristics: [
      'Utility design',
      'Smaller plots',
      'Metal windows common',
      'Flat or shallow roofs',
      'Concrete construction',
      'Compact layouts',
      'Built-in storage',
      'Simple detailing',
    ],
    commonIssues: [
      'Metal window corrosion',
      'Flat roof leaks',
      'Concrete defects',
      'Poor insulation',
      'Dated layouts',
    ],
    renovationFocus: [
      'Window replacement',
      'Flat roof upgrade',
      'Insulation improvement',
      'Layout reconfiguration',
      'External cladding',
      'Extension for space',
    ],
    popularIn: ['New Southgate', 'Friern Barnet', 'Burnt Oak', 'Edmonton', 'Tottenham'],
    seoKeywords: ['1950s house renovation', 'post-war property modernisation', '1950s home upgrade'],
  },
  {
    slug: '1960s-1970s',
    name: '1960s-1970s',
    period: '1960-1979',
    characteristics: [
      'Concrete frame',
      'Large windows',
      'Open-plan concepts',
      'Flat roofs common',
      'Brutalist influences',
      'System-built housing',
      'Garage integral',
      'Central heating standard',
    ],
    commonIssues: [
      'Concrete defects',
      'Flat roof failure',
      'Single glazing',
      'System building faults',
      'Poor insulation',
      'Asbestos presence',
    ],
    renovationFocus: [
      'Structural repairs',
      'Re-roofing',
      'Window replacement',
      'Insulation upgrade',
      'Asbestos removal',
      'Modern cladding',
    ],
    popularIn: ['Colindale', 'Burnt Oak', 'Edmonton', 'Tottenham', 'Wood Green'],
    seoKeywords: ['1960s house renovation', '1970s property modernisation', 'system built home upgrade'],
  },
  {
    slug: 'new-build',
    name: 'New Build',
    period: '2000-Present',
    characteristics: [
      'Energy efficient design',
      'Open-plan living',
      'Modern materials',
      'Integrated technology',
      'Ensuite bathrooms',
      'Fitted kitchens',
      'Double or triple glazing',
      'Underfloor heating',
    ],
    commonIssues: [
      'Snagging issues',
      'Builder quality variance',
      'Warranty claims',
      'Landscaping incomplete',
      'Storage limitations',
    ],
    renovationFocus: [
      'Snagging repairs',
      'Custom upgrades',
      'Garden landscaping',
      'Storage solutions',
      'Smart home integration',
      'Premium finishes',
    ],
    popularIn: ['Colindale regeneration', 'Tottenham Hale', 'Mill Hill East', 'Brent Cross', 'Cricklewood'],
    seoKeywords: ['new build snagging', 'new home improvements', 'new build upgrades', 'modern home renovation'],
  },
  {
    slug: 'conversion',
    name: 'Converted Property',
    period: 'Various',
    characteristics: [
      'Period exterior',
      'Modern interior layout',
      'Mixed age features',
      'Loft conversions common',
      'Basement flats',
      'Split-level designs',
      'Shared features',
      'Variable ceiling heights',
    ],
    commonIssues: [
      'Conversion quality variance',
      'Sound transfer',
      'Limited storage',
      'Service access issues',
      'Mixed materials',
    ],
    renovationFocus: [
      'Sound insulation',
      'Storage solutions',
      'Service upgrades',
      'Layout improvements',
      'Finish quality',
      'Integration of old and new',
    ],
    popularIn: ['All areas with period properties', 'Hampstead', 'Belsize Park', 'Islington', 'Camden'],
    seoKeywords: ['flat conversion renovation', 'converted property update', 'period conversion modernisation'],
  },
];

export const propertyTypes: PropertyType[] = [
  {
    slug: 'terraced-house',
    name: 'Terraced House',
    description: 'Row houses sharing walls with neighbours on both sides.',
    typicalFeatures: ['Shared walls', 'Front and rear access', 'Narrow width', 'Multiple storeys', 'Basement common'],
    renovationServices: ['Side return extension', 'Loft conversion', 'Basement conversion', 'Rear extension', 'Kitchen renovation'],
    seoKeywords: ['terraced house renovation', 'terrace extension', 'terraced property renovation'],
  },
  {
    slug: 'semi-detached',
    name: 'Semi-Detached House',
    description: 'Houses sharing one wall with a neighbour.',
    typicalFeatures: ['One shared wall', 'Side access possible', 'Front and rear gardens', 'Driveway common', 'Garage option'],
    renovationServices: ['Side extension', 'Loft conversion', 'Garage conversion', 'Rear extension', 'Wrap-around extension'],
    seoKeywords: ['semi detached renovation', 'semi extension', 'semi detached house renovation'],
  },
  {
    slug: 'detached-house',
    name: 'Detached House',
    description: 'Standalone properties with no shared walls.',
    typicalFeatures: ['No shared walls', 'Garden all around', 'Multiple access points', 'Garage common', 'Greater flexibility'],
    renovationServices: ['All extension types', 'Basement conversion', 'Outbuilding', 'Garden room', 'Major renovation'],
    seoKeywords: ['detached house renovation', 'detached property extension', 'large house renovation'],
  },
  {
    slug: 'flat-apartment',
    name: 'Flat / Apartment',
    description: 'Self-contained unit within a larger building.',
    typicalFeatures: ['Shared building', 'Limited outdoor space', 'Leasehold common', 'Shared services', 'Restrictions apply'],
    renovationServices: ['Kitchen refit', 'Bathroom renovation', 'Open-plan conversion', 'Rewiring', 'Replumbing'],
    seoKeywords: ['flat renovation', 'apartment refurbishment', 'flat modernisation'],
  },
  {
    slug: 'maisonette',
    name: 'Maisonette',
    description: 'Two-storey flat with own entrance.',
    typicalFeatures: ['Two floors', 'Private entrance', 'Internal stairs', 'More space than flat', 'Often leasehold'],
    renovationServices: ['Internal reconfiguration', 'Staircase renovation', 'Full refurbishment', 'Kitchen and bath renovation'],
    seoKeywords: ['maisonette renovation', 'maisonette refurbishment', 'two storey flat renovation'],
  },
  {
    slug: 'townhouse',
    name: 'Townhouse',
    description: 'Multi-storey urban house, often terraced.',
    typicalFeatures: ['Multiple floors', 'Narrow and tall', 'Urban location', 'Period features', 'Basement likely'],
    renovationServices: ['Full house renovation', 'Floor-by-floor refurbishment', 'Basement conversion', 'Lift installation'],
    seoKeywords: ['townhouse renovation', 'townhouse refurbishment', 'multi-storey house renovation'],
  },
  {
    slug: 'cottage',
    name: 'Cottage',
    description: 'Small, traditionally styled house.',
    typicalFeatures: ['Compact layout', 'Low ceilings', 'Character features', 'Period charm', 'Garden'],
    renovationServices: ['Sympathetic modernisation', 'Extension', 'Period restoration', 'Heating upgrade'],
    seoKeywords: ['cottage renovation', 'cottage restoration', 'small house renovation'],
  },
  {
    slug: 'mansion-block',
    name: 'Mansion Block Flat',
    description: 'Flat in a purpose-built Victorian or Edwardian block.',
    typicalFeatures: ['High ceilings', 'Period features', 'Communal areas', 'Leasehold', 'Porterage common'],
    renovationServices: ['Period restoration', 'Kitchen and bathroom update', 'Rewiring', 'Central heating'],
    seoKeywords: ['mansion block renovation', 'mansion flat refurbishment', 'period flat renovation'],
  },
  {
    slug: 'bungalow',
    name: 'Bungalow',
    description: 'Single-storey dwelling.',
    typicalFeatures: ['Single storey', 'Larger footprint', 'Accessible', 'Garden all around', 'Loft potential'],
    renovationServices: ['Loft conversion', 'Extension', 'Accessibility upgrades', 'Full renovation'],
    seoKeywords: ['bungalow renovation', 'bungalow extension', 'single storey house renovation'],
  },
  {
    slug: 'mews-house',
    name: 'Mews House',
    description: 'Converted stable or carriage house, typically in a courtyard.',
    typicalFeatures: ['Cobbled street', 'Compact', 'Character features', 'Often freehold', 'Prime locations'],
    renovationServices: ['Full refurbishment', 'Basement excavation', 'Period restoration', 'Modern updates'],
    seoKeywords: ['mews house renovation', 'mews conversion', 'london mews renovation'],
  },
  {
    slug: 'penthouse',
    name: 'Penthouse',
    description: 'Top-floor apartment, often with roof terrace.',
    typicalFeatures: ['Top floor', 'Roof terrace', 'Views', 'Premium finishes', 'Larger footprint'],
    renovationServices: ['Luxury renovation', 'Terrace design', 'High-end finishes', 'Smart home integration'],
    seoKeywords: ['penthouse renovation', 'penthouse refurbishment', 'luxury flat renovation'],
  },
  {
    slug: 'studio-flat',
    name: 'Studio Flat',
    description: 'Open-plan single room living space.',
    typicalFeatures: ['Open plan', 'Compact', 'Combined living/sleeping', 'Efficient design', 'Separate bathroom'],
    renovationServices: ['Space optimisation', 'Storage solutions', 'Bathroom update', 'Kitchen refresh'],
    seoKeywords: ['studio flat renovation', 'studio apartment renovation', 'small flat renovation'],
  },
];

// Helper functions
export function getPropertyEra(slug: string): PropertyEra | undefined {
  return propertyEras.find(e => e.slug === slug);
}

export function getPropertyType(slug: string): PropertyType | undefined {
  return propertyTypes.find(t => t.slug === slug);
}

export function getAllPropertyEras(): PropertyEra[] {
  return propertyEras;
}

export function getAllPropertyTypes(): PropertyType[] {
  return propertyTypes;
}

// Generate URL params for property pages
export function generatePropertyEraParams(): { era: string }[] {
  return propertyEras.map(e => ({ era: e.slug }));
}

export function generatePropertyTypeParams(): { type: string }[] {
  return propertyTypes.map(t => ({ type: t.slug }));
}

// Get eras common in a specific area
export function getErasInArea(area: string): PropertyEra[] {
  return propertyEras.filter(e => 
    e.popularIn.some(a => a.toLowerCase().includes(area.toLowerCase()))
  );
}
