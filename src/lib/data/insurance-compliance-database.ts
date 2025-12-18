// ============================================================================
// INSURANCE & COMPLIANCE DATABASE
// Insurance claim assistance and regulatory compliance pages
// ============================================================================

export interface InsuranceService {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  whenNeeded: string[];
  ourProcess: string[];
  documentsProvided: string[];
  timeframe: string;
  typicalCost: string;
  insurerAccepted: boolean;
  faqs: { question: string; answer: string }[];
}

export interface ComplianceRequirement {
  slug: string;
  name: string;
  legalRequirement: boolean;
  frequency: string;
  penalty: string;
  whoNeeds: string[];
  whatItCovers: string[];
  validityPeriod: string;
  cost: string;
  description: string;
}

export const insuranceServices: InsuranceService[] = [
  {
    slug: 'water-damage-insurance-claim',
    name: 'Water Damage Insurance Claim Support',
    shortName: 'Water Damage Claims',
    description: 'Expert assistance with water damage insurance claims including leak detection, repair quotes, and documentation for insurers.',
    whenNeeded: [
      'Burst pipes causing water damage',
      'Leaking boiler or cylinder',
      'Roof leak affecting ceilings',
      'Overflowing bath or toilet',
      'Washing machine or dishwasher leaks',
      'Hidden slow leaks discovered',
    ],
    ourProcess: [
      'Emergency response to stop ongoing damage',
      'Full assessment and photo documentation',
      'Written report for insurance claim',
      'Detailed repair quotation',
      'Liaison with loss adjusters',
      'Complete repair and restoration',
      'Final sign-off documentation',
    ],
    documentsProvided: [
      'Incident report with cause analysis',
      'Photo and video evidence',
      'Detailed repair quotation',
      'Work completion certificate',
      'Warranty documentation',
    ],
    timeframe: 'Emergency response within 2 hours, full documentation within 48 hours',
    typicalCost: '£150-500 for assessment and documentation',
    insurerAccepted: true,
    faqs: [
      {
        question: 'Will you deal directly with my insurer?',
        answer: 'Yes, we regularly work with all major insurers and can communicate directly with them and their loss adjusters.',
      },
      {
        question: 'Do I need to pay upfront?',
        answer: 'For emergency work, yes. For larger repairs, we can often invoice the insurer directly once the claim is approved.',
      },
      {
        question: 'What if the insurer disputes the cause?',
        answer: 'Our detailed reports include expert cause analysis. We can provide additional technical evidence if needed.',
      },
    ],
  },
  {
    slug: 'boiler-breakdown-insurance-claim',
    name: 'Boiler Breakdown Insurance Claim Support',
    shortName: 'Boiler Breakdown Claims',
    description: 'Support for boiler breakdown insurance claims with diagnostic reports and repair documentation.',
    whenNeeded: [
      'Boiler completely failed',
      'Repeated breakdowns',
      'Carbon monoxide concerns',
      'Boiler condemned as unsafe',
      'Major component failure',
    ],
    ourProcess: [
      'Diagnostic inspection',
      'Safety assessment',
      'Detailed fault report',
      'Repair or replacement quotation',
      'Insurance documentation',
      'Approved repair work',
      'Commissioning and certification',
    ],
    documentsProvided: [
      'Fault diagnosis report',
      'Gas Safe inspection record',
      'Repair/replacement quotation',
      'Benchmark commissioning checklist',
      'New warranty documentation',
    ],
    timeframe: 'Diagnosis within 24 hours, full documentation within 3 days',
    typicalCost: '£80-150 diagnostic fee (often waived with repair)',
    insurerAccepted: true,
    faqs: [
      {
        question: 'My boiler insurance wants their own engineer first - can you still help?',
        answer: 'Yes - after their assessment, you can choose any Gas Safe engineer for repairs. We can provide competitive quotes.',
      },
      {
        question: 'Will a new boiler be covered?',
        answer: 'Most home emergency policies cover repair only. Home insurance may cover replacement if failure caused damage.',
      },
    ],
  },
  {
    slug: 'fire-damage-restoration',
    name: 'Fire Damage Restoration & Insurance Claims',
    shortName: 'Fire Damage Claims',
    description: 'Complete fire damage assessment, restoration planning, and insurance claim support for electrical fires and related damage.',
    whenNeeded: [
      'Electrical fire damage',
      'Kitchen fire restoration',
      'Smoke damage throughout property',
      'Fire brigade attendance',
      'Minor fire with significant damage',
    ],
    ourProcess: [
      'Initial safety assessment',
      'Scope of damage survey',
      'Specialist cleaning assessment',
      'Electrical safety inspection',
      'Full restoration quotation',
      'Insurance documentation',
      'Phased restoration work',
      'Final inspection and sign-off',
    ],
    documentsProvided: [
      'Fire damage assessment report',
      'Electrical installation condition report',
      'Detailed restoration quotation',
      'Progress photography',
      'Completion certificate',
    ],
    timeframe: 'Assessment within 24 hours, restoration timeline varies by scope',
    typicalCost: 'Assessment £200-400, restoration varies',
    insurerAccepted: true,
    faqs: [
      {
        question: 'Do you handle the full restoration?',
        answer: 'Yes, we coordinate all trades including specialist cleaning, electrical rewiring, plastering, and decoration.',
      },
      {
        question: 'How long does fire restoration take?',
        answer: 'Minor kitchen fires: 2-4 weeks. Significant damage: 2-6 months depending on scope.',
      },
    ],
  },
  {
    slug: 'subsidence-investigation',
    name: 'Subsidence Investigation Support',
    shortName: 'Subsidence Claims',
    description: 'Investigation and documentation support for subsidence-related insurance claims.',
    whenNeeded: [
      'Cracking in walls',
      'Doors and windows sticking',
      'Sloping floors',
      'Gaps appearing in structure',
      'Suspected tree root damage',
    ],
    ourProcess: [
      'Initial crack survey',
      'Level survey of floors',
      'Drainage CCTV inspection',
      'Coordination with structural engineer',
      'Insurance documentation',
      'Remedial work quotation',
    ],
    documentsProvided: [
      'Crack monitoring report',
      'Drainage survey report',
      'Photo documentation',
      'Remedial work specification',
    ],
    timeframe: 'Initial survey within 1 week, full report 2-4 weeks',
    typicalCost: '£300-800 for initial investigation',
    insurerAccepted: true,
    faqs: [
      {
        question: 'Do you work with structural engineers?',
        answer: 'Yes, we coordinate with specialist structural engineers when required and can recommend trusted professionals.',
      },
    ],
  },
  {
    slug: 'storm-damage-repairs',
    name: 'Storm Damage Repairs & Insurance Claims',
    shortName: 'Storm Damage Claims',
    description: 'Emergency storm damage repairs and comprehensive insurance claim documentation.',
    whenNeeded: [
      'Roof damage from high winds',
      'Fallen debris damage',
      'Flooding from storms',
      'Fence and boundary damage',
      'Window and door damage',
    ],
    ourProcess: [
      'Emergency weather-proofing',
      'Full damage assessment',
      'Photo and video documentation',
      'Detailed repair quotation',
      'Insurance submission support',
      'Permanent repairs',
    ],
    documentsProvided: [
      'Storm damage report',
      'Weather evidence (Met Office data)',
      'Repair quotation',
      'Emergency works invoice',
      'Completion photographs',
    ],
    timeframe: 'Emergency response same day, full assessment within 48 hours',
    typicalCost: 'Emergency boarding: £150-400, full repairs vary',
    insurerAccepted: true,
    faqs: [
      {
        question: 'Will my claim be accepted?',
        answer: 'We provide weather data evidence to support "Act of God" claims. Most legitimate storm damage is covered.',
      },
    ],
  },
];

export const complianceRequirements: ComplianceRequirement[] = [
  {
    slug: 'gas-safety-certificate',
    name: 'Gas Safety Certificate (CP12)',
    legalRequirement: true,
    frequency: 'Annual',
    penalty: 'Up to £6,000 fine and/or 6 months imprisonment',
    whoNeeds: [
      'Landlords with gas appliances',
      'HMO owners',
      'Holiday let owners',
      'Care home operators',
    ],
    whatItCovers: [
      'All gas appliances',
      'Flues and ventilation',
      'Gas pipework',
      'Safety devices',
    ],
    validityPeriod: '12 months',
    cost: '£65-120 for standard property',
    description: 'Legal requirement for all landlords. Must be completed by a Gas Safe registered engineer.',
  },
  {
    slug: 'eicr-certificate',
    name: 'Electrical Installation Condition Report (EICR)',
    legalRequirement: true,
    frequency: 'Every 5 years (rental) or change of tenancy',
    penalty: 'Up to £30,000 fine',
    whoNeeds: [
      'Private landlords',
      'Letting agents',
      'HMO operators',
      'Commercial property owners',
    ],
    whatItCovers: [
      'Consumer unit (fuse board)',
      'Wiring condition',
      'Earthing and bonding',
      'All sockets and switches',
      'Fixed electrical equipment',
    ],
    validityPeriod: '5 years or as recommended',
    cost: '£150-350 depending on property size',
    description: 'Legal requirement since July 2020. All existing tenancies must have valid EICR.',
  },
  {
    slug: 'epc-certificate',
    name: 'Energy Performance Certificate (EPC)',
    legalRequirement: true,
    frequency: 'Every 10 years or when property changes',
    penalty: 'Up to £5,000 fine',
    whoNeeds: [
      'Anyone selling a property',
      'Landlords letting a property',
      'Commercial property transactions',
    ],
    whatItCovers: [
      'Insulation levels',
      'Heating efficiency',
      'Window glazing',
      'Renewable energy',
      'Lighting efficiency',
    ],
    validityPeriod: '10 years',
    cost: '£60-120',
    description: 'Required before marketing property. Minimum rating E required for rental properties.',
  },
  {
    slug: 'legionella-risk-assessment',
    name: 'Legionella Risk Assessment',
    legalRequirement: true,
    frequency: 'Every 2 years recommended',
    penalty: 'Unlimited fine and potential imprisonment',
    whoNeeds: [
      'All landlords',
      'Employers',
      'Commercial property managers',
      'Care facilities',
    ],
    whatItCovers: [
      'Water system review',
      'Temperature checks',
      'Dead leg identification',
      'Tank condition',
      'Showerhead assessment',
    ],
    validityPeriod: '2 years recommended',
    cost: '£50-150',
    description: 'Legal duty under Health & Safety at Work Act. All landlords must assess legionella risks.',
  },
  {
    slug: 'smoke-co-alarms',
    name: 'Smoke & CO Alarm Compliance',
    legalRequirement: true,
    frequency: 'Check at start of each tenancy',
    penalty: 'Up to £5,000 fine',
    whoNeeds: [
      'All landlords',
      'HMO operators',
      'Holiday let owners',
    ],
    whatItCovers: [
      'Smoke alarm on each floor',
      'CO alarm in rooms with combustion appliance',
      'Alarm functionality testing',
    ],
    validityPeriod: 'Ongoing (test at each tenancy)',
    cost: '£30-100 for installation/testing',
    description: 'Mandatory since 2015. CO alarms required from October 2022.',
  },
  {
    slug: 'fire-risk-assessment',
    name: 'Fire Risk Assessment',
    legalRequirement: true,
    frequency: 'Regular review (at least annual for HMOs)',
    penalty: 'Unlimited fine and/or imprisonment',
    whoNeeds: [
      'HMO landlords',
      'Commercial property owners',
      'Shared house owners',
      'Building managers',
    ],
    whatItCovers: [
      'Escape routes',
      'Fire detection systems',
      'Fire fighting equipment',
      'Emergency lighting',
      'Compartmentation',
    ],
    validityPeriod: 'Review annually or when changes occur',
    cost: '£150-500 depending on property',
    description: 'Required under Regulatory Reform (Fire Safety) Order 2005 for all non-domestic premises.',
  },
  {
    slug: 'pat-testing',
    name: 'Portable Appliance Testing (PAT)',
    legalRequirement: false,
    frequency: 'Annual recommended for rental properties',
    penalty: 'Negligence liability if accident occurs',
    whoNeeds: [
      'Landlords providing appliances',
      'HMO operators',
      'Furnished rentals',
      'Commercial properties',
    ],
    whatItCovers: [
      'All portable electrical appliances',
      'Kettle, toaster, etc.',
      'Washing machine connections',
      'Landlord-provided items',
    ],
    validityPeriod: '1 year recommended',
    cost: '£1-3 per appliance',
    description: 'Not legally required but strongly recommended. Demonstrates due diligence.',
  },
  {
    slug: 'asbestos-survey',
    name: 'Asbestos Management Survey',
    legalRequirement: true,
    frequency: 'Once, then manage',
    penalty: 'Unlimited fine and/or imprisonment',
    whoNeeds: [
      'Commercial property owners',
      'Landlords of pre-2000 buildings',
      'Before renovation work',
      'HMO operators',
    ],
    whatItCovers: [
      'Identification of ACMs',
      'Condition assessment',
      'Risk rating',
      'Management recommendations',
    ],
    validityPeriod: 'Ongoing management required',
    cost: '£300-1,000 depending on property',
    description: 'Required for non-domestic properties and before work on pre-2000 buildings.',
  },
];

// Areas for compliance pages
export const complianceAreas = [
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

// Helper functions
export function getInsuranceService(slug: string): InsuranceService | undefined {
  return insuranceServices.find(s => s.slug === slug);
}

export function getComplianceRequirement(slug: string): ComplianceRequirement | undefined {
  return complianceRequirements.find(c => c.slug === slug);
}

export function getLegalRequirements(): ComplianceRequirement[] {
  return complianceRequirements.filter(c => c.legalRequirement);
}

export function generateInsuranceParams(): { service: string; area: string }[] {
  const params: { service: string; area: string }[] = [];
  
  for (const service of insuranceServices) {
    for (const area of complianceAreas) {
      params.push({
        service: service.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function generateComplianceParams(): { requirement: string; area: string }[] {
  const params: { requirement: string; area: string }[] = [];
  
  for (const req of complianceRequirements) {
    for (const area of complianceAreas) {
      params.push({
        requirement: req.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function countInsurancePages(): number {
  return insuranceServices.length + generateInsuranceParams().length;
}

export function countCompliancePages(): number {
  return complianceRequirements.length + generateComplianceParams().length;
}
