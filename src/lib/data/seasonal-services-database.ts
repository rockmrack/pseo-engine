// ============================================================================
// SEASONAL SERVICES DATABASE
// Seasonal and time-sensitive service pages
// ============================================================================

export interface SeasonalServiceItem {
  slug: string;
  name: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'year-round';
  months: number[]; // 1-12
  urgency: 'preparation' | 'peak-demand' | 'maintenance' | 'emergency';
  description: string;
  whyNow: string[];
  services: string[];
  checklist: string[];
  savingsPotential: string;
  typicalCost: string;
  bookingAdvice: string;
  faqs: { question: string; answer: string }[];
}

export interface AnnualEvent {
  slug: string;
  name: string;
  date: string;
  description: string;
  relatedServices: string[];
  preparationTime: string;
}

export const seasonalServices: SeasonalServiceItem[] = [
  // Winter Services
  {
    slug: 'winter-boiler-service',
    name: 'Winter Boiler Service & Check',
    season: 'winter',
    months: [10, 11, 12, 1, 2],
    urgency: 'peak-demand',
    description: 'Essential boiler servicing before and during winter to prevent breakdowns when you need heating most.',
    whyNow: [
      'Prevent mid-winter breakdowns',
      'Ensure heating efficiency',
      'Keep warranty valid',
      'Identify issues before cold snap',
    ],
    services: [
      'Annual boiler service',
      'Gas Safety Certificate',
      'Heating system check',
      'Radiator bleeding',
      'Pressure checks',
    ],
    checklist: [
      'Book service in September/October',
      'Check boiler pressure',
      'Bleed radiators',
      'Test heating controls',
      'Check for error codes',
      'Ensure flue is clear',
    ],
    savingsPotential: 'Up to 10% on heating bills with efficient boiler',
    typicalCost: 'Â£80-150 for service',
    bookingAdvice: 'Book in September - slots fill quickly from October onwards',
    faqs: [
      {
        question: 'When should I service my boiler for winter?',
        answer: 'Ideally in September or early October, before the rush. However, we offer services year-round.',
      },
      {
        question: 'What if my boiler breaks down over Christmas?',
        answer: 'We offer emergency cover 365 days including Christmas. Response within 4 hours.',
      },
    ],
  },
  {
    slug: 'frozen-pipe-prevention',
    name: 'Frozen Pipe Prevention',
    season: 'winter',
    months: [11, 12, 1, 2],
    urgency: 'preparation',
    description: 'Protect your pipes from freezing and bursting during cold weather.',
    whyNow: [
      'Prevent burst pipes',
      'Avoid water damage',
      'Protect vacant properties',
      'Maintain water supply',
    ],
    services: [
      'Pipe lagging installation',
      'External tap insulation',
      'Boiler frost protection check',
      'Trace heating installation',
      'Vulnerable pipe identification',
    ],
    checklist: [
      'Lag exposed pipes',
      'Insulate outside taps',
      'Know stopcock location',
      'Set heating on timer when away',
      'Drip taps in severe cold',
      'Open loft hatch in cold spells',
    ],
    savingsPotential: 'Prevent Â£1,000s in water damage',
    typicalCost: 'Â£100-300 for pipe lagging',
    bookingAdvice: 'Best done before November frost risk',
    faqs: [
      {
        question: 'What pipes are most at risk?',
        answer: 'Pipes in unheated spaces: lofts, garages, external walls, and outside taps.',
      },
      {
        question: 'My pipes have frozen - what should I do?',
        answer: 'Turn off the water at the stopcock and call us. Don\'t try to thaw with heat guns.',
      },
    ],
  },
  {
    slug: 'christmas-emergency-cover',
    name: 'Christmas & New Year Emergency Cover',
    season: 'winter',
    months: [12, 1],
    urgency: 'emergency',
    description: '24/7 emergency plumbing, heating, and electrical cover throughout the festive period.',
    whyNow: [
      'Peak breakdown period',
      'Most companies closed',
      'Family gatherings need heating',
      'Higher usage stress on systems',
    ],
    services: [
      'Emergency boiler repair',
      'Burst pipe repair',
      'Blocked drain clearing',
      'No hot water fix',
      'Heating failure response',
    ],
    checklist: [
      'Save our emergency number',
      'Know stopcock location',
      'Know gas shutoff',
      'Have torch ready',
      'Check smoke alarms',
    ],
    savingsPotential: 'Avoid premium rates from unknown callout services',
    typicalCost: 'Emergency callout from Â£150 (+ parts)',
    bookingAdvice: 'Save our number: 020 XXXX XXXX - we answer 24/7',
    faqs: [
      {
        question: 'Are you really open Christmas Day?',
        answer: 'Yes - our emergency line is manned 365 days a year, including Christmas Day.',
      },
      {
        question: 'Is there a premium for Christmas callouts?',
        answer: 'We charge standard emergency rates. No special Christmas premium.',
      },
    ],
  },

  // Spring Services
  {
    slug: 'spring-heating-shutdown',
    name: 'Spring Heating System Shutdown',
    season: 'spring',
    months: [3, 4, 5],
    urgency: 'maintenance',
    description: 'Properly shut down your heating system for summer and schedule any repairs found during winter.',
    whyNow: [
      'Address winter wear and tear',
      'Quiet period - faster service',
      'Lower prices than autumn',
      'Ready for next winter',
    ],
    services: [
      'End of season boiler check',
      'Radiator repairs',
      'System flush if needed',
      'Thermostat upgrades',
      'Pump replacements',
    ],
    checklist: [
      'Note any winter issues',
      'Check for radiator leaks',
      'Book repairs now',
      'Consider upgrades',
      'Plan summer maintenance',
    ],
    savingsPotential: 'Save 10-20% booking in spring vs autumn rush',
    typicalCost: 'Varies by repair needed',
    bookingAdvice: 'Best time of year for non-urgent heating work',
    faqs: [
      {
        question: 'Should I turn my boiler off completely in summer?',
        answer: 'Keep it on for hot water, but you can turn off the heating function. Run it occasionally to prevent seizing.',
      },
    ],
  },
  {
    slug: 'spring-outdoor-tap-installation',
    name: 'Spring Outdoor Tap Installation',
    season: 'spring',
    months: [3, 4, 5],
    urgency: 'preparation',
    description: 'Install or service outdoor taps ready for summer garden use.',
    whyNow: [
      'Garden season starting',
      'Avoid summer backlog',
      'Check for frost damage',
      'Upgrade old installations',
    ],
    services: [
      'Outside tap installation',
      'Frost-free tap upgrade',
      'Garden irrigation plumbing',
      'Hose pipe connections',
      'Isolation valve fitting',
    ],
    checklist: [
      'Check existing tap for frost damage',
      'Plan irrigation needs',
      'Consider frost-free type',
      'Check garden pipe routing',
    ],
    savingsPotential: 'Save water vs bucket carrying',
    typicalCost: 'Â£150-300 for outside tap installation',
    bookingAdvice: 'Book March-April for installation before summer',
    faqs: [
      {
        question: 'What type of outside tap is best?',
        answer: 'We recommend frost-free taps that drain automatically when turned off.',
      },
    ],
  },

  // Summer Services
  {
    slug: 'summer-boiler-replacement',
    name: 'Summer Boiler Replacement',
    season: 'summer',
    months: [6, 7, 8],
    urgency: 'preparation',
    description: 'The best time to replace your boiler - no rush, best prices, and minimal disruption.',
    whyNow: [
      'No heating needed during install',
      'Better availability',
      'Often discounted prices',
      'No waiting in cold',
    ],
    services: [
      'Boiler replacement',
      'System upgrades',
      'Radiator changes',
      'Smart thermostat installation',
      'Full system powerflush',
    ],
    checklist: [
      'Get quotes in spring',
      'Research best boiler options',
      'Plan for minimal disruption',
      'Consider full system upgrade',
    ],
    savingsPotential: 'Save Â£200-500 vs emergency winter replacement',
    typicalCost: 'Â£2,000-4,000 for new boiler installed',
    bookingAdvice: 'Book May-June for July-August installation',
    faqs: [
      {
        question: 'Why is summer best for boiler replacement?',
        answer: 'You won\'t be without heating, engineers are less busy, and you can often negotiate better prices.',
      },
      {
        question: 'Will I have hot water during installation?',
        answer: 'We aim to complete in one day so hot water is only off briefly. We can arrange temporary solutions if needed.',
      },
    ],
  },
  {
    slug: 'holiday-plumbing-check',
    name: 'Holiday Home Preparation',
    season: 'summer',
    months: [6, 7, 8],
    urgency: 'preparation',
    description: 'Prepare your home for holiday absence - prevent leaks and water damage while you\'re away.',
    whyNow: [
      'Peak holiday season',
      'Prevent return disasters',
      'Insurance requirements',
      'Peace of mind',
    ],
    services: [
      'Pre-holiday plumbing check',
      'Stopcock service',
      'Flexible hose inspection',
      'Leak detection',
      'Smart water monitor installation',
    ],
    checklist: [
      'Know stopcock location',
      'Turn off water if away 2+ weeks',
      'Check washing machine hoses',
      'Set heating to frost protect',
      'Ask neighbour to check',
    ],
    savingsPotential: 'Prevent Â£10,000+ water damage claims',
    typicalCost: 'Â£80-150 for pre-holiday check',
    bookingAdvice: 'Book 2 weeks before holiday departure',
    faqs: [
      {
        question: 'Should I turn off the water when on holiday?',
        answer: 'For trips over 2 weeks, yes. For shorter trips, just turn off washing machine/dishwasher isolation valves.',
      },
    ],
  },

  // Autumn Services
  {
    slug: 'autumn-heating-startup',
    name: 'Autumn Heating System Startup',
    season: 'autumn',
    months: [9, 10],
    urgency: 'peak-demand',
    description: 'Get your heating system ready for winter with our autumn startup service.',
    whyNow: [
      'First use after summer',
      'Identify problems early',
      'Beat the rush',
      'Ensure winter readiness',
    ],
    services: [
      'Heating system test',
      'Boiler service',
      'Radiator bleeding',
      'Thermostat check',
      'Pressure adjustment',
    ],
    checklist: [
      'Turn heating on early',
      'Listen for unusual noises',
      'Check all radiators heat',
      'Verify thermostat works',
      'Book service if issues',
    ],
    savingsPotential: 'Avoid emergency callout costs',
    typicalCost: 'Â£80-150 for heating startup check',
    bookingAdvice: 'Book in September for October service',
    faqs: [
      {
        question: 'When should I turn my heating on for the first time?',
        answer: 'Run it briefly in September to check everything works before you really need it.',
      },
    ],
  },
  {
    slug: 'autumn-gutter-drainage-check',
    name: 'Autumn Drainage & Gutter Service',
    season: 'autumn',
    months: [9, 10, 11],
    urgency: 'preparation',
    description: 'Clear gutters and check drainage before winter rains arrive.',
    whyNow: [
      'Leaves falling',
      'Heavy rain season approaching',
      'Prevent blockages',
      'Avoid water damage',
    ],
    services: [
      'Gutter clearing',
      'Downpipe check',
      'Drain inspection',
      'Gully clearing',
      'CCTV drain survey',
    ],
    checklist: [
      'Clear leaves from gutters',
      'Check downpipes flow',
      'Clear drain covers',
      'Test outside drains',
      'Check for damp signs',
    ],
    savingsPotential: 'Prevent damp and drainage problems',
    typicalCost: 'Â£80-150 for gutter clear',
    bookingAdvice: 'Best after leaves have fallen (November)',
    faqs: [
      {
        question: 'How often should gutters be cleared?',
        answer: 'At least annually in autumn. More often if you have overhanging trees.',
      },
    ],
  },

  // Year-Round Services
  {
    slug: 'landlord-compliance-calendar',
    name: 'Landlord Annual Compliance',
    season: 'year-round',
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    urgency: 'maintenance',
    description: 'Stay compliant year-round with scheduled certificate renewals.',
    whyNow: [
      'Legal requirement',
      'Avoid penalties',
      'Protect tenants',
      'Maintain insurance',
    ],
    services: [
      'Gas Safety Certificate',
      'EICR',
      'EPC',
      'Legionella assessment',
      'Smoke/CO alarm check',
    ],
    checklist: [
      'Track certificate expiry dates',
      'Book renewals 1 month ahead',
      'Coordinate with tenants',
      'Store certificates safely',
      'Update letting agent',
    ],
    savingsPotential: 'Avoid Â£5,000+ penalties',
    typicalCost: 'Â£65-350 per certificate',
    bookingAdvice: 'Set calendar reminders 6 weeks before expiry',
    faqs: [
      {
        question: 'What certificates do I need as a landlord?',
        answer: 'Gas Safety (annual), EICR (5 yearly), EPC (10 yearly), and smoke/CO alarms (check each tenancy).',
      },
    ],
  },
];

export const annualEvents: AnnualEvent[] = [
  {
    slug: 'clocks-change-october',
    name: 'Clocks Go Back',
    date: 'Last Sunday in October',
    description: 'Remember to adjust heating timers when clocks change.',
    relatedServices: ['thermostat-programming', 'smart-thermostat-installation'],
    preparationTime: 'Check timer settings on the day',
  },
  {
    slug: 'clocks-change-march',
    name: 'Clocks Go Forward',
    date: 'Last Sunday in March',
    description: 'Adjust heating timers and consider switching to summer schedule.',
    relatedServices: ['thermostat-programming', 'heating-controls'],
    preparationTime: 'Check timer settings on the day',
  },
  {
    slug: 'boiler-awareness-week',
    name: 'Boiler Awareness Week',
    date: 'Third week of September',
    description: 'Annual reminder to service boilers before winter.',
    relatedServices: ['boiler-service', 'boiler-replacement'],
    preparationTime: 'Book service in advance',
  },
  {
    slug: 'carbon-monoxide-awareness-week',
    name: 'Carbon Monoxide Awareness Week',
    date: 'Third week of November',
    description: 'Check CO alarms and gas appliance safety.',
    relatedServices: ['co-alarm-installation', 'gas-safety-certificate'],
    preparationTime: 'Test alarms, book safety check',
  },
];

// Season data for page generation
export const seasons = [
  { slug: 'spring', name: 'Spring', months: [3, 4, 5], description: 'Spring home maintenance services' },
  { slug: 'summer', name: 'Summer', months: [6, 7, 8], description: 'Summer home improvement services' },
  { slug: 'autumn', name: 'Autumn', months: [9, 10, 11], description: 'Autumn preparation services' },
  { slug: 'winter', name: 'Winter', months: [12, 1, 2], description: 'Winter home care services' },
];

// Helper functions
export function getSeason(slug: string) {
  return seasons.find(s => s.slug === slug);
}

export function getSeasonalService(slug: string): SeasonalServiceItem | undefined {
  return seasonalServices.find(s => s.slug === slug);
}

export function getServicesBySeason(season: SeasonalServiceItem['season']): SeasonalServiceItem[] {
  return seasonalServices.filter(s => s.season === season);
}

export function getCurrentSeasonServices(): SeasonalServiceItem[] {
  const currentMonth = new Date().getMonth() + 1; // JS months are 0-indexed
  return seasonalServices.filter(s => s.months.includes(currentMonth));
}

export function getUpcomingSeasonServices(monthsAhead: number = 2): SeasonalServiceItem[] {
  const currentMonth = new Date().getMonth() + 1;
  const upcomingMonths: number[] = [];
  
  for (let i = 0; i <= monthsAhead; i++) {
    upcomingMonths.push(((currentMonth - 1 + i) % 12) + 1);
  }
  
  return seasonalServices.filter(s => 
    s.months.some(m => upcomingMonths.includes(m))
  );
}

export function getAnnualEvent(slug: string): AnnualEvent | undefined {
  return annualEvents.find(e => e.slug === slug);
}

export function generateSeasonalServiceParams(): { season: string; service: string }[] {
  return seasonalServices.map(s => ({
    season: s.season,
    service: s.slug,
  }));
}

export function countSeasonalServicePages(): number {
  return seasonalServices.length + annualEvents.length;
}
