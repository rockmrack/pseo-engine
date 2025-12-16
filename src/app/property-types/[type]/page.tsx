import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle, 
  AlertTriangle,
  Home,
  Calendar,
  PoundSterling,
  HelpCircle,
  Flame,
  Thermometer,
  Users,
  Droplets,
  Landmark,
  FileText,
  Volume2,
  Truck,
  Settings,
  Scroll,
  Move,
  Maximize,
  Sun,
  Palette,
  DoorOpen,
} from 'lucide-react';
import { buildingTypes, getBuildingTypeBySlug, getAllBuildingTypeSlugs } from '@/lib/data/building-types';
import { services } from '@/lib/data/services';
import { locations } from '@/lib/data/locations';
import { siteConfig, BASE_URL } from '@/lib/config';

// Icon mapping for challenges
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flame: Flame,
  thermometer: Thermometer,
  users: Users,
  droplets: Droplets,
  landmark: Landmark,
  'file-text': FileText,
  'volume-2': Volume2,
  truck: Truck,
  settings: Settings,
  scroll: Scroll,
  move: Move,
  maximize: Maximize,
  sun: Sun,
  palette: Palette,
  'door-open': DoorOpen,
  'brick-wall': Home,
  home: Home,
};

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBuildingTypeSlugs().map((slug) => ({
    type: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const buildingType = getBuildingTypeBySlug(type);

  if (!buildingType) {
    return { title: 'Property Type Not Found' };
  }

  return {
    title: buildingType.metaTitle,
    description: buildingType.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/property-types/${buildingType.slug}`,
    },
    openGraph: {
      title: buildingType.metaTitle,
      description: buildingType.metaDescription,
      type: 'website',
    },
  };
}

export default async function BuildingTypePage({ params }: PageProps) {
  const { type } = await params;
  const buildingType = getBuildingTypeBySlug(type);

  if (!buildingType) {
    notFound();
  }

  // Get related services
  const relatedServices = buildingType.popularServices
    .map(slug => services.find(s => s.slug === slug))
    .filter(Boolean)
    .slice(0, 8);

  // Get locations with this property type
  const relevantLocations = locations
    .filter(loc => loc.propertyType.includes(type as never))
    .slice(0, 6);

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: buildingType.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              {buildingType.era}
            </div>

            <h1 className="heading-1 mb-6">
              {buildingType.name}{' '}
              <span className="text-gold-400">Renovation Specialists</span>
            </h1>

            <p className="body-large text-navy-200 mb-8">
              We understand the unique challenges and character of {buildingType.shortName} properties. 
              From {buildingType.characteristics.construction.toLowerCase()} to {buildingType.characteristics.windowType.toLowerCase()}, 
              our specialists deliver exceptional results while respecting period integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" />
                Call {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Characteristics */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              Understanding {buildingType.shortName} Properties
            </h2>
            <p className="body-large text-navy-600 max-w-2xl mx-auto">
              Key characteristics we work with every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(buildingType.characteristics).map(([key, value]) => (
              <div key={key} className="bg-cream-50 rounded-xl p-6 border border-cream-200">
                <div className="text-sm font-medium text-gold-600 uppercase tracking-wide mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-navy-900 font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Challenges */}
      <section className="section-cream">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              Common {buildingType.shortName} Renovation Challenges
            </h2>
            <p className="body-large text-navy-600 max-w-2xl mx-auto">
              We&apos;ve solved these issues hundreds of times. Here&apos;s how we approach them.
            </p>
          </div>

          <div className="space-y-6">
            {buildingType.challenges.map((challenge, index) => {
              const IconComponent = iconMap[challenge.icon] || AlertTriangle;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-cream-200 shadow-sm">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="heading-5 text-navy-900">{challenge.title}</h3>
                      </div>
                      <p className="text-navy-600">{challenge.description}</p>
                    </div>
                    <div className="lg:col-span-2 bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-green-800 mb-2">Our Solution</div>
                          <p className="text-green-700">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">
              Regulations & Compliance
            </h2>
            <p className="body-large text-navy-600 max-w-2xl mx-auto">
              We handle all regulatory requirements for {buildingType.shortName} renovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingType.regulations.map((reg, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6 border border-cream-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    reg.requirement === 'mandatory' 
                      ? 'bg-red-100 text-red-700'
                      : reg.requirement === 'recommended'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {reg.requirement}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{reg.title}</h3>
                <p className="text-sm text-navy-600">{reg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Costs */}
      <section className="section-navy">
        <div className="container-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-full text-sm font-medium mb-4">
              <PoundSterling className="w-4 h-4" />
              Pricing Guide
            </div>
            <h2 className="heading-2 text-white mb-4">
              Typical {buildingType.shortName} Renovation Costs
            </h2>
            <p className="body-large text-navy-200 max-w-2xl mx-auto">
              Real-world pricing based on our recent projects. Updated December 2024.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400">Price Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {buildingType.typicalCosts.map((cost, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-0">
                    <td className="px-6 py-4 text-white font-medium">{cost.service}</td>
                    <td className="px-6 py-4 text-gold-400 font-semibold">{cost.priceRange}</td>
                    <td className="px-6 py-4 text-navy-300 text-sm hidden md:table-cell">{cost.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-navy-300 text-sm mt-6">
            Prices are indicative and depend on specification, access, and existing condition. 
            <Link href="/contact" className="text-gold-400 hover:text-gold-300 ml-1">Get a detailed quote →</Link>
          </p>
        </div>
      </section>

      {/* Popular Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-white">
          <div className="container-lg">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">
                Popular Services for {buildingType.shortName} Properties
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service!.slug}
                  href={`/services/${service!.slug}`}
                  className="flex items-center justify-between p-4 bg-cream-50 hover:bg-cream-100 rounded-xl border border-cream-200 hover:border-gold-300 transition-all group"
                >
                  <div>
                    <div className="font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                      {service!.name}
                    </div>
                    <div className="text-sm text-navy-500">{service!.priceAnchor}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-cream">
        <div className="container-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </div>
            <h2 className="heading-2 text-navy-900 mb-4">
              {buildingType.shortName} Renovation FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {buildingType.faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-cream-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-navy-900 pr-4">{faq.question}</h3>
                  <ArrowRight className="w-5 h-5 text-navy-400 transform group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-navy-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Locations with this property type */}
      {relevantLocations.length > 0 && (
        <section className="section bg-white">
          <div className="container-lg">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-navy-900 mb-4">
                Areas with {buildingType.shortName} Properties
              </h2>
              <p className="body-large text-navy-600 max-w-2xl mx-auto">
                We serve these locations with specialist {buildingType.shortName.toLowerCase()} renovation services
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relevantLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/local/${location.slug}`}
                  className="flex items-center gap-3 p-4 bg-cream-50 rounded-xl border border-cream-200 hover:border-gold-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <Home className="w-5 h-5 text-gold-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">{location.name}</div>
                    <div className="text-sm text-navy-500">{location.area}, {location.postcode}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-navy">
        <div className="container-lg text-center">
          <h2 className="heading-2 text-white mb-4">
            Planning a {buildingType.shortName} Renovation?
          </h2>
          <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
            Get expert advice from specialists who understand {buildingType.shortName.toLowerCase()} properties inside and out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4">
              Request a Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 86400; // Revalidate daily
