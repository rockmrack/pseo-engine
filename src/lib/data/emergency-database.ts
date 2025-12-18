// ============================================================================
// PSEO ENGINE - EMERGENCY TIME-BASED DATABASE
// Data for /emergency/[time]/[service]/[area] pages
// 10x SEO Expansion - Strategy 3
// ============================================================================

export interface EmergencyTimeSlot {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  availability: string;
  responseTime: string;
  calloutFee: string;
  scenarios: string[];
  benefits: string[];
}

export interface EmergencyService {
  slug: string;
  name: string;
  emergencyDescription: string;
  urgentSigns: string[];
  immediateActions: string[];
  typicalEmergencyCost: string;
}

export const emergencyTimeSlots: EmergencyTimeSlot[] = [
  {
    slug: '24-hour',
    name: '24 Hour Emergency Service',
    shortName: '24/7',
    description: 'Round-the-clock emergency renovation and repair services available any time, day or night.',
    availability: '24 hours a day, 7 days a week',
    responseTime: 'Within 1-2 hours',
    calloutFee: 'From £75 (waived if work proceeds)',
    scenarios: [
      'Burst pipes flooding your property',
      'Complete electrical failure',
      'Storm damage to roof',
      'Structural concerns after impact',
      'Gas emergency support',
    ],
    benefits: [
      'Immediate telephone response',
      'Rapid on-site attendance',
      'Qualified emergency technicians',
      'Temporary fixes to prevent further damage',
      'Full repair scheduling',
    ],
  },
  {
    slug: 'same-day',
    name: 'Same Day Emergency Service',
    shortName: 'Same Day',
    description: 'Urgent same-day response for time-critical repairs and renovations that can\'t wait.',
    availability: '7am - 10pm, 7 days a week',
    responseTime: 'Within 2-4 hours',
    calloutFee: 'From £50 (waived if work proceeds)',
    scenarios: [
      'Boiler breakdown in winter',
      'Blocked drains causing backup',
      'Broken window or door locks',
      'Significant leak discovered',
      'Power issues in part of home',
    ],
    benefits: [
      'Priority scheduling',
      'Guaranteed same-day arrival',
      'Fully equipped service vehicles',
      'Immediate assessment and quote',
      'Fast-track repair options',
    ],
  },
  {
    slug: 'weekend',
    name: 'Weekend Emergency Service',
    shortName: 'Weekend',
    description: 'Full emergency coverage on Saturdays and Sundays when other contractors are unavailable.',
    availability: 'Saturday & Sunday, 7am - 10pm',
    responseTime: 'Within 2-4 hours',
    calloutFee: 'From £65 (waived if work proceeds)',
    scenarios: [
      'Weekend property emergencies',
      'Issues discovered during home time',
      'Preparation for Monday work',
      'Holiday let turnaround issues',
      'Selling completion emergencies',
    ],
    benefits: [
      'No waiting until Monday',
      'Same expert technicians',
      'Competitive weekend rates',
      'Parts and materials in stock',
      'Follow-up scheduling available',
    ],
  },
  {
    slug: 'bank-holiday',
    name: 'Bank Holiday Emergency Service',
    shortName: 'Bank Holiday',
    description: 'Emergency coverage on public holidays when most services are closed.',
    availability: 'All UK Bank Holidays, 8am - 8pm',
    responseTime: 'Within 2-4 hours',
    calloutFee: 'From £85 (waived if work proceeds)',
    scenarios: [
      'Christmas Day heating failure',
      'Easter weekend emergencies',
      'New Year property issues',
      'Summer bank holiday problems',
      'Guest accommodation emergencies',
    ],
    benefits: [
      'Available when others aren\'t',
      'Experienced holiday response team',
      'Essential parts carried',
      'Temporary solutions available',
      'Priority Monday follow-up',
    ],
  },
  {
    slug: 'evening',
    name: 'Evening Emergency Service',
    shortName: 'Evening',
    description: 'After-hours emergency service for issues that can\'t wait until morning.',
    availability: '6pm - 11pm, 7 days a week',
    responseTime: 'Within 1-3 hours',
    calloutFee: 'From £55 (waived if work proceeds)',
    scenarios: [
      'After-work emergency discovery',
      'Evening leak or flood',
      'Loss of heating or hot water',
      'Electrical safety concerns',
      'Security compromises',
    ],
    benefits: [
      'Don\'t sleep with problems',
      'Evening-shift specialists',
      'Safe isolation services',
      'Overnight protection',
      'Morning follow-up arranged',
    ],
  },
  {
    slug: 'out-of-hours',
    name: 'Out of Hours Emergency Service',
    shortName: 'Out of Hours',
    description: 'Extended emergency coverage outside standard 9-5 business hours.',
    availability: 'Before 9am and after 5pm daily',
    responseTime: 'Within 2-4 hours',
    calloutFee: 'From £60 (waived if work proceeds)',
    scenarios: [
      'Early morning emergencies',
      'Late afternoon discoveries',
      'Before-work urgent calls',
      'After-school issues found',
      'Shift worker schedules',
    ],
    benefits: [
      'Flexible for your schedule',
      'Early and late availability',
      'Same quality service',
      'No premium for timing',
      'Regular hours follow-up',
    ],
  },
];

export const emergencyServices: EmergencyService[] = [
  {
    slug: 'plumbing',
    name: 'Emergency Plumbing',
    emergencyDescription: 'Urgent plumbing repairs including burst pipes, severe leaks, blocked drains, and water damage prevention.',
    urgentSigns: [
      'Water gushing from pipes',
      'Sewage backup into property',
      'No water supply to property',
      'Ceiling bulging with water',
      'Flooding from any source',
    ],
    immediateActions: [
      'Turn off water at stopcock',
      'Turn off water heater',
      'Open taps to drain system',
      'Collect water in containers',
      'Move valuables from wet areas',
    ],
    typicalEmergencyCost: '£150 - £500',
  },
  {
    slug: 'electrical',
    name: 'Emergency Electrical',
    emergencyDescription: 'Urgent electrical repairs for power failures, dangerous faults, and safety hazards.',
    urgentSigns: [
      'Complete power loss',
      'Burning smell from outlets',
      'Sparking or smoking',
      'Tripping circuit breakers repeatedly',
      'Electric shock received',
    ],
    immediateActions: [
      'Turn off main consumer unit',
      'Unplug all appliances',
      'Do not touch anything wet',
      'Evacuate if burning smell',
      'Call emergency services if fire',
    ],
    typicalEmergencyCost: '£200 - £600',
  },
  {
    slug: 'heating',
    name: 'Emergency Heating',
    emergencyDescription: 'Urgent boiler and heating repairs for breakdowns, gas issues, and loss of hot water.',
    urgentSigns: [
      'No heating in cold weather',
      'Boiler making banging noises',
      'Gas smell near boiler',
      'Carbon monoxide alarm activated',
      'Complete loss of hot water',
    ],
    immediateActions: [
      'Turn off boiler if gas smell',
      'Open windows for ventilation',
      'Call gas emergency if smell',
      'Do not use gas appliances',
      'Evacuate if CO alarm sounds',
    ],
    typicalEmergencyCost: '£200 - £800',
  },
  {
    slug: 'roofing',
    name: 'Emergency Roofing',
    emergencyDescription: 'Urgent roof repairs for storm damage, major leaks, and structural concerns.',
    urgentSigns: [
      'Missing tiles after storm',
      'Water pouring through ceiling',
      'Visible daylight through roof',
      'Sagging roof structure',
      'Chimney damage or instability',
    ],
    immediateActions: [
      'Place buckets under leaks',
      'Move items from affected areas',
      'Do not go on damaged roof',
      'Take photos for insurance',
      'Cover furniture with plastic',
    ],
    typicalEmergencyCost: '£300 - £1,500',
  },
  {
    slug: 'glazing',
    name: 'Emergency Glazing',
    emergencyDescription: 'Urgent window and door glass repairs for break-ins, accidents, and storm damage.',
    urgentSigns: [
      'Broken window from break-in',
      'Storm-damaged glass',
      'Cracked safety glass',
      'Door glass smashed',
      'Security compromised',
    ],
    immediateActions: [
      'Clear area of glass shards',
      'Board up if possible',
      'Take photos for insurance',
      'Report break-in to police',
      'Secure valuables if exposed',
    ],
    typicalEmergencyCost: '£150 - £600',
  },
  {
    slug: 'drainage',
    name: 'Emergency Drainage',
    emergencyDescription: 'Urgent drain unblocking and repairs for severe blockages and sewage emergencies.',
    urgentSigns: [
      'Sewage backing up into property',
      'Multiple drains blocked',
      'Foul smell throughout home',
      'Toilet completely blocked',
      'Outside drains overflowing',
    ],
    immediateActions: [
      'Stop using water in property',
      'Do not flush toilets',
      'Open windows for ventilation',
      'Keep children and pets away',
      'Avoid the affected area',
    ],
    typicalEmergencyCost: '£150 - £500',
  },
  {
    slug: 'structural',
    name: 'Emergency Structural',
    emergencyDescription: 'Urgent structural assessments and emergency repairs for property safety concerns.',
    urgentSigns: [
      'Sudden cracks appearing',
      'Walls bulging or leaning',
      'Floor subsidence noticed',
      'Impact damage to structure',
      'Building movement felt',
    ],
    immediateActions: [
      'Evacuate affected areas',
      'Do not use upper floors',
      'Turn off utilities if safe',
      'Take photos of damage',
      'Contact insurance immediately',
    ],
    typicalEmergencyCost: '£500 - £5,000+',
  },
  {
    slug: 'security',
    name: 'Emergency Security',
    emergencyDescription: 'Urgent property security including lock changes, boarding up, and security repairs.',
    urgentSigns: [
      'Lock broken or jammed',
      'Door kicked in',
      'Window security compromised',
      'Keys lost or stolen',
      'After break-in securing',
    ],
    immediateActions: [
      'Report to police if break-in',
      'Do not touch anything for evidence',
      'Stay somewhere safe',
      'Document all damage',
      'Contact insurance',
    ],
    typicalEmergencyCost: '£100 - £400',
  },
];

// Helper functions
export function getEmergencyTimeSlot(slug: string): EmergencyTimeSlot | undefined {
  return emergencyTimeSlots.find(t => t.slug === slug);
}

export function getEmergencyService(slug: string): EmergencyService | undefined {
  return emergencyServices.find(s => s.slug === slug);
}

export function generateEmergencyParams(): { time: string; service: string; area: string }[] {
  // Import locations here to avoid circular dependency issues
  const params: { time: string; service: string; area: string }[] = [];
  
  // We'll generate a subset for the most important combinations to keep page count manageable
  const priorityAreas = ['hampstead', 'highgate', 'primrose-hill', 'belsize-park', 'st-johns-wood', 
                         'crouch-end', 'muswell-hill', 'kentish-town', 'swiss-cottage', 'camden', 'islington'];
  
  for (const time of emergencyTimeSlots) {
    for (const service of emergencyServices) {
      for (const area of priorityAreas) {
        params.push({
          time: time.slug,
          service: service.slug,
          area: area,
        });
      }
    }
  }
  
  return params;
}

export function countEmergencyPages(): number {
  const priorityAreas = 11; // Number of priority areas
  return emergencyTimeSlots.length * emergencyServices.length * priorityAreas;
}
