// ============================================================================
// BEFORE & AFTER PROJECT DATABASE
// Gallery showcasing transformation projects by type and area
// ============================================================================

export interface BeforeAfterProject {
  slug: string;
  title: string;
  projectType: string;
  area: string;
  areaSlug: string;
  description: string;
  challenge: string;
  solution: string;
  duration: string;
  cost: string;
  beforeDescription: string;
  afterDescription: string;
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
}

export interface ProjectTypeInfo {
  slug: string;
  name: string;
  description: string;
  avgDuration: string;
  priceRange: string;
}

export const projectTypeInfos: ProjectTypeInfo[] = [
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    description: 'Complete bathroom transformations from dated spaces to modern sanctuaries',
    avgDuration: '2-4 weeks',
    priceRange: '£8,000 - £25,000',
  },
  {
    slug: 'kitchen-transformation',
    name: 'Kitchen Transformation',
    description: 'Kitchen redesigns and installations that transform the heart of your home',
    avgDuration: '3-6 weeks',
    priceRange: '£15,000 - £50,000',
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    description: 'Converting unused loft space into beautiful living areas',
    avgDuration: '8-12 weeks',
    priceRange: '£40,000 - £80,000',
  },
  {
    slug: 'extension-build',
    name: 'Extension Build',
    description: 'Home extensions that seamlessly blend with existing architecture',
    avgDuration: '10-16 weeks',
    priceRange: '£50,000 - £150,000',
  },
  {
    slug: 'period-restoration',
    name: 'Period Restoration',
    description: 'Sympathetic restoration of Victorian, Edwardian and Georgian properties',
    avgDuration: '4-12 weeks',
    priceRange: '£20,000 - £100,000',
  },
  {
    slug: 'whole-house-renovation',
    name: 'Whole House Renovation',
    description: 'Complete property transformations from top to bottom',
    avgDuration: '12-24 weeks',
    priceRange: '£80,000 - £300,000',
  },
  {
    slug: 'basement-conversion',
    name: 'Basement Conversion',
    description: 'Transforming basements into functional living spaces',
    avgDuration: '10-16 weeks',
    priceRange: '£100,000 - £250,000',
  },
  {
    slug: 'garden-landscaping',
    name: 'Garden Landscaping',
    description: 'Outdoor transformations creating beautiful garden spaces',
    avgDuration: '2-6 weeks',
    priceRange: '£10,000 - £50,000',
  },
];

export const beforeAfterProjects: BeforeAfterProject[] = [
  // Bathroom Renovations
  {
    slug: 'victorian-bathroom-hampstead-2024',
    title: 'Victorian Bathroom Revival in Hampstead',
    projectType: 'bathroom-renovation',
    area: 'Hampstead',
    areaSlug: 'hampstead',
    description: 'A stunning transformation of a dated 1970s bathroom back to period elegance with modern amenities.',
    challenge: 'The original bathroom had been poorly modernised in the 1970s, losing all period character. Plastic panels covered original features and inefficient plumbing caused constant issues.',
    solution: 'We carefully removed modern additions to reveal original Victorian features. A new cast iron roll-top bath, restored original floorboards, and bespoke Victorian-style tiles recreated the authentic period aesthetic while incorporating modern underfloor heating and a concealed cistern.',
    duration: '4 weeks',
    cost: '£18,500',
    beforeDescription: 'Dated 1970s bathroom with plastic panels, avocado suite, and damaged original features hidden beneath.',
    afterDescription: 'Elegant Victorian bathroom with roll-top bath, restored original flooring, period-appropriate tiles, and modern underfloor heating.',
    features: ['Roll-top cast iron bath', 'Underfloor heating', 'Victorian-style tiles', 'Restored original floorboards', 'Chrome period fixtures'],
    testimonial: {
      quote: 'They understood exactly what we wanted - a bathroom that looked like it had always been there, but with all modern comforts. The result exceeded our expectations.',
      author: 'James & Sarah M.',
      location: 'Hampstead',
    },
  },
  {
    slug: 'modern-ensuite-belsize-park',
    title: 'Contemporary En-Suite in Belsize Park',
    projectType: 'bathroom-renovation',
    area: 'Belsize Park',
    areaSlug: 'belsize-park',
    description: 'Converting a small boxroom into a luxurious en-suite bathroom for the master bedroom.',
    challenge: 'Limited space in a small boxroom with difficult access to plumbing and low ceilings in part of the room.',
    solution: 'Clever design maximised every inch with a walk-in rainfall shower, floating vanity unit, and strategic lighting. New plumbing was routed through a raised floor with underfloor heating.',
    duration: '3 weeks',
    cost: '£15,200',
    beforeDescription: 'Small unused boxroom with sloping ceiling and no plumbing access.',
    afterDescription: 'Sleek contemporary en-suite with walk-in shower, floating vanity, and mood lighting.',
    features: ['Walk-in rainfall shower', 'Floating vanity', 'Underfloor heating', 'LED mood lighting', 'Heated towel rail'],
  },
  {
    slug: 'family-bathroom-highgate',
    title: 'Family Bathroom Redesign in Highgate',
    projectType: 'bathroom-renovation',
    area: 'Highgate',
    areaSlug: 'highgate',
    description: 'Transforming a cramped family bathroom into a spacious, practical space for a busy household.',
    challenge: 'The existing bathroom was too small for a family of five, with inadequate storage and dated fittings.',
    solution: 'By removing an adjacent cupboard and reconfiguring the layout, we created a larger family bathroom with a full-size bath, separate shower enclosure, and ample storage.',
    duration: '5 weeks',
    cost: '£22,000',
    beforeDescription: 'Small, cramped bathroom with single sink, no storage, and dated avocado suite.',
    afterDescription: 'Spacious family bathroom with double sinks, large bath, walk-in shower, and built-in storage.',
    features: ['Double vanity unit', 'Freestanding bath', 'Walk-in shower', 'Built-in storage', 'Child-safe fixtures'],
    testimonial: {
      quote: 'Morning battles are a thing of the past! The double sinks and separate shower have transformed our morning routine.',
      author: 'The Patterson Family',
      location: 'Highgate',
    },
  },

  // Kitchen Transformations
  {
    slug: 'edwardian-kitchen-muswell-hill',
    title: 'Edwardian Kitchen Extension in Muswell Hill',
    projectType: 'kitchen-transformation',
    area: 'Muswell Hill',
    areaSlug: 'muswell-hill',
    description: 'A dark, cramped Edwardian kitchen transformed into a stunning open-plan family space.',
    challenge: 'The original kitchen was small, dark, and isolated from the rest of the house. The family wanted an open-plan space for cooking and entertaining.',
    solution: 'We removed internal walls, installed a steel beam, and added a rear extension with bi-fold doors. The result is a light-filled, open-plan kitchen-diner with island.',
    duration: '8 weeks',
    cost: '£65,000',
    beforeDescription: 'Dark, cramped galley kitchen separated from dining room with limited natural light.',
    afterDescription: 'Open-plan kitchen-diner with large island, bi-fold doors, and seamless indoor-outdoor flow.',
    features: ['Bi-fold doors', 'Central island with breakfast bar', 'Quartz worktops', 'Integrated appliances', 'Underfloor heating'],
    testimonial: {
      quote: 'Our new kitchen has changed how we live. It\'s now the heart of our home where everyone gathers.',
      author: 'Mark & Lisa T.',
      location: 'Muswell Hill',
    },
  },
  {
    slug: 'period-kitchen-swiss-cottage',
    title: 'Period Kitchen Restoration in Swiss Cottage',
    projectType: 'kitchen-transformation',
    area: 'Swiss Cottage',
    areaSlug: 'swiss-cottage',
    description: 'Restoring character to a Victorian kitchen while adding modern functionality.',
    challenge: 'Previous owners had installed a cheap modern kitchen that looked completely out of place in this Victorian property.',
    solution: 'We designed a bespoke Shaker-style kitchen with traditional details that complement the property\'s architecture while incorporating all modern conveniences.',
    duration: '5 weeks',
    cost: '£42,000',
    beforeDescription: 'Generic flat-pack kitchen with laminate worktops that clashed with Victorian architecture.',
    afterDescription: 'Bespoke Shaker kitchen with granite worktops, butler sink, and integrated modern appliances.',
    features: ['Bespoke Shaker cabinets', 'Granite worktops', 'Belfast sink', 'Range cooker', 'Original features restored'],
  },

  // Loft Conversions
  {
    slug: 'master-suite-crouch-end',
    title: 'Master Suite Loft Conversion in Crouch End',
    projectType: 'loft-conversion',
    area: 'Crouch End',
    areaSlug: 'crouch-end',
    description: 'Creating a luxurious master suite with en-suite and dressing area in the loft.',
    challenge: 'The family needed an extra bedroom without extending the property footprint. The existing loft had limited headroom.',
    solution: 'A dormer loft conversion provided sufficient headroom for a spacious master bedroom with en-suite shower room and walk-in wardrobe.',
    duration: '10 weeks',
    cost: '£58,000',
    beforeDescription: 'Unused loft space with exposed rafters and limited headroom.',
    afterDescription: 'Luxurious master suite with dormer, en-suite bathroom, and bespoke wardrobes.',
    features: ['Rear dormer', 'En-suite shower room', 'Walk-in wardrobe', 'Velux windows', 'Built-in storage'],
    testimonial: {
      quote: 'We gained an incredible master suite without having to move. It\'s like having a private retreat on the top floor.',
      author: 'David & Emma K.',
      location: 'Crouch End',
    },
  },
  {
    slug: 'home-office-loft-kentish-town',
    title: 'Home Office Loft in Kentish Town',
    projectType: 'loft-conversion',
    area: 'Kentish Town',
    areaSlug: 'kentish-town',
    description: 'Converting an empty loft into a bright, inspiring home office space.',
    challenge: 'With remote working becoming permanent, the client needed a dedicated office space separate from living areas.',
    solution: 'We created a calm, professional workspace with excellent natural light, built-in desk and storage, and good soundproofing from the rest of the house.',
    duration: '8 weeks',
    cost: '£45,000',
    beforeDescription: 'Dark, dusty loft used only for occasional storage.',
    afterDescription: 'Bright, modern home office with built-in desk, storage, and excellent natural light.',
    features: ['Large Velux windows', 'Built-in desk', 'Floor-to-ceiling storage', 'Soundproofing', 'Cat-6 networking'],
  },

  // Period Restorations
  {
    slug: 'georgian-townhouse-restoration-primrose-hill',
    title: 'Georgian Townhouse Restoration in Primrose Hill',
    projectType: 'period-restoration',
    area: 'Primrose Hill',
    areaSlug: 'primrose-hill',
    description: 'Comprehensive restoration of a Grade II listed Georgian townhouse.',
    challenge: 'Years of neglect and inappropriate modifications had damaged original features and compromised the building\'s character.',
    solution: 'Working with conservation officers, we restored original sash windows, repaired cornicing, reinstated fireplaces, and sympathetically upgraded services.',
    duration: '16 weeks',
    cost: '£95,000',
    beforeDescription: 'Neglected Georgian townhouse with damaged original features, broken sash windows, and inappropriate modern additions.',
    afterDescription: 'Beautifully restored Georgian interior with working fireplaces, restored sash windows, and original cornicing.',
    features: ['Sash window restoration', 'Cornice repairs', 'Fireplace reinstatement', 'Lime plaster repairs', 'Period-appropriate rewiring'],
    testimonial: {
      quote: 'They treated our home with the respect it deserved. Every detail was considered and executed perfectly.',
      author: 'The Harrison Family',
      location: 'Primrose Hill',
    },
  },
  {
    slug: 'victorian-villa-restoration-hampstead',
    title: 'Victorian Villa Restoration in Hampstead',
    projectType: 'period-restoration',
    area: 'Hampstead',
    areaSlug: 'hampstead',
    description: 'Restoring original Victorian features throughout a substantial villa.',
    challenge: 'The property had been converted to flats in the 1960s, destroying many original features and dividing elegant rooms.',
    solution: 'We reversed the flat conversion, reinstating original room proportions and restoring period features from salvage and skilled reproduction.',
    duration: '20 weeks',
    cost: '£145,000',
    beforeDescription: 'Flat conversion with partition walls, lowered ceilings, and missing original features.',
    afterDescription: 'Restored Victorian villa with original proportions, period features, and authentic character.',
    features: ['Original room proportions restored', 'Salvaged period fireplaces', 'Reproduction cornicing', 'Original staircase revealed', 'Sash windows restored'],
  },

  // Whole House Renovations
  {
    slug: 'complete-renovation-tufnell-park',
    title: 'Complete House Renovation in Tufnell Park',
    projectType: 'whole-house-renovation',
    area: 'Tufnell Park',
    areaSlug: 'tufnell-park',
    description: 'Top-to-bottom renovation of a neglected Victorian terrace.',
    challenge: 'The property had been a rental for 30 years and required complete modernisation while respecting its character.',
    solution: 'We rewired, replumbed, installed central heating, renovated all rooms, and added a rear extension - transforming a tired house into a modern family home.',
    duration: '18 weeks',
    cost: '£185,000',
    beforeDescription: 'Worn, dated property with outdated services, damp issues, and tired décor throughout.',
    afterDescription: 'Completely renovated family home with modern services, new kitchen extension, and beautiful period-modern blend.',
    features: ['Complete rewiring', 'New plumbing throughout', 'Rear extension', 'New kitchen and bathrooms', 'Underfloor heating'],
    testimonial: {
      quote: 'They transformed a house we couldn\'t live in into our dream home. Every penny was worth it.',
      author: 'Sophie & Tom B.',
      location: 'Tufnell Park',
    },
  },

  // Extensions
  {
    slug: 'rear-extension-finchley',
    title: 'Rear Extension in East Finchley',
    projectType: 'extension-build',
    area: 'East Finchley',
    areaSlug: 'east-finchley',
    description: 'Adding a contemporary rear extension to a 1930s semi-detached house.',
    challenge: 'The original kitchen was too small for modern family life, and the garden wasn\'t being used effectively.',
    solution: 'A contemporary flat-roof extension with large sliding doors created an open-plan kitchen-diner with seamless garden access.',
    duration: '12 weeks',
    cost: '£72,000',
    beforeDescription: 'Small galley kitchen with limited natural light and no garden access.',
    afterDescription: 'Spacious open-plan kitchen-diner with large sliding doors opening onto the garden.',
    features: ['Sliding glass doors', 'Flat roof with lantern light', 'Underfloor heating', 'Integrated kitchen', 'Level threshold to garden'],
  },

  // Basement Conversions
  {
    slug: 'basement-cinema-st-johns-wood',
    title: 'Basement Cinema Room in St John\'s Wood',
    projectType: 'basement-conversion',
    area: 'St John\'s Wood',
    areaSlug: 'st-johns-wood',
    description: 'Converting a damp cellar into a luxury home cinema room.',
    challenge: 'The Victorian cellar suffered from persistent damp and was unusable.',
    solution: 'We tanked the basement, installed drainage, and created a fully soundproofed cinema room with tiered seating.',
    duration: '14 weeks',
    cost: '£125,000',
    beforeDescription: 'Damp, unusable Victorian cellar with bare brick walls and no natural light.',
    afterDescription: 'Luxury home cinema with tiered seating, acoustic treatment, and full AV installation.',
    features: ['Full basement tanking', 'Acoustic soundproofing', 'Tiered seating', '4K projector', 'Dolby Atmos sound'],
    testimonial: {
      quote: 'Our basement has gone from a damp hole to the best room in the house. Film nights will never be the same!',
      author: 'Richard P.',
      location: 'St John\'s Wood',
    },
  },

  // Garden Landscaping
  {
    slug: 'garden-transformation-west-hampstead',
    title: 'Garden Transformation in West Hampstead',
    projectType: 'garden-landscaping',
    area: 'West Hampstead',
    areaSlug: 'west-hampstead',
    description: 'Transforming an overgrown garden into an outdoor entertaining space.',
    challenge: 'Years of neglect had left the garden completely overgrown and unusable.',
    solution: 'We designed distinct zones for entertaining, relaxing, and planting, with outdoor lighting and a built-in BBQ area.',
    duration: '4 weeks',
    cost: '£28,000',
    beforeDescription: 'Overgrown, neglected garden with no usable outdoor space.',
    afterDescription: 'Beautiful landscaped garden with dining area, lounge zone, and professional planting.',
    features: ['Porcelain paving', 'Built-in BBQ station', 'Outdoor lighting', 'Raised planters', 'Artificial turf play area'],
  },
];

// Gallery services for service-specific galleries
export const galleryServices = projectTypeInfos.map(p => ({
  slug: p.slug,
  name: p.name,
  description: p.description,
}));

// Helper functions
export function getProjectTypeInfo(slug: string): ProjectTypeInfo | undefined {
  return projectTypeInfos.find(p => p.slug === slug);
}

export function getBeforeAfterProject(slug: string): BeforeAfterProject | undefined {
  return beforeAfterProjects.find(p => p.slug === slug);
}

export function getProjectsByType(projectType: string): BeforeAfterProject[] {
  return beforeAfterProjects.filter(p => p.projectType === projectType);
}

export function getProjectsByService(serviceSlug: string): BeforeAfterProject[] {
  return beforeAfterProjects.filter(p => p.projectType === serviceSlug);
}

export function getProjectsByArea(areaSlug: string): BeforeAfterProject[] {
  return beforeAfterProjects.filter(p => p.areaSlug === areaSlug);
}

export function generateBeforeAfterParams(): { projectType: string; area: string }[] {
  const params: { projectType: string; area: string }[] = [];
  const areas = ['hampstead', 'belsize-park', 'highgate', 'muswell-hill', 'crouch-end', 'kentish-town', 'swiss-cottage', 'primrose-hill', 'st-johns-wood', 'west-hampstead', 'east-finchley', 'tufnell-park'];
  
  for (const projectType of projectTypeInfos) {
    for (const area of areas) {
      params.push({
        projectType: projectType.slug,
        area: area,
      });
    }
  }
  
  return params;
}

export function countBeforeAfterPages(): number {
  return generateBeforeAfterParams().length;
}
