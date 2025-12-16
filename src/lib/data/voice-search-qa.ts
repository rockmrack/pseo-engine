// ============================================================================
// PSEO ENGINE - VOICE SEARCH Q&A DATABASE
// Natural language questions optimized for voice search
// Idea 68: Voice Search Optimization Strategy
// ============================================================================

export interface VoiceSearchQA {
  slug: string;
  category: string;
  
  // The natural voice query
  voiceQuery: string;
  
  // Alternative phrasings (for matching)
  alternativeQueries: string[];
  
  // Direct answer (for featured snippet)
  directAnswer: string;
  
  // Extended answer
  fullAnswer: string;
  
  // Related service
  relatedService?: string;
  
  // Location specific?
  locationSpecific: boolean;
  locations?: string[];
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Follow-up questions
  relatedQuestions: string[];
}

export const voiceSearchQAs: VoiceSearchQA[] = [
  // ============================================================================
  // PLANNING PERMISSION QUESTIONS
  // ============================================================================
  {
    slug: 'planning-permission-garden-room-hampstead',
    category: 'planning',
    voiceQuery: 'Do I need planning permission for a garden room in Hampstead?',
    alternativeQueries: [
      'Hey Google, do I need planning permission for a garden room in Hampstead?',
      'Can I build a garden office without planning permission NW3?',
      'What are the rules for garden buildings in Hampstead?',
      'Garden room planning rules Hampstead',
    ],
    directAnswer: 'In most cases, no. Garden rooms under 2.5m high (eaves) and 15 square metres can be built under Permitted Development in Hampstead. However, in conservation areas like much of NW3, you may need to check Article 4 restrictions.',
    fullAnswer: `Building a garden room in Hampstead typically falls under Permitted Development rights, meaning you don't need planning permission if you meet these conditions:

**Standard Requirements:**
- Single storey only
- Maximum eaves height of 2.5 metres
- Maximum overall height of 3 metres (or 2.5m if within 2m of boundary)
- Not covering more than 50% of the garden
- Not used as primary accommodation

**Conservation Area Restrictions (NW3):**
Much of Hampstead falls within the Hampstead Conservation Area. Additional restrictions apply:
- Cannot be built forward of the principal elevation
- Some streets have Article 4 Directions removing PD rights entirely
- Materials should be sympathetic to the main property

**When You DO Need Permission:**
- If your property is listed
- If you want to exceed the size limits
- If your street has Article 4 Direction
- If you plan to use it as a separate dwelling

We recommend checking with Camden Council's planning portal or booking a pre-application consultation. We can handle this process for you.`,
    relatedService: 'garden-room',
    locationSpecific: true,
    locations: ['NW3', 'Hampstead'],
    metaTitle: 'Do I Need Planning Permission for a Garden Room in Hampstead? | 2024 Guide',
    metaDescription: 'Find out if you need planning permission for a garden room in Hampstead NW3. Conservation area rules, Permitted Development limits, and how to check.',
    relatedQuestions: [
      'How big can I build a garden room without planning?',
      'What is an Article 4 Direction?',
      'How much does a garden room cost in London?',
      'Do I need Building Regulations for a garden office?',
    ],
  },
  
  {
    slug: 'planning-permission-loft-conversion-nw3',
    category: 'planning',
    voiceQuery: 'Do I need planning permission for a loft conversion in NW3?',
    alternativeQueries: [
      'Can I convert my loft without planning permission?',
      'Loft conversion rules in Hampstead',
      'Do dormer windows need planning permission NW3?',
    ],
    directAnswer: 'It depends on the type. Velux/rooflight conversions typically don\'t need planning permission. However, dormer windows and mansard conversions in the Hampstead Conservation Area almost always require planning approval.',
    fullAnswer: `**Velux/Rooflight Conversions:**
Usually fall under Permitted Development. You can add rooflights to the rear roof slope without permission if they don't protrude more than 150mm.

**Dormer Windows:**
In Hampstead Conservation Area (most of NW3), rear dormers need planning permission. Front dormers are rarely permitted and side dormers are assessed case-by-case.

**Mansard Conversions:**
Always need planning permission as they change the roof profile. Camden Council has specific guidance on mansard design in conservation areas.

**What You ALWAYS Need:**
- Building Regulations approval (regardless of planning)
- Party Wall Agreement if you share walls with neighbours
- Structural engineer calculations

We handle all planning applications in NW3 and have a strong approval track record.`,
    relatedService: 'loft-conversion',
    locationSpecific: true,
    locations: ['NW3', 'Hampstead'],
    metaTitle: 'Loft Conversion Planning Permission NW3 | Do I Need It?',
    metaDescription: 'Do you need planning permission for a loft conversion in NW3 Hampstead? Dormer, Velux, and mansard rules explained. Conservation area requirements.',
    relatedQuestions: [
      'How long does loft conversion planning take?',
      'What is the best type of loft conversion for a Victorian house?',
      'How much does a loft conversion cost in Hampstead?',
    ],
  },

  // ============================================================================
  // COST QUESTIONS
  // ============================================================================
  {
    slug: 'cost-rewire-victorian-house-london',
    category: 'costs',
    voiceQuery: 'How much does it cost to rewire a Victorian house in London?',
    alternativeQueries: [
      'What is the cost of rewiring a house in London?',
      'Rewiring costs Victorian terrace',
      'How much to rewire a 4 bed house London?',
    ],
    directAnswer: 'Rewiring a Victorian house in London typically costs £8,000 to £15,000 for a standard 3-4 bedroom property. Larger houses or those needing extensive plastering repairs can cost £15,000 to £25,000.',
    fullAnswer: `**Typical Costs in North London (2024):**

| Property Size | Price Range |
|--------------|-------------|
| 2-bed flat | £4,000 - £7,000 |
| 3-bed terrace | £8,000 - £12,000 |
| 4-bed house | £12,000 - £18,000 |
| 5+ bed house | £15,000 - £25,000 |

**What Affects the Price:**
- Size and number of floors
- Number of sockets and circuits needed
- Accessibility (floorboards, plaster type)
- Consumer unit specification
- Making good / plastering afterwards

**What's Included:**
- New consumer unit with RCBOs
- Complete new wiring to all rooms
- Sockets, switches, and ceiling roses
- Smoke and heat detectors
- NICEIC certification
- Building Control notification

**What's Not Included:**
- Light fittings (we install customer-supplied)
- Full redecoration
- Smart home systems (available as upgrade)

Victorian houses often have more complex wiring routes due to solid walls and lath-and-plaster ceilings. We take care to minimise damage to period features.`,
    relatedService: 'rewiring',
    locationSpecific: false,
    metaTitle: 'Cost to Rewire a Victorian House London | 2024 Prices',
    metaDescription: 'How much does it cost to rewire a Victorian house in London? From £8,000-£25,000 depending on size. NICEIC electricians, updated 2024 prices.',
    relatedQuestions: [
      'How long does a house rewire take?',
      'Do I need to rewire my Victorian house?',
      'Can you rewire without damaging plaster?',
    ],
  },

  {
    slug: 'cost-bathroom-renovation-london',
    category: 'costs',
    voiceQuery: 'How much does a bathroom renovation cost in London?',
    alternativeQueries: [
      'What is the average cost of a new bathroom in London?',
      'Bathroom refit costs London',
      'How much for a luxury bathroom North London?',
    ],
    directAnswer: 'A bathroom renovation in London costs £8,000 to £15,000 for a basic refit, £15,000 to £25,000 for mid-range, and £25,000 to £45,000+ for a luxury bathroom with high-end fixtures.',
    fullAnswer: `**Bathroom Costs by Specification (2024):**

**Basic Refit (£8,000 - £15,000):**
- Replace suite (toilet, basin, bath/shower)
- Standard tiles and fittings
- Basic chrome fixtures
- Keep existing layout

**Mid-Range (£15,000 - £25,000):**
- Quality sanitaryware (Duravit, Villeroy & Boch)
- Walk-in shower with screen
- Underfloor heating
- Good quality tiles
- LED lighting

**High-End (£25,000 - £45,000+):**
- Premium brands (Victoria + Albert, Lefroy Brooks)
- Bespoke joinery/vanity
- Natural stone tiles
- Heated towel rails
- Smart controls
- Wet room conversion

**What Affects the Price:**
- Size of bathroom
- Moving plumbing (waste/supply)
- Structural changes
- Quality of fixtures
- Underfloor heating
- Steam shower or special features

We specialise in bathrooms for period properties, including Victorian and Edwardian homes where waste runs and joist directions need careful planning.`,
    relatedService: 'bathroom-installation',
    locationSpecific: false,
    metaTitle: 'Bathroom Renovation Cost London 2024 | Price Guide',
    metaDescription: 'How much does a bathroom renovation cost in London? From £8,000 basic to £45,000+ luxury. Updated 2024 prices from North London specialists.',
    relatedQuestions: [
      'How long does a bathroom renovation take?',
      'Can you move the toilet in a bathroom refit?',
      'Do I need Building Regulations for a new bathroom?',
    ],
  },

  // ============================================================================
  // TRADESPERSON QUESTIONS
  // ============================================================================
  {
    slug: 'find-trusted-builder-hampstead',
    category: 'finding-trades',
    voiceQuery: 'How do I find a trusted builder in Hampstead?',
    alternativeQueries: [
      'Best builders in NW3',
      'Recommended builders Hampstead',
      'How to check if a builder is legitimate',
    ],
    directAnswer: 'Look for builders with verifiable reviews on Google, Checkatrade, or Houzz. Check they have public liability insurance, ask for references from recent local projects, and ensure they provide detailed written quotes.',
    fullAnswer: `**How to Find a Trusted Builder:**

**1. Check Credentials:**
- Public liability insurance (minimum £2m)
- Employer's liability if they have staff
- Relevant trade body memberships (FMB, NHBC)
- Gas Safe registration (for heating work)
- NICEIC/NAPIT (for electrical work)

**2. Verify Reviews:**
- Google Business reviews
- Checkatrade (where reviews are verified)
- Houzz (for high-end work)
- Ask for references from recent projects

**3. Get Multiple Quotes:**
- At least 3 detailed written quotes
- Compare like-for-like specifications
- Beware quotes significantly lower than others

**4. Ask the Right Questions:**
- Who will manage the project day-to-day?
- Do you use subcontractors?
- What warranties do you provide?
- Can I see similar completed projects?

**5. Red Flags to Avoid:**
- Cash-only requests
- No written contract
- Asking for large upfront payments
- Pressure to sign immediately
- No physical business address

We're happy to provide references from recent projects in Hampstead and our insurance documentation on request.`,
    relatedService: undefined,
    locationSpecific: true,
    locations: ['Hampstead', 'NW3'],
    metaTitle: 'How to Find a Trusted Builder in Hampstead | Expert Advice',
    metaDescription: 'Looking for a trusted builder in Hampstead NW3? Our guide covers credentials to check, questions to ask, and red flags to avoid.',
    relatedQuestions: [
      'What insurance should a builder have?',
      'How much deposit should I pay a builder?',
      'What should be in a building contract?',
    ],
  },

  // ============================================================================
  // EMERGENCY QUESTIONS
  // ============================================================================
  {
    slug: 'emergency-plumber-hampstead-24-hour',
    category: 'emergency',
    voiceQuery: 'Is there a 24 hour emergency plumber near Hampstead?',
    alternativeQueries: [
      'Emergency plumber NW3',
      'Burst pipe plumber Hampstead',
      'Sunday plumber near me Hampstead',
    ],
    directAnswer: 'Yes. Hampstead Renovations offers 24/7 emergency plumbing in NW3 and surrounding areas. Call 020 7123 4567 for same-day response to burst pipes, leaks, and boiler breakdowns.',
    fullAnswer: `**Our Emergency Plumbing Service:**

**Available 24/7** for genuine emergencies including:
- Burst pipes
- Major leaks
- No hot water/heating
- Blocked drains causing flooding
- Gas leaks (we're Gas Safe registered)

**Response Times:**
- Hampstead NW3: Usually within 1-2 hours
- Surrounding areas: 2-3 hours
- We always give an honest ETA

**What to Do Before We Arrive:**
1. **Burst pipe:** Turn off stopcock (usually under kitchen sink)
2. **Leak:** Put buckets under and turn off water
3. **No heating:** Check thermostat and reset boiler
4. **Gas smell:** Open windows, don't use switches, evacuate if strong

**Emergency Callout Costs:**
- Standard hours (8am-6pm weekdays): from £95
- Evening/Saturday: from £125
- Sunday/Bank Holiday: from £150

All prices plus VAT and parts. We don't charge for call-outs that turn out to be simple fixes.

**Call us now: 020 7123 4567**`,
    relatedService: 'emergency-plumber',
    locationSpecific: true,
    locations: ['Hampstead', 'NW3', 'North London'],
    metaTitle: '24 Hour Emergency Plumber Hampstead NW3 | Call Now',
    metaDescription: 'Emergency plumber in Hampstead available 24/7. Burst pipes, leaks, boiler breakdowns. 1-2 hour response in NW3. Call 020 7123 4567.',
    relatedQuestions: [
      'Where is my stopcock?',
      'How much does an emergency plumber cost?',
      'What counts as a plumbing emergency?',
    ],
  },

  // ============================================================================
  // CONSERVATION QUESTIONS
  // ============================================================================
  {
    slug: 'conservation-area-rules-hampstead',
    category: 'planning',
    voiceQuery: 'What are the conservation area rules in Hampstead?',
    alternativeQueries: [
      'Hampstead conservation area restrictions',
      'Can I change windows in conservation area NW3?',
      'What can I do without permission in Hampstead conservation area?',
    ],
    directAnswer: 'In Hampstead Conservation Area, you need planning permission for most external changes including new windows, doors, and extensions. Internal alterations usually don\'t need permission unless the building is listed.',
    fullAnswer: `**Hampstead Conservation Area: What You Need to Know**

**Things That USUALLY Need Permission:**
- Replacing windows (especially to front elevation)
- Changing front door
- Any extension
- Roof alterations including dormers
- Satellite dishes visible from street
- Changes to front boundary walls/railings

**Things Usually PERMITTED:**
- Internal alterations (unless listed)
- Like-for-like repairs
- Rear extensions under Permitted Development (with conditions)
- Some rear roof lights

**Special Considerations:**
- **Article 4 Directions:** Many NW3 streets have these, removing even more Permitted Development rights
- **Listed Buildings:** Need Listed Building Consent for everything, internal and external
- **Trees:** Need council permission to cut trees over certain size

**Our Conservation Area Experience:**
We've completed dozens of projects in Hampstead Conservation Area. We understand what Camden Council planners look for and design schemes that respect historic character while meeting modern needs.

**Top Tip:** Check Camden's planning portal for your property before starting any work. Better yet, book a pre-application meeting with the planning department.`,
    relatedService: undefined,
    locationSpecific: true,
    locations: ['Hampstead', 'NW3'],
    metaTitle: 'Hampstead Conservation Area Rules | What You Can & Can\'t Do',
    metaDescription: 'Conservation area rules in Hampstead NW3. What needs planning permission, Article 4 directions, and how to work within the restrictions.',
    relatedQuestions: [
      'Can I replace windows in a conservation area?',
      'What is an Article 4 Direction?',
      'Do I need permission for a rear extension in conservation area?',
    ],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getVoiceSearchQABySlug(slug: string): VoiceSearchQA | undefined {
  return voiceSearchQAs.find(qa => qa.slug === slug);
}

export function getAllVoiceSearchSlugs(): string[] {
  return voiceSearchQAs.map(qa => qa.slug);
}

export function getVoiceSearchQAsByCategory(category: string): VoiceSearchQA[] {
  return voiceSearchQAs.filter(qa => qa.category === category);
}

export function getVoiceSearchQAsByLocation(location: string): VoiceSearchQA[] {
  return voiceSearchQAs.filter(qa => 
    qa.locationSpecific && qa.locations?.some(loc => 
      loc.toLowerCase().includes(location.toLowerCase())
    )
  );
}

// Generate speakable schema for voice search
export function generateSpeakableSchema(qa: VoiceSearchQA) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: qa.metaTitle,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.direct-answer', '.voice-query'],
    },
    mainEntity: {
      '@type': 'Question',
      name: qa.voiceQuery,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.directAnswer,
      },
    },
  };
}
