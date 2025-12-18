// ============================================================================
// PSEO ENGINE - POSTCODE CLUSTER DATA
// Comprehensive postcode area landing pages
// ============================================================================

export interface PostcodeCluster {
  slug: string;
  postcode: string;
  name: string;
  areas: string[];
  borough: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  popularServices: string[];
  propertyTypes: string[];
  avgPropertyValue: string;
  keyStats: {
    population: string;
    households: string;
    avgPrice: string;
  };
}

export const postcodeClusters: PostcodeCluster[] = [
  {
    slug: 'nw3',
    postcode: 'NW3',
    name: 'NW3 - Hampstead, Swiss Cottage & Belsize Park',
    areas: ['Hampstead', 'Swiss Cottage', 'Belsize Park', 'Primrose Hill', 'South Hampstead'],
    borough: 'Camden',
    description: 'NW3 covers some of London\'s most prestigious addresses including Hampstead, Swiss Cottage, and Belsize Park. Home to stunning Victorian and Edwardian properties, Hampstead Heath, and a vibrant village atmosphere.',
    metaTitle: 'Home Services NW3 | Plumbers & Builders Hampstead | Hampstead Renovations',
    metaDescription: 'Expert home renovation services across NW3 - Hampstead, Swiss Cottage, Belsize Park. Specialist Victorian property plumbers, electricians & builders. Call 07459 345456.',
    popularServices: ['boiler-repair', 'bathroom-installation', 'kitchen-fitting', 'electrical-rewiring', 'sash-window-repair'],
    propertyTypes: ['Victorian terraces', 'Edwardian houses', 'Mansion blocks', 'Period conversions'],
    avgPropertyValue: '£1.5m - £15m',
    keyStats: {
      population: '~45,000',
      households: '~20,000',
      avgPrice: '£1.2 million',
    },
  },
  {
    slug: 'nw6',
    postcode: 'NW6',
    name: 'NW6 - West Hampstead, Kilburn & Queens Park',
    areas: ['West Hampstead', 'Kilburn', 'Queens Park', 'Brondesbury', 'Brondesbury Park'],
    borough: 'Camden / Brent',
    description: 'NW6 offers excellent transport links with three West Hampstead stations and a mix of Victorian terraces and modern apartments. Popular with young professionals and families.',
    metaTitle: 'Home Services NW6 | West Hampstead Plumbers & Electricians | Hampstead Renovations',
    metaDescription: 'Professional home renovation services in NW6 - West Hampstead, Kilburn, Queens Park. Victorian terrace specialists. Fast response. Call 07459 345456.',
    popularServices: ['boiler-service', 'bathroom-installation', 'plastering', 'flooring', 'decorating'],
    propertyTypes: ['Victorian terraces', 'Converted flats', 'Purpose-built apartments', 'Edwardian semis'],
    avgPropertyValue: '£600k - £2m',
    keyStats: {
      population: '~35,000',
      households: '~15,000',
      avgPrice: '£750,000',
    },
  },
  {
    slug: 'nw5',
    postcode: 'NW5',
    name: 'NW5 - Kentish Town, Tufnell Park & Gospel Oak',
    areas: ['Kentish Town', 'Tufnell Park', 'Gospel Oak', 'Dartmouth Park'],
    borough: 'Camden',
    description: 'NW5 is a diverse area with excellent Northern Line connections, Victorian housing stock, and easy access to Hampstead Heath. A neighbourhood in transition with increasing investment.',
    metaTitle: 'Home Services NW5 | Kentish Town Plumbers | Hampstead Renovations',
    metaDescription: 'Expert plumbers, electricians and builders serving NW5 - Kentish Town, Tufnell Park, Gospel Oak. Victorian property specialists. Call 07459 345456.',
    popularServices: ['boiler-repair', 'central-heating', 'bathroom-installation', 'electrical-rewiring', 'damp-proofing'],
    propertyTypes: ['Victorian terraces', 'Converted flats', 'Council housing', 'New developments'],
    avgPropertyValue: '£500k - £1.5m',
    keyStats: {
      population: '~30,000',
      households: '~12,000',
      avgPrice: '£700,000',
    },
  },
  {
    slug: 'nw1',
    postcode: 'NW1',
    name: 'NW1 - Camden Town & Regents Park',
    areas: ['Camden Town', 'Regents Park', 'Primrose Hill', 'Euston', 'Somers Town'],
    borough: 'Camden',
    description: 'NW1 is a vibrant area encompassing Camden\'s famous markets, elegant Regent\'s Park, and the sought-after Primrose Hill. Mix of Georgian townhouses and modern developments.',
    metaTitle: 'Home Services NW1 | Camden Town Builders & Plumbers | Hampstead Renovations',
    metaDescription: 'Premium home renovation services in NW1 - Camden Town, Regents Park, Primrose Hill. Georgian property experts. Free quotes. Call 07459 345456.',
    popularServices: ['loft-conversion', 'extension-building', 'kitchen-fitting', 'bathroom-installation', 'smart-home'],
    propertyTypes: ['Georgian townhouses', 'Victorian terraces', 'Canal-side apartments', 'Modern developments'],
    avgPropertyValue: '£600k - £5m',
    keyStats: {
      population: '~40,000',
      households: '~18,000',
      avgPrice: '£850,000',
    },
  },
  {
    slug: 'nw8',
    postcode: 'NW8',
    name: 'NW8 - St John\'s Wood & Maida Vale',
    areas: ['St John\'s Wood', 'Maida Vale', 'Little Venice'],
    borough: 'Westminster',
    description: 'NW8 is one of London\'s most exclusive areas, home to Abbey Road Studios, Lord\'s Cricket Ground, and tree-lined streets of grand villas. Popular with international families and celebrities.',
    metaTitle: 'Home Services NW8 | St John\'s Wood Luxury Renovations | Hampstead Renovations',
    metaDescription: 'Luxury home renovation services in NW8 - St John\'s Wood, Maida Vale. High-end plumbing, electrical & building work. Call 07459 345456.',
    popularServices: ['bathroom-installation', 'kitchen-fitting', 'smart-home-installation', 'air-conditioning', 'security-systems'],
    propertyTypes: ['Detached villas', 'Mansion blocks', 'Mews houses', 'Modern apartments'],
    avgPropertyValue: '£1m - £20m',
    keyStats: {
      population: '~25,000',
      households: '~12,000',
      avgPrice: '£1.5 million',
    },
  },
  {
    slug: 'n6',
    postcode: 'N6',
    name: 'N6 - Highgate',
    areas: ['Highgate', 'Highgate Village', 'Highgate Hill'],
    borough: 'Haringey / Camden',
    description: 'N6 covers the historic Highgate area, famous for Highgate Cemetery, Waterlow Park, and a charming village centre. Georgian and Victorian properties predominate on the hillside setting.',
    metaTitle: 'Home Services N6 | Highgate Plumbers & Builders | Hampstead Renovations',
    metaDescription: 'Professional home services in N6 Highgate. Period property specialists covering plumbing, electrical, and building work. Call 07459 345456.',
    popularServices: ['boiler-repair', 'central-heating', 'damp-proofing', 'chimney-repair', 'period-restoration'],
    propertyTypes: ['Georgian houses', 'Victorian villas', 'Edwardian semis', 'Converted flats'],
    avgPropertyValue: '£800k - £5m',
    keyStats: {
      population: '~15,000',
      households: '~6,000',
      avgPrice: '£1.1 million',
    },
  },
  {
    slug: 'n8',
    postcode: 'N8',
    name: 'N8 - Crouch End & Hornsey',
    areas: ['Crouch End', 'Hornsey', 'Stroud Green'],
    borough: 'Haringey',
    description: 'N8 is a family-friendly area centered on Crouch End\'s thriving Broadway. Victorian terraces line leafy streets, and there\'s a strong community and creative scene.',
    metaTitle: 'Home Services N8 | Crouch End Plumbers | Hampstead Renovations',
    metaDescription: 'Expert home renovation services in N8 - Crouch End, Hornsey. Victorian terrace specialists, extensions, loft conversions. Call 07459 345456.',
    popularServices: ['loft-conversion', 'extension-building', 'kitchen-fitting', 'bathroom-installation', 'underfloor-heating'],
    propertyTypes: ['Victorian terraces', 'Edwardian houses', 'Converted flats', 'Purpose-built apartments'],
    avgPropertyValue: '£600k - £2m',
    keyStats: {
      population: '~30,000',
      households: '~13,000',
      avgPrice: '£900,000',
    },
  },
  {
    slug: 'n10',
    postcode: 'N10',
    name: 'N10 - Muswell Hill',
    areas: ['Muswell Hill', 'Alexandra Park', 'Colney Hatch'],
    borough: 'Haringey',
    description: 'N10 is centered on Muswell Hill Broadway with its independent shops and Everyman Cinema. Stunning Edwardian housing stock with views towards Alexandra Palace.',
    metaTitle: 'Home Services N10 | Muswell Hill Builders | Hampstead Renovations',
    metaDescription: 'Professional home services in N10 Muswell Hill. Edwardian property specialists. Loft conversions, kitchens, bathrooms. Call 07459 345456.',
    popularServices: ['loft-conversion', 'extension-building', 'kitchen-fitting', 'boiler-installation', 'central-heating'],
    propertyTypes: ['Edwardian houses', 'Victorian terraces', '1930s semis', 'Purpose-built flats'],
    avgPropertyValue: '£600k - £2m',
    keyStats: {
      population: '~20,000',
      households: '~8,000',
      avgPrice: '£850,000',
    },
  },
  {
    slug: 'n2',
    postcode: 'N2',
    name: 'N2 - East Finchley',
    areas: ['East Finchley', 'Fortis Green', 'Cherry Tree Wood'],
    borough: 'Barnet',
    description: 'N2 covers East Finchley with its Art Deco tube station and mix of 1930s semis and Victorian properties. Good schools and access to Highgate Wood make it popular with families.',
    metaTitle: 'Home Services N2 | East Finchley Plumbers | Hampstead Renovations',
    metaDescription: 'Home renovation services in N2 East Finchley. Boiler installation, central heating, bathrooms, kitchens. Local experts. Call 07459 345456.',
    popularServices: ['boiler-installation', 'central-heating', 'double-glazing', 'insulation', 'bathroom-installation'],
    propertyTypes: ['1930s semis', 'Victorian terraces', 'Edwardian houses', 'Purpose-built flats'],
    avgPropertyValue: '£500k - £1.5m',
    keyStats: {
      population: '~18,000',
      households: '~7,500',
      avgPrice: '£750,000',
    },
  },
  {
    slug: 'n1',
    postcode: 'N1',
    name: 'N1 - Islington & Angel',
    areas: ['Islington', 'Angel', 'Highbury', 'Barnsbury', 'Canonbury'],
    borough: 'Islington',
    description: 'N1 encompasses fashionable Islington with its Georgian squares, trendy Upper Street, and the Angel area. A mix of Georgian townhouses and Victorian terraces.',
    metaTitle: 'Home Services N1 | Islington Plumbers & Builders | Hampstead Renovations',
    metaDescription: 'Expert home renovation services in N1 Islington. Georgian property specialists, sash windows, period restoration. Call 07459 345456.',
    popularServices: ['sash-window-repair', 'period-restoration', 'bathroom-installation', 'kitchen-fitting', 'electrical-rewiring'],
    propertyTypes: ['Georgian townhouses', 'Victorian terraces', 'Period conversions', 'New developments'],
    avgPropertyValue: '£600k - £4m',
    keyStats: {
      population: '~50,000',
      households: '~25,000',
      avgPrice: '£900,000',
    },
  },
  {
    slug: 'n19',
    postcode: 'N19',
    name: 'N19 - Archway & Upper Holloway',
    areas: ['Archway', 'Upper Holloway', 'Tufnell Park'],
    borough: 'Islington',
    description: 'N19 covers Archway and Upper Holloway, offering Victorian terraces and excellent Northern Line connections. More affordable than nearby areas but gentrifying rapidly.',
    metaTitle: 'Home Services N19 | Archway Plumbers | Hampstead Renovations',
    metaDescription: 'Home renovation services in N19 Archway & Holloway. Plumbing, electrical, building work. Victorian property experts. Call 07459 345456.',
    popularServices: ['boiler-repair', 'central-heating', 'bathroom-installation', 'electrical-rewiring', 'plastering'],
    propertyTypes: ['Victorian terraces', 'Converted flats', 'Purpose-built apartments', 'New developments'],
    avgPropertyValue: '£400k - £1.2m',
    keyStats: {
      population: '~25,000',
      households: '~11,000',
      avgPrice: '£600,000',
    },
  },
  {
    slug: 'nw11',
    postcode: 'NW11',
    name: 'NW11 - Golders Green & Hampstead Garden Suburb',
    areas: ['Golders Green', 'Hampstead Garden Suburb', 'Childs Hill'],
    borough: 'Barnet',
    description: 'NW11 includes the architecturally significant Hampstead Garden Suburb and busy Golders Green. Mix of Arts & Crafts houses and suburban family homes.',
    metaTitle: 'Home Services NW11 | Golders Green Builders | Hampstead Renovations',
    metaDescription: 'Professional home services in NW11 Golders Green & Hampstead Garden Suburb. Conservation area specialists. Call 07459 345456.',
    popularServices: ['period-restoration', 'extension-building', 'kitchen-fitting', 'boiler-installation', 'garden-landscaping'],
    propertyTypes: ['Arts & Crafts houses', 'Edwardian semis', 'Detached family homes', 'Purpose-built flats'],
    avgPropertyValue: '£700k - £3m',
    keyStats: {
      population: '~22,000',
      households: '~9,000',
      avgPrice: '£1 million',
    },
  },
];

// Helper functions
export function getPostcodeCluster(slug: string): PostcodeCluster | undefined {
  return postcodeClusters.find(p => p.slug === slug);
}

export function getAllPostcodeSlugs(): string[] {
  return postcodeClusters.map(p => p.slug);
}
