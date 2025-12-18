// ============================================================================
// CASE STUDIES DATABASE
// Detailed project narratives with client quotes and outcomes
// ============================================================================

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  projectType: string;
  area: string;
  areaSlug: string;
  propertyType: string;
  duration: string;
  completionDate: string;
  budget: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  keyFeatures: string[];
  servicesUsed: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  relatedCaseStudies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'victorian-kitchen-extension-belsize-park',
    title: 'Victorian Kitchen Extension',
    subtitle: 'Transforming a dark galley kitchen into an open-plan family hub',
    projectType: 'kitchen-transformation',
    area: 'Belsize Park',
    areaSlug: 'belsize-park',
    propertyType: 'Victorian Terrace',
    duration: '10 weeks',
    completionDate: '2024-03',
    budget: '£85,000',
    challenge: 'The Mitchell family had lived with a dark, cramped galley kitchen for 8 years. With two growing children, they desperately needed more space but loved their Victorian terrace and didn\'t want to move. The original kitchen was cut off from the dining room and garden, making family life fragmented.',
    approach: 'We began with a detailed consultation to understand exactly how the family used their space. Our design team created 3D visualisations showing how opening up the rear of the house would transform daily life. We worked closely with the council to ensure our plans met all requirements.',
    solution: 'We removed the rear wall and internal partition, installed a steel beam, and added a 4m rear extension with bi-fold doors. The new kitchen features a large central island with breakfast bar, bespoke Shaker-style cabinetry, and Silestone worktops. Underfloor heating throughout keeps the space warm, while three large Velux rooflights flood the area with natural light.',
    outcome: 'The Mitchells now have a stunning 35sqm open-plan kitchen-diner that has become the heart of their home. The bi-fold doors open fully onto the garden in summer, effectively doubling their entertaining space. Property value has increased significantly, but more importantly, the family finally has the space they need.',
    keyFeatures: [
      'Bi-fold doors with level threshold',
      'Bespoke Shaker kitchen',
      'Central island with integrated dining',
      'Silestone worktops',
      'Underfloor heating throughout',
      'Velux rooflights',
      'Integrated Miele appliances',
    ],
    servicesUsed: ['extension-building', 'kitchen-fitting', 'electrical-rewiring', 'plumbing', 'underfloor-heating', 'tiling'],
    testimonial: {
      quote: 'We can\'t believe we waited so long! Hampstead Renovations understood exactly what we needed and delivered beyond our expectations. The attention to detail was exceptional, from matching the original Victorian brickwork to the perfect alignment of every tile. We finally have the family kitchen we\'ve always dreamed of.',
      author: 'Sarah & Tom Mitchell',
      role: 'Homeowners',
    },
    stats: [
      { label: 'Space Added', value: '15 sqm' },
      { label: 'Value Increase', value: '£120,000' },
      { label: 'Natural Light', value: '+300%' },
      { label: 'On Budget', value: 'Yes' },
    ],
    relatedCaseStudies: ['edwardian-kitchen-muswell-hill', 'rear-extension-east-finchley'],
  },
  {
    slug: 'complete-rewire-hampstead-townhouse',
    title: 'Complete Rewire of Georgian Townhouse',
    subtitle: 'Modernising electrics while preserving heritage features',
    projectType: 'electrical-rewiring',
    area: 'Hampstead',
    areaSlug: 'hampstead',
    propertyType: 'Georgian Townhouse',
    duration: '3 weeks',
    completionDate: '2024-01',
    budget: '£18,500',
    challenge: 'The Williams family purchased a beautiful Georgian townhouse in Hampstead only to discover the electrics were dangerously outdated. The original 1950s wiring included fabric-covered cables, no RCD protection, and an overloaded fuse box. Any renovation plans had to work around Grade II listing constraints and preserve original features.',
    approach: 'Before starting, we liaised with the conservation officer to understand the constraints of working on a listed building. We developed a rewiring strategy that would minimise visible changes while bringing the property up to modern safety standards. Every route was planned to avoid damage to original plasterwork and features.',
    solution: 'Using specialist techniques for listed buildings, we rewired the entire 5-storey property. Cables were routed under floors, through service voids, and along existing channeling wherever possible. Where new chases were unavoidable, we used lime plaster to match the original. All visible fixtures were chosen in period-appropriate styles.',
    outcome: 'The property now has a fully modern electrical system with RCBO protection, adequate circuits for modern living, and smart home readiness - all completely invisible within the Georgian interior. The Williams family has peace of mind and can proceed with their renovation plans.',
    keyFeatures: [
      'Full RCBO consumer unit',
      'Smart home ready infrastructure',
      'Period-style switches and sockets',
      'Listed building compliant installation',
      'Interlinked smoke alarms',
      'USB charging points',
      'Dedicated kitchen circuits',
    ],
    servicesUsed: ['electrical-rewiring', 'consumer-unit-upgrade', 'smoke-alarm-installation'],
    testimonial: {
      quote: 'We were terrified about rewiring a listed building, but Hampstead Renovations handled everything with such care. You genuinely cannot tell any work has been done, yet we now have a completely modern, safe electrical system. Their knowledge of heritage properties was invaluable.',
      author: 'Dr. James Williams',
      role: 'Homeowner',
    },
    stats: [
      { label: 'New Circuits', value: '24' },
      { label: 'Socket Points', value: '86' },
      { label: 'Original Features', value: '100% preserved' },
      { label: 'Disruption Days', value: '12' },
    ],
    relatedCaseStudies: ['georgian-restoration-primrose-hill', 'smart-home-installation-highgate'],
  },
  {
    slug: 'luxury-bathroom-suite-primrose-hill',
    title: 'Luxury Master Bathroom Suite',
    subtitle: 'Creating a spa-like retreat in a Victorian villa',
    projectType: 'bathroom-renovation',
    area: 'Primrose Hill',
    areaSlug: 'primrose-hill',
    propertyType: 'Victorian Villa',
    duration: '5 weeks',
    completionDate: '2024-05',
    budget: '£42,000',
    challenge: 'The Chen family wanted to convert two small upstairs rooms into a luxury master bathroom suite, but the Victorian villa had complex existing plumbing and they wanted to maintain the period character while creating a modern spa experience.',
    approach: 'We created detailed 3D renders showing how the space could be transformed. Our design incorporated period-appropriate fixtures and finishes while meeting the family\'s desire for modern luxury. Structural engineer input was obtained for removing the internal wall.',
    solution: 'By removing the partition wall and reconfiguring the space, we created a stunning bathroom with separate zones: a freestanding bath beneath the original sash window, a large walk-in rainfall shower, and his-and-hers vanity units. Underfloor heating, heated towel rails, and a discreet sound system complete the spa atmosphere.',
    outcome: 'The Chens now have a stunning bathroom that feels like a five-star hotel while respecting the Victorian character of their home. The combination of period and contemporary elements creates a unique space they use daily as their private retreat.',
    keyFeatures: [
      'Freestanding copper bath',
      'Walk-in rainfall shower',
      'His & hers vanity units',
      'Underfloor heating',
      'Integrated Sonos speakers',
      'Heated mirrors',
      'Victorian-style fixtures',
    ],
    servicesUsed: ['bathroom-installation', 'plumbing', 'electrical', 'tiling', 'underfloor-heating'],
    testimonial: {
      quote: 'Every morning feels like being at a spa. Hampstead Renovations created exactly what we envisioned - a luxurious modern bathroom that still feels like it belongs in our Victorian home. The copper bath is my favourite place in the entire house!',
      author: 'Lisa Chen',
      role: 'Homeowner',
    },
    stats: [
      { label: 'Room Size', value: '18 sqm' },
      { label: 'Tile Coverage', value: '45 sqm' },
      { label: 'Water Pressure', value: '+40%' },
      { label: 'On Time', value: 'Yes' },
    ],
    relatedCaseStudies: ['victorian-bathroom-hampstead', 'ensuite-conversion-highgate'],
  },
  {
    slug: 'emergency-boiler-replacement-crouch-end',
    title: 'Emergency Boiler Replacement',
    subtitle: 'Restoring heating to a young family in 24 hours',
    projectType: 'boiler-installation',
    area: 'Crouch End',
    areaSlug: 'crouch-end',
    propertyType: 'Edwardian Semi',
    duration: '1 day',
    completionDate: '2024-02',
    budget: '£3,200',
    challenge: 'The Patel family called us on a freezing February morning - their 15-year-old boiler had failed completely and they had a 6-month-old baby at home. With temperatures below freezing, they needed emergency help immediately.',
    approach: 'Our engineer arrived within 90 minutes of the call. After assessing the situation, it was clear the boiler was beyond economical repair. We immediately sourced a replacement Worcester Bosch boiler from our supplier and arranged same-day installation.',
    solution: 'By 6pm the same day, the Patels had a brand new Worcester Bosch 30kW combi boiler installed, a MagnaCleanse system flush completed, and their home was warm again. We also installed a new smart thermostat so they could control heating from their phones.',
    outcome: 'The family went from a freezing house in the morning to a warm home with a brand new, efficient boiler by evening. The new boiler is approximately 30% more efficient than their old one, reducing their energy bills significantly.',
    keyFeatures: [
      'Worcester Bosch Greenstar 30i',
      'MagnaCleanse system flush',
      'Magnetic filter installation',
      'Nest smart thermostat',
      '10-year manufacturer warranty',
      'Same-day installation',
    ],
    servicesUsed: ['boiler-installation', 'powerflush', 'thermostat-installation'],
    testimonial: {
      quote: 'I cannot thank Hampstead Renovations enough. With a tiny baby and no heating in February, I was panicking. They came immediately, assessed quickly, and by evening we had a new boiler and warm house. Their emergency service is genuinely life-saving.',
      author: 'Priya Patel',
      role: 'Homeowner',
    },
    stats: [
      { label: 'Response Time', value: '90 mins' },
      { label: 'Installation Time', value: '6 hours' },
      { label: 'Efficiency Gain', value: '30%' },
      { label: 'Warranty', value: '10 years' },
    ],
    relatedCaseStudies: ['heating-upgrade-muswell-hill', 'radiator-installation-kentish-town'],
  },
  {
    slug: 'loft-conversion-master-suite-highgate',
    title: 'Loft Conversion Master Suite',
    subtitle: 'Adding a stunning master bedroom with en-suite',
    projectType: 'loft-conversion',
    area: 'Highgate',
    areaSlug: 'highgate',
    propertyType: 'Edwardian House',
    duration: '12 weeks',
    completionDate: '2024-04',
    budget: '£72,000',
    challenge: 'The Robinson family needed an extra bedroom for their growing family but loved their Highgate home and location. The property was in a conservation area, making any visible external changes challenging.',
    approach: 'We designed a rear dormer loft conversion that would fall within permitted development rights for the conservation area. The design maximised space while minimising visual impact from the street.',
    solution: 'A large rear dormer conversion created a spacious master bedroom with en-suite shower room and walk-in wardrobe. Carefully positioned Velux windows in the front roof slope provide light without affecting the streetscape. A beautiful new oak staircase connects seamlessly with the existing landing.',
    outcome: 'The Robinsons gained an incredible master suite without moving house. The children now have their own bedrooms on the first floor, and the parents have a private retreat with stunning views across Highgate. The value of their home increased by more than the cost of the conversion.',
    keyFeatures: [
      'Rear dormer for maximum space',
      'En-suite with walk-in shower',
      'Walk-in wardrobe',
      'Bespoke oak staircase',
      'Velux windows front and rear',
      'Built-in storage in eaves',
      'Underfloor heating',
    ],
    servicesUsed: ['loft-conversion', 'bathroom-installation', 'electrical-rewiring', 'plastering', 'carpentry'],
    testimonial: {
      quote: 'We gained an entire floor without leaving the home and neighbourhood we love. The quality of workmanship is outstanding - from the beautiful staircase to every little detail in the en-suite. Hampstead Renovations made the whole process stress-free.',
      author: 'Mark & Jenny Robinson',
      role: 'Homeowners',
    },
    stats: [
      { label: 'Space Added', value: '42 sqm' },
      { label: 'Value Increase', value: '£150,000' },
      { label: 'Planning Required', value: 'No' },
      { label: 'On Budget', value: 'Yes' },
    ],
    relatedCaseStudies: ['loft-office-kentish-town', 'dormer-conversion-crouch-end'],
  },
  {
    slug: 'smart-home-installation-st-johns-wood',
    title: 'Whole House Smart Home Installation',
    subtitle: 'Bringing a 1930s home into the 21st century',
    projectType: 'smart-home',
    area: 'St John\'s Wood',
    areaSlug: 'st-johns-wood',
    propertyType: '1930s Detached',
    duration: '2 weeks',
    completionDate: '2024-06',
    budget: '£28,000',
    challenge: 'Tech entrepreneur Alex Thompson wanted a fully integrated smart home system, but his 1930s property had outdated wiring and no existing infrastructure for smart home technology.',
    approach: 'We conducted a full technology audit and designed a comprehensive smart home system. The project required careful planning to integrate multiple systems while upgrading the electrical infrastructure to support them.',
    solution: 'The complete installation included Lutron lighting throughout, Sonos multi-room audio, Ring security system with automated locks, Nest heating controls, and motorised blinds in all rooms. A dedicated server room houses the control systems, with Cat 6 networking to every room.',
    outcome: 'Alex can now control every aspect of his home from his phone or voice commands. Lighting scenes, music, heating, and security all work together seamlessly. The system has actually reduced energy consumption through intelligent automation.',
    keyFeatures: [
      'Lutron smart lighting',
      'Sonos whole-house audio',
      'Ring security system',
      'Nest heating controls',
      'Motorised blinds',
      'Cat 6 networking throughout',
      'Voice control integration',
    ],
    servicesUsed: ['smart-home-installation', 'electrical-rewiring', 'networking', 'security-installation'],
    testimonial: {
      quote: 'My house now responds to my needs automatically. The lights dim when I watch TV, the heating adjusts based on who\'s home, and I can check security from anywhere in the world. Hampstead Renovations brought my vision to life perfectly.',
      author: 'Alex Thompson',
      role: 'Homeowner',
    },
    stats: [
      { label: 'Light Circuits', value: '34' },
      { label: 'Audio Zones', value: '8' },
      { label: 'Cameras', value: '6' },
      { label: 'Energy Savings', value: '25%' },
    ],
    relatedCaseStudies: ['rewire-hampstead-townhouse', 'home-office-upgrade-belsize'],
  },
];

// Case study categories for navigation
export const caseStudyCategories = [
  { slug: 'renovation', name: 'Renovation Projects', description: 'Complete home renovation case studies' },
  { slug: 'extension', name: 'Extension Projects', description: 'Home extension and addition case studies' },
  { slug: 'conversion', name: 'Conversion Projects', description: 'Loft and basement conversion case studies' },
  { slug: 'restoration', name: 'Restoration Projects', description: 'Period property restoration case studies' },
  { slug: 'electrical', name: 'Electrical Projects', description: 'Electrical upgrade and rewiring case studies' },
];

// Helper functions
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesByType(projectType: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.projectType === projectType);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  // Map category to project types
  const categoryMap: Record<string, string[]> = {
    'renovation': ['kitchen-renovation', 'bathroom-renovation', 'whole-house-renovation'],
    'extension': ['extension', 'garden-room'],
    'conversion': ['loft-conversion', 'basement-conversion'],
    'restoration': ['period-restoration', 'heritage'],
    'electrical': ['rewire', 'smart-home', 'electrical'],
  };
  const types = categoryMap[category] || [category];
  return caseStudies.filter(cs => types.some(t => cs.projectType.includes(t)));
}

export function getCaseStudiesByArea(areaSlug: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.areaSlug === areaSlug);
}

export function getRelatedCaseStudies(slug: string): CaseStudy[] {
  const current = getCaseStudy(slug);
  if (!current) return [];
  
  return current.relatedCaseStudies
    .map(s => getCaseStudy(s))
    .filter((cs): cs is CaseStudy => cs !== undefined);
}

export function generateCaseStudyParams(): { slug: string }[] {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export function countCaseStudyPages(): number {
  return caseStudies.length;
}
