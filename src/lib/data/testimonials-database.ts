// ============================================================================
// TESTIMONIALS HUB DATABASE
// Categorized customer reviews and success stories
// ============================================================================

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  locationSlug: string;
  service: string;
  serviceSlug: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  shortReview: string;
  fullReview: string;
  projectType?: string;
  datePublished: string;
  verified: boolean;
  source: 'google' | 'trustpilot' | 'direct' | 'checkatrade';
  images?: string[];
  response?: {
    responder: string;
    date: string;
    text: string;
  };
}

export interface TestimonialCategory {
  slug: string;
  name: string;
  description: string;
  services: string[];
}

export const testimonials: Testimonial[] = [
  // Boiler Installation Reviews
  {
    id: 'boiler-001',
    customerName: 'James T.',
    location: 'Hampstead',
    locationSlug: 'hampstead',
    service: 'Boiler Installation',
    serviceSlug: 'boiler-installation',
    rating: 5,
    title: 'Excellent new boiler installation',
    shortReview: 'Fantastic service from start to finish. New boiler installed within 3 days of enquiry.',
    fullReview: 'We needed to replace our 18-year-old boiler that finally gave up. Hampstead Renovations came out the same day to assess, provided a clear quote with options, and installed our new Worcester Bosch within 3 days. The engineer was professional, tidy, and explained everything clearly. Six months on and we\'re delighted - noticeably warmer house and lower gas bills. Highly recommend.',
    projectType: 'Boiler Replacement',
    datePublished: '2024-11-15',
    verified: true,
    source: 'google',
    response: {
      responder: 'Hampstead Renovations',
      date: '2024-11-16',
      text: 'Thank you James! We\'re glad the new Worcester Bosch is keeping you warm and saving money. Don\'t forget your first annual service is included!',
    },
  },
  {
    id: 'boiler-002',
    customerName: 'Sarah M.',
    location: 'Belsize Park',
    locationSlug: 'belsize-park',
    service: 'Boiler Installation',
    serviceSlug: 'boiler-installation',
    rating: 5,
    title: 'Brilliant advice saved us money',
    shortReview: 'They talked us out of an expensive system we didn\'t need and recommended something better suited.',
    fullReview: 'Initially quoted elsewhere for a large system boiler, but Hampstead Renovations assessed our actual hot water usage and recommended a smaller combi that would be perfect for our 2-bed flat. Saved us over £1,000 and the installation was flawless. Really appreciated the honest advice - they clearly prioritise what\'s right for the customer over making a bigger sale.',
    projectType: 'Combi Boiler Installation',
    datePublished: '2024-10-28',
    verified: true,
    source: 'trustpilot',
  },
  {
    id: 'boiler-003',
    customerName: 'Robert K.',
    location: 'Highgate',
    locationSlug: 'highgate',
    service: 'Boiler Repair',
    serviceSlug: 'boiler-repair',
    rating: 5,
    title: 'Emergency repair on Christmas Eve!',
    shortReview: 'Boiler broke down on Christmas Eve morning. Fixed by lunchtime!',
    fullReview: 'I couldn\'t believe it when our boiler stopped working on Christmas Eve with family arriving. Called Hampstead Renovations expecting an answering machine, but spoke to a real person who had an engineer at our door within 2 hours. Turned out to be a failed pump - they had the part on the van and had us back up and running before lunch. Fair price for emergency callout and saved our Christmas!',
    projectType: 'Emergency Boiler Repair',
    datePublished: '2024-12-26',
    verified: true,
    source: 'google',
    response: {
      responder: 'Hampstead Renovations',
      date: '2024-12-27',
      text: 'So glad we could help save Christmas, Robert! Our emergency team works 365 days a year for exactly these situations.',
    },
  },

  // Bathroom Renovation Reviews
  {
    id: 'bathroom-001',
    customerName: 'Emma W.',
    location: 'Crouch End',
    locationSlug: 'crouch-end',
    service: 'Bathroom Renovation',
    serviceSlug: 'bathroom-renovation',
    rating: 5,
    title: 'Dream bathroom completed on time',
    shortReview: 'Complete bathroom renovation finished exactly as promised. Stunning result!',
    fullReview: 'Had our 1970s avocado bathroom completely renovated. The team managed everything - plumbing, tiling, electrics, new suite. Communication was excellent with daily updates. They even spotted a potential damp issue behind the old tiles and fixed it as part of the project. The finished bathroom looks like something from a magazine. Three months later, everything working perfectly.',
    projectType: 'Full Bathroom Renovation',
    datePublished: '2024-09-18',
    verified: true,
    source: 'checkatrade',
  },
  {
    id: 'bathroom-002',
    customerName: 'David L.',
    location: 'Muswell Hill',
    locationSlug: 'muswell-hill',
    service: 'Bathroom Renovation',
    serviceSlug: 'bathroom-renovation',
    rating: 5,
    title: 'Wet room conversion exceeded expectations',
    shortReview: 'Converted small bathroom to wet room for elderly parent. Thoughtful, practical design.',
    fullReview: 'Needed to convert our ground floor bathroom to a wet room for my elderly mother who was struggling with the bath. The team designed a beautiful, practical space with grab rails that don\'t look institutional, a folding seat, and slip-resistant tiles. They thought of everything including lowering the shower controls. Mum loves it and it\'s given her back her independence. Worth every penny.',
    projectType: 'Wet Room Conversion',
    datePublished: '2024-08-22',
    verified: true,
    source: 'google',
  },

  // Kitchen Renovation Reviews
  {
    id: 'kitchen-001',
    customerName: 'Caroline H.',
    location: 'Swiss Cottage',
    locationSlug: 'swiss-cottage',
    service: 'Kitchen Renovation',
    serviceSlug: 'kitchen-renovation',
    rating: 5,
    title: 'Kitchen transformed in 2 weeks',
    shortReview: 'New kitchen fitted while we were on holiday. Came back to a complete transformation!',
    fullReview: 'We planned our kitchen renovation to coincide with our two-week holiday. Gave them keys and came back to a completely finished kitchen - new units, worktops, appliances, tiling, lighting, everything. The project management was incredible - they sent daily photos so we could see progress. Minor snag with one cabinet door was sorted within 48 hours of us returning. Couldn\'t be happier.',
    projectType: 'Full Kitchen Renovation',
    datePublished: '2024-07-30',
    verified: true,
    source: 'trustpilot',
  },

  // Emergency Plumbing Reviews
  {
    id: 'emergency-001',
    customerName: 'Michael P.',
    location: 'Kentish Town',
    locationSlug: 'kentish-town',
    service: 'Emergency Plumber',
    serviceSlug: 'emergency-plumber',
    rating: 5,
    title: 'Burst pipe at 2am - sorted quickly',
    shortReview: 'Pipe burst at 2am flooding the kitchen. Engineer arrived in 40 minutes.',
    fullReview: 'Woke at 2am to the sound of water. Pipe had burst under the kitchen sink and water was everywhere. Called the emergency number and engineer was at our door in 40 minutes. Had the water isolated, pipe repaired, and even helped us start mopping up. Fair price considering the time of night. They also came back the next day to check everything and gave us advice on preventing future issues.',
    projectType: 'Emergency Pipe Repair',
    datePublished: '2024-11-05',
    verified: true,
    source: 'google',
  },

  // Electrical Reviews
  {
    id: 'electrical-001',
    customerName: 'Helen G.',
    location: 'Camden',
    locationSlug: 'camden',
    service: 'Electrical Services',
    serviceSlug: 'electrical-services',
    rating: 5,
    title: 'Full rewire of Victorian terrace',
    shortReview: 'Rewired our 1890s house with minimal disruption. Neat, professional work.',
    fullReview: 'Our Victorian terrace needed a complete rewire - the old rubber cable was a fire waiting to happen. Hampstead Renovations managed the whole project brilliantly. They chased cables into walls where possible to minimise surface wiring, coordinated with our decorator, and left the house clean each evening. The new consumer unit with RCDs gives us real peace of mind. EICR came back with top marks.',
    projectType: 'Full House Rewire',
    datePublished: '2024-06-14',
    verified: true,
    source: 'checkatrade',
  },
  {
    id: 'electrical-002',
    customerName: 'Tom R.',
    location: 'Islington',
    locationSlug: 'islington',
    service: 'Electrical Services',
    serviceSlug: 'electrical-services',
    rating: 5,
    title: 'Consumer unit upgrade and EICR',
    shortReview: 'New fuse board fitted with full EICR. Very thorough work.',
    fullReview: 'Needed EICR for rental property and was advised the old fuse board needed upgrading. They explained everything clearly, gave a fair quote, and completed the work in one day. The new board has individual RCBOs for each circuit which is much safer. Passed the EICR with flying colours and tenants are happy knowing the electrics are now modern and safe.',
    projectType: 'Consumer Unit Upgrade',
    datePublished: '2024-10-02',
    verified: true,
    source: 'direct',
  },

  // Landlord Services Reviews
  {
    id: 'landlord-001',
    customerName: 'Property Management Ltd',
    location: 'North London',
    locationSlug: 'north-london',
    service: 'Landlord Services',
    serviceSlug: 'landlord-services',
    rating: 5,
    title: 'Reliable contractor for our portfolio',
    shortReview: 'Managing 50+ properties and they\'re our go-to for all gas, electrical, and plumbing.',
    fullReview: 'As a letting agent managing over 50 properties across North London, having reliable contractors is essential. Hampstead Renovations have been our primary contractor for 3 years. They handle all our Gas Safety certificates, EICRs, and emergency callouts. Response times are excellent, paperwork is always prompt, and they coordinate directly with tenants. Competitive rates and never had a complaint. Essential partner for our business.',
    projectType: 'Ongoing Property Maintenance',
    datePublished: '2024-09-25',
    verified: true,
    source: 'direct',
  },
  {
    id: 'landlord-002',
    customerName: 'Angela S.',
    location: 'Finchley',
    locationSlug: 'north-london',
    service: 'Landlord Services',
    serviceSlug: 'landlord-services',
    rating: 5,
    title: 'All certificates sorted in one visit',
    shortReview: 'Gas safe, EICR, and EPC all done in one day for my rental flat.',
    fullReview: 'First time landlord and was overwhelmed by all the certificates needed. Hampstead Renovations explained exactly what I needed, scheduled everything for one day, and had all the paperwork emailed to me within 48 hours. They even noticed the boiler was due a service and included that. Really took the stress out of getting compliant before my first tenant moved in.',
    projectType: 'Landlord Compliance Package',
    datePublished: '2024-08-08',
    verified: true,
    source: 'google',
  },
];

export const testimonialCategories: TestimonialCategory[] = [
  {
    slug: 'heating',
    name: 'Heating & Boiler Reviews',
    description: 'Customer reviews for boiler installation, repair, and heating services',
    services: ['boiler-installation', 'boiler-repair', 'central-heating', 'boiler-service'],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Reviews',
    description: 'Customer reviews for plumbing repairs and installations',
    services: ['emergency-plumber', 'leak-repair', 'pipe-repair', 'plumbing-services'],
  },
  {
    slug: 'bathroom',
    name: 'Bathroom Renovation Reviews',
    description: 'Customer reviews for bathroom renovations and installations',
    services: ['bathroom-renovation', 'wet-room', 'shower-installation'],
  },
  {
    slug: 'kitchen',
    name: 'Kitchen Renovation Reviews',
    description: 'Customer reviews for kitchen fitting and renovations',
    services: ['kitchen-renovation', 'kitchen-plumbing'],
  },
  {
    slug: 'electrical',
    name: 'Electrical Services Reviews',
    description: 'Customer reviews for electrical work and certificates',
    services: ['electrical-services', 'rewiring', 'eicr', 'consumer-unit'],
  },
  {
    slug: 'landlord',
    name: 'Landlord Services Reviews',
    description: 'Reviews from landlords and property managers',
    services: ['landlord-services', 'gas-safety-certificate', 'eicr-certificate'],
  },
  {
    slug: 'emergency',
    name: 'Emergency Services Reviews',
    description: 'Reviews for emergency callouts and urgent repairs',
    services: ['emergency-plumber', 'emergency-electrician', 'emergency-boiler'],
  },
];

// Helper functions
export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find(t => t.id === id);
}

export function getTestimonialsByLocation(locationSlug: string): Testimonial[] {
  return testimonials.filter(t => t.locationSlug === locationSlug);
}

export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return testimonials.filter(t => t.serviceSlug === serviceSlug);
}

export function getTestimonialsByCategory(categorySlug: string): Testimonial[] {
  const category = testimonialCategories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return testimonials.filter(t => category.services.includes(t.serviceSlug));
}

export function getFeaturedTestimonials(count: number = 6): Testimonial[] {
  return testimonials
    .filter(t => t.rating === 5)
    .slice(0, count);
}

export function getAverageRating(): number {
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((total / testimonials.length) * 10) / 10;
}

export function getTestimonialStats() {
  return {
    total: testimonials.length,
    averageRating: getAverageRating(),
    fiveStarCount: testimonials.filter(t => t.rating === 5).length,
    verifiedCount: testimonials.filter(t => t.verified).length,
    bySource: {
      google: testimonials.filter(t => t.source === 'google').length,
      trustpilot: testimonials.filter(t => t.source === 'trustpilot').length,
      checkatrade: testimonials.filter(t => t.source === 'checkatrade').length,
      direct: testimonials.filter(t => t.source === 'direct').length,
    },
  };
}

export function generateTestimonialPageParams(): { category: string }[] {
  return testimonialCategories.map(c => ({ category: c.slug }));
}

export function generateLocationTestimonialParams(): { location: string }[] {
  const locations = Array.from(new Set(testimonials.map(t => t.locationSlug)));
  return locations.map(l => ({ location: l }));
}

export function countTestimonialPages(): number {
  // Category pages + location pages + main page
  const locationCount = new Set(testimonials.map(t => t.locationSlug)).size;
  return testimonialCategories.length + locationCount + 1;
}
