// ============================================================================
// PSEO ENGINE - PROPERTY-SERVICE MATRIX DATABASE
// Building type + Service combination pages
// 5x SEO Domination - Strategy 4
// ============================================================================

export interface PropertyType {
  slug: string;
  name: string;
  description: string;
  
  // SEO
  metaTitleTemplate: string; // Use {service} placeholder
  metaDescriptionTemplate: string; // Use {service} placeholder
  
  // Property characteristics
  characteristics: {
    typicalAge: string;
    commonFeatures: string[];
    structuralNotes: string[];
    heatingChallenges: string[];
    electricalChallenges: string[];
    plumbingChallenges: string[];
  };
  
  // Common issues
  commonIssues: string[];
  
  // Image
  heroImage: string;
}

export interface PropertyServiceMatrix {
  propertySlug: string;
  serviceSlug: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  h1: string;
  
  // Detailed content
  introduction: string;
  challenges: string[];
  ourApproach: string[];
  typicalScope: string[];
  considerations: string[];
  
  // Pricing guidance
  priceRange: {
    from: string;
    to: string;
    factors: string[];
  };
  
  // Timeframe
  typicalDuration: string;
  
  // FAQs specific to this combination
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Related services for this property type
  relatedServices: string[];
}

// ============================================================================
// PROPERTY TYPES
// ============================================================================

export const propertyTypes: PropertyType[] = [
  {
    slug: 'victorian-terraced',
    name: 'Victorian Terraced House',
    description: 'Classic mid-to-late Victorian terraced properties (1850-1901), common throughout North London.',
    
    metaTitleTemplate: '{service} for Victorian Terraced Houses | Specialist Services',
    metaDescriptionTemplate: 'Expert {service} tailored for Victorian terraced houses. Understanding period features, party walls & original systems. Free quotes.',
    
    characteristics: {
      typicalAge: '1850-1901',
      commonFeatures: [
        'Solid brick walls (no cavity)',
        'Original sash windows',
        'Decorative cornicing and ceiling roses',
        'Original fireplaces',
        'Bay windows',
        'Basement or cellar',
        'Rear additions',
      ],
      structuralNotes: [
        'Party walls shared with neighbours',
        'Often extended at rear over time',
        'Solid walls prone to damp if not ventilated',
        'Original timber floors may need attention',
      ],
      heatingChallenges: [
        'High ceilings increase heating demand',
        'Solid walls limit insulation options',
        'Chimneys may need lining for modern boilers',
        'Original radiator positions may not suit modern systems',
      ],
      electricalChallenges: [
        'Original wiring almost certainly needs replacement',
        'Fewer socket outlets than modern needs',
        'Consumer unit likely needs upgrading',
        'Surface-mounted cables may be present',
      ],
      plumbingChallenges: [
        'Lead supply pipes may need replacement',
        'Original lead waste pipes common',
        'Water pressure may be low',
        'Cast iron soil stacks may be corroded',
      ],
    },
    
    commonIssues: [
      'Rising damp from missing or failed DPC',
      'Penetrating damp through solid walls',
      'Subsidence from tree roots',
      'Failed pointing requiring repointing',
      'Sash window decay',
      'Original lead plumbing',
      'Outdated electrical installations',
    ],
    
    heroImage: '/images/properties/victorian-terrace.jpg',
  },
  
  {
    slug: 'edwardian-house',
    name: 'Edwardian House',
    description: 'Properties built during the Edwardian era (1901-1910), often larger and lighter than Victorian homes.',
    
    metaTitleTemplate: '{service} for Edwardian Houses | Period Property Experts',
    metaDescriptionTemplate: 'Specialist {service} for Edwardian properties. Respecting original features while modernising systems. North London experts.',
    
    characteristics: {
      typicalAge: '1901-1910',
      commonFeatures: [
        'Wider frontages than Victorian',
        'Front gardens common',
        'Higher ceilings on ground floor',
        'Larger windows, more natural light',
        'Art Nouveau influenced details',
        'Original picture rails and dados',
        'Red brick or rendered facades',
      ],
      structuralNotes: [
        'Cavity walls in later Edwardian properties',
        'Generally more spacious layout',
        'Often semi-detached or detached',
        'Shallower basements than Victorian',
      ],
      heatingChallenges: [
        'Large rooms require careful heating design',
        'Original fireplaces often in good condition',
        'Some properties already have central heating retrofitted',
        'Bay windows create cold spots',
      ],
      electricalChallenges: [
        'Period electrical fittings may be unsafe',
        'Fewer circuits than modern standards',
        'Consumer unit upgrade usually needed',
        'May have had multiple partial rewires',
      ],
      plumbingChallenges: [
        'Mixed pipe materials from various updates',
        'Tank-fed systems common',
        'Cast iron baths may have lead waste pipes',
        'Boiler may be oversized or undersized',
      ],
    },
    
    commonIssues: [
      'Damp in cavity walls if ties failed',
      'Roof valley gutter leaks',
      'Timber decay in bay window roofs',
      'Outdated plumbing from various eras',
      'Asbestos in some materials',
    ],
    
    heroImage: '/images/properties/edwardian-house.jpg',
  },
  
  {
    slug: 'victorian-mansion-flat',
    name: 'Victorian/Edwardian Mansion Flat',
    description: 'Purpose-built mansion blocks from 1880-1910, common in areas like Belsize Park and Swiss Cottage.',
    
    metaTitleTemplate: '{service} for Mansion Flats | Block Specialists',
    metaDescriptionTemplate: 'Expert {service} for mansion flats. Understanding communal systems, leasehold requirements & period features. NW London specialists.',
    
    characteristics: {
      typicalAge: '1880-1910',
      commonFeatures: [
        'Communal entrance and staircase',
        'High ceilings (often 3m+)',
        'Decorative plasterwork',
        'Sash windows',
        'Fireplaces in multiple rooms',
        'Communal gardens',
        'Porters or concierge historically',
      ],
      structuralNotes: [
        'Solid brick construction',
        'Timber floors between units',
        'Shared walls with neighbours above/below/beside',
        'Communal drainage stacks',
      ],
      heatingChallenges: [
        'May have communal heating',
        'High ceilings increase heating costs',
        'Radiator placement limited by fireplaces',
        'Individual boiler installation may require consent',
      ],
      electricalChallenges: [
        'Consumer unit in flat or communal cupboard',
        'Rewiring requires freeholder consent',
        'Cable routing affected by communal areas',
        'May share supply with common parts',
      ],
      plumbingChallenges: [
        'Shared soil stacks',
        'Hot water may be communal',
        'Water pressure varies by floor',
        'Bathroom changes may need consent',
      ],
    },
    
    commonIssues: [
      'Leaks affecting neighbours',
      'Noise transmission between units',
      'Communal system maintenance costs',
      'Freeholder permission delays',
      'Service charge disputes',
    ],
    
    heroImage: '/images/properties/mansion-flat.jpg',
  },
  
  {
    slug: '1930s-semi',
    name: '1930s Semi-Detached',
    description: 'Inter-war semi-detached houses built 1920-1939, popular in suburban North London areas.',
    
    metaTitleTemplate: '{service} for 1930s Semi-Detached Houses | Expert Services',
    metaDescriptionTemplate: 'Specialist {service} for 1930s semis. Understanding cavity walls, bay windows & period systems. Free quotes.',
    
    characteristics: {
      typicalAge: '1920-1939',
      commonFeatures: [
        'Cavity walls',
        'Bay windows with flat roofs',
        'Pebble-dash or rendered exteriors',
        'Integral garage in some',
        'Crittall windows (may be original or replaced)',
        'Parquet flooring',
        'Tiled fireplaces',
      ],
      structuralNotes: [
        'Cavity walls (unfilled originally)',
        'Concrete floors in some areas',
        'Flat roofs on bay windows prone to failure',
        'Party wall with attached neighbour',
      ],
      heatingChallenges: [
        'Cavity wall insulation possible but check for damp',
        'Original boiler may be very old',
        'Radiator sizing for cavity wall properties',
        'Back boiler removal common requirement',
      ],
      electricalChallenges: [
        'Original rubber-insulated wiring dangerous',
        'Round-pin sockets indicate very old wiring',
        'Consumer unit likely cast iron and needs replacement',
        'May have 60-amp supply needing upgrade',
      ],
      plumbingChallenges: [
        'Galvanized steel tanks prone to corrosion',
        'Lead or steel supply pipes',
        'Back boiler often behind fireplace',
        'Cast iron radiators may be inefficient',
      ],
    },
    
    commonIssues: [
      'Bay window flat roof leaks',
      'Cavity wall tie failure',
      'Rising damp where DPC bridged',
      'Obsolete electrical installations',
      'Asbestos in artex, pipe lagging, tiles',
    ],
    
    heroImage: '/images/properties/1930s-semi.jpg',
  },
  
  {
    slug: 'georgian-townhouse',
    name: 'Georgian Townhouse',
    description: 'Elegant townhouses from 1714-1830, often Grade II listed in areas like Primrose Hill.',
    
    metaTitleTemplate: '{service} for Georgian Townhouses | Heritage Specialists',
    metaDescriptionTemplate: 'Expert {service} for Georgian townhouses. Listed building experience, heritage-appropriate solutions. Specialists since 2010.',
    
    characteristics: {
      typicalAge: '1714-1830',
      commonFeatures: [
        'Symmetrical facade',
        'Sash windows with thin glazing bars',
        'Panelled doors with fanlights',
        'Adam-style fireplaces',
        'Original shutters',
        'Servants stairs and quarters',
        'Multiple storeys (often 4-5)',
      ],
      structuralNotes: [
        'Solid brick walls, often very thick',
        'Timber floors throughout',
        'May be Grade I, II* or II listed',
        'Original lime mortar and plaster',
      ],
      heatingChallenges: [
        'Listed status restricts external changes',
        'Flue routing must respect building fabric',
        'Underfloor heating may be possible in basements',
        'Zone heating for multi-storey efficiency',
      ],
      electricalChallenges: [
        'Cable routing must be sympathetic',
        'Listed building consent for visible alterations',
        'Period-style switches and sockets available',
        'Multiple circuits for multiple floors',
      ],
      plumbingChallenges: [
        'Multiple bathrooms on different floors',
        'Water pressure at height',
        'Lead pipes almost certainly present',
        'Listed consent for bathroom changes may be needed',
      ],
    },
    
    commonIssues: [
      'Lime mortar repointing needed',
      'Sash window restoration requirements',
      'Damp from cement repairs trapping moisture',
      'Listed building consent requirements',
      'Finding heritage-appropriate materials',
    ],
    
    heroImage: '/images/properties/georgian-townhouse.jpg',
  },
  
  {
    slug: 'modern-apartment',
    name: 'Modern Apartment/Flat',
    description: 'Purpose-built apartments from 1990 onwards, including new-build developments.',
    
    metaTitleTemplate: '{service} for Modern Apartments | Contemporary Solutions',
    metaDescriptionTemplate: 'Professional {service} for modern apartments. Understanding warranties, building regulations & communal systems. Free quotes.',
    
    characteristics: {
      typicalAge: '1990-present',
      commonFeatures: [
        'Open-plan living spaces',
        'Underfloor heating common',
        'Mechanical ventilation',
        'Double or triple glazing',
        'Integrated appliances',
        'Cat 5/6 wiring',
        'Video entry systems',
      ],
      structuralNotes: [
        'Concrete or steel frame construction',
        'Dry-lined internal walls',
        'Service risers for communal systems',
        'Fire compartmentation requirements',
      ],
      heatingChallenges: [
        'District heating or HIU common',
        'Combi boilers in many',
        'UFH zones need careful design',
        'Building warranty may restrict changes',
      ],
      electricalChallenges: [
        'Already to 18th Edition likely',
        'RCBO consumer units standard',
        'Smart home systems may be present',
        'Fire alarm integration requirements',
      ],
      plumbingChallenges: [
        'HIU maintenance specialist needed',
        'Low water pressure in tall buildings',
        'Mains pressure systems throughout',
        'Warranty implications for changes',
      ],
    },
    
    commonIssues: [
      'HIU failures',
      'Underfloor heating leaks',
      'Poor original quality in some developments',
      'Warranty claim navigation',
      'Managing agent requirements',
    ],
    
    heroImage: '/images/properties/modern-apartment.jpg',
  },
  
  {
    slug: 'period-conversion',
    name: 'Period Conversion Flat',
    description: 'Flats created by converting larger Victorian or Edwardian houses, common throughout North London.',
    
    metaTitleTemplate: '{service} for Period Conversion Flats | Conversion Specialists',
    metaDescriptionTemplate: 'Expert {service} for period conversion flats. Balancing modern systems with original features. North London specialists.',
    
    characteristics: {
      typicalAge: 'Original: 1850-1910, Converted: 1960-present',
      commonFeatures: [
        'Original period features (partial)',
        'High ceilings retained',
        'Sash windows',
        'Shared garden access',
        'Mixed modern and period elements',
        'Awkward layouts from conversion',
      ],
      structuralNotes: [
        'Original house structure largely intact',
        'Partition walls added during conversion',
        'Fire separation may be inadequate',
        'Shared structural elements with other flats',
      ],
      heatingChallenges: [
        'Individual systems for each flat',
        'High ceilings increase heating costs',
        'Boiler flue routing can be complex',
        'No access to some areas without cooperation',
      ],
      electricalChallenges: [
        'Conversion-era wiring may be poor quality',
        'Consumer unit location varies',
        'Shared meter cupboards common',
        'Fire alarm requirements for HMO conversions',
      ],
      plumbingChallenges: [
        'Shared soil stacks from original house',
        'Boiler positioning constrained',
        'Hot water cylinder or combi varies',
        'Drainage above neighbours',
      ],
    },
    
    commonIssues: [
      'Poor conversion quality',
      'Inadequate fire separation',
      'Damp from original house issues',
      'Noise transmission between flats',
      'Unclear lease responsibilities',
    ],
    
    heroImage: '/images/properties/period-conversion.jpg',
  },
  
  {
    slug: 'new-build-house',
    name: 'New Build House',
    description: 'Recently built houses (2010 onwards) with modern construction and systems.',
    
    metaTitleTemplate: '{service} for New Build Houses | Modern Home Experts',
    metaDescriptionTemplate: 'Professional {service} for new build houses. Understanding warranties, modern systems & building regulations.',
    
    characteristics: {
      typicalAge: '2010-present',
      commonFeatures: [
        'High insulation levels',
        'Double or triple glazing throughout',
        'Modern heating systems',
        'Open-plan ground floors',
        'En-suites to bedrooms',
        'EV charging provision',
        'Smart home wiring',
      ],
      structuralNotes: [
        'Block and brick or timber frame',
        'Compliant with current Part L (energy)',
        'NHBC or similar warranty likely',
        'Snagging issues may be present',
      ],
      heatingChallenges: [
        'Heat pump systems in newer properties',
        'UFH ground floor standard',
        'Heating sized for high insulation',
        'Warranty restrictions on changes',
      ],
      electricalChallenges: [
        '18th Edition compliant at build',
        'Extensive USB and data points',
        'Smart home integration ready',
        'Solar PV increasingly common',
      ],
      plumbingChallenges: [
        'Unvented cylinders or combis',
        'Push-fit pipework throughout',
        'Water softener provision in some',
        'Multiple bathroom supplies',
      ],
    },
    
    commonIssues: [
      'Snagging defects',
      'Builder quality variations',
      'Warranty claims process',
      'Settling cracks',
      'Systems unfamiliar to owners',
    ],
    
    heroImage: '/images/properties/new-build-house.jpg',
  },
];

// ============================================================================
// SERVICES FOR MATRIX
// ============================================================================

export const matrixServices = [
  { slug: 'rewiring', name: 'Rewiring', category: 'electrical' },
  { slug: 'boiler-installation', name: 'Boiler Installation', category: 'heating' },
  { slug: 'bathroom-renovation', name: 'Bathroom Renovation', category: 'plumbing' },
  { slug: 'kitchen-fitting', name: 'Kitchen Fitting', category: 'building' },
  { slug: 'heating-system', name: 'Central Heating', category: 'heating' },
  { slug: 'plumbing-upgrade', name: 'Plumbing Upgrade', category: 'plumbing' },
  { slug: 'loft-conversion', name: 'Loft Conversion', category: 'building' },
  { slug: 'extension', name: 'Extension', category: 'building' },
];

// ============================================================================
// PROPERTY-SERVICE MATRIX COMBINATIONS
// ============================================================================

export const propertyServiceMatrixPages: PropertyServiceMatrix[] = [
  // ============================================================================
  // VICTORIAN TERRACED - REWIRING
  // ============================================================================
  {
    propertySlug: 'victorian-terraced',
    serviceSlug: 'rewiring',
    
    metaTitle: 'Rewiring Victorian Terraced Houses | Period Property Electricians',
    metaDescription: 'Expert rewiring for Victorian terraced houses. Protecting original features, modern safety standards. NICEIC approved. Free survey.',
    h1: 'Rewiring Your Victorian Terraced House',
    
    introduction: 'Victorian terraced houses present unique rewiring challenges that require specialist knowledge. The combination of solid walls, decorative plasterwork, and original features means a one-size-fits-all approach won\'t work. Our electricians have extensive experience rewiring period terraces throughout North London.',
    
    challenges: [
      'Original rubber-insulated wiring that is both dangerous and deteriorating',
      'Solid brick walls making cable routing more complex than modern properties',
      'Preserving decorative cornicing, ceiling roses, and original features',
      'Dealing with previous partial rewires using incompatible systems',
      'Limited socket outlets compared to modern requirements',
      'Consumer units in awkward locations (under stairs, in cupboards)',
    ],
    
    ourApproach: [
      'Comprehensive survey identifying existing wiring condition and routes',
      'Planning cable routes to minimize disruption to original features',
      'Using period-appropriate switches and sockets where desired',
      'Lifting floorboards rather than chasing walls where possible',
      'Installing modern consumer units with RCBOs for comprehensive protection',
      'Full testing and certification to BS 7671 18th Edition',
    ],
    
    typicalScope: [
      'Remove all existing wiring and consumer unit',
      'Install new 18th Edition compliant consumer unit',
      'Run new circuit cables throughout property',
      'Install new socket outlets, light switches, and light fittings',
      'Fit smoke and heat detectors (hardwired)',
      'Connect existing appliances (cooker, hob, etc.)',
      'Full testing and EICR certification',
    ],
    
    considerations: [
      'Decoration will be needed after rewiring - factor into budget',
      'Some floor lifting may be required - we replace boards carefully',
      'Party wall access may be needed - we liaise with neighbours',
      'Meter upgrade may be required for modern capacity',
    ],
    
    priceRange: {
      from: '£4,500',
      to: '£8,000',
      factors: [
        'Property size (2-bed vs 4-bed)',
        'Number of circuits required',
        'Condition of existing installation',
        'Decoration scope included',
      ],
    },
    
    typicalDuration: '5-7 days for standard 3-bed terrace',
    
    faqs: [
      {
        question: 'Will you damage the original cornicing?',
        answer: 'We take great care to preserve period features. We route cables under floors where possible and use existing routes. If ceiling access is needed, we work with specialist plasterers for any necessary repairs.',
      },
      {
        question: 'Can we stay in the house during rewiring?',
        answer: 'Yes, though there will be periods without power. We can usually maintain power to part of the house while working on other areas. We\'ll agree a schedule that minimizes disruption.',
      },
      {
        question: 'Do you offer period-style switches and sockets?',
        answer: 'Yes! We can fit reproduction brass, chrome, or black switches and sockets that complement Victorian properties while meeting modern safety standards.',
      },
    ],
    
    relatedServices: ['boiler-installation', 'bathroom-renovation', 'loft-conversion'],
  },

  // ============================================================================
  // VICTORIAN TERRACED - BOILER INSTALLATION
  // ============================================================================
  {
    propertySlug: 'victorian-terraced',
    serviceSlug: 'boiler-installation',
    
    metaTitle: 'Boiler Installation in Victorian Terraced Houses | Gas Safe Engineers',
    metaDescription: 'Expert boiler installation for Victorian terraces. Chimney flue solutions, high-ceiling heating, period radiators. Gas Safe registered.',
    h1: 'Boiler Installation for Your Victorian Terraced House',
    
    introduction: 'Installing a modern boiler in a Victorian terraced house requires careful consideration of the property\'s unique characteristics. High ceilings, solid walls, and the presence of original chimneys all affect the best solution for your home.',
    
    challenges: [
      'High ceilings (often 3m+) requiring more heating capacity',
      'Solid walls limiting boiler positioning options',
      'Existing chimneys that may or may not be suitable for fluing',
      'Original cast iron radiators that may need upgrading',
      'Low water pressure in some areas',
      'Previous back boiler installations requiring proper removal',
    ],
    
    ourApproach: [
      'Heat loss calculation specific to your Victorian property',
      'Survey of existing flue routes and chimney condition',
      'Assessment of current radiator sizing for high-ceiling rooms',
      'Water pressure test and recommendation',
      'Discussion of boiler type (combi vs system) for your needs',
      'Full installation with 10-year manufacturer warranty',
    ],
    
    typicalScope: [
      'Remove old boiler and dispose responsibly',
      'Install new condensing boiler',
      'Install or adapt flue to current regulations',
      'Upgrade controls (programmable thermostat, TRVs)',
      'Powerflush heating system',
      'Commission, test, and certify installation',
      'Register warranty with manufacturer',
    ],
    
    considerations: [
      'Chimney breast removal may affect boiler positioning',
      'Vertical balanced flue may be needed in some properties',
      'System boiler with cylinder may suit larger Victorian homes',
      'Consider adding radiators to increase heat output',
    ],
    
    priceRange: {
      from: '£2,800',
      to: '£4,500',
      factors: [
        'Boiler brand and model',
        'Complexity of flue route',
        'Whether system changes are needed',
        'Radiator additions or upgrades',
      ],
    },
    
    typicalDuration: '1-2 days for straightforward replacement',
    
    faqs: [
      {
        question: 'Can I keep my original cast iron radiators?',
        answer: 'Often yes, but they may need servicing, pressure testing, and possibly additional radiators to heat high-ceilinged rooms effectively. We\'ll advise during our survey.',
      },
      {
        question: 'Is a combi boiler powerful enough for a Victorian terrace?',
        answer: 'For a 2-3 bed terrace with one bathroom, a combi is usually fine. Larger properties with multiple bathrooms may benefit from a system boiler with unvented cylinder.',
      },
      {
        question: 'What if I\'ve removed my chimney breast?',
        answer: 'We can route the flue through an external wall or up through the loft. We\'ll find the neatest solution that meets regulations.',
      },
    ],
    
    relatedServices: ['rewiring', 'bathroom-renovation', 'plumbing-upgrade'],
  },

  // ============================================================================
  // EDWARDIAN HOUSE - BATHROOM RENOVATION
  // ============================================================================
  {
    propertySlug: 'edwardian-house',
    serviceSlug: 'bathroom-renovation',
    
    metaTitle: 'Bathroom Renovation for Edwardian Houses | Period Property Specialists',
    metaDescription: 'Expert bathroom renovations for Edwardian properties. Blending period style with modern comfort. Specialists in North London since 2010.',
    h1: 'Bathroom Renovation for Your Edwardian House',
    
    introduction: 'Edwardian houses often have bathrooms that haven\'t been updated for decades. Whether you want to restore period character or create a contemporary spa-like space, we can help you design and install the perfect bathroom.',
    
    challenges: [
      'Existing bathroom may have original features worth preserving',
      'Floor construction may need assessment before tiling',
      'Plumbing runs often outdated and restricting layout options',
      'Ventilation may be inadequate for modern use',
      'Window requirements in bathroom spaces',
      'En-suite potential in larger Edwardian bedrooms',
    ],
    
    ourApproach: [
      'Design consultation exploring period and contemporary options',
      'Assessment of existing structure and services',
      'CAD layout options showing different configurations',
      'Selection of sanitaryware, tiles, and fixtures',
      'Full installation with minimal disruption',
      'Detailed quotation with no hidden costs',
    ],
    
    typicalScope: [
      'Strip out existing bathroom',
      'First-fix plumbing and electrical',
      'Floor preparation and waterproofing',
      'Wall tiling and floor tiling',
      'Install sanitaryware and fixtures',
      'Install shower enclosure or bath',
      'Install vanity, storage, and accessories',
      'Decoration and finishing',
    ],
    
    considerations: [
      'Traditional or contemporary style choice',
      'Underfloor heating recommendation',
      'Heated towel rail sizing for period room heights',
      'Mirror lighting and shaver points',
    ],
    
    priceRange: {
      from: '£8,000',
      to: '£18,000',
      factors: [
        'Bathroom size',
        'Quality of sanitaryware',
        'Complexity of layout changes',
        'Tiling specification',
      ],
    },
    
    typicalDuration: '2-3 weeks for typical family bathroom',
    
    faqs: [
      {
        question: 'Can you create a period-style bathroom?',
        answer: 'Absolutely! We can source traditional sanitaryware, high-level cisterns, roll-top baths, and period-style taps that look authentic while functioning perfectly.',
      },
      {
        question: 'Is underfloor heating worth it?',
        answer: 'In an Edwardian bathroom, we strongly recommend it. The high ceilings make floor-level heating especially comfortable, and it frees up wall space from radiators.',
      },
      {
        question: 'Can you add an en-suite?',
        answer: 'Many Edwardian houses have bedrooms large enough for en-suites. We can assess the options, including plumbing routes and extraction requirements.',
      },
    ],
    
    relatedServices: ['rewiring', 'plumbing-upgrade', 'heating-system'],
  },

  // ============================================================================
  // MANSION FLAT - BATHROOM RENOVATION
  // ============================================================================
  {
    propertySlug: 'victorian-mansion-flat',
    serviceSlug: 'bathroom-renovation',
    
    metaTitle: 'Bathroom Renovation in Mansion Flats | Block Specialists',
    metaDescription: 'Expert bathroom renovations for mansion flats. Managing freeholder permissions, communal systems & period features. NW London specialists.',
    h1: 'Bathroom Renovation for Your Mansion Flat',
    
    introduction: 'Renovating a bathroom in a mansion flat requires additional considerations beyond a typical house. From freeholder permissions to communal drainage, our experience with mansion blocks ensures a smooth project.',
    
    challenges: [
      'Freeholder or managing agent permission required',
      'Communal soil stacks limiting layout changes',
      'Neighbours above and below affected by noise and access',
      'High ceilings make some work more complex',
      'Water pressure varies by floor level',
      'Building rules on working hours and deliveries',
    ],
    
    ourApproach: [
      'Liaise with freeholder/managing agent for permissions',
      'Survey of communal drainage affecting your options',
      'Design maximizing space within constraints',
      'Coordinate with neighbours on access and timing',
      'Install with minimum disruption to building',
      'Full documentation for freeholder if required',
    ],
    
    typicalScope: [
      'Prepare building permission documentation',
      'Strip out and dispose responsibly',
      'Install new plumbing within building constraints',
      'Electrical upgrades as needed',
      'Tiling and waterproofing',
      'Sanitaryware and fixture installation',
      'Final inspection and sign-off',
    ],
    
    considerations: [
      'Service charge implications of works',
      'Insurance requirements during project',
      'Method statement for managing agent',
      'Neighbour notification courtesy',
    ],
    
    priceRange: {
      from: '£9,000',
      to: '£20,000',
      factors: [
        'Bathroom size',
        'Extent of layout changes',
        'Permission complexity',
        'Specification of fittings',
      ],
    },
    
    typicalDuration: '2-4 weeks including permission lead time',
    
    faqs: [
      {
        question: 'Do I need permission to renovate my bathroom?',
        answer: 'Usually yes, if you\'re leasehold. Your lease will specify what requires consent. We can help prepare the necessary documentation and plans.',
      },
      {
        question: 'Can I move the bathroom to a different location?',
        answer: 'This depends on proximity to the soil stack and your lease terms. Major layout changes need freeholder consent and may not always be possible.',
      },
      {
        question: 'How do you manage noise and disruption?',
        answer: 'We follow building rules strictly, work during permitted hours, and communicate with neighbours. We aim to be considerate while completing work efficiently.',
      },
    ],
    
    relatedServices: ['plumbing-upgrade', 'rewiring', 'kitchen-fitting'],
  },

  // ============================================================================
  // 1930S SEMI - BOILER INSTALLATION
  // ============================================================================
  {
    propertySlug: '1930s-semi',
    serviceSlug: 'boiler-installation',
    
    metaTitle: 'Boiler Installation for 1930s Semi Houses | Back Boiler Removal',
    metaDescription: 'Expert boiler installation for 1930s semis. Back boiler removal, modern condensing boilers, upgraded controls. Gas Safe registered.',
    h1: 'Boiler Installation for Your 1930s Semi-Detached House',
    
    introduction: 'Many 1930s semis still have original or very old heating systems, including back boilers behind fireplaces. We specialise in upgrading these properties to modern, efficient heating while respecting their character.',
    
    challenges: [
      'Back boiler removal if present (common in 1930s properties)',
      'Existing flue may go through neighbour\'s property',
      'Original cast iron radiators may be undersized',
      'Asbestos may be present in old systems',
      'Pipework often run in concrete floors',
      'Balanced flue positioning on shared wall',
    ],
    
    ourApproach: [
      'Survey including back boiler assessment if present',
      'Asbestos check before any work begins',
      'Heat loss calculation for your specific property',
      'Discussion of boiler location options',
      'Full system design including radiator upgrades',
      'Installation with minimal disruption',
    ],
    
    typicalScope: [
      'Remove back boiler or old boiler',
      'Safe asbestos removal if required (licensed)',
      'Install new condensing boiler',
      'Upgrade or add radiators as needed',
      'Install modern controls (smart thermostat option)',
      'Commission and certify installation',
    ],
    
    considerations: [
      'Back boiler removal leaves space for log burner or gas fire',
      'Kitchen boiler common modern location',
      'Radiator additions for ground floor rooms',
      'TRVs on all radiators except thermostat room',
    ],
    
    priceRange: {
      from: '£2,500',
      to: '£5,000',
      factors: [
        'Back boiler removal required',
        'Asbestos presence',
        'Boiler brand and model',
        'System modifications needed',
      ],
    },
    
    typicalDuration: '1-3 days depending on back boiler removal',
    
    faqs: [
      {
        question: 'What happens when you remove a back boiler?',
        answer: 'We remove the boiler and fire front, seal the chimney opening, and leave a clean fireplace recess. You can then fit a decorative fire, log burner, or simply enjoy the fireplace as a feature.',
      },
      {
        question: 'Is there likely to be asbestos?',
        answer: 'In 1930s properties, asbestos may be present in pipe lagging, boiler insulation, or surrounding materials. We always check before disturbing anything and arrange safe removal if found.',
      },
      {
        question: 'Where should the new boiler go?',
        answer: 'Kitchen is most common in 1930s semis. The utility area or garage are alternatives. We\'ll discuss the options considering aesthetics, efficiency, and regulations.',
      },
    ],
    
    relatedServices: ['rewiring', 'bathroom-renovation', 'plumbing-upgrade'],
  },

  // ============================================================================
  // GEORGIAN TOWNHOUSE - REWIRING
  // ============================================================================
  {
    propertySlug: 'georgian-townhouse',
    serviceSlug: 'rewiring',
    
    metaTitle: 'Rewiring Georgian Townhouses | Listed Building Electricians',
    metaDescription: 'Specialist rewiring for Georgian townhouses. Listed building experience, heritage-appropriate solutions. NICEIC approved. North London.',
    h1: 'Rewiring Your Georgian Townhouse',
    
    introduction: 'Georgian townhouses require exceptional care during electrical works. Original plasterwork, cornicing, and often listed building status mean our specialist approach is essential. We have extensive experience with heritage properties.',
    
    challenges: [
      'Listed building consent may be required',
      'Original lime plaster easily damaged',
      'Multiple floors each needing circuits',
      'Period features must be preserved',
      'Existing wiring may be from multiple eras',
      'Consumer unit position limited by heritage considerations',
    ],
    
    ourApproach: [
      'Heritage assessment before work begins',
      'Listed building consent application support if needed',
      'Cable routing that minimizes visible impact',
      'Period-appropriate switches and sockets',
      'Working with conservation officers',
      'Documentation for heritage records',
    ],
    
    typicalScope: [
      'Detailed heritage survey and method statement',
      'Listed building application if required',
      'Careful removal of existing wiring',
      'Sympathetic installation of new circuits',
      'Period-style accessories throughout',
      'Testing and certification',
      'Heritage record documentation',
    ],
    
    considerations: [
      'Listed building consent timeline (8 weeks typical)',
      'Heritage materials may be required',
      'Conservation officer site visits may occur',
      'Higher specification accessories recommended',
    ],
    
    priceRange: {
      from: '£8,000',
      to: '£18,000',
      factors: [
        'Listed building status',
        'Number of floors',
        'Complexity of cable routing',
        'Period accessory specification',
      ],
    },
    
    typicalDuration: '2-3 weeks for 4-storey townhouse',
    
    faqs: [
      {
        question: 'Do I need listed building consent for rewiring?',
        answer: 'Not always, but usually. If cables will be surface-mounted or routed through original fabric, consent is likely needed. We can assess your property and advise.',
      },
      {
        question: 'Can you match the original style?',
        answer: 'Yes! We use specialist suppliers of period brass switches, porcelain accessories, and authentic-style fittings that complement Georgian interiors.',
      },
      {
        question: 'How do you protect the plasterwork?',
        answer: 'We route cables under floors and through existing voids wherever possible. Where plaster work is unavoidable, we work with specialist heritage plasterers for invisible repairs.',
      },
    ],
    
    relatedServices: ['boiler-installation', 'bathroom-renovation', 'plumbing-upgrade'],
  },

  // ============================================================================
  // MODERN APARTMENT - BATHROOM RENOVATION
  // ============================================================================
  {
    propertySlug: 'modern-apartment',
    serviceSlug: 'bathroom-renovation',
    
    metaTitle: 'Bathroom Renovation for Modern Apartments | Contemporary Design',
    metaDescription: 'Expert bathroom renovations for modern apartments. Understanding warranties, regulations & communal systems. Professional finish guaranteed.',
    h1: 'Bathroom Renovation for Your Modern Apartment',
    
    introduction: 'Modern apartments have specific considerations for bathroom renovation, including building warranties, service charge implications, and often managing agent requirements. Our experience ensures a smooth process.',
    
    challenges: [
      'NHBC or similar warranty may be affected',
      'Managing agent permissions required',
      'Communal drainage and service risers',
      'Fire compartmentation must be maintained',
      'Mechanical ventilation requirements',
      'Watertight construction important for neighbours',
    ],
    
    ourApproach: [
      'Check warranty implications before starting',
      'Obtain necessary permissions',
      'Design maximizing modern aesthetics',
      'Install with full compliance',
      'Documentation for managing agent',
      'Completion certificate provided',
    ],
    
    typicalScope: [
      'Strip out existing bathroom',
      'Upgrade plumbing as needed',
      'Waterproofing to tanking standards',
      'Install new sanitaryware',
      'Contemporary tiling',
      'Install vanity and storage',
      'Commission and test',
    ],
    
    considerations: [
      'Warranty period and what\'s covered',
      'Building insurance notification',
      'Working hour restrictions',
      'Delivery and waste removal logistics',
    ],
    
    priceRange: {
      from: '£7,000',
      to: '£15,000',
      factors: [
        'En-suite vs family bathroom',
        'Specification of fittings',
        'Layout changes',
        'Tiling complexity',
      ],
    },
    
    typicalDuration: '2 weeks for typical en-suite',
    
    faqs: [
      {
        question: 'Will this affect my building warranty?',
        answer: 'Potentially. We recommend checking with your warranty provider before works begin. If within warranty period, you may need to use approved contractors for certain elements.',
      },
      {
        question: 'Do I need managing agent permission?',
        answer: 'Usually yes for leasehold apartments. Your lease will specify requirements. We can help with the necessary documentation.',
      },
      {
        question: 'Can I change the bathroom layout?',
        answer: 'Layout changes may be limited by proximity to service risers and drainage. We\'ll survey and advise on your options.',
      },
    ],
    
    relatedServices: ['kitchen-fitting', 'plumbing-upgrade', 'heating-system'],
  },

  // ============================================================================
  // PERIOD CONVERSION - HEATING SYSTEM
  // ============================================================================
  {
    propertySlug: 'period-conversion',
    serviceSlug: 'heating-system',
    
    metaTitle: 'Central Heating for Period Conversion Flats | Heating Specialists',
    metaDescription: 'Expert heating system installation for period conversion flats. Balancing efficiency with period constraints. Gas Safe registered.',
    h1: 'Central Heating for Your Period Conversion Flat',
    
    introduction: 'Period conversion flats often have heating systems cobbled together during conversion or updated piecemeal over decades. We can design and install a modern, efficient system tailored to your flat.',
    
    challenges: [
      'High ceilings from original Victorian/Edwardian house',
      'Limited options for boiler and cylinder positioning',
      'Existing pipework may be poor quality',
      'Radiator sizing often inadequate',
      'No access to areas in other flats',
      'Flue routing restrictions',
    ],
    
    ourApproach: [
      'Survey of existing system and constraints',
      'Heat loss calculation for your specific flat',
      'Design efficient system within available space',
      'Upgrade radiators for high-ceiling effectiveness',
      'Install smart controls for efficiency',
      'Full certification and warranty registration',
    ],
    
    typicalScope: [
      'Remove old heating system',
      'Install new boiler (combi or system)',
      'Install or upgrade radiators',
      'Fit new pipework where needed',
      'Install smart thermostat and TRVs',
      'Commission and balance system',
      'Gas Safe certification',
    ],
    
    considerations: [
      'Combi vs system boiler for your needs',
      'Radiator style (modern or traditional)',
      'Smart heating controls',
      'Future-proofing for heat pump conversion',
    ],
    
    priceRange: {
      from: '£4,000',
      to: '£8,000',
      factors: [
        'Flat size',
        'Number of radiators',
        'Boiler type and model',
        'Pipework replacement extent',
      ],
    },
    
    typicalDuration: '2-4 days for complete system',
    
    faqs: [
      {
        question: 'What size boiler do I need for a high-ceiling flat?',
        answer: 'We calculate heat loss properly, accounting for ceiling height. Period conversion flats typically need more heating capacity than modern flats of the same floor area.',
      },
      {
        question: 'Can I have traditional-style radiators?',
        answer: 'Yes! Column radiators and traditional styles work well in period conversions and are available in sizes suitable for high-ceiling rooms.',
      },
      {
        question: 'Will the new system be more efficient?',
        answer: 'Significantly! A modern condensing boiler with proper controls and correctly sized radiators will heat your flat more effectively while using less gas.',
      },
    ],
    
    relatedServices: ['rewiring', 'bathroom-renovation', 'plumbing-upgrade'],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getPropertyType(slug: string): PropertyType | undefined {
  return propertyTypes.find(p => p.slug === slug);
}

export function getPropertyServiceMatrix(propertySlug: string, serviceSlug: string): PropertyServiceMatrix | undefined {
  return propertyServiceMatrixPages.find(
    p => p.propertySlug === propertySlug && p.serviceSlug === serviceSlug
  );
}

export function getMatrixPagesForProperty(propertySlug: string): PropertyServiceMatrix[] {
  return propertyServiceMatrixPages.filter(p => p.propertySlug === propertySlug);
}

export function getMatrixPagesForService(serviceSlug: string): PropertyServiceMatrix[] {
  return propertyServiceMatrixPages.filter(p => p.serviceSlug === serviceSlug);
}

export function generatePropertyServiceParams(): { buildingType: string; service: string }[] {
  return propertyServiceMatrixPages.map(p => ({
    buildingType: p.propertySlug,
    service: p.serviceSlug,
  }));
}

export function countPropertyServicePages(): number {
  return propertyServiceMatrixPages.length;
}

// Get property type info for matrix page
export function getPropertyTypeForMatrix(slug: string): PropertyType | undefined {
  return propertyTypes.find(p => p.slug === slug);
}
