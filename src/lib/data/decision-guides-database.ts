// ============================================================================
// DECISION GUIDES DATABASE
// X vs Y comparison content for buyer decision pages
// ============================================================================

export interface DecisionGuide {
  slug: string;
  title: string;
  question: string;
  category: string;
  introduction: string;
  optionA: DecisionOption;
  optionB: DecisionOption;
  comparisonTable: ComparisonRow[];
  whenToChooseA: string[];
  whenToChooseB: string[];
  expertVerdict: string;
  faqs: { question: string; answer: string }[];
  relatedGuides: string[];
  relatedServices: string[];
}

export interface DecisionOption {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  typicalCost: string;
}

export interface ComparisonRow {
  factor: string;
  optionA: string;
  optionB: string;
  winner: 'A' | 'B' | 'tie';
}

export const decisionGuides: DecisionGuide[] = [
  {
    slug: 'combi-vs-system-boiler',
    title: 'Combi Boiler vs System Boiler',
    question: 'Should I get a combi or system boiler?',
    category: 'heating',
    introduction: 'Choosing between a combi and system boiler is one of the biggest decisions when replacing your heating system. Both have distinct advantages depending on your home size, hot water demands, and space constraints. This guide will help you make the right choice.',
    optionA: {
      name: 'Combi Boiler',
      description: 'A combination boiler provides instant hot water on demand without the need for a separate hot water cylinder or cold water tank. It heats water directly from the mains when you turn on a tap.',
      pros: [
        'No hot water cylinder needed - saves space',
        'No cold water tank in loft',
        'Instant hot water on demand',
        'More energy efficient - only heats water when needed',
        'Lower installation costs',
        'Simpler system with fewer components',
      ],
      cons: [
        'Struggles with multiple outlets at once',
        'Not ideal for homes with 2+ bathrooms',
        'Flow rate limited by mains pressure',
        'No backup if boiler fails',
        'Can\'t work with some power showers',
      ],
      bestFor: 'Small to medium homes with 1-2 bathrooms and moderate hot water demand',
      typicalCost: '£2,000 - £3,500 installed',
    },
    optionB: {
      name: 'System Boiler',
      description: 'A system boiler works with a hot water cylinder to store heated water, allowing it to supply multiple outlets simultaneously. The main heating components are built into the boiler, eliminating the need for a loft tank.',
      pros: [
        'Can supply multiple bathrooms simultaneously',
        'Compatible with power showers',
        'Better for larger homes',
        'Hot water stored and ready immediately',
        'Works with solar thermal systems',
        'More consistent water pressure',
      ],
      cons: [
        'Requires space for hot water cylinder',
        'Higher installation cost',
        'Standing heat losses from cylinder',
        'Takes time to reheat cylinder when depleted',
        'More complex system',
      ],
      bestFor: 'Larger homes with 2+ bathrooms, high hot water demand, or solar thermal compatibility',
      typicalCost: '£3,000 - £5,500 installed',
    },
    comparisonTable: [
      { factor: 'Installation cost', optionA: '£2,000-£3,500', optionB: '£3,000-£5,500', winner: 'A' },
      { factor: 'Running costs', optionA: 'Lower', optionB: 'Slightly higher', winner: 'A' },
      { factor: 'Space needed', optionA: 'Just boiler', optionB: 'Boiler + cylinder', winner: 'A' },
      { factor: 'Hot water flow rate', optionA: 'Mains limited', optionB: 'Excellent', winner: 'B' },
      { factor: 'Multiple outlets', optionA: 'Struggles', optionB: 'Handles well', winner: 'B' },
      { factor: 'Power shower compatible', optionA: 'No', optionB: 'Yes', winner: 'B' },
      { factor: 'Solar compatible', optionA: 'Limited', optionB: 'Yes', winner: 'B' },
      { factor: 'Reliability', optionA: 'Good', optionB: 'Good', winner: 'tie' },
    ],
    whenToChooseA: [
      'You have a small to medium home with 1-2 bathrooms',
      'Space is at a premium and you need to remove the hot water cylinder',
      'You live alone or with one other person',
      'Budget is a primary concern',
      'You have good mains water pressure',
    ],
    whenToChooseB: [
      'You have a larger home with 3+ bedrooms',
      'Multiple bathrooms need hot water simultaneously',
      'You have or want power showers',
      'You\'re considering solar thermal panels',
      'You have space for a hot water cylinder',
      'You have high hot water demands',
    ],
    expertVerdict: 'For most North London homes with 1-2 bathrooms, a quality combi boiler offers the best combination of efficiency, cost, and convenience. However, larger Victorian and Edwardian properties with multiple bathrooms will benefit from a system boiler\'s ability to deliver hot water to several outlets simultaneously. We assess each property individually and can advise on the best solution for your specific needs.',
    faqs: [
      {
        question: 'Can I switch from a system to a combi boiler?',
        answer: 'Yes, this is one of the most common upgrades we do. We remove the old cylinder, cap off the pipes, and install the combi - usually completing in one day. This frees up valuable cupboard space.',
      },
      {
        question: 'Will a combi work with my power shower?',
        answer: 'No, combi boilers are not compatible with pump-assisted power showers. However, modern combi boilers with good mains pressure can deliver an excellent shower experience without a pump.',
      },
      {
        question: 'How long does hot water take with each system?',
        answer: 'Combi: Instant hot water when you turn the tap. System: Instant from the cylinder, but the cylinder takes 20-30 minutes to reheat if depleted.',
      },
    ],
    relatedGuides: ['gas-vs-electric-heating', 'regular-vs-system-boiler'],
    relatedServices: ['boiler-installation', 'boiler-replacement', 'central-heating-installation'],
  },
  {
    slug: 'led-vs-halogen-lighting',
    title: 'LED vs Halogen Lighting',
    question: 'Should I switch to LED lighting?',
    category: 'electrical',
    introduction: 'The lighting in your home affects energy bills, ambiance, and maintenance. With halogen bulbs being phased out, many homeowners are switching to LED. This guide compares the two technologies to help you decide.',
    optionA: {
      name: 'LED Lighting',
      description: 'Light Emitting Diodes are semiconductor devices that produce light when electrical current passes through them. They\'re highly efficient and long-lasting.',
      pros: [
        '90% more efficient than halogen',
        'Lasts 25,000-50,000 hours',
        'Much cooler running temperature',
        'Available in all colour temperatures',
        'Dimmable options available',
        'Lower fire risk',
        'Environmentally friendly',
      ],
      cons: [
        'Higher upfront cost',
        'Some cheap LEDs have poor colour quality',
        'May need compatible dimmer switches',
        'Some people prefer halogen warmth',
      ],
      bestFor: 'Everyone - LEDs are now the standard for almost all applications',
      typicalCost: '£3-15 per bulb',
    },
    optionB: {
      name: 'Halogen Lighting',
      description: 'Halogen bulbs are a type of incandescent light that uses halogen gas to increase efficiency and lifespan compared to traditional bulbs.',
      pros: [
        'Familiar warm light quality',
        'Lower upfront cost per bulb',
        'Works with all existing dimmers',
        'Instant full brightness',
        '100% colour rendering',
      ],
      cons: [
        'Being phased out - limited availability',
        'High running costs',
        'Short 2,000-hour lifespan',
        'Runs very hot - fire risk',
        'Uses 10x more energy than LED',
        'Frequent bulb replacement needed',
      ],
      bestFor: 'Specialist applications only - general use halogens are now obsolete',
      typicalCost: '£1-5 per bulb (while available)',
    },
    comparisonTable: [
      { factor: 'Energy efficiency', optionA: '90% efficient', optionB: '10% efficient', winner: 'A' },
      { factor: 'Lifespan', optionA: '25,000+ hours', optionB: '2,000 hours', winner: 'A' },
      { factor: 'Running temperature', optionA: 'Cool', optionB: 'Very hot', winner: 'A' },
      { factor: 'Annual cost (10 bulbs)', optionA: '~£10', optionB: '~£100', winner: 'A' },
      { factor: 'Upfront cost', optionA: 'Higher', optionB: 'Lower', winner: 'B' },
      { factor: 'Colour quality', optionA: 'Very good', optionB: 'Excellent', winner: 'B' },
      { factor: 'Availability', optionA: 'Everywhere', optionB: 'Declining', winner: 'A' },
      { factor: 'Environmental impact', optionA: 'Low', optionB: 'High', winner: 'A' },
    ],
    whenToChooseA: [
      'You want to reduce energy bills',
      'You\'re tired of replacing bulbs',
      'Safety is a concern (heat reduction)',
      'You want smart lighting options',
      'You care about environmental impact',
      'You\'re doing any electrical work anyway',
    ],
    whenToChooseB: [
      'You have a very specific colour rendering requirement',
      'You\'re using a specialist fixture designed for halogen',
      'You need a temporary solution and have existing stock',
    ],
    expertVerdict: 'There\'s no contest - LED lighting wins in virtually every category. The higher upfront cost pays back within months through energy savings. With halogen bulbs being phased out, switching to LED isn\'t just sensible, it\'s inevitable. We recommend making the switch now while you can plan it rather than scrambling when bulbs fail.',
    faqs: [
      {
        question: 'Can I just swap halogen bulbs for LED?',
        answer: 'In most cases, yes. LED bulbs are available in all standard fittings (GU10, E27, B22, etc.). However, if you have dimmer switches, you may need LED-compatible dimmers for smooth operation.',
      },
      {
        question: 'Why do my LED bulbs flicker with my dimmer?',
        answer: 'Old dimmer switches designed for halogen often don\'t work well with LEDs. A simple dimmer upgrade (around £30-50 installed) will solve this.',
      },
      {
        question: 'What colour temperature should I choose?',
        answer: 'For a warm, cosy feel similar to halogen, choose 2700K. For a brighter, more modern feel, try 3000K. 4000K+ is better for task lighting in kitchens and offices.',
      },
    ],
    relatedGuides: ['smart-vs-traditional-lighting', 'downlight-options'],
    relatedServices: ['led-lighting-installation', 'dimmer-installation', 'electrical-rewiring'],
  },
  {
    slug: 'bath-vs-shower',
    title: 'Bath vs Walk-in Shower',
    question: 'Should I replace my bath with a walk-in shower?',
    category: 'bathroom',
    introduction: 'Many homeowners consider removing their bath to install a walk-in shower. While showers are convenient and space-efficient, baths have their own benefits. This guide helps you decide whether to keep, replace, or have both.',
    optionA: {
      name: 'Walk-in Shower',
      description: 'A spacious shower enclosure with a low or no threshold, offering easy access and a contemporary look. Can range from simple enclosures to luxury wet rooms.',
      pros: [
        'Quicker and more water-efficient',
        'Easier access for those with mobility issues',
        'Modern, contemporary appearance',
        'Can make small bathrooms feel larger',
        'Lower water and energy bills',
        'Easier to clean',
      ],
      cons: [
        'May reduce property value (see below)',
        'No option for relaxing baths',
        'Not ideal for bathing small children',
        'Some buyers specifically want baths',
      ],
      bestFor: 'Households without children, those with mobility concerns, or properties with multiple bathrooms',
      typicalCost: '£2,000 - £8,000 (wet room: £5,000 - £15,000)',
    },
    optionB: {
      name: 'Bathtub',
      description: 'A traditional bath, available in various styles from classic roll-top to modern freestanding designs. Can include shower over bath for flexibility.',
      pros: [
        'Essential for families with young children',
        'Relaxing bathing experience',
        'Expected by many property buyers',
        'Protects property value',
        'Shower-over-bath offers flexibility',
        'Range of styles to suit any décor',
      ],
      cons: [
        'Uses more water and energy',
        'Takes longer for daily washing',
        'Can be difficult for those with mobility issues',
        'Takes up more floor space',
        'Harder to get in/out as you age',
      ],
      bestFor: 'Family homes, period properties, or any property where resale value is important',
      typicalCost: '£1,500 - £5,000 (luxury freestanding: £3,000 - £10,000)',
    },
    comparisonTable: [
      { factor: 'Daily convenience', optionA: 'Excellent', optionB: 'Good', winner: 'A' },
      { factor: 'Water usage', optionA: '~50 litres', optionB: '~80 litres', winner: 'A' },
      { factor: 'For families', optionA: 'Less practical', optionB: 'Essential', winner: 'B' },
      { factor: 'Accessibility', optionA: 'Excellent', optionB: 'Challenging', winner: 'A' },
      { factor: 'Property value', optionA: 'Can reduce', optionB: 'Protects', winner: 'B' },
      { factor: 'Space efficiency', optionA: 'Better', optionB: 'Less efficient', winner: 'A' },
      { factor: 'Relaxation', optionA: 'Quick showers', optionB: 'Proper baths', winner: 'B' },
      { factor: 'Cleaning', optionA: 'Easier', optionB: 'More effort', winner: 'A' },
    ],
    whenToChooseA: [
      'You have multiple bathrooms and can keep a bath elsewhere',
      'You live alone or as a couple without children',
      'Mobility is a concern and step-in access is important',
      'You rarely use your existing bath',
      'Space is very limited and you need to maximise it',
      'You\'re converting a small ensuite',
    ],
    whenToChooseB: [
      'It\'s your only bathroom and you may sell the property',
      'You have or plan to have young children',
      'You enjoy relaxing in the bath',
      'You have a period property where baths are expected',
      'You can fit a shower over the bath for flexibility',
    ],
    expertVerdict: 'Our strong advice: if it\'s your only bathroom, keep the bath. Estate agents consistently report that homes without any bath can be harder to sell and may achieve lower prices. The best solution is often a bath with a quality shower over it, giving you both options. If you have multiple bathrooms, converting one to a walk-in shower while keeping a bath elsewhere is the ideal compromise.',
    faqs: [
      {
        question: 'Will removing my only bath reduce property value?',
        answer: 'Potentially yes. Estate agents suggest 5-10% of buyers specifically require a bath. If your property has multiple bathrooms, it\'s less of an issue. For a single-bathroom property, we recommend keeping the bath.',
      },
      {
        question: 'Can I fit a bath and separate shower in a small bathroom?',
        answer: 'Sometimes. We\'ve fitted both in bathrooms as small as 6sqm by using compact fixtures cleverly. A 1400mm bath with 900mm shower enclosure can work in the right layout.',
      },
      {
        question: 'What about a shower over the bath?',
        answer: 'This is often the best solution - you get a proper bath for relaxing and bathing children, plus a convenient shower for daily use. A good shower screen makes it practical.',
      },
    ],
    relatedGuides: ['electric-vs-mixer-shower', 'wet-room-vs-shower-enclosure'],
    relatedServices: ['bathroom-installation', 'shower-installation', 'bath-installation'],
  },
  {
    slug: 'gas-vs-electric-heating',
    title: 'Gas vs Electric Heating',
    question: 'Is gas or electric heating better?',
    category: 'heating',
    introduction: 'With the UK\'s push towards net zero and the phase-out of gas boilers in new builds from 2025, many homeowners are questioning whether to stick with gas or switch to electric heating. This guide compares the options.',
    optionA: {
      name: 'Gas Central Heating',
      description: 'Traditional gas boiler system with radiators, powered by natural gas. Currently the most common heating system in UK homes.',
      pros: [
        'Lower running costs than electric',
        'Heats homes quickly and efficiently',
        'Familiar, well-understood technology',
        'Wide range of installers available',
        'Parts readily available',
        'Can be combined with gas cooking',
      ],
      cons: [
        'Fossil fuel - not zero carbon',
        'New builds can\'t install from 2025',
        'Requires annual servicing',
        'Potential future carbon taxes',
        'Needs gas supply connection',
        'Boiler replacement every 15-20 years',
      ],
      bestFor: 'Existing homes with gas supply where immediate cost is the priority',
      typicalCost: '~4.5p/kWh (gas cost) + £100/year servicing',
    },
    optionB: {
      name: 'Electric Heating (Heat Pump)',
      description: 'Air source or ground source heat pumps that extract heat from outside and use electricity to amplify it. Can be 3-4x more efficient than direct electric heating.',
      pros: [
        'Zero carbon at point of use',
        'Can be powered by solar panels',
        '3-4x more efficient than gas',
        'No annual gas safety check',
        'Government grants available',
        'Future-proof as grid decarbonises',
        'Can provide cooling in summer',
      ],
      cons: [
        'Higher upfront installation cost',
        'May need radiator upgrades',
        'Requires good insulation to be effective',
        'Lower flow temperatures than gas',
        'Ground source needs garden space',
        'Still relatively new technology',
      ],
      bestFor: 'Well-insulated homes, new builds, or those committed to decarbonisation',
      typicalCost: '~7p/kWh effective (22p/kWh ÷ 3.0 COP) + minimal maintenance',
    },
    comparisonTable: [
      { factor: 'Running cost', optionA: '~4.5p/kWh', optionB: '~7p/kWh effective', winner: 'A' },
      { factor: 'Installation cost', optionA: '£2,500-4,000', optionB: '£8,000-15,000', winner: 'A' },
      { factor: 'Carbon emissions', optionA: 'High', optionB: 'Zero/Low', winner: 'B' },
      { factor: 'Government support', optionA: 'None', optionB: '£7,500 grant', winner: 'B' },
      { factor: 'Future-proofing', optionA: 'Uncertain', optionB: 'Good', winner: 'B' },
      { factor: 'Heating response', optionA: 'Fast', optionB: 'Slower', winner: 'A' },
      { factor: 'Installer availability', optionA: 'Widespread', optionB: 'Growing', winner: 'A' },
      { factor: 'Lifespan', optionA: '15-20 years', optionB: '20-25 years', winner: 'B' },
    ],
    whenToChooseA: [
      'You have an existing gas system that\'s working well',
      'Your boiler needs replacing but home is poorly insulated',
      'Upfront cost is a major concern',
      'You live in a period property where heat pumps are challenging',
      'You\'re planning to move within 5-10 years',
    ],
    whenToChooseB: [
      'You\'re building new or doing a major renovation',
      'Your home is well-insulated or you\'re improving insulation',
      'You\'re committed to reducing carbon footprint',
      'You have solar panels or plan to install them',
      'You want to future-proof your home',
      'The £7,500 government grant makes it affordable',
    ],
    expertVerdict: 'For most existing North London homes replacing a boiler, gas remains the practical choice for now. However, if you\'re doing a major renovation or your home is well-insulated, a heat pump is worth serious consideration - especially with £7,500 government grants available. We expect heat pumps to become the standard choice within 10 years as the technology improves and gas costs increase.',
    faqs: [
      {
        question: 'Will gas boilers be banned?',
        answer: 'Gas boilers in new builds will be banned from 2025. There\'s no current ban on replacements in existing homes, but this may change. Replacing a gas boiler with gas remains legal and practical.',
      },
      {
        question: 'Can my home work with a heat pump?',
        answer: 'Heat pumps work best in well-insulated homes with large radiators or underfloor heating. We can assess your property and advise whether it\'s suitable or what improvements would be needed.',
      },
      {
        question: 'What\'s the £7,500 grant?',
        answer: 'The Boiler Upgrade Scheme provides £7,500 towards air source heat pump installation. This significantly closes the cost gap with gas. We can help you apply.',
      },
    ],
    relatedGuides: ['combi-vs-system-boiler', 'underfloor-vs-radiators'],
    relatedServices: ['boiler-installation', 'heat-pump-installation', 'central-heating-installation'],
  },
];

// Helper functions
export function getDecisionGuide(slug: string): DecisionGuide | undefined {
  return decisionGuides.find(g => g.slug === slug);
}

export function getDecisionGuidesByCategory(category: string): DecisionGuide[] {
  return decisionGuides.filter(g => g.category === category);
}

// Alias for page compatibility
export const getGuidesByCategory = getDecisionGuidesByCategory;

export function getRelatedDecisionGuides(slug: string): DecisionGuide[] {
  const current = getDecisionGuide(slug);
  if (!current) return [];
  
  return current.relatedGuides
    .map(s => getDecisionGuide(s))
    .filter((g): g is DecisionGuide => g !== undefined);
}

export function generateDecisionGuideParams(): { comparison: string }[] {
  return decisionGuides.map(g => ({ comparison: g.slug }));
}

export function countDecisionGuidePages(): number {
  return decisionGuides.length;
}
