// ============================================================================
// PSEO ENGINE - VOICE SEARCH & FAQ DATABASE
// 500x SEO Expansion - Question-based content for voice search
// ============================================================================

export interface VoiceSearchQuestion {
  slug: string;
  question: string;
  answer: string;
  category: 'plumbing' | 'electrical' | 'heating' | 'renovation' | 'emergency' | 'cost' | 'finding' | 'general';
  localVariations: string[];
  relatedQuestions: string[];
  seoKeywords: string[];
}

export const voiceSearchQuestions: VoiceSearchQuestion[] = [
  // ==================== FINDING SERVICES ====================
  {
    slug: 'find-plumber-near-me',
    question: 'Where can I find a plumber near me?',
    answer: 'Hampstead Renovations provides expert plumbing services across North London including Hampstead, Highgate, Primrose Hill, and surrounding areas. We offer same-day service and emergency callouts. Call us now or book online for a local, trusted plumber.',
    category: 'finding',
    localVariations: [
      'plumber near me in Hampstead',
      'local plumber Highgate',
      'plumber in NW3',
      'find a plumber in North London',
    ],
    relatedQuestions: [
      'How much does a plumber cost?',
      'Do you offer emergency plumbing?',
      'Are you available weekends?',
    ],
    seoKeywords: ['plumber near me', 'local plumber', 'find plumber', 'plumber in my area'],
  },
  {
    slug: 'find-electrician-near-me',
    question: 'Where can I find an electrician near me?',
    answer: 'Hampstead Renovations employs fully qualified, NICEIC-registered electricians serving Hampstead, Swiss Cottage, Belsize Park, and all of North London. From small repairs to full rewires, we are your local electrical experts.',
    category: 'finding',
    localVariations: [
      'electrician near me in Hampstead',
      'local electrician Muswell Hill',
      'electrician NW11',
      'find electrician North London',
    ],
    relatedQuestions: [
      'Do you do electrical safety certificates?',
      'Can you rewire my house?',
      'How much is an electrician per hour?',
    ],
    seoKeywords: ['electrician near me', 'local electrician', 'find electrician', 'electrical contractor near me'],
  },
  {
    slug: 'find-builder-near-me',
    question: 'Where can I find a builder near me?',
    answer: 'Hampstead Renovations is your trusted local builder for extensions, renovations, and all building work in Hampstead, Highgate, Crouch End, and throughout North London. We have over 20 years of experience in period and modern properties.',
    category: 'finding',
    localVariations: [
      'builder near me in Hampstead',
      'local builder Finchley',
      'find builder NW3',
      'builders in North London',
    ],
    relatedQuestions: [
      'How much does an extension cost?',
      'Do you do loft conversions?',
      'Can you handle planning permission?',
    ],
    seoKeywords: ['builder near me', 'local builder', 'find builder', 'building contractor near me'],
  },

  // ==================== EMERGENCY QUESTIONS ====================
  {
    slug: 'emergency-plumber-now',
    question: 'I need an emergency plumber right now',
    answer: 'Hampstead Renovations offers 24/7 emergency plumbing across North London. We can be with you within 1-2 hours for burst pipes, flooding, blocked drains, and other plumbing emergencies. Call our emergency line now.',
    category: 'emergency',
    localVariations: [
      'emergency plumber Hampstead',
      '24 hour plumber NW3',
      'urgent plumber Highgate',
      'emergency plumber North London tonight',
    ],
    relatedQuestions: [
      'How much does an emergency plumber cost?',
      'Are you available on Sunday?',
      'How quickly can you get here?',
    ],
    seoKeywords: ['emergency plumber', 'urgent plumber', '24 hour plumber', 'plumber now'],
  },
  {
    slug: 'burst-pipe-what-to-do',
    question: 'What should I do if I have a burst pipe?',
    answer: 'First, turn off your water at the stopcock (usually under the kitchen sink). Then turn off your boiler and open taps to drain the system. Call Hampstead Renovations emergency line immediately - we can be there within 1-2 hours across North London.',
    category: 'emergency',
    localVariations: [
      'burst pipe help Hampstead',
      'pipe burst emergency NW3',
      'water leak emergency Highgate',
    ],
    relatedQuestions: [
      'Where is my stopcock?',
      'Will insurance cover burst pipe damage?',
      'How much does burst pipe repair cost?',
    ],
    seoKeywords: ['burst pipe help', 'pipe burst what to do', 'burst pipe emergency', 'water leak emergency'],
  },
  {
    slug: 'no-heating-what-to-do',
    question: 'My heating is not working, what should I do?',
    answer: 'Check your thermostat settings and boiler pressure gauge (should read 1-1.5 bar). Try resetting your boiler. If it still won\'t work, call Hampstead Renovations - we offer same-day heating repairs across Hampstead, Highgate, and North London.',
    category: 'emergency',
    localVariations: [
      'no heating Hampstead help',
      'heating broken NW3',
      'boiler not working Highgate',
    ],
    relatedQuestions: [
      'Why is my boiler not firing?',
      'How do I repressurise my boiler?',
      'Is no heating an emergency?',
    ],
    seoKeywords: ['no heating', 'heating not working', 'boiler not working', 'no hot water'],
  },

  // ==================== COST QUESTIONS ====================
  {
    slug: 'cost-of-plumber',
    question: 'How much does a plumber cost?',
    answer: 'In North London, plumbers typically charge £60-£80 per hour. Small jobs like fixing a dripping tap start from £75. Emergency callouts start from £95. At Hampstead Renovations, we provide free quotes and transparent pricing with no hidden costs.',
    category: 'cost',
    localVariations: [
      'plumber prices Hampstead',
      'plumber cost NW3',
      'how much plumber Highgate',
    ],
    relatedQuestions: [
      'Do you charge for quotes?',
      'Is there a callout fee?',
      'How much to fix a leaking tap?',
    ],
    seoKeywords: ['plumber cost', 'plumber prices', 'plumber hourly rate', 'how much does plumber cost'],
  },
  {
    slug: 'cost-of-extension',
    question: 'How much does a house extension cost?',
    answer: 'House extensions in North London typically cost £2,000-£3,000 per square metre for basic finishes, or £3,000-£4,500 per square metre for high-quality finishes. A typical rear extension costs £40,000-£80,000. Contact Hampstead Renovations for a free detailed quote.',
    category: 'cost',
    localVariations: [
      'extension cost Hampstead',
      'house extension price NW3',
      'extension builder cost Highgate',
    ],
    relatedQuestions: [
      'How long does an extension take?',
      'Do I need planning permission for an extension?',
      'What adds most value to a house?',
    ],
    seoKeywords: ['extension cost', 'house extension price', 'cost of extension', 'extension cost per sqm'],
  },
  {
    slug: 'cost-of-loft-conversion',
    question: 'How much does a loft conversion cost?',
    answer: 'Loft conversions in North London typically cost £40,000-£70,000 for a dormer conversion, or £60,000-£100,000+ for an L-shaped dormer. Prices depend on size and specification. Hampstead Renovations offers free surveys and quotes for loft conversions.',
    category: 'cost',
    localVariations: [
      'loft conversion cost Hampstead',
      'loft conversion price NW3',
      'dormer loft Highgate cost',
    ],
    relatedQuestions: [
      'Do I need planning for a loft conversion?',
      'How long does a loft conversion take?',
      'Does a loft conversion add value?',
    ],
    seoKeywords: ['loft conversion cost', 'loft conversion price', 'dormer cost', 'loft extension cost'],
  },
  {
    slug: 'cost-of-boiler-replacement',
    question: 'How much does a new boiler cost?',
    answer: 'A new boiler installation in North London typically costs £2,000-£4,500 including fitting. Combi boilers are at the lower end, while system boilers with cylinders cost more. Hampstead Renovations offers free boiler surveys and competitive quotes across NW London.',
    category: 'cost',
    localVariations: [
      'boiler replacement cost Hampstead',
      'new boiler price NW3',
      'boiler installation cost Highgate',
    ],
    relatedQuestions: [
      'What type of boiler do I need?',
      'How long does boiler installation take?',
      'Are boilers covered by warranty?',
    ],
    seoKeywords: ['boiler cost', 'new boiler price', 'boiler installation cost', 'combi boiler cost'],
  },
  {
    slug: 'cost-of-bathroom-renovation',
    question: 'How much does a bathroom renovation cost?',
    answer: 'Bathroom renovations in North London typically cost £5,000-£15,000 for a standard bathroom, or £15,000-£30,000+ for a luxury finish with high-end fixtures. This includes all labour, materials, and plumbing. Free quotes from Hampstead Renovations.',
    category: 'cost',
    localVariations: [
      'bathroom renovation cost Hampstead',
      'bathroom refit price NW3',
      'bathroom cost Highgate',
    ],
    relatedQuestions: [
      'How long does a bathroom renovation take?',
      'Do you supply bathroom fixtures?',
      'Can you fit underfloor heating?',
    ],
    seoKeywords: ['bathroom renovation cost', 'bathroom refit cost', 'bathroom installation cost', 'bathroom price'],
  },
  {
    slug: 'cost-of-kitchen-renovation',
    question: 'How much does a kitchen renovation cost?',
    answer: 'Kitchen renovations in North London typically cost £10,000-£20,000 for mid-range, or £25,000-£50,000+ for a high-end kitchen. This includes units, worktops, appliances, plumbing, and electrics. Hampstead Renovations provides free kitchen design consultations.',
    category: 'cost',
    localVariations: [
      'kitchen renovation cost Hampstead',
      'new kitchen price NW3',
      'kitchen fitting cost Highgate',
    ],
    relatedQuestions: [
      'How long does a kitchen renovation take?',
      'Can you remove a wall in my kitchen?',
      'Do you supply kitchens?',
    ],
    seoKeywords: ['kitchen renovation cost', 'new kitchen cost', 'kitchen fitting cost', 'kitchen price'],
  },

  // ==================== PLUMBING QUESTIONS ====================
  {
    slug: 'fix-dripping-tap',
    question: 'How do I fix a dripping tap?',
    answer: 'A dripping tap usually needs a new washer or cartridge. Turn off water supply, remove the tap head, replace the washer (£2-5 part) and reassemble. If unsure, call Hampstead Renovations - we fix dripping taps across Hampstead and North London from just £75.',
    category: 'plumbing',
    localVariations: [
      'fix tap Hampstead',
      'dripping tap NW3',
      'tap repair Highgate',
    ],
    relatedQuestions: [
      'Why does my tap keep dripping?',
      'How much to fix a dripping tap?',
      'Should I replace my tap?',
    ],
    seoKeywords: ['fix dripping tap', 'stop tap dripping', 'leaking tap repair', 'dripping tap fix'],
  },
  {
    slug: 'unblock-toilet',
    question: 'How do I unblock a toilet?',
    answer: 'Try a plunger first - create a seal and push firmly. For stubborn blocks, use a toilet auger. Hot water and dish soap can help. If these don\'t work, call Hampstead Renovations for professional toilet unblocking across North London - we respond same day.',
    category: 'plumbing',
    localVariations: [
      'unblock toilet Hampstead',
      'blocked toilet NW3',
      'toilet blockage Highgate',
    ],
    relatedQuestions: [
      'What causes toilet blockages?',
      'Is a blocked toilet an emergency?',
      'How much does toilet unblocking cost?',
    ],
    seoKeywords: ['unblock toilet', 'blocked toilet fix', 'toilet blockage', 'clogged toilet'],
  },
  {
    slug: 'low-water-pressure-fix',
    question: 'How do I fix low water pressure?',
    answer: 'Check if the issue is one tap (clean aerator) or whole house (check stopcock is fully open). Check for leaks and call your water company if it\'s a supply issue. For persistent problems, Hampstead Renovations can diagnose and fix water pressure issues across North London.',
    category: 'plumbing',
    localVariations: [
      'water pressure Hampstead',
      'low pressure NW3',
      'weak shower Highgate',
    ],
    relatedQuestions: [
      'Why is my water pressure low?',
      'Can a pump fix low water pressure?',
      'How much does a pressure pump cost?',
    ],
    seoKeywords: ['low water pressure', 'fix water pressure', 'weak water pressure', 'increase water pressure'],
  },

  // ==================== HEATING QUESTIONS ====================
  {
    slug: 'bleed-radiator',
    question: 'How do I bleed a radiator?',
    answer: 'Turn off heating, locate the bleed valve (usually top corner), use a radiator key to slowly open it, let air escape until water appears, close the valve, and check boiler pressure. Hampstead Renovations can service your entire heating system across North London.',
    category: 'heating',
    localVariations: [
      'bleed radiator Hampstead',
      'radiator cold NW3',
      'air in radiator Highgate',
    ],
    relatedQuestions: [
      'Why is my radiator cold at the top?',
      'How often should I bleed radiators?',
      'Do I need to repressurise after bleeding?',
    ],
    seoKeywords: ['bleed radiator', 'how to bleed radiator', 'radiator bleeding', 'cold radiator fix'],
  },
  {
    slug: 'repressurise-boiler',
    question: 'How do I repressurise my boiler?',
    answer: 'Locate the filling loop (usually under the boiler), open both valves slowly until pressure reaches 1-1.5 bar, close valves, and reset if needed. If pressure keeps dropping, you may have a leak. Hampstead Renovations offers boiler services across North London.',
    category: 'heating',
    localVariations: [
      'boiler pressure Hampstead',
      'repressurise boiler NW3',
      'boiler pressure low Highgate',
    ],
    relatedQuestions: [
      'Why does my boiler lose pressure?',
      'What should boiler pressure be?',
      'Is low boiler pressure dangerous?',
    ],
    seoKeywords: ['repressurise boiler', 'boiler pressure', 'low boiler pressure', 'filling loop'],
  },
  {
    slug: 'boiler-making-noise',
    question: 'Why is my boiler making noise?',
    answer: 'Boiler noises can indicate: kettling (rumbling = limescale), banging (water hammer), whistling (air in system), or gurgling (low pressure). Some noises indicate urgent issues. Hampstead Renovations provides expert boiler diagnosis across Hampstead and North London.',
    category: 'heating',
    localVariations: [
      'noisy boiler Hampstead',
      'boiler banging NW3',
      'boiler whistling Highgate',
    ],
    relatedQuestions: [
      'Is a noisy boiler dangerous?',
      'What is boiler kettling?',
      'How much does boiler repair cost?',
    ],
    seoKeywords: ['noisy boiler', 'boiler making noise', 'boiler banging', 'boiler kettling'],
  },

  // ==================== RENOVATION QUESTIONS ====================
  {
    slug: 'planning-permission-extension',
    question: 'Do I need planning permission for an extension?',
    answer: 'Many extensions fall under Permitted Development and don\'t need planning permission. However, conservation areas (like parts of Hampstead and Highgate) have restrictions. Hampstead Renovations handles all planning applications and can advise on what\'s possible for your property.',
    category: 'renovation',
    localVariations: [
      'planning permission Hampstead',
      'extension planning NW3',
      'permitted development Highgate',
    ],
    relatedQuestions: [
      'What is permitted development?',
      'How long does planning take?',
      'Can I extend in a conservation area?',
    ],
    seoKeywords: ['planning permission extension', 'permitted development', 'do I need planning', 'extension planning'],
  },
  {
    slug: 'planning-permission-loft',
    question: 'Do I need planning permission for a loft conversion?',
    answer: 'Most loft conversions fall under Permitted Development if they meet certain criteria (50 cubic metres for terraced, 40 for semi/detached). Conservation areas and listed buildings have different rules. Hampstead Renovations handles planning for loft conversions across North London.',
    category: 'renovation',
    localVariations: [
      'loft planning Hampstead',
      'loft conversion planning NW3',
      'dormer planning Highgate',
    ],
    relatedQuestions: [
      'What are loft conversion requirements?',
      'Can I do a loft conversion on my house?',
      'Do I need building regulations for a loft?',
    ],
    seoKeywords: ['loft conversion planning', 'planning permission loft', 'dormer planning permission', 'loft building regulations'],
  },
  {
    slug: 'how-long-extension',
    question: 'How long does a house extension take?',
    answer: 'A typical single-storey rear extension takes 12-16 weeks. Double-storey extensions take 16-24 weeks. Side return extensions take 8-12 weeks. Timelines depend on complexity and weather. Hampstead Renovations provides detailed project schedules for all work.',
    category: 'renovation',
    localVariations: [
      'extension timeline Hampstead',
      'how long extension NW3',
      'extension duration Highgate',
    ],
    relatedQuestions: [
      'What slows down an extension?',
      'Can I live at home during an extension?',
      'What time of year is best for extensions?',
    ],
    seoKeywords: ['extension timeline', 'how long extension takes', 'extension duration', 'extension build time'],
  },

  // ==================== GENERAL QUESTIONS ====================
  {
    slug: 'when-boiler-service',
    question: 'When should I service my boiler?',
    answer: 'Boilers should be serviced annually, ideally before winter (September-October is ideal). Regular servicing maintains efficiency, ensures safety, and is usually required to keep warranties valid. Book your boiler service with Hampstead Renovations today.',
    category: 'general',
    localVariations: [
      'boiler service Hampstead',
      'annual boiler service NW3',
      'gas safety check Highgate',
    ],
    relatedQuestions: [
      'How much does a boiler service cost?',
      'What does a boiler service include?',
      'How often gas safety check?',
    ],
    seoKeywords: ['boiler service', 'annual boiler service', 'when service boiler', 'boiler maintenance'],
  },
  {
    slug: 'rewiring-house',
    question: 'When does a house need rewiring?',
    answer: 'Houses typically need rewiring every 25-30 years. Signs you need rewiring include: old round pin sockets, fabric-covered cables, no RCD protection, frequent tripping, or burning smells. Hampstead Renovations provides full rewiring services with minimal disruption.',
    category: 'electrical',
    localVariations: [
      'rewiring Hampstead',
      'house rewire NW3',
      'electrical rewiring Highgate',
    ],
    relatedQuestions: [
      'How much does rewiring cost?',
      'How long does rewiring take?',
      'Do I need to move out for rewiring?',
    ],
    seoKeywords: ['rewiring house', 'house rewire', 'when rewire house', 'rewiring signs'],
  },
  {
    slug: 'damp-or-condensation',
    question: 'How do I know if I have damp or condensation?',
    answer: 'Condensation appears on cold surfaces (windows, external walls) and wipes away. Rising damp shows as tide marks up to 1m high. Penetrating damp appears in patches after rain. Hampstead Renovations provides expert damp surveys and treatments across North London.',
    category: 'general',
    localVariations: [
      'damp survey Hampstead',
      'damp problem NW3',
      'condensation fix Highgate',
    ],
    relatedQuestions: [
      'How do I stop condensation?',
      'What causes rising damp?',
      'How much does damp treatment cost?',
    ],
    seoKeywords: ['damp or condensation', 'identify damp', 'damp survey', 'damp treatment'],
  },
];

// Helper functions
export function getQuestion(slug: string): VoiceSearchQuestion | undefined {
  return voiceSearchQuestions.find(q => q.slug === slug);
}

export function getQuestionsByCategory(category: VoiceSearchQuestion['category']): VoiceSearchQuestion[] {
  return voiceSearchQuestions.filter(q => q.category === category);
}

export function getAllQuestions(): VoiceSearchQuestion[] {
  return voiceSearchQuestions;
}

// Generate URL params for FAQ pages
export function generateFAQParams(): { slug: string }[] {
  return voiceSearchQuestions.map(q => ({ slug: q.slug }));
}

// Get related questions for internal linking
export function getRelatedQuestions(slug: string): VoiceSearchQuestion[] {
  const question = getQuestion(slug);
  if (!question) return [];
  
  return voiceSearchQuestions.filter(q => 
    question.relatedQuestions.some(rq => 
      q.question.toLowerCase().includes(rq.toLowerCase().split(' ').slice(0, 3).join(' '))
    )
  );
}

// Generate structured data for FAQ schema
export function generateFAQSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': voiceSearchQuestions.map(q => ({
      '@type': 'Question',
      'name': q.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': q.answer,
      },
    })),
  };
}
