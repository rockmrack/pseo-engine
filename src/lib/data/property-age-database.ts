// ============================================================================
// PROPERTY AGE DATABASE
// "[Service] for [Property Age/Style] homes" - Era-specific content
// ============================================================================

export interface PropertyEra {
  slug: string;
  name: string;
  yearRange: string;
  yearStart: number;
  yearEnd: number;
  description: string;
  characteristics: string[];
  commonIssues: string[];
  heatingConsiderations: string[];
  plumbingConsiderations: string[];
  electricalConsiderations: string[];
  typicalMaterials: string[];
  prevalentInAreas: string[];
}

export interface PropertyStyle {
  slug: string;
  name: string;
  description: string;
  commonEras: string[];
  characteristics: string[];
  renovationConsiderations: string[];
}

export interface ServiceForPropertyType {
  serviceSlug: string;
  serviceName: string;
  propertySlug: string;
  title: string;
  description: string;
  specificChallenges: string[];
  ourApproach: string[];
  typicalCost: string;
  timeframe: string;
  faqs: { question: string; answer: string }[];
}

export const propertyEras: PropertyEra[] = [
  {
    slug: 'victorian',
    name: 'Victorian',
    yearRange: '1837-1901',
    yearStart: 1837,
    yearEnd: 1901,
    description: 'Victorian properties are known for their character, high ceilings, and ornate features. They present unique challenges for modern heating and plumbing installations.',
    characteristics: [
      'High ceilings (3m+)',
      'Solid brick walls',
      'Original fireplaces',
      'Sash windows',
      'Ornate cornicing and ceiling roses',
      'Cellar or basement',
      'Timber floors',
    ],
    commonIssues: [
      'Poor insulation',
      'Outdated lead pipework',
      'Damp and condensation',
      'Original electrical wiring',
      'Chimney issues',
    ],
    heatingConsiderations: [
      'Heat loss through high ceilings and solid walls',
      'Radiator sizing needs to account for room volume',
      'Pipework routing around period features',
      'Boiler positioning can be challenging',
      'UFH may require floor level changes',
    ],
    plumbingConsiderations: [
      'Lead pipe replacement often needed',
      'Old iron waste pipes may need updating',
      'Limited access in solid floors',
      'Original clay drainage',
    ],
    electricalConsiderations: [
      'Rewiring usually required',
      'Careful chasing around cornices',
      'Limited socket positions originally',
      'May have rubber-insulated cables',
    ],
    typicalMaterials: [
      'London stock brick',
      'Lime mortar',
      'Timber joists',
      'Slate roof',
      'Cast iron rainwater goods',
    ],
    prevalentInAreas: ['hampstead', 'islington', 'crouch-end', 'highgate'],
  },
  {
    slug: 'edwardian',
    name: 'Edwardian',
    yearRange: '1901-1910',
    yearStart: 1901,
    yearEnd: 1910,
    description: 'Edwardian homes typically have wider rooms, larger windows, and simpler decorative details than Victorian properties.',
    characteristics: [
      'Wider hallways and rooms',
      'Large bay windows',
      'Simpler decorative details',
      'Indoor bathrooms (some)',
      'Gardens front and rear',
      'Red brick common',
    ],
    commonIssues: [
      'Aging roof structure',
      'Original cast iron plumbing',
      'Outdated gas supplies',
      'Single skin external walls',
    ],
    heatingConsiderations: [
      'Good ceiling height (2.7-3m)',
      'Better insulation than Victorian',
      'Original chimney flues useful for boiler flues',
      'Good radiator positioning options',
    ],
    plumbingConsiderations: [
      'Often has cold water tank in loft',
      'May have original bathroom upstairs',
      'Cast iron drainage common',
    ],
    electricalConsiderations: [
      'May have early 20th century additions',
      'Rewiring often needed',
      'Better access than Victorian',
    ],
    typicalMaterials: [
      'Red brick',
      'Timber floors',
      'Slate or tile roof',
      'Cast iron guttering',
    ],
    prevalentInAreas: ['muswell-hill', 'crouch-end', 'belsize-park', 'hampstead'],
  },
  {
    slug: 'interwar',
    name: '1920s-1930s Inter-War',
    yearRange: '1918-1939',
    yearStart: 1918,
    yearEnd: 1939,
    description: 'Inter-war homes brought suburban expansion with semi-detached houses, garages, and early central heating provisions.',
    characteristics: [
      'Semi-detached common',
      'Bay windows',
      'Built-in garage',
      'Mock Tudor details',
      'Garden suburbs',
      'Cavity walls (some)',
    ],
    commonIssues: [
      'Early cavity wall problems',
      'Flat roof extensions',
      'Original Bakelite electrics',
      'Asbestos in some materials',
    ],
    heatingConsiderations: [
      'Some designed for central heating',
      'Cavity walls allow insulation',
      'Standard ceiling heights',
      'Good radiator positioning',
    ],
    plumbingConsiderations: [
      'Early copper pipework',
      'Lead supply common',
      'Galvanised storage tanks',
    ],
    electricalConsiderations: [
      'Early ring main in some',
      'Bakelite switches and sockets',
      'Often updated post-war',
    ],
    typicalMaterials: [
      'Brick with pebbledash',
      'Concrete roof tiles',
      'Early cavity walls',
      'Timber windows',
    ],
    prevalentInAreas: ['finchley', 'barnet', 'muswell-hill'],
  },
  {
    slug: 'post-war',
    name: '1940s-1960s Post-War',
    yearRange: '1945-1969',
    yearStart: 1945,
    yearEnd: 1969,
    description: 'Post-war housing addressed shortages with practical designs, council housing, and early system-built construction.',
    characteristics: [
      'Practical layouts',
      'Lower ceilings',
      'Council housing estates',
      'System-built homes',
      'Metal windows',
      'Smaller rooms',
    ],
    commonIssues: [
      'Concrete construction issues',
      'Flat roof leaks',
      'Single glazing',
      'Poor insulation',
      'Some prefab structures',
    ],
    heatingConsiderations: [
      'Often back boiler in fireplace',
      'Easy to upgrade heating',
      'Standard pipe runs',
      'May have early CH',
    ],
    plumbingConsiderations: [
      'Copper becoming standard',
      'Still some lead supply',
      'Simple layouts',
    ],
    electricalConsiderations: [
      'Ring main circuits',
      'May need consumer unit upgrade',
      'Generally straightforward',
    ],
    typicalMaterials: [
      'Brick or concrete',
      'Metal windows (Crittall)',
      'Flat roofs (some)',
      'Concrete tiles',
    ],
    prevalentInAreas: ['kentish-town', 'camden', 'islington'],
  },
  {
    slug: 'seventies-eighties',
    name: '1970s-1980s',
    yearRange: '1970-1989',
    yearStart: 1970,
    yearEnd: 1989,
    description: 'Homes from this era feature larger garages, en-suites, and early double glazing, but may have dated heating systems.',
    characteristics: [
      'Integral garages',
      'En-suite bathrooms',
      'Open plan spaces',
      'Double glazing (some)',
      'Central heating standard',
      'Built-in wardrobes',
    ],
    commonIssues: [
      'Dated boilers need replacing',
      'Polybutylene pipework (some)',
      'Artex ceilings',
      'Single glazing still common',
    ],
    heatingConsiderations: [
      'Often oversized old boilers',
      'Microbore pipework common',
      'Easy boiler replacement',
      'Good for modern combi',
    ],
    plumbingConsiderations: [
      'Copper or polybutylene',
      'Push-fit fittings possible',
      'Modern waste systems',
    ],
    electricalConsiderations: [
      'Modern enough ring mains',
      'Consumer unit upgrades needed',
      'May need more sockets',
    ],
    typicalMaterials: [
      'Brick or block',
      'Concrete interlocking tiles',
      'UPVC or aluminum windows',
    ],
    prevalentInAreas: ['barnet', 'finchley', 'north-london'],
  },
  {
    slug: 'nineties-modern',
    name: '1990s-Present',
    yearRange: '1990-Present',
    yearStart: 1990,
    yearEnd: 2024,
    description: 'Modern homes built to higher insulation standards with efficient heating systems but may have builder-grade installations.',
    characteristics: [
      'Building regulations compliant',
      'Double glazing standard',
      'Cavity wall insulation',
      'Efficient boilers',
      'En-suites common',
      'Open plan living',
    ],
    commonIssues: [
      'Builder-grade boilers need replacing',
      'Poor workmanship sometimes',
      'Limited character',
      'Plastic push-fit plumbing',
    ],
    heatingConsiderations: [
      'Usually combi boiler',
      'Good insulation levels',
      'Easy like-for-like replacement',
      'Heat pump suitable',
    ],
    plumbingConsiderations: [
      'Plastic pipework standard',
      'Push-fit connections',
      'Modern drainage',
    ],
    electricalConsiderations: [
      'Part P compliant',
      'Modern consumer units',
      'Generally good standard',
    ],
    typicalMaterials: [
      'Brick and block',
      'UPVC windows',
      'Concrete tiles',
      'Modern membranes',
    ],
    prevalentInAreas: ['all areas'],
  },
];

export const propertyStyles: PropertyStyle[] = [
  {
    slug: 'terraced',
    name: 'Terraced House',
    description: 'Joined houses sharing side walls, common in urban areas.',
    commonEras: ['victorian', 'edwardian', 'interwar', 'post-war'],
    characteristics: [
      'Shared party walls',
      'Front and rear access',
      'Narrow but deep',
      'Multiple floors',
    ],
    renovationConsiderations: [
      'Party wall agreements may be needed',
      'Limited side access',
      'Scaffolding considerations',
      'Noise transfer to neighbours',
    ],
  },
  {
    slug: 'semi-detached',
    name: 'Semi-Detached House',
    description: 'Houses sharing one wall with a neighbour.',
    commonEras: ['interwar', 'post-war', 'seventies-eighties'],
    characteristics: [
      'Side access on one side',
      'Garden all around',
      'Garage often attached',
      'Two or three floors',
    ],
    renovationConsiderations: [
      'Party wall on one side',
      'Good access for works',
      'Easier pipe routing',
      'Expansion potential',
    ],
  },
  {
    slug: 'detached',
    name: 'Detached House',
    description: 'Standalone houses with no shared walls.',
    commonEras: ['all'],
    characteristics: [
      'No party walls',
      'Access all around',
      'Often larger plots',
      'Greater variety',
    ],
    renovationConsiderations: [
      'Maximum flexibility',
      'External works easier',
      'No party wall issues',
      'May be listed',
    ],
  },
  {
    slug: 'flat-purpose-built',
    name: 'Purpose-Built Flat',
    description: 'Apartments in buildings designed as flats.',
    commonEras: ['interwar', 'post-war', 'seventies-eighties', 'nineties-modern'],
    characteristics: [
      'Shared services',
      'Communal areas',
      'Management company',
      'Service charges',
    ],
    renovationConsiderations: [
      'Lease restrictions',
      'Freeholder permissions',
      'Communal boiler access',
      'Noise to neighbours',
    ],
  },
  {
    slug: 'flat-conversion',
    name: 'Converted Flat',
    description: 'Apartments created from converted houses.',
    commonEras: ['victorian', 'edwardian'],
    characteristics: [
      'Period features',
      'Varied layouts',
      'Shared entrance',
      'Individual boilers',
    ],
    renovationConsiderations: [
      'Complex pipe runs',
      'Shared drainage',
      'Listed building issues',
      'Lease restrictions',
    ],
  },
  {
    slug: 'maisonette',
    name: 'Maisonette',
    description: 'A flat on two levels with own entrance.',
    commonEras: ['victorian', 'edwardian', 'post-war'],
    characteristics: [
      'Two floors',
      'Own front door',
      'Stairs within property',
      'Mixed features',
    ],
    renovationConsiderations: [
      'Two floor heating design',
      'Staircase routing',
      'May have basement',
      'Access considerations',
    ],
  },
];

// Service combinations with property types
export const servicesForPropertyTypes: ServiceForPropertyType[] = [
  {
    serviceSlug: 'boiler-installation',
    serviceName: 'Boiler Installation',
    propertySlug: 'victorian',
    title: 'Boiler Installation in Victorian Homes',
    description: 'Expert boiler installation for Victorian properties, respecting period features while delivering modern efficiency.',
    specificChallenges: [
      'Finding suitable flue routes through solid walls',
      'Sizing radiators for high-ceiling rooms',
      'Routing pipework around cornices and features',
      'Dealing with limited cupboard space',
    ],
    ourApproach: [
      'Survey considers all period features',
      'Bespoke flue solutions',
      'Concealed pipework where possible',
      'Radiator sizing for actual room volumes',
    ],
    typicalCost: '£2,200 - £4,000',
    timeframe: '1-2 days installation',
    faqs: [
      {
        question: 'Will you need to damage original features?',
        answer: 'We plan routes to avoid original features. Any necessary work is restored to match existing details.',
      },
    ],
  },
  {
    serviceSlug: 'rewiring',
    serviceName: 'Full Rewire',
    propertySlug: 'victorian',
    title: 'Rewiring Victorian Properties',
    description: 'Sensitive rewiring of Victorian homes preserving original plaster and features.',
    specificChallenges: [
      'Working around decorative cornicing',
      'Routing through solid walls and floors',
      'Preserving original ceiling roses',
      'Accessing behind original panelling',
    ],
    ourApproach: [
      'Lift floorboards rather than chase walls',
      'Route under floors where possible',
      'Specialist cutting around features',
      'Restore all making good to match',
    ],
    typicalCost: '£4,000 - £8,000',
    timeframe: '4-7 days',
    faqs: [
      {
        question: 'Can you work around original features?',
        answer: 'Yes, we specialise in rewiring period properties with minimal impact on original features.',
      },
    ],
  },
  {
    serviceSlug: 'bathroom-renovation',
    serviceName: 'Bathroom Renovation',
    propertySlug: 'edwardian',
    title: 'Bathroom Renovation in Edwardian Homes',
    description: 'Create stunning bathrooms that complement Edwardian architecture and features.',
    specificChallenges: [
      'Working with original timber floors',
      'Matching period aesthetic',
      'Improving water pressure',
      'Routing waste through floors',
    ],
    ourApproach: [
      'Traditional and modern design options',
      'Strengthen floors for heavy baths',
      'Pressure boosting solutions',
      'Respect original proportions',
    ],
    typicalCost: '£8,000 - £15,000',
    timeframe: '2-3 weeks',
    faqs: [
      {
        question: 'Should I choose traditional or modern style?',
        answer: 'Either works beautifully. We can show examples of both approaches in similar properties.',
      },
    ],
  },
  {
    serviceSlug: 'central-heating',
    serviceName: 'Central Heating Installation',
    propertySlug: 'flat-conversion',
    title: 'Central Heating for Converted Flats',
    description: 'Installing efficient heating in converted flats with complex layouts and lease considerations.',
    specificChallenges: [
      'Complex pipe routing',
      'Flue positioning restrictions',
      'Lease and freeholder approvals',
      'Shared drainage considerations',
    ],
    ourApproach: [
      'Survey includes lease review',
      'Liaise with freeholders',
      'Creative flue solutions',
      'Minimise impact on shared areas',
    ],
    typicalCost: '£3,500 - £6,000',
    timeframe: '2-3 days',
    faqs: [
      {
        question: 'Do I need freeholder permission?',
        answer: 'Usually yes for boiler changes. We can prepare the documentation and drawings required.',
      },
    ],
  },
];

// Helper functions
export function getPropertyEra(slug: string): PropertyEra | undefined {
  return propertyEras.find(e => e.slug === slug);
}

export function getPropertyStyle(slug: string): PropertyStyle | undefined {
  return propertyStyles.find(s => s.slug === slug);
}

export function getPropertyEraByYear(year: number): PropertyEra | undefined {
  return propertyEras.find(e => year >= e.yearStart && year <= e.yearEnd);
}

export function getServiceForPropertyType(serviceSlug: string, propertySlug: string): ServiceForPropertyType | undefined {
  return servicesForPropertyTypes.find(
    s => s.serviceSlug === serviceSlug && s.propertySlug === propertySlug
  );
}

export function getServicesForProperty(propertySlug: string): ServiceForPropertyType[] {
  return servicesForPropertyTypes.filter(s => s.propertySlug === propertySlug);
}

export function generatePropertyEraParams(): { era: string }[] {
  return propertyEras.map(e => ({ era: e.slug }));
}

export function generatePropertyEraServiceParams(): { service: string; property: string }[] {
  const params: { service: string; property: string }[] = [];
  
  // Generate combinations of services and property types
  const services = ['boiler-installation', 'rewiring', 'bathroom-renovation', 'central-heating', 'plumbing'];
  
  for (const service of services) {
    for (const era of propertyEras) {
      params.push({ service, property: era.slug });
    }
    for (const style of propertyStyles) {
      params.push({ service, property: style.slug });
    }
  }
  
  return params;
}

export function countPropertyPages(): number {
  // Era pages + Style pages + Service combinations
  return propertyEras.length + propertyStyles.length + generatePropertyEraServiceParams().length;
}
