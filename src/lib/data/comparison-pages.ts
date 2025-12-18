// ============================================================================
// PSEO ENGINE - COMPARISON & VS PAGES DATABASE
// Targeting decision-stage searches: "combi vs system boiler"
// 5x SEO Domination - Strategy 2
// ============================================================================

export interface ComparisonPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'boilers' | 'renovations' | 'materials' | 'services' | 'budgets';
  
  option1: {
    name: string;
    shortName: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    priceRange: string;
    image?: string;
  };
  
  option2: {
    name: string;
    shortName: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    priceRange: string;
    image?: string;
  };
  
  comparisonTable: {
    factor: string;
    option1Value: string;
    option2Value: string;
    winner?: '1' | '2' | 'tie';
  }[];
  
  verdict: {
    summary: string;
    choose1When: string[];
    choose2When: string[];
  };
  
  faqs: {
    question: string;
    answer: string;
  }[];
  
  relatedServices: string[];
  relatedComparisons: string[];
}

export const comparisonPages: ComparisonPage[] = [
  // ============================================================================
  // BOILER COMPARISONS
  // ============================================================================
  {
    slug: 'combi-vs-system-boiler',
    title: 'Combi Boiler vs System Boiler',
    metaTitle: 'Combi vs System Boiler: Which is Best for Your Home? | Expert Guide',
    metaDescription: 'Combi or system boiler? Our expert comparison helps you choose the right boiler type for your North London home. Includes costs, pros & cons, and recommendations.',
    category: 'boilers',
    
    option1: {
      name: 'Combi Boiler',
      shortName: 'Combi',
      description: 'A combination boiler provides both central heating and hot water on demand, without needing a separate hot water cylinder or cold water storage tank.',
      pros: [
        'Compact - no cylinder or tank needed',
        'Instant hot water on demand',
        'More energy efficient (no heat loss from stored water)',
        'Lower installation costs',
        'Ideal for smaller properties',
        'Easier to install and maintain',
      ],
      cons: [
        'Water pressure drops if multiple taps used',
        'Not suitable for large households (4+ bathrooms)',
        'Can\'t power multiple showers simultaneously',
        'No backup hot water if boiler fails',
        'May struggle with low incoming water pressure',
      ],
      bestFor: [
        'Flats and apartments',
        '1-3 bedroom houses',
        'Properties with 1-2 bathrooms',
        'Homes without loft space',
        'Energy-conscious homeowners',
      ],
      priceRange: '£1,800 - £3,500 installed',
    },
    
    option2: {
      name: 'System Boiler',
      shortName: 'System',
      description: 'A system boiler works with a hot water cylinder (usually in an airing cupboard) to store hot water, but doesn\'t require a cold water tank in the loft.',
      pros: [
        'Can supply multiple bathrooms simultaneously',
        'Consistent water pressure throughout',
        'Compatible with solar thermal systems',
        'Hot water stored means backup supply',
        'Better for high hot water demand',
        'Works well with underfloor heating',
      ],
      cons: [
        'Requires space for hot water cylinder',
        'Higher installation costs',
        'Heat loss from cylinder (even if insulated)',
        'Wait time for cylinder to reheat',
        'More complex installation',
      ],
      bestFor: [
        '4+ bedroom houses',
        'Properties with 3+ bathrooms',
        'Large families',
        'Homes with multiple showers',
        'Properties with solar panels',
      ],
      priceRange: '£2,500 - £4,500 installed',
    },
    
    comparisonTable: [
      { factor: 'Space Required', option1Value: 'Minimal (wall-mounted only)', option2Value: 'Cylinder cupboard needed', winner: '1' },
      { factor: 'Hot Water Delivery', option1Value: 'Instant, on-demand', option2Value: 'Stored, may need reheating', winner: '1' },
      { factor: 'Multi-Bathroom Use', option1Value: 'Pressure drops', option2Value: 'Consistent pressure', winner: '2' },
      { factor: 'Installation Cost', option1Value: '£1,800 - £3,500', option2Value: '£2,500 - £4,500', winner: '1' },
      { factor: 'Running Costs', option1Value: 'Lower (on-demand)', option2Value: 'Slightly higher', winner: '1' },
      { factor: 'Solar Compatibility', option1Value: 'Limited', option2Value: 'Excellent', winner: '2' },
      { factor: 'Large Family Suitability', option1Value: 'Up to 3 bed', option2Value: '4+ bed', winner: '2' },
      { factor: 'Maintenance', option1Value: 'Simpler, fewer parts', option2Value: 'Cylinder + boiler', winner: '1' },
    ],
    
    verdict: {
      summary: 'For most North London properties (flats and 2-3 bed houses), a combi boiler is the best choice. System boilers make sense for larger properties with high hot water demand or solar thermal systems.',
      choose1When: [
        'You have a flat or small house (1-3 bedrooms)',
        'Space is at a premium',
        'You only have 1-2 bathrooms',
        'You want lower installation costs',
        'Energy efficiency is a priority',
      ],
      choose2When: [
        'You have 4+ bedrooms',
        'Multiple people shower simultaneously',
        'You have or plan to install solar thermal',
        'Consistent water pressure is essential',
        'You have space for a cylinder cupboard',
      ],
    },
    
    faqs: [
      {
        question: 'Can I switch from a system boiler to a combi?',
        answer: 'Yes, it\'s a common conversion in London. We remove the cylinder and cold water tank (if present), freeing up valuable space. Typical cost: £2,500-£4,000 including the new combi.',
      },
      {
        question: 'Will a combi cope with my power shower?',
        answer: 'Combis can\'t power pumped power showers (they\'re designed for gravity systems). However, modern combis deliver 10-15 litres/minute which feels powerful. We\'ll assess your water pressure to recommend the best solution.',
      },
      {
        question: 'Which boiler type is better for the environment?',
        answer: 'Combis are generally more efficient as they don\'t store hot water (no standby heat loss). However, if you have solar thermal panels, a system boiler with a thermal store is greener overall.',
      },
      {
        question: 'How long do combi and system boilers last?',
        answer: 'Both typically last 10-15 years with annual servicing. Premium brands (Worcester, Vaillant) often last longer. System boilers may have additional cylinder maintenance requirements.',
      },
    ],
    
    relatedServices: ['boiler-installation', 'boiler-service', 'heating-system', 'central-heating'],
    relatedComparisons: ['worcester-vs-vaillant', 'gas-vs-electric-heating', 'conventional-vs-system-boiler'],
  },

  {
    slug: 'worcester-vs-vaillant',
    title: 'Worcester Bosch vs Vaillant Boilers',
    metaTitle: 'Worcester Bosch vs Vaillant: Which Boiler Brand is Best? | 2024 Guide',
    metaDescription: 'Worcester or Vaillant? Compare the UK\'s top boiler brands. Expert analysis of reliability, efficiency, warranties and prices from local Gas Safe engineers.',
    category: 'boilers',
    
    option1: {
      name: 'Worcester Bosch',
      shortName: 'Worcester',
      description: 'Worcester Bosch is the UK\'s best-selling boiler brand, known for reliability and comprehensive warranties. Made in the UK at their Worcester factory.',
      pros: [
        'Best-selling UK brand - proven reliability',
        'Up to 12-year warranty available',
        'Excellent Which? customer satisfaction scores',
        'Made in UK - parts readily available',
        'Wide range of models',
        'Strong installer network',
      ],
      cons: [
        'Premium pricing',
        'Some models slightly less efficient than competitors',
        'Customer service can be slow during peak times',
        'Extended warranties require annual service',
      ],
      bestFor: [
        'Homeowners wanting proven reliability',
        'Those valuing long warranties',
        'Properties needing quick spare parts',
        'Customers wanting UK support',
      ],
      priceRange: '£1,200 - £2,500 (boiler only)',
    },
    
    option2: {
      name: 'Vaillant',
      shortName: 'Vaillant',
      description: 'German-engineered boilers with a reputation for efficiency and innovation. Vaillant pioneered condensing technology and continues to lead on efficiency.',
      pros: [
        'Class-leading efficiency ratings',
        'German engineering quality',
        'Innovative features (ecoTEC range)',
        'Excellent smart controls compatibility',
        'Up to 10-year warranty',
        'Lower running costs',
      ],
      cons: [
        'Parts can take longer to source',
        'Slightly more complex repairs',
        'Premium pricing similar to Worcester',
        'Fewer installer options',
      ],
      bestFor: [
        'Energy-efficiency focused homeowners',
        'Smart home enthusiasts',
        'Those prioritising German engineering',
        'Environmental-conscious customers',
      ],
      priceRange: '£1,100 - £2,400 (boiler only)',
    },
    
    comparisonTable: [
      { factor: 'Brand Heritage', option1Value: 'UK market leader', option2Value: 'German engineering', winner: 'tie' },
      { factor: 'Max Warranty', option1Value: '12 years', option2Value: '10 years', winner: '1' },
      { factor: 'Energy Efficiency', option1Value: 'Up to 94%', option2Value: 'Up to 98%', winner: '2' },
      { factor: 'Parts Availability', option1Value: 'Excellent (UK made)', option2Value: 'Good', winner: '1' },
      { factor: 'Smart Controls', option1Value: 'Good', option2Value: 'Excellent', winner: '2' },
      { factor: 'Price Range', option1Value: '£1,200-£2,500', option2Value: '£1,100-£2,400', winner: 'tie' },
      { factor: 'Which? Rating', option1Value: 'Best Buy', option2Value: 'Best Buy', winner: 'tie' },
      { factor: 'Installer Network', option1Value: 'Very wide', option2Value: 'Wide', winner: '1' },
    ],
    
    verdict: {
      summary: 'Both are excellent choices. Worcester edges it for warranty length and parts availability; Vaillant wins on efficiency and smart home integration. You can\'t go wrong with either brand.',
      choose1When: [
        'You want the longest possible warranty',
        'Quick parts availability is important',
        'You prefer a UK-manufactured product',
        'Your installer recommends it',
      ],
      choose2When: [
        'Energy efficiency is your priority',
        'You have smart home systems',
        'You prefer German engineering',
        'Lower running costs matter most',
      ],
    },
    
    faqs: [
      {
        question: 'Which brand do you recommend?',
        answer: 'As accredited installers for both brands, we recommend based on your specific needs. For most customers, either is excellent. We often suggest Worcester for its warranty and Vaillant for its efficiency.',
      },
      {
        question: 'Are there cheaper alternatives?',
        answer: 'Yes - Ideal, Baxi, and Glow-worm offer good value. However, for longevity and peace of mind, we believe the premium for Worcester or Vaillant is worthwhile. The extra cost is recovered in reliability.',
      },
      {
        question: 'How important is the warranty?',
        answer: 'Very important. A boiler is a significant investment (£2,000-£4,000 installed). Extended warranties protect against expensive repairs in years 3-10 when problems are most likely.',
      },
      {
        question: 'Can you install both brands?',
        answer: 'Yes, we\'re accredited installers for Worcester Bosch, Vaillant, Ideal, and Baxi. This means we can offer extended warranties on all major brands.',
      },
    ],
    
    relatedServices: ['boiler-installation', 'boiler-service', 'boiler-repair'],
    relatedComparisons: ['combi-vs-system-boiler', 'gas-vs-electric-heating'],
  },

  // ============================================================================
  // RENOVATION COMPARISONS
  // ============================================================================
  {
    slug: 'loft-conversion-vs-extension',
    title: 'Loft Conversion vs Extension',
    metaTitle: 'Loft Conversion vs Extension: Which Adds More Value? | Cost Comparison',
    metaDescription: 'Loft conversion or extension? Compare costs, planning requirements, disruption levels and ROI. Expert advice for North London homeowners.',
    category: 'renovations',
    
    option1: {
      name: 'Loft Conversion',
      shortName: 'Loft',
      description: 'Convert your existing loft space into a habitable room. Most loft conversions in London are dormer or Velux conversions, adding 1-2 rooms within the existing roof structure.',
      pros: [
        'Usually doesn\'t require planning permission (Permitted Development)',
        'Faster completion (6-10 weeks typical)',
        'Less disruptive to daily life',
        'Doesn\'t reduce garden space',
        'Often better views from higher floor',
        'Typically cheaper than extension',
      ],
      cons: [
        'Limited by existing roof structure',
        'Head height restrictions may limit use',
        'Staircase takes space from floor below',
        'May not be possible on all properties',
        'Fire regulation requirements',
      ],
      bestFor: [
        'Properties with adequate roof height (2.2m+)',
        'Homeowners wanting quick results',
        'Those wanting to preserve garden',
        'Budget-conscious projects',
        'Creating extra bedroom/office',
      ],
      priceRange: '£35,000 - £75,000',
    },
    
    option2: {
      name: 'Ground Floor Extension',
      shortName: 'Extension',
      description: 'Extend your property\'s footprint at ground level. Options include rear extensions, side returns, wraparound extensions, or double-storey additions.',
      pros: [
        'More design flexibility',
        'Can create large open-plan living',
        'No head height limitations',
        'Better for kitchen/living expansion',
        'Can add more square footage',
        'Greater potential value uplift',
      ],
      cons: [
        'Often requires planning permission',
        'More expensive (groundworks, foundations)',
        'Longer build time (12-20 weeks)',
        'More disruptive during build',
        'Reduces garden space',
        'Neighbour considerations',
      ],
      bestFor: [
        'Expanding kitchen/dining spaces',
        'Creating open-plan living',
        'Properties with generous gardens',
        'Those wanting dramatic transformation',
        'Long-term family homes',
      ],
      priceRange: '£50,000 - £150,000',
    },
    
    comparisonTable: [
      { factor: 'Typical Cost', option1Value: '£35,000 - £75,000', option2Value: '£50,000 - £150,000', winner: '1' },
      { factor: 'Build Time', option1Value: '6-10 weeks', option2Value: '12-20 weeks', winner: '1' },
      { factor: 'Planning Permission', option1Value: 'Usually not required', option2Value: 'Often required', winner: '1' },
      { factor: 'Disruption Level', option1Value: 'Moderate', option2Value: 'High', winner: '1' },
      { factor: 'Space Added', option1Value: '15-30 sqm typical', option2Value: '20-50 sqm typical', winner: '2' },
      { factor: 'Design Flexibility', option1Value: 'Limited by roof', option2Value: 'Very flexible', winner: '2' },
      { factor: 'ROI / Value Added', option1Value: '10-20% value increase', option2Value: '15-25% value increase', winner: '2' },
      { factor: 'Garden Impact', option1Value: 'None', option2Value: 'Reduces space', winner: '1' },
    ],
    
    verdict: {
      summary: 'For adding a bedroom or office, loft conversions offer better value and less disruption. For transforming your ground floor living space, an extension is worth the investment. Many homeowners do both over time.',
      choose1When: [
        'You need an extra bedroom or office',
        'Budget is a primary concern',
        'You want minimal disruption',
        'Your garden space is precious',
        'You don\'t need planning complications',
      ],
      choose2When: [
        'You want open-plan kitchen/living',
        'Your ground floor feels cramped',
        'You have a generous garden',
        'You\'re planning a long-term stay',
        'Maximum value uplift is the goal',
      ],
    },
    
    faqs: [
      {
        question: 'Which adds more value to my home?',
        answer: 'Both add significant value. Loft conversions typically add 10-20% to property value. Extensions can add 15-25%, especially large kitchen-diners in family areas. In Hampstead, extensions often deliver the highest percentage returns.',
      },
      {
        question: 'Can I do both a loft conversion and extension?',
        answer: 'Yes, many clients do both, either simultaneously or in phases. Doing both together can be cost-effective (shared scaffolding, one planning application). We can project manage combined works.',
      },
      {
        question: 'Do I definitely need planning for an extension?',
        answer: 'Not always. Permitted Development allows rear extensions up to 3m (attached) or 4m (detached) without planning. However, conservation areas, listed buildings, and large extensions require full planning.',
      },
      {
        question: 'How do I know if my loft is suitable?',
        answer: 'We offer free loft assessments. Key factors: head height (2.2m minimum from floor joist to ridge), roof structure (trussed roofs need more work), stair positioning, and existing dormers. Most Victorian/Edwardian properties are suitable.',
      },
    ],
    
    relatedServices: ['loft-conversion', 'extension', 'structural-work', 'planning-services'],
    relatedComparisons: ['dormer-vs-velux-loft', 'single-vs-double-storey-extension'],
  },

  {
    slug: 'side-return-vs-rear-extension',
    title: 'Side Return vs Rear Extension',
    metaTitle: 'Side Return vs Rear Extension: Best Choice for Victorian Terrace?',
    metaDescription: 'Side return or rear extension for your London terrace? Compare costs, planning, and impact. Expert advice from North London builders.',
    category: 'renovations',
    
    option1: {
      name: 'Side Return Extension',
      shortName: 'Side Return',
      description: 'Extends into the narrow alley running alongside your kitchen in a Victorian or Edwardian terrace. Creates a wider, more open kitchen space.',
      pros: [
        'Dramatic impact on narrow kitchens',
        'Often permitted development',
        'Relatively affordable',
        'Creates open-plan kitchen/dining',
        'Brings in more light',
        'Doesn\'t reduce main garden',
      ],
      cons: [
        'Limited extra space (1.5-2m width)',
        'Only suitable for terrace properties',
        'May affect neighbour relations',
        'Can feel corridor-like if not designed well',
        'Limited by existing side passage width',
      ],
      bestFor: [
        'Victorian/Edwardian terraces',
        'Properties with side alley access',
        'Budget-conscious kitchen extensions',
        'Those wanting quick transformation',
      ],
      priceRange: '£25,000 - £50,000',
    },
    
    option2: {
      name: 'Rear Extension',
      shortName: 'Rear',
      description: 'Extends into your garden at the back of the property. Can be single or double storey, offering more flexible sizing.',
      pros: [
        'More space gained',
        'Greater design flexibility',
        'Can be combined with side return',
        'Options for multiple rooms',
        'Better for large families',
        'Can go double-storey',
      ],
      cons: [
        'Reduces garden space',
        'More expensive',
        'Often needs planning permission',
        'Longer build time',
        'More foundation work',
      ],
      bestFor: [
        'Properties with generous gardens',
        'Those wanting significant extra space',
        'Creating family rooms',
        'Double-storey additions',
      ],
      priceRange: '£40,000 - £100,000 (single storey)',
    },
    
    comparisonTable: [
      { factor: 'Typical Cost', option1Value: '£25,000 - £50,000', option2Value: '£40,000 - £100,000', winner: '1' },
      { factor: 'Space Added', option1Value: '5-10 sqm', option2Value: '15-40 sqm', winner: '2' },
      { factor: 'Garden Impact', option1Value: 'Minimal', option2Value: 'Significant', winner: '1' },
      { factor: 'Planning Required', option1Value: 'Usually no', option2Value: 'Often yes', winner: '1' },
      { factor: 'Build Time', option1Value: '6-8 weeks', option2Value: '10-16 weeks', winner: '1' },
      { factor: 'Property Types', option1Value: 'Terraces only', option2Value: 'All types', winner: '2' },
      { factor: 'Design Flexibility', option1Value: 'Limited', option2Value: 'Very flexible', winner: '2' },
      { factor: 'Light Improvement', option1Value: 'Excellent', option2Value: 'Good', winner: '1' },
    ],
    
    verdict: {
      summary: 'For Victorian terraces with narrow galley kitchens, side returns offer exceptional value and transformation. Rear extensions are better when you need more space or have a generous garden to work with.',
      choose1When: [
        'You have a Victorian terrace with side alley',
        'Your kitchen is narrow and dark',
        'Budget is under £50,000',
        'You want minimal garden impact',
        'Speed of completion matters',
      ],
      choose2When: [
        'You need more than 10 sqm extra space',
        'You have a large garden',
        'You want a family room, not just kitchen',
        'Your property isn\'t a terrace',
        'You\'re considering double-storey',
      ],
    },
    
    faqs: [
      {
        question: 'Can I do both side return AND rear extension?',
        answer: 'Yes! A "wraparound" extension combines both, creating an L-shaped extension that maximises space. This is popular in Hampstead and Highgate terraces. Costs: £60,000-£120,000 typical.',
      },
      {
        question: 'Will a side return need planning permission?',
        answer: 'Usually not, as they\'re typically under the permitted development limits. However, conservation areas (much of Hampstead!) may require planning or certificate of lawfulness. We advise on your specific situation.',
      },
      {
        question: 'How much value does a side return add?',
        answer: 'A well-designed side return in a North London terrace typically adds 5-10% to property value, often more than the build cost. The transformation of the main living space is the key selling point.',
      },
      {
        question: 'Will extending affect my neighbours?',
        answer: 'Party Wall Act applies to most extensions. We manage the party wall process, notifying neighbours and arranging surveys. Good communication prevents disputes. Most neighbours are supportive once they understand the plans.',
      },
    ],
    
    relatedServices: ['extension', 'kitchen-extension', 'structural-work', 'planning-services'],
    relatedComparisons: ['loft-conversion-vs-extension', 'single-vs-double-storey-extension'],
  },

  // ============================================================================
  // MATERIAL COMPARISONS
  // ============================================================================
  {
    slug: 'hardwood-vs-engineered-flooring',
    title: 'Solid Hardwood vs Engineered Wood Flooring',
    metaTitle: 'Hardwood vs Engineered Flooring: Pros, Cons & Costs | Expert Guide',
    metaDescription: 'Choosing between solid hardwood and engineered wood flooring? Compare durability, costs, installation and maintenance. North London flooring experts.',
    category: 'materials',
    
    option1: {
      name: 'Solid Hardwood Flooring',
      shortName: 'Solid Hardwood',
      description: 'Traditional flooring made from a single piece of solid timber, typically 18-22mm thick. Can be sanded and refinished multiple times over its lifetime.',
      pros: [
        'Can be sanded/refinished 3-5+ times',
        'Lasts 50-100 years if maintained',
        'Authentic, traditional appearance',
        'Adds significant property value',
        'Improves with age (patina)',
        'Best for period properties',
      ],
      cons: [
        'Higher material and installation costs',
        'Not suitable for underfloor heating',
        'Expands/contracts with humidity',
        'Requires acclimatisation (1-2 weeks)',
        'Cannot be used in bathrooms/basements',
        'More susceptible to moisture damage',
      ],
      bestFor: [
        'Period properties in conservation areas',
        'Main living rooms with stable humidity',
        'Those wanting long-term investment',
        'Matching existing wooden floors',
        'Properties without underfloor heating',
      ],
      priceRange: '£60 - £150 per sqm installed',
    },
    
    option2: {
      name: 'Engineered Wood Flooring',
      shortName: 'Engineered',
      description: 'Layered construction with a real hardwood top layer (3-6mm) bonded to plywood or HDF base. Offers the look of solid wood with better stability.',
      pros: [
        'Compatible with underfloor heating',
        'More stable (less expansion/contraction)',
        'Can be floated or glued',
        'Suitable for kitchens (with care)',
        'Faster installation',
        'Often more affordable',
      ],
      cons: [
        'Can only be sanded 1-2 times',
        'Shorter lifespan (25-50 years)',
        'Cheaper products look artificial',
        'Thin top layer limits refinishing',
        'Quality varies significantly by brand',
      ],
      bestFor: [
        'Homes with underfloor heating',
        'Open-plan spaces',
        'Kitchens and conservatories',
        'Renovations with limited budget',
        'Properties with concrete subfloors',
      ],
      priceRange: '£40 - £120 per sqm installed',
    },
    
    comparisonTable: [
      { factor: 'Typical Cost', option1Value: '£60-£150/sqm', option2Value: '£40-£120/sqm', winner: '2' },
      { factor: 'Lifespan', option1Value: '50-100 years', option2Value: '25-50 years', winner: '1' },
      { factor: 'Refinishing', option1Value: '3-5+ times', option2Value: '1-2 times', winner: '1' },
      { factor: 'UFH Compatible', option1Value: 'Generally no', option2Value: 'Yes', winner: '2' },
      { factor: 'Stability', option1Value: 'Moves with humidity', option2Value: 'Very stable', winner: '2' },
      { factor: 'Installation Speed', option1Value: 'Slower', option2Value: 'Faster', winner: '2' },
      { factor: 'Authenticity', option1Value: 'Genuine solid wood', option2Value: 'Real wood veneer', winner: '1' },
      { factor: 'Kitchen Suitable', option1Value: 'Not recommended', option2Value: 'Yes (with care)', winner: '2' },
    ],
    
    verdict: {
      summary: 'For period properties with radiator heating, solid hardwood is the authentic choice. For modern living with underfloor heating and open-plan layouts, engineered offers better performance. Both look beautiful when quality materials are used.',
      choose1When: [
        'You have a Victorian/Edwardian property',
        'Matching existing solid floors',
        'Long-term investment is priority',
        'You don\'t have underfloor heating',
        'Authenticity matters most',
      ],
      choose2When: [
        'You have underfloor heating',
        'Installing in kitchen or conservatory',
        'Budget is a constraint',
        'You have a concrete subfloor',
        'You want open-plan continuity',
      ],
    },
    
    faqs: [
      {
        question: 'Can you tell the difference between solid and engineered?',
        answer: 'With quality engineered flooring (5mm+ top layer), it\'s virtually impossible to tell once installed. The surface is genuine hardwood. Differences only show at edges or if you cut the planks.',
      },
      {
        question: 'Which is better for Victorian houses in Hampstead?',
        answer: 'It depends on your heating system. For traditional radiator heating, solid hardwood matches the period aesthetic beautifully. If you\'re installing UFH (popular in renovations), engineered is necessary.',
      },
      {
        question: 'How thick should engineered flooring be?',
        answer: 'We recommend minimum 15mm total thickness with 4mm+ wear layer for quality that lasts. Cheap 10mm engineered with 2mm veneer cannot be refinished and shows wear quickly.',
      },
      {
        question: 'Can you install hardwood over my existing floor?',
        answer: 'Sometimes. Solid hardwood usually needs to be nailed to timber subfloor. Engineered can float over many surfaces including concrete with proper underlay. We\'ll assess your specific floor.',
      },
    ],
    
    relatedServices: ['flooring', 'hardwood-flooring', 'floor-sanding', 'underfloor-heating'],
    relatedComparisons: ['oak-vs-walnut-flooring', 'carpet-vs-hard-flooring'],
  },

  {
    slug: 'quartz-vs-granite-worktops',
    title: 'Quartz vs Granite Worktops',
    metaTitle: 'Quartz vs Granite Worktops: Which is Best for Your Kitchen? | 2024 Guide',
    metaDescription: 'Quartz or granite kitchen worktops? Compare durability, maintenance, costs and aesthetics. Expert advice from North London kitchen installers.',
    category: 'materials',
    
    option1: {
      name: 'Quartz Worktops',
      shortName: 'Quartz',
      description: 'Engineered stone made from 90-95% ground quartz crystals bound with resin. Available in a wide range of colours and patterns, including marble-look options.',
      pros: [
        'Non-porous - no sealing required',
        'Very consistent colour/pattern',
        'Scratch and stain resistant',
        'Low maintenance',
        'Wide colour range available',
        'Hygienic surface',
      ],
      cons: [
        'Not heat resistant (can scorch)',
        'Some find appearance "manufactured"',
        'Seams may be visible',
        'Damaged sections hard to repair',
        'Not suitable for outdoor kitchens',
        'Premium brands are expensive',
      ],
      bestFor: [
        'Modern, contemporary kitchens',
        'Busy families wanting low maintenance',
        'Those wanting consistent appearance',
        'Kitchens with specific colour schemes',
        'Budget-conscious luxury look',
      ],
      priceRange: '£300 - £600 per sqm installed',
    },
    
    option2: {
      name: 'Granite Worktops',
      shortName: 'Granite',
      description: 'Natural stone quarried from the earth. Each slab is unique with natural variations in colour and pattern. Extremely hard and heat resistant.',
      pros: [
        'Each slab is unique',
        'Excellent heat resistance',
        'Natural beauty and depth',
        'Very durable and scratch resistant',
        'Can be repaired if damaged',
        'Adds significant property value',
      ],
      cons: [
        'Requires periodic sealing',
        'Porous - can stain if unsealed',
        'Heavy - needs strong cabinets',
        'Limited colour availability',
        'Natural variations may not match',
        'Can chip at edges',
      ],
      bestFor: [
        'Traditional and classic kitchens',
        'Those wanting natural materials',
        'Keen home cooks (heat resistance)',
        'Properties in conservation areas',
        'Those valuing uniqueness',
      ],
      priceRange: '£350 - £800 per sqm installed',
    },
    
    comparisonTable: [
      { factor: 'Maintenance', option1Value: 'Very low', option2Value: 'Annual sealing', winner: '1' },
      { factor: 'Heat Resistance', option1Value: 'Use trivets', option2Value: 'Excellent', winner: '2' },
      { factor: 'Uniqueness', option1Value: 'Manufactured consistency', option2Value: 'Each slab unique', winner: '2' },
      { factor: 'Stain Resistance', option1Value: 'Excellent', option2Value: 'Good (when sealed)', winner: '1' },
      { factor: 'Colour Range', option1Value: 'Very wide', option2Value: 'Natural only', winner: '1' },
      { factor: 'Price Range', option1Value: '£300-£600/sqm', option2Value: '£350-£800/sqm', winner: '1' },
      { factor: 'Period Property Fit', option1Value: 'Modern', option2Value: 'Classic', winner: '2' },
      { factor: 'Repairability', option1Value: 'Difficult', option2Value: 'Possible', winner: '2' },
    ],
    
    verdict: {
      summary: 'Quartz wins for practicality and consistent aesthetics. Granite wins for natural beauty and heat resistance. For busy modern kitchens, quartz is our most popular choice. For traditional Hampstead properties, granite feels more appropriate.',
      choose1When: [
        'You want minimal maintenance',
        'Consistent colour is important',
        'You prefer modern aesthetics',
        'You have young children',
        'Budget is a consideration',
      ],
      choose2When: [
        'You cook a lot (hot pans)',
        'You value natural materials',
        'Your kitchen is traditional style',
        'Uniqueness matters to you',
        'You\'re in a period property',
      ],
    },
    
    faqs: [
      {
        question: 'Can I put hot pans on quartz?',
        answer: 'We recommend trivets for hot pans on quartz - direct heat can cause scorching or thermal shock. Granite handles hot pans much better, though trivets are still good practice for any worktop.',
      },
      {
        question: 'Do both materials stain?',
        answer: 'Quartz is non-porous and highly stain-resistant. Granite needs sealing - when properly sealed, it resists most stains. Red wine left overnight on unsealed granite can cause permanent marks.',
      },
      {
        question: 'Which adds more value to my home?',
        answer: 'Both are premium materials that add value. In traditional properties, granite often resonates more with buyers. In modern properties, quality quartz is equally valued.',
      },
      {
        question: 'How long do they last?',
        answer: 'Both can last 25+ years with care. Granite may last longer in perfect conditions but requires more maintenance. Quartz maintains its appearance with minimal effort throughout its life.',
      },
    ],
    
    relatedServices: ['kitchen-fitting', 'worktop-installation', 'kitchen-renovation'],
    relatedComparisons: ['marble-vs-granite', 'solid-surface-vs-quartz'],
  },

  // ============================================================================
  // SERVICE COMPARISONS
  // ============================================================================
  {
    slug: 'rewire-vs-partial-rewire',
    title: 'Full Rewire vs Partial Rewire',
    metaTitle: 'Full Rewire vs Partial Rewire: What Does Your Home Need? | Electrician Guide',
    metaDescription: 'Does your London home need a full rewire or partial rewire? Compare costs, disruption levels and when each is appropriate. Expert electrical advice.',
    category: 'services',
    
    option1: {
      name: 'Full House Rewire',
      shortName: 'Full Rewire',
      description: 'Complete replacement of all electrical wiring, consumer unit, sockets, switches, and light fittings. Brings the entire electrical system up to current regulations.',
      pros: [
        'Complete peace of mind',
        'All wiring to current standards',
        'New consumer unit with RCDs',
        'Opportunity to add circuits',
        'Full electrical certificate',
        'Lasts 25-40 years',
      ],
      cons: [
        'Higher cost',
        'Significant disruption (1-2 weeks)',
        'Redecoration needed after',
        'May need to move out temporarily',
        'Floorboards lifted throughout',
      ],
      bestFor: [
        'Properties with pre-1970s wiring',
        'Houses with fabric/rubber cables',
        'Properties failing electrical tests',
        'Major renovations',
        'Properties with no RCD protection',
      ],
      priceRange: '£4,000 - £8,000 (3-bed house)',
    },
    
    option2: {
      name: 'Partial Rewire',
      shortName: 'Partial',
      description: 'Targeted replacement of specific circuits or areas - for example, upgrading kitchen electrics, or replacing a single problematic circuit while keeping sound existing wiring.',
      pros: [
        'Lower cost',
        'Less disruption',
        'Faster completion',
        'Only affects specific areas',
        'Can be done in stages',
        'Good for mixed-age wiring',
      ],
      cons: [
        'May miss hidden problems',
        'Mixed old/new wiring ages',
        'Might need full rewire later',
        'Testing existing wiring essential',
        'Not suitable if wiring is generally poor',
      ],
      bestFor: [
        'Properties with mostly good wiring',
        'Specific problem circuits',
        'Kitchen/bathroom upgrades',
        'Adding circuits only',
        'Budget constraints',
      ],
      priceRange: '£1,000 - £3,000 (varies by scope)',
    },
    
    comparisonTable: [
      { factor: 'Cost (3-bed house)', option1Value: '£4,000 - £8,000', option2Value: '£1,000 - £3,000', winner: '2' },
      { factor: 'Disruption', option1Value: '1-2 weeks', option2Value: '2-5 days', winner: '2' },
      { factor: 'Completeness', option1Value: 'Everything new', option2Value: 'Targeted areas', winner: '1' },
      { factor: 'Future Proofing', option1Value: 'Excellent', option2Value: 'Varies', winner: '1' },
      { factor: 'Certificate', option1Value: 'Full EICR', option2Value: 'Partial certificate', winner: '1' },
      { factor: 'Suitable For', option1Value: 'Old wiring', option2Value: 'Mixed condition', winner: 'tie' },
      { factor: 'Decoration Impact', option1Value: 'Significant', option2Value: 'Limited', winner: '2' },
      { factor: 'Add-on Costs', option1Value: 'Decoration £2-4k', option2Value: 'Minimal', winner: '2' },
    ],
    
    verdict: {
      summary: 'Properties built before 1970 usually need a full rewire for safety. 1970s-1990s properties may benefit from partial rewiring if the main circuits are sound. We always recommend an EICR test to assess your actual needs.',
      choose1When: [
        'Your property was built before 1970',
        'You have rubber or fabric-insulated cables',
        'Your consumer unit has rewirable fuses',
        'EICR shows multiple "Code 1" or "Code 2" issues',
        'You\'re doing a major renovation anyway',
      ],
      choose2When: [
        'Most wiring passed recent EICR',
        'Only specific circuits are problematic',
        'You\'re upgrading kitchen/bathroom only',
        'Budget is very limited',
        'Property was rewired within 30 years',
      ],
    },
    
    faqs: [
      {
        question: 'How do I know if I need a full rewire?',
        answer: 'Warning signs: old round-pin sockets, black rubber cables, fuse box with rewirable fuses, lack of RCD protection, frequently tripping electrics. An EICR (Electrical Installation Condition Report) is the definitive test - we offer these for £195.',
      },
      {
        question: 'Can I live in the house during a full rewire?',
        answer: 'Yes, but it\'s uncomfortable. Each room is worked on in turn. Power is off for periods during the day. Dust is significant. Many clients move out or stay elsewhere for the most disruptive week.',
      },
      {
        question: 'Will I need to redecorate after rewiring?',
        answer: 'Yes, budget for redecoration. Cables are run by lifting floorboards (can be refixed) and chasing into walls (needs filling and painting). Budget £2,000-£4,000 for decoration after a full rewire.',
      },
      {
        question: 'How long does rewiring last?',
        answer: 'A full rewire with quality materials lasts 25-40 years. Consumer units may need upgrading after 15-20 years as regulations evolve. Regular EICR testing (every 10 years) catches any issues.',
      },
    ],
    
    relatedServices: ['electrical-installation', 'consumer-unit', 'electrical-testing', 'socket-installation'],
    relatedComparisons: ['rcd-vs-rcbo-protection', 'led-vs-traditional-lighting'],
  },

  // ============================================================================
  // BUDGET COMPARISONS
  // ============================================================================
  {
    slug: 'budget-vs-premium-bathroom',
    title: 'Budget vs Premium Bathroom Renovation',
    metaTitle: 'Budget vs Premium Bathroom: What\'s the Real Difference? | Cost Breakdown',
    metaDescription: 'What do you get in a budget bathroom vs premium? Honest cost breakdown from North London bathroom installers. Prices from £5,000 to £25,000+.',
    category: 'budgets',
    
    option1: {
      name: 'Budget Bathroom Renovation',
      shortName: 'Budget',
      description: 'Quality renovation using value brands and straightforward layouts. Focuses on functionality and freshness without high-end fixtures or complex features.',
      pros: [
        'Much lower cost',
        'Faster installation',
        'Good quality from value brands',
        'Functional and fresh',
        'ROI can be excellent',
        'Good for rentals or resale',
      ],
      cons: [
        'Standard designs only',
        'Basic fixtures and fittings',
        'Limited tile choices',
        'No underfloor heating',
        'Standard bath/shower only',
        'May not suit luxury properties',
      ],
      bestFor: [
        'Rental properties',
        'Properties for sale',
        'Tight budgets',
        'Second bathrooms',
        'Those wanting fresh look only',
      ],
      priceRange: '£5,000 - £10,000',
    },
    
    option2: {
      name: 'Premium Bathroom Renovation',
      shortName: 'Premium',
      description: 'High-end renovation with designer fixtures, luxury tiles, underfloor heating, and bespoke features. Creates a spa-like experience.',
      pros: [
        'Stunning visual impact',
        'Designer brand fixtures',
        'Underfloor heating',
        'Premium tiles (large format, natural stone)',
        'Walk-in shower/freestanding bath',
        'Adds significant property value',
      ],
      cons: [
        'Significantly higher cost',
        'Longer lead times for materials',
        'More complex installation',
        'May be over-spec for some properties',
        'Requires careful design',
      ],
      bestFor: [
        'Owner-occupied family homes',
        'Master en-suites',
        'High-value properties',
        'Those wanting spa-like space',
        'Long-term homes',
      ],
      priceRange: '£15,000 - £35,000+',
    },
    
    comparisonTable: [
      { factor: 'Total Cost', option1Value: '£5,000 - £10,000', option2Value: '£15,000 - £35,000+', winner: '1' },
      { factor: 'Fixtures', option1Value: 'Roca, Ideal Standard', option2Value: 'Duravit, Vitra, Crosswater', winner: '2' },
      { factor: 'Tiles', option1Value: '£30-50/sqm', option2Value: '£80-200/sqm', winner: '2' },
      { factor: 'UFH Included', option1Value: 'No', option2Value: 'Usually yes', winner: '2' },
      { factor: 'Installation Time', option1Value: '5-7 days', option2Value: '10-15 days', winner: '1' },
      { factor: 'Warranty', option1Value: 'Standard', option2Value: 'Extended', winner: '2' },
      { factor: 'ROI', option1Value: '100%+', option2Value: '70-90%', winner: '1' },
      { factor: 'Wow Factor', option1Value: 'Fresh and clean', option2Value: 'Impressive', winner: '2' },
    ],
    
    verdict: {
      summary: 'Budget renovations offer excellent value and are perfect for rentals or quick refreshes. Premium bathrooms make sense for your forever home, master en-suites, or high-value properties where presentation matters.',
      choose1When: [
        'Budget is limited',
        'Property is for rental',
        'Planning to sell soon',
        'It\'s a secondary bathroom',
        'Functionality over luxury',
      ],
      choose2When: [
        'It\'s your master en-suite',
        'You\'re staying long-term',
        'Property value is high',
        'You want daily luxury',
        'Presentation matters (sales)',
      ],
    },
    
    faqs: [
      {
        question: 'What\'s the biggest cost difference?',
        answer: 'Tiles and fixtures. Budget: £1,500-£2,500 for all materials. Premium: £5,000-£12,000+ for materials. Labour is similar unless complex features are involved.',
      },
      {
        question: 'Can I mix budget and premium elements?',
        answer: 'Absolutely! Many clients choose a premium feature (statement bath, designer basin) with budget-friendly tiles and standard shower. We help you prioritise where to spend.',
      },
      {
        question: 'Which gives better return on investment?',
        answer: 'Budget renovations typically return 100%+ of cost in added property value. Premium renovations return 70-90%. However, premium bathrooms in high-value properties can be expected by buyers.',
      },
      {
        question: 'How long does each take?',
        answer: 'Budget bathroom: 5-7 working days. Premium bathroom: 10-15 working days (due to complex tiling, underfloor heating curing time, and bespoke elements).',
      },
    ],
    
    relatedServices: ['bathroom-fitting', 'tiling', 'plumbing', 'underfloor-heating'],
    relatedComparisons: ['walk-in-vs-shower-enclosure', 'freestanding-vs-built-in-bath'],
  },

  {
    slug: 'diy-vs-professional-decorating',
    title: 'DIY vs Professional Decorating',
    metaTitle: 'DIY vs Professional Decorating: Is Hiring a Painter Worth It?',
    metaDescription: 'Should you DIY or hire a professional decorator? Honest comparison of costs, quality, time investment. From North London decorating specialists.',
    category: 'budgets',
    
    option1: {
      name: 'DIY Decorating',
      shortName: 'DIY',
      description: 'Painting and decorating your home yourself. Suitable for those with time, patience, and a willingness to learn proper techniques.',
      pros: [
        'Save on labour costs (50-70%)',
        'Work at your own pace',
        'Sense of achievement',
        'No strangers in your home',
        'Learn valuable skills',
        'Can stop/start as needed',
      ],
      cons: [
        'Time-intensive (much longer than professionals)',
        'Quality usually lower',
        'Equipment costs add up',
        'Prep work often skipped',
        'Mistakes are costly to fix',
        'Physical demands',
      ],
      bestFor: [
        'Simple single-room projects',
        'Those with decorating experience',
        'Tight budgets with time available',
        'Those enjoying hands-on work',
        'Low-pressure areas (spare rooms)',
      ],
      priceRange: '£200 - £400 per room (materials)',
    },
    
    option2: {
      name: 'Professional Decorating',
      shortName: 'Professional',
      description: 'Hiring skilled decorators who specialise in preparation, painting, and finishing. Results in superior finish with minimal disruption to you.',
      pros: [
        'Superior quality finish',
        'Proper preparation',
        'Much faster completion',
        'All equipment provided',
        'Insurance and guarantees',
        'Expert colour advice',
      ],
      cons: [
        'Higher overall cost',
        'Scheduling availability',
        'People in your home',
        'Need to clear rooms',
        'Finding reliable decorators',
      ],
      bestFor: [
        'Whole house decorating',
        'High ceilings and difficult access',
        'Period features (cornices, dado rails)',
        'Selling preparation',
        'Those without time/ability',
      ],
      priceRange: '£400 - £800 per room (labour + materials)',
    },
    
    comparisonTable: [
      { factor: 'Cost Per Room', option1Value: '£200-£400', option2Value: '£400-£800', winner: '1' },
      { factor: 'Time Per Room', option1Value: '2-3 weekends', option2Value: '1-2 days', winner: '2' },
      { factor: 'Quality', option1Value: 'Variable', option2Value: 'Professional finish', winner: '2' },
      { factor: 'Prep Quality', option1Value: 'Often rushed', option2Value: 'Thorough', winner: '2' },
      { factor: 'High Ceilings', option1Value: 'Risky', option2Value: 'Safe, proper equipment', winner: '2' },
      { factor: 'Period Features', option1Value: 'Challenging', option2Value: 'Expert handling', winner: '2' },
      { factor: 'Satisfaction', option1Value: 'If successful!', option2Value: 'Consistent', winner: '2' },
      { factor: 'Guarantee', option1Value: 'None', option2Value: 'Usually 1-2 years', winner: '2' },
    ],
    
    verdict: {
      summary: 'DIY makes sense for single rooms with simple layouts if you have time. Professional decorating is worth it for whole-house projects, high ceilings, period properties, or when quality and speed matter.',
      choose1When: [
        'Budget is very limited',
        'You enjoy decorating',
        'It\'s a single simple room',
        'You have time to do it properly',
        'Mistakes won\'t matter much',
      ],
      choose2When: [
        'You\'re decorating multiple rooms',
        'Ceilings are high (3m+)',
        'You have period features',
        'Time is limited',
        'The house is for sale',
      ],
    },
    
    faqs: [
      {
        question: 'How much do professional decorators charge?',
        answer: 'Day rates: £180-£250 per decorator per day in North London. Per room: £250-£600 depending on size and condition. Whole house: typically £3,000-£8,000 for a 3-bed.',
      },
      {
        question: 'Is the quality difference really noticeable?',
        answer: 'Yes. Professional results show in: clean cut lines, smooth surfaces, properly filled cracks, consistent coverage, and professional prep (the key to lasting finish). The difference is obvious.',
      },
      {
        question: 'What\'s the most common DIY mistake?',
        answer: 'Skipping preparation. 70% of a good paint job is prep: filling, sanding, cleaning, priming. DIYers often rush to get paint on the wall, leading to peeling, poor coverage, and visible imperfections.',
      },
      {
        question: 'Can I part-DIY and part-professional?',
        answer: 'Yes! Many clients do prep (clearing rooms, basic cleaning) themselves and hire us for painting. Others DIY simple rooms and hire us for high ceilings, staircases, and feature walls.',
      },
    ],
    
    relatedServices: ['decorating', 'painting', 'wallpapering', 'plastering'],
    relatedComparisons: ['matt-vs-eggshell-paint', 'farrow-ball-vs-dulux'],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getComparisonPage(slug: string): ComparisonPage | undefined {
  return comparisonPages.find(p => p.slug === slug);
}

export function getComparisonsByCategory(category: ComparisonPage['category']): ComparisonPage[] {
  return comparisonPages.filter(p => p.category === category);
}

export function generateComparisonParams(): { comparison: string }[] {
  return comparisonPages.map(p => ({ comparison: p.slug }));
}

// Count total comparison pages
export function countComparisonPages(): number {
  return comparisonPages.length;
}
