// ============================================================================
// PSEO ENGINE - STREETS DATABASE
// Hyper-local street-level targeting for maximum SEO penetration
// 10x SEO Domination - Strategy 1: Street-Level Pages
// ============================================================================

export interface Street {
  slug: string;
  name: string;
  area: string;
  postcode: string;
  propertyTypes: string[];
  averagePropertyAge: string;
  commonIssues: string[];
  localLandmarks: string[];
  description: string;
}

export interface StreetService {
  slug: string;
  name: string;
  streetSpecificBenefits: string[];
  typicalProjects: string[];
  priceRange: string;
}

export const streets: Street[] = [
  // HAMPSTEAD STREETS
  {
    slug: 'heath-street',
    name: 'Heath Street',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Victorian terrace', 'Georgian townhouse', 'Period conversion'],
    averagePropertyAge: '1850-1900',
    commonIssues: ['Period sash windows', 'Victorian plumbing', 'Listed building restrictions', 'Cellar damp'],
    localLandmarks: ['Hampstead Heath', 'Hampstead Tube Station', 'Flask Walk'],
    description: 'One of Hampstead\'s most prestigious streets, Heath Street features stunning period properties requiring specialist renovation expertise.',
  },
  {
    slug: 'frognal',
    name: 'Frognal',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Victorian villa', 'Edwardian mansion', 'Arts & Crafts house'],
    averagePropertyAge: '1880-1920',
    commonIssues: ['Large property heating systems', 'Multi-storey plumbing', 'Period feature restoration'],
    localLandmarks: ['Frognal Gardens', 'University College School', 'Finchley Road'],
    description: 'Frognal\'s impressive Victorian and Edwardian properties require expert craftsmanship for renovation and maintenance.',
  },
  {
    slug: 'flask-walk',
    name: 'Flask Walk',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Georgian cottage', 'Victorian terrace', 'Boutique conversion'],
    averagePropertyAge: '1800-1870',
    commonIssues: ['Small space optimization', 'Heritage conservation', 'Original features'],
    localLandmarks: ['Flask Pub', 'Hampstead High Street', 'Well Walk'],
    description: 'Flask Walk\'s charming Georgian cottages demand sensitive renovation that preserves their historic character.',
  },
  {
    slug: 'church-row',
    name: 'Church Row',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Queen Anne townhouse', 'Georgian terrace', 'Grade II listed'],
    averagePropertyAge: '1700-1750',
    commonIssues: ['Grade II listed restrictions', 'Original panelling', '18th century plumbing upgrades'],
    localLandmarks: ['St John-at-Hampstead Church', 'Hampstead Cemetery', 'Holly Walk'],
    description: 'Church Row is one of London\'s finest Georgian terraces, requiring conservation-grade renovation specialists.',
  },
  {
    slug: 'well-walk',
    name: 'Well Walk',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Georgian terrace', 'Victorian villa', 'Period apartment'],
    averagePropertyAge: '1780-1880',
    commonIssues: ['Spa well heritage', 'Period ironwork', 'Basement waterproofing'],
    localLandmarks: ['Hampstead Wells', 'Burgh House', 'Gainsborough Gardens'],
    description: 'Well Walk\'s historic connection to the Hampstead spa makes it a street of significant heritage importance.',
  },
  {
    slug: 'keats-grove',
    name: 'Keats Grove',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Regency villa', 'Victorian mansion', 'Historic house'],
    averagePropertyAge: '1815-1860',
    commonIssues: ['Literary heritage conservation', 'Large garden maintenance', 'Period heating systems'],
    localLandmarks: ['Keats House Museum', 'Hampstead Heath', 'Downshire Hill'],
    description: 'Keats Grove\'s Regency properties, including the famous Keats House, require heritage-sensitive renovation.',
  },
  {
    slug: 'downshire-hill',
    name: 'Downshire Hill',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Regency villa', 'Victorian house', 'Artist studio'],
    averagePropertyAge: '1820-1880',
    commonIssues: ['Artist studio conversions', 'Large glazed areas', 'Garden studio installations'],
    localLandmarks: ['Keats Grove', 'South End Green', 'Hampstead Heath'],
    description: 'Downshire Hill\'s artistic heritage means many properties feature unique studio spaces requiring specialist renovation.',
  },
  {
    slug: 'hampstead-high-street',
    name: 'Hampstead High Street',
    area: 'Hampstead',
    postcode: 'NW3',
    propertyTypes: ['Mixed use', 'Residential above retail', 'Period conversion'],
    averagePropertyAge: '1850-1920',
    commonIssues: ['Commercial/residential separation', 'Shop front restoration', 'Upper floor access'],
    localLandmarks: ['Hampstead Tube', 'Hampstead Theatre', 'Rosslyn Hill'],
    description: 'Hampstead High Street\'s mixed-use properties require expertise in both commercial and residential renovation.',
  },
  // HIGHGATE STREETS
  {
    slug: 'highgate-high-street',
    name: 'Highgate High Street',
    area: 'Highgate',
    postcode: 'N6',
    propertyTypes: ['Georgian terrace', 'Victorian shop conversion', 'Period flat'],
    averagePropertyAge: '1750-1890',
    commonIssues: ['Village conservation area', 'Traditional shopfronts', 'Period features'],
    localLandmarks: ['Highgate Cemetery', 'Waterlow Park', 'The Flask pub'],
    description: 'Highgate High Street\'s village atmosphere requires renovation that maintains its historic character.',
  },
  {
    slug: 'swains-lane',
    name: 'Swain\'s Lane',
    area: 'Highgate',
    postcode: 'N6',
    propertyTypes: ['Victorian terrace', 'Edwardian house', 'Period cottage'],
    averagePropertyAge: '1860-1910',
    commonIssues: ['Steep hillside properties', 'Retaining walls', 'Drainage on slopes'],
    localLandmarks: ['Highgate Cemetery', 'Parliament Hill', 'Hampstead Heath'],
    description: 'Swain\'s Lane properties face unique challenges due to the steep terrain running alongside Highgate Cemetery.',
  },
  {
    slug: 'the-grove-highgate',
    name: 'The Grove',
    area: 'Highgate',
    postcode: 'N6',
    propertyTypes: ['Georgian mansion', 'Victorian villa', 'Grade II listed'],
    averagePropertyAge: '1720-1850',
    commonIssues: ['Large estate properties', 'Listed building consent', 'Historic garden walls'],
    localLandmarks: ['Highgate Village', 'Pond Square', 'Kenwood House'],
    description: 'The Grove features some of Highgate\'s grandest Georgian properties requiring specialist heritage renovation.',
  },
  {
    slug: 'south-grove',
    name: 'South Grove',
    area: 'Highgate',
    postcode: 'N6',
    propertyTypes: ['Georgian terrace', 'Victorian villa', 'Literary historic'],
    averagePropertyAge: '1750-1870',
    commonIssues: ['Coleridge heritage', 'Period ironwork', 'Original features'],
    localLandmarks: ['Old Hall', 'Pond Square', 'Highgate Literary Institute'],
    description: 'South Grove\'s literary connections to Samuel Taylor Coleridge make it a culturally significant street.',
  },
  // BELSIZE PARK STREETS
  {
    slug: 'belsize-park-gardens',
    name: 'Belsize Park Gardens',
    area: 'Belsize Park',
    postcode: 'NW3',
    propertyTypes: ['Victorian mansion flat', 'Period conversion', 'Garden apartment'],
    averagePropertyAge: '1870-1900',
    commonIssues: ['Mansion flat communal systems', 'Shared heating', 'Leasehold restrictions'],
    localLandmarks: ['Belsize Park Tube', 'Haverstock Hill', 'Primrose Hill'],
    description: 'Belsize Park Gardens\' grand Victorian mansion blocks require expertise in communal property renovation.',
  },
  {
    slug: 'england-lane',
    name: 'Englands Lane',
    area: 'Belsize Park',
    postcode: 'NW3',
    propertyTypes: ['Victorian terrace', 'Edwardian house', 'Mixed use'],
    averagePropertyAge: '1880-1910',
    commonIssues: ['Busy road noise', 'Shop conversion', 'Rear extension potential'],
    localLandmarks: ['Belsize Village', 'Primrose Hill', 'Chalk Farm'],
    description: 'Englands Lane combines residential and commercial properties requiring versatile renovation skills.',
  },
  {
    slug: 'haverstock-hill',
    name: 'Haverstock Hill',
    area: 'Belsize Park',
    postcode: 'NW3',
    propertyTypes: ['Victorian terrace', 'Period conversion', 'Mixed use'],
    averagePropertyAge: '1850-1900',
    commonIssues: ['Main road properties', 'Noise insulation', 'Period feature restoration'],
    localLandmarks: ['Royal Free Hospital', 'Chalk Farm', 'Belsize Park'],
    description: 'Haverstock Hill\'s busy location demands renovation solutions that address noise and pollution concerns.',
  },
  // PRIMROSE HILL STREETS
  {
    slug: 'regents-park-road',
    name: 'Regent\'s Park Road',
    area: 'Primrose Hill',
    postcode: 'NW1',
    propertyTypes: ['Victorian terrace', 'Stucco villa', 'Period shopfront'],
    averagePropertyAge: '1840-1880',
    commonIssues: ['Conservation area', 'Stucco restoration', 'Traditional shopfronts'],
    localLandmarks: ['Primrose Hill Park', 'Regent\'s Canal', 'London Zoo'],
    description: 'Regent\'s Park Road\'s picturesque village high street requires sensitive renovation to preserve its charm.',
  },
  {
    slug: 'chalcot-crescent',
    name: 'Chalcot Crescent',
    area: 'Primrose Hill',
    postcode: 'NW1',
    propertyTypes: ['Pastel-painted terrace', 'Victorian cottage', 'Celebrity home'],
    averagePropertyAge: '1860-1880',
    commonIssues: ['Iconic painted facades', 'Tourist area considerations', 'High-value properties'],
    localLandmarks: ['Chalcot Square', 'Primrose Hill', 'Regent\'s Park'],
    description: 'Chalcot Crescent\'s famous pastel houses are among London\'s most photographed, requiring meticulous renovation.',
  },
  {
    slug: 'chalcot-square',
    name: 'Chalcot Square',
    area: 'Primrose Hill',
    postcode: 'NW1',
    propertyTypes: ['Victorian terrace', 'Pastel painted', 'Garden square property'],
    averagePropertyAge: '1855-1875',
    commonIssues: ['Listed building restrictions', 'Square garden access', 'Period colour schemes'],
    localLandmarks: ['Chalcot Crescent', 'Primrose Hill', 'St Mark\'s Church'],
    description: 'Chalcot Square\'s elegant Victorian terraces surround a private garden, requiring sympathetic renovation.',
  },
  // ST JOHN'S WOOD STREETS
  {
    slug: 'abbey-road',
    name: 'Abbey Road',
    area: 'St John\'s Wood',
    postcode: 'NW8',
    propertyTypes: ['Victorian villa', 'Edwardian mansion', 'Modern apartment'],
    averagePropertyAge: '1870-1930',
    commonIssues: ['Tourist traffic (Beatles crossing)', 'Large property systems', 'Security considerations'],
    localLandmarks: ['Abbey Road Studios', 'Lord\'s Cricket Ground', 'St John\'s Wood Church'],
    description: 'Abbey Road\'s world-famous status brings unique renovation challenges including security and tourism considerations.',
  },
  {
    slug: 'hamilton-terrace',
    name: 'Hamilton Terrace',
    area: 'St John\'s Wood',
    postcode: 'NW8',
    propertyTypes: ['Victorian mansion', 'Stucco villa', 'Double-fronted house'],
    averagePropertyAge: '1850-1880',
    commonIssues: ['Embassy properties', 'High security', 'Large basement conversions'],
    localLandmarks: ['Maida Vale', 'St John\'s Wood High Street', 'Regent\'s Canal'],
    description: 'Hamilton Terrace\'s grand Victorian mansions, many used as embassies, require high-specification renovation.',
  },
  // CROUCH END STREETS
  {
    slug: 'crouch-end-broadway',
    name: 'Crouch End Broadway',
    area: 'Crouch End',
    postcode: 'N8',
    propertyTypes: ['Edwardian terrace', 'Victorian conversion', 'Mixed use'],
    averagePropertyAge: '1890-1920',
    commonIssues: ['Conservation area', 'Traditional shopfronts', 'Upper floor conversions'],
    localLandmarks: ['Crouch End Clock Tower', 'Hornsey Town Hall', 'Parkland Walk'],
    description: 'Crouch End Broadway\'s vibrant high street combines commercial and residential renovation requirements.',
  },
  {
    slug: 'haslemere-road',
    name: 'Haslemere Road',
    area: 'Crouch End',
    postcode: 'N8',
    propertyTypes: ['Edwardian terrace', 'Bay-fronted house', 'Family home'],
    averagePropertyAge: '1900-1910',
    commonIssues: ['Bay window repairs', 'Edwardian plumbing', 'Loft conversion potential'],
    localLandmarks: ['Crouch End Broadway', 'Parkland Walk', 'Priory Park'],
    description: 'Haslemere Road\'s classic Edwardian terraces are popular with families seeking renovation and extension work.',
  },
  // MUSWELL HILL STREETS
  {
    slug: 'muswell-hill-broadway',
    name: 'Muswell Hill Broadway',
    area: 'Muswell Hill',
    postcode: 'N10',
    propertyTypes: ['Edwardian parade', 'Art Deco', 'Mixed use'],
    averagePropertyAge: '1900-1930',
    commonIssues: ['Art Deco features', 'Cinema building heritage', 'Period shopfronts'],
    localLandmarks: ['Odeon Cinema', 'Alexandra Palace', 'Queens Wood'],
    description: 'Muswell Hill Broadway\'s distinctive Art Deco architecture requires specialist renovation expertise.',
  },
  {
    slug: 'queens-avenue',
    name: 'Queens Avenue',
    area: 'Muswell Hill',
    postcode: 'N10',
    propertyTypes: ['Edwardian villa', 'Large family home', 'Period semi'],
    averagePropertyAge: '1900-1915',
    commonIssues: ['Large property heating', 'Period tile restoration', 'Garden room additions'],
    localLandmarks: ['Alexandra Palace', 'Muswell Hill Broadway', 'Highgate Wood'],
    description: 'Queens Avenue\'s substantial Edwardian villas offer excellent renovation and extension opportunities.',
  },
  // KENTISH TOWN STREETS
  {
    slug: 'fortess-road',
    name: 'Fortess Road',
    area: 'Kentish Town',
    postcode: 'NW5',
    propertyTypes: ['Victorian terrace', 'Period conversion', 'Mixed use'],
    averagePropertyAge: '1860-1890',
    commonIssues: ['Terraced house extensions', 'Party wall considerations', 'Period restoration'],
    localLandmarks: ['Kentish Town Station', 'Tufnell Park', 'Parliament Hill'],
    description: 'Fortess Road\'s Victorian terraces offer excellent value renovation opportunities in this up-and-coming area.',
  },
  {
    slug: 'lady-margaret-road',
    name: 'Lady Margaret Road',
    area: 'Kentish Town',
    postcode: 'NW5',
    propertyTypes: ['Victorian terrace', 'Garden flat', 'Period conversion'],
    averagePropertyAge: '1870-1890',
    commonIssues: ['Basement conversions', 'Side return extensions', 'Period features'],
    localLandmarks: ['Gospel Oak', 'Hampstead Heath', 'Parliament Hill Fields'],
    description: 'Lady Margaret Road\'s proximity to Hampstead Heath makes it popular for family renovations and extensions.',
  },
  // SWISS COTTAGE STREETS
  {
    slug: 'finchley-road-nw3',
    name: 'Finchley Road',
    area: 'Swiss Cottage',
    postcode: 'NW3',
    propertyTypes: ['Mansion flat', 'Period conversion', 'Modern apartment'],
    averagePropertyAge: '1880-1960',
    commonIssues: ['Traffic noise', 'Mixed period properties', 'Block management'],
    localLandmarks: ['Swiss Cottage Library', 'Hampstead Theatre', 'O2 Centre'],
    description: 'Finchley Road\'s diverse property stock ranges from Victorian mansions to 1960s blocks, each with unique renovation needs.',
  },
  {
    slug: 'adamson-road',
    name: 'Adamson Road',
    area: 'Swiss Cottage',
    postcode: 'NW3',
    propertyTypes: ['Victorian terrace', 'Edwardian house', 'Period conversion'],
    averagePropertyAge: '1880-1910',
    commonIssues: ['School run traffic', 'Family home conversions', 'Loft extensions'],
    localLandmarks: ['Swiss Cottage', 'South Hampstead', 'Primrose Hill'],
    description: 'Adamson Road\'s family-friendly Victorian terraces are popular for comprehensive renovation projects.',
  },
];

export const streetServices: StreetService[] = [
  {
    slug: 'full-house-renovation',
    name: 'Full House Renovation',
    streetSpecificBenefits: [
      'Complete property transformation',
      'Period feature restoration',
      'Modern amenities integration',
      'Value enhancement',
    ],
    typicalProjects: ['Victorian terrace renovation', 'Georgian townhouse restoration', 'Edwardian villa modernization'],
    priceRange: '£80,000 - £300,000+',
  },
  {
    slug: 'kitchen-renovation',
    name: 'Kitchen Renovation',
    streetSpecificBenefits: [
      'Bespoke design for period properties',
      'Original feature integration',
      'Space maximization',
      'Premium appliance installation',
    ],
    typicalProjects: ['Victorian kitchen extension', 'Period property kitchen', 'Open-plan conversion'],
    priceRange: '£25,000 - £75,000',
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    streetSpecificBenefits: [
      'Period-appropriate design',
      'Luxury fixture installation',
      'Underfloor heating',
      'Wet room conversions',
    ],
    typicalProjects: ['Victorian bathroom restoration', 'En-suite creation', 'Family bathroom upgrade'],
    priceRange: '£12,000 - £35,000',
  },
  {
    slug: 'loft-conversion',
    name: 'Loft Conversion',
    streetSpecificBenefits: [
      'Additional bedroom creation',
      'Home office space',
      'Conservation area compliance',
      'Planning expertise',
    ],
    typicalProjects: ['Dormer loft conversion', 'Mansard conversion', 'Velux loft room'],
    priceRange: '£45,000 - £120,000',
  },
  {
    slug: 'basement-conversion',
    name: 'Basement Conversion',
    streetSpecificBenefits: [
      'Cellar to living space',
      'Waterproofing expertise',
      'Light well creation',
      'Planning management',
    ],
    typicalProjects: ['Wine cellar', 'Home cinema', 'Self-contained flat', 'Home gym'],
    priceRange: '£100,000 - £350,000',
  },
  {
    slug: 'extension',
    name: 'House Extension',
    streetSpecificBenefits: [
      'Side return extensions',
      'Rear extensions',
      'Wraparound extensions',
      'Garden rooms',
    ],
    typicalProjects: ['Kitchen extension', 'Side return', 'Double-storey extension', 'Orangery'],
    priceRange: '£50,000 - £200,000',
  },
  {
    slug: 'period-restoration',
    name: 'Period Feature Restoration',
    streetSpecificBenefits: [
      'Original cornice restoration',
      'Sash window repair',
      'Fireplace restoration',
      'Original flooring',
    ],
    typicalProjects: ['Cornice repair', 'Ceiling rose installation', 'Period door restoration', 'Staircase renovation'],
    priceRange: '£5,000 - £50,000',
  },
  {
    slug: 'electrical-rewire',
    name: 'Full Electrical Rewire',
    streetSpecificBenefits: [
      'Period property wiring',
      'Concealed installation',
      'Smart home integration',
      'Safety compliance',
    ],
    typicalProjects: ['Victorian house rewire', 'Consumer unit upgrade', 'Lighting design', 'EV charger installation'],
    priceRange: '£8,000 - £25,000',
  },
  {
    slug: 'plumbing-heating',
    name: 'Plumbing & Heating',
    streetSpecificBenefits: [
      'Boiler installation',
      'Central heating upgrade',
      'Underfloor heating',
      'Hot water systems',
    ],
    typicalProjects: ['Boiler replacement', 'Radiator upgrade', 'Bathroom plumbing', 'Unvented cylinder'],
    priceRange: '£3,000 - £15,000',
  },
  {
    slug: 'exterior-renovation',
    name: 'Exterior Renovation',
    streetSpecificBenefits: [
      'Facade restoration',
      'Roof repairs',
      'Window replacement',
      'Landscaping',
    ],
    typicalProjects: ['Render repair', 'Sash window restoration', 'Front garden design', 'Driveway installation'],
    priceRange: '£10,000 - £80,000',
  },
];

// Helper functions
export function getStreet(slug: string): Street | undefined {
  return streets.find(s => s.slug === slug);
}

export function getStreetService(slug: string): StreetService | undefined {
  return streetServices.find(s => s.slug === slug);
}

export function getStreetsByArea(area: string): Street[] {
  return streets.filter(s => s.area.toLowerCase() === area.toLowerCase());
}

export function generateStreetParams(): { street: string; service: string }[] {
  const params: { street: string; service: string }[] = [];
  for (const street of streets) {
    for (const service of streetServices) {
      params.push({
        street: street.slug,
        service: service.slug,
      });
    }
  }
  return params;
}

export function countStreetPages(): number {
  return streets.length * streetServices.length;
}
