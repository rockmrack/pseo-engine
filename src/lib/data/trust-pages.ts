// ============================================================================
// PSEO ENGINE - TRUST & RECOMMENDATION PAGES DATABASE
// Local authority and trust-building pages
// 5x SEO Domination - Strategy 5
// ============================================================================

export interface TrustPage {
  slug: string;
  name: string;
  postcode: string;
  type: 'area' | 'postcode' | 'neighborhood';
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  h1: string;
  
  // Trust Content
  localPresence: {
    yearsServing: number;
    projectsCompleted: string;
    localTeamMembers: number;
    avgResponseTime: string;
  };
  
  // Area-specific content
  areaKnowledge: {
    propertyTypes: string[];
    commonChallenges: string[];
    conservationNotes?: string;
    localRegulations?: string[];
  };
  
  // Social Proof
  localTestimonials: {
    name: string;
    location: string;
    service: string;
    quote: string;
    rating: number;
    date: string;
  }[];
  
  // Accreditations relevant to area
  relevantAccreditations: {
    name: string;
    description: string;
    icon: string;
  }[];
  
  // Recent projects in area
  recentProjects: {
    title: string;
    description: string;
    services: string[];
    completionDate: string;
  }[];
  
  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Nearby areas we also cover
  nearbyAreas: string[];
}

export const trustPages: TrustPage[] = [
  // ============================================================================
  // HAMPSTEAD
  // ============================================================================
  {
    slug: 'hampstead',
    name: 'Hampstead',
    postcode: 'NW3',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders & Plumbers in Hampstead | Local Since 2010',
    metaDescription: 'Looking for trusted tradespeople in Hampstead NW3? Hampstead Renovations has served the local community since 2010. Gas Safe, NICEIC approved. Free quotes.',
    h1: 'Your Trusted Local Tradespeople in Hampstead',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '500+',
      localTeamMembers: 8,
      avgResponseTime: '2 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Victorian terraced houses',
        'Edwardian semis',
        'Period mansion blocks',
        'Georgian townhouses',
        'Modern developments',
      ],
      commonChallenges: [
        'Conservation area restrictions on external works',
        'Period features requiring specialist restoration',
        'Basement conversions in sloping terrain',
        'Party wall considerations in terraced streets',
        'Listed building constraints',
      ],
      conservationNotes: 'Much of Hampstead is a designated conservation area. We have extensive experience navigating planning requirements and maintaining the character of period properties.',
      localRegulations: [
        'Hampstead Conservation Area guidelines',
        'Camden Council Article 4 directions',
        'Tree Preservation Orders (common in area)',
        'Listed Building consent requirements',
      ],
    },
    
    localTestimonials: [
      {
        name: 'Sarah M.',
        location: 'Flask Walk, Hampstead',
        service: 'Victorian bathroom restoration',
        quote: 'They understood exactly what our Grade II listed cottage needed. The attention to period detail was exceptional.',
        rating: 5,
        date: '2024-09',
      },
      {
        name: 'James & Emma T.',
        location: 'Downshire Hill, NW3',
        service: 'Full house rewiring',
        quote: 'Rewiring our Edwardian house with minimal disruption seemed impossible, but they achieved it beautifully.',
        rating: 5,
        date: '2024-07',
      },
      {
        name: 'Dr. Alan H.',
        location: 'Well Walk, Hampstead',
        service: 'Heating system upgrade',
        quote: 'Our Victorian heating system was upgraded sympathetically. They even sourced period-appropriate radiators.',
        rating: 5,
        date: '2024-11',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Legally required for all gas work. All our gas engineers are registered and ID-verified.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved Contractor',
        description: 'Highest level of electrical competence certification, inspected annually.',
        icon: 'niceic',
      },
      {
        name: 'TrustMark',
        description: 'Government-endorsed quality scheme with financial protection for consumers.',
        icon: 'trustmark',
      },
      {
        name: 'Federation of Master Builders',
        description: 'Vetted members demonstrating quality workmanship and fair practices.',
        icon: 'fmb',
      },
    ],
    
    recentProjects: [
      {
        title: 'Georgian Townhouse Renovation',
        description: 'Complete refurbishment of 4-storey townhouse including rewiring, replumbing, and restoration of original features.',
        services: ['rewiring', 'plumbing', 'plastering', 'decorating'],
        completionDate: '2024-10',
      },
      {
        title: 'Basement Conversion',
        description: 'Full basement dig-out and conversion creating home cinema and gym in Victorian semi.',
        services: ['basement-conversion', 'structural-work', 'waterproofing'],
        completionDate: '2024-08',
      },
      {
        title: 'Period Kitchen Extension',
        description: 'Rear extension with conservation-approved design, connecting to landscaped garden.',
        services: ['extension', 'kitchen-fitting', 'electrical', 'plumbing'],
        completionDate: '2024-06',
      },
    ],
    
    faqs: [
      {
        question: 'How do you handle conservation area requirements in Hampstead?',
        answer: 'We have 14 years of experience working in Hampstead\'s conservation areas. We know which works need planning permission, which are permitted development, and how to design sympathetic solutions. We can guide you through the planning process if needed.',
      },
      {
        question: 'Can you work on listed buildings?',
        answer: 'Yes, we have experience with Grade I, II*, and II listed buildings. We understand the consent process and work with appropriate materials and techniques. We can recommend heritage consultants for complex applications.',
      },
      {
        question: 'How quickly can you respond to emergencies in Hampstead?',
        answer: 'Our base on Finchley Road is just minutes from most of Hampstead. For genuine emergencies, we typically arrive within 1-2 hours. Our local knowledge means we know the quickest routes and parking options.',
      },
      {
        question: 'Do you understand Party Wall Act requirements?',
        answer: 'Absolutely. Many Hampstead properties are terraced or semi-detached, requiring Party Wall agreements for certain works. We advise on requirements and can recommend party wall surveyors.',
      },
    ],
    
    nearbyAreas: ['belsize-park', 'swiss-cottage', 'west-hampstead', 'highgate', 'primrose-hill'],
  },

  // ============================================================================
  // HIGHGATE
  // ============================================================================
  {
    slug: 'highgate',
    name: 'Highgate',
    postcode: 'N6',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders & Tradespeople in Highgate N6 | Local Experts',
    metaDescription: 'Reliable tradespeople in Highgate, N6. Expert builders, plumbers, and electricians serving the village since 2010. Conservation area specialists.',
    h1: 'Your Trusted Local Tradespeople in Highgate',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '200+',
      localTeamMembers: 4,
      avgResponseTime: '2.5 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Victorian villas',
        'Georgian houses',
        'Arts and Crafts properties',
        'Period cottages',
        'Edwardian terraces',
      ],
      commonChallenges: [
        'Steep terrain affecting drainage and access',
        'Large properties with complex systems',
        'Conservation area requirements',
        'Mature trees affecting foundations',
        'Historic building restoration',
      ],
      conservationNotes: 'Highgate includes multiple conservation areas. We understand the distinct character requirements and work sympathetically with this unique village environment.',
      localRegulations: [
        'Highgate Conservation Area guidelines',
        'Haringey/Camden boundary requirements',
        'Tree Preservation Orders',
        'Highgate Cemetery zone restrictions',
      ],
    },
    
    localTestimonials: [
      {
        name: 'Robert P.',
        location: 'South Grove, Highgate',
        service: 'Complete renovation',
        quote: 'Our Arts and Crafts house needed specialists who understood its unique features. They exceeded expectations.',
        rating: 5,
        date: '2024-08',
      },
      {
        name: 'Victoria S.',
        location: 'The Grove, N6',
        service: 'Basement waterproofing',
        quote: 'The hillside location made waterproofing complex, but they solved problems others couldn\'t.',
        rating: 5,
        date: '2024-05',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Legally required for all gas work. All our gas engineers are registered and ID-verified.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved Contractor',
        description: 'Highest level of electrical competence certification.',
        icon: 'niceic',
      },
      {
        name: 'Property Care Association',
        description: 'Specialists in damp proofing and structural waterproofing.',
        icon: 'pca',
      },
    ],
    
    recentProjects: [
      {
        title: 'Victorian Villa Restoration',
        description: 'Sympathetic restoration of 1880s villa including original sash window repair and period heating upgrades.',
        services: ['sash-window-repair', 'heating', 'decorating'],
        completionDate: '2024-09',
      },
      {
        title: 'Hillside Garden Room',
        description: 'Bespoke garden room office built into sloping garden with integrated heating and electrics.',
        services: ['garden-room', 'electrical', 'heating'],
        completionDate: '2024-07',
      },
    ],
    
    faqs: [
      {
        question: 'Do you serve both Haringey and Camden parts of Highgate?',
        answer: 'Yes, we work throughout Highgate regardless of borough boundary. We\'re familiar with both councils\' planning requirements and building regulations processes.',
      },
      {
        question: 'Can you handle large properties common in Highgate?',
        answer: 'Absolutely. We regularly work on substantial properties with complex heating systems, multiple bathrooms, and extensive rewiring needs. We have the team size and expertise for large projects.',
      },
      {
        question: 'How do you deal with access issues on Highgate\'s steep hills?',
        answer: 'We\'re experienced with Highgate\'s terrain. We use appropriate vehicles, plan material deliveries carefully, and understand which roads have parking restrictions. We always discuss access during our initial survey.',
      },
    ],
    
    nearbyAreas: ['hampstead', 'crouch-end', 'muswell-hill', 'archway', 'east-finchley'],
  },

  // ============================================================================
  // BELSIZE PARK
  // ============================================================================
  {
    slug: 'belsize-park',
    name: 'Belsize Park',
    postcode: 'NW3',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in Belsize Park NW3 | Period Property Experts',
    metaDescription: 'Expert builders and tradespeople in Belsize Park. Specialists in Victorian and Edwardian properties, mansion block renovations. Call 07459 345456.',
    h1: 'Your Trusted Local Tradespeople in Belsize Park',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '350+',
      localTeamMembers: 6,
      avgResponseTime: '90 minutes',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Victorian mansion flats',
        'Edwardian purpose-built blocks',
        'Victorian terraces',
        'Period conversions',
        'Garden apartments',
      ],
      commonChallenges: [
        'Communal heating system complexities',
        'Leasehold and freeholder permissions',
        'Mansion block building regulations',
        'Period feature preservation',
        'Limited parking for works',
      ],
      conservationNotes: 'Parts of Belsize Park fall within conservation areas. We ensure all works respect the character of this sought-after residential neighbourhood.',
    },
    
    localTestimonials: [
      {
        name: 'Marcus L.',
        location: 'Belsize Lane, NW3',
        service: 'Mansion flat bathroom',
        quote: 'They handled the freeholder permissions and worked around the building\'s communal schedule. Perfect outcome.',
        rating: 5,
        date: '2024-10',
      },
      {
        name: 'Fiona G.',
        location: 'Primrose Gardens',
        service: 'Kitchen renovation',
        quote: 'Transformed our dated mansion flat kitchen while respecting the beautiful original features.',
        rating: 5,
        date: '2024-06',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for communal heating work in mansion blocks.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved Contractor',
        description: 'Qualified for electrical work in multi-occupancy buildings.',
        icon: 'niceic',
      },
      {
        name: 'TrustMark',
        description: 'Government-endorsed quality scheme.',
        icon: 'trustmark',
      },
    ],
    
    recentProjects: [
      {
        title: 'Mansion Flat Complete Renovation',
        description: 'Full refurbishment of 2-bed mansion flat including new kitchen, bathroom, and rewiring.',
        services: ['kitchen-fitting', 'bathroom', 'rewiring'],
        completionDate: '2024-09',
      },
      {
        title: 'Period Conversion Upgrade',
        description: 'Modernising systems in garden flat while maintaining Victorian character.',
        services: ['plumbing', 'heating', 'electrical'],
        completionDate: '2024-04',
      },
    ],
    
    faqs: [
      {
        question: 'Can you work in mansion blocks with managing agents?',
        answer: 'Yes, we regularly liaise with managing agents and freeholders in Belsize Park. We provide all necessary insurance documentation, method statements, and comply with building rules on working hours and access.',
      },
      {
        question: 'How do you handle communal heating systems?',
        answer: 'Many Belsize Park blocks have communal heating. We can work on individual flat systems, upgrade radiators, and install thermostatic controls while respecting the communal infrastructure.',
      },
    ],
    
    nearbyAreas: ['hampstead', 'swiss-cottage', 'primrose-hill', 'south-hampstead', 'chalk-farm'],
  },

  // ============================================================================
  // PRIMROSE HILL
  // ============================================================================
  {
    slug: 'primrose-hill',
    name: 'Primrose Hill',
    postcode: 'NW1',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in Primrose Hill NW1 | Colourful Terrace Experts',
    metaDescription: 'Expert tradespeople serving Primrose Hill\'s iconic terraces. From pastel facades to period interiors, we understand this special neighbourhood.',
    h1: 'Your Trusted Local Tradespeople in Primrose Hill',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '180+',
      localTeamMembers: 4,
      avgResponseTime: '2 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Colourful Victorian terraces',
        'Georgian townhouses',
        'Period conversions',
        'Mews houses',
        'Garden maisonettes',
      ],
      commonChallenges: [
        'Strict conservation requirements on facades',
        'Specific colour palette restrictions',
        'Narrow streets limiting access',
        'High-profile residents expecting discretion',
        'Party wall issues in terraced streets',
      ],
      conservationNotes: 'Primrose Hill Conservation Area has strict rules on external appearance, particularly the famous colourful shopfronts and house facades. We work within these guidelines.',
    },
    
    localTestimonials: [
      {
        name: 'Caroline H.',
        location: 'Regent\'s Park Road',
        service: 'Full house refurbishment',
        quote: 'They understood our home\'s special character and the discretion required. Outstanding work.',
        rating: 5,
        date: '2024-08',
      },
      {
        name: 'David M.',
        location: 'Chalcot Square',
        service: 'External decoration',
        quote: 'Navigating the conservation colour requirements was seamless. The facade looks perfect.',
        rating: 5,
        date: '2024-05',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for all gas work in residential properties.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified for all electrical installations and testing.',
        icon: 'niceic',
      },
      {
        name: 'Federation of Master Builders',
        description: 'Vetted for quality workmanship.',
        icon: 'fmb',
      },
    ],
    
    recentProjects: [
      {
        title: 'Regency House Restoration',
        description: 'Careful restoration of early Victorian townhouse with original features preserved.',
        services: ['plastering', 'decorating', 'joinery'],
        completionDate: '2024-07',
      },
      {
        title: 'Chalcot Crescent Kitchen',
        description: 'Bespoke kitchen installation in period property with handmade cabinetry.',
        services: ['kitchen-fitting', 'electrical', 'plumbing'],
        completionDate: '2024-03',
      },
    ],
    
    faqs: [
      {
        question: 'Do you know the Primrose Hill colour restrictions?',
        answer: 'Yes, we\'re very familiar with Camden\'s requirements for the conservation area. We can advise on approved colour palettes and ensure any external decoration maintains the area\'s distinctive character.',
      },
      {
        question: 'Can you be discreet when working in high-profile homes?',
        answer: 'Absolutely. We understand that Primrose Hill attracts residents who value their privacy. Our teams are professional, our vehicles unmarked, and we never discuss client details.',
      },
    ],
    
    nearbyAreas: ['belsize-park', 'camden-town', 'chalk-farm', 'st-johns-wood', 'regents-park'],
  },

  // ============================================================================
  // ST JOHNS WOOD
  // ============================================================================
  {
    slug: 'st-johns-wood',
    name: 'St John\'s Wood',
    postcode: 'NW8',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in St John\'s Wood NW8 | Luxury Property Experts',
    metaDescription: 'Premium building services in St John\'s Wood. Specialists in large detached properties, modern extensions, and high-spec renovations.',
    h1: 'Your Trusted Local Tradespeople in St John\'s Wood',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '220+',
      localTeamMembers: 5,
      avgResponseTime: '2 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Large detached villas',
        'Mansion blocks',
        'Modern luxury apartments',
        'Period conversions',
        'Townhouses',
      ],
      commonChallenges: [
        'High-specification requirements',
        'Complex smart home integration',
        'Large heating systems',
        'Security considerations',
        'Coordinating with interior designers',
      ],
      conservationNotes: 'Parts of St John\'s Wood are conservation areas with specific requirements. We balance modern luxury with heritage compliance.',
    },
    
    localTestimonials: [
      {
        name: 'Jonathan R.',
        location: 'Avenue Road, NW8',
        service: 'Smart home integration',
        quote: 'They seamlessly integrated the electrical and heating with our Lutron and Crestron systems. True professionals.',
        rating: 5,
        date: '2024-09',
      },
      {
        name: 'Alexandra K.',
        location: 'Hamilton Terrace',
        service: 'Basement renovation',
        quote: 'Our basement spa was completed to an exceptional standard. Every detail was perfect.',
        rating: 5,
        date: '2024-06',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Qualified for complex heating systems in large properties.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Smart home integration and premium electrical work.',
        icon: 'niceic',
      },
      {
        name: 'TrustMark',
        description: 'Government-endorsed quality scheme with financial protection.',
        icon: 'trustmark',
      },
    ],
    
    recentProjects: [
      {
        title: 'Villa Complete Renovation',
        description: 'Full renovation of 6-bedroom detached villa including basement conversion and smart home systems.',
        services: ['basement-conversion', 'rewiring', 'heating', 'smart-home'],
        completionDate: '2024-08',
      },
      {
        title: 'Luxury Penthouse Systems',
        description: 'Complete MEP upgrade in penthouse apartment including zoned heating and home automation.',
        services: ['heating', 'electrical', 'plumbing'],
        completionDate: '2024-05',
      },
    ],
    
    faqs: [
      {
        question: 'Can you work with our interior designer?',
        answer: 'Absolutely. We regularly collaborate with interior designers, architects, and project managers on high-end St John\'s Wood projects. We understand the coordination required for luxury finishes.',
      },
      {
        question: 'Do you install smart home systems?',
        answer: 'Yes, we install and integrate with Lutron, Crestron, Control4, and other premium systems. Our electricians are trained in smart home integration.',
      },
    ],
    
    nearbyAreas: ['primrose-hill', 'maida-vale', 'little-venice', 'regents-park', 'swiss-cottage'],
  },

  // ============================================================================
  // ADDITIONAL AREAS
  // ============================================================================
  {
    slug: 'swiss-cottage',
    name: 'Swiss Cottage',
    postcode: 'NW3',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in Swiss Cottage NW3 | Local Property Experts',
    metaDescription: 'Reliable tradespeople serving Swiss Cottage NW3. From mansion blocks to period houses, we deliver quality work. Call 07459 345456.',
    h1: 'Your Trusted Local Tradespeople in Swiss Cottage',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '280+',
      localTeamMembers: 5,
      avgResponseTime: '90 minutes',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Art Deco mansion blocks',
        'Victorian terraces',
        'Modern apartments',
        'Period conversions',
        'New build developments',
      ],
      commonChallenges: [
        'Mixed property ages and types',
        'Mansion block communal systems',
        'Conservation area pockets',
        'Busy road access and parking',
      ],
    },
    
    localTestimonials: [
      {
        name: 'Peter & Lisa W.',
        location: 'Eton Avenue, NW3',
        service: 'Bathroom renovation',
        quote: 'Professional from start to finish. They handled the building\'s requirements perfectly.',
        rating: 5,
        date: '2024-07',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for all gas work.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified electrical contractor.',
        icon: 'niceic',
      },
    ],
    
    recentProjects: [
      {
        title: 'Art Deco Flat Renovation',
        description: 'Complete renovation respecting original 1930s features while modernising systems.',
        services: ['rewiring', 'plumbing', 'decorating'],
        completionDate: '2024-08',
      },
    ],
    
    faqs: [
      {
        question: 'Is Swiss Cottage near your base?',
        answer: 'Yes! Our office on Finchley Road is walking distance from Swiss Cottage station. We can respond very quickly to Swiss Cottage properties.',
      },
    ],
    
    nearbyAreas: ['hampstead', 'belsize-park', 'west-hampstead', 'finchley-road'],
  },

  {
    slug: 'west-hampstead',
    name: 'West Hampstead',
    postcode: 'NW6',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in West Hampstead NW6 | Period Property Specialists',
    metaDescription: 'Expert tradespeople in West Hampstead NW6. Victorian terrace specialists, loft conversions, modern renovations. Free quotes.',
    h1: 'Your Trusted Local Tradespeople in West Hampstead',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '320+',
      localTeamMembers: 6,
      avgResponseTime: '2 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Victorian terraced houses',
        'Edwardian family homes',
        'Period conversions',
        'New apartment blocks',
        'Mansion flats',
      ],
      commonChallenges: [
        'Loft conversion popularity',
        'Side return extensions',
        'Period feature restoration',
        'Rear extension planning',
        'Party wall considerations',
      ],
    },
    
    localTestimonials: [
      {
        name: 'Sophie T.',
        location: 'Mill Lane, NW6',
        service: 'Loft conversion',
        quote: 'Our dormer loft conversion transformed our house. Excellent project management throughout.',
        rating: 5,
        date: '2024-10',
      },
      {
        name: 'Tom & Rachel B.',
        location: 'Gondar Gardens',
        service: 'Kitchen extension',
        quote: 'Side return extension completed on time and budget. The kitchen is now the heart of our home.',
        rating: 5,
        date: '2024-05',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for heating work.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified electrical contractor.',
        icon: 'niceic',
      },
      {
        name: 'Federation of Master Builders',
        description: 'Quality building work guaranteed.',
        icon: 'fmb',
      },
    ],
    
    recentProjects: [
      {
        title: 'Victorian Terrace Transformation',
        description: 'Loft conversion, side return extension, and full ground floor renovation.',
        services: ['loft-conversion', 'extension', 'kitchen-fitting'],
        completionDate: '2024-09',
      },
      {
        title: 'Period Bathroom Suite',
        description: 'Traditional style bathroom in Edwardian house with underfloor heating.',
        services: ['bathroom-fitting', 'underfloor-heating', 'plumbing'],
        completionDate: '2024-06',
      },
    ],
    
    faqs: [
      {
        question: 'Can you do loft conversions in West Hampstead?',
        answer: 'Yes! We\'ve completed dozens of loft conversions in West Hampstead. Most qualify for permitted development, meaning no planning permission needed. We handle the whole process.',
      },
      {
        question: 'What about side return extensions?',
        answer: 'Side return extensions are extremely popular in West Hampstead\'s Victorian terraces. We design and build them regularly - they transform narrow kitchens into wonderful open spaces.',
      },
    ],
    
    nearbyAreas: ['swiss-cottage', 'kilburn', 'brondesbury', 'hampstead', 'fortune-green'],
  },

  {
    slug: 'kilburn',
    name: 'Kilburn',
    postcode: 'NW6',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders & Plumbers in Kilburn NW6 | Local Since 2010',
    metaDescription: 'Reliable tradespeople in Kilburn NW6. Victorian house specialists, affordable quality, free quotes. Call 07459 345456.',
    h1: 'Your Trusted Local Tradespeople in Kilburn',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '400+',
      localTeamMembers: 6,
      avgResponseTime: '2 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Victorian terraced houses',
        'Period conversions',
        'Purpose-built flats',
        'Ex-council properties',
        'New developments',
      ],
      commonChallenges: [
        'Older properties needing full updates',
        'HMO regulations for conversions',
        'Budget-conscious renovations',
        'Mixed freehold/leasehold considerations',
      ],
    },
    
    localTestimonials: [
      {
        name: 'Mike S.',
        location: 'Kilburn High Road',
        service: 'Full house renovation',
        quote: 'They transformed our Victorian terrace completely. Fair prices, excellent work.',
        rating: 5,
        date: '2024-08',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'All gas work fully certified.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified electrical contractors.',
        icon: 'niceic',
      },
    ],
    
    recentProjects: [
      {
        title: 'Complete House Refurbishment',
        description: 'Comprehensive renovation of 3-bed Victorian terrace including new kitchen, bathroom, and rewiring.',
        services: ['kitchen-fitting', 'bathroom', 'rewiring', 'decorating'],
        completionDate: '2024-07',
      },
    ],
    
    faqs: [
      {
        question: 'Do you offer competitive pricing?',
        answer: 'Yes, we offer fair, competitive pricing for quality work. We provide detailed quotes with no hidden costs. We\'re not the cheapest, but we offer excellent value for professional, guaranteed work.',
      },
    ],
    
    nearbyAreas: ['west-hampstead', 'brondesbury', 'queens-park', 'maida-vale', 'willesden'],
  },

  {
    slug: 'queens-park',
    name: 'Queen\'s Park',
    postcode: 'NW6',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in Queen\'s Park NW6 | Family Home Specialists',
    metaDescription: 'Expert tradespeople in Queen\'s Park. Victorian house renovations, extensions, loft conversions. Family-run, trusted locally.',
    h1: 'Your Trusted Local Tradespeople in Queen\'s Park',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '250+',
      localTeamMembers: 5,
      avgResponseTime: '2 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Victorian terraced houses',
        'Edwardian family homes',
        'Period conversions',
        'Garden flats',
        'New build apartments',
      ],
      commonChallenges: [
        'Family-friendly renovations',
        'Creating open-plan living',
        'Loft bedrooms for growing families',
        'Garden room home offices',
      ],
      conservationNotes: 'Parts of Queen\'s Park are in the Queen\'s Park Estate Conservation Area. We understand the requirements for works in these protected streets.',
    },
    
    localTestimonials: [
      {
        name: 'Hannah & Chris J.',
        location: 'Harvist Road',
        service: 'Loft conversion + extension',
        quote: 'They created the extra space our growing family needed. We couldn\'t be happier.',
        rating: 5,
        date: '2024-09',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for all gas work.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified for all electrical work.',
        icon: 'niceic',
      },
      {
        name: 'TrustMark',
        description: 'Government-endorsed quality.',
        icon: 'trustmark',
      },
    ],
    
    recentProjects: [
      {
        title: 'Family Home Expansion',
        description: 'Dormer loft conversion and rear extension creating 5-bed family home from 3-bed terrace.',
        services: ['loft-conversion', 'extension', 'kitchen-fitting'],
        completionDate: '2024-08',
      },
    ],
    
    faqs: [
      {
        question: 'Can you work while we live in the house with children?',
        answer: 'Absolutely. Many Queen\'s Park families stay in residence during works. We take extra care to maintain safe, tidy sites, minimise dust, and accommodate school runs and family routines.',
      },
    ],
    
    nearbyAreas: ['kilburn', 'brondesbury', 'kensal-rise', 'maida-vale', 'west-hampstead'],
  },

  {
    slug: 'crouch-end',
    name: 'Crouch End',
    postcode: 'N8',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in Crouch End N8 | Edwardian House Specialists',
    metaDescription: 'Expert tradespeople serving Crouch End N8. Edwardian and Victorian house specialists, extensions, renovations. Call 07459 345456.',
    h1: 'Your Trusted Local Tradespeople in Crouch End',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '180+',
      localTeamMembers: 4,
      avgResponseTime: '2.5 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Edwardian terraced houses',
        'Victorian semis',
        'Period conversions',
        'Modern townhouses',
        'Mansion flats',
      ],
      commonChallenges: [
        'Edwardian-specific features and repairs',
        'Conservation area requirements',
        'Family home extensions',
        'Period bathroom and kitchen upgrades',
      ],
      conservationNotes: 'Crouch End has several conservation areas protecting its distinctive Edwardian character. We work sensitively within these guidelines.',
    },
    
    localTestimonials: [
      {
        name: 'Sarah K.',
        location: 'Weston Park, N8',
        service: 'Kitchen extension',
        quote: 'They created our dream kitchen-diner while respecting our Edwardian home\'s character.',
        rating: 5,
        date: '2024-10',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for all gas work.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified for electrical installations.',
        icon: 'niceic',
      },
    ],
    
    recentProjects: [
      {
        title: 'Edwardian Semi Renovation',
        description: 'Full renovation including rear extension, new bathroom, and period-appropriate kitchen.',
        services: ['extension', 'bathroom', 'kitchen-fitting'],
        completionDate: '2024-09',
      },
    ],
    
    faqs: [
      {
        question: 'Do you understand Edwardian houses?',
        answer: 'Yes! We\'ve worked extensively on Crouch End\'s Edwardian housing stock. We understand the construction methods, common issues, and how to maintain period character while modernising systems.',
      },
    ],
    
    nearbyAreas: ['highgate', 'muswell-hill', 'hornsey', 'stroud-green', 'finsbury-park'],
  },

  {
    slug: 'muswell-hill',
    name: 'Muswell Hill',
    postcode: 'N10',
    type: 'neighborhood',
    
    metaTitle: 'Trusted Builders in Muswell Hill N10 | Period Property Experts',
    metaDescription: 'Reliable tradespeople in Muswell Hill N10. Edwardian house specialists, quality renovations, loft conversions. Free quotes.',
    h1: 'Your Trusted Local Tradespeople in Muswell Hill',
    
    localPresence: {
      yearsServing: 14,
      projectsCompleted: '150+',
      localTeamMembers: 4,
      avgResponseTime: '2.5 hours',
    },
    
    areaKnowledge: {
      propertyTypes: [
        'Large Edwardian houses',
        'Victorian villas',
        'Period conversions',
        '1930s semis',
        'Modern apartments',
      ],
      commonChallenges: [
        'Large property heating systems',
        'Multiple bathroom homes',
        'Period feature preservation',
        'Loft conversions in larger properties',
      ],
      conservationNotes: 'Muswell Hill Conservation Area protects the distinctive Edwardian character of the Broadway and surrounding streets.',
    },
    
    localTestimonials: [
      {
        name: 'Richard & Jane P.',
        location: 'Colney Hatch Lane',
        service: 'Full house renovation',
        quote: 'Our large Edwardian house was completely transformed. They managed the complex project brilliantly.',
        rating: 5,
        date: '2024-07',
      },
    ],
    
    relevantAccreditations: [
      {
        name: 'Gas Safe Registered',
        description: 'Essential for complex heating systems.',
        icon: 'gas-safe',
      },
      {
        name: 'NICEIC Approved',
        description: 'Qualified for large property rewiring.',
        icon: 'niceic',
      },
    ],
    
    recentProjects: [
      {
        title: 'Edwardian Villa Refurbishment',
        description: '6-bedroom Edwardian house renovated with new heating, multiple bathrooms, and kitchen extension.',
        services: ['heating', 'bathroom', 'kitchen-fitting', 'extension'],
        completionDate: '2024-06',
      },
    ],
    
    faqs: [
      {
        question: 'Can you handle large property renovations?',
        answer: 'Yes, we regularly work on Muswell Hill\'s larger properties. Our team has the capacity for multi-room, multi-trade projects including whole house renovations.',
      },
    ],
    
    nearbyAreas: ['highgate', 'crouch-end', 'east-finchley', 'alexandra-park', 'fortis-green'],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getTrustPage(slug: string): TrustPage | undefined {
  return trustPages.find(p => p.slug === slug);
}

export function getTrustPagesByType(type: TrustPage['type']): TrustPage[] {
  return trustPages.filter(p => p.type === type);
}

export function generateTrustParams(): { area: string }[] {
  return trustPages.map(p => ({ area: p.slug }));
}

export function countTrustPages(): number {
  return trustPages.length;
}

// Get nearby trust pages
export function getNearbyTrustPages(slug: string): TrustPage[] {
  const page = getTrustPage(slug);
  if (!page) return [];
  
  return page.nearbyAreas
    .map(a => getTrustPage(a))
    .filter((p): p is TrustPage => p !== undefined);
}
