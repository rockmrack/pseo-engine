// ============================================================================
// ROOM-SPECIFIC SERVICES DATABASE
// "[Service] for [Room Type]" - Room-specific service pages
// ============================================================================

export interface RoomType {
  slug: string;
  name: string;
  description: string;
  commonServices: string[];
  typicalIssues: string[];
  considerations: string[];
  averageSize: string;
}

export interface RoomService {
  roomSlug: string;
  serviceSlug: string;
  serviceName: string;
  title: string;
  description: string;
  commonRequests: string[];
  ourProcess: string[];
  typicalCost: string;
  timeframe: string;
  beforeAfterPotential: boolean;
  faqs: { question: string; answer: string }[];
}

export const roomTypes: RoomType[] = [
  {
    slug: 'kitchen',
    name: 'Kitchen',
    description: 'The heart of the home requiring reliable plumbing, gas, and electrical services.',
    commonServices: [
      'plumbing',
      'gas-fitting',
      'electrical',
      'appliance-installation',
      'drainage',
    ],
    typicalIssues: [
      'Leaking under sink',
      'Blocked drains',
      'Faulty appliances',
      'Poor water pressure',
      'Gas hob issues',
    ],
    considerations: [
      'Working around appliances',
      'Minimising disruption',
      'Food safety during work',
      'Coordinating with kitchen fitters',
    ],
    averageSize: '10-15 sqm',
  },
  {
    slug: 'bathroom',
    name: 'Bathroom',
    description: 'Bathrooms require specialist plumbing, waterproofing, and often electrical work.',
    commonServices: [
      'plumbing',
      'bathroom-renovation',
      'tiling',
      'wet-room-installation',
      'electrical',
    ],
    typicalIssues: [
      'Leaking toilets',
      'Low shower pressure',
      'Blocked drains',
      'Faulty showers',
      'Ventilation problems',
    ],
    considerations: [
      'Waterproofing critical',
      'Ventilation requirements',
      'Part P electrical regulations',
      'Access for elderly/disabled',
    ],
    averageSize: '4-8 sqm',
  },
  {
    slug: 'ensuite',
    name: 'En-Suite Bathroom',
    description: 'Compact en-suites require clever design and efficient plumbing solutions.',
    commonServices: [
      'plumbing',
      'en-suite-installation',
      'shower-installation',
      'electrical',
    ],
    typicalIssues: [
      'Space constraints',
      'Pressure issues',
      'Ventilation',
      'Drainage falls',
    ],
    considerations: [
      'Compact fixtures',
      'Space-saving layouts',
      'Pumped drainage if needed',
      'Extractor fan essential',
    ],
    averageSize: '2-4 sqm',
  },
  {
    slug: 'utility-room',
    name: 'Utility Room',
    description: 'Utility rooms house washing machines, boilers, and need robust plumbing.',
    commonServices: [
      'plumbing',
      'boiler-installation',
      'appliance-installation',
      'drainage',
    ],
    typicalIssues: [
      'Washing machine leaks',
      'Boiler problems',
      'Drainage blockages',
      'Floor drain issues',
    ],
    considerations: [
      'Floor drain advisable',
      'Easy appliance access',
      'Good ventilation',
      'Frost protection',
    ],
    averageSize: '3-6 sqm',
  },
  {
    slug: 'living-room',
    name: 'Living Room',
    description: 'Living rooms benefit from efficient heating and well-positioned radiators.',
    commonServices: [
      'central-heating',
      'radiator-installation',
      'electrical',
      'fireplace-services',
    ],
    typicalIssues: [
      'Cold spots',
      'Radiator problems',
      'Insufficient sockets',
      'Gas fire issues',
    ],
    considerations: [
      'Radiator positioning',
      'Aesthetic considerations',
      'Furniture layout',
      'Period features',
    ],
    averageSize: '15-25 sqm',
  },
  {
    slug: 'bedroom',
    name: 'Bedroom',
    description: 'Bedrooms need efficient heating and may require radiator upgrades.',
    commonServices: [
      'central-heating',
      'radiator-installation',
      'electrical',
    ],
    typicalIssues: [
      'Cold bedrooms',
      'Noisy radiators',
      'Insufficient outlets',
      'Poor heating control',
    ],
    considerations: [
      'Quiet operation',
      'Thermostat positioning',
      'Radiator under windows',
      'USB socket additions',
    ],
    averageSize: '10-20 sqm',
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    description: 'Loft conversions require extending heating, plumbing, and electrical services.',
    commonServices: [
      'central-heating',
      'plumbing',
      'electrical',
      'en-suite-installation',
    ],
    typicalIssues: [
      'Pressure to upper floors',
      'Heating extension',
      'Electrical capacity',
      'Building regulations',
    ],
    considerations: [
      'Boiler capacity for extra demand',
      'Unvented cylinder for pressure',
      'Additional circuits needed',
      'Building regs compliance',
    ],
    averageSize: '15-30 sqm',
  },
  {
    slug: 'basement',
    name: 'Basement',
    description: 'Basements have unique challenges including drainage, damp, and heating.',
    commonServices: [
      'plumbing',
      'drainage',
      'central-heating',
      'electrical',
    ],
    typicalIssues: [
      'Damp and water ingress',
      'Drainage below sewer level',
      'Cold and condensation',
      'Limited natural light',
    ],
    considerations: [
      'Pumped drainage essential',
      'Tanking/waterproofing',
      'Dehumidification',
      'Extra heating needed',
    ],
    averageSize: 'Varies (full footprint)',
  },
  {
    slug: 'garage',
    name: 'Garage',
    description: 'Garages often need basic services or conversion to habitable space.',
    commonServices: [
      'electrical',
      'plumbing',
      'central-heating',
    ],
    typicalIssues: [
      'No heating',
      'Limited electrics',
      'Damp issues',
      'Poor insulation',
    ],
    considerations: [
      'Building regs for conversion',
      'Insulation requirements',
      'Drainage connections',
      'Separate circuits',
    ],
    averageSize: '15-20 sqm',
  },
  {
    slug: 'conservatory',
    name: 'Conservatory',
    description: 'Conservatories need careful heating design to manage temperature extremes.',
    commonServices: [
      'central-heating',
      'underfloor-heating',
      'electrical',
    ],
    typicalIssues: [
      'Too hot in summer',
      'Too cold in winter',
      'Condensation',
      'Limited heating options',
    ],
    considerations: [
      'UFH often best option',
      'Separate zone control',
      'High heat output radiators',
      'Blinds/shading',
    ],
    averageSize: '10-20 sqm',
  },
];

export const roomServices: RoomService[] = [
  // Kitchen Services
  {
    roomSlug: 'kitchen',
    serviceSlug: 'plumbing',
    serviceName: 'Kitchen Plumbing',
    title: 'Kitchen Plumbing Services',
    description: 'Complete kitchen plumbing services from tap repairs to full installations.',
    commonRequests: [
      'New kitchen sink installation',
      'Tap replacement or repair',
      'Dishwasher connection',
      'Washing machine plumbing',
      'Waste disposal installation',
      'Under-sink leak repairs',
    ],
    ourProcess: [
      'Assess existing plumbing',
      'Plan optimal layout',
      'Isolate water supply',
      'Complete installation',
      'Test and commission',
      'Clean up workspace',
    ],
    typicalCost: '£75-500 depending on work',
    timeframe: '1-4 hours typical',
    beforeAfterPotential: true,
    faqs: [
      {
        question: 'Can you move my sink to a different location?',
        answer: 'Yes, we can relocate sinks though this requires extending supply and waste pipes. We\'ll survey and quote.',
      },
      {
        question: 'Do you fit kitchen taps?',
        answer: 'Yes, we supply and fit all types of kitchen taps including boiling water taps.',
      },
    ],
  },
  {
    roomSlug: 'kitchen',
    serviceSlug: 'gas-fitting',
    serviceName: 'Kitchen Gas Fitting',
    title: 'Kitchen Gas Fitting & Appliance Installation',
    description: 'Gas Safe registered engineers for all kitchen gas work.',
    commonRequests: [
      'Gas hob installation',
      'Gas cooker connection',
      'Range cooker installation',
      'Gas pipe extension',
      'Gas safety inspection',
      'Disconnection for kitchen works',
    ],
    ourProcess: [
      'Gas Safe inspection',
      'Plan gas route',
      'Install pipework',
      'Connect appliance',
      'Test for leaks',
      'Provide certificate',
    ],
    typicalCost: '£100-350',
    timeframe: '1-3 hours',
    beforeAfterPotential: false,
    faqs: [
      {
        question: 'Can you move my gas supply for a new kitchen layout?',
        answer: 'Yes, we can extend or relocate gas supplies. All work is certified and Gas Safe registered.',
      },
    ],
  },

  // Bathroom Services
  {
    roomSlug: 'bathroom',
    serviceSlug: 'plumbing',
    serviceName: 'Bathroom Plumbing',
    title: 'Bathroom Plumbing Services',
    description: 'Expert bathroom plumbing from repairs to complete installations.',
    commonRequests: [
      'Toilet repair or replacement',
      'Basin installation',
      'Bath installation',
      'Shower plumbing',
      'Leak repairs',
      'Valve replacements',
    ],
    ourProcess: [
      'Diagnose issue or survey',
      'Quote for work',
      'Isolate supplies',
      'Complete work',
      'Test thoroughly',
      'Tidy and clean',
    ],
    typicalCost: '£100-800 depending on work',
    timeframe: '1-8 hours',
    beforeAfterPotential: true,
    faqs: [
      {
        question: 'Can you fit a bathroom suite I\'ve bought?',
        answer: 'Yes, we\'re happy to fit customer-supplied sanitaryware. We\'ll need to see it first to quote accurately.',
      },
    ],
  },
  {
    roomSlug: 'bathroom',
    serviceSlug: 'shower-installation',
    serviceName: 'Shower Installation',
    title: 'Bathroom Shower Installation',
    description: 'All types of shower installation from electric to digital systems.',
    commonRequests: [
      'Electric shower installation',
      'Mixer shower fitting',
      'Digital shower systems',
      'Shower pump installation',
      'Thermostatic valve upgrade',
      'Walk-in shower installation',
    ],
    ourProcess: [
      'Assess water pressure',
      'Recommend best option',
      'Install shower system',
      'Connect electrics if needed',
      'Test and calibrate',
      'Demonstrate to customer',
    ],
    typicalCost: '£250-1,200',
    timeframe: '2-6 hours',
    beforeAfterPotential: true,
    faqs: [
      {
        question: 'Which type of shower is best for my home?',
        answer: 'It depends on your water system. We\'ll test pressure and recommend the best option.',
      },
    ],
  },

  // Living Room Services
  {
    roomSlug: 'living-room',
    serviceSlug: 'radiator-installation',
    serviceName: 'Living Room Radiator Services',
    title: 'Living Room Radiator Installation & Upgrade',
    description: 'Upgrade your living room heating with properly sized, stylish radiators.',
    commonRequests: [
      'Radiator replacement',
      'Additional radiators',
      'Designer radiator fitting',
      'TRV installation',
      'Radiator repositioning',
      'Cold radiator repairs',
    ],
    ourProcess: [
      'Calculate heat requirement',
      'Recommend radiator size/style',
      'Drain system if needed',
      'Install radiator',
      'Balance system',
      'Test and commission',
    ],
    typicalCost: '£200-600 per radiator',
    timeframe: '2-4 hours per radiator',
    beforeAfterPotential: true,
    faqs: [
      {
        question: 'My living room is always cold - what can you do?',
        answer: 'We\'ll calculate the actual heat output needed and either replace undersized radiators or add additional ones.',
      },
    ],
  },

  // Loft Conversion Services
  {
    roomSlug: 'loft-conversion',
    serviceSlug: 'central-heating',
    serviceName: 'Loft Conversion Heating',
    title: 'Central Heating for Loft Conversions',
    description: 'Extend your heating system effectively to new loft spaces.',
    commonRequests: [
      'Radiator installation in loft',
      'Underfloor heating for loft',
      'Boiler capacity check',
      'Thermostat zone addition',
      'Pipework extension',
    ],
    ourProcess: [
      'Assess boiler capacity',
      'Calculate heat requirements',
      'Plan pipe routes',
      'Install before plastering',
      'Commission and balance',
      'Set up controls',
    ],
    typicalCost: '£800-2,000',
    timeframe: '1-2 days',
    beforeAfterPotential: false,
    faqs: [
      {
        question: 'Will my boiler cope with extra radiators?',
        answer: 'We calculate the additional load. Most modern boilers have capacity, but we\'ll advise if an upgrade is needed.',
      },
    ],
  },
  {
    roomSlug: 'loft-conversion',
    serviceSlug: 'plumbing',
    serviceName: 'Loft Conversion Plumbing',
    title: 'Plumbing for Loft Conversions',
    description: 'Hot and cold water services for loft en-suites and facilities.',
    commonRequests: [
      'En-suite plumbing',
      'Water supply extension',
      'Waste pipe routing',
      'Unvented cylinder for pressure',
      'Pump installation',
    ],
    ourProcess: [
      'Survey water system',
      'Plan optimum routing',
      'Install first fix',
      'Return for second fix',
      'Test and commission',
      'Building control sign-off',
    ],
    typicalCost: '£1,500-4,000',
    timeframe: '2-4 days total',
    beforeAfterPotential: false,
    faqs: [
      {
        question: 'Will I have good shower pressure in the loft?',
        answer: 'We often recommend an unvented cylinder or shower pump to ensure excellent pressure at the top of the house.',
      },
    ],
  },

  // Basement Services
  {
    roomSlug: 'basement',
    serviceSlug: 'drainage',
    serviceName: 'Basement Drainage',
    title: 'Basement Drainage Solutions',
    description: 'Specialist drainage for basements below sewer level.',
    commonRequests: [
      'Pumped drainage installation',
      'Macerator installation',
      'Sump pump fitting',
      'Basement bathroom drainage',
      'Floor drain installation',
    ],
    ourProcess: [
      'Survey existing drainage',
      'Design pumped system',
      'Install pump chamber',
      'Connect to main drain',
      'Test and commission',
      'Explain maintenance',
    ],
    typicalCost: '£1,500-5,000',
    timeframe: '1-3 days',
    beforeAfterPotential: false,
    faqs: [
      {
        question: 'Can I have a toilet in my basement?',
        answer: 'Yes, with a pumped drainage system (macerator or sewage pump) we can install full bathroom facilities.',
      },
    ],
  },

  // Conservatory Services
  {
    roomSlug: 'conservatory',
    serviceSlug: 'underfloor-heating',
    serviceName: 'Conservatory Underfloor Heating',
    title: 'Underfloor Heating for Conservatories',
    description: 'The ideal heating solution for conservatories and garden rooms.',
    commonRequests: [
      'Electric UFH installation',
      'Wet UFH installation',
      'Thermostat controls',
      'Zone integration',
      'Screed or mat systems',
    ],
    ourProcess: [
      'Survey floor construction',
      'Recommend system type',
      'Calculate heat output',
      'Install heating elements',
      'Connect controls',
      'Commission and handover',
    ],
    typicalCost: '£1,000-2,500',
    timeframe: '1-2 days',
    beforeAfterPotential: false,
    faqs: [
      {
        question: 'Is UFH better than radiators in a conservatory?',
        answer: 'Usually yes - it heats evenly, doesn\'t take up wall space, and handles the temperature fluctuations better.',
      },
    ],
  },
];

// Areas for room-specific pages
export const roomServiceAreas = [
  { slug: 'hampstead', name: 'Hampstead' },
  { slug: 'belsize-park', name: 'Belsize Park' },
  { slug: 'highgate', name: 'Highgate' },
  { slug: 'crouch-end', name: 'Crouch End' },
  { slug: 'muswell-hill', name: 'Muswell Hill' },
  { slug: 'kentish-town', name: 'Kentish Town' },
  { slug: 'swiss-cottage', name: 'Swiss Cottage' },
  { slug: 'camden', name: 'Camden' },
  { slug: 'islington', name: 'Islington' },
  { slug: 'north-london', name: 'North London' },
];

// Aliases for page compatibility
export const rooms = roomTypes;
export const getRoom = (slug: string): RoomType | undefined => roomTypes.find(r => r.slug === slug);

// Helper functions
export function getRoomType(slug: string): RoomType | undefined {
  return roomTypes.find(r => r.slug === slug);
}

export function getRoomService(roomSlug: string, serviceSlug: string): RoomService | undefined {
  return roomServices.find(s => s.roomSlug === roomSlug && s.serviceSlug === serviceSlug);
}

export function getServicesForRoom(roomSlug: string): RoomService[] {
  return roomServices.filter(s => s.roomSlug === roomSlug);
}

export function getRoomsForService(serviceSlug: string): RoomService[] {
  return roomServices.filter(s => s.serviceSlug === serviceSlug);
}

export function generateRoomServiceParams(): { room: string; service: string }[] {
  return roomServices.map(s => ({
    room: s.roomSlug,
    service: s.serviceSlug,
  }));
}

export function generateRoomServiceAreaParams(): { room: string; service: string; area: string }[] {
  const params: { room: string; service: string; area: string }[] = [];
  
  for (const rs of roomServices) {
    for (const area of roomServiceAreas) {
      params.push({
        room: rs.roomSlug,
        service: rs.serviceSlug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function countRoomServicePages(): number {
  // Room pages + Room/Service pages + Room/Service/Area pages
  return roomTypes.length + roomServices.length + generateRoomServiceAreaParams().length;
}
