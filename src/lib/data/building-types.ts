// ============================================================================
// PSEO ENGINE - BUILDING TYPE DATABASE
// Comprehensive database of property types with technical renovation advice
// Idea 61: Building Type Programmatic Pages
// ============================================================================

export interface BuildingType {
  slug: string;
  name: string;
  shortName: string;
  era: string;
  typicalPostcodes: string[];
  
  // SEO Content
  metaTitle: string;
  metaDescription: string;
  
  // Technical Details
  characteristics: {
    floors: string;
    construction: string;
    roofType: string;
    windowType: string;
    heatingSystem: string;
  };
  
  // Renovation Challenges
  challenges: {
    title: string;
    description: string;
    solution: string;
    icon: string;
  }[];
  
  // Common Services
  popularServices: string[];  // Service slugs
  
  // Regulations & Compliance
  regulations: {
    title: string;
    description: string;
    requirement: 'mandatory' | 'recommended' | 'conditional';
  }[];
  
  // Estimated Costs
  typicalCosts: {
    service: string;
    priceRange: string;
    notes: string;
  }[];
  
  // Case Studies / Examples
  examples: {
    title: string;
    location: string;
    description: string;
    beforeAfter?: boolean;
  }[];
  
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const buildingTypes: BuildingType[] = [
  // ============================================================================
  // VICTORIAN TERRACE
  // ============================================================================
  {
    slug: 'victorian-terrace',
    name: 'Victorian Terrace House',
    shortName: 'Victorian Terrace',
    era: '1837-1901',
    typicalPostcodes: ['NW3', 'NW5', 'NW6', 'N6', 'N19'],
    
    metaTitle: 'Victorian Terrace Renovation Specialists | Expert Builders NW3',
    metaDescription: 'Expert Victorian terrace renovation in North London. We understand period features, party wall requirements, and conservation area rules. Trusted since 2010.',
    
    characteristics: {
      floors: '2-4 storeys typical',
      construction: 'Solid brick walls (9-14 inch), lime mortar',
      roofType: 'Slate pitched roof with lead valleys',
      windowType: 'Original timber sash windows',
      heatingSystem: 'Originally coal fireplaces, often converted to gas central heating',
    },
    
    challenges: [
      {
        title: 'Fire Regulation Compliance',
        description: '4-storey Victorian houses require upgraded fire protection including fire doors, escape routes, and smoke detection systems.',
        solution: 'We install compliant fire doors while matching period styling. Our designs maintain character while meeting Building Regulations Part B.',
        icon: 'flame',
      },
      {
        title: 'Solid Wall Insulation',
        description: 'Victorian solid walls have no cavity, making insulation challenging without affecting period features.',
        solution: 'We use breathable internal wall insulation systems that preserve external character and prevent moisture buildup.',
        icon: 'thermometer',
      },
      {
        title: 'Party Wall Considerations',
        description: 'Terraced properties share walls with neighbours, requiring Party Wall Agreements for most structural work.',
        solution: 'We manage the entire Party Wall process including surveyor appointments, agreements, and neighbour liaison.',
        icon: 'users',
      },
      {
        title: 'Damp & Timber Issues',
        description: 'Rising damp, penetrating damp, and woodworm are common in 100+ year old properties.',
        solution: 'Full damp surveys and timber inspections before work begins. We use period-appropriate lime-based treatments.',
        icon: 'droplets',
      },
      {
        title: 'Original Feature Preservation',
        description: 'Conservation areas require retention of period features like cornices, fireplaces, and sash windows.',
        solution: 'Our craftsmen specialise in restoration. We source reclaimed materials and can replicate missing features.',
        icon: 'landmark',
      },
    ],
    
    popularServices: [
      'sash-window-restoration',
      'loft-conversion',
      'side-return-extension',
      'basement-conversion',
      'rewiring',
      'boiler-installation',
      'bathroom-installation',
      'kitchen-fitting',
    ],
    
    regulations: [
      {
        title: 'Conservation Area Consent',
        description: 'External alterations in conservation areas require planning permission. This includes windows, doors, and roof changes.',
        requirement: 'mandatory',
      },
      {
        title: 'Building Regulations Part B (Fire)',
        description: 'Properties over 2 storeys require fire doors to habitable rooms and protected escape routes.',
        requirement: 'mandatory',
      },
      {
        title: 'Party Wall Act 1996',
        description: 'Any work to shared walls, excavation within 3m of neighbours, or work affecting party structures requires notice.',
        requirement: 'mandatory',
      },
      {
        title: 'Listed Building Consent',
        description: 'Grade II listed properties require consent for any alterations, internal or external.',
        requirement: 'conditional',
      },
      {
        title: 'Article 4 Direction',
        description: 'Many NW3 streets have Article 4 removing permitted development rights for front elevations.',
        requirement: 'conditional',
      },
    ],
    
    typicalCosts: [
      { service: 'Full Rewire', priceRange: '£8,000 - £15,000', notes: '4-bed terrace, including consumer unit upgrade' },
      { service: 'Loft Conversion', priceRange: '£45,000 - £75,000', notes: 'Dormer or mansard style' },
      { service: 'Side Return Extension', priceRange: '£50,000 - £90,000', notes: 'Including kitchen fit-out' },
      { service: 'Basement Conversion', priceRange: '£150,000 - £300,000', notes: 'Full dig-out with light well' },
      { service: 'Sash Window Overhaul', priceRange: '£400 - £800 per window', notes: 'Draught-proofing and repair' },
      { service: 'Bathroom Refurbishment', priceRange: '£15,000 - £35,000', notes: 'Mid to high specification' },
    ],
    
    examples: [
      {
        title: 'Period Bathroom Restoration',
        location: 'Redington Road, NW3',
        description: 'Restored original Victorian bathroom with roll-top bath, period-style sanitaryware, and heated towel rail disguised as traditional radiator.',
        beforeAfter: true,
      },
      {
        title: 'Side Return Kitchen Extension',
        location: 'Arkwright Road, NW3',
        description: 'Extended into side return creating open-plan kitchen-diner with bi-fold doors to garden. Heritage-sensitive design approved in conservation area.',
        beforeAfter: true,
      },
    ],
    
    faqs: [
      {
        question: 'Do I need planning permission to renovate a Victorian terrace?',
        answer: 'Internal renovations typically don\'t need planning permission unless the property is listed. However, in conservation areas, external changes like windows, doors, and extensions require planning approval. We handle all applications.',
      },
      {
        question: 'How do you deal with Victorian solid walls?',
        answer: 'We use breathable insulation systems that work with the building\'s natural moisture movement. This preserves the walls while improving thermal performance. We avoid non-breathable materials that can trap moisture and cause damage.',
      },
      {
        question: 'Can you match original Victorian features?',
        answer: 'Yes, our craftsmen specialise in period restoration. We can source reclaimed materials, replicate cornices and ceiling roses, restore original fireplaces, and repair sash windows to their former glory.',
      },
      {
        question: 'What fire safety upgrades are required?',
        answer: 'Properties over 4.5m in height (typically 3+ storeys) need fire doors to habitable rooms, a protected escape route, and interlinked smoke/heat alarms. We design solutions that meet regulations while maintaining period character.',
      },
    ],
  },

  // ============================================================================
  // EDWARDIAN HOUSE
  // ============================================================================
  {
    slug: 'edwardian-house',
    name: 'Edwardian House',
    shortName: 'Edwardian',
    era: '1901-1910',
    typicalPostcodes: ['NW3', 'NW11', 'N2', 'N6', 'NW2'],
    
    metaTitle: 'Edwardian House Renovation Experts | Period Property Specialists',
    metaDescription: 'Edwardian house renovation specialists in North London. Experts in Arts & Crafts features, larger room layouts, and period-sensitive upgrades.',
    
    characteristics: {
      floors: '2-3 storeys typical',
      construction: 'Cavity or solid brick walls, wider plots than Victorian',
      roofType: 'Clay tile pitched roof, often with decorative ridges',
      windowType: 'Large timber sash or casement windows',
      heatingSystem: 'Originally coal, often early radiator systems',
    },
    
    challenges: [
      {
        title: 'Larger Scale Heating',
        description: 'Edwardian rooms are typically larger than Victorian, requiring careful heating system design.',
        solution: 'We specify correctly sized radiators and boilers for the larger volumes, often using column radiators that suit the period aesthetic.',
        icon: 'thermometer',
      },
      {
        title: 'Decorative Plasterwork',
        description: 'Picture rails, dado rails, and ornate cornices need careful protection during renovation.',
        solution: 'We carefully protect and restore decorative elements. Missing sections are replicated by our specialist plasterers.',
        icon: 'palette',
      },
      {
        title: 'Original Joinery',
        description: 'High-quality Edwardian joinery including panelled doors and built-in cupboards deserves preservation.',
        solution: 'We strip, repair and refinish original joinery. New work is designed to match existing profiles.',
        icon: 'door-open',
      },
    ],
    
    popularServices: [
      'central-heating-installation',
      'kitchen-fitting',
      'bathroom-installation',
      'loft-conversion',
      'garden-room',
      'rewiring',
      'decorating',
    ],
    
    regulations: [
      {
        title: 'Conservation Area Consent',
        description: 'Many Edwardian streets are in conservation areas with strict controls on external changes.',
        requirement: 'conditional',
      },
      {
        title: 'Building Regulations Part L',
        description: 'Energy efficiency requirements apply to replacement windows and heating systems.',
        requirement: 'mandatory',
      },
      {
        title: 'Party Wall Act 1996',
        description: 'Required for work affecting shared structures with semi-detached neighbours.',
        requirement: 'conditional',
      },
    ],
    
    typicalCosts: [
      { service: 'Full House Rewire', priceRange: '£10,000 - £18,000', notes: '5-bed Edwardian, larger floor plates' },
      { service: 'Loft Conversion', priceRange: '£50,000 - £85,000', notes: 'Often more space than Victorian lofts' },
      { service: 'Central Heating Upgrade', priceRange: '£8,000 - £15,000', notes: 'New boiler and radiators throughout' },
      { service: 'Kitchen Installation', priceRange: '£25,000 - £60,000', notes: 'Larger kitchens than Victorian' },
    ],
    
    examples: [
      {
        title: 'Full House Modernisation',
        location: 'Hampstead Garden Suburb, NW11',
        description: 'Complete update of 5-bed Edwardian while preserving all original features. New heating, electrics, bathrooms, and kitchen.',
        beforeAfter: true,
      },
    ],
    
    faqs: [
      {
        question: 'What makes Edwardian houses different from Victorian?',
        answer: 'Edwardian houses typically have larger rooms, wider hallways, bigger windows, and more garden space. They often feature Arts & Crafts influences with simpler, bolder decorative details compared to ornate Victorian styling.',
      },
      {
        question: 'Are Edwardian houses easier to renovate?',
        answer: 'In some ways, yes. Larger rooms are more flexible, and some have early cavity walls which are easier to insulate. However, they still require period-sensitive approaches and specialist knowledge.',
      },
    ],
  },

  // ============================================================================
  // GEORGIAN TOWNHOUSE
  // ============================================================================
  {
    slug: 'georgian-townhouse',
    name: 'Georgian Townhouse',
    shortName: 'Georgian',
    era: '1714-1837',
    typicalPostcodes: ['NW1', 'NW3', 'N1', 'WC1'],
    
    metaTitle: 'Georgian Townhouse Renovation | Listed Building Specialists',
    metaDescription: 'Georgian townhouse renovation experts. Specialists in listed building consent, lime-based repairs, and sympathetic period upgrades in London.',
    
    characteristics: {
      floors: '3-5 storeys typical',
      construction: 'Solid brick, lime mortar, often with stucco facades',
      roofType: 'Slate with parapet or hidden gutter',
      windowType: '6-over-6 or 12-over-12 timber sash windows',
      heatingSystem: 'Coal fireplaces, often with basement kitchen range',
    },
    
    challenges: [
      {
        title: 'Listed Building Consent',
        description: 'Most Georgian townhouses are Grade II or II* listed, requiring consent for any alterations.',
        solution: 'We have extensive experience with heritage applications. Our designs balance modern needs with conservation requirements.',
        icon: 'scroll',
      },
      {
        title: 'Lime-Based Construction',
        description: 'Georgian buildings rely on lime mortar\'s breathability. Cement repairs cause damage.',
        solution: 'We exclusively use lime mortars, renders, and plasters. Our team is trained in traditional techniques.',
        icon: 'brick-wall',
      },
      {
        title: 'Structural Movement',
        description: 'Georgian buildings have often settled over centuries. This is normal but needs understanding.',
        solution: 'We distinguish between historic settlement (stable) and active movement (concerning). Monitoring before intervention.',
        icon: 'move',
      },
    ],
    
    popularServices: [
      'lime-plastering',
      'sash-window-restoration',
      'rewiring',
      'central-heating-installation',
      'basement-conversion',
      'structural-repairs',
    ],
    
    regulations: [
      {
        title: 'Listed Building Consent',
        description: 'Required for all alterations to listed buildings, internal and external.',
        requirement: 'mandatory',
      },
      {
        title: 'Conservation Officer Approval',
        description: 'Camden, Westminster and Islington have strict conservation teams.',
        requirement: 'mandatory',
      },
    ],
    
    typicalCosts: [
      { service: 'Sash Window Overhaul', priceRange: '£600 - £1,200 per window', notes: 'Larger Georgian windows' },
      { service: 'Full Lime Replaster', priceRange: '£80 - £120 per sqm', notes: 'Traditional lime plaster system' },
      { service: 'Basement Conversion', priceRange: '£200,000 - £400,000', notes: 'Often deeper dig in townhouses' },
    ],
    
    examples: [
      {
        title: 'Sympathetic Basement Extension',
        location: 'Regent\'s Park, NW1',
        description: 'Grade II* listed townhouse basement converted to media room and gym without any visible external changes.',
        beforeAfter: false,
      },
    ],
    
    faqs: [
      {
        question: 'Can you modernise a listed Georgian house?',
        answer: 'Yes, but it requires careful design and listed building consent. We\'ve successfully installed modern kitchens, bathrooms, and heating systems in listed properties while preserving their character.',
      },
      {
        question: 'Why is lime mortar so important?',
        answer: 'Georgian buildings were designed to breathe. Lime mortar allows moisture to evaporate through the walls. Cement traps moisture, causing damp, decay, and eventually structural damage.',
      },
    ],
  },

  // ============================================================================
  // MANSION BLOCK
  // ============================================================================
  {
    slug: 'mansion-block',
    name: 'Mansion Block Flat',
    shortName: 'Mansion Block',
    era: '1880-1930',
    typicalPostcodes: ['NW3', 'NW8', 'W9', 'SW5', 'SW7'],
    
    metaTitle: 'Mansion Block Refurbishment | Flat Renovation Specialists NW3',
    metaDescription: 'Mansion block flat refurbishment in North London. Experts in leasehold requirements, freeholder permissions, and period apartment renovations.',
    
    characteristics: {
      floors: '4-7 storeys in large blocks',
      construction: 'Solid brick with communal areas, often with lifts',
      roofType: 'Flat or low-pitched roof',
      windowType: 'Large timber sash or Crittall-style windows',
      heatingSystem: 'Often communal heating or individual boilers',
    },
    
    challenges: [
      {
        title: 'Leasehold Permissions',
        description: 'Most mansion block flats are leasehold, requiring freeholder consent for alterations.',
        solution: 'We handle all licence to alter applications and liaise directly with managing agents and freeholders.',
        icon: 'file-text',
      },
      {
        title: 'Noise Transfer to Neighbours',
        description: 'Works in flats affect neighbours above, below, and either side.',
        solution: 'We install acoustic underlays, work during approved hours, and maintain excellent neighbour relations.',
        icon: 'volume-2',
      },
      {
        title: 'Access & Delivery',
        description: 'Lifts have weight limits, stairs are narrow, and porters control access.',
        solution: 'Careful logistics planning, early communication with building management, and phased material deliveries.',
        icon: 'truck',
      },
      {
        title: 'Communal Systems',
        description: 'Plumbing risers, electrical supplies, and heating may be communal.',
        solution: 'We coordinate with building management for any work affecting shared systems. Full isolation procedures.',
        icon: 'settings',
      },
    ],
    
    popularServices: [
      'kitchen-fitting',
      'bathroom-installation',
      'rewiring',
      'flooring',
      'decorating',
      'storage-solutions',
    ],
    
    regulations: [
      {
        title: 'Licence to Alter',
        description: 'Lease typically requires freeholder permission for structural changes.',
        requirement: 'mandatory',
      },
      {
        title: 'Building Insurance Notification',
        description: 'Building insurers must be notified of major works.',
        requirement: 'mandatory',
      },
      {
        title: 'Working Hours Restrictions',
        description: 'Most blocks restrict noisy work to weekday daytime hours.',
        requirement: 'mandatory',
      },
    ],
    
    typicalCosts: [
      { service: 'Full Flat Rewire', priceRange: '£4,000 - £8,000', notes: '2-bed mansion flat' },
      { service: 'Kitchen Installation', priceRange: '£15,000 - £35,000', notes: 'Space often limited' },
      { service: 'Bathroom Refurbishment', priceRange: '£10,000 - £25,000', notes: 'Including waste relocation if needed' },
    ],
    
    examples: [
      {
        title: 'Complete Flat Modernisation',
        location: 'Maida Vale, W9',
        description: 'Total refurbishment of 3-bed mansion flat including new kitchen, two bathrooms, rewire, and redecoration. All within lease requirements.',
        beforeAfter: true,
      },
    ],
    
    faqs: [
      {
        question: 'Do I need permission to renovate my mansion block flat?',
        answer: 'Usually yes. Check your lease for the "alterations" clause. Most leases require written consent from the freeholder for structural changes, bathroom/kitchen relocations, and sometimes even flooring changes.',
      },
      {
        question: 'How do you minimise disruption to neighbours?',
        answer: 'We introduce ourselves to neighbours before starting, adhere strictly to permitted hours, use dust containment, and install acoustic protection. We aim to be the best contractors the building has ever had.',
      },
    ],
  },

  // ============================================================================
  // MEWS HOUSE
  // ============================================================================
  {
    slug: 'mews-house',
    name: 'Mews House',
    shortName: 'Mews',
    era: '1800-1920 (converted 1950s onwards)',
    typicalPostcodes: ['NW1', 'NW3', 'NW8', 'W1', 'SW1', 'SW3'],
    
    metaTitle: 'Mews House Conversion & Renovation | Specialist Builders London',
    metaDescription: 'Mews house renovation and conversion specialists. Experts in maximising compact spaces, garage conversions, and cobbled street access challenges.',
    
    characteristics: {
      floors: '2-3 storeys, compact footprint',
      construction: 'Brick, often with large ground floor openings (former stables)',
      roofType: 'Flat or shallow pitched',
      windowType: 'Often replaced, varying styles',
      heatingSystem: 'Individual gas or electric systems',
    },
    
    challenges: [
      {
        title: 'Compact Space Maximisation',
        description: 'Mews houses are typically 800-1500 sqft across 2-3 floors. Every inch counts.',
        solution: 'We specialise in space-saving designs: built-in storage, mezzanines, and clever layouts.',
        icon: 'maximize',
      },
      {
        title: 'Cobbled Street Access',
        description: 'Historic cobbles and narrow lanes make skip placement and deliveries challenging.',
        solution: 'We use smaller vehicles, hand-carry materials when needed, and coordinate with neighbours for access.',
        icon: 'truck',
      },
      {
        title: 'Ground Floor Living',
        description: 'Many mews convert the former garage/stable to living space, raising damp concerns.',
        solution: 'Proper damp-proofing, tanking, and ventilation for below-ground or ground-level rooms.',
        icon: 'home',
      },
      {
        title: 'Limited Natural Light',
        description: 'Small windows and narrow streets can make interiors dark.',
        solution: 'Rooflights, light wells, and open-plan designs to maximise natural light penetration.',
        icon: 'sun',
      },
    ],
    
    popularServices: [
      'garage-conversion',
      'loft-conversion',
      'kitchen-fitting',
      'bathroom-installation',
      'underfloor-heating',
      'storage-solutions',
    ],
    
    regulations: [
      {
        title: 'Conservation Area Rules',
        description: 'Many mews are in conservation areas with external alteration restrictions.',
        requirement: 'conditional',
      },
      {
        title: 'Change of Use',
        description: 'Converting garage to living space may require planning permission.',
        requirement: 'conditional',
      },
    ],
    
    typicalCosts: [
      { service: 'Garage to Living Conversion', priceRange: '£30,000 - £60,000', notes: 'Including damp-proofing' },
      { service: 'Full Mews Refurbishment', priceRange: '£80,000 - £150,000', notes: 'Complete interior renovation' },
      { service: 'Rooflight Installation', priceRange: '£2,000 - £5,000 per light', notes: 'Critical for light' },
    ],
    
    examples: [
      {
        title: 'Garage to Kitchen Conversion',
        location: 'Belsize Park Mews, NW3',
        description: 'Former garage converted to open-plan kitchen-living space with glass roof and bi-fold doors to courtyard.',
        beforeAfter: true,
      },
    ],
    
    faqs: [
      {
        question: 'Can I extend a mews house?',
        answer: 'Options are limited due to small plots and conservation rules. However, roof extensions, basements (in some cases), and internal reconfiguration can significantly increase usable space.',
      },
      {
        question: 'How do you deal with mews access issues?',
        answer: 'We plan deliveries carefully, often using smaller vehicles or hand-carrying materials. We coordinate with neighbours and obtain any necessary temporary parking suspensions for skips.',
      },
    ],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getBuildingTypeBySlug(slug: string): BuildingType | undefined {
  return buildingTypes.find(bt => bt.slug === slug);
}

export function getAllBuildingTypeSlugs(): string[] {
  return buildingTypes.map(bt => bt.slug);
}

export function getBuildingTypesForPostcode(postcode: string): BuildingType[] {
  return buildingTypes.filter(bt => bt.typicalPostcodes.includes(postcode));
}
