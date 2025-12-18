// ============================================================================
// PSEO ENGINE - NEIGHBORHOOD HUB DATA
// Comprehensive area guides for local SEO authority
// ============================================================================

export interface NeighborhoodHub {
  slug: string;
  name: string;
  postcodes: string[];
  borough: string;
  description: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  h1: string;
  
  // Demographics
  demographics: {
    population: string;
    avgPropertyPrice: string;
    predominantPropertyTypes: string[];
    affluenceLevel: string;
  };
  
  // History and character
  history: string;
  character: string;
  famousResidents?: string[];
  
  // Key landmarks
  landmarks: string[];
  parks: string[];
  transport: {
    stations: string[];
    buses: string[];
    travelZone: string;
  };
  
  // Local council info
  council: {
    name: string;
    planningPortal: string;
    conservationAreas: string[];
    articleFourAreas: string[];
  };
  
  // Services most requested
  topServices: string[];
  
  // Common property issues
  commonIssues: string[];
  
  // Streets we cover
  coveredStreets: string[];
  
  // Nearby areas
  adjacentAreas: string[];
}

export const neighborhoodHubs: NeighborhoodHub[] = [
  {
    slug: 'hampstead',
    name: 'Hampstead',
    postcodes: ['NW3'],
    borough: 'Camden',
    description: 'One of London\'s most prestigious and sought-after areas, Hampstead combines village charm with excellent transport links and stunning heath views.',
    
    metaTitle: 'Home Services in Hampstead NW3 | Plumbers, Electricians & Builders | Hampstead Renovations',
    metaDescription: 'Expert home renovation services in Hampstead NW3. Trusted local plumbers, electricians, and builders specialising in Victorian and Edwardian properties. Call 07459 345456.',
    h1: 'Expert Home Services in Hampstead, NW3',
    
    demographics: {
      population: '~15,000',
      avgPropertyPrice: '£1.8 million',
      predominantPropertyTypes: ['Victorian terraces', 'Edwardian houses', 'Georgian townhouses', 'Mansion blocks'],
      affluenceLevel: 'Ultra-prime',
    },
    
    history: `Hampstead has been a settlement since Anglo-Saxon times, with the name meaning "homestead" or "farm." The area developed as a spa town in the 18th century when chalybeate springs were discovered. The arrival of the Northern Line in 1907 transformed it into a desirable residential suburb while maintaining its village character.

The area has long attracted artists, writers, and intellectuals. Keats House, where the poet John Keats lived and wrote "Ode to a Nightingale," remains a major literary landmark. The Hampstead Conservation Area, established in 1968, was one of London's first and protects the area's unique architectural heritage.`,
    
    character: `Today's Hampstead retains its village atmosphere with independent boutiques, artisan cafes, and gastropubs along the High Street. The 790-acre Hampstead Heath provides a natural escape with Parliament Hill offering panoramic views across London. The area is known for its thriving arts scene, excellent schools, and tight-knit community feel despite being just 4 miles from central London.

Properties here command premium prices, reflecting the area's prestige, excellent schools (including UCS and South Hampstead High), and unmatched green space access.`,
    
    famousResidents: [
      'John Keats (poet)',
      'Sigmund Freud (psychoanalyst)',
      'George Orwell (writer)',
      'Ricky Gervais (comedian)',
      'Emma Thompson (actress)',
      'Jonathan Ross (presenter)',
    ],
    
    landmarks: [
      'Hampstead Heath',
      'Kenwood House',
      'Keats House',
      'Freud Museum',
      'Hampstead Parish Church',
      'Burgh House',
      'Everyman Cinema',
    ],
    
    parks: [
      'Hampstead Heath (790 acres)',
      'Parliament Hill',
      'Golders Hill Park',
      'The Pergola and Hill Garden',
      'Hampstead Heath Extension',
    ],
    
    transport: {
      stations: ['Hampstead Underground (Northern Line)', 'Finchley Road & Frognal (Overground)', 'Hampstead Heath (Overground)'],
      buses: ['24', '46', '168', '268', 'C11'],
      travelZone: 'Zone 2',
    },
    
    council: {
      name: 'London Borough of Camden',
      planningPortal: 'https://www.camden.gov.uk/planning-and-building-control',
      conservationAreas: ['Hampstead Conservation Area', 'South Hampstead Conservation Area'],
      articleFourAreas: ['Hampstead Garden Suburb', 'Parts of central Hampstead'],
    },
    
    topServices: [
      'boiler-service',
      'bathroom-installation',
      'kitchen-fitting',
      'electrical-rewiring',
      'sash-window-repair',
      'period-restoration',
    ],
    
    commonIssues: [
      'Original sash windows requiring draught-proofing or restoration',
      'Period boilers needing replacement with heritage-sympathetic installations',
      'Victorian plumbing systems requiring updates',
      'Damp issues in basement conversions',
      'Listed building consent requirements for external works',
      'Conservation area restrictions on visible alterations',
    ],
    
    coveredStreets: [
      'redington-road',
      'frognal-lane',
      'arkwright-road',
      'lindfield-gardens',
      'templewood-avenue',
      'heath-drive',
      'well-walk',
      'flask-walk',
      'hampstead-high-street',
    ],
    
    adjacentAreas: ['belsize-park', 'swiss-cottage', 'highgate', 'golders-green', 'st-johns-wood'],
  },
  
  {
    slug: 'highgate',
    name: 'Highgate',
    postcodes: ['N6', 'N19'],
    borough: 'Haringey/Camden',
    description: 'A leafy hilltop village straddling two boroughs, known for its historic cemetery, stunning views, and characterful properties.',
    
    metaTitle: 'Home Services in Highgate N6 | Expert Plumbers & Builders | Hampstead Renovations',
    metaDescription: 'Professional home renovation services in Highgate N6. Specialists in Victorian property maintenance, boiler repairs, and period restoration. Call 07459 345456.',
    h1: 'Trusted Home Services in Highgate, N6',
    
    demographics: {
      population: '~12,000',
      avgPropertyPrice: '£1.4 million',
      predominantPropertyTypes: ['Victorian villas', 'Georgian houses', 'Edwardian semis', 'Converted flats'],
      affluenceLevel: 'Prime',
    },
    
    history: `Highgate developed as a medieval settlement at the top of a steep hill on the Great North Road. The Bishop of London built a gatehouse here in the 14th century to control access, giving the area its name. The village prospered as a stop for travellers and by the 17th century had become a fashionable retreat from London.

The famous Highgate Cemetery, opened in 1839, became a fashionable Victorian burial ground and is the final resting place of Karl Marx, George Eliot, and many other notable figures. The arrival of the Northern Line at Highgate station in 1941 improved connections while the area maintained its distinct village identity.`,
    
    character: `Highgate Village retains an almost rural feel with its ancient pubs, independent shops, and stunning views across London from Waterlow Park. The area straddles Camden and Haringey boroughs, creating a unique administrative situation where some streets have different rules for planning applications.

The steep geography means many properties have multiple levels, with basements and lower ground floors common. This creates both opportunities and challenges for renovation work, particularly around drainage and damp-proofing.`,
    
    famousResidents: [
      'Samuel Taylor Coleridge (poet)',
      'Kate Moss (model)',
      'George Michael (singer)',
      'Annie Lennox (singer)',
      'Jamie Oliver (chef)',
    ],
    
    landmarks: [
      'Highgate Cemetery',
      'Waterlow Park',
      'Highgate Literary & Scientific Institution',
      'The Flask pub',
      'Lauderdale House',
      'Highgate School',
    ],
    
    parks: [
      'Waterlow Park',
      'Highgate Wood',
      'Queens Wood',
      'Hampstead Heath (eastern extension)',
    ],
    
    transport: {
      stations: ['Highgate Underground (Northern Line)', 'Archway Underground (Northern Line)'],
      buses: ['143', '210', '214', '271', 'W5'],
      travelZone: 'Zone 3',
    },
    
    council: {
      name: 'London Borough of Haringey / Camden',
      planningPortal: 'https://www.haringey.gov.uk/planning-and-building-control',
      conservationAreas: ['Highgate Conservation Area'],
      articleFourAreas: ['Highgate Village core'],
    },
    
    topServices: [
      'boiler-repair',
      'central-heating',
      'damp-proofing',
      'electrical-rewiring',
      'chimney-repair',
      'period-restoration',
    ],
    
    commonIssues: [
      'Damp issues due to hillside location and older construction',
      'Complex drainage systems on sloped sites',
      'Multi-level properties with heating challenges',
      'Victorian cast iron guttering needing replacement',
      'Coordination needed between two borough planning depts',
      'Elderly heating systems in larger properties',
    ],
    
    coveredStreets: [
      'highgate-high-street',
      'south-grove',
      'north-road',
      'cromwell-avenue',
      'bishops-avenue',
      'kenwood-close',
    ],
    
    adjacentAreas: ['hampstead', 'crouch-end', 'muswell-hill', 'archway', 'east-finchley'],
  },
  
  {
    slug: 'crouch-end',
    name: 'Crouch End',
    postcodes: ['N8'],
    borough: 'Haringey',
    description: 'A vibrant, family-friendly area known for its Victorian architecture, independent shops, and creative community.',
    
    metaTitle: 'Home Services in Crouch End N8 | Plumbers & Builders | Hampstead Renovations',
    metaDescription: 'Expert home renovation services in Crouch End N8. Victorian terrace specialists, boiler repairs, extensions, and electrical work. Call 07459 345456.',
    h1: 'Professional Home Services in Crouch End, N8',
    
    demographics: {
      population: '~15,000',
      avgPropertyPrice: '£950,000',
      predominantPropertyTypes: ['Victorian terraces', 'Edwardian houses', 'Converted flats', 'Purpose-built apartments'],
      affluenceLevel: 'Upper-middle',
    },
    
    history: `Crouch End developed rapidly in the late Victorian era following the opening of the railway in 1867. The area was built as a middle-class suburb with substantial family houses featuring the hallmarks of Victorian design: bay windows, decorative plasterwork, and spacious gardens.

The iconic Crouch End Clock Tower, built in 1895 as a memorial to local benefactor Henry Reader Williams, remains the focal point of the area. Unlike many London neighbourhoods, Crouch End never got a tube station, which has helped preserve its village character.`,
    
    character: `Modern Crouch End is known as a creative hub, with a thriving arts scene, excellent restaurants, and a strong community spirit. The lack of a tube station means it's quieter than nearby areas but well-served by buses. The Broadway shopping area offers a mix of independent retailers, cafes, and restaurants.

Property prices have risen significantly in recent decades as young families priced out of nearby Islington discovered the area. This has driven demand for extensions, loft conversions, and side returns as families look to expand their Victorian terraces.`,
    
    landmarks: [
      'Crouch End Clock Tower',
      'Hornsey Town Hall',
      'Parkland Walk (disused railway)',
      'The Broadway',
      'Crouch End Playing Fields',
    ],
    
    parks: [
      'Priory Park',
      'Crouch End Playing Fields',
      'Parkland Walk Nature Reserve',
      'Stationers Park',
    ],
    
    transport: {
      stations: ['Hornsey (Great Northern)', 'Crouch Hill (Overground)'],
      buses: ['W3', 'W5', 'W7', '41', '91', '144'],
      travelZone: 'Zone 3',
    },
    
    council: {
      name: 'London Borough of Haringey',
      planningPortal: 'https://www.haringey.gov.uk/planning-and-building-control',
      conservationAreas: ['Crouch End Conservation Area'],
      articleFourAreas: [],
    },
    
    topServices: [
      'loft-conversion',
      'extension-building',
      'kitchen-fitting',
      'bathroom-installation',
      'boiler-installation',
      'underfloor-heating',
    ],
    
    commonIssues: [
      'Maximising space in Victorian terraces',
      'Side return extensions',
      'Rear extension planning',
      'Party wall agreements with neighbours',
      'Upgrading dated heating systems',
      'Original timber floorboard restoration',
    ],
    
    coveredStreets: [
      'park-road',
      'middle-lane',
      'hatherley-gardens',
      'weston-park',
      'crescent-road',
    ],
    
    adjacentAreas: ['highgate', 'muswell-hill', 'hornsey', 'stroud-green', 'finsbury-park'],
  },
  
  {
    slug: 'st-johns-wood',
    name: "St John's Wood",
    postcodes: ['NW8'],
    borough: 'Westminster',
    description: "An affluent residential area famous for Abbey Road Studios, Lord's Cricket Ground, and leafy streets of grand villas.",
    
    metaTitle: "Home Services in St John's Wood NW8 | Premium Renovations | Hampstead Renovations",
    metaDescription: "Luxury home renovation services in St John's Wood NW8. Expert plumbers, electricians, and builders for high-end properties. Call 07459 345456.",
    h1: "Premium Home Services in St John's Wood, NW8",
    
    demographics: {
      population: '~10,000',
      avgPropertyPrice: '£2.2 million',
      predominantPropertyTypes: ['Detached villas', 'Purpose-built mansion blocks', 'Mews houses', 'Modern apartments'],
      affluenceLevel: 'Ultra-prime',
    },
    
    history: `St John's Wood takes its name from the medieval Knights of St John who owned the land. Unlike most of London, the area was developed with spacious detached and semi-detached villas set in large gardens, giving it a distinctly suburban feel despite being just 2 miles from central London.

The area became famous globally when the Beatles recorded at Abbey Road Studios. The zebra crossing outside became an iconic image and remains a tourist attraction. Lord's Cricket Ground, the "Home of Cricket," has been located here since 1814.`,
    
    character: `Today's St John's Wood is one of London's most prestigious addresses, popular with international families, diplomats, and wealthy professionals. The area has excellent schools including the American School in London and Arnold House. High Street offers upmarket shopping and dining.

Properties command premium prices and owners expect the highest quality workmanship. Many buildings are in the St John's Wood Conservation Area, requiring sensitive renovation approaches.`,
    
    famousResidents: [
      'Paul McCartney (musician)',
      'Andrew Lloyd Webber (composer)',
      'Lily Allen (singer)',
      'Stella McCartney (designer)',
    ],
    
    landmarks: [
      "Lord's Cricket Ground",
      'Abbey Road Studios',
      'Abbey Road zebra crossing',
      "St John's Wood Church",
      'The American School in London',
    ],
    
    parks: [
      "Regent's Park (adjacent)",
      "St John's Wood Church Grounds",
      "Lord's Nursery Ground",
    ],
    
    transport: {
      stations: ["St John's Wood Underground (Jubilee Line)", 'Maida Vale Underground (Bakerloo Line)'],
      buses: ['13', '82', '113', '139', '189'],
      travelZone: 'Zone 2',
    },
    
    council: {
      name: 'City of Westminster',
      planningPortal: 'https://www.westminster.gov.uk/planning-building-control',
      conservationAreas: ["St John's Wood Conservation Area"],
      articleFourAreas: ["St John's Wood Terraces"],
    },
    
    topServices: [
      'bathroom-installation',
      'kitchen-fitting',
      'smart-home-installation',
      'underfloor-heating',
      'air-conditioning',
      'security-systems',
    ],
    
    commonIssues: [
      'High-end fixture installation requiring specialist skills',
      'Conservation area restrictions on external changes',
      'Mansion block lease and freeholder requirements',
      'Premium client expectations for finish quality',
      'Smart home integration in period properties',
      'Security system installations',
    ],
    
    coveredStreets: [
      'abbey-road',
      'hamilton-terrace',
      'marlborough-place',
      'acacia-road',
      'boundary-road',
    ],
    
    adjacentAreas: ['hampstead', 'maida-vale', 'primrose-hill', 'regents-park', 'kilburn'],
  },
  
  {
    slug: 'belsize-park',
    name: 'Belsize Park',
    postcodes: ['NW3'],
    borough: 'Camden',
    description: 'An elegant residential area between Hampstead and Primrose Hill, known for its Victorian mansion blocks and tree-lined avenues.',
    
    metaTitle: 'Home Services in Belsize Park NW3 | Trusted Local Builders | Hampstead Renovations',
    metaDescription: 'Expert home renovation services in Belsize Park NW3. Victorian property specialists, bathroom fitting, and electrical work. Call 07459 345456.',
    h1: 'Trusted Home Services in Belsize Park, NW3',
    
    demographics: {
      population: '~12,000',
      avgPropertyPrice: '£1.3 million',
      predominantPropertyTypes: ['Victorian mansion blocks', 'Converted flats', 'Period houses', 'Edwardian semis'],
      affluenceLevel: 'Prime',
    },
    
    history: `Belsize Park was developed in the 19th century on land that had been part of the Belsize Estate. The area takes its name from Belsize House, a manor house that stood here from medieval times. Development began in earnest in the 1850s with the construction of substantial villas and mansion blocks.

The area became popular with artists and intellectuals in the early 20th century. Piet Mondrian lived and worked here, as did many other European emigrés fleeing the Second World War.`,
    
    character: `Modern Belsize Park offers the best of both worlds: period architecture and village atmosphere combined with excellent transport links (Northern Line) and proximity to Hampstead Heath. The area is popular with media professionals, academics, and young families.

The predominance of mansion block flats creates specific renovation challenges, particularly around lease requirements, freeholder permissions, and working within the constraints of shared buildings.`,
    
    landmarks: [
      'Belsize Park Underground Station',
      'Hampstead Theatre',
      'Belsize Village',
      'Haverstock Hill',
    ],
    
    parks: [
      'Primrose Hill (adjacent)',
      'Hampstead Heath (nearby)',
      'Belsize Wood',
    ],
    
    transport: {
      stations: ['Belsize Park Underground (Northern Line)', 'Swiss Cottage Underground (Jubilee Line)'],
      buses: ['24', '46', '168', 'C11'],
      travelZone: 'Zone 2',
    },
    
    council: {
      name: 'London Borough of Camden',
      planningPortal: 'https://www.camden.gov.uk/planning-and-building-control',
      conservationAreas: ['Belsize Conservation Area'],
      articleFourAreas: [],
    },
    
    topServices: [
      'bathroom-installation',
      'kitchen-fitting',
      'boiler-service',
      'electrical-rewiring',
      'plastering',
      'decorating',
    ],
    
    commonIssues: [
      'Mansion block freeholder/lease restrictions',
      'Working hours restrictions in residential blocks',
      'Noise considerations with neighbours',
      'Access challenges for materials in flats',
      'Communal boiler and heating systems',
      'Sash window maintenance in period blocks',
    ],
    
    coveredStreets: [
      'belsize-park',
      'belsize-avenue',
      'haverstock-hill',
      'england-lane',
      'buckland-crescent',
    ],
    
    adjacentAreas: ['hampstead', 'primrose-hill', 'swiss-cottage', 'kentish-town', 'camden-town'],
  },
  
  {
    slug: 'muswell-hill',
    name: 'Muswell Hill',
    postcodes: ['N10'],
    borough: 'Haringey',
    description: 'A hilltop suburb with stunning views, excellent Edwardian housing stock, and a thriving Broadway shopping area.',
    
    metaTitle: 'Home Services in Muswell Hill N10 | Local Plumbers & Builders | Hampstead Renovations',
    metaDescription: 'Professional home renovation services in Muswell Hill N10. Edwardian property specialists, boiler installation, and kitchen fitting. Call 07459 345456.',
    h1: 'Quality Home Services in Muswell Hill, N10',
    
    demographics: {
      population: '~14,000',
      avgPropertyPrice: '£850,000',
      predominantPropertyTypes: ['Edwardian houses', 'Victorian terraces', 'Purpose-built flats', '1930s semis'],
      affluenceLevel: 'Upper-middle',
    },
    
    history: `Muswell Hill remained largely rural until the late 19th century when the railway arrived and builders saw the potential of the hilltop location. The Edwardian era saw rapid development, with streets of substantial family houses featuring the distinctive red brick and terracotta details of the period.

Alexandra Palace, known locally as "Ally Pally," opened in 1873 as "The People's Palace" and was the site of the first BBC television broadcasts in 1936. The palace and its park remain a major attraction.`,
    
    character: `Muswell Hill has maintained its village feel with a thriving Broadway of independent shops, restaurants, and the iconic Everyman Cinema. The lack of a tube station (like Crouch End) has helped preserve this character, though buses are frequent.

The area is extremely popular with families due to excellent schools and access to Alexandra Park. This drives demand for property expansion projects including loft conversions and rear extensions.`,
    
    landmarks: [
      'Alexandra Palace',
      'Muswell Hill Broadway',
      'Everyman Cinema',
      "St James's Church",
    ],
    
    parks: [
      'Alexandra Park',
      'Cherry Tree Wood',
      'Coldfall Wood',
    ],
    
    transport: {
      stations: ['Alexandra Palace (Great Northern)', 'Highgate Underground (Northern Line, 15 min walk)'],
      buses: ['102', '134', '144', '234', '299', 'W3', 'W7'],
      travelZone: 'Zone 3',
    },
    
    council: {
      name: 'London Borough of Haringey',
      planningPortal: 'https://www.haringey.gov.uk/planning-and-building-control',
      conservationAreas: ['Muswell Hill Conservation Area'],
      articleFourAreas: [],
    },
    
    topServices: [
      'loft-conversion',
      'extension-building',
      'kitchen-fitting',
      'boiler-installation',
      'central-heating',
      'bathroom-installation',
    ],
    
    commonIssues: [
      'Edwardian heating systems needing upgrades',
      'Original fireplaces requiring restoration',
      'Space maximisation in family homes',
      'Loft conversion structural considerations',
      'Period feature preservation',
      'Energy efficiency improvements',
    ],
    
    coveredStreets: [
      'muswell-hill-broadway',
      'queens-avenue',
      'alexandra-park-road',
      'colney-hatch-lane',
      'fortis-green',
    ],
    
    adjacentAreas: ['highgate', 'crouch-end', 'east-finchley', 'friern-barnet', 'wood-green'],
  },
  
  {
    slug: 'kentish-town',
    name: 'Kentish Town',
    postcodes: ['NW5'],
    borough: 'Camden',
    description: 'A diverse, vibrant area with excellent transport links, Victorian housing stock, and a growing café culture.',
    
    metaTitle: 'Home Services in Kentish Town NW5 | Plumbers & Electricians | Hampstead Renovations',
    metaDescription: 'Expert home renovation services in Kentish Town NW5. Victorian terrace specialists, boiler repairs, and bathroom fitting. Call 07459 345456.',
    h1: 'Reliable Home Services in Kentish Town, NW5',
    
    demographics: {
      population: '~16,000',
      avgPropertyPrice: '£700,000',
      predominantPropertyTypes: ['Victorian terraces', 'Converted flats', 'Council housing', 'New developments'],
      affluenceLevel: 'Mixed',
    },
    
    history: `Kentish Town is one of London's oldest settlements, mentioned in records dating back to 1208. It developed as a rural village on the road north from London before rapid Victorian expansion transformed it into a densely populated suburb.

The area has always had a mixed character, with grand houses on some streets and more modest workers' cottages on others. This diversity continues today, making it one of North London's more varied neighbourhoods.`,
    
    character: `Modern Kentish Town is a neighbourhood in transition, with increasing gentrification bringing new cafes and restaurants while maintaining its diverse community. Excellent Northern Line connections make it popular with commuters, while Hampstead Heath is just a short walk away.

The Victorian housing stock offers great renovation potential, with many buyers looking to update tired properties or extend to create more space.`,
    
    landmarks: [
      'Kentish Town City Farm',
      'Kentish Town Road',
      'Forum music venue',
      'Tufnell Park Tavern',
    ],
    
    parks: [
      'Parliament Hill (Hampstead Heath)',
      'Gospel Oak Lido',
      'Cantelowes Gardens',
      'Kentish Town City Farm',
    ],
    
    transport: {
      stations: ['Kentish Town Underground (Northern Line)', 'Kentish Town West (Overground)', 'Gospel Oak (Overground)'],
      buses: ['C2', '46', '134', '214', 'C11'],
      travelZone: 'Zone 2',
    },
    
    council: {
      name: 'London Borough of Camden',
      planningPortal: 'https://www.camden.gov.uk/planning-and-building-control',
      conservationAreas: ['Kentish Town Conservation Area'],
      articleFourAreas: [],
    },
    
    topServices: [
      'boiler-repair',
      'bathroom-installation',
      'kitchen-fitting',
      'electrical-rewiring',
      'central-heating',
      'plastering',
    ],
    
    commonIssues: [
      'Victorian property maintenance',
      'Updating 1970s/80s renovations',
      'Damp in basement flats',
      'Outdated electrical systems',
      'Central heating system failures',
      'Flat renovation in converted houses',
    ],
    
    coveredStreets: [
      'kentish-town-road',
      'fortess-road',
      'leighton-road',
      'lady-margaret-road',
      'bartholomew-road',
    ],
    
    adjacentAreas: ['hampstead', 'tufnell-park', 'gospel-oak', 'camden-town', 'holloway'],
  },
  
  {
    slug: 'west-hampstead',
    name: 'West Hampstead',
    postcodes: ['NW6'],
    borough: 'Camden',
    description: 'A well-connected area with three railway stations, Victorian and Edwardian housing, and a buzzing high street.',
    
    metaTitle: 'Home Services in West Hampstead NW6 | Local Builders & Plumbers | Hampstead Renovations',
    metaDescription: 'Professional home renovation services in West Hampstead NW6. Victorian property experts, boiler installation, and electrical work. Call 07459 345456.',
    h1: 'Expert Home Services in West Hampstead, NW6',
    
    demographics: {
      population: '~12,000',
      avgPropertyPrice: '£750,000',
      predominantPropertyTypes: ['Victorian terraces', 'Converted flats', 'Mansion blocks', 'New developments'],
      affluenceLevel: 'Upper-middle',
    },
    
    history: `West Hampstead developed from the 1870s onwards following the arrival of the railway. The area was built as a middle-class suburb with substantial Victorian houses, many of which have since been converted into flats.

The area was known as "West End" until the 1950s when it was renamed to capitalise on the cachet of nearby Hampstead. The original station buildings at West Hampstead Thameslink are Grade II listed.`,
    
    character: `West Hampstead is known for its excellent transport links – uniquely served by Underground, Overground, and Thameslink services. The high street has undergone significant regeneration with new restaurants, bars, and shops.

The property mix of period conversions and new developments creates varied renovation needs, from sympathetic period restoration to modern flat refurbishments.`,
    
    landmarks: [
      'West Hampstead Thameslink Station',
      'West End Lane',
      'Fortune Green',
      'Emmanuel Church',
    ],
    
    parks: [
      'Fortune Green',
      'West Hampstead Thameslink Gardens',
      'Hampstead Cemetery',
    ],
    
    transport: {
      stations: ['West Hampstead Underground (Jubilee Line)', 'West Hampstead Overground', 'West Hampstead Thameslink'],
      buses: ['139', '328', 'C11'],
      travelZone: 'Zone 2',
    },
    
    council: {
      name: 'London Borough of Camden',
      planningPortal: 'https://www.camden.gov.uk/planning-and-building-control',
      conservationAreas: ['West Hampstead Conservation Area'],
      articleFourAreas: [],
    },
    
    topServices: [
      'bathroom-installation',
      'kitchen-fitting',
      'boiler-installation',
      'electrical-rewiring',
      'plastering',
      'flooring',
    ],
    
    commonIssues: [
      'Flat conversions in period houses',
      'Freeholder/lease complications',
      'Space optimisation in smaller flats',
      'Period feature restoration',
      'Modern heating in old buildings',
      'Sound insulation between flats',
    ],
    
    coveredStreets: [
      'west-end-lane',
      'broadhurst-gardens',
      'sherriff-road',
      'mill-lane',
      'fortune-green-road',
    ],
    
    adjacentAreas: ['hampstead', 'kilburn', 'swiss-cottage', 'brondesbury', 'finchley-road'],
  },
];

// Helper functions
export function getNeighborhoodHub(slug: string): NeighborhoodHub | undefined {
  return neighborhoodHubs.find(n => n.slug === slug);
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoodHubs.map(n => n.slug);
}
