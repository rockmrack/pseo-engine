// ============================================================================
// SEASONAL SERVICE PAGE
// /seasonal/[season] - Seasonal/time-sensitive service pages
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { seasons, getSeason, getServicesBySeason, seasonalServices } from '@/lib/data/seasonal-services-database';
import { CTASection, FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ season: string }>;
}

export async function generateStaticParams() {
  return seasons.map((season) => ({
    season: season.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const season = getSeason(resolvedParams.season);
  
  if (!season) {
    return { title: 'Not Found' };
  }

  return {
    title: `${season.name} Home Services | Seasonal Maintenance | London`,
    description: season.description,
    openGraph: {
      title: `${season.name} Home Services`,
      description: season.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://example.co.uk/seasonal/${resolvedParams.season}`,
    },
  };
}

export default async function SeasonalPage({ params }: PageProps) {
  const resolvedParams = await params;
  const season = getSeason(resolvedParams.season);
  
  if (!season) {
    notFound();
  }

  // Get services for this season
  const seasonServices = getServicesBySeason(season.slug as 'spring' | 'summer' | 'autumn' | 'winter');

  // Get other seasons for navigation
  const otherSeasons = seasons.filter(s => s.slug !== season.slug);

  // Season colors
  const seasonColors: Record<string, string> = {
    spring: 'from-green-600 to-green-800',
    summer: 'from-yellow-500 to-orange-600',
    autumn: 'from-orange-600 to-red-700',
    winter: 'from-blue-600 to-blue-900',
  };

  // Season icons
  const seasonIcons: Record<string, string> = {
    spring: 'flower',
    summer: 'sun',
    autumn: 'leaf',
    winter: 'snowflake',
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${seasonColors[season.slug]} text-white py-16`}>
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-white/70 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/seasonal" className="hover:text-white">Seasonal</Link>
            <span className="mx-2">/</span>
            <span>{season.name}</span>
          </nav>
          
          <div className="max-w-3xl">
            <span className="text-6xl mb-4 block">{seasonIcons[season.slug]}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {season.name} Home Services
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {season.description}
            </p>
            <p className="text-white/70">
              Active months: {season.months.map(m => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m - 1]).join(', ')}
            </p>
          </div>
        </div>
      </section>

      {/* Season Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {season.name} Services
          </h2>
          
          {seasonServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/seasonal/${season.slug}/${service.slug}`}
                  className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all border border-slate-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      service.urgency === 'emergency' ? 'bg-red-100 text-red-700' :
                      service.urgency === 'peak-demand' ? 'bg-orange-100 text-orange-700' :
                      service.urgency === 'preparation' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {service.urgency.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{service.typicalCost}</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">Learn more</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-slate-600">No specific services listed for {season.name}. Check out our year-round services.</p>
          )}
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {season.name} Home Maintenance Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seasonServices.slice(0, 4).map((service) => (
              <div key={service.slug} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.name}</h3>
                <ul className="space-y-2">
                  {service.checklist.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-600">
                      <span className="text-green-500">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs from Services */}
      {seasonServices.length > 0 && seasonServices[0].faqs.length > 0 && (
        <FAQSection
          title={`${season.name} Home Services FAQs`}
          faqs={seasonServices.flatMap(s => s.faqs).slice(0, 6)}
        />
      )}

      {/* Other Seasons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Other Seasons
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherSeasons.map((otherSeason) => (
              <Link
                key={otherSeason.slug}
                href={`/seasonal/${otherSeason.slug}`}
                className={`p-6 rounded-xl bg-gradient-to-br ${seasonColors[otherSeason.slug]} text-white hover:opacity-90 transition-opacity`}
              >
                <span className="text-4xl mb-2 block">{seasonIcons[otherSeason.slug]}</span>
                <h3 className="font-bold text-xl mb-1">{otherSeason.name}</h3>
                <p className="text-white/80 text-sm">{otherSeason.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        cta={{
          headline: `Ready for ${season.name}?`,
          subtext: `Book your ${season.name.toLowerCase()} home maintenance now.`,
          buttonText: 'Get a Quote',
          phoneNumber: '020 1234 5678',
        }}
      />
    </main>
  );
}