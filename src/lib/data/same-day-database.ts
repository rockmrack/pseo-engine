// ============================================================================
// SAME DAY SERVICE DATABASE
// High-urgency same-day service pages
// ============================================================================

export interface SameDayService {
  slug: string;
  name: string;
  category: string;
  urgencyLevel: 'critical' | 'high' | 'standard';
  description: string;
  availability: string;
  responseTime: string;
  price: {
    callout: number;
    hourlyRate: number;
    fixedPriceAvailable: boolean;
  };
  commonScenarios: string[];
  whatWeBring: string[];
  process: string[];
  guarantee: string;
}

export const sameDayServices: SameDayService[] = [
  {
    slug: 'boiler-repair',
    name: 'Same Day Boiler Repair',
    category: 'heating',
    urgencyLevel: 'critical',
    description: 'Boiler broken down? Our Gas Safe engineers carry parts for all major brands and can often repair your boiler the same day you call.',
    availability: '7 days a week, 7am - 10pm',
    responseTime: 'Within 2 hours',
    price: {
      callout: 95,
      hourlyRate: 75,
      fixedPriceAvailable: true,
    },
    commonScenarios: [
      'No heating or hot water',
      'Boiler showing error codes',
      'Boiler making unusual noises',
      'Boiler keeps cutting out',
      'Pilot light won\'t stay lit',
      'Low boiler pressure',
    ],
    whatWeBring: [
      'Parts for Worcester, Vaillant, Viessmann, Baxi, Ideal',
      'Pressure gauges and diagnostic equipment',
      'Gas safety testing equipment',
      'Common replacement parts',
    ],
    process: [
      'Call us or book online - we\'ll confirm availability immediately',
      'Engineer arrives within 2 hours with parts',
      'Diagnosis within 30 minutes',
      'Fixed quote before any work proceeds',
      'Most repairs completed same day',
      'Full test and safety check',
    ],
    guarantee: '12-month guarantee on all parts and labour',
  },
  {
    slug: 'emergency-plumber',
    name: 'Same Day Emergency Plumber',
    category: 'plumbing',
    urgencyLevel: 'critical',
    description: 'Burst pipe, major leak, or blocked drain causing flooding? Our emergency plumbers respond within 2 hours to stop the damage and make repairs.',
    availability: '24/7 including bank holidays',
    responseTime: 'Within 1-2 hours',
    price: {
      callout: 85,
      hourlyRate: 65,
      fixedPriceAvailable: true,
    },
    commonScenarios: [
      'Burst pipes and major leaks',
      'Overflowing toilet',
      'Blocked drains causing flooding',
      'No water supply',
      'Water tank overflow',
      'Leaking radiator valves',
    ],
    whatWeBring: [
      'Pipe repair materials and fittings',
      'Drain clearing equipment',
      'CCTV drain camera',
      'Pumps for water extraction',
      'Isolation tools',
    ],
    process: [
      'Call our emergency line - answered 24/7',
      'Engineer dispatched immediately',
      'Isolate water supply to stop damage',
      'Emergency repair or temporary fix',
      'Permanent repair quote provided',
      'Insurance documentation if needed',
    ],
    guarantee: '12-month guarantee on all emergency repairs',
  },
  {
    slug: 'electrician',
    name: 'Same Day Electrician',
    category: 'electrical',
    urgencyLevel: 'high',
    description: 'Power out, dangerous fault, or urgent electrical issue? Our NICEIC registered electricians can attend the same day to restore safety and power.',
    availability: '7 days a week, 7am - 9pm',
    responseTime: 'Within 2-4 hours',
    price: {
      callout: 85,
      hourlyRate: 60,
      fixedPriceAvailable: true,
    },
    commonScenarios: [
      'Power trip or total power loss',
      'Burning smell from electrics',
      'Sparking sockets or switches',
      'Faulty consumer unit',
      'Emergency lighting failure',
      'Security system fault',
    ],
    whatWeBring: [
      'Testing equipment (multifunction tester)',
      'Common consumer unit parts',
      'Socket and switch replacements',
      'Cable and wiring supplies',
      'Circuit breakers and RCDs',
    ],
    process: [
      'Describe the fault when you call',
      'We\'ll advise on immediate safety steps',
      'Electrician arrives with equipment',
      'Full diagnosis and safety check',
      'Repair or make safe',
      'NICEIC certificate if required',
    ],
    guarantee: '12-month guarantee on all work, fully insured',
  },
  {
    slug: 'drain-unblocking',
    name: 'Same Day Drain Unblocking',
    category: 'drainage',
    urgencyLevel: 'high',
    description: 'Blocked drain causing backups or flooding? We clear all types of blockages using high-pressure jetting and CCTV diagnostics.',
    availability: '7 days a week, 7am - 8pm',
    responseTime: 'Within 2-4 hours',
    price: {
      callout: 75,
      hourlyRate: 60,
      fixedPriceAvailable: true,
    },
    commonScenarios: [
      'Toilet won\'t flush',
      'Sink or bath draining slowly',
      'Gurgling drains',
      'Outside drain overflowing',
      'Multiple drains blocked',
      'Bad smells from drains',
    ],
    whatWeBring: [
      'High-pressure water jetter',
      'CCTV drain camera',
      'Drain rods and clearing equipment',
      'Enzyme treatments',
      'Root cutting equipment',
    ],
    process: [
      'Book same-day appointment',
      'Engineer assesses the blockage',
      'CCTV survey if cause unclear',
      'Clear blockage with appropriate method',
      'Full flow test to confirm clear',
      'Advice on preventing future blockages',
    ],
    guarantee: '28-day guarantee against re-blocking (same blockage)',
  },
  {
    slug: 'locksmith',
    name: 'Same Day Locksmith',
    category: 'security',
    urgencyLevel: 'critical',
    description: 'Locked out, broken lock, or security concern? Our locksmiths provide fast, non-destructive entry and lock replacement services.',
    availability: '24/7 including bank holidays',
    responseTime: 'Within 30-60 minutes',
    price: {
      callout: 65,
      hourlyRate: 55,
      fixedPriceAvailable: true,
    },
    commonScenarios: [
      'Locked out of home',
      'Lost or stolen keys',
      'Broken lock mechanism',
      'Key snapped in lock',
      'After burglary - secure property',
      'Faulty electronic lock',
    ],
    whatWeBring: [
      'Lock picking equipment',
      'Replacement locks (multiple grades)',
      'Key cutting machine',
      'Reinforced strike plates',
      'Smart lock options',
    ],
    process: [
      'Call our 24/7 line',
      'Locksmith dispatched to your location',
      'Non-destructive entry where possible',
      'Lock replaced if damaged',
      'New keys cut on site',
      'Security assessment offered',
    ],
    guarantee: '12-month guarantee on new locks fitted',
  },
  {
    slug: 'toilet-repair',
    name: 'Same Day Toilet Repair',
    category: 'plumbing',
    urgencyLevel: 'high',
    description: 'Toilet not flushing, constantly running, or leaking? We carry all common parts and can fix most toilet problems the same day.',
    availability: '7 days a week, 8am - 8pm',
    responseTime: 'Within 2-4 hours',
    price: {
      callout: 75,
      hourlyRate: 55,
      fixedPriceAvailable: true,
    },
    commonScenarios: [
      'Toilet won\'t flush',
      'Constantly running water',
      'Leaking at base',
      'Cracked cistern or pan',
      'Faulty flush mechanism',
      'Blocked toilet',
    ],
    whatWeBring: [
      'Universal flush valves and siphons',
      'Fill valves for all types',
      'Wax seals and fixings',
      'Toilet unblocking equipment',
      'Replacement toilet options',
    ],
    process: [
      'Book your same-day slot',
      'Engineer diagnoses the issue',
      'Repair with carried parts if possible',
      'Source parts same-day if needed',
      'Full test of flush and fill',
      'Clean and tidy on completion',
    ],
    guarantee: '12-month guarantee on all repairs',
  },
];

// Areas for same-day service pages
export const sameDayAreas = [
  { slug: 'hampstead', name: 'Hampstead', responseBonus: 'Priority area - often under 1 hour' },
  { slug: 'belsize-park', name: 'Belsize Park', responseBonus: 'Priority area - often under 1 hour' },
  { slug: 'highgate', name: 'Highgate', responseBonus: 'Priority area - often under 1 hour' },
  { slug: 'primrose-hill', name: 'Primrose Hill', responseBonus: 'Priority area - often under 1 hour' },
  { slug: 'swiss-cottage', name: 'Swiss Cottage', responseBonus: 'Priority area - often under 1 hour' },
  { slug: 'crouch-end', name: 'Crouch End', responseBonus: 'Fast response - usually under 2 hours' },
  { slug: 'muswell-hill', name: 'Muswell Hill', responseBonus: 'Fast response - usually under 2 hours' },
  { slug: 'kentish-town', name: 'Kentish Town', responseBonus: 'Fast response - usually under 2 hours' },
  { slug: 'camden', name: 'Camden', responseBonus: 'Fast response - usually under 2 hours' },
  { slug: 'islington', name: 'Islington', responseBonus: 'Standard response - within 2-4 hours' },
  { slug: 'finsbury-park', name: 'Finsbury Park', responseBonus: 'Standard response - within 2-4 hours' },
  { slug: 'archway', name: 'Archway', responseBonus: 'Standard response - within 2-4 hours' },
];

// Helper functions
export function getSameDayService(slug: string): SameDayService | undefined {
  return sameDayServices.find(s => s.slug === slug);
}

export function getSameDayArea(slug: string): typeof sameDayAreas[0] | undefined {
  return sameDayAreas.find(a => a.slug === slug);
}

export function getSameDayServicesByCategory(category: string): SameDayService[] {
  return sameDayServices.filter(s => s.category === category);
}

export function getSameDayServicesByUrgency(level: SameDayService['urgencyLevel']): SameDayService[] {
  return sameDayServices.filter(s => s.urgencyLevel === level);
}

export function generateSameDayParams(): { service: string; area: string }[] {
  const params: { service: string; area: string }[] = [];
  
  for (const service of sameDayServices) {
    for (const area of sameDayAreas) {
      params.push({
        service: service.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function countSameDayPages(): number {
  return generateSameDayParams().length;
}
