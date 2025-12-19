// ============================================================================
// SERVICE AREA DATA
// Hub pages for geographic regions (postcodes, boroughs, areas)
// ============================================================================

export interface ServiceArea {
  slug: string;
  name: string;
  type: 'postcode' | 'borough' | 'region';
  description: string;
  locations: string[]; // slugs of locations in this area
  popularServices: string[]; // slugs of popular services
  coverImage?: string;
}

export const serviceAreas: ServiceArea[] = [
  // Postcode Areas
  {
    slug: 'nw3',
    name: 'NW3 - Hampstead & Swiss Cottage',
    type: 'postcode',
    description: 'Covering Hampstead, Swiss Cottage, Belsize Park, and Primrose Hill. Home to stunning Victorian and Edwardian properties requiring specialist renovation expertise.',
    locations: ['hampstead', 'swiss-cottage', 'belsize-park', 'primrose-hill', 'hampstead-heath', 'south-hampstead'],
    popularServices: ['boiler-repair', 'bathroom-installation', 'kitchen-fitting', 'period-restoration'],
  },
  {
    slug: 'nw6',
    name: 'NW6 - Kilburn & West Hampstead',
    type: 'postcode',
    description: 'Serving Kilburn, West Hampstead, and Queens Park with professional home renovation services for period conversions and modern apartments.',
    locations: ['kilburn', 'west-hampstead', 'queens-park', 'brondesbury'],
    popularServices: ['boiler-service', 'electrical-rewiring', 'plastering', 'flooring'],
  },
  {
    slug: 'nw5',
    name: 'NW5 - Kentish Town & Tufnell Park',
    type: 'postcode',
    description: 'Expert tradesmen covering Kentish Town, Tufnell Park, and Gospel Oak. Specialists in Victorian terrace renovations.',
    locations: ['kentish-town', 'tufnell-park', 'gospel-oak', 'dartmouth-park'],
    popularServices: ['plumbing', 'central-heating', 'damp-proofing', 'roofing'],
  },
  {
    slug: 'nw1',
    name: 'NW1 - Camden & Regents Park',
    type: 'postcode',
    description: 'Premium renovation services in Camden Town, Regents Park, and Euston. From Georgian townhouses to modern loft conversions.',
    locations: ['camden-town', 'regents-park', 'euston', 'somers-town'],
    popularServices: ['loft-conversion', 'extension-building', 'kitchen-fitting', 'bathroom-installation'],
  },
  {
    slug: 'n6',
    name: 'N6 - Highgate',
    type: 'postcode',
    description: 'Luxury home services in Highgate Village and surrounding areas. Specialists in listed building work and heritage properties.',
    locations: ['highgate', 'highgate-village', 'archway'],
    popularServices: ['period-restoration', 'sash-window-repair', 'chimney-repair', 'garden-landscaping'],
  },
  {
    slug: 'n2',
    name: 'N2 - East Finchley',
    type: 'postcode',
    description: 'Trusted tradesmen serving East Finchley and Fortis Green. Quality workmanship for 1930s semis and period homes.',
    locations: ['east-finchley', 'fortis-green', 'cherry-tree-wood'],
    popularServices: ['boiler-installation', 'central-heating', 'double-glazing', 'insulation'],
  },
  {
    slug: 'n10',
    name: 'N10 - Muswell Hill',
    type: 'postcode',
    description: 'Home renovation experts in Muswell Hill and Alexandra Park. Edwardian property specialists.',
    locations: ['muswell-hill', 'alexandra-park', 'cranley-gardens'],
    popularServices: ['kitchen-fitting', 'bathroom-installation', 'electrical-rewiring', 'decorating'],
  },
  {
    slug: 'n8',
    name: 'N8 - Crouch End & Hornsey',
    type: 'postcode',
    description: 'Professional home services across Crouch End, Hornsey, and Stroud Green. Victorian terrace renovation experts.',
    locations: ['crouch-end', 'hornsey', 'stroud-green'],
    popularServices: ['extension-building', 'loft-conversion', 'underfloor-heating', 'smart-home'],
  },

  // Borough/Region Areas
  {
    slug: 'north-london',
    name: 'North London',
    type: 'region',
    description: 'Comprehensive home renovation and maintenance services across ALL of North London. From emergency plumbing to complete property renovations, our trusted tradesmen cover every area north of the Thames including Hampstead, Highgate, Muswell Hill, Crouch End, Islington, Stoke Newington, Wood Green, Tottenham and beyond.',
    locations: ['hampstead', 'highgate', 'muswell-hill', 'crouch-end', 'islington', 'camden-town', 'kentish-town', 'finsbury-park', 'stoke-newington', 'tottenham', 'wood-green', 'palmers-green', 'winchmore-hill', 'southgate'],
    popularServices: ['boiler-repair', 'plumbing', 'electrical-rewiring', 'kitchen-fitting', 'bathroom-installation', 'loft-conversion'],
  },
  {
    slug: 'north-west-london',
    name: 'North West London',
    type: 'region',
    description: 'Premium home renovation services across North West London covering all NW postcodes from NW1 to NW11. Victorian and Edwardian property specialists serving Hampstead, Swiss Cottage, St Johns Wood, West Hampstead, Kilburn, Golders Green, Mill Hill, Hendon, and all surrounding areas.',
    locations: ['hampstead', 'swiss-cottage', 'st-johns-wood', 'west-hampstead', 'kilburn', 'golders-green', 'mill-hill', 'hendon', 'cricklewood', 'willesden', 'colindale'],
    popularServices: ['period-restoration', 'bathroom-installation', 'kitchen-fitting', 'boiler-service', 'loft-conversion', 'extension-building'],
  },
  {
    slug: 'camden',
    name: 'London Borough of Camden',
    type: 'borough',
    description: 'Official service coverage for the London Borough of Camden. Expert local tradesmen familiar with Camden planning requirements and heritage properties. Covering Hampstead, Belsize Park, Primrose Hill, Camden Town, Kentish Town, Gospel Oak, Swiss Cottage and all NW1, NW3, NW5, NW6 areas.',
    locations: ['camden-town', 'hampstead', 'belsize-park', 'kentish-town', 'gospel-oak', 'swiss-cottage', 'primrose-hill', 'kilburn', 'west-hampstead', 'south-hampstead'],
    popularServices: ['period-restoration', 'bathroom-installation', 'kitchen-fitting', 'boiler-service'],
  },
  {
    slug: 'haringey',
    name: 'London Borough of Haringey',
    type: 'borough',
    description: 'Full coverage across Haringey including Crouch End, Muswell Hill, Hornsey, Wood Green, Tottenham, and Alexandra Palace. Local experts in Edwardian and Victorian renovations.',
    locations: ['crouch-end', 'muswell-hill', 'hornsey', 'wood-green', 'tottenham', 'stroud-green', 'harringay', 'seven-sisters', 'alexandra-palace'],
    popularServices: ['loft-conversion', 'extension-building', 'central-heating', 'roofing'],
  },
  {
    slug: 'islington',
    name: 'London Borough of Islington',
    type: 'borough',
    description: 'Serving all of Islington from Angel to Highbury. Georgian and Victorian property specialists with extensive local experience. Covering N1, N4, N5, N7, N19.',
    locations: ['islington', 'angel', 'highbury', 'holloway', 'finsbury-park', 'archway', 'tufnell-park', 'barnsbury', 'canonbury'],
    popularServices: ['sash-window-repair', 'period-restoration', 'bathroom-installation', 'kitchen-fitting'],
  },
  {
    slug: 'barnet',
    name: 'London Borough of Barnet',
    type: 'borough',
    description: 'Professional home services across Barnet including Finchley, Golders Green, Hendon, Mill Hill, Whetstone, and Totteridge. Experts in 1930s and inter-war property renovations. Covering N2, N3, N11, N12, N20, NW4, NW7, NW11.',
    locations: ['finchley', 'golders-green', 'hendon', 'mill-hill', 'east-finchley', 'north-finchley', 'whetstone', 'totteridge', 'friern-barnet', 'new-southgate'],
    popularServices: ['boiler-installation', 'double-glazing', 'driveway-paving', 'garden-landscaping'],
  },
  {
    slug: 'enfield',
    name: 'London Borough of Enfield',
    type: 'borough',
    description: 'Home renovation services across Enfield including Palmers Green, Southgate, Winchmore Hill, Edmonton, and Cockfosters. Family home specialists covering N9, N13, N14, N18, N21.',
    locations: ['palmers-green', 'southgate', 'winchmore-hill', 'edmonton', 'cockfosters', 'oakwood', 'grange-park', 'bush-hill-park'],
    popularServices: ['extension-building', 'kitchen-fitting', 'central-heating', 'bathroom-installation'],
  },
  {
    slug: 'hackney',
    name: 'London Borough of Hackney',
    type: 'borough',
    description: 'Expert home services in Hackney including trendy Stoke Newington, Dalston, and Hackney Central. Victorian terrace and warehouse conversion specialists. Covering N16, E5, E8.',
    locations: ['stoke-newington', 'dalston', 'hackney', 'stamford-hill', 'shacklewell'],
    popularServices: ['loft-conversion', 'kitchen-fitting', 'period-restoration', 'garden-landscaping'],
  },
  {
    slug: 'brent',
    name: 'London Borough of Brent',
    type: 'borough',
    description: 'Home renovation coverage across Brent including Willesden, Kilburn, Kensal Rise, and Cricklewood. Victorian and Edwardian property experts. Covering NW2, NW6, NW10.',
    locations: ['willesden', 'kilburn', 'kensal-rise', 'cricklewood', 'harlesden', 'queens-park', 'brondesbury'],
    popularServices: ['electrical-rewiring', 'bathroom-installation', 'plastering', 'damp-proofing'],
  },
];

// Index for O(1) lookup
const areaIndex = new Map<string, ServiceArea>();
serviceAreas.forEach(area => areaIndex.set(area.slug, area));

export function getServiceArea(slug: string): ServiceArea | undefined {
  return areaIndex.get(slug);
}

export const allAreaSlugs = serviceAreas.map(a => a.slug);

