// ============================================================================
// PSEO ENGINE - DYNAMIC PRICING DATABASE
// Auto-updating prices for cost calculator pages
// Idea 63: Dynamic Cost Calculator Pages
// ============================================================================

export interface MaterialCost {
  name: string;
  unit: string;
  baseCost: number;
  lastUpdated: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

export interface LabourRate {
  trade: string;
  dayRate: number;
  hourlyRate: number;
  region: 'london-prime' | 'london-outer' | 'southeast';
}

export interface ProjectCostTemplate {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  
  // Base calculation
  baseCostPerUnit: number;
  unit: 'sqm' | 'sqft' | 'linear-m' | 'item' | 'room';
  
  // Size options
  sizeOptions: {
    name: string;
    minSize: number;
    maxSize: number;
    avgSize: number;
  }[];
  
  // Spec levels
  specLevels: {
    name: string;
    multiplier: number;
    description: string;
  }[];
  
  // Additional options
  options: {
    name: string;
    cost: number;
    type: 'fixed' | 'per-unit';
    description: string;
  }[];
  
  // Location multipliers
  locationMultiplier: {
    'NW3': number;
    'NW1': number;
    'NW8': number;
    'N6': number;
    'default': number;
  };
  
  // Content
  description: string;
  whatIncluded: string[];
  whatNotIncluded: string[];
  timeline: string;
  
  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
}

// ============================================================================
// MATERIAL COSTS (Updated regularly)
// ============================================================================

export const materialCosts: MaterialCost[] = [
  // Timber
  { name: 'Softwood Timber (per m³)', unit: 'm³', baseCost: 450, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Hardwood Timber (per m³)', unit: 'm³', baseCost: 1200, lastUpdated: '2024-12-01', trend: 'up', changePercent: 5 },
  { name: 'MDF (per sheet)', unit: 'sheet', baseCost: 28, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Plywood (per sheet)', unit: 'sheet', baseCost: 45, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  
  // Bricks & Blocks
  { name: 'London Stock Bricks (per 1000)', unit: '1000', baseCost: 850, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Engineering Bricks (per 1000)', unit: '1000', baseCost: 650, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Concrete Blocks (per 1000)', unit: '1000', baseCost: 1200, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  
  // Steel
  { name: 'Structural Steel (per tonne)', unit: 'tonne', baseCost: 2800, lastUpdated: '2024-12-01', trend: 'down', changePercent: -3 },
  { name: 'RSJ Beam (per m)', unit: 'm', baseCost: 85, lastUpdated: '2024-12-01', trend: 'down', changePercent: -3 },
  
  // Plasterboard
  { name: 'Standard Plasterboard (per sheet)', unit: 'sheet', baseCost: 8, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Moisture Resistant Board (per sheet)', unit: 'sheet', baseCost: 12, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Fire-Rated Board (per sheet)', unit: 'sheet', baseCost: 14, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  
  // Insulation
  { name: 'Mineral Wool (per m²)', unit: 'm²', baseCost: 12, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'PIR Board (per m²)', unit: 'm²', baseCost: 35, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  
  // Copper
  { name: 'Copper Pipe 15mm (per m)', unit: 'm', baseCost: 8, lastUpdated: '2024-12-01', trend: 'up', changePercent: 8 },
  { name: 'Copper Pipe 22mm (per m)', unit: 'm', baseCost: 12, lastUpdated: '2024-12-01', trend: 'up', changePercent: 8 },
  
  // Electrical
  { name: 'Twin & Earth Cable 2.5mm (per 100m)', unit: '100m', baseCost: 85, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
  { name: 'Consumer Unit (18-way)', unit: 'item', baseCost: 180, lastUpdated: '2024-12-01', trend: 'stable', changePercent: 0 },
];

// ============================================================================
// LABOUR RATES
// ============================================================================

export const labourRates: LabourRate[] = [
  { trade: 'General Builder', dayRate: 280, hourlyRate: 40, region: 'london-prime' },
  { trade: 'Carpenter', dayRate: 300, hourlyRate: 45, region: 'london-prime' },
  { trade: 'Electrician', dayRate: 320, hourlyRate: 50, region: 'london-prime' },
  { trade: 'Plumber', dayRate: 320, hourlyRate: 50, region: 'london-prime' },
  { trade: 'Gas Engineer', dayRate: 350, hourlyRate: 55, region: 'london-prime' },
  { trade: 'Plasterer', dayRate: 280, hourlyRate: 40, region: 'london-prime' },
  { trade: 'Decorator', dayRate: 260, hourlyRate: 38, region: 'london-prime' },
  { trade: 'Roofer', dayRate: 300, hourlyRate: 45, region: 'london-prime' },
  { trade: 'Structural Engineer', dayRate: 450, hourlyRate: 70, region: 'london-prime' },
];

// ============================================================================
// PROJECT COST TEMPLATES
// ============================================================================

export const projectCostTemplates: ProjectCostTemplate[] = [
  // ============================================================================
  // LOFT CONVERSION
  // ============================================================================
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    category: 'extensions',
    metaTitle: 'Cost of Loft Conversion in Hampstead NW3 | 2024 Price Guide',
    metaDescription: 'How much does a loft conversion cost in Hampstead? From £45,000 for a Velux to £90,000+ for a mansard. Updated December 2024 prices from local specialists.',
    
    baseCostPerUnit: 1800,
    unit: 'sqft',
    
    sizeOptions: [
      { name: 'Small (under 300 sqft)', minSize: 200, maxSize: 300, avgSize: 250 },
      { name: 'Medium (300-450 sqft)', minSize: 300, maxSize: 450, avgSize: 375 },
      { name: 'Large (450+ sqft)', minSize: 450, maxSize: 600, avgSize: 500 },
    ],
    
    specLevels: [
      { name: 'Basic', multiplier: 0.85, description: 'Standard finish, Velux windows, basic bathroom' },
      { name: 'Mid-Range', multiplier: 1.0, description: 'Good quality finish, dormer, en-suite' },
      { name: 'High-End', multiplier: 1.35, description: 'Premium finish, mansard, luxury bathroom' },
    ],
    
    options: [
      { name: 'Dormer Window', cost: 8000, type: 'fixed', description: 'Full-width rear dormer' },
      { name: 'Juliet Balcony', cost: 2500, type: 'fixed', description: 'Glass balustrade with opening doors' },
      { name: 'En-Suite Bathroom', cost: 12000, type: 'fixed', description: 'Full en-suite with shower' },
      { name: 'Velux Skylights (each)', cost: 1800, type: 'fixed', description: 'Including installation' },
      { name: 'Staircase Upgrade', cost: 3500, type: 'fixed', description: 'Oak treads, glass balustrade' },
    ],
    
    locationMultiplier: {
      'NW3': 1.15,
      'NW1': 1.10,
      'NW8': 1.12,
      'N6': 1.08,
      'default': 1.0,
    },
    
    description: 'A loft conversion adds valuable living space and typically increases property value by 15-20%. In Hampstead conservation areas, dormer and mansard styles require planning permission.',
    
    whatIncluded: [
      'Structural calculations and Building Control',
      'Floor strengthening and insulation',
      'Staircase to loft',
      'Windows (Velux or dormer)',
      'Electrical installation (lighting, sockets)',
      'Plasterboard lining and plastering',
      'Fire doors and smoke detection',
      'Basic decoration',
    ],
    
    whatNotIncluded: [
      'Planning application fees (if required)',
      'Party Wall surveyor fees',
      'Bathroom/en-suite (separate option)',
      'Premium flooring',
      'Fitted wardrobes',
      'Air conditioning',
    ],
    
    timeline: '8-12 weeks typical',
    
    faqs: [
      {
        question: 'Do I need planning permission for a loft conversion in NW3?',
        answer: 'Velux/rooflight conversions typically fall under Permitted Development. However, in Hampstead Conservation Area, dormers and mansards usually require planning permission. We check your property\'s status and handle applications.',
      },
      {
        question: 'How much value does a loft conversion add?',
        answer: 'A well-executed loft conversion in NW3 typically adds 15-20% to property value. On a £2m property, that\'s £300-400k potential uplift for a £60-80k investment.',
      },
      {
        question: 'How long does a loft conversion take?',
        answer: 'Most loft conversions take 8-12 weeks from start to finish. More complex mansard conversions requiring planning may take 14-16 weeks.',
      },
    ],
  },

  // ============================================================================
  // SIDE RETURN EXTENSION
  // ============================================================================
  {
    slug: 'side-return-extension',
    name: 'Side Return Extension',
    category: 'extensions',
    metaTitle: 'Cost of Side Return Extension in Hampstead | 2024 Prices NW3',
    metaDescription: 'Side return extension costs in Hampstead from £50,000. Transform your kitchen with a side return. Updated 2024 prices from local builders.',
    
    baseCostPerUnit: 2500,
    unit: 'sqm',
    
    sizeOptions: [
      { name: 'Narrow (under 10 sqm)', minSize: 6, maxSize: 10, avgSize: 8 },
      { name: 'Standard (10-15 sqm)', minSize: 10, maxSize: 15, avgSize: 12 },
      { name: 'Wide (15+ sqm)', minSize: 15, maxSize: 25, avgSize: 18 },
    ],
    
    specLevels: [
      { name: 'Basic', multiplier: 0.9, description: 'Flat roof, standard glazing' },
      { name: 'Mid-Range', multiplier: 1.0, description: 'Roof light, bi-fold doors' },
      { name: 'High-End', multiplier: 1.4, description: 'Full glass roof, premium doors, underfloor heating' },
    ],
    
    options: [
      { name: 'Bi-fold Doors (per m)', cost: 1200, type: 'per-unit', description: 'Aluminium bi-fold to garden' },
      { name: 'Roof Light', cost: 3500, type: 'fixed', description: 'Large format rooflight' },
      { name: 'Underfloor Heating', cost: 85, type: 'per-unit', description: 'Wet UFH system per sqm' },
      { name: 'Kitchen Fit-Out', cost: 25000, type: 'fixed', description: 'Mid-range kitchen units and appliances' },
      { name: 'Premium Kitchen', cost: 45000, type: 'fixed', description: 'High-end kitchen with premium appliances' },
    ],
    
    locationMultiplier: {
      'NW3': 1.15,
      'NW1': 1.10,
      'NW8': 1.12,
      'N6': 1.08,
      'default': 1.0,
    },
    
    description: 'A side return extension transforms narrow Victorian kitchens into bright, open-plan living spaces. Most side returns can be built under Permitted Development rights.',
    
    whatIncluded: [
      'Structural engineering and Building Control',
      'Foundations and drainage',
      'Brick/render external walls',
      'Flat or pitched roof',
      'Internal plastering',
      'Electrical first fix',
      'Basic decoration',
    ],
    
    whatNotIncluded: [
      'Kitchen units and worktops',
      'Flooring',
      'Bi-fold doors (optional extra)',
      'Underfloor heating (optional extra)',
      'Planning fees (if required)',
    ],
    
    timeline: '6-10 weeks typical',
    
    faqs: [
      {
        question: 'Do side return extensions need planning permission?',
        answer: 'Most side return extensions fall under Permitted Development if under 3m single storey. In conservation areas, you may need prior approval. We check and advise.',
      },
      {
        question: 'How much does a side return extension cost per sqm?',
        answer: 'In North London, expect £2,200-£3,500 per sqm depending on specification. High-end finishes with glass roofs push costs higher.',
      },
    ],
  },

  // ============================================================================
  // BASEMENT CONVERSION
  // ============================================================================
  {
    slug: 'basement-conversion',
    name: 'Basement Conversion',
    category: 'extensions',
    metaTitle: 'Basement Conversion Cost Hampstead NW3 | 2024 Price Guide',
    metaDescription: 'Basement conversion costs in Hampstead from £150,000. Expert underpinning and excavation. Updated 2024 prices for NW3 properties.',
    
    baseCostPerUnit: 3500,
    unit: 'sqft',
    
    sizeOptions: [
      { name: 'Small (under 400 sqft)', minSize: 300, maxSize: 400, avgSize: 350 },
      { name: 'Medium (400-600 sqft)', minSize: 400, maxSize: 600, avgSize: 500 },
      { name: 'Large (600+ sqft)', minSize: 600, maxSize: 1000, avgSize: 750 },
    ],
    
    specLevels: [
      { name: 'Basic Dig-Out', multiplier: 0.8, description: 'Simple excavation, utility room finish' },
      { name: 'Full Conversion', multiplier: 1.0, description: 'Habitable rooms, light well' },
      { name: 'Premium', multiplier: 1.3, description: 'Cinema room, wine cellar, gym spec' },
    ],
    
    options: [
      { name: 'Light Well', cost: 15000, type: 'fixed', description: 'External light well with glass cover' },
      { name: 'Pavement Light', cost: 8000, type: 'fixed', description: 'Walk-on glass in pavement' },
      { name: 'Lift Shaft', cost: 45000, type: 'fixed', description: 'For accessible properties' },
      { name: 'Home Cinema', cost: 25000, type: 'fixed', description: 'Acoustic treatment and AV prep' },
      { name: 'Wine Cellar', cost: 35000, type: 'fixed', description: 'Climate controlled wine storage' },
      { name: 'Gym Spec', cost: 12000, type: 'fixed', description: 'Reinforced floor, ventilation, rubber flooring' },
    ],
    
    locationMultiplier: {
      'NW3': 1.20,
      'NW1': 1.15,
      'NW8': 1.18,
      'N6': 1.10,
      'default': 1.0,
    },
    
    description: 'Basement conversions are the premium way to add space in North London. They require specialist contractors and typically add 20-25% to property value.',
    
    whatIncluded: [
      'Structural engineering and surveys',
      'Underpinning and excavation',
      'Tanking and waterproofing',
      'Concrete floor slab',
      'Mechanical ventilation',
      'Drainage and sump pump',
      'Electrical and plumbing first fix',
      'Plastering and basic finish',
    ],
    
    whatNotIncluded: [
      'Planning application (often required)',
      'Party Wall surveyor fees',
      'Light wells (optional)',
      'Premium finishes',
      'Bathroom fit-out',
      'Flooring',
    ],
    
    timeline: '16-24 weeks typical',
    
    faqs: [
      {
        question: 'Do I need planning permission for a basement in Hampstead?',
        answer: 'Usually yes. Camden has a specific basement policy limiting depth and requiring Construction Management Plans. We navigate the entire planning process.',
      },
      {
        question: 'How much does basement excavation cost per sqft?',
        answer: 'In NW3, expect £3,000-£4,500 per sqft all-in. Complex sites with difficult access or clay soil can be higher.',
      },
      {
        question: 'Is a basement conversion worth it?',
        answer: 'In Hampstead where land values exceed £1,500 per sqft, a basement at £3,500 per sqft to build typically delivers strong ROI. A 500 sqft basement could add £400-500k to a £2m property.',
      },
    ],
  },

  // ============================================================================
  // FULL HOUSE REWIRE
  // ============================================================================
  {
    slug: 'rewiring',
    name: 'Full House Rewire',
    category: 'electrical',
    metaTitle: 'Cost of Rewiring a House in NW3 | Hampstead Electrician Prices',
    metaDescription: 'Full house rewire costs in Hampstead from £8,000. NICEIC registered electricians. Updated 2024 prices for Victorian and Edwardian properties.',
    
    baseCostPerUnit: 120,
    unit: 'sqm',
    
    sizeOptions: [
      { name: '2-Bed Flat (60-80 sqm)', minSize: 60, maxSize: 80, avgSize: 70 },
      { name: '3-Bed House (100-140 sqm)', minSize: 100, maxSize: 140, avgSize: 120 },
      { name: '4-Bed House (150-200 sqm)', minSize: 150, maxSize: 200, avgSize: 175 },
      { name: '5+ Bed House (200+ sqm)', minSize: 200, maxSize: 350, avgSize: 250 },
    ],
    
    specLevels: [
      { name: 'Basic', multiplier: 0.85, description: 'Standard sockets, basic lighting' },
      { name: 'Standard', multiplier: 1.0, description: 'Good socket coverage, dimmer switches' },
      { name: 'Premium', multiplier: 1.25, description: 'USB sockets, lighting design, smart-ready' },
    ],
    
    options: [
      { name: 'Consumer Unit Upgrade', cost: 450, type: 'fixed', description: '18-way RCBO board' },
      { name: 'Smart Lighting Prep', cost: 1500, type: 'fixed', description: 'Wiring for Lutron/Control4' },
      { name: 'EV Charger Installation', cost: 1200, type: 'fixed', description: '7kW charger with dedicated circuit' },
      { name: 'Garden Lighting', cost: 2500, type: 'fixed', description: 'External circuits and armoured cable' },
      { name: 'Underfloor Heating Circuits', cost: 350, type: 'per-unit', description: 'Per zone' },
    ],
    
    locationMultiplier: {
      'NW3': 1.10,
      'NW1': 1.08,
      'NW8': 1.08,
      'N6': 1.05,
      'default': 1.0,
    },
    
    description: 'A full rewire replaces all cables, sockets, switches, and the consumer unit. Essential for Victorian properties with old wiring.',
    
    whatIncluded: [
      'New consumer unit with RCBOs',
      'All new cables to current regulations',
      'Double sockets to all rooms',
      'Ceiling roses and switches',
      'Smoke and heat detectors (hard-wired)',
      'NICEIC certification',
      'Building Control notification',
    ],
    
    whatNotIncluded: [
      'Making good (plastering)',
      'Decoration',
      'Light fittings (we install customer supply)',
      'Smart home systems',
    ],
    
    timeline: '5-10 days depending on property size',
    
    faqs: [
      {
        question: 'How do I know if my house needs rewiring?',
        answer: 'Signs include: old round-pin sockets, fabric-covered cables, no RCDs in fuse board, frequent blown fuses, or any electrical installation over 30 years old.',
      },
      {
        question: 'Can you rewire without damaging period features?',
        answer: 'Yes. We use careful chasing, surface-mounted trunking where appropriate, and work with your plasterer to restore cornices and features.',
      },
    ],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getProjectCostTemplateBySlug(slug: string): ProjectCostTemplate | undefined {
  return projectCostTemplates.find(p => p.slug === slug);
}

export function getAllProjectCostSlugs(): string[] {
  return projectCostTemplates.map(p => p.slug);
}

export function calculateProjectCost(
  template: ProjectCostTemplate,
  size: number,
  specLevel: string,
  postcode: string,
  selectedOptions: string[]
): { min: number; max: number; breakdown: { item: string; cost: number }[] } {
  const spec = template.specLevels.find(s => s.name === specLevel) || template.specLevels[1];
  const locationMult = template.locationMultiplier[postcode as keyof typeof template.locationMultiplier] 
    || template.locationMultiplier.default;
  
  const baseCost = template.baseCostPerUnit * size * spec.multiplier * locationMult;
  
  const breakdown: { item: string; cost: number }[] = [
    { item: `Base cost (${size} ${template.unit} × £${template.baseCostPerUnit})`, cost: Math.round(baseCost) },
  ];
  
  let optionsCost = 0;
  for (const optName of selectedOptions) {
    const option = template.options.find(o => o.name === optName);
    if (option) {
      const cost = option.type === 'per-unit' ? option.cost * size : option.cost;
      optionsCost += cost;
      breakdown.push({ item: option.name, cost: Math.round(cost * locationMult) });
    }
  }
  
  const total = baseCost + (optionsCost * locationMult);
  
  return {
    min: Math.round(total * 0.9),
    max: Math.round(total * 1.15),
    breakdown,
  };
}

// Last database update timestamp
export const PRICING_LAST_UPDATED = '2024-12-15';
