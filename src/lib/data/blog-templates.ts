// ============================================================================
// BLOG CONTENT TEMPLATES
// Auto-generates SEO blog posts targeting informational keywords
// ============================================================================

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  tags: string[];
  readTime: number;
  publishDate: string;
  sections: {
    heading: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BlogTemplate {
  titleTemplate: string;
  slug: string;
  category: string;
  tags: string[];
  intro: string;
  sections: {
    heading: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

// Property type content variations
const propertyTypes = [
  'Victorian Terrace',
  'Edwardian House',
  'Georgian Townhouse',
  'Period Conversion',
  'Modern Apartment',
  '1930s Semi',
];

export const blogTemplates: BlogTemplate[] = [
  // Plumbing topics
  {
    titleTemplate: 'Common Plumbing Problems in {propertyType}s and How to Fix Them',
    slug: 'plumbing-problems-{propertyType}',
    category: 'Plumbing',
    tags: ['plumbing', 'home maintenance', 'diy tips'],
    intro: 'Living in a {propertyType} comes with its unique charm, but also specific plumbing challenges. Understanding these issues can save you time, money, and prevent water damage to your beautiful home.',
    sections: [
      {
        heading: 'Lead Pipes: A Common Issue in Older Properties',
        content: 'Many {propertyType}s in North London still have original lead pipework. While not immediately dangerous, we recommend gradual replacement during renovation works. Signs include a bluish tinge to water and low pressure.',
      },
      {
        heading: 'Low Water Pressure Solutions',
        content: 'Period properties often suffer from low water pressure due to narrow pipe diameters and scale buildup. Solutions include fitting a water pressure booster, descaling existing pipes, or upgrading to modern 22mm pipework.',
      },
      {
        heading: 'Preventing Frozen Pipes in Winter',
        content: '{propertyType}s can have pipes in vulnerable locations like unheated cellars or external walls. Lagging pipes, maintaining low heating during cold spells, and knowing your stopcock location are essential preventive measures.',
      },
      {
        heading: 'When to Call a Professional',
        content: 'While minor issues can be DIY, always call a qualified plumber for gas work, major leaks, or anything involving your mains supply. Our engineers are Gas Safe registered and have specific experience with period properties.',
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to replace lead pipes in a {propertyType}?',
        answer: 'Full lead pipe replacement in a typical {propertyType} costs between £1,500 and £3,500 depending on accessibility and the extent of pipework. Many customers opt for gradual replacement during other renovation work.',
      },
      {
        question: 'Is my water safe if I have lead pipes?',
        answer: 'Modern water treatment largely neutralises lead risk, but we recommend running the tap for 30 seconds before drinking if water has been standing. For peace of mind, replacement is the best long-term solution.',
      },
    ],
  },

  // Boiler topics
  {
    titleTemplate: 'Best Boilers for {propertyType}s: A Complete Guide',
    slug: 'best-boilers-{propertyType}',
    category: 'Heating',
    tags: ['boilers', 'heating', 'energy efficiency'],
    intro: 'Choosing the right boiler for your {propertyType} is crucial for efficiency, comfort, and keeping those energy bills manageable. This guide covers everything you need to know.',
    sections: [
      {
        heading: 'Combi vs System Boilers: Which is Right?',
        content: 'For most {propertyType}s with 1-2 bathrooms, a modern combi boiler offers the best balance of efficiency and convenience. Larger properties with multiple bathrooms may benefit from a system boiler with unvented cylinder.',
      },
      {
        heading: 'Sizing Your Boiler Correctly',
        content: '{propertyType}s often have high ceilings and solid walls, which affects heat loss calculations. A typical 3-bed {propertyType} usually needs a 30-35kW boiler, but we always recommend a proper heat loss survey.',
      },
      {
        heading: 'Top Boiler Brands We Recommend',
        content: 'For {propertyType}s in North London, we most often install Worcester Bosch, Vaillant, and Viessmann. These brands offer excellent reliability, efficiency ratings over 90%, and comprehensive warranties up to 10 years.',
      },
      {
        heading: 'Installation Considerations',
        content: 'In period properties, flue routing can be challenging due to heritage restrictions. We specialise in concealed installations and working with conservation officers when needed.',
      },
    ],
    faqs: [
      {
        question: 'How long does boiler installation take in a {propertyType}?',
        answer: 'A straightforward like-for-like swap takes 1 day. If relocating the boiler or upgrading from a back boiler, allow 2-3 days including making good.',
      },
      {
        question: 'What size boiler do I need for a 4-bedroom {propertyType}?',
        answer: 'A 4-bed {propertyType} typically requires a 35-40kW combi or a system boiler with 200L+ cylinder. We provide free surveys to calculate your exact requirements.',
      },
    ],
  },

  // Bathroom topics
  {
    titleTemplate: 'Bathroom Renovation Ideas for {propertyType}s',
    slug: 'bathroom-renovation-{propertyType}',
    category: 'Bathrooms',
    tags: ['bathroom', 'renovation', 'interior design'],
    intro: 'A well-designed bathroom can add significant value to your {propertyType} while creating a luxurious daily retreat. Here are our top ideas for period-sympathetic yet modern bathroom renovations.',
    sections: [
      {
        heading: 'Preserving Period Character',
        content: 'In a {propertyType}, consider features like high-level cisterns, roll-top baths, and traditional radiators. These elements complement the architecture while modern internals ensure efficiency.',
      },
      {
        heading: 'Maximising Space in Compact Bathrooms',
        content: 'Many {propertyType}s have smaller bathrooms. Wall-hung toilets, corner basins, and walk-in showers can make the most of limited space without feeling cramped.',
      },
      {
        heading: 'Underfloor Heating: A Worthy Investment',
        content: 'Electric underfloor heating is perfect for bathroom renovations in {propertyType}s. Installation is straightforward during a refit, and running costs are minimal for the comfort gained.',
      },
      {
        heading: 'Ventilation Solutions',
        content: 'Proper ventilation prevents damp and mould, especially important in older properties. We recommend humidity-sensing extractor fans that activate automatically.',
      },
    ],
    faqs: [
      {
        question: 'How much does a bathroom renovation cost in a {propertyType}?',
        answer: 'A full bathroom renovation in a {propertyType} typically costs £6,000-£15,000 depending on specification. This includes all plumbing, tiling, sanitaryware, and labour.',
      },
      {
        question: 'How long does a bathroom renovation take?',
        answer: 'Allow 2-3 weeks for a complete bathroom renovation. This includes strip-out, plumbing first fix, waterproofing, tiling, and final installation.',
      },
    ],
  },

  // Electrical topics
  {
    titleTemplate: 'Electrical Safety in {propertyType}s: What You Need to Know',
    slug: 'electrical-safety-{propertyType}',
    category: 'Electrical',
    tags: ['electrical', 'safety', 'rewiring'],
    intro: 'Many {propertyType}s in North London have original or ageing electrical systems. Understanding the signs of electrical problems and when to rewire could protect your property and family.',
    sections: [
      {
        heading: 'Signs Your {propertyType} Needs Rewiring',
        content: 'Look out for: old round-pin sockets, fabric-covered cables, frequent fuse trips, burning smells, or a dated fuse box without RCDs. If your property hasnt been rewired in 25+ years, an inspection is wise.',
      },
      {
        heading: 'Understanding Your Consumer Unit',
        content: 'Modern {propertyType}s should have a consumer unit with MCBs and RCDs for safety. If you still have a fuse board with rewirable fuses, this should be upgraded as a priority.',
      },
      {
        heading: 'Adding Sockets Without Full Rewire',
        content: 'Sometimes you can add circuits without complete rewiring. A qualified electrician can assess whether your existing installation can accommodate new socket runs safely.',
      },
      {
        heading: 'Smart Home Integration',
        content: 'When rewiring a {propertyType}, consider future-proofing with smart home infrastructure. Data cabling, smart lighting circuits, and EV charger preparation add value and convenience.',
      },
    ],
    faqs: [
      {
        question: 'How much does rewiring a {propertyType} cost?',
        answer: 'Full rewiring of a 3-bed {propertyType} typically costs £4,000-£6,000 including a new consumer unit. Price varies based on accessibility and number of circuits required.',
      },
      {
        question: 'Do I need to move out during rewiring?',
        answer: 'Not usually. We work room by room and ensure youve have power and lighting each evening. Most rewires take 5-7 days for a typical {propertyType}.',
      },
    ],
  },

  // Seasonal topics
  {
    titleTemplate: 'Preparing Your {propertyType} for Winter: Essential Checklist',
    slug: 'winter-prep-{propertyType}',
    category: 'Seasonal',
    tags: ['winter', 'home maintenance', 'heating'],
    intro: 'North London winters can be harsh on {propertyType}s. Taking preventive action in autumn can save costly repairs and keep your home warm and efficient throughout the cold months.',
    sections: [
      {
        heading: 'Boiler Service: Your First Priority',
        content: 'Book your annual boiler service before the rush. A well-maintained boiler is less likely to break down on the coldest day of the year and runs more efficiently.',
      },
      {
        heading: 'Bleeding Radiators and Balancing Your System',
        content: 'Air in radiators reduces efficiency. Bleeding them takes minutes but can significantly improve heat output. If some rooms are warmer than others, your system may need balancing.',
      },
      {
        heading: 'Pipe Lagging and Frost Protection',
        content: '{propertyType}s often have pipes in vulnerable locations. Lagging exposed pipes in lofts, under floors, and in outbuildings prevents costly burst pipe emergencies.',
      },
      {
        heading: 'Checking Seals and Draught-Proofing',
        content: 'Inspect windows and doors for failed seals. Draught-proofing a {propertyType} can reduce heat loss by 20% without affecting the character of the property.',
      },
    ],
    faqs: [
      {
        question: 'When should I service my boiler?',
        answer: 'Ideally in early autumn (September-October) before the heating season. This ensures any issues are fixed before you need constant heating.',
      },
      {
        question: 'What temperature should I keep my {propertyType} in winter?',
        answer: 'We recommend maintaining at least 14°C when away to prevent frozen pipes. When home, 18-21°C is comfortable and efficient for most people.',
      },
    ],
  },
];

// Generate blog posts by combining templates with property types
export function generateBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  const baseDate = new Date('2024-01-15');

  blogTemplates.forEach((template, templateIndex) => {
    propertyTypes.forEach((propertyType, propIndex) => {
      const propertySlug = propertyType.toLowerCase().replace(/\s+/g, '-');
      const publishDate = new Date(baseDate);
      publishDate.setDate(publishDate.getDate() + (templateIndex * 6) + propIndex);

      const replaceProperty = (text: string) => text.replace(/{propertyType}/g, propertyType);

      posts.push({
        slug: template.slug.replace('{propertyType}', propertySlug),
        title: replaceProperty(template.titleTemplate),
        metaDescription: replaceProperty(template.intro).substring(0, 155) + '...',
        category: template.category,
        tags: template.tags,
        readTime: Math.ceil(
          (template.sections.reduce((acc, s) => acc + s.content.length, 0) + template.intro.length) / 1000
        ),
        publishDate: publishDate.toISOString().split('T')[0],
        sections: template.sections.map(s => ({
          heading: replaceProperty(s.heading),
          content: replaceProperty(s.content),
        })),
        faqs: template.faqs.map(f => ({
          question: replaceProperty(f.question),
          answer: replaceProperty(f.answer),
        })),
      });
    });
  });

  return posts;
}

export const blogPosts = generateBlogPosts();

// Index for O(1) lookup
const blogIndex = new Map<string, BlogPost>();
blogPosts.forEach(post => blogIndex.set(post.slug, post));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogIndex.get(slug);
}

export const allBlogSlugs = blogPosts.map(p => p.slug);
export const blogCategories = Array.from(new Set(blogPosts.map(p => p.category)));
