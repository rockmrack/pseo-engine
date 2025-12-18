// ============================================================================
// BOROUGHS INDEX PAGE
// /boroughs - All London boroughs we serve
// ============================================================================

import { Metadata } from 'next';
import Link from 'next/link';
import { boroughs } from '@/lib/data/boroughs-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

export const metadata: Metadata = {
  title: 'London Boroughs We Serve | Plumbing, Heating & Electrical Services',
  description: 'Hampstead Renovations provides plumbing, heating, and electrical services across London. Find your borough for local expertise and fast response times.',
  openGraph: {
    title: 'London Boroughs We Serve',
    description: 'Expert home services across all London boroughs with local knowledge and fast response.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hampsteadrenovations.co.uk/boroughs',
  },
};

export default function BoroughsIndexPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'London Boroughs', href: '/boroughs', current: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbs} className="mb-6 text-slate-300" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            London Boroughs We Serve
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Expert plumbing, heating, and electrical services across all of London. 
            Find your borough for local expertise, fast response times, and competitive pricing.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold">{boroughs.length}</p>
              <p className="text-slate-300 text-sm">Boroughs Covered</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-slate-300 text-sm">Areas Served</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-2xl font-bold">&lt;2hrs</p>
              <p className="text-slate-300 text-sm">Avg Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Boroughs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            All London Boroughs
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/borough/${borough.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {borough.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                  {borough.areas.slice(0, 3).join(', ')}...
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <span className="text-green-600 font-medium">Fast Response</span>
                  <span className="mx-2">•</span>
                  <span>{borough.areas.length} areas</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Services Available in All Boroughs
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Emergency Plumbing', icon: '🚿' },
              { name: 'Boiler Repairs', icon: '🔥' },
              { name: 'Electrical Work', icon: '⚡' },
              { name: 'Gas Safety', icon: '🔧' },
              { name: 'Bathroom Fitting', icon: '🛁' },
              { name: 'Central Heating', icon: '🌡️' },
              { name: 'Drain Unblocking', icon: '🔓' },
              { name: 'Power Flushing', icon: '💪' },
            ].map((service) => (
              <div key={service.name} className="text-center">
                <span className="text-3xl mb-2 block">{service.icon}</span>
                <p className="font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        cta={{
          headline: "Can't Find Your Area?",
          subtext: "We cover all of Greater London. Get in touch and we'll confirm coverage and provide a quote.",
          buttonText: 'Get Free Quote',
          phoneNumber: '020 1234 5678',
        }}
      />
    </main>
  );
}
