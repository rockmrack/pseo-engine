// ============================================================================
// PSEO ENGINE - SEASONAL & EVENT-BASED SERVICES DATABASE
// Targeting time-sensitive searches: "boiler service before winter hampstead"
// 5x SEO Domination - Strategy 1
// ============================================================================

export interface SeasonalService {
  slug: string;
  name: string;
  shortDescription: string;
  urgencyLevel: 'high' | 'medium' | 'low';
  peakMonths: string[];
  relatedServices: string[]; // Service slugs from main services
  keywords: string[];
}

export interface Season {
  slug: string;
  name: string;
  months: string[];
  metaTitleTemplate: string;
  metaDescriptionTemplate: string;
  heroHeadlineTemplate: string;
  heroSubtitleTemplate: string;
  introTemplate: string;
  urgencyMessage: string;
  services: SeasonalService[];
  tips: {
    title: string;
    description: string;
    icon: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface SeasonalArea {
  slug: string;
  name: string;
  postcode: string;
  seasonalNotes: {
    winter: string;
    spring: string;
    summer: string;
    autumn: string;
  };
}

// ============================================================================
// SEASONAL AREAS - Combining with seasons for maximum coverage
// ============================================================================

export const seasonalAreas: SeasonalArea[] = [
  {
    slug: 'hampstead',
    name: 'Hampstead',
    postcode: 'NW3',
    seasonalNotes: {
      winter: 'Victorian properties in Hampstead require special attention during winter - period heating systems and single-glazed sash windows benefit from professional maintenance.',
      spring: 'Spring in Hampstead is perfect for exterior renovations - the conservation area looks stunning with freshly painted facades.',
      summer: 'Summer months are ideal for garden room installations and extension work in Hampstead - longer daylight hours mean faster project completion.',
      autumn: 'Autumn is the crucial window for pre-winter boiler services in Hampstead - book early to avoid the December rush.',
    },
  },
  {
    slug: 'belsize-park',
    name: 'Belsize Park',
    postcode: 'NW3',
    seasonalNotes: {
      winter: 'Belsize Park\'s period conversions often have communal heating systems that need professional servicing before winter.',
      spring: 'Spring cleaning and renovation projects are popular in Belsize Park - loft conversions can begin before summer.',
      summer: 'Belsize Park homeowners often schedule major works during summer holidays when families are away.',
      autumn: 'Guttering and drainage checks are essential in autumn for Belsize Park\'s mature tree-lined streets.',
    },
  },
  {
    slug: 'highgate',
    name: 'Highgate',
    postcode: 'N6',
    seasonalNotes: {
      winter: 'Highgate\'s elevated position means properties experience colder temperatures - proper insulation is crucial.',
      spring: 'Spring is perfect for garden landscaping around Highgate\'s beautiful outdoor spaces.',
      summer: 'Extension and building work in Highgate is best scheduled for summer to avoid weather delays.',
      autumn: 'Leaf fall from Highgate Woods affects gutters - seasonal maintenance is essential.',
    },
  },
  {
    slug: 'primrose-hill',
    name: 'Primrose Hill',
    postcode: 'NW1',
    seasonalNotes: {
      winter: 'Primrose Hill\'s colourful terraces need their heating systems in top condition for winter.',
      spring: 'Spring refreshes in Primrose Hill often include new bathrooms and kitchen updates.',
      summer: 'Roof terrace installations and garden rooms are popular summer projects in Primrose Hill.',
      autumn: 'Pre-winter preparation for Primrose Hill properties should include chimney and flue inspections.',
    },
  },
  {
    slug: 'swiss-cottage',
    name: 'Swiss Cottage',
    postcode: 'NW3',
    seasonalNotes: {
      winter: 'Swiss Cottage\'s mix of mansion blocks and houses all benefit from professional winter preparation.',
      spring: 'Spring deep cleaning and decorating services are in high demand across Swiss Cottage.',
      summer: 'Major renovation works in Swiss Cottage are best timed for summer months.',
      autumn: 'Heating system checks and boiler servicing should be scheduled by October in Swiss Cottage.',
    },
  },
  {
    slug: 'st-johns-wood',
    name: 'St John\'s Wood',
    postcode: 'NW8',
    seasonalNotes: {
      winter: 'St John\'s Wood\'s large detached homes require robust heating systems - annual servicing is essential.',
      spring: 'Tennis court maintenance and garden preparation are spring priorities in St John\'s Wood.',
      summer: 'Pool houses and garden structures are popular summer installations in St John\'s Wood.',
      autumn: 'Autumn is ideal for interior refurbishment projects in St John\'s Wood.',
    },
  },
  {
    slug: 'kensal-rise',
    name: 'Kensal Rise',
    postcode: 'NW10',
    seasonalNotes: {
      winter: 'Victorian terraces in Kensal Rise benefit from draught-proofing before winter.',
      spring: 'Loft conversions in Kensal Rise are popular spring projects.',
      summer: 'Rear extension building season peaks in summer across Kensal Rise.',
      autumn: 'Boiler replacements in Kensal Rise should be scheduled before November.',
    },
  },
  {
    slug: 'queens-park',
    name: 'Queen\'s Park',
    postcode: 'NW6',
    seasonalNotes: {
      winter: 'Queen\'s Park\'s family homes need reliable heating throughout winter.',
      spring: 'Spring garden projects including landscaping are popular in Queen\'s Park.',
      summer: 'Bi-fold door installations and kitchen extensions peak in summer.',
      autumn: 'Central heating power flushes are recommended in autumn for Queen\'s Park properties.',
    },
  },
  {
    slug: 'kilburn',
    name: 'Kilburn',
    postcode: 'NW6',
    seasonalNotes: {
      winter: 'Kilburn\'s Victorian housing stock requires careful winter heating management.',
      spring: 'Spring renovation projects in Kilburn often focus on bathroom and kitchen upgrades.',
      summer: 'External decorating and pointing works are summer priorities in Kilburn.',
      autumn: 'Gutter cleaning and roof inspections before winter are essential in Kilburn.',
    },
  },
  {
    slug: 'west-hampstead',
    name: 'West Hampstead',
    postcode: 'NW6',
    seasonalNotes: {
      winter: 'Period properties in West Hampstead benefit from professional heating system maintenance.',
      spring: 'Spring is ideal for sash window restoration in West Hampstead.',
      summer: 'Garden room and home office builds are popular summer projects.',
      autumn: 'Pre-winter property checks should include draught-proofing and heating tests.',
    },
  },
  {
    slug: 'muswell-hill',
    name: 'Muswell Hill',
    postcode: 'N10',
    seasonalNotes: {
      winter: 'Muswell Hill\'s elevated position means homes experience colder winters.',
      spring: 'Spring renovation projects often include external painting and decorating.',
      summer: 'Extension and loft conversion work peaks during Muswell Hill\'s summer.',
      autumn: 'Heating system servicing should be completed by October.',
    },
  },
  {
    slug: 'crouch-end',
    name: 'Crouch End',
    postcode: 'N8',
    seasonalNotes: {
      winter: 'Edwardian homes in Crouch End benefit from winter heating system optimisation.',
      spring: 'Kitchen renovations and bathroom refits are popular spring projects.',
      summer: 'Crouch End\'s family homes often schedule major works during summer holidays.',
      autumn: 'Boiler servicing and radiator bleeding should be done before November.',
    },
  },
];

// ============================================================================
// SEASONS WITH SERVICES
// ============================================================================

export const seasons: Season[] = [
  // ============================================================================
  // WINTER (October - February)
  // ============================================================================
  {
    slug: 'winter',
    name: 'Winter',
    months: ['October', 'November', 'December', 'January', 'February'],
    metaTitleTemplate: '{service} Before Winter in {area} | {postcode} | Hampstead Renovations',
    metaDescriptionTemplate: 'Prepare your {area} home for winter with professional {service}. Beat the cold weather rush in {postcode}. Call 07459 345456 for winter-ready services.',
    heroHeadlineTemplate: '{service} in {area} - Winter Ready',
    heroSubtitleTemplate: 'Don\'t wait until the first frost. Prepare your {postcode} property now.',
    introTemplate: 'Winter in {area} can be challenging for your home. Our {service} ensures your property is ready for the coldest months. {seasonal_note}',
    urgencyMessage: '🔥 WINTER RUSH: Limited slots available before December. Book now to avoid emergency callout fees.',
    services: [
      {
        slug: 'boiler-service',
        name: 'Boiler Service',
        shortDescription: 'Annual boiler service to ensure reliable heating throughout winter',
        urgencyLevel: 'high',
        peakMonths: ['October', 'November'],
        relatedServices: ['boiler-repair', 'boiler-installation', 'central-heating'],
        keywords: ['boiler service before winter', 'annual boiler check', 'winter boiler maintenance', 'pre-winter boiler service'],
      },
      {
        slug: 'heating-system-check',
        name: 'Heating System Check',
        shortDescription: 'Complete central heating system inspection and optimisation',
        urgencyLevel: 'high',
        peakMonths: ['September', 'October'],
        relatedServices: ['radiator-installation', 'thermostat-installation', 'underfloor-heating'],
        keywords: ['heating check before winter', 'central heating inspection', 'radiator check', 'heating system service'],
      },
      {
        slug: 'draught-proofing',
        name: 'Draught Proofing',
        shortDescription: 'Seal gaps around windows and doors to retain heat',
        urgencyLevel: 'medium',
        peakMonths: ['October', 'November'],
        relatedServices: ['sash-window-repair', 'door-fitting', 'insulation'],
        keywords: ['draught proofing before winter', 'window sealing', 'door draught excluder', 'heat retention'],
      },
      {
        slug: 'pipe-lagging',
        name: 'Pipe Lagging',
        shortDescription: 'Insulate exposed pipes to prevent freezing and bursts',
        urgencyLevel: 'high',
        peakMonths: ['November', 'December'],
        relatedServices: ['plumbing-repairs', 'emergency-plumber'],
        keywords: ['pipe lagging before winter', 'prevent frozen pipes', 'pipe insulation', 'burst pipe prevention'],
      },
      {
        slug: 'chimney-sweep',
        name: 'Chimney Sweep',
        shortDescription: 'Professional chimney cleaning before fireplace season',
        urgencyLevel: 'medium',
        peakMonths: ['September', 'October'],
        relatedServices: ['fireplace-installation', 'gas-fire-service'],
        keywords: ['chimney sweep before winter', 'fireplace ready', 'flue cleaning', 'chimney inspection'],
      },
      {
        slug: 'emergency-repairs',
        name: 'Emergency Repair Preparation',
        shortDescription: 'Know who to call before emergencies happen',
        urgencyLevel: 'low',
        peakMonths: ['October', 'November'],
        relatedServices: ['emergency-plumber', 'emergency-electrician', 'emergency-heating'],
        keywords: ['emergency plumber winter', '24 hour heating repair', 'burst pipe emergency'],
      },
      {
        slug: 'loft-insulation',
        name: 'Loft Insulation',
        shortDescription: 'Upgrade loft insulation to reduce heating bills',
        urgencyLevel: 'medium',
        peakMonths: ['September', 'October', 'November'],
        relatedServices: ['insulation', 'energy-efficiency'],
        keywords: ['loft insulation before winter', 'roof insulation', 'heat loss prevention', 'energy bills reduction'],
      },
      {
        slug: 'window-repairs',
        name: 'Window Repairs',
        shortDescription: 'Fix broken seals, cracked glass and faulty mechanisms',
        urgencyLevel: 'medium',
        peakMonths: ['October', 'November'],
        relatedServices: ['sash-window-repair', 'double-glazing', 'window-replacement'],
        keywords: ['window repair before winter', 'double glazing repair', 'sash window service', 'draughty window fix'],
      },
    ],
    tips: [
      {
        title: 'Book Boiler Service Early',
        description: 'September and October are ideal for boiler servicing - avoid the November rush when engineers are fully booked.',
        icon: 'calendar',
      },
      {
        title: 'Bleed Your Radiators',
        description: 'Air trapped in radiators reduces efficiency. Bleed them before turning on heating for the season.',
        icon: 'thermometer',
      },
      {
        title: 'Check Pipe Insulation',
        description: 'Exposed pipes in lofts and under floors are vulnerable to freezing. Lag them before temperatures drop.',
        icon: 'shield',
      },
      {
        title: 'Test Your Heating',
        description: 'Run your heating for 30 minutes before cold weather arrives to identify any issues early.',
        icon: 'check',
      },
    ],
    faqs: [
      {
        question: 'When should I service my boiler before winter?',
        answer: 'We recommend booking your boiler service in September or early October. This gives you time to address any issues before you need heating regularly. November is our busiest month, with many customers unable to get appointments.',
      },
      {
        question: 'How can I prevent my pipes from freezing?',
        answer: 'Insulate all exposed pipes, especially in lofts, garages, and under floors. Keep heating on a low setting during very cold spells, even when away. Know where your stopcock is located in case of emergencies.',
      },
      {
        question: 'Is it too late to book winter preparation in November?',
        answer: 'We prioritise customers throughout autumn, but November slots fill quickly. Contact us immediately and we\'ll do our best to fit you in. Emergency services are always available 24/7.',
      },
      {
        question: 'What\'s included in a winter heating check?',
        answer: 'Our winter heating check includes: boiler inspection and service, radiator efficiency test, thermostat calibration, pressure check, safety inspection, and a report with recommendations.',
      },
    ],
  },

  // ============================================================================
  // SPRING (March - May)
  // ============================================================================
  {
    slug: 'spring',
    name: 'Spring',
    months: ['March', 'April', 'May'],
    metaTitleTemplate: 'Spring {service} in {area} | Fresh Start for Your Home | {postcode}',
    metaDescriptionTemplate: 'Spring is perfect for {service} in {area}. Refresh your {postcode} property with our expert services. Free quotes: 07459 345456.',
    heroHeadlineTemplate: 'Spring {service} in {area}',
    heroSubtitleTemplate: 'Fresh season, fresh start. Transform your {postcode} home this spring.',
    introTemplate: 'Spring is the perfect time for {service} in {area}. As the weather improves, now is ideal for home improvements and renovations. {seasonal_note}',
    urgencyMessage: '🌸 SPRING SPECIAL: Book now for April/May completion and enjoy your improvements all summer.',
    services: [
      {
        slug: 'exterior-painting',
        name: 'Exterior Painting',
        shortDescription: 'Refresh your home\'s exterior after winter weather damage',
        urgencyLevel: 'medium',
        peakMonths: ['April', 'May'],
        relatedServices: ['decorating', 'rendering', 'cladding'],
        keywords: ['spring exterior painting', 'house painting after winter', 'facade refresh', 'external decorating'],
      },
      {
        slug: 'garden-landscaping',
        name: 'Garden Landscaping',
        shortDescription: 'Transform outdoor spaces ready for summer enjoyment',
        urgencyLevel: 'medium',
        peakMonths: ['March', 'April', 'May'],
        relatedServices: ['decking', 'patio-installation', 'fencing'],
        keywords: ['spring garden makeover', 'landscaping project', 'garden renovation', 'outdoor living space'],
      },
      {
        slug: 'loft-conversion',
        name: 'Loft Conversion',
        shortDescription: 'Start your loft conversion now for summer completion',
        urgencyLevel: 'low',
        peakMonths: ['March', 'April'],
        relatedServices: ['structural-work', 'electrical-installation', 'plumbing'],
        keywords: ['spring loft conversion', 'loft extension', 'attic conversion', 'extra bedroom'],
      },
      {
        slug: 'kitchen-renovation',
        name: 'Kitchen Renovation',
        shortDescription: 'Spring kitchen refresh before summer entertaining season',
        urgencyLevel: 'medium',
        peakMonths: ['March', 'April', 'May'],
        relatedServices: ['kitchen-fitting', 'worktop-installation', 'kitchen-electrics'],
        keywords: ['spring kitchen renovation', 'kitchen makeover', 'kitchen refresh', 'new kitchen spring'],
      },
      {
        slug: 'bathroom-refurbishment',
        name: 'Bathroom Refurbishment',
        shortDescription: 'Refresh your bathroom ready for warmer months',
        urgencyLevel: 'medium',
        peakMonths: ['March', 'April'],
        relatedServices: ['bathroom-fitting', 'tiling', 'bathroom-plumbing'],
        keywords: ['spring bathroom renovation', 'bathroom makeover', 'bathroom refresh', 'new bathroom'],
      },
      {
        slug: 'gutter-cleaning',
        name: 'Gutter Cleaning',
        shortDescription: 'Clear winter debris from gutters and downpipes',
        urgencyLevel: 'high',
        peakMonths: ['March', 'April'],
        relatedServices: ['roof-repairs', 'fascia-soffit'],
        keywords: ['spring gutter clean', 'gutter clearance', 'blocked gutter', 'downpipe cleaning'],
      },
      {
        slug: 'sash-window-restoration',
        name: 'Sash Window Restoration',
        shortDescription: 'Restore period windows after winter wear',
        urgencyLevel: 'medium',
        peakMonths: ['April', 'May'],
        relatedServices: ['sash-window-repair', 'window-draught-proofing', 'window-painting'],
        keywords: ['spring sash window repair', 'window restoration', 'period window service', 'sash window overhaul'],
      },
      {
        slug: 'deep-clean',
        name: 'Professional Deep Clean',
        shortDescription: 'Spring cleaning for the whole house',
        urgencyLevel: 'low',
        peakMonths: ['March', 'April'],
        relatedServices: ['decorating', 'carpet-cleaning'],
        keywords: ['spring deep clean', 'professional spring cleaning', 'house refresh', 'deep cleaning service'],
      },
    ],
    tips: [
      {
        title: 'Plan Extensions Now',
        description: 'Spring is ideal for starting extension projects - better weather means faster completion and less disruption.',
        icon: 'calendar',
      },
      {
        title: 'Check for Winter Damage',
        description: 'Inspect your roof, gutters, and exterior walls for damage from winter weather. Address issues early.',
        icon: 'search',
      },
      {
        title: 'Book Garden Projects',
        description: 'Garden landscaping bookings fill fast - secure your slot now for April/May work.',
        icon: 'leaf',
      },
      {
        title: 'Energy Efficiency Review',
        description: 'Review your winter heating bills. Spring is perfect for insulation upgrades and efficiency improvements.',
        icon: 'zap',
      },
    ],
    faqs: [
      {
        question: 'Why is spring the best time for exterior work?',
        answer: 'Spring offers ideal conditions: moderate temperatures for paint to cure properly, less rain than autumn, and longer daylight hours for productivity. Starting in spring means completion before summer entertaining season.',
      },
      {
        question: 'How long does a loft conversion take if started in spring?',
        answer: 'A typical loft conversion takes 8-12 weeks. Starting in March or April means completion by early summer, perfect timing to enjoy your new space during the best weather.',
      },
      {
        question: 'Should I wait for better weather to start renovation?',
        answer: 'Not necessarily! Interior work can start any time. For exterior projects, April onwards typically offers the best conditions. We monitor weather forecasts carefully to plan work efficiently.',
      },
      {
        question: 'What spring maintenance should I prioritise?',
        answer: 'Priority order: 1) Gutter cleaning (prevents water damage), 2) Exterior inspection (identify winter damage), 3) Boiler service (if not done in autumn), 4) Window and door checks (reseal as needed).',
      },
    ],
  },

  // ============================================================================
  // SUMMER (June - August)
  // ============================================================================
  {
    slug: 'summer',
    name: 'Summer',
    months: ['June', 'July', 'August'],
    metaTitleTemplate: 'Summer {service} in {area} | Best Weather for Building | {postcode}',
    metaDescriptionTemplate: 'Summer is prime time for {service} in {area}. Take advantage of the best building weather in {postcode}. Call 07459 345456.',
    heroHeadlineTemplate: 'Summer {service} in {area}',
    heroSubtitleTemplate: 'Perfect weather for perfect results. Make the most of summer in {postcode}.',
    introTemplate: 'Summer provides ideal conditions for {service} in {area}. Longer days and better weather mean faster completion and superior results. {seasonal_note}',
    urgencyMessage: '☀️ PEAK SEASON: Summer slots are filling fast. Book early to secure your preferred dates.',
    services: [
      {
        slug: 'extension-building',
        name: 'Extension Building',
        shortDescription: 'Optimal weather for major building projects',
        urgencyLevel: 'high',
        peakMonths: ['June', 'July', 'August'],
        relatedServices: ['structural-work', 'foundations', 'roofing'],
        keywords: ['summer extension building', 'house extension', 'rear extension', 'side return extension'],
      },
      {
        slug: 'roof-replacement',
        name: 'Roof Replacement',
        shortDescription: 'Best conditions for roofing work',
        urgencyLevel: 'medium',
        peakMonths: ['June', 'July'],
        relatedServices: ['roof-repairs', 'flat-roof', 'slate-roofing'],
        keywords: ['summer roof replacement', 'new roof', 'roof renovation', 're-roofing project'],
      },
      {
        slug: 'garden-room',
        name: 'Garden Room Installation',
        shortDescription: 'Create outdoor living space for year-round use',
        urgencyLevel: 'medium',
        peakMonths: ['May', 'June', 'July'],
        relatedServices: ['electrical-installation', 'insulation', 'heating'],
        keywords: ['garden room', 'garden office', 'outdoor room', 'garden studio'],
      },
      {
        slug: 'driveway-installation',
        name: 'Driveway Installation',
        shortDescription: 'Perfect weather for block paving and resin driveways',
        urgencyLevel: 'medium',
        peakMonths: ['June', 'July', 'August'],
        relatedServices: ['patio-installation', 'landscaping', 'drainage'],
        keywords: ['summer driveway', 'block paving', 'resin driveway', 'driveway renovation'],
      },
      {
        slug: 'rendering',
        name: 'External Rendering',
        shortDescription: 'Ideal temperatures for render application and curing',
        urgencyLevel: 'medium',
        peakMonths: ['June', 'July'],
        relatedServices: ['exterior-painting', 'insulation', 'cladding'],
        keywords: ['summer rendering', 'external render', 'silicone render', 'house render'],
      },
      {
        slug: 'bi-fold-doors',
        name: 'Bi-fold Door Installation',
        shortDescription: 'Connect indoor and outdoor living spaces',
        urgencyLevel: 'medium',
        peakMonths: ['May', 'June', 'July'],
        relatedServices: ['glazing', 'patio-doors', 'structural-work'],
        keywords: ['bi-fold doors', 'folding doors', 'concertina doors', 'indoor outdoor living'],
      },
      {
        slug: 'swimming-pool',
        name: 'Swimming Pool Installation',
        shortDescription: 'Install a pool ready for next summer',
        urgencyLevel: 'low',
        peakMonths: ['June', 'July'],
        relatedServices: ['landscaping', 'electrical-installation', 'plumbing'],
        keywords: ['swimming pool installation', 'garden pool', 'pool house', 'outdoor pool'],
      },
      {
        slug: 'conservatory',
        name: 'Conservatory Building',
        shortDescription: 'Extend your living space with a conservatory',
        urgencyLevel: 'medium',
        peakMonths: ['May', 'June', 'July'],
        relatedServices: ['glazing', 'foundations', 'electrical-installation'],
        keywords: ['conservatory building', 'orangery', 'glass extension', 'garden conservatory'],
      },
    ],
    tips: [
      {
        title: 'Book Major Works Now',
        description: 'Summer is our busiest season for extensions and building work. Book 2-3 months ahead for your preferred dates.',
        icon: 'calendar',
      },
      {
        title: 'School Holiday Planning',
        description: 'If you have children, consider scheduling disruptive work during summer holidays when you can take trips.',
        icon: 'users',
      },
      {
        title: 'Weather Windows',
        description: 'We monitor weather forecasts to maximise productivity. Trust us to plan work around British summer weather!',
        icon: 'sun',
      },
      {
        title: 'Think About Winter',
        description: 'Ironically, summer is ideal for planning winter preparation - book autumn boiler services now.',
        icon: 'snowflake',
      },
    ],
    faqs: [
      {
        question: 'Is summer really the best time for extensions?',
        answer: 'Yes! Summer offers: longer working days (6am-9pm possible), better weather for foundations and outdoor work, faster material drying times, and less disruption as you can live more outdoors. Projects typically complete 20% faster in summer.',
      },
      {
        question: 'How far ahead should I book summer building work?',
        answer: 'For major projects like extensions, book 3-4 months ahead. For smaller works like garden rooms or bi-fold doors, 6-8 weeks is usually sufficient. Our summer calendar fills from February onwards.',
      },
      {
        question: 'Can you work around our family being at home?',
        answer: 'Absolutely. Many clients stay home during summer works. We maintain clean, organised sites, use designated access routes, and can schedule noisy work around your preferences. We\'ve completed hundreds of projects with families in residence.',
      },
      {
        question: 'What if it rains during our summer project?',
        answer: 'We plan for British weather! Critical stages like foundations and roofing are scheduled with weather windows in mind. We use temporary weatherproofing to protect open structures. Projects rarely experience significant weather delays in summer.',
      },
    ],
  },

  // ============================================================================
  // AUTUMN (September)
  // ============================================================================
  {
    slug: 'autumn',
    name: 'Autumn',
    months: ['September'],
    metaTitleTemplate: 'Autumn {service} in {area} | Pre-Winter Preparation | {postcode}',
    metaDescriptionTemplate: 'Autumn is crucial for {service} in {area}. Prepare your {postcode} home before winter arrives. Expert service: 07459 345456.',
    heroHeadlineTemplate: 'Autumn {service} in {area}',
    heroSubtitleTemplate: 'Last chance before winter. Prepare your {postcode} property now.',
    introTemplate: 'Autumn is your final window for {service} in {area} before winter arrives. Smart homeowners use September to prepare their properties. {seasonal_note}',
    urgencyMessage: '🍂 WINTER PREP: Book now for September completion. October slots are limited.',
    services: [
      {
        slug: 'boiler-replacement',
        name: 'Boiler Replacement',
        shortDescription: 'Install a new boiler before the cold weather hits',
        urgencyLevel: 'high',
        peakMonths: ['September', 'October'],
        relatedServices: ['boiler-installation', 'heating-system', 'radiators'],
        keywords: ['autumn boiler replacement', 'new boiler before winter', 'boiler upgrade', 'gas boiler installation'],
      },
      {
        slug: 'roof-inspection',
        name: 'Roof Inspection',
        shortDescription: 'Check and repair your roof before winter storms',
        urgencyLevel: 'high',
        peakMonths: ['September', 'October'],
        relatedServices: ['roof-repairs', 'guttering', 'chimney-repair'],
        keywords: ['autumn roof check', 'roof inspection', 'storm damage prevention', 'roof maintenance'],
      },
      {
        slug: 'gutter-maintenance',
        name: 'Gutter Maintenance',
        shortDescription: 'Clear leaves and debris before autumn rains',
        urgencyLevel: 'high',
        peakMonths: ['September', 'October', 'November'],
        relatedServices: ['gutter-cleaning', 'fascia-soffit', 'drainage'],
        keywords: ['autumn gutter cleaning', 'leaf clearance', 'gutter maintenance', 'downpipe clearing'],
      },
      {
        slug: 'interior-decorating',
        name: 'Interior Decorating',
        shortDescription: 'Perfect weather for indoor projects',
        urgencyLevel: 'low',
        peakMonths: ['September', 'October', 'November'],
        relatedServices: ['painting', 'wallpapering', 'plastering'],
        keywords: ['autumn decorating', 'interior painting', 'autumn refresh', 'redecoration'],
      },
      {
        slug: 'smart-thermostat',
        name: 'Smart Thermostat Installation',
        shortDescription: 'Optimise heating efficiency for winter',
        urgencyLevel: 'medium',
        peakMonths: ['September', 'October'],
        relatedServices: ['thermostat-installation', 'heating-controls', 'energy-efficiency'],
        keywords: ['smart thermostat', 'Nest installation', 'Hive thermostat', 'heating control'],
      },
      {
        slug: 'double-glazing',
        name: 'Double Glazing Upgrade',
        shortDescription: 'Improve insulation before cold weather',
        urgencyLevel: 'medium',
        peakMonths: ['September', 'October'],
        relatedServices: ['window-replacement', 'glazing', 'energy-efficiency'],
        keywords: ['autumn double glazing', 'window upgrade', 'heat retention', 'energy efficient windows'],
      },
      {
        slug: 'underfloor-heating',
        name: 'Underfloor Heating Installation',
        shortDescription: 'Install UFH ready for winter warmth',
        urgencyLevel: 'medium',
        peakMonths: ['September', 'October'],
        relatedServices: ['heating', 'flooring', 'bathroom-heating'],
        keywords: ['underfloor heating', 'UFH installation', 'bathroom heating', 'warm floors'],
      },
      {
        slug: 'external-repairs',
        name: 'External Repairs',
        shortDescription: 'Final window for outdoor repairs',
        urgencyLevel: 'high',
        peakMonths: ['September'],
        relatedServices: ['pointing', 'rendering', 'brickwork'],
        keywords: ['autumn external repairs', 'pointing before winter', 'brickwork repair', 'mortar repair'],
      },
    ],
    tips: [
      {
        title: 'September is Crucial',
        description: 'September offers the last reliable weather window for external work. Don\'t wait until October when conditions become unpredictable.',
        icon: 'alert',
      },
      {
        title: 'Boiler Booking Rush',
        description: 'October is our busiest month for boiler services. Book your annual service now to avoid waiting until cold weather arrives.',
        icon: 'flame',
      },
      {
        title: 'Gutter Priority',
        description: 'Clear gutters before leaves fall and block them. Prevention is far cheaper than water damage repairs.',
        icon: 'droplet',
      },
      {
        title: 'Interior Focus',
        description: 'Autumn\'s shorter days make it ideal for interior projects - decorating, bathroom refits, kitchen updates.',
        icon: 'home',
      },
    ],
    faqs: [
      {
        question: 'When is the cut-off for exterior work?',
        answer: 'For most external work, we recommend completion by end of October. After this, weather becomes unreliable. Pointing and rendering specifically need temperatures above 5°C to cure properly.',
      },
      {
        question: 'Should I get my boiler serviced in autumn or wait until winter?',
        answer: 'Definitely autumn! September is ideal. If we find issues, there\'s time to order parts and make repairs before you need heating. By December, we\'re handling emergencies - routine services are harder to schedule.',
      },
      {
        question: 'What autumn jobs can I do myself?',
        answer: 'DIY tasks: bleeding radiators, testing heating before you need it, clearing visible gutter debris (safely!), checking smoke alarm batteries, noting any draughts or damp for professional assessment.',
      },
      {
        question: 'Is autumn too late for major renovation?',
        answer: 'Not for interior work! Kitchens, bathrooms, and decorating are perfect for autumn - we\'re working indoors anyway. For extensions, yes, it\'s late - but we can still complete works started in summer or plan for spring.',
      },
    ],
  },

  // ============================================================================
  // PRE-CHRISTMAS
  // ============================================================================
  {
    slug: 'pre-christmas',
    name: 'Pre-Christmas',
    months: ['November', 'December'],
    metaTitleTemplate: 'Complete {service} Before Christmas in {area} | {postcode}',
    metaDescriptionTemplate: 'Need {service} finished before Christmas in {area}? We guarantee completion dates for {postcode} customers. Rush service: 07459 345456.',
    heroHeadlineTemplate: 'Christmas Deadline: {service} in {area}',
    heroSubtitleTemplate: 'Guaranteed completion before the festive season in {postcode}.',
    introTemplate: 'With Christmas approaching, time is critical for {service} in {area}. We specialise in meeting festive deadlines - your home will be guest-ready. {seasonal_note}',
    urgencyMessage: '🎄 CHRISTMAS GUARANTEE: Book by November 15th for guaranteed pre-Christmas completion.',
    services: [
      {
        slug: 'bathroom-installation',
        name: 'Bathroom Installation',
        shortDescription: 'New bathroom ready for Christmas guests',
        urgencyLevel: 'high',
        peakMonths: ['October', 'November'],
        relatedServices: ['bathroom-fitting', 'tiling', 'plumbing'],
        keywords: ['bathroom before christmas', 'guest bathroom', 'bathroom renovation deadline', 'festive bathroom'],
      },
      {
        slug: 'kitchen-completion',
        name: 'Kitchen Completion',
        shortDescription: 'Finish your kitchen for Christmas entertaining',
        urgencyLevel: 'high',
        peakMonths: ['October', 'November'],
        relatedServices: ['kitchen-fitting', 'worktops', 'appliance-installation'],
        keywords: ['kitchen before christmas', 'christmas kitchen', 'kitchen deadline', 'entertaining kitchen'],
      },
      {
        slug: 'living-room-refresh',
        name: 'Living Room Refresh',
        shortDescription: 'Redecorate your living space for the festive season',
        urgencyLevel: 'medium',
        peakMonths: ['November'],
        relatedServices: ['decorating', 'flooring', 'fireplace'],
        keywords: ['living room christmas', 'festive redecoration', 'christmas ready room', 'lounge makeover'],
      },
      {
        slug: 'guest-room-preparation',
        name: 'Guest Room Preparation',
        shortDescription: 'Create welcoming space for Christmas visitors',
        urgencyLevel: 'medium',
        peakMonths: ['November', 'December'],
        relatedServices: ['decorating', 'carpentry', 'electrical'],
        keywords: ['guest room', 'spare room makeover', 'christmas visitors', 'guest bedroom'],
      },
      {
        slug: 'lighting-upgrade',
        name: 'Lighting Upgrade',
        shortDescription: 'Transform your home with new lighting for dark evenings',
        urgencyLevel: 'low',
        peakMonths: ['November', 'December'],
        relatedServices: ['electrical', 'smart-home', 'dimmer-switches'],
        keywords: ['christmas lighting', 'ambient lighting', 'smart lighting', 'festive lights'],
      },
      {
        slug: 'heating-emergency',
        name: 'Emergency Heating Repair',
        shortDescription: '24/7 emergency service - don\'t be cold at Christmas',
        urgencyLevel: 'high',
        peakMonths: ['December'],
        relatedServices: ['boiler-repair', 'heating', 'emergency-service'],
        keywords: ['christmas heating emergency', 'no heating christmas', 'boiler breakdown christmas', 'emergency plumber christmas'],
      },
      {
        slug: 'fireplace-installation',
        name: 'Fireplace Installation',
        shortDescription: 'Install a cosy fireplace for Christmas',
        urgencyLevel: 'medium',
        peakMonths: ['October', 'November'],
        relatedServices: ['gas-fire', 'electric-fire', 'chimney-work'],
        keywords: ['christmas fireplace', 'new fireplace', 'log burner', 'gas fire installation'],
      },
      {
        slug: 'flooring-installation',
        name: 'Flooring Installation',
        shortDescription: 'New floors ready for Christmas',
        urgencyLevel: 'medium',
        peakMonths: ['November'],
        relatedServices: ['hardwood-flooring', 'carpet', 'tiling'],
        keywords: ['new floors christmas', 'hardwood flooring', 'carpet fitting', 'flooring deadline'],
      },
    ],
    tips: [
      {
        title: 'November 15th Deadline',
        description: 'For guaranteed Christmas completion, book by mid-November. After this, we\'ll assess on a case-by-case basis.',
        icon: 'calendar',
      },
      {
        title: 'Prioritise Visible Areas',
        description: 'Focus on spaces guests will see: hallway, living room, guest bathroom. Lesser-used rooms can wait until January.',
        icon: 'eye',
      },
      {
        title: 'Quick Win Projects',
        description: 'Painting, new flooring, and lighting upgrades can transform a space in days, not weeks.',
        icon: 'zap',
      },
      {
        title: 'Book Emergency Cover',
        description: 'We offer priority emergency cover for existing customers over Christmas. Ask about our holiday support package.',
        icon: 'shield',
      },
    ],
    faqs: [
      {
        question: 'Can you really guarantee Christmas completion?',
        answer: 'Yes, for projects booked by November 15th. We carefully assess each project\'s requirements and only commit to deadlines we can meet. Our track record shows 98% on-time delivery for Christmas deadline projects.',
      },
      {
        question: 'What if there are unexpected delays?',
        answer: 'We build contingency into Christmas projects. If genuinely unforeseeable issues arise, we add weekend work at no extra cost to meet your deadline. We\'ve never missed a guaranteed Christmas completion.',
      },
      {
        question: 'Do you work between Christmas and New Year?',
        answer: 'We offer limited emergency services only from December 24th to January 2nd. Full service resumes January 3rd. For planned work, we recommend completion before December 20th.',
      },
      {
        question: 'Is pre-Christmas work more expensive?',
        answer: 'Standard rates apply for work completed by mid-December. Rush jobs after December 10th may incur weekend premium rates. Emergency call-outs on bank holidays have standard premium rates (displayed on our emergency page).',
      },
    ],
  },

  // ============================================================================
  // BANK HOLIDAY
  // ============================================================================
  {
    slug: 'bank-holiday',
    name: 'Bank Holiday',
    months: ['May', 'August', 'December'],
    metaTitleTemplate: 'Bank Holiday {service} in {area} | Emergency Coverage | {postcode}',
    metaDescriptionTemplate: 'Need {service} on a bank holiday in {area}? We provide 24/7 emergency coverage across {postcode}. Emergency line: 07459 345456.',
    heroHeadlineTemplate: 'Bank Holiday {service} in {area}',
    heroSubtitleTemplate: 'Emergencies don\'t take holidays. Neither do we. Serving {postcode} 24/7.',
    introTemplate: 'Bank holidays shouldn\'t mean suffering without {service} in {area}. Our emergency team is available 24/7, including all public holidays. {seasonal_note}',
    urgencyMessage: '🚨 BANK HOLIDAY: Emergency services available. Standard call-out fees apply.',
    services: [
      {
        slug: 'emergency-plumber',
        name: 'Emergency Plumber',
        shortDescription: 'Burst pipes, leaks and flooding - any time, any day',
        urgencyLevel: 'high',
        peakMonths: ['December', 'January', 'August'],
        relatedServices: ['plumbing-repairs', 'leak-detection', 'drain-unblocking'],
        keywords: ['bank holiday plumber', 'emergency plumber', '24 hour plumber', 'weekend plumber'],
      },
      {
        slug: 'emergency-electrician',
        name: 'Emergency Electrician',
        shortDescription: 'Power failures, safety issues, electrical emergencies',
        urgencyLevel: 'high',
        peakMonths: ['December', 'August'],
        relatedServices: ['electrical-repairs', 'fuse-board', 'safety-inspection'],
        keywords: ['bank holiday electrician', 'emergency electrician', '24 hour electrician', 'power cut'],
      },
      {
        slug: 'emergency-heating',
        name: 'Emergency Heating',
        shortDescription: 'Boiler breakdowns and heating failures',
        urgencyLevel: 'high',
        peakMonths: ['December', 'January', 'February'],
        relatedServices: ['boiler-repair', 'heating-repair', 'radiator-repair'],
        keywords: ['bank holiday boiler repair', 'emergency heating', 'no hot water', 'boiler breakdown'],
      },
      {
        slug: 'emergency-locksmith',
        name: 'Emergency Locksmith',
        shortDescription: 'Locked out? We can help 24/7',
        urgencyLevel: 'high',
        peakMonths: ['December', 'August'],
        relatedServices: ['lock-change', 'security-upgrade', 'door-repair'],
        keywords: ['bank holiday locksmith', 'emergency locksmith', 'locked out', '24 hour locksmith'],
      },
      {
        slug: 'emergency-glazing',
        name: 'Emergency Glazing',
        shortDescription: 'Broken windows and glass emergencies',
        urgencyLevel: 'high',
        peakMonths: ['December', 'August'],
        relatedServices: ['window-repair', 'glass-replacement', 'boarding-up'],
        keywords: ['bank holiday glazier', 'emergency glass', 'broken window', 'glass replacement'],
      },
      {
        slug: 'drain-emergency',
        name: 'Drain Emergency',
        shortDescription: 'Blocked drains and sewage emergencies',
        urgencyLevel: 'high',
        peakMonths: ['December', 'August'],
        relatedServices: ['drain-unblocking', 'drainage', 'sewage'],
        keywords: ['bank holiday drain', 'blocked drain emergency', 'sewage problem', 'drain clearance'],
      },
    ],
    tips: [
      {
        title: 'Save Our Number',
        description: 'Add 07459 345456 to your contacts as "Emergency Trades" - you\'ll be glad you did.',
        icon: 'phone',
      },
      {
        title: 'Know Your Stopcocks',
        description: 'Locate your water stopcock and gas shut-off BEFORE an emergency. It could save thousands in damage.',
        icon: 'alert',
      },
      {
        title: 'Bank Holiday Rates',
        description: 'Our bank holiday call-out fee is clearly displayed. No hidden charges. Fair pricing even in emergencies.',
        icon: 'pound',
      },
      {
        title: 'Existing Customer Priority',
        description: 'Our regular customers get priority emergency response. Another reason to use us for planned work.',
        icon: 'star',
      },
    ],
    faqs: [
      {
        question: 'How much extra do you charge on bank holidays?',
        answer: 'Bank holiday call-out: £95 (vs £65 standard). Hourly rate: 1.5x standard rate. These rates are clearly communicated before we attend. No surprises.',
      },
      {
        question: 'How quickly can you respond on a bank holiday?',
        answer: 'For genuine emergencies (flooding, no heating in winter, safety issues), we aim for 2-4 hour response. For urgent but not emergency issues, same-day attendance where possible.',
      },
      {
        question: 'What counts as an emergency?',
        answer: 'Emergencies: burst pipes, flooding, complete heating failure in cold weather, electrical safety issues, gas leaks (call gas emergency first: 0800 111 999), lock-outs. Non-emergencies: dripping taps, minor blockages, cosmetic issues.',
      },
      {
        question: 'Do you cover all of North London on bank holidays?',
        answer: 'Yes, our emergency service covers all our usual areas: NW3, NW6, NW8, N6, NW1, NW11, and surrounding postcodes. Response times may vary based on engineer availability.',
      },
    ],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getSeason(slug: string): Season | undefined {
  return seasons.find(s => s.slug === slug);
}

export function getSeasonalArea(slug: string): SeasonalArea | undefined {
  return seasonalAreas.find(a => a.slug === slug);
}

export function getSeasonalService(seasonSlug: string, serviceSlug: string): SeasonalService | undefined {
  const season = getSeason(seasonSlug);
  return season?.services.find(s => s.slug === serviceSlug);
}

export function generateSeasonalParams(): { season: string; service: string; area: string }[] {
  const params: { season: string; service: string; area: string }[] = [];

  for (const season of seasons) {
    for (const service of season.services) {
      for (const area of seasonalAreas) {
        params.push({
          season: season.slug,
          service: service.slug,
          area: area.slug,
        });
      }
    }
  }

  return params;
}

// Get current season based on date
export function getCurrentSeason(): Season {
  const month = new Date().getMonth();
  
  if (month >= 2 && month <= 4) return seasons.find(s => s.slug === 'spring')!;
  if (month >= 5 && month <= 7) return seasons.find(s => s.slug === 'summer')!;
  if (month === 8) return seasons.find(s => s.slug === 'autumn')!;
  if (month >= 9 || month <= 1) return seasons.find(s => s.slug === 'winter')!;
  
  return seasons[0];
}

// Count total seasonal pages
export function countSeasonalPages(): number {
  return seasons.reduce((total, season) => {
    return total + (season.services.length * seasonalAreas.length);
  }, 0);
}
