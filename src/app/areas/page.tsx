import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { locations, getAllAreas, getAllPostcodes } from '@/lib/data/locations';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Areas We Cover | Hampstead, North West & North London Home Services',
  description: `${siteConfig.businessName} provides expert home renovation services across ALL of North London. Covering Hampstead, Highgate, Muswell Hill, Crouch End, Islington, Finchley, Golders Green, Wood Green, Tottenham & 30+ postcodes including NW1-NW11 and N1-N22. Call 07459 345456.`,
  keywords: [
    // NW Postcodes
    'plumber NW1', 'plumber NW2', 'plumber NW3', 'plumber NW4', 'plumber NW5',
    'plumber NW6', 'plumber NW7', 'plumber NW8', 'plumber NW9', 'plumber NW10', 'plumber NW11',
    // N Postcodes
    'electrician N1', 'electrician N2', 'electrician N3', 'electrician N4', 'electrician N5',
    'electrician N6', 'electrician N7', 'electrician N8', 'electrician N9', 'electrician N10',
    'electrician N11', 'electrician N12', 'electrician N13', 'electrician N14', 'electrician N15',
    'electrician N16', 'electrician N17', 'electrician N18', 'electrician N19', 'electrician N20',
    'electrician N21', 'electrician N22',
    // Area names
    'builder Hampstead', 'builder Highgate', 'builder Muswell Hill', 'builder Crouch End',
    'builder Islington', 'builder Finchley', 'builder Golders Green', 'builder Stoke Newington',
    'builder Mill Hill', 'builder Hendon', 'builder Wood Green', 'builder Tottenham',
    'North London tradesman', 'NW London home services', 'local plumber North London',
  ],
};

export default function AreasPage() {
  const areas = getAllAreas();
  const postcodes = getAllPostcodes();

  // Group locations by area
  const locationsByArea = areas.reduce((acc, area) => {
    acc[area] = locations.filter(l => l.area === area);
    return acc;
  }, {} as Record<string, typeof locations>);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Areas We Cover in{' '}
              <span className="text-gold-400">North London</span>
            </h1>
            <p className="body-large text-navy-200 mb-8">
              Based at {siteConfig.address.street}, we provide fast, reliable home services
              across {locations.length}+ streets in Hampstead, Highgate, Belsize Park, and beyond.
            </p>
            <div className="flex flex-wrap gap-2">
              {postcodes.slice(0, 8).map(postcode => (
                <span key={postcode} className="badge bg-white/10 text-white backdrop-blur-sm">
                  {postcode}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section bg-white">
        <div className="container-lg">
          {areas.map((area) => (
            <div key={area} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <h2 className="heading-3 text-navy-900">{area}</h2>
                <span className="badge badge-navy text-xs">
                  {locationsByArea[area].length} streets
                </span>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locationsByArea[area].map((location) => (
                  <Link
                    key={location.slug}
                    href={`/local/${location.slug}`}
                    className="p-4 bg-cream-50 hover:bg-cream-100 rounded-xl border border-cream-200 hover:border-gold-300 transition-all group"
                  >
                    <div className="font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                      {location.name}
                    </div>
                    <div className="text-sm text-navy-500 mt-1">
                      {location.postcode} • {location.borough}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="section-cream">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Local Experts, Rapid Response
              </h2>
              <p className="body-large text-navy-600 mb-6">
                Our central location at {siteConfig.address.street} means we can reach
                anywhere in our service area within 30-45 minutes. For emergencies,
                we offer 2-hour response times across all postcodes.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">{siteConfig.address.street}</div>
                    <div className="text-sm text-navy-500">London, {siteConfig.address.postcode}</div>
                  </div>
                </div>
              </div>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call {siteConfig.phone}
              </a>
            </div>

            <div className="aspect-square bg-cream-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream-100 to-cream-300">
                <div className="text-center text-navy-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-navy-400" />
                  <p className="font-medium">Service Area Map</p>
                  <p className="text-sm">Covering all of North London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy">
        <div className="container-lg text-center">
          <h2 className="heading-2 text-white mb-4">
            Can't Find Your Street?
          </h2>
          <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
            We cover the entire North London area. If you don't see your street listed,
            give us a call – we're probably closer than you think!
          </p>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary">
            <Phone className="w-4 h-4 mr-2" />
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
