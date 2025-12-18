// ============================================================================
// PSEO ENGINE - EMERGENCY SERVICES DATA
// High-intent emergency landing pages for immediate local searches
// ============================================================================

export interface EmergencyService {
  slug: string;
  name: string;
  urgencyLevel: 'critical' | 'high' | 'medium';
  shortTitle: string;
  h1Template: string;
  metaTitleTemplate: string;
  metaDescriptionTemplate: string;
  intro: string;
  symptoms: string[];
  immediateActions: string[];
  responseTime: string;
  calloutFee: string;
  availableHours: string;
  relatedService: string;
}

export const emergencyServices: EmergencyService[] = [
  // CRITICAL - Immediate response required
  {
    slug: 'emergency-plumber',
    name: 'Emergency Plumber',
    urgencyLevel: 'critical',
    shortTitle: '24/7 Emergency Plumber',
    h1Template: 'Emergency Plumber in {area} - Available Now',
    metaTitleTemplate: 'Emergency Plumber {area} | 24/7 Call Out | {postcode} | Call Now',
    metaDescriptionTemplate: 'Need an emergency plumber in {area}? We offer 24/7 emergency plumbing services across {postcode}. Burst pipes, leaks, blocked drains. Call {phone} now.',
    intro: 'Water emergencies can cause thousands of pounds in damage within hours. Our emergency plumbers are on standby to respond to your call immediately.',
    symptoms: [
      'Burst pipe flooding your home',
      'No water supply',
      'Sewage backup or overflow',
      'Major water leak',
      'Frozen pipes',
      'Toilet not flushing (only toilet in home)',
    ],
    immediateActions: [
      'Turn off your main water stopcock (usually under kitchen sink)',
      'Turn off your boiler',
      'Move valuables away from water',
      'Open taps to drain remaining water',
      'Call us immediately',
    ],
    responseTime: '1 hour',
    calloutFee: '£95',
    availableHours: '24/7',
    relatedService: 'emergency-plumbing',
  },
  {
    slug: 'boiler-breakdown',
    name: 'Boiler Breakdown',
    urgencyLevel: 'critical',
    shortTitle: 'Emergency Boiler Repair',
    h1Template: 'Boiler Breakdown in {area} - Same Day Repair',
    metaTitleTemplate: 'Boiler Breakdown {area} | Same Day Repair | {postcode} | Gas Safe Engineers',
    metaDescriptionTemplate: 'Boiler broken down in {area}? Gas Safe engineers available now for emergency boiler repairs in {postcode}. No heat? No hot water? Call {phone}.',
    intro: 'A broken boiler in winter is a genuine emergency, especially with vulnerable people at home. Our Gas Safe engineers carry parts for all major brands.',
    symptoms: [
      'No heating or hot water',
      'Boiler showing error codes',
      'Boiler making banging noises',
      'Pilot light keeps going out',
      'Boiler leaking water',
      'Smell of gas (call National Grid first!)',
    ],
    immediateActions: [
      'Check your thermostat is set correctly',
      'Check the pressure gauge (should be 1-1.5 bar)',
      'Try resetting the boiler once',
      'If you smell gas, turn off gas supply and call 0800 111 999',
      'Call us for emergency repair',
    ],
    responseTime: '2 hours',
    calloutFee: '£95 diagnostic',
    availableHours: '7am-10pm, 7 days',
    relatedService: 'boiler-repair',
  },
  {
    slug: 'gas-leak',
    name: 'Gas Leak Response',
    urgencyLevel: 'critical',
    shortTitle: 'Gas Leak Emergency',
    h1Template: 'Suspected Gas Leak in {area} - What To Do',
    metaTitleTemplate: 'Gas Leak {area} | Emergency Response | Gas Safe Engineers | {postcode}',
    metaDescriptionTemplate: 'Smell gas in {area}? First call National Grid on 0800 111 999. For gas appliance repairs and safety checks in {postcode}, call {phone}.',
    intro: 'IMPORTANT: If you smell gas, your first call should be to the National Gas Emergency Service on 0800 111 999. They will make the area safe. We can then repair or replace faulty appliances.',
    symptoms: [
      'Smell of gas (rotten eggs)',
      'Hissing sound near gas appliances',
      'Yellow or orange boiler flame (should be blue)',
      'Black marks near gas appliances',
      'Pilot light repeatedly going out',
      'Feeling unwell when heating is on',
    ],
    immediateActions: [
      'DO NOT turn on any lights or switches',
      'DO NOT use your phone inside - go outside first',
      'Open all windows and doors',
      'Turn off gas at the meter if safe to do so',
      'Call National Grid: 0800 111 999',
      'Call us once area is made safe',
    ],
    responseTime: 'Same day after gas board clearance',
    calloutFee: '£95',
    availableHours: '24/7 for follow-up',
    relatedService: 'gas-safety',
  },
  {
    slug: 'blocked-drain',
    name: 'Blocked Drain',
    urgencyLevel: 'high',
    shortTitle: 'Emergency Drain Unblocking',
    h1Template: 'Blocked Drain in {area} - Rapid Response',
    metaTitleTemplate: 'Blocked Drain {area} | Same Day Unblocking | {postcode} | From £85',
    metaDescriptionTemplate: 'Blocked drain in {area}? Professional drain unblocking service in {postcode}. Toilets, sinks, outside drains. Same day service. Call {phone}.',
    intro: 'A blocked drain can quickly escalate from an inconvenience to a health hazard. We use high-pressure jetting and CCTV to clear blockages and identify the cause.',
    symptoms: [
      'Water draining slowly',
      'Gurgling sounds from pipes',
      'Bad smells from drains',
      'Water backing up',
      'Multiple fixtures affected',
      'Overflowing manholes',
    ],
    immediateActions: [
      'Stop using water if drains are backing up',
      'Try a plunger on single blocked fixtures',
      'Do not use chemical drain cleaners on complete blockages',
      'Check external manholes for blockages',
      'Call us for professional unblocking',
    ],
    responseTime: '2-4 hours',
    calloutFee: 'From £85',
    availableHours: '7am-9pm, 7 days',
    relatedService: 'drain-unblocking',
  },
  {
    slug: 'power-cut',
    name: 'Electrical Emergency',
    urgencyLevel: 'critical',
    shortTitle: 'Emergency Electrician',
    h1Template: 'Emergency Electrician in {area} - Available Now',
    metaTitleTemplate: 'Emergency Electrician {area} | 24/7 Callout | {postcode} | NICEIC Approved',
    metaDescriptionTemplate: 'Lost power in {area}? NICEIC approved emergency electricians serving {postcode}. Fuse board repairs, power restoration. Call {phone} now.',
    intro: 'Electrical emergencies require qualified attention. Our NICEIC approved electricians can diagnose and repair electrical faults safely.',
    symptoms: [
      'Complete power loss',
      'Partial power loss (some circuits)',
      'Tripping fuse board',
      'Burning smell from sockets',
      'Sparking outlets',
      'Lights flickering throughout house',
    ],
    immediateActions: [
      'Check if neighbours have power (could be grid issue)',
      'Check your fuse board for tripped switches',
      'Do not touch any damaged wiring',
      'Unplug appliances if you suspect they caused the trip',
      'Call us for emergency diagnosis',
    ],
    responseTime: '2 hours',
    calloutFee: '£95',
    availableHours: '24/7',
    relatedService: 'electrical-fault-finding',
  },
  {
    slug: 'no-hot-water',
    name: 'No Hot Water',
    urgencyLevel: 'high',
    shortTitle: 'Hot Water Emergency',
    h1Template: 'No Hot Water in {area} - Same Day Fix',
    metaTitleTemplate: 'No Hot Water {area} | Same Day Repair | {postcode} | Call {phone}',
    metaDescriptionTemplate: 'No hot water in {area}? We fix boilers, immersion heaters and cylinders across {postcode}. Same day service available. Call {phone}.',
    intro: 'Whether it\'s a boiler fault, immersion heater failure or cylinder issue, we\'ll get your hot water running again quickly.',
    symptoms: [
      'No hot water from any tap',
      'Hot water runs out quickly',
      'Water not getting hot enough',
      'Immersion heater not working',
      'Hot water only from some taps',
      'Boiler firing but no hot water',
    ],
    immediateActions: [
      'Check your boiler pressure',
      'Check if heating is working (separate issue if not)',
      'Check immersion heater switch if you have one',
      'Check for any error codes on boiler',
      'Call us for diagnosis',
    ],
    responseTime: '2-4 hours',
    calloutFee: '£75',
    availableHours: '7am-8pm, 7 days',
    relatedService: 'boiler-repair',
  },
  {
    slug: 'leak-detection',
    name: 'Water Leak',
    urgencyLevel: 'high',
    shortTitle: 'Leak Detection & Repair',
    h1Template: 'Water Leak Detection in {area} - Expert Service',
    metaTitleTemplate: 'Water Leak {area} | Detection & Repair | {postcode} | Stop Damage Now',
    metaDescriptionTemplate: 'Suspect a water leak in {area}? Professional leak detection service in {postcode}. Hidden leaks, damp patches, high water bills. Call {phone}.',
    intro: 'Hidden leaks can cause structural damage and mould. We use thermal imaging and acoustic detection to find leaks without unnecessary damage.',
    symptoms: [
      'Unexplained high water bills',
      'Damp patches on walls or ceilings',
      'Sound of running water when nothing is on',
      'Musty smells',
      'Dropping boiler pressure',
      'Warm spots on floors (underfloor heating leak)',
    ],
    immediateActions: [
      'Turn off water if leak is visible',
      'Note your water meter reading',
      'Check all visible pipes for moisture',
      'Document any damage with photos',
      'Call us for professional detection',
    ],
    responseTime: '4-24 hours',
    calloutFee: '£125 (includes detection)',
    availableHours: '7am-7pm, 7 days',
    relatedService: 'leak-detection',
  },
  {
    slug: 'locked-out',
    name: 'Boiler Lockout',
    urgencyLevel: 'high',
    shortTitle: 'Boiler Lockout Reset',
    h1Template: 'Boiler Lockout in {area} - Professional Reset',
    metaTitleTemplate: 'Boiler Lockout {area} | Error Code Help | {postcode} | Gas Safe Engineers',
    metaDescriptionTemplate: 'Boiler locked out in {area}? Gas Safe engineers to reset and repair boilers in {postcode}. All error codes. Same day service. Call {phone}.',
    intro: 'Boiler lockouts are a safety feature, but they need professional attention to diagnose and fix the underlying cause safely.',
    symptoms: [
      'Boiler showing error code',
      'Boiler won\'t ignite',
      'Reset button not working',
      'Repeated lockouts',
      'Boiler cycling on and off',
      'Orange or yellow flame',
    ],
    immediateActions: [
      'Note down any error codes displayed',
      'Try resetting once using manufacturer instructions',
      'Do not repeatedly reset (could be dangerous)',
      'Check gas supply is on',
      'Call us for professional diagnosis',
    ],
    responseTime: '2-4 hours',
    calloutFee: '£95 diagnostic',
    availableHours: '7am-9pm, 7 days',
    relatedService: 'boiler-repair',
  },
];

// Areas for emergency pages
export const emergencyAreas = [
  { slug: 'hampstead', name: 'Hampstead', postcode: 'NW3' },
  { slug: 'highgate', name: 'Highgate', postcode: 'N6' },
  { slug: 'belsize-park', name: 'Belsize Park', postcode: 'NW3' },
  { slug: 'swiss-cottage', name: 'Swiss Cottage', postcode: 'NW3' },
  { slug: 'st-johns-wood', name: "St John's Wood", postcode: 'NW8' },
  { slug: 'crouch-end', name: 'Crouch End', postcode: 'N8' },
  { slug: 'muswell-hill', name: 'Muswell Hill', postcode: 'N10' },
  { slug: 'kentish-town', name: 'Kentish Town', postcode: 'NW5' },
  { slug: 'west-hampstead', name: 'West Hampstead', postcode: 'NW6' },
  { slug: 'camden', name: 'Camden', postcode: 'NW1' },
  { slug: 'islington', name: 'Islington', postcode: 'N1' },
  { slug: 'finchley', name: 'Finchley', postcode: 'N3' },
  { slug: 'north-london', name: 'North London', postcode: 'N/NW' },
  { slug: 'nw3', name: 'NW3', postcode: 'NW3' },
  { slug: 'nw6', name: 'NW6', postcode: 'NW6' },
];

// Helper functions
export function getEmergencyService(slug: string): EmergencyService | undefined {
  return emergencyServices.find(s => s.slug === slug);
}

export function getEmergencyArea(slug: string): typeof emergencyAreas[0] | undefined {
  return emergencyAreas.find(a => a.slug === slug);
}

export function generateEmergencyParams() {
  const params: { service: string; area: string }[] = [];
  for (const service of emergencyServices) {
    for (const area of emergencyAreas) {
      params.push({
        service: service.slug,
        area: area.slug,
      });
    }
  }
  return params;
}
