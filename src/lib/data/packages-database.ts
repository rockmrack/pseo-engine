// ============================================================================
// MAINTENANCE PACKAGES DATABASE
// Monthly/Annual service plans and maintenance packages
// ============================================================================

export interface MaintenancePackage {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tier: 'basic' | 'standard' | 'premium';
  monthlyPrice: number;
  annualPrice: number;
  annualSaving: number;
  coverage: string[];
  notCovered: string[];
  responseTime: string;
  calloutFee: string;
  labourIncluded: boolean;
  partsIncluded: string;
  idealFor: string[];
  faqs: { question: string; answer: string }[];
}

export interface PackageCategory {
  slug: string;
  name: string;
  description: string;
  packages: string[];
}

export const maintenancePackages: MaintenancePackage[] = [
  // Boiler Cover Packages
  {
    slug: 'boiler-cover-basic',
    name: 'Boiler Cover Basic',
    tagline: 'Essential boiler protection',
    description: 'Our entry-level boiler cover provides peace of mind with annual servicing and breakdown cover for your boiler.',
    tier: 'basic',
    monthlyPrice: 12.99,
    annualPrice: 129,
    annualSaving: 26.88,
    coverage: [
      'Annual boiler service',
      'Boiler breakdown repairs',
      'Gas Safe engineer callouts',
      'Parts up to £250 per repair',
      'Unlimited callouts',
      '24/7 emergency helpline',
    ],
    notCovered: [
      'Radiators and pipework',
      'Hot water cylinder',
      'Central heating controls',
      'Powerflush',
      'Boilers over 10 years old',
    ],
    responseTime: 'Next working day',
    calloutFee: 'No callout fee',
    labourIncluded: true,
    partsIncluded: 'Up to £250 per repair',
    idealFor: [
      'Newer boilers under 5 years old',
      'Budget-conscious homeowners',
      'Properties with newer heating systems',
    ],
    faqs: [
      {
        question: 'Is my boiler eligible?',
        answer: 'Boilers up to 10 years old are eligible. We\'ll inspect your boiler during signup and confirm coverage.',
      },
      {
        question: 'What if parts cost more than £250?',
        answer: 'We\'ll quote for the additional cost before proceeding. You can choose to upgrade to Premium cover at any time.',
      },
    ],
  },
  {
    slug: 'boiler-cover-standard',
    name: 'Boiler Cover Standard',
    tagline: 'Comprehensive boiler & controls protection',
    description: 'Our most popular boiler cover extends protection to heating controls and provides faster response times.',
    tier: 'standard',
    monthlyPrice: 18.99,
    annualPrice: 189,
    annualSaving: 38.88,
    coverage: [
      'Everything in Basic, plus:',
      'Annual boiler service',
      'Heating controls (thermostat, timer)',
      'Motorised valves',
      'Parts up to £500 per repair',
      'Same-day response available',
      'Gas Safety Certificate included',
    ],
    notCovered: [
      'Radiators and pipework',
      'Hot water cylinder',
      'Powerflush',
      'Boilers over 15 years old',
    ],
    responseTime: 'Same day or next day',
    calloutFee: 'No callout fee',
    labourIncluded: true,
    partsIncluded: 'Up to £500 per repair',
    idealFor: [
      'Landlords needing Gas Safe certificate',
      'Homeowners wanting better coverage',
      'Boilers 5-10 years old',
    ],
    faqs: [
      {
        question: 'Does this include my annual Gas Safety certificate?',
        answer: 'Yes! The annual service qualifies as your Gas Safety check, and we provide the CP12 certificate for landlords.',
      },
    ],
  },
  {
    slug: 'boiler-cover-premium',
    name: 'Boiler Cover Premium',
    tagline: 'Complete central heating protection',
    description: 'Our top-tier cover protects your entire central heating system including radiators, pipework, and cylinder.',
    tier: 'premium',
    monthlyPrice: 29.99,
    annualPrice: 299,
    annualSaving: 59.88,
    coverage: [
      'Everything in Standard, plus:',
      'All radiators and valves',
      'Central heating pipework',
      'Hot water cylinder',
      'Expansion vessel',
      'Magnetic filter maintenance',
      'Unlimited parts coverage',
      'Priority response within 4 hours',
      'Annual system health check',
    ],
    notCovered: [
      'Underfloor heating',
      'Powerflush (available at 50% discount)',
      'New installations',
    ],
    responseTime: 'Within 4 hours (priority)',
    calloutFee: 'No callout fee',
    labourIncluded: true,
    partsIncluded: 'Unlimited',
    idealFor: [
      'Older properties with aging systems',
      'Landlords with multiple issues',
      'Anyone wanting complete peace of mind',
      'Properties with hot water cylinders',
    ],
    faqs: [
      {
        question: 'What\'s the oldest boiler you\'ll cover?',
        answer: 'Premium cover accepts boilers up to 15 years old. Older boilers may be covered after inspection.',
      },
    ],
  },

  // Home Maintenance Packages
  {
    slug: 'home-care-essentials',
    name: 'Home Care Essentials',
    tagline: 'Annual maintenance for key home systems',
    description: 'Bundle your essential home maintenance with annual servicing for heating, electrics, and plumbing checks.',
    tier: 'standard',
    monthlyPrice: 34.99,
    annualPrice: 349,
    annualSaving: 70.88,
    coverage: [
      'Annual boiler service',
      'Annual electrical safety check',
      'Annual plumbing inspection',
      'Smoke alarm testing',
      'Carbon monoxide alarm testing',
      'Emergency callout discount (50%)',
      '24/7 emergency helpline',
    ],
    notCovered: [
      'Breakdown repairs (discounted)',
      'Parts and materials',
      'Major works',
    ],
    responseTime: 'Scheduled within 5 working days',
    calloutFee: '50% discount on standard rates',
    labourIncluded: false,
    partsIncluded: 'Not included (discounted rates)',
    idealFor: [
      'Landlords managing multiple properties',
      'Homeowners wanting proactive maintenance',
      'Properties requiring regular certification',
    ],
    faqs: [
      {
        question: 'Does this include repair work?',
        answer: 'This package covers inspections and minor adjustments. Repairs are charged at 50% off our standard rates.',
      },
    ],
  },
  {
    slug: 'home-care-complete',
    name: 'Home Care Complete',
    tagline: 'Total home protection package',
    description: 'The ultimate home maintenance package covering heating, plumbing, electrical, and drainage with priority support.',
    tier: 'premium',
    monthlyPrice: 54.99,
    annualPrice: 549,
    annualSaving: 110.88,
    coverage: [
      'Everything in Essentials, plus:',
      'Boiler breakdown cover',
      'Plumbing breakdown cover',
      'Electrical breakdown cover',
      'Drain unblocking (1 per year)',
      'Tap & toilet repairs',
      'All labour included',
      'Parts up to £1,000/year',
      'Priority 4-hour response',
      'All certificates included',
    ],
    notCovered: [
      'New installations',
      'Cosmetic work',
      'External drainage beyond property',
      'Parts over £1,000/year',
    ],
    responseTime: 'Within 4 hours (priority)',
    calloutFee: 'No callout fee',
    labourIncluded: true,
    partsIncluded: 'Up to £1,000 per year',
    idealFor: [
      'Busy professionals wanting hassle-free maintenance',
      'Landlords wanting comprehensive cover',
      'Older properties needing regular attention',
    ],
    faqs: [
      {
        question: 'What certificates are included?',
        answer: 'Gas Safety Certificate (CP12), EICR, and EPC are all included at no extra cost when due.',
      },
    ],
  },

  // Landlord Packages
  {
    slug: 'landlord-essential',
    name: 'Landlord Essential',
    tagline: 'Legal compliance made easy',
    description: 'Stay compliant with automatic certificate renewals and priority scheduling around tenant availability.',
    tier: 'basic',
    monthlyPrice: 19.99,
    annualPrice: 199,
    annualSaving: 39.88,
    coverage: [
      'Annual Gas Safety Certificate',
      'EICR when due (every 5 years)',
      'EPC when due (every 10 years)',
      'Legionella Risk Assessment',
      'Automatic renewal reminders',
      'Tenant scheduling service',
      'Digital certificate storage',
    ],
    notCovered: [
      'Repairs and maintenance',
      'Emergency callouts',
      'Void property services',
    ],
    responseTime: 'Scheduled within 7 working days',
    calloutFee: 'Standard rates for additional work',
    labourIncluded: false,
    partsIncluded: 'Not included',
    idealFor: [
      'Landlords wanting compliance peace of mind',
      'Buy-to-let investors',
      'Anyone new to letting',
    ],
    faqs: [
      {
        question: 'What if my tenant won\'t allow access?',
        answer: 'We\'ll attempt contact 3 times and provide documentation of our attempts for your records.',
      },
    ],
  },
  {
    slug: 'landlord-professional',
    name: 'Landlord Professional',
    tagline: 'Complete landlord property management',
    description: 'Comprehensive property care including compliance, maintenance, and emergency cover for professional landlords.',
    tier: 'premium',
    monthlyPrice: 44.99,
    annualPrice: 449,
    annualSaving: 89.88,
    coverage: [
      'Everything in Essential, plus:',
      'Annual boiler service',
      'Boiler breakdown cover',
      'Emergency plumber callouts',
      'Minor repairs (up to £150/visit)',
      'Void property preparation',
      'Inventory service (discounted)',
      'Priority response',
      'Dedicated account manager',
    ],
    notCovered: [
      'Major renovations',
      'Structural work',
      'Cosmetic decorating',
    ],
    responseTime: 'Same day for emergencies',
    calloutFee: 'No callout fee',
    labourIncluded: true,
    partsIncluded: 'Up to £150 per visit',
    idealFor: [
      'Portfolio landlords',
      'Landlords with HMOs',
      'Property management companies',
    ],
    faqs: [
      {
        question: 'Can I add multiple properties?',
        answer: 'Yes! We offer 10% discount for 2-5 properties and 20% for 6+ properties on the same plan.',
      },
    ],
  },
];

export const packageCategories: PackageCategory[] = [
  {
    slug: 'boiler-cover',
    name: 'Boiler Cover Plans',
    description: 'Protect your boiler with annual servicing and breakdown cover',
    packages: ['boiler-cover-basic', 'boiler-cover-standard', 'boiler-cover-premium'],
  },
  {
    slug: 'home-care',
    name: 'Home Care Packages',
    description: 'Comprehensive home maintenance covering multiple systems',
    packages: ['home-care-essentials', 'home-care-complete'],
  },
  {
    slug: 'landlord',
    name: 'Landlord Packages',
    description: 'Compliance and maintenance packages for rental properties',
    packages: ['landlord-essential', 'landlord-professional'],
  },
];

// Areas for package pages
export const packageAreas = [
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
export function getMaintenancePackage(slug: string): MaintenancePackage | undefined {
  return maintenancePackages.find(p => p.slug === slug);
}

// Alias for page compatibility
export const getPackage = getMaintenancePackage;

export function getPackageCategory(slug: string): PackageCategory | undefined {
  return packageCategories.find(c => c.slug === slug);
}

export function getPackagesByTier(tier: MaintenancePackage['tier']): MaintenancePackage[] {
  return maintenancePackages.filter(p => p.tier === tier);
}

export function getPackagesByCategory(categorySlug: string): MaintenancePackage[] {
  const category = getPackageCategory(categorySlug);
  if (!category) return [];
  return category.packages
    .map(slug => getMaintenancePackage(slug))
    .filter((p): p is MaintenancePackage => p !== undefined);
}

export function generatePackageParams(): { package: string; area: string }[] {
  const params: { package: string; area: string }[] = [];
  
  for (const pkg of maintenancePackages) {
    for (const area of packageAreas) {
      params.push({
        package: pkg.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function countPackagePages(): number {
  return generatePackageParams().length;
}
