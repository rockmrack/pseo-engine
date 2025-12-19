// ============================================================================
// PSEO ENGINE - SEASONAL & URGENCY DATABASE
// 500x SEO Expansion - Seasonal service targeting
// ============================================================================

export interface Season {
  slug: string;
  name: string;
  months: string[];
  urgentServices: string[];
  popularProjects: string[];
  seoKeywords: string[];
  callToAction: string;
  weatherConcerns: string[];
}

export interface UrgencyType {
  slug: string;
  name: string;
  responseTime: string;
  availability: string;
  surcharge: string;
  scenarios: string[];
  seoKeywords: string[];
}

export const seasons: Season[] = [
  {
    slug: 'winter',
    name: 'Winter',
    months: ['December', 'January', 'February'],
    urgentServices: [
      'Boiler repair and servicing',
      'Central heating repairs',
      'Frozen pipe repair',
      'Emergency plumbing',
      'Roof leak repairs',
      'Draught proofing',
      'Insulation installation',
      'Window repairs',
    ],
    popularProjects: [
      'Boiler replacement',
      'Radiator installation',
      'Loft insulation',
      'Secondary glazing',
      'Internal renovation',
      'Bathroom renovation',
      'Kitchen installation',
    ],
    seoKeywords: [
      'winter boiler repair',
      'emergency heating repair',
      'frozen pipes fix',
      'heating not working winter',
      'winter plumber',
      'cold house fix',
      'heating engineer near me',
      'boiler service winter',
    ],
    callToAction: 'Don\'t suffer in the cold - call now for emergency heating repairs',
    weatherConcerns: ['Frost', 'Snow', 'Ice', 'Heavy rain', 'Strong winds', 'Low temperatures'],
  },
  {
    slug: 'spring',
    name: 'Spring',
    months: ['March', 'April', 'May'],
    urgentServices: [
      'Gutter cleaning after winter',
      'Roof inspection',
      'Damp treatment',
      'Garden drainage',
      'External painting preparation',
      'Window maintenance',
    ],
    popularProjects: [
      'Extension builds',
      'Loft conversions',
      'External decorating',
      'Garden landscaping',
      'Patio installation',
      'Conservatory building',
      'Driveway renovation',
      'Fence and gate repairs',
    ],
    seoKeywords: [
      'spring renovation',
      'extension builder spring',
      'garden landscaping',
      'external painting',
      'spring home improvement',
      'loft conversion spring',
      'patio installation',
      'spring maintenance',
    ],
    callToAction: 'Spring into action - perfect time for your renovation project',
    weatherConcerns: ['Changeable weather', 'April showers', 'Temperature variation', 'Wind'],
  },
  {
    slug: 'summer',
    name: 'Summer',
    months: ['June', 'July', 'August'],
    urgentServices: [
      'Air conditioning installation',
      'Blocked drains from dry soil',
      'BBQ area construction',
      'Outdoor lighting',
      'Emergency glazing',
    ],
    popularProjects: [
      'Major extensions',
      'Full house renovation',
      'External work',
      'Roof replacement',
      'Garden rooms',
      'Bi-fold door installation',
      'Outdoor kitchen',
      'Driveway resurfacing',
    ],
    seoKeywords: [
      'summer renovation project',
      'extension builder summer',
      'roof replacement summer',
      'garden room installation',
      'bi-fold doors',
      'outdoor kitchen build',
      'summer home improvement',
      'best time renovation',
    ],
    callToAction: 'Make the most of summer - ideal weather for major projects',
    weatherConcerns: ['Heat', 'Dry conditions', 'Holiday periods', 'Long days'],
  },
  {
    slug: 'autumn',
    name: 'Autumn',
    months: ['September', 'October', 'November'],
    urgentServices: [
      'Boiler servicing before winter',
      'Gutter clearing',
      'Chimney sweeping',
      'Roof maintenance',
      'Draught sealing',
      'Insulation checks',
      'Heating system checks',
    ],
    popularProjects: [
      'Boiler replacement',
      'Central heating upgrade',
      'Internal refurbishment',
      'Insulation installation',
      'Window replacement',
      'Bathroom renovation',
      'Kitchen renovation',
    ],
    seoKeywords: [
      'autumn boiler service',
      'heating check before winter',
      'winter preparation home',
      'gutter cleaning autumn',
      'insulation before winter',
      'get ready for winter',
      'autumn home maintenance',
      'pre-winter boiler service',
    ],
    callToAction: 'Prepare for winter now - book your heating service today',
    weatherConcerns: ['Falling leaves', 'Increasing rain', 'Dropping temperatures', 'Reducing daylight'],
  },
];

export const urgencyTypes: UrgencyType[] = [
  {
    slug: '1-hour',
    name: '1 Hour Response',
    responseTime: 'Within 60 minutes',
    availability: '24/7 including holidays',
    surcharge: 'Premium emergency rate applies',
    scenarios: [
      'Burst pipe flooding property',
      'Complete power failure',
      'Gas emergency support',
      'Major water leak',
      'Sewage backup',
      'Security breach',
    ],
    seoKeywords: ['1 hour plumber', 'emergency plumber 1 hour', 'fast response plumber', 'immediate plumber'],
  },
  {
    slug: '2-hour',
    name: '2 Hour Response',
    responseTime: 'Within 2 hours',
    availability: '24/7',
    surcharge: 'Emergency callout fee',
    scenarios: [
      'Significant leaks',
      'Boiler breakdown in cold',
      'Blocked main drain',
      'Electrical safety concerns',
      'Broken window or door',
    ],
    seoKeywords: ['2 hour plumber', 'fast response tradesman', 'quick response builder', 'rapid response'],
  },
  {
    slug: 'same-day',
    name: 'Same Day Service',
    responseTime: 'Within 4-6 hours',
    availability: '7am - 10pm daily',
    surcharge: 'Priority booking fee',
    scenarios: [
      'Boiler not working',
      'Blocked toilet',
      'Leaking tap',
      'Power issues',
      'Minor emergencies',
      'Urgent repairs',
    ],
    seoKeywords: ['same day plumber', 'same day electrician', 'same day repair', 'today plumber'],
  },
  {
    slug: 'next-day',
    name: 'Next Day Service',
    responseTime: 'Next working day',
    availability: 'Monday - Saturday',
    surcharge: 'Standard rates',
    scenarios: [
      'Non-urgent repairs',
      'Planned maintenance',
      'Minor issues',
      'Quotes and assessments',
      'Routine work',
    ],
    seoKeywords: ['next day builder', 'quick appointment', 'fast booking tradesman', 'tomorrow plumber'],
  },
  {
    slug: 'weekend',
    name: 'Weekend Service',
    responseTime: 'Weekend availability',
    availability: 'Saturday and Sunday',
    surcharge: 'Weekend rates apply',
    scenarios: [
      'Weekend emergencies',
      'Convenient scheduling',
      'Working professionals',
      'Urgent weekend issues',
      'Cannot take time off work',
    ],
    seoKeywords: ['weekend plumber', 'saturday plumber', 'sunday plumber', 'weekend builder', 'weekend emergency'],
  },
  {
    slug: 'bank-holiday',
    name: 'Bank Holiday Service',
    responseTime: 'Bank holiday availability',
    availability: 'All UK bank holidays',
    surcharge: 'Bank holiday rates',
    scenarios: [
      'Christmas heating failure',
      'Easter emergencies',
      'New Year issues',
      'Holiday period problems',
      'Cannot wait until next working day',
    ],
    seoKeywords: ['bank holiday plumber', 'christmas plumber', 'easter plumber', 'holiday emergency'],
  },
  {
    slug: 'evening',
    name: 'Evening Service',
    responseTime: 'After 6pm',
    availability: '6pm - 11pm',
    surcharge: 'Evening rate applies',
    scenarios: [
      'After work availability',
      'Evening discoveries',
      'Cannot take day off',
      'Urgent evening issues',
      'Working households',
    ],
    seoKeywords: ['evening plumber', 'after hours plumber', 'evening electrician', 'night time emergency'],
  },
  {
    slug: 'early-morning',
    name: 'Early Morning Service',
    responseTime: 'Before 9am',
    availability: '6am - 9am',
    surcharge: 'Early rate applies',
    scenarios: [
      'Before work appointment',
      'Early morning discoveries',
      'Shift workers',
      'School run timing',
      'Business premises before opening',
    ],
    seoKeywords: ['early morning plumber', 'before work plumber', 'early appointment', '7am plumber'],
  },
];

// Helper functions
export function getSeason(slug: string): Season | undefined {
  return seasons.find(s => s.slug === slug);
}

export function getCurrentSeason(): Season {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return seasons.find(s => s.slug === 'spring')!;
  if (month >= 5 && month <= 7) return seasons.find(s => s.slug === 'summer')!;
  if (month >= 8 && month <= 10) return seasons.find(s => s.slug === 'autumn')!;
  return seasons.find(s => s.slug === 'winter')!;
}

export function getUrgencyType(slug: string): UrgencyType | undefined {
  return urgencyTypes.find(u => u.slug === slug);
}

export function getAllSeasons(): Season[] {
  return seasons;
}

export function getAllUrgencyTypes(): UrgencyType[] {
  return urgencyTypes;
}

// Generate URL params
export function generateSeasonParams(): { season: string }[] {
  return seasons.map(s => ({ season: s.slug }));
}

export function generateUrgencyParams(): { time: string }[] {
  return urgencyTypes.map(u => ({ time: u.slug }));
}

// Seasonal content helpers
export function getSeasonalServices(season: string): string[] {
  const s = getSeason(season);
  return s ? [...s.urgentServices, ...s.popularProjects] : [];
}

export function getSeasonalKeywords(season: string): string[] {
  const s = getSeason(season);
  return s ? s.seoKeywords : [];
}
