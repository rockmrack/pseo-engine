// ============================================================================
// PSEO ENGINE - NEAR ME / LANDMARK PROXIMITY DATA
// Pages targeting "near [landmark]" searches
// ============================================================================

export interface Landmark {
  slug: string;
  name: string;
  type: 'park' | 'station' | 'attraction' | 'school' | 'hospital' | 'shopping';
  area: string;
  postcode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  nearbyStreets: string[];
}

export const landmarks: Landmark[] = [
  // Parks & Green Spaces
  {
    slug: 'hampstead-heath',
    name: 'Hampstead Heath',
    type: 'park',
    area: 'Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5613, lng: -0.1658 },
    description: 'London\'s iconic 790-acre green space with swimming ponds and Parliament Hill views.',
    nearbyStreets: ['south-end-road', 'east-heath-road', 'south-hill-park', 'parliament-hill'],
  },
  {
    slug: 'regents-park',
    name: "Regent's Park",
    type: 'park',
    area: "St John's Wood",
    postcode: 'NW1',
    coordinates: { lat: 51.5313, lng: -0.1570 },
    description: 'Royal park featuring London Zoo, open air theatre, and beautiful rose gardens.',
    nearbyStreets: ['regents-park-road', 'primrose-hill-road', 'st-johns-wood-road'],
  },
  {
    slug: 'primrose-hill',
    name: 'Primrose Hill',
    type: 'park',
    area: 'Primrose Hill',
    postcode: 'NW1',
    coordinates: { lat: 51.5392, lng: -0.1602 },
    description: 'Famous hilltop park with panoramic views of central London skyline.',
    nearbyStreets: ['regents-park-road', 'chalcot-road', 'primrose-hill-road'],
  },
  {
    slug: 'alexandra-palace',
    name: 'Alexandra Palace',
    type: 'attraction',
    area: 'Muswell Hill',
    postcode: 'N22',
    coordinates: { lat: 51.5943, lng: -0.1298 },
    description: 'Historic entertainment venue with ice rink, park, and London\'s best panoramic views.',
    nearbyStreets: ['alexandra-park-road', 'the-avenue', 'muswell-hill-road'],
  },
  {
    slug: 'highgate-cemetery',
    name: 'Highgate Cemetery',
    type: 'attraction',
    area: 'Highgate',
    postcode: 'N6',
    coordinates: { lat: 51.5673, lng: -0.1464 },
    description: 'Victorian cemetery and nature reserve, resting place of Karl Marx.',
    nearbyStreets: ['swains-lane', 'highgate-west-hill', 'chester-road'],
  },
  {
    slug: 'kenwood-house',
    name: 'Kenwood House',
    type: 'attraction',
    area: 'Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5713, lng: -0.1671 },
    description: 'English Heritage stately home with world-class art collection and summer concerts.',
    nearbyStreets: ['hampstead-lane', 'north-end-way', 'spaniards-road'],
  },
  
  // Underground Stations
  {
    slug: 'hampstead-station',
    name: 'Hampstead Underground',
    type: 'station',
    area: 'Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5568, lng: -0.1787 },
    description: 'Deepest station on the London Underground network.',
    nearbyStreets: ['heath-street', 'hampstead-high-street', 'flask-walk'],
  },
  {
    slug: 'highgate-station',
    name: 'Highgate Underground',
    type: 'station',
    area: 'Highgate',
    postcode: 'N6',
    coordinates: { lat: 51.5778, lng: -0.1465 },
    description: 'Northern Line station serving Highgate village.',
    nearbyStreets: ['archway-road', 'southwood-lane', 'muswell-hill-road'],
  },
  {
    slug: 'swiss-cottage-station',
    name: 'Swiss Cottage Underground',
    type: 'station',
    area: 'Swiss Cottage',
    postcode: 'NW3',
    coordinates: { lat: 51.5432, lng: -0.1738 },
    description: 'Jubilee Line station in the heart of Swiss Cottage.',
    nearbyStreets: ['finchley-road', 'college-crescent', 'eton-avenue'],
  },
  {
    slug: 'belsize-park-station',
    name: 'Belsize Park Underground',
    type: 'station',
    area: 'Belsize Park',
    postcode: 'NW3',
    coordinates: { lat: 51.5503, lng: -0.1642 },
    description: 'Northern Line station serving Belsize Park village.',
    nearbyStreets: ['haverstock-hill', 'belsize-park', 'england-lane'],
  },
  {
    slug: 'st-johns-wood-station',
    name: "St John's Wood Underground",
    type: 'station',
    area: "St John's Wood",
    postcode: 'NW8',
    coordinates: { lat: 51.5347, lng: -0.1735 },
    description: 'Jubilee Line station near Abbey Road and Lord\'s Cricket Ground.',
    nearbyStreets: ['wellington-road', 'acacia-road', 'boundary-road'],
  },
  
  // Schools
  {
    slug: 'ucs-hampstead',
    name: 'University College School',
    type: 'school',
    area: 'Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5578, lng: -0.1792 },
    description: 'Independent day school for boys with outstanding academic reputation.',
    nearbyStreets: ['frognal', 'frognal-lane', 'arkwright-road'],
  },
  {
    slug: 'south-hampstead-high',
    name: 'South Hampstead High School',
    type: 'school',
    area: 'South Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5469, lng: -0.1754 },
    description: 'Independent girls\' school part of the GDST.',
    nearbyStreets: ['maresfield-gardens', 'nutley-terrace', 'gayton-road'],
  },
  {
    slug: 'highgate-school',
    name: 'Highgate School',
    type: 'school',
    area: 'Highgate',
    postcode: 'N6',
    coordinates: { lat: 51.5723, lng: -0.1498 },
    description: 'Historic co-educational independent school founded in 1565.',
    nearbyStreets: ['north-road', 'southwood-lane', 'cholmeley-park'],
  },
  
  // Hospitals
  {
    slug: 'royal-free-hospital',
    name: 'Royal Free Hospital',
    type: 'hospital',
    area: 'Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5528, lng: -0.1648 },
    description: 'Major NHS teaching hospital serving North London.',
    nearbyStreets: ['pond-street', 'fleet-road', 'rosslyn-hill'],
  },
  {
    slug: 'whittington-hospital',
    name: 'Whittington Hospital',
    type: 'hospital',
    area: 'Archway',
    postcode: 'N19',
    coordinates: { lat: 51.5654, lng: -0.1385 },
    description: 'NHS hospital serving Islington and Haringey.',
    nearbyStreets: ['highgate-hill', 'dartmouth-park-hill', 'st-johns-way'],
  },
  
  // Shopping
  {
    slug: 'brent-cross',
    name: 'Brent Cross Shopping Centre',
    type: 'shopping',
    area: 'Brent Cross',
    postcode: 'NW4',
    coordinates: { lat: 51.5763, lng: -0.2256 },
    description: 'Major shopping centre with John Lewis and extensive retail.',
    nearbyStreets: ['north-circular', 'hendon-way', 'brent-street'],
  },
  
  // Attractions
  {
    slug: 'abbey-road-studios',
    name: 'Abbey Road Studios',
    type: 'attraction',
    area: "St John's Wood",
    postcode: 'NW8',
    coordinates: { lat: 51.5320, lng: -0.1778 },
    description: 'World-famous recording studios where The Beatles recorded.',
    nearbyStreets: ['abbey-road', 'grove-end-road', 'boundary-road'],
  },
  {
    slug: 'lords-cricket-ground',
    name: "Lord's Cricket Ground",
    type: 'attraction',
    area: "St John's Wood",
    postcode: 'NW8',
    coordinates: { lat: 51.5294, lng: -0.1727 },
    description: 'The Home of Cricket, hosting international matches since 1814.',
    nearbyStreets: ['st-johns-wood-road', 'wellington-road', 'grove-end-road'],
  },
  {
    slug: 'freud-museum',
    name: 'Freud Museum',
    type: 'attraction',
    area: 'Hampstead',
    postcode: 'NW3',
    coordinates: { lat: 51.5480, lng: -0.1770 },
    description: 'Final home of Sigmund Freud with his famous couch.',
    nearbyStreets: ['maresfield-gardens', 'nutley-terrace', 'fitzjohns-avenue'],
  },
];

// Services commonly searched near landmarks
export const nearMeServices = [
  'plumber',
  'electrician',
  'boiler-repair',
  'emergency-plumber',
  'locksmith',
  'builder',
  'handyman',
  'carpenter',
  'decorator',
  'roofer',
];

// Helper functions
export function getLandmark(slug: string): Landmark | undefined {
  return landmarks.find(l => l.slug === slug);
}

export function getLandmarksByType(type: Landmark['type']): Landmark[] {
  return landmarks.filter(l => l.type === type);
}

export function generateNearMeParams() {
  const params: { landmark: string; service: string }[] = [];
  for (const landmark of landmarks) {
    for (const service of nearMeServices) {
      params.push({
        landmark: landmark.slug,
        service: service,
      });
    }
  }
  return params;
}
