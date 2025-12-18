// ============================================================================
// PSEO ENGINE - FAQ DATABASE
// Data for /faqs/[category]/[topic] pages
// 10x SEO Expansion - Strategy 7
// ============================================================================

export interface FAQCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface FAQTopic {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  questions: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const faqCategories: FAQCategory[] = [
  {
    slug: 'renovation',
    name: 'Renovation',
    description: 'Everything you need to know about home renovation projects',
    icon: '🏠',
  },
  {
    slug: 'costs',
    name: 'Costs & Pricing',
    description: 'Understanding renovation costs, quotes, and budgets',
    icon: '💰',
  },
  {
    slug: 'planning',
    name: 'Planning & Permits',
    description: 'Planning permission, building regulations, and approvals',
    icon: '📋',
  },
  {
    slug: 'timeline',
    name: 'Timelines & Process',
    description: 'How long projects take and what to expect',
    icon: '⏱️',
  },
  {
    slug: 'materials',
    name: 'Materials & Quality',
    description: 'Material choices, quality standards, and suppliers',
    icon: '🧱',
  },
  {
    slug: 'hiring',
    name: 'Hiring Contractors',
    description: 'How to choose and work with builders',
    icon: '🤝',
  },
];

export const faqTopics: FAQTopic[] = [
  // RENOVATION CATEGORY
  {
    slug: 'full-house-renovation',
    name: 'Full House Renovation',
    categorySlug: 'renovation',
    description: 'Comprehensive guide to whole-house renovation projects',
    questions: [
      {
        question: 'What is included in a full house renovation?',
        answer: 'A full house renovation typically includes: structural repairs, complete rewiring, new plumbing, central heating upgrade, new kitchen and bathrooms, decoration throughout, new flooring, and any necessary repairs to windows, doors, and roofing. The scope is tailored to your property\'s needs.',
      },
      {
        question: 'Can I live in my house during a full renovation?',
        answer: 'It depends on the work scope. Minor renovations may allow you to stay, but major works involving structural changes, rewiring, or extensive plumbing usually require you to move out temporarily. We can advise based on your specific project and help phase work if needed.',
      },
      {
        question: 'How do I prepare my house for renovation?',
        answer: 'Preparation includes: clearing rooms of furniture and valuables, arranging temporary accommodation if needed, informing neighbors, securing parking permits for tradespeople, providing clear access, and gathering inspiration images and material samples for decision-making.',
      },
      {
        question: 'What happens first in a house renovation?',
        answer: 'Typically: 1) Strip out and demolition, 2) Structural work, 3) First-fix plumbing and electrical, 4) Plastering, 5) Second-fix electrics and plumbing, 6) Kitchen and bathroom fitting, 7) Decoration, 8) Final fixtures and snagging.',
      },
      {
        question: 'How much value does a full renovation add?',
        answer: 'A well-executed full renovation can add 15-30% to property value, sometimes more in prime locations. The key is quality work, good design choices, and ensuring all necessary certifications are in place. We can advise on value-adding priorities for your budget.',
      },
    ],
  },
  {
    slug: 'kitchen-renovation',
    name: 'Kitchen Renovation',
    categorySlug: 'renovation',
    description: 'Everything about kitchen design and renovation',
    questions: [
      {
        question: 'How long does a kitchen renovation take?',
        answer: 'A typical kitchen renovation takes 3-6 weeks from start to finish. Simple replacements take 1-2 weeks, while major works involving structural changes, extensions, or complete redesigns can take 6-10 weeks. We provide detailed timelines with every quote.',
      },
      {
        question: 'What is the best layout for a kitchen?',
        answer: 'The best layout depends on your space and needs. Popular options include: galley (efficient for narrow spaces), L-shaped (versatile), U-shaped (maximum storage), and open-plan with island (social cooking). We help design layouts that maximize functionality.',
      },
      {
        question: 'Should I choose a fitted or freestanding kitchen?',
        answer: 'Fitted kitchens maximize space and provide seamless storage, ideal for most homes. Freestanding suits larger period properties wanting flexibility and character. Many clients choose a combination - fitted units with freestanding statement pieces.',
      },
      {
        question: 'What kitchen worktop material is best?',
        answer: 'Popular choices include: Quartz (durable, low maintenance), Granite (natural beauty, heat resistant), Laminate (budget-friendly, versatile), Solid Surface (seamless, repairable), and Wood (warm, needs maintenance). We help you choose based on budget and lifestyle.',
      },
      {
        question: 'Do I need planning permission for a kitchen renovation?',
        answer: 'Standard kitchen renovations don\'t need planning permission. However, if you\'re extending, altering a listed building, or making changes in a conservation area, you may need approval. We handle all planning applications as part of our service.',
      },
    ],
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    categorySlug: 'renovation',
    description: 'Guide to bathroom design and renovation',
    questions: [
      {
        question: 'How long does a bathroom renovation take?',
        answer: 'A standard bathroom renovation takes 2-4 weeks. Simple suite replacements take 3-5 days, while complete renovations with layout changes can take 4-6 weeks. We minimize disruption by providing a clear schedule upfront.',
      },
      {
        question: 'What is a wet room and is it worth it?',
        answer: 'A wet room is a fully waterproofed bathroom where the shower is open without an enclosure. Benefits include: accessible for all abilities, easy to clean, space-efficient, and luxurious feel. They\'re ideal for smaller spaces and add value to properties.',
      },
      {
        question: 'Should I choose a bath or shower only?',
        answer: 'If space allows, having at least one bath in the house is advisable for resale value and families with children. For en-suites and second bathrooms, walk-in showers are popular and practical. We can help maximize space for both if desired.',
      },
      {
        question: 'What tiles are best for bathrooms?',
        answer: 'Porcelain tiles are ideal - they\'re water-resistant, durable, and come in endless designs including wood and stone effects. Ceramic tiles are more budget-friendly. Large format tiles create a sense of space and have fewer grout lines to clean.',
      },
      {
        question: 'Do I need building regulations for bathroom work?',
        answer: 'Electrical work in bathrooms must comply with Part P building regulations. Major structural changes may need approval. We ensure all work meets regulations and provide necessary certificates for your records and future sale.',
      },
    ],
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    categorySlug: 'renovation',
    description: 'Complete guide to loft conversions',
    questions: [
      {
        question: 'Can my loft be converted?',
        answer: 'Most lofts can be converted if there\'s at least 2.2m head height from joist to ridge. We\'ll assess: roof structure, available space, staircase options, and any planning constraints. A free survey will confirm feasibility and options for your property.',
      },
      {
        question: 'What types of loft conversion are there?',
        answer: 'Main types include: Velux/rooflight (simplest, roof windows only), Dormer (box-like extension for headroom), Hip-to-gable (extends hip roof to vertical wall), and Mansard (new roof structure with steep walls). Each suits different properties and budgets.',
      },
      {
        question: 'Do I need planning permission for a loft conversion?',
        answer: 'Many loft conversions fall under Permitted Development rights and don\'t need planning permission. However, you will need approval if: you\'re in a conservation area, it\'s a listed building, you exceed volume limits, or you\'re creating a balcony. We advise on requirements.',
      },
      {
        question: 'How long does a loft conversion take?',
        answer: 'A typical dormer loft conversion takes 8-12 weeks. Velux conversions take 4-6 weeks, while mansard conversions may take 10-16 weeks. Weather can affect timelines. We provide detailed schedules and keep you informed throughout.',
      },
      {
        question: 'Will a loft conversion add value to my house?',
        answer: 'A well-designed loft conversion can add 15-25% to property value, often more than the cost of conversion. Adding an en-suite bathroom increases value further. Location and quality of finish significantly impact return on investment.',
      },
    ],
  },
  // COSTS CATEGORY
  {
    slug: 'renovation-costs',
    name: 'Renovation Costs',
    categorySlug: 'costs',
    description: 'Understanding what renovations cost',
    questions: [
      {
        question: 'How much does a full house renovation cost?',
        answer: 'Full house renovation costs vary significantly based on property size, condition, and specification. Typical ranges: Standard (£800-1,200/sqm), Premium (£1,200-1,800/sqm), Luxury (£1,800-3,000+/sqm). A 3-bed terrace might cost £80,000-200,000+.',
      },
      {
        question: 'What is the cheapest way to renovate a house?',
        answer: 'Budget-friendly approaches: focus on high-impact areas (kitchen, bathroom, entrance), refresh rather than replace where possible, choose mid-range materials, keep the existing layout, do decorating yourself if able, and prioritize structural essentials over cosmetic upgrades.',
      },
      {
        question: 'How do I set a renovation budget?',
        answer: 'Steps to budget: 1) Get professional assessments of essential work, 2) Prioritize must-haves vs nice-to-haves, 3) Add 15-20% contingency for surprises, 4) Research material costs, 5) Get multiple quotes, 6) Consider phasing work if needed.',
      },
      {
        question: 'Why do renovation costs vary so much?',
        answer: 'Costs vary due to: property condition and access, material choices, specification level, structural work needed, location, market conditions, contractor experience, and project complexity. Detailed quotes should break down all costs transparently.',
      },
      {
        question: 'Should I get a fixed price or day rate?',
        answer: 'Fixed price contracts offer certainty for well-defined projects. Day rates suit uncertain scopes or ongoing maintenance. For renovations, we recommend fixed prices with clear specifications and a process for handling variations.',
      },
    ],
  },
  {
    slug: 'quotes-contracts',
    name: 'Quotes & Contracts',
    categorySlug: 'costs',
    description: 'Understanding quotes, contracts, and payments',
    questions: [
      {
        question: 'What should a building quote include?',
        answer: 'A proper quote should include: detailed scope of work, itemized costs (labor and materials), timeline, payment schedule, what\'s excluded, validity period, insurance details, warranty information, and terms and conditions. Beware of vague quotes.',
      },
      {
        question: 'How many quotes should I get?',
        answer: 'We recommend 3-4 quotes for major work. This provides comparison while not being overwhelming. Ensure quotes are like-for-like - same specifications and scope. The cheapest isn\'t always best; consider reputation, experience, and included services.',
      },
      {
        question: 'What payment schedule is normal for renovations?',
        answer: 'Typical schedules: 10-20% deposit, staged payments tied to milestones, 5-10% retention until completion. Never pay more than the value of completed work. Avoid contractors demanding large upfront payments - it\'s a red flag.',
      },
      {
        question: 'Do I need a written contract?',
        answer: 'Always use a written contract for significant work. It should cover: work scope, price, payment terms, timeline, variations process, dispute resolution, insurance requirements, and warranty. We provide comprehensive contracts protecting both parties.',
      },
      {
        question: 'What warranty should builders provide?',
        answer: 'Reputable builders provide: 10+ years on structural work, 5+ years on installations, manufacturer warranties on products. Ask about insurance-backed guarantees that protect you if the company ceases trading. We provide comprehensive warranty coverage.',
      },
    ],
  },
  // PLANNING CATEGORY
  {
    slug: 'planning-permission',
    name: 'Planning Permission',
    categorySlug: 'planning',
    description: 'Guide to planning permission requirements',
    questions: [
      {
        question: 'When do I need planning permission?',
        answer: 'Planning permission is typically needed for: extensions beyond permitted development limits, new buildings, change of use, listed building alterations, work in conservation areas, and significant external changes. Many improvements fall under permitted development rights.',
      },
      {
        question: 'What is permitted development?',
        answer: 'Permitted development allows certain building works without planning permission, subject to limits and conditions. This includes: single-storey rear extensions (up to 4m attached, 3m semi-detached), loft conversions (40-50 cubic meters), and internal alterations.',
      },
      {
        question: 'How long does planning permission take?',
        answer: 'Standard applications: 8 weeks. Larger or complex applications: 13 weeks. Pre-application advice: 4-6 weeks. Appeals: several months. Allow time for preparation before submission. We manage the entire planning process for clients.',
      },
      {
        question: 'What is a conservation area and how does it affect me?',
        answer: 'Conservation areas are designated to protect architectural or historic interest. Restrictions include: no permitted development for extensions, stricter rules on materials and design, protection of trees, and demolition controls. We have extensive conservation area experience.',
      },
      {
        question: 'What happens if I build without planning permission?',
        answer: 'Unauthorized development can result in: enforcement action requiring removal, difficulty selling property, mortgage issues, and neighbor disputes. If work is already done, you may apply retrospectively, but approval isn\'t guaranteed. Always check requirements first.',
      },
    ],
  },
  {
    slug: 'building-regulations',
    name: 'Building Regulations',
    categorySlug: 'planning',
    description: 'Understanding building regulations compliance',
    questions: [
      {
        question: 'What are building regulations?',
        answer: 'Building regulations are minimum standards for design, construction, and alterations ensuring buildings are safe, accessible, and energy-efficient. They cover: structure, fire safety, ventilation, drainage, electrical safety, and more. Compliance is legally required.',
      },
      {
        question: 'When do I need building regulations approval?',
        answer: 'Approval is needed for: extensions, structural alterations, new bathrooms, electrical work, new windows, heating systems, and many other works. Some competent person schemes allow self-certification. We ensure all work receives proper approval.',
      },
      {
        question: 'What is a building control completion certificate?',
        answer: 'A completion certificate confirms work meets building regulations. It\'s essential for: selling your property, insurance claims, remortgaging, and legal compliance. Without it, you may face difficulties and could be required to expose work for inspection.',
      },
      {
        question: 'What is a party wall agreement?',
        answer: 'The Party Wall Act requires you to notify neighbors before certain works near shared walls or boundaries. They can consent or appoint surveyors. Failing to follow procedures can result in injunctions and disputes. We advise on requirements and manage the process.',
      },
      {
        question: 'Do I need structural calculations?',
        answer: 'Structural calculations are required when altering the building\'s structure, including: removing walls, adding openings, loft conversions, extensions, and underpinning. A structural engineer provides calculations proving the design is safe.',
      },
    ],
  },
  // TIMELINE CATEGORY
  {
    slug: 'project-timelines',
    name: 'Project Timelines',
    categorySlug: 'timeline',
    description: 'How long different projects take',
    questions: [
      {
        question: 'How long does a typical home renovation take?',
        answer: 'Typical timelines: Bathroom - 2-4 weeks, Kitchen - 3-6 weeks, Loft conversion - 8-12 weeks, Extension - 10-16 weeks, Full renovation - 16-24 weeks. Timelines depend on project complexity, property access, and any required approvals.',
      },
      {
        question: 'What can delay a renovation project?',
        answer: 'Common delays: unexpected structural issues, planning/approval delays, supply chain problems, weather (for external work), client decision delays, and additional work requests. Good planning and contingency time help manage delays.',
      },
      {
        question: 'How do builders schedule work?',
        answer: 'Professional builders create detailed schedules showing: each phase, trade sequence, material deliveries, inspection dates, and milestones. They coordinate multiple trades to minimize idle time and maintain momentum. We share schedules and provide regular updates.',
      },
      {
        question: 'Can renovation work be done in phases?',
        answer: 'Yes, phasing can help manage budgets and disruption. Natural break points include: by room, by floor, or by type (structural then cosmetic). Some efficiency is lost, but phasing makes large projects more manageable. We help plan optimal phasing.',
      },
      {
        question: 'What is the best time of year to renovate?',
        answer: 'Internal work can be done year-round. For external work, spring and summer offer better conditions. Contractors are often busier in spring. Winter can offer better availability and sometimes better prices. Plan approval processes during winter for spring starts.',
      },
    ],
  },
  // HIRING CATEGORY
  {
    slug: 'choosing-builders',
    name: 'Choosing Builders',
    categorySlug: 'hiring',
    description: 'How to select the right builder',
    questions: [
      {
        question: 'How do I find a good builder?',
        answer: 'Best methods: personal recommendations from friends/family, trade association directories (FMB, Checkatrade), local reviews, visiting completed projects, and professional referrals from architects. Always verify credentials and get references.',
      },
      {
        question: 'What questions should I ask a builder?',
        answer: 'Key questions: How long in business? Can I see similar projects? References available? Who manages the project? What insurance do you have? How do you handle variations? What warranties do you offer? What\'s your payment schedule?',
      },
      {
        question: 'What certifications should builders have?',
        answer: 'Look for: relevant trade certifications (Gas Safe, NICEIC, etc.), trade association membership (FMB, TrustMark), public liability insurance, employer\'s liability insurance, and any specialist certifications for your project type.',
      },
      {
        question: 'Should I use a main contractor or manage trades myself?',
        answer: 'Main contractors offer: project management, coordinated scheduling, single point of responsibility, and often better trade rates. Self-managing suits simple projects if you have time and knowledge. For complex work, professional management reduces stress and risk.',
      },
      {
        question: 'What are red flags when hiring builders?',
        answer: 'Warning signs: large upfront payment requests, no written quote/contract, reluctance to provide references, no insurance documentation, significantly lowest quote, pressure to decide quickly, no fixed business address, and poor communication.',
      },
    ],
  },
];

// Helper functions
export function getFAQCategory(slug: string): FAQCategory | undefined {
  return faqCategories.find(c => c.slug === slug);
}

export function getFAQTopic(slug: string): FAQTopic | undefined {
  return faqTopics.find(t => t.slug === slug);
}

export function getFAQTopicsByCategory(categorySlug: string): FAQTopic[] {
  return faqTopics.filter(t => t.categorySlug === categorySlug);
}

export function generateFAQParams(): { category: string; topic: string }[] {
  return faqTopics.map(topic => ({
    category: topic.categorySlug,
    topic: topic.slug,
  }));
}

export function countFAQPages(): number {
  return faqTopics.length;
}
