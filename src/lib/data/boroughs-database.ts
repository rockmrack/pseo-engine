// ============================================================================
// BOROUGH DATABASE
// London borough landing pages with authority signals
// ============================================================================

export interface Borough {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  population: string;
  propertyTypes: string[];
  areas: string[];
  postcodes: string[];
  characteristics: string[];
  conservationAreas: string[];
  planningAuthority: {
    name: string;
    website: string;
    phone: string;
  };
  keyStats: {
    label: string;
    value: string;
  }[];
  popularServices: string[];
  testimonial?: {
    quote: string;
    author: string;
    area: string;
  };
}

export const boroughs: Borough[] = [
  {
    slug: 'camden',
    name: 'Camden',
    fullName: 'London Borough of Camden',
    description: 'The London Borough of Camden stretches from the West End to Hampstead Heath, encompassing some of London\'s most prestigious residential areas alongside vibrant cultural hotspots. From the Georgian splendour of Bloomsbury to the Victorian elegance of Hampstead, Camden offers extraordinary architectural diversity.',
    population: '270,000+',
    propertyTypes: ['Georgian Townhouses', 'Victorian Terraces', 'Edwardian Villas', 'Mansion Blocks', 'Period Conversions', 'Modern Apartments'],
    areas: ['Hampstead', 'Belsize Park', 'Primrose Hill', 'Swiss Cottage', 'Camden Town', 'Kentish Town', 'Gospel Oak', 'Bloomsbury', 'Holborn', 'Kings Cross'],
    postcodes: ['NW1', 'NW3', 'NW5', 'NW6', 'WC1', 'WC2'],
    characteristics: [
      'High concentration of listed buildings',
      'Numerous conservation areas',
      'Strong heritage protection policies',
      'Premium property values',
      'Excellent transport links',
      'Vibrant cultural scene',
    ],
    conservationAreas: ['Hampstead', 'Belsize', 'Primrose Hill', 'Bloomsbury', 'Camden Town', 'Dartmouth Park', 'Fitzrovia', 'South Hampstead'],
    planningAuthority: {
      name: 'Camden Council Planning',
      website: 'https://www.camden.gov.uk/planning',
      phone: '020 7974 4444',
    },
    keyStats: [
      { label: 'Conservation Areas', value: '40+' },
      { label: 'Listed Buildings', value: '5,500+' },
      { label: 'Average Property Price', value: '£1.1m' },
      { label: 'Our Projects Completed', value: '450+' },
    ],
    popularServices: ['bathroom-installation', 'kitchen-fitting', 'period-restoration', 'electrical-rewiring', 'loft-conversion'],
    testimonial: {
      quote: 'Hampstead Renovations understood the complexities of working in a conservation area. Their knowledge of Camden planning requirements saved us time and ensured our renovation was approved first time.',
      author: 'The Morrison Family',
      area: 'Hampstead',
    },
  },
  {
    slug: 'barnet',
    name: 'Barnet',
    fullName: 'London Borough of Barnet',
    description: 'The London Borough of Barnet is one of the largest London boroughs by population and area, stretching from Hampstead Garden Suburb to the M25. Known for its leafy suburbs, excellent schools, and strong sense of community, Barnet offers family-friendly living with good transport links to central London.',
    population: '400,000+',
    propertyTypes: ['1930s Semis', 'Edwardian Houses', 'Victorian Terraces', 'Modern Detached', 'Garden Suburb Homes', 'New Build Developments'],
    areas: ['East Finchley', 'Finchley', 'Barnet', 'Whetstone', 'Totteridge', 'Mill Hill', 'Hendon', 'Golders Green', 'Hampstead Garden Suburb', 'Edgware'],
    postcodes: ['N2', 'N3', 'N11', 'N12', 'N20', 'NW4', 'NW7', 'NW9', 'NW11'],
    characteristics: [
      'Family-oriented suburbs',
      'High proportion of 1930s housing stock',
      'Hampstead Garden Suburb conservation',
      'Good school catchment areas',
      'Large private gardens',
      'Strong community feel',
    ],
    conservationAreas: ['Hampstead Garden Suburb', 'Totteridge', 'Mill Hill', 'Monken Hadley', 'Friern Barnet'],
    planningAuthority: {
      name: 'Barnet Council Planning',
      website: 'https://www.barnet.gov.uk/planning',
      phone: '020 8359 2000',
    },
    keyStats: [
      { label: 'Area (sq km)', value: '86.7' },
      { label: 'Listed Buildings', value: '350+' },
      { label: 'Average Property Price', value: '£680k' },
      { label: 'Our Projects Completed', value: '180+' },
    ],
    popularServices: ['boiler-installation', 'central-heating', 'loft-conversion', 'extension-building', 'kitchen-fitting'],
    testimonial: {
      quote: 'We needed our 1930s semi rewired while keeping the original features. The team was meticulous and left our home better than they found it.',
      author: 'David & Karen T.',
      area: 'East Finchley',
    },
  },
  {
    slug: 'haringey',
    name: 'Haringey',
    fullName: 'London Borough of Haringey',
    description: 'The London Borough of Haringey spans from the heights of Highgate and Muswell Hill to the regenerating areas of Tottenham. This diverse borough combines affluent Victorian suburbs with dynamic multicultural communities, offering excellent value for families seeking period homes.',
    population: '270,000+',
    propertyTypes: ['Victorian Terraces', 'Edwardian Houses', 'Georgian Townhouses', 'Conversion Flats', 'New Build Apartments', 'Arts & Crafts Houses'],
    areas: ['Highgate', 'Muswell Hill', 'Crouch End', 'Hornsey', 'Stroud Green', 'Finsbury Park', 'Wood Green', 'Tottenham', 'Alexandra Park'],
    postcodes: ['N4', 'N6', 'N8', 'N10', 'N15', 'N17', 'N22'],
    characteristics: [
      'Strong Victorian and Edwardian heritage',
      'Thriving independent high streets',
      'Alexandra Palace landmark',
      'Excellent transport links',
      'Active conservation efforts',
      'Growing regeneration areas',
    ],
    conservationAreas: ['Highgate', 'Muswell Hill', 'Crouch End', 'Hornsey', 'Alexandra Palace', 'Stroud Green'],
    planningAuthority: {
      name: 'Haringey Council Planning',
      website: 'https://www.haringey.gov.uk/planning',
      phone: '020 8489 0000',
    },
    keyStats: [
      { label: 'Conservation Areas', value: '28' },
      { label: 'Listed Buildings', value: '300+' },
      { label: 'Average Property Price', value: '£620k' },
      { label: 'Our Projects Completed', value: '220+' },
    ],
    popularServices: ['bathroom-installation', 'period-restoration', 'sash-window-repair', 'loft-conversion', 'kitchen-fitting'],
    testimonial: {
      quote: 'Our Edwardian house in Crouch End needed sensitive renovation. The team respected the original character while making it work for modern family life.',
      author: 'Sarah & James K.',
      area: 'Crouch End',
    },
  },
  {
    slug: 'islington',
    name: 'Islington',
    fullName: 'London Borough of Islington',
    description: 'The London Borough of Islington is one of London\'s smallest but most densely populated boroughs, known for its Georgian townhouses, vibrant culture, and excellent restaurants. From the upmarket streets of Canonbury to the trendy bars of Upper Street, Islington attracts professionals and families seeking period character.',
    population: '240,000+',
    propertyTypes: ['Georgian Townhouses', 'Victorian Terraces', 'Warehouse Conversions', 'Council Estates', 'Modern Apartments', 'Garden Squares'],
    areas: ['Islington', 'Highbury', 'Canonbury', 'Barnsbury', 'Angel', 'Holloway', 'Finsbury Park', 'Archway', 'Upper Street'],
    postcodes: ['N1', 'N5', 'N7', 'N19', 'EC1'],
    characteristics: [
      'Outstanding Georgian architecture',
      'Famous garden squares',
      'Thriving restaurant scene',
      'Strong transport connections',
      'Warehouse conversions',
      'Premium rental market',
    ],
    conservationAreas: ['Canonbury', 'Barnsbury', 'Duncan Terrace', 'Angel', 'Highbury New Park', 'Tufnell Park'],
    planningAuthority: {
      name: 'Islington Council Planning',
      website: 'https://www.islington.gov.uk/planning',
      phone: '020 7527 2000',
    },
    keyStats: [
      { label: 'Conservation Areas', value: '36' },
      { label: 'Listed Buildings', value: '4,500+' },
      { label: 'Average Property Price', value: '£850k' },
      { label: 'Our Projects Completed', value: '150+' },
    ],
    popularServices: ['kitchen-fitting', 'bathroom-installation', 'period-restoration', 'garden-landscaping', 'smart-home'],
    testimonial: {
      quote: 'Renovating a Georgian townhouse requires real expertise. Hampstead Renovations delivered beautiful results while navigating strict conservation requirements.',
      author: 'The Phillips Family',
      area: 'Canonbury',
    },
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    fullName: 'City of Westminster',
    description: 'The City of Westminster encompasses the heart of London, from the government buildings of Whitehall to the mansions of Mayfair. This historic borough contains more listed buildings than any other and demands the highest standards of workmanship for property renovation.',
    population: '260,000+',
    propertyTypes: ['Georgian Mansions', 'Victorian Townhouses', 'Regency Terraces', 'Luxury Apartments', 'Mansion Blocks', 'Mews Houses'],
    areas: ['Mayfair', 'Marylebone', 'St John\'s Wood', 'Little Venice', 'Pimlico', 'Victoria', 'Westminster', 'Bayswater', 'Paddington'],
    postcodes: ['W1', 'W2', 'W9', 'NW1', 'NW8', 'SW1'],
    characteristics: [
      'Highest concentration of Grade I listed buildings',
      'Ultra-prime property market',
      'Royal parks and palaces',
      'International residents',
      'Luxury specification requirements',
      'Complex planning environment',
    ],
    conservationAreas: ['Mayfair', 'Belgravia', 'Marylebone', 'St John\'s Wood', 'Bayswater', 'Pimlico'],
    planningAuthority: {
      name: 'Westminster City Council Planning',
      website: 'https://www.westminster.gov.uk/planning',
      phone: '020 7641 6000',
    },
    keyStats: [
      { label: 'Conservation Areas', value: '55+' },
      { label: 'Listed Buildings', value: '11,000+' },
      { label: 'Average Property Price', value: '£1.8m' },
      { label: 'Our Projects Completed', value: '85+' },
    ],
    popularServices: ['period-restoration', 'basement-conversion', 'smart-home', 'bespoke-joinery', 'luxury-bathroom'],
    testimonial: {
      quote: 'Working on our Grade II listed property in Marylebone required contractors who understood heritage requirements. The results are stunning and fully compliant.',
      author: 'Anon Client',
      area: 'Marylebone',
    },
  },
];

// Helper functions
export function getBorough(slug: string): Borough | undefined {
  return boroughs.find(b => b.slug === slug);
}

export function getBoroughByArea(areaName: string): Borough | undefined {
  return boroughs.find(b => 
    b.areas.some(a => a.toLowerCase() === areaName.toLowerCase())
  );
}

export function getBoroughByPostcode(postcode: string): Borough | undefined {
  const postcodePrefix = postcode.split(' ')[0].toUpperCase();
  return boroughs.find(b => b.postcodes.includes(postcodePrefix));
}

export function generateBoroughParams(): { borough: string }[] {
  return boroughs.map(b => ({ borough: b.slug }));
}

export function countBoroughPages(): number {
  return boroughs.length;
}
