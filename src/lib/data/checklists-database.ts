// ============================================================================
// CHECKLISTS DATABASE
// Step-by-step checklists for home maintenance and renovation preparation
// ============================================================================

export interface Checklist {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  estimatedTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  whenToUse: string;
  introduction: string;
  sections: ChecklistSection[];
  tips: string[];
  warnings: string[];
  relatedServices: string[];
  relatedChecklists: string[];
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  task: string;
  description: string;
  important?: boolean;
  proTip?: string;
}

export const checklists: Checklist[] = [
  {
    slug: 'winter-boiler-prep',
    title: 'Winter Boiler Preparation Checklist',
    description: 'Essential steps to prepare your boiler and heating system for winter',
    category: 'heating',
    icon: 'flame',
    estimatedTime: '1-2 hours',
    difficulty: 'easy',
    whenToUse: 'Complete this checklist in September or October, before the cold weather arrives.',
    introduction: 'Don\'t wait until the first cold snap to discover your heating system isn\'t working properly. This comprehensive checklist will help you prepare your boiler and central heating system for winter, potentially saving you from emergency callouts and ensuring your home stays warm all season.',
    sections: [
      {
        title: 'Boiler Checks',
        items: [
          { task: 'Check boiler pressure', description: 'Pressure should be between 1 and 1.5 bar when cold. Top up via the filling loop if below 1 bar.', important: true, proTip: 'Mark the ideal pressure level on your gauge for quick reference.' },
          { task: 'Test the boiler fires up', description: 'Turn on your heating and hot water to ensure the boiler ignites properly without error codes.', important: true },
          { task: 'Listen for unusual sounds', description: 'Kettling (rumbling), banging, or gurgling can indicate problems that need professional attention.' },
          { task: 'Check the flue terminal', description: 'Ensure the external flue is clear of debris, bird nests, or obstructions.' },
          { task: 'Review last service date', description: 'Book a service if it\'s been more than 12 months. Annual servicing maintains warranty and efficiency.', important: true },
        ],
      },
      {
        title: 'Radiator Checks',
        items: [
          { task: 'Bleed all radiators', description: 'Start downstairs and work up. You\'ll need a radiator key and a cloth to catch drips.', proTip: 'If you need to bleed radiators frequently, you may have a system leak or expansion vessel issue.' },
          { task: 'Check for cold spots', description: 'Run heating for 30 minutes then check each radiator. Cold spots indicate trapped air or sludge.' },
          { task: 'Test thermostatic valves', description: 'Turn TRVs to maximum and check they\'re controlling heat. Replace any that are stuck.' },
          { task: 'Check for leaks', description: 'Inspect all radiator valves and connections for signs of moisture or corrosion.' },
          { task: 'Consider a system flush', description: 'If multiple radiators have cold spots, a powerflush can restore efficiency.', important: true },
        ],
      },
      {
        title: 'Controls & Thermostat',
        items: [
          { task: 'Test the thermostat', description: 'Turn up the temperature and ensure heating responds. Replace batteries in wireless stats.' },
          { task: 'Program heating schedule', description: 'Set timers for when you actually need heat - typically 30 mins before waking and coming home.' },
          { task: 'Check frost protection', description: 'Ensure your frost stat is set to 5°C to protect pipes when you\'re away.' },
          { task: 'Consider a smart thermostat', description: 'Upgrades like Nest or Hive can reduce bills by 10-15% through intelligent control.' },
        ],
      },
      {
        title: 'Safety Checks',
        items: [
          { task: 'Test carbon monoxide alarm', description: 'Press test button and replace batteries. CO alarms should be replaced every 5-7 years.', important: true },
          { task: 'Check smoke alarms', description: 'Test all smoke alarms and replace batteries. Ensure one on each floor.' },
          { task: 'Clear area around boiler', description: 'Remove any items stored near the boiler that could be fire hazards.' },
          { task: 'Know how to turn off gas', description: 'Locate your gas meter and emergency control valve. Teach household members.' },
        ],
      },
    ],
    tips: [
      'Book boiler services early - engineers get very busy once cold weather hits',
      'Keep your Gas Safe certificate accessible for insurance and rental purposes',
      'Consider a boiler cover plan for peace of mind during winter',
      'A magnetic filter on your system reduces sludge build-up and extends boiler life',
    ],
    warnings: [
      'Never attempt to repair a gas boiler yourself - always use a Gas Safe registered engineer',
      'If you smell gas, turn off supply at the meter, open windows, and call the gas emergency line',
      'Black marks around a boiler or yellow/orange flames can indicate dangerous CO issues',
    ],
    relatedServices: ['boiler-service', 'boiler-repair', 'powerflush', 'radiator-repair'],
    relatedChecklists: ['emergency-heating-failure', 'moving-house-plumbing'],
  },
  {
    slug: 'moving-house-plumbing',
    title: 'Moving House Plumbing Checklist',
    description: 'Essential plumbing checks and tasks when moving into a new home',
    category: 'plumbing',
    icon: 'home',
    estimatedTime: '2-3 hours',
    difficulty: 'easy',
    whenToUse: 'Complete this checklist during the first week in your new home.',
    introduction: 'Moving into a new home is exciting, but taking time to understand and check your plumbing system can prevent nasty surprises. This checklist covers everything from locating stopcocks to checking for hidden leaks.',
    sections: [
      {
        title: 'Essential Locations',
        items: [
          { task: 'Find the internal stopcock', description: 'Usually under the kitchen sink. Test it turns - they can seize up if not used.', important: true, proTip: 'Turn it a quarter-turn each year to keep it working freely.' },
          { task: 'Locate the external stopcock', description: 'Usually in the pavement outside. You may need a stopcock key to operate it.' },
          { task: 'Find the gas meter and valve', description: 'Know where to turn off gas in an emergency.', important: true },
          { task: 'Locate water meter', description: 'Often near the external stopcock. Note the reading for billing purposes.' },
          { task: 'Find the boiler and controls', description: 'Get familiar with your heating system and locate the user manual.' },
        ],
      },
      {
        title: 'Water System Checks',
        items: [
          { task: 'Test water pressure', description: 'Run multiple taps simultaneously. Poor pressure may need investigation.' },
          { task: 'Check for leaks', description: 'Look under all sinks, around toilets, and in airing cupboards for signs of moisture.' },
          { task: 'Inspect visible pipes', description: 'Look for corrosion, green staining on copper, or signs of previous repairs.' },
          { task: 'Run all taps', description: 'Check hot and cold water works at every outlet. Note any discoloration.' },
          { task: 'Flush all toilets', description: 'Check they fill and flush properly without running constantly.' },
        ],
      },
      {
        title: 'Heating System',
        items: [
          { task: 'Check boiler service date', description: 'Ask for service records. Book a service if no recent record exists.', important: true },
          { task: 'Test heating', description: 'Run the central heating and check all radiators get warm.' },
          { task: 'Bleed radiators', description: 'Release any air trapped in the system.' },
          { task: 'Check boiler pressure', description: 'Should be between 1-1.5 bar when cold.' },
          { task: 'Test hot water', description: 'Check how long it takes to get hot water at all outlets.' },
        ],
      },
      {
        title: 'Drains & Waste',
        items: [
          { task: 'Test all drains', description: 'Fill sinks and baths then release - water should drain quickly without gurgling.' },
          { task: 'Check external drains', description: 'Lift inspection chamber covers and check for blockages or root ingress.' },
          { task: 'Run washing machine/dishwasher', description: 'Ensure waste pipes drain properly without leaks.' },
          { task: 'Check for smells', description: 'Bad odours from drains can indicate blockages or dry traps.' },
        ],
      },
    ],
    tips: [
      'Request all service records and manuals from the previous owner',
      'Consider a full plumbing inspection for older properties',
      'Label stopcocks and valves for easy identification in emergencies',
      'Take meter readings and photos on moving day for accurate billing',
    ],
    warnings: [
      'Old lead pipes should be replaced - common in pre-1970 properties',
      'If the stopcock won\'t turn, don\'t force it - call a plumber',
      'Blue or green staining indicates copper corrosion that may need attention',
    ],
    relatedServices: ['plumbing-inspection', 'stopcock-replacement', 'powerflush', 'drain-survey'],
    relatedChecklists: ['winter-boiler-prep', 'bathroom-renovation-prep'],
  },
  {
    slug: 'bathroom-renovation-prep',
    title: 'Bathroom Renovation Preparation Checklist',
    description: 'Everything you need to prepare before your bathroom renovation begins',
    category: 'building',
    icon: 'bath',
    estimatedTime: '1-2 weeks before work starts',
    difficulty: 'medium',
    whenToUse: 'Start this checklist 2 weeks before your bathroom renovation is scheduled to begin.',
    introduction: 'A well-prepared bathroom renovation runs smoother and finishes faster. This checklist will help you make all the necessary decisions and preparations before your contractor arrives, minimising delays and ensuring you get the bathroom you want.',
    sections: [
      {
        title: 'Design Decisions',
        items: [
          { task: 'Finalise layout', description: 'Confirm positions of all fixtures with your contractor. Changes mid-project are costly.', important: true },
          { task: 'Choose all fixtures', description: 'Bath/shower, toilet, basin, taps - all should be selected and ordered in advance.', proTip: 'Order 4 weeks early for non-stock items.' },
          { task: 'Select all tiles', description: 'Wall and floor tiles plus trim pieces. Order 10% extra for cuts and future repairs.', important: true },
          { task: 'Choose paint colours', description: 'If walls are being painted, select moisture-resistant bathroom paint.' },
          { task: 'Pick accessories', description: 'Towel rails, mirror, toilet roll holder, shower screen - all need specifying.' },
          { task: 'Confirm lighting', description: 'Position and style of all lights. Must be bathroom-rated IP zones.' },
        ],
      },
      {
        title: 'Practical Preparations',
        items: [
          { task: 'Arrange alternative facilities', description: 'You won\'t have access to this bathroom during work. Plan alternatives.', important: true },
          { task: 'Clear the bathroom', description: 'Remove all toiletries, towels, medicines, and personal items.' },
          { task: 'Protect nearby areas', description: 'Dust will spread - consider moving items from adjacent rooms.' },
          { task: 'Check access', description: 'Ensure tradespeople can easily access for deliveries and waste removal.' },
          { task: 'Arrange parking permits', description: 'If needed for contractor vehicles or skip lorries.' },
        ],
      },
      {
        title: 'Before Work Starts',
        items: [
          { task: 'Confirm start date and schedule', description: 'Get a written timeline with key milestones.' },
          { task: 'Take photos', description: 'Document the existing bathroom for records and any insurance purposes.' },
          { task: 'Confirm quotes and payments', description: 'Agree payment schedule. Never pay everything upfront.', important: true },
          { task: 'Discuss daily routine', description: 'Start times, tea/coffee, toilet access, working hours.' },
          { task: 'Exchange contact details', description: 'Mobile numbers for easy communication during the project.' },
        ],
      },
      {
        title: 'Materials Checklist',
        items: [
          { task: 'Bathroom suite delivered', description: 'Bath/shower tray, toilet, basin - check for damage immediately.' },
          { task: 'Tiles and adhesive', description: 'All tiles, grout, adhesive, and trims delivered and checked.' },
          { task: 'Taps and fittings', description: 'All taps, wastes, and fittings present and correct.' },
          { task: 'Shower valve and head', description: 'If having a shower, ensure all parts are ready.' },
          { task: 'Extras and accessories', description: 'Towel rails, mirror, hooks, cabinets all ready.' },
        ],
      },
    ],
    tips: [
      'Visit showrooms to see fixtures in person - online images can be misleading',
      'Consider future needs - grab rails and level access are easier to add during renovation',
      'Underfloor heating is much cheaper to install during renovation than after',
      'Get samples of tiles and test them in your bathroom lighting before ordering',
    ],
    warnings: [
      'Never pay the full amount upfront - stage payments are industry standard',
      'Check all deliveries immediately and report damage within 24 hours',
      'Ensure your contractor has public liability insurance',
    ],
    relatedServices: ['bathroom-installation', 'plumbing', 'tiling', 'electrical'],
    relatedChecklists: ['kitchen-renovation-prep', 'moving-house-plumbing'],
  },
  {
    slug: 'electrical-safety-check',
    title: 'Home Electrical Safety Checklist',
    description: 'Regular checks to keep your home\'s electrical system safe',
    category: 'electrical',
    icon: 'zap',
    estimatedTime: '30 minutes',
    difficulty: 'easy',
    whenToUse: 'Perform these checks monthly, and after any electrical work or changes.',
    introduction: 'Electrical faults cause thousands of house fires every year. Regular safety checks can identify problems before they become dangerous. This simple checklist takes just 30 minutes but could prevent a disaster.',
    sections: [
      {
        title: 'Consumer Unit (Fuse Box)',
        items: [
          { task: 'Test RCD button', description: 'Press the test button - it should trip. Reset by pushing the switch back up.', important: true, proTip: 'Test RCDs quarterly at minimum.' },
          { task: 'Check for burning smells', description: 'Any smell of burning or heat near the consumer unit needs immediate professional attention.', important: true },
          { task: 'Look for scorch marks', description: 'Black marks on the unit or surrounding wall indicate overheating.' },
          { task: 'Ensure clear access', description: 'The consumer unit should be easily accessible, not blocked by furniture.' },
        ],
      },
      {
        title: 'Sockets & Switches',
        items: [
          { task: 'Check for damage', description: 'Cracked faceplates, loose sockets, or scorch marks need replacing.' },
          { task: 'Test socket function', description: 'Use a socket tester or plug in a lamp to check each socket works.' },
          { task: 'Check for warmth', description: 'Sockets or plugs that feel warm when in use indicate a problem.' },
          { task: 'Inspect switch operation', description: 'All light switches should operate smoothly without buzzing or flickering.' },
        ],
      },
      {
        title: 'Cables & Wiring',
        items: [
          { task: 'Check visible wiring', description: 'Look for frayed, damaged, or perished cable insulation.' },
          { task: 'Review extension lead use', description: 'Extension leads shouldn\'t be permanent solutions or daisy-chained.', important: true },
          { task: 'Check cables aren\'t trapped', description: 'Ensure cables run freely and aren\'t trapped under furniture or doors.' },
          { task: 'Inspect outdoor connections', description: 'External sockets and garden lighting must be weatherproof.' },
        ],
      },
      {
        title: 'Appliances',
        items: [
          { task: 'Check plugs for damage', description: 'Ensure plugs aren\'t cracked and cables are firmly attached.' },
          { task: 'Verify correct fuses', description: 'Check appliances have the correct rated fuse (usually 3A or 13A).' },
          { task: 'Don\'t overload sockets', description: 'Maximum 13A per socket - be especially careful with adapters.' },
          { task: 'PAT test if renting', description: 'Landlords must ensure portable appliances are safe.' },
        ],
      },
    ],
    tips: [
      'Keep a torch near the consumer unit for when circuits trip',
      'Label all circuits in the consumer unit for easy identification',
      'Consider EICR testing every 10 years (or 5 years for rental properties)',
      'Replace old round-pin sockets - they indicate outdated, potentially dangerous wiring',
    ],
    warnings: [
      'Never ignore frequently tripping circuits - this is a safety feature warning you of a problem',
      'If you experience electric shocks from appliances or switches, stop using and call an electrician immediately',
      'Burning smells or warm sockets are emergencies - turn off at the consumer unit and call a professional',
    ],
    relatedServices: ['eicr-testing', 'consumer-unit-upgrade', 'electrical-rewiring', 'socket-installation'],
    relatedChecklists: ['winter-boiler-prep', 'moving-house-plumbing'],
  },
  {
    slug: 'loft-conversion-planning',
    title: 'Loft Conversion Planning Checklist',
    description: 'Everything to consider when planning a loft conversion',
    category: 'building',
    icon: 'home',
    estimatedTime: '2-4 weeks of planning',
    difficulty: 'hard',
    whenToUse: 'Use this checklist during the early planning stages of your loft conversion project.',
    introduction: 'A loft conversion is one of the most cost-effective ways to add space to your home. However, proper planning is essential for success. This comprehensive checklist covers everything from initial feasibility to final preparation.',
    sections: [
      {
        title: 'Feasibility Assessment',
        items: [
          { task: 'Measure head height', description: 'You need minimum 2.2m at the highest point for a usable conversion.', important: true },
          { task: 'Check roof structure', description: 'Traditional rafters are easier to convert than modern trusses.' },
          { task: 'Assess space available', description: 'Consider floor area at usable head height, not just total area.' },
          { task: 'Check chimney breast', description: 'Active chimneys affect layout options; dormant ones can be removed.' },
          { task: 'Review access options', description: 'Where can stairs go without losing too much space below?' },
        ],
      },
      {
        title: 'Planning & Permissions',
        items: [
          { task: 'Check permitted development rights', description: 'Most rear dormers don\'t need planning permission, but verify first.', important: true },
          { task: 'Review conservation area restrictions', description: 'Conservation areas have stricter rules about external changes.' },
          { task: 'Consider party wall agreements', description: 'Required if work affects shared walls with neighbours.', important: true },
          { task: 'Apply for building regulations', description: 'All loft conversions require building regulations approval.' },
          { task: 'Check lease (if leasehold)', description: 'Leasehold properties may require freeholder consent.' },
        ],
      },
      {
        title: 'Design Decisions',
        items: [
          { task: 'Choose conversion type', description: 'Velux, rear dormer, L-shaped, hip-to-gable, or mansard.' },
          { task: 'Plan room layout', description: 'Bedroom, en-suite, storage areas - work with head height constraints.' },
          { task: 'Design staircase', description: 'Location, style, and building regulations compliance.' },
          { task: 'Specify windows', description: 'Size, type, and positions for light and ventilation requirements.' },
          { task: 'Plan storage', description: 'Eaves areas make excellent built-in storage.' },
        ],
      },
      {
        title: 'Contractor Selection',
        items: [
          { task: 'Get 3+ detailed quotes', description: 'Compare like-for-like specifications, not just prices.' },
          { task: 'Check references', description: 'Visit completed projects and speak to previous clients.', important: true },
          { task: 'Verify insurance', description: 'Public liability and employer\'s liability are essential.' },
          { task: 'Review contract terms', description: 'Payment schedule, timelines, and what\'s included.' },
          { task: 'Check warranty/guarantee', description: 'What protection do you have after completion?' },
        ],
      },
    ],
    tips: [
      'Loft conversions typically add 20% to property value - often more than they cost',
      'Dormers to the rear are usually permitted development; front dormers usually need planning',
      'Consider future-proofing with extra electrical points and data cabling',
      'Building in summer means less weather delays and faster completion',
    ],
    warnings: [
      'Never start work before building regulations approval - you can be required to undo it',
      'Party wall agreements must be in place before starting work on shared walls',
      'Be wary of very low quotes - loft conversions have significant fixed costs',
    ],
    relatedServices: ['loft-conversion', 'dormer-construction', 'bathroom-installation', 'electrical-rewiring'],
    relatedChecklists: ['bathroom-renovation-prep', 'electrical-safety-check'],
  },
];

// Checklist categories for navigation
export const checklistCategories = [
  { slug: 'preparation', name: 'Preparation Checklists', description: 'Get ready for your renovation project', icon: '📋' },
  { slug: 'safety', name: 'Safety Checklists', description: 'Safety inspection and compliance checklists', icon: '🛡️' },
  { slug: 'maintenance', name: 'Maintenance Checklists', description: 'Regular home maintenance checklists', icon: '🔧' },
  { slug: 'planning', name: 'Planning Checklists', description: 'Project planning and hiring checklists', icon: '📝' },
];

// Alias for page compatibility
export const maintenanceChecklists = checklists;

// Helper functions
export function getChecklist(slug: string): Checklist | undefined {
  return checklists.find(c => c.slug === slug);
}

export function getChecklistsByCategory(category: string): Checklist[] {
  return checklists.filter(c => c.category === category);
}

export function getRelatedChecklists(slug: string): Checklist[] {
  const current = getChecklist(slug);
  if (!current) return [];
  
  return current.relatedChecklists
    .map(s => getChecklist(s))
    .filter((c): c is Checklist => c !== undefined);
}

export function generateChecklistParams(): { topic: string }[] {
  return checklists.map(c => ({ topic: c.slug }));
}

export function countChecklistPages(): number {
  return checklists.length;
}
