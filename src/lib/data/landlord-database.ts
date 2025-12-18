// ============================================================================
// LANDLORD & COMPLIANCE DATABASE
// Pages for landlords, property managers, and compliance certificates
// ============================================================================

export interface ComplianceService {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  legalRequirement: string;
  whoNeeds: string[];
  frequency: string;
  validity: string;
  penalty: string;
  process: string[];
  whatWeCheck: string[];
  price: {
    from: number;
    to: number;
    unit: string;
  };
  turnaround: string;
  certificationBody: string;
  faqs: { question: string; answer: string }[];
}

export interface LandlordService {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  includedServices: string[];
  price: {
    from: number;
    to: number;
    unit: string;
  };
}

export const complianceServices: ComplianceService[] = [
  {
    slug: 'gas-safety-certificate',
    name: 'Gas Safety Certificate (CP12)',
    shortName: 'Gas Safety',
    description: 'A Gas Safety Certificate (also known as a CP12) is a legal document confirming all gas appliances, fittings, and flues in a rental property have been checked by a Gas Safe registered engineer and are safe to use.',
    legalRequirement: 'The Gas Safety (Installation and Use) Regulations 1998 require landlords to have all gas appliances, fittings, and flues checked annually by a Gas Safe registered engineer. A copy must be provided to tenants within 28 days of the check.',
    whoNeeds: [
      'All private landlords',
      'Letting agents managing properties',
      'Housing associations',
      'Landlords with HMOs (Houses in Multiple Occupation)',
      'Anyone renting out a property with gas appliances',
    ],
    frequency: 'Annually (every 12 months)',
    validity: '12 months from date of inspection',
    penalty: 'Up to £6,000 fine per breach, potential imprisonment for serious breaches, and invalidated insurance',
    process: [
      'We arrange a convenient appointment',
      'Our Gas Safe engineer inspects all gas appliances',
      'We check all gas pipework for leaks',
      'Flues and ventilation are inspected',
      'Emergency controls are tested',
      'Certificate issued immediately if passed',
    ],
    whatWeCheck: [
      'Boilers - operation, flue, and controls',
      'Gas hobs and cookers',
      'Gas fires (if applicable)',
      'Gas pipework for leaks',
      'Flue terminals and ventilation',
      'Emergency shut-off valves',
    ],
    price: { from: 65, to: 95, unit: 'fixed' },
    turnaround: 'Same day certificate if passed',
    certificationBody: 'Gas Safe Register',
    faqs: [
      {
        question: 'What happens if an appliance fails?',
        answer: 'If an appliance is found to be unsafe, we\'ll make it safe immediately (usually by capping off). We\'ll provide a quote for repairs. The certificate cannot be issued until all appliances pass.',
      },
      {
        question: 'Can I use my existing service as the safety check?',
        answer: 'A boiler service and gas safety check are different. However, we can combine both for a reduced rate. The safety check covers all gas appliances, not just the boiler.',
      },
      {
        question: 'How long does the inspection take?',
        answer: 'A typical inspection takes 30-60 minutes depending on the number of gas appliances. Properties with multiple appliances take longer.',
      },
    ],
  },
  {
    slug: 'eicr-certificate',
    name: 'Electrical Installation Condition Report (EICR)',
    shortName: 'EICR',
    description: 'An EICR is a formal inspection of the electrical installation in a property, checking for damage, deterioration, defects, and non-compliance with current regulations. It identifies any dangerous conditions requiring immediate action.',
    legalRequirement: 'Since April 2021, all private landlords in England must have an EICR for their property before new tenancies begin, and provide a copy to tenants. Existing tenancies must have had one by April 2021.',
    whoNeeds: [
      'All private landlords in England',
      'HMO landlords (more frequent requirements)',
      'Commercial property landlords',
      'Housing associations',
      'Anyone selling a property (recommended)',
    ],
    frequency: 'Every 5 years for rental properties (3 years for HMOs)',
    validity: '5 years (or as specified in the report)',
    penalty: 'Up to £30,000 fine for non-compliance, plus potential prosecution',
    process: [
      'We schedule a convenient inspection time',
      'A qualified electrician inspects the installation',
      'All circuits are tested at the consumer unit',
      'Random sample of accessories are tested',
      'RCD operation is tested',
      'Full report provided with coding for any issues',
    ],
    whatWeCheck: [
      'Consumer unit condition and labelling',
      'Earthing and bonding adequacy',
      'Condition of all wiring',
      'Socket and switch condition',
      'RCD operation',
      'Circuit overloading',
      'Damage and deterioration',
    ],
    price: { from: 150, to: 300, unit: 'fixed' },
    turnaround: 'Report within 5 working days',
    certificationBody: 'NICEIC / NAPIT / ELECSA',
    faqs: [
      {
        question: 'What do the codes mean?',
        answer: 'C1: Danger present - immediate action required. C2: Potentially dangerous - urgent remedial action. C3: Improvement recommended. Fi: Further investigation required. Only C1 and C2 require mandatory action.',
      },
      {
        question: 'What if issues are found?',
        answer: 'We\'ll explain all findings and provide a quote for remedial work. You have 28 days to complete any required work. We can often fix issues on the same day for simple problems.',
      },
      {
        question: 'How disruptive is the inspection?',
        answer: 'The inspection takes 2-4 hours depending on property size. Power may be briefly interrupted during testing. We recommend removing trip hazards and ensuring access to all rooms.',
      },
    ],
  },
  {
    slug: 'epc-certificate',
    name: 'Energy Performance Certificate (EPC)',
    shortName: 'EPC',
    description: 'An EPC rates a property\'s energy efficiency from A (most efficient) to G (least efficient). It includes recommendations for improving efficiency and estimated costs and savings.',
    legalRequirement: 'Required when selling, renting, or building a property. Rental properties must achieve minimum EPC rating of E (with some exemptions). Rating of C required for new tenancies from 2025.',
    whoNeeds: [
      'Anyone selling a property',
      'All landlords renting properties',
      'Anyone building a new property',
      'Commercial property owners letting or selling',
    ],
    frequency: 'Valid for 10 years',
    validity: '10 years from date of assessment',
    penalty: 'Up to £5,000 fine for non-compliant rental properties, can\'t legally let without valid EPC',
    process: [
      'We book a convenient assessment time',
      'Assessor visits and surveys the property',
      'Construction, insulation, heating, and glazing assessed',
      'Data entered into approved software',
      'Certificate generated and registered',
      'Copy provided with improvement recommendations',
    ],
    whatWeCheck: [
      'Construction materials and age',
      'Wall and loft insulation',
      'Double/triple glazing',
      'Heating system type and age',
      'Hot water system',
      'Lighting types',
      'Renewable energy systems',
    ],
    price: { from: 65, to: 120, unit: 'fixed' },
    turnaround: 'Same day or next day',
    certificationBody: 'Accredited Energy Assessor',
    faqs: [
      {
        question: 'What if my property is rated F or G?',
        answer: 'You cannot legally let a property rated F or G unless you have a valid exemption. We can advise on cost-effective improvements to reach E or better.',
      },
      {
        question: 'How can I improve my rating?',
        answer: 'Common improvements include: loft insulation, cavity wall insulation, efficient boiler, LED lighting, and smart controls. The EPC report includes specific recommendations with estimated costs and savings.',
      },
      {
        question: 'Is my existing EPC still valid?',
        answer: 'EPCs are valid for 10 years. However, if you\'ve made energy improvements, getting a new assessment will show your improved rating.',
      },
    ],
  },
  {
    slug: 'legionella-risk-assessment',
    name: 'Legionella Risk Assessment',
    shortName: 'Legionella',
    description: 'A Legionella Risk Assessment identifies potential risks of Legionella bacteria in a property\'s water systems and recommends control measures to ensure tenant safety.',
    legalRequirement: 'The Health & Safety at Work Act requires landlords to assess and control the risk of Legionella bacteria in their rental properties. There\'s no certificate requirement, but documentation is essential.',
    whoNeeds: [
      'All landlords with rental properties',
      'HMO landlords (mandatory for licence)',
      'Commercial property managers',
      'Care home operators',
    ],
    frequency: 'Every 2 years or when water system changes',
    validity: '2 years (recommended)',
    penalty: 'No specific fine, but failure to assess is breach of health & safety law with potentially unlimited penalties',
    process: [
      'We review your water system setup',
      'Identify potential risk areas',
      'Check water temperatures',
      'Assess unused outlets and dead legs',
      'Provide written risk assessment',
      'Recommend control measures',
    ],
    whatWeCheck: [
      'Hot water storage temperature',
      'Cold water tank condition',
      'Dead legs and unused outlets',
      'Shower heads and hoses',
      'Water system layout',
      'Temperature monitoring points',
    ],
    price: { from: 45, to: 85, unit: 'fixed' },
    turnaround: 'Same day assessment',
    certificationBody: 'Legionella Control Association members',
    faqs: [
      {
        question: 'Is this really necessary for residential properties?',
        answer: 'Yes, it\'s a legal requirement for all rented properties. Risk is generally low in residential settings, but assessment ensures any risks are identified and controlled.',
      },
      {
        question: 'What are the main risks in homes?',
        answer: 'Main risks are: water stored at wrong temperature, unused outlets where water stagnates, and dirty shower heads. Most risks are easily controlled with simple measures.',
      },
      {
        question: 'Can tenants do the ongoing controls?',
        answer: 'Yes, we provide simple instructions for tenants such as running unused taps weekly and regularly cleaning shower heads. The landlord remains responsible for initial assessment.',
      },
    ],
  },
];

export const landlordServices: LandlordService[] = [
  {
    slug: 'landlord-safety-pack',
    name: 'Landlord Safety Pack',
    description: 'Complete compliance package with all legally required certificates for rental properties in one convenient package at a reduced rate.',
    benefits: [
      'One appointment for multiple checks',
      'Discounted package rate',
      'Single point of contact',
      'Reminder service for renewals',
      'All certificates in one place',
    ],
    includedServices: [
      'Gas Safety Certificate (CP12)',
      'EICR (Electrical Installation Condition Report)',
      'EPC (Energy Performance Certificate)',
      'Legionella Risk Assessment',
    ],
    price: { from: 299, to: 399, unit: 'package' },
  },
  {
    slug: 'void-property-service',
    name: 'Void Property Service',
    description: 'Comprehensive service for turning around vacant rental properties, including all safety checks, repairs, and cleaning ready for new tenants.',
    benefits: [
      'Fast turnaround to minimise void periods',
      'All compliance certificates updated',
      'Minor repairs included',
      'Professional clean option',
      'Full inventory available',
    ],
    includedServices: [
      'All safety certificates',
      'Minor plumbing repairs',
      'Minor electrical repairs',
      'Touch-up decorating',
      'Deep clean (optional extra)',
    ],
    price: { from: 450, to: 800, unit: 'fixed' },
  },
  {
    slug: 'hmo-compliance-service',
    name: 'HMO Compliance Service',
    description: 'Specialist compliance service for Houses in Multiple Occupation, meeting enhanced fire safety, electrical, and management requirements.',
    benefits: [
      'Meets all HMO licence requirements',
      'Fire safety assessment included',
      'Emergency lighting checks',
      'Fire door inspections',
      'Management regulation advice',
    ],
    includedServices: [
      'Gas Safety Certificate',
      'Full EICR',
      'Fire Risk Assessment',
      'Emergency lighting test',
      'Fire alarm test certificate',
      'Legionella Risk Assessment',
    ],
    price: { from: 549, to: 799, unit: 'package' },
  },
];

// Area data for compliance pages
export const landlordComplianceAreas = [
  { slug: 'hampstead', name: 'Hampstead' },
  { slug: 'belsize-park', name: 'Belsize Park' },
  { slug: 'highgate', name: 'Highgate' },
  { slug: 'crouch-end', name: 'Crouch End' },
  { slug: 'muswell-hill', name: 'Muswell Hill' },
  { slug: 'kentish-town', name: 'Kentish Town' },
  { slug: 'camden', name: 'Camden' },
  { slug: 'islington', name: 'Islington' },
  { slug: 'finsbury-park', name: 'Finsbury Park' },
  { slug: 'archway', name: 'Archway' },
];

// Helper functions
export function getComplianceService(slug: string): ComplianceService | undefined {
  return complianceServices.find(s => s.slug === slug);
}

export function getLandlordService(slug: string): LandlordService | undefined {
  return landlordServices.find(s => s.slug === slug);
}

// Alias for page compatibility
export const getLandlordServiceBySlug = getLandlordService;

export function generateLandlordComplianceParams(): { service: string; area: string }[] {
  const params: { service: string; area: string }[] = [];
  
  for (const service of complianceServices) {
    for (const area of landlordComplianceAreas) {
      params.push({
        service: service.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function generateLandlordParams(): { service: string }[] {
  return landlordServices.map(s => ({ service: s.slug }));
}

export function countLandlordPages(): number {
  return generateLandlordComplianceParams().length + landlordServices.length;
}
