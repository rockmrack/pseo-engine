// ============================================================================
// COST GUIDE DATABASE
// Detailed pricing guides for services by area - "How much does X cost in Y"
// ============================================================================

export interface CostGuide {
  slug: string;
  name: string;
  category: string;
  description: string;
  factors: CostFactor[];
  priceBreakdown: PriceBreakdown[];
  areaMultipliers: AreaMultiplier[];
  includedInPrice: string[];
  notIncludedInPrice: string[];
  savingTips: string[];
  faqs: { question: string; answer: string }[];
}

export interface CostFactor {
  factor: string;
  impact: 'low' | 'medium' | 'high';
  description: string;
}

export interface PriceBreakdown {
  item: string;
  lowEnd: number;
  midRange: number;
  highEnd: number;
  unit: string;
  notes?: string;
}

export interface AreaMultiplier {
  areaSlug: string;
  areaName: string;
  multiplier: number;
  notes: string;
}

export const costGuides: CostGuide[] = [
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    category: 'building',
    description: 'Complete bathroom renovation costs including removal, new suite, tiling, plumbing, and finishing',
    factors: [
      { factor: 'Bathroom size', impact: 'high', description: 'Larger bathrooms require more materials and labour' },
      { factor: 'Suite quality', impact: 'high', description: 'Budget vs mid-range vs luxury fixtures' },
      { factor: 'Structural changes', impact: 'high', description: 'Moving plumbing or walls significantly increases cost' },
      { factor: 'Tiling extent', impact: 'medium', description: 'Full-height tiling costs more than partial' },
      { factor: 'Underfloor heating', impact: 'medium', description: 'Adds £1,500-3,000 depending on system' },
      { factor: 'Property age', impact: 'medium', description: 'Older properties may need additional work' },
    ],
    priceBreakdown: [
      { item: 'Removal & disposal', lowEnd: 400, midRange: 600, highEnd: 1000, unit: 'fixed' },
      { item: 'Plumbing', lowEnd: 1200, midRange: 2000, highEnd: 3500, unit: 'fixed' },
      { item: 'Electrical', lowEnd: 300, midRange: 600, highEnd: 1200, unit: 'fixed' },
      { item: 'Bathroom suite', lowEnd: 800, midRange: 2500, highEnd: 8000, unit: 'fixed', notes: 'WC, basin, bath/shower' },
      { item: 'Tiling (walls)', lowEnd: 40, midRange: 65, highEnd: 120, unit: 'per sqm', notes: 'Including materials' },
      { item: 'Tiling (floor)', lowEnd: 45, midRange: 70, highEnd: 130, unit: 'per sqm' },
      { item: 'Plastering', lowEnd: 300, midRange: 500, highEnd: 800, unit: 'fixed' },
      { item: 'Decorating', lowEnd: 200, midRange: 400, highEnd: 700, unit: 'fixed' },
      { item: 'Accessories & finishing', lowEnd: 200, midRange: 500, highEnd: 1500, unit: 'fixed' },
    ],
    areaMultipliers: [
      { areaSlug: 'hampstead', areaName: 'Hampstead', multiplier: 1.25, notes: 'Premium area with high labour costs' },
      { areaSlug: 'belsize-park', areaName: 'Belsize Park', multiplier: 1.20, notes: 'Affluent area with higher expectations' },
      { areaSlug: 'highgate', areaName: 'Highgate', multiplier: 1.20, notes: 'Premium location' },
      { areaSlug: 'primrose-hill', areaName: 'Primrose Hill', multiplier: 1.25, notes: 'Very high-end area' },
      { areaSlug: 'crouch-end', areaName: 'Crouch End', multiplier: 1.10, notes: 'Desirable North London location' },
      { areaSlug: 'muswell-hill', areaName: 'Muswell Hill', multiplier: 1.10, notes: 'Affluent residential area' },
      { areaSlug: 'kentish-town', areaName: 'Kentish Town', multiplier: 1.05, notes: 'Central North London' },
      { areaSlug: 'tufnell-park', areaName: 'Tufnell Park', multiplier: 1.05, notes: 'Popular residential area' },
      { areaSlug: 'finsbury-park', areaName: 'Finsbury Park', multiplier: 1.00, notes: 'Standard London rates' },
      { areaSlug: 'archway', areaName: 'Archway', multiplier: 1.00, notes: 'Standard London rates' },
    ],
    includedInPrice: [
      'Project management',
      'All materials as specified',
      'Labour and installation',
      'Waste removal and disposal',
      'Final clean',
      'Building control notification (if required)',
    ],
    notIncludedInPrice: [
      'Moving or rerouting soil stacks',
      'Structural alterations',
      'New window installation',
      'Underfloor heating (optional extra)',
      'Bespoke joinery',
      'High-end designer fixtures',
    ],
    savingTips: [
      'Keep plumbing in existing locations to avoid costly pipe rerouting',
      'Choose mid-range tiles with timeless designs over trendy expensive options',
      'Consider a shower enclosure instead of a wet room if budget is tight',
      'Buy your own bathroom suite if you find a good deal - we\'re happy to install',
      'Bundle bathroom with other work for better overall rates',
    ],
    faqs: [
      {
        question: 'How long does a bathroom renovation take?',
        answer: 'A typical bathroom renovation takes 2-4 weeks depending on complexity. Simple refits may be completed in 1-2 weeks, while full renovations with structural changes can take 4-6 weeks.',
      },
      {
        question: 'Do I need planning permission for a bathroom renovation?',
        answer: 'Generally no planning permission is needed for bathroom renovations unless you\'re in a listed building or making external changes. Building regulations may apply for electrical work.',
      },
      {
        question: 'Can I use my bathroom during renovation?',
        answer: 'Usually no. We recommend arranging alternative facilities during the renovation period. We can often leave the toilet functional until the last possible moment.',
      },
    ],
  },
  {
    slug: 'kitchen-fitting',
    name: 'Kitchen Fitting',
    category: 'building',
    description: 'Complete kitchen installation costs including units, worktops, appliances, plumbing, and electrical',
    factors: [
      { factor: 'Kitchen size', impact: 'high', description: 'Number of units and worktop run' },
      { factor: 'Unit quality', impact: 'high', description: 'Flat-pack vs rigid vs bespoke' },
      { factor: 'Worktop material', impact: 'high', description: 'Laminate vs solid wood vs quartz vs granite' },
      { factor: 'Appliance level', impact: 'high', description: 'Basic vs mid-range vs premium brands' },
      { factor: 'Structural changes', impact: 'high', description: 'Removing walls, new openings' },
      { factor: 'Electrical upgrades', impact: 'medium', description: 'Additional circuits, consumer unit upgrade' },
    ],
    priceBreakdown: [
      { item: 'Kitchen units (supply)', lowEnd: 3000, midRange: 8000, highEnd: 25000, unit: 'fixed', notes: 'Average size kitchen' },
      { item: 'Worktops', lowEnd: 500, midRange: 2500, highEnd: 8000, unit: 'fixed', notes: 'Laminate to granite/quartz' },
      { item: 'Installation labour', lowEnd: 1500, midRange: 3000, highEnd: 6000, unit: 'fixed' },
      { item: 'Plumbing', lowEnd: 400, midRange: 800, highEnd: 1500, unit: 'fixed' },
      { item: 'Electrical', lowEnd: 500, midRange: 1200, highEnd: 2500, unit: 'fixed' },
      { item: 'Tiling (splashback)', lowEnd: 300, midRange: 600, highEnd: 1500, unit: 'fixed' },
      { item: 'Flooring', lowEnd: 400, midRange: 1000, highEnd: 2500, unit: 'fixed' },
      { item: 'Decorating', lowEnd: 300, midRange: 600, highEnd: 1200, unit: 'fixed' },
      { item: 'Appliances', lowEnd: 1500, midRange: 4000, highEnd: 15000, unit: 'fixed' },
    ],
    areaMultipliers: [
      { areaSlug: 'hampstead', areaName: 'Hampstead', multiplier: 1.25, notes: 'Premium area' },
      { areaSlug: 'belsize-park', areaName: 'Belsize Park', multiplier: 1.20, notes: 'Affluent area' },
      { areaSlug: 'highgate', areaName: 'Highgate', multiplier: 1.20, notes: 'Premium location' },
      { areaSlug: 'primrose-hill', areaName: 'Primrose Hill', multiplier: 1.25, notes: 'Very high-end' },
      { areaSlug: 'crouch-end', areaName: 'Crouch End', multiplier: 1.10, notes: 'Desirable location' },
      { areaSlug: 'muswell-hill', areaName: 'Muswell Hill', multiplier: 1.10, notes: 'Affluent area' },
      { areaSlug: 'kentish-town', areaName: 'Kentish Town', multiplier: 1.05, notes: 'Central North London' },
      { areaSlug: 'tufnell-park', areaName: 'Tufnell Park', multiplier: 1.05, notes: 'Popular area' },
      { areaSlug: 'finsbury-park', areaName: 'Finsbury Park', multiplier: 1.00, notes: 'Standard rates' },
      { areaSlug: 'archway', areaName: 'Archway', multiplier: 1.00, notes: 'Standard rates' },
    ],
    includedInPrice: [
      'Design consultation',
      'Supply and installation of units',
      'Worktop templating and fitting',
      'Basic plumbing connections',
      'Electrical connections for appliances',
      'Waste removal',
    ],
    notIncludedInPrice: [
      'Appliances (unless specified)',
      'Structural alterations',
      'Full rewiring',
      'Boiler relocation',
      'External drainage work',
      'Building control fees',
    ],
    savingTips: [
      'Consider rigid flatpack kitchens from quality suppliers - much cheaper than bespoke',
      'Laminate worktops have improved dramatically - consider before spending on stone',
      'Keep sink and appliances in existing positions to minimise plumbing costs',
      'Shop sales for appliances - Boxing Day and bank holidays offer best deals',
      'Standard sizes are cheaper than made-to-measure fillers and panels',
    ],
    faqs: [
      {
        question: 'How long does a kitchen installation take?',
        answer: 'A straightforward kitchen replacement typically takes 1-2 weeks. Full renovations with new plumbing, electrical, and flooring take 3-4 weeks. Extensions with kitchens take 8-12 weeks.',
      },
      {
        question: 'Should I buy my own kitchen or get you to supply?',
        answer: 'Both options work well. If you supply, ensure units are rigid (not flatpack) for best results. We can recommend suppliers and check your order before delivery.',
      },
      {
        question: 'Can you fit any kitchen brand?',
        answer: 'Yes, we install kitchens from all suppliers including IKEA, Howdens, Wickes, Wren, and bespoke manufacturers. We charge the same rate regardless of supplier.',
      },
    ],
  },
  {
    slug: 'boiler-installation',
    name: 'Boiler Installation',
    category: 'plumbing',
    description: 'New boiler installation costs including removal of old boiler, installation, and system flush',
    factors: [
      { factor: 'Boiler type', impact: 'high', description: 'Combi, system, or regular boiler' },
      { factor: 'Brand/model', impact: 'high', description: 'Budget brands vs premium manufacturers' },
      { factor: 'Location change', impact: 'high', description: 'Moving boiler location adds significant cost' },
      { factor: 'Flue type', impact: 'medium', description: 'Vertical, horizontal, or extended flue' },
      { factor: 'System upgrades', impact: 'medium', description: 'New radiators, smart controls, etc.' },
      { factor: 'Property size', impact: 'medium', description: 'Larger homes need bigger boilers' },
    ],
    priceBreakdown: [
      { item: 'Boiler (supply)', lowEnd: 800, midRange: 1500, highEnd: 3000, unit: 'fixed', notes: 'Combi boiler' },
      { item: 'Installation labour', lowEnd: 500, midRange: 800, highEnd: 1200, unit: 'fixed' },
      { item: 'Flue and fittings', lowEnd: 100, midRange: 200, highEnd: 400, unit: 'fixed' },
      { item: 'System flush', lowEnd: 300, midRange: 400, highEnd: 600, unit: 'fixed', notes: 'MagnaCleanse or similar' },
      { item: 'Magnetic filter', lowEnd: 100, midRange: 150, highEnd: 250, unit: 'fixed' },
      { item: 'Smart thermostat', lowEnd: 150, midRange: 250, highEnd: 400, unit: 'fixed', notes: 'Optional upgrade' },
      { item: 'Gas certificate', lowEnd: 0, midRange: 0, highEnd: 0, unit: 'fixed', notes: 'Included' },
    ],
    areaMultipliers: [
      { areaSlug: 'hampstead', areaName: 'Hampstead', multiplier: 1.15, notes: 'Premium area' },
      { areaSlug: 'belsize-park', areaName: 'Belsize Park', multiplier: 1.15, notes: 'Affluent area' },
      { areaSlug: 'highgate', areaName: 'Highgate', multiplier: 1.15, notes: 'Premium location' },
      { areaSlug: 'primrose-hill', areaName: 'Primrose Hill', multiplier: 1.15, notes: 'High-end area' },
      { areaSlug: 'crouch-end', areaName: 'Crouch End', multiplier: 1.05, notes: 'Desirable location' },
      { areaSlug: 'muswell-hill', areaName: 'Muswell Hill', multiplier: 1.05, notes: 'Affluent area' },
      { areaSlug: 'kentish-town', areaName: 'Kentish Town', multiplier: 1.00, notes: 'Standard rates' },
      { areaSlug: 'tufnell-park', areaName: 'Tufnell Park', multiplier: 1.00, notes: 'Standard rates' },
      { areaSlug: 'finsbury-park', areaName: 'Finsbury Park', multiplier: 1.00, notes: 'Standard rates' },
      { areaSlug: 'archway', areaName: 'Archway', multiplier: 1.00, notes: 'Standard rates' },
    ],
    includedInPrice: [
      'Removal and disposal of old boiler',
      'Supply and installation of new boiler',
      'System flush and clean',
      'Magnetic filter installation',
      'Gas Safe certificate',
      'Manufacturer registration',
      '2-hour emergency response warranty',
    ],
    notIncludedInPrice: [
      'Relocating boiler to new position',
      'New radiators',
      'Underfloor heating',
      'Hot water cylinder (if changing system type)',
      'Asbestos removal (if present)',
      'Building work for flue routing',
    ],
    savingTips: [
      'Keep boiler in same location to avoid additional pipework costs',
      'Worcester Bosch and Vaillant offer best value for reliability',
      'Get installation done in summer when engineers are less busy',
      'Consider a 10-year warranty boiler - saves on future callouts',
      'A system flush during installation prevents future problems',
    ],
    faqs: [
      {
        question: 'How long does a boiler installation take?',
        answer: 'A straightforward boiler swap typically takes one day. If relocating the boiler or making system changes, allow 2-3 days.',
      },
      {
        question: 'What warranty do you offer?',
        answer: 'We offer 12 months workmanship warranty on top of the manufacturer warranty (typically 5-10 years for quality brands). We\'re also accredited installers for extended warranties.',
      },
      {
        question: 'Do you install all boiler brands?',
        answer: 'Yes, but we recommend Worcester Bosch, Vaillant, or Viessmann for reliability. We\'re accredited installers for all three, offering extended warranties.',
      },
    ],
  },
  {
    slug: 'electrical-rewiring',
    name: 'Electrical Rewiring',
    category: 'electrical',
    description: 'Full house rewiring costs including new consumer unit, circuits, and certification',
    factors: [
      { factor: 'Property size', impact: 'high', description: 'Number of rooms and circuits' },
      { factor: 'Access difficulty', impact: 'high', description: 'Solid floors, lath & plaster add cost' },
      { factor: 'Number of circuits', impact: 'medium', description: 'Modern homes need more circuits' },
      { factor: 'Socket/light count', impact: 'medium', description: 'More points means more work' },
      { factor: 'Finish level', impact: 'medium', description: 'Metal vs plastic plates, smart switches' },
      { factor: 'Making good', impact: 'medium', description: 'Who does the plastering/decorating' },
    ],
    priceBreakdown: [
      { item: 'Consumer unit', lowEnd: 350, midRange: 500, highEnd: 800, unit: 'fixed', notes: 'Including RCBOs' },
      { item: 'Rewiring per room', lowEnd: 300, midRange: 450, highEnd: 650, unit: 'per room' },
      { item: 'Kitchen circuit', lowEnd: 400, midRange: 600, highEnd: 900, unit: 'fixed' },
      { item: 'Bathroom circuit', lowEnd: 250, midRange: 400, highEnd: 600, unit: 'fixed' },
      { item: 'Smoke/CO alarms', lowEnd: 200, midRange: 350, highEnd: 500, unit: 'fixed', notes: 'Interlinked system' },
      { item: 'Testing & certification', lowEnd: 200, midRange: 300, highEnd: 400, unit: 'fixed' },
      { item: 'Making good (basic)', lowEnd: 400, midRange: 800, highEnd: 1500, unit: 'fixed' },
    ],
    areaMultipliers: [
      { areaSlug: 'hampstead', areaName: 'Hampstead', multiplier: 1.20, notes: 'Older properties, higher standards' },
      { areaSlug: 'belsize-park', areaName: 'Belsize Park', multiplier: 1.15, notes: 'Period properties' },
      { areaSlug: 'highgate', areaName: 'Highgate', multiplier: 1.15, notes: 'Premium area' },
      { areaSlug: 'primrose-hill', areaName: 'Primrose Hill', multiplier: 1.20, notes: 'High-end properties' },
      { areaSlug: 'crouch-end', areaName: 'Crouch End', multiplier: 1.10, notes: 'Victorian properties' },
      { areaSlug: 'muswell-hill', areaName: 'Muswell Hill', multiplier: 1.10, notes: 'Edwardian homes' },
      { areaSlug: 'kentish-town', areaName: 'Kentish Town', multiplier: 1.05, notes: 'Period properties' },
      { areaSlug: 'tufnell-park', areaName: 'Tufnell Park', multiplier: 1.05, notes: 'Victorian terraces' },
      { areaSlug: 'finsbury-park', areaName: 'Finsbury Park', multiplier: 1.00, notes: 'Standard rates' },
      { areaSlug: 'archway', areaName: 'Archway', multiplier: 1.00, notes: 'Standard rates' },
    ],
    includedInPrice: [
      'Complete circuit design',
      'All cables, sockets, switches',
      'New consumer unit with RCBOs',
      'Smoke and CO alarm system',
      'Full testing and certification',
      'NICEIC registration',
      'Building control notification',
    ],
    notIncludedInPrice: [
      'Full replastering (we do basic making good)',
      'Decorating',
      'Floor lifting/replacement',
      'Smart home systems',
      'Specialist lighting design',
      'External work',
    ],
    savingTips: [
      'Time rewiring with other works like a kitchen or bathroom refit',
      'Consider partial rewire if only some circuits need replacement',
      'We can leave walls ready for your decorator to reduce our costs',
      'Standard white plastic plates are perfectly functional and much cheaper',
      'Book in autumn/winter when electricians are less busy',
    ],
    faqs: [
      {
        question: 'How long does a full rewire take?',
        answer: 'A 3-bed house typically takes 5-7 days for first fix, then 2-3 days for second fix after plastering. Total time including making good is usually 2-3 weeks.',
      },
      {
        question: 'Do we need to move out during rewiring?',
        answer: 'Not usually, but there will be some disruption. We work room by room and always leave you with power and light at the end of each day.',
      },
      {
        question: 'How do I know if I need a rewire?',
        answer: 'Signs include: old round-pin sockets, fabric-covered cables, frequent blown fuses, no RCD protection, or the wiring is over 25 years old. We offer free inspections.',
      },
    ],
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    category: 'building',
    description: 'Loft conversion costs for different types including dormer, mansard, and velux',
    factors: [
      { factor: 'Conversion type', impact: 'high', description: 'Velux, dormer, hip-to-gable, mansard' },
      { factor: 'Current roof structure', impact: 'high', description: 'Traditional rafters easier than trusses' },
      { factor: 'En-suite requirement', impact: 'medium', description: 'Adds plumbing and space needs' },
      { factor: 'Staircase location', impact: 'medium', description: 'Space for stairs affects lower floor' },
      { factor: 'Planning permission', impact: 'medium', description: 'Some types need permission' },
      { factor: 'Finish level', impact: 'medium', description: 'Basic vs high-end specifications' },
    ],
    priceBreakdown: [
      { item: 'Velux/rooflight only', lowEnd: 25000, midRange: 35000, highEnd: 45000, unit: 'fixed' },
      { item: 'Rear dormer', lowEnd: 40000, midRange: 55000, highEnd: 75000, unit: 'fixed' },
      { item: 'L-shaped dormer', lowEnd: 50000, midRange: 70000, highEnd: 95000, unit: 'fixed' },
      { item: 'Hip-to-gable + dormer', lowEnd: 55000, midRange: 75000, highEnd: 100000, unit: 'fixed' },
      { item: 'Mansard', lowEnd: 65000, midRange: 85000, highEnd: 120000, unit: 'fixed' },
      { item: 'En-suite bathroom', lowEnd: 5000, midRange: 10000, highEnd: 20000, unit: 'fixed', notes: 'Additional cost' },
    ],
    areaMultipliers: [
      { areaSlug: 'hampstead', areaName: 'Hampstead', multiplier: 1.25, notes: 'Conservation area, higher specs' },
      { areaSlug: 'belsize-park', areaName: 'Belsize Park', multiplier: 1.20, notes: 'Period properties' },
      { areaSlug: 'highgate', areaName: 'Highgate', multiplier: 1.25, notes: 'Conservation area' },
      { areaSlug: 'primrose-hill', areaName: 'Primrose Hill', multiplier: 1.25, notes: 'Premium area, strict planning' },
      { areaSlug: 'crouch-end', areaName: 'Crouch End', multiplier: 1.15, notes: 'Desirable area' },
      { areaSlug: 'muswell-hill', areaName: 'Muswell Hill', multiplier: 1.15, notes: 'Conservation areas apply' },
      { areaSlug: 'kentish-town', areaName: 'Kentish Town', multiplier: 1.10, notes: 'Some conservation areas' },
      { areaSlug: 'tufnell-park', areaName: 'Tufnell Park', multiplier: 1.10, notes: 'Standard rates' },
      { areaSlug: 'finsbury-park', areaName: 'Finsbury Park', multiplier: 1.05, notes: 'Standard rates' },
      { areaSlug: 'archway', areaName: 'Archway', multiplier: 1.05, notes: 'Standard rates' },
    ],
    includedInPrice: [
      'Structural design and calculations',
      'Building control application and fees',
      'All construction work',
      'Staircase installation',
      'Electrics and lighting',
      'Plastering and decoration',
      'Windows/rooflights',
      'Insulation to regulations',
    ],
    notIncludedInPrice: [
      'Planning permission (if required)',
      'Party wall agreements',
      'En-suite bathroom',
      'Built-in wardrobes',
      'Premium flooring',
      'External scaffolding charges',
    ],
    savingTips: [
      'A Velux conversion is cheapest if you have good head height',
      'Rear dormers often don\'t need planning permission - check first',
      'Bundle the bathroom with the conversion for efficiency savings',
      'Standard Velux windows are much cheaper than custom options',
      'Consider built-in storage under the eaves instead of expensive wardrobes',
    ],
    faqs: [
      {
        question: 'Do I need planning permission for a loft conversion?',
        answer: 'Most rear dormers fall under permitted development and don\'t need planning permission. However, you\'ll need permission if you\'re in a conservation area, extending at the front, or exceeding volume limits.',
      },
      {
        question: 'How long does a loft conversion take?',
        answer: 'A typical dormer loft conversion takes 8-12 weeks. Velux-only conversions are quicker at 4-6 weeks. Mansard conversions can take 12-16 weeks.',
      },
      {
        question: 'Can all lofts be converted?',
        answer: 'Most lofts can be converted, but you need minimum 2.2m head height at the ridge. Modern trussed roofs are more complex but still possible with steel supports.',
      },
    ],
  },
];

// Area data for cost calculations
export const costGuideAreas = [
  { slug: 'hampstead', name: 'Hampstead' },
  { slug: 'belsize-park', name: 'Belsize Park' },
  { slug: 'highgate', name: 'Highgate' },
  { slug: 'primrose-hill', name: 'Primrose Hill' },
  { slug: 'crouch-end', name: 'Crouch End' },
  { slug: 'muswell-hill', name: 'Muswell Hill' },
  { slug: 'kentish-town', name: 'Kentish Town' },
  { slug: 'tufnell-park', name: 'Tufnell Park' },
  { slug: 'swiss-cottage', name: 'Swiss Cottage' },
  { slug: 'west-hampstead', name: 'West Hampstead' },
  { slug: 'st-johns-wood', name: 'St John\'s Wood' },
  { slug: 'finsbury-park', name: 'Finsbury Park' },
  { slug: 'archway', name: 'Archway' },
  { slug: 'islington', name: 'Islington' },
  { slug: 'camden', name: 'Camden' },
];

// Helper functions
export function getCostGuide(slug: string): CostGuide | undefined {
  return costGuides.find(g => g.slug === slug);
}

export function getCostGuideArea(slug: string): { slug: string; name: string } | undefined {
  return costGuideAreas.find(a => a.slug === slug);
}

export function generateCostGuideParams(): { service: string; area: string }[] {
  const params: { service: string; area: string }[] = [];
  
  for (const guide of costGuides) {
    for (const area of costGuideAreas) {
      params.push({
        service: guide.slug,
        area: area.slug,
      });
    }
  }
  
  return params;
}

export function calculateAreaAdjustedCost(guide: CostGuide, areaSlug: string): {
  lowEnd: number;
  midRange: number;
  highEnd: number;
} {
  const multiplier = guide.areaMultipliers.find(m => m.areaSlug === areaSlug)?.multiplier || 1.0;
  
  const totals = guide.priceBreakdown.reduce(
    (acc, item) => {
      const isPerUnit = item.unit !== 'fixed';
      const avgUnits = isPerUnit ? 10 : 1; // Assume 10 sqm average for per-unit items
      
      return {
        lowEnd: acc.lowEnd + (item.lowEnd * avgUnits),
        midRange: acc.midRange + (item.midRange * avgUnits),
        highEnd: acc.highEnd + (item.highEnd * avgUnits),
      };
    },
    { lowEnd: 0, midRange: 0, highEnd: 0 }
  );
  
  return {
    lowEnd: Math.round(totals.lowEnd * multiplier),
    midRange: Math.round(totals.midRange * multiplier),
    highEnd: Math.round(totals.highEnd * multiplier),
  };
}

export function countCostGuidePages(): number {
  return generateCostGuideParams().length;
}
