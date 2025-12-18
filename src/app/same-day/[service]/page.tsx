// ============================================================================
// SAME-DAY SERVICE PAGE
// /same-day/[service] - Same-day/emergency service pages
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sameDayServices, getSameDayService } from '@/lib/data/same-day-database';
import { locations } from '@/lib/data/locations';
import { CTASection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return sameDayServices.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getSameDayService(resolvedParams.service);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} | ${service.responseTime} Response | London Emergency`,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://example.co.uk/same-day/${resolvedParams.service}`,
    },
  };
}

export default async function SameDayServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = getSameDayService(resolvedParams.service);
  
  if (!service) {
    notFound();
  }

  const urgencyColors = {
    critical: 'from-red-600 to-red-800',
    high: 'from-orange-600 to-orange-800',
    standard: 'from-blue-600 to-blue-800',
  };

  // Get coverage areas from locations
  const coverageAreas = locations.slice(0, 24);

  // Other same-day services for linking
  const otherServices = sameDayServices.filter(s => s.slug !== resolvedParams.service).slice(0, 4);

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section - Urgent styling */}
        <section className={`bg-gradient-to-br ${urgencyColors[service.urgencyLevel]} text-white py-16`}>
          <div className="container mx-auto px-4">
            <nav className="mb-6 text-white/70 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/same-day" className="hover:text-white">Same Day</Link>
              <span className="mx-2">/</span>
              <span>{service.name}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    {service.urgencyLevel.toUpperCase()} PRIORITY
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.responseTime} Response
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {service.name}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="tel:02012345678"
                    className="bg-yellow-500 text-yellow-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors text-center"
                  >
                    Call Now: 020 1234 5678
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>
              
              {/* Urgent Info Card */}
              <div className="bg-white text-slate-900 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">clock</span>
                  <p className="text-3xl font-bold text-red-600">{service.responseTime}</p>
                  <p className="text-slate-600">Typical Response Time</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <span className="text-green-500 text-xl">check</span>
                    <span className="font-medium">Available {service.availability}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <span className="text-green-500 text-xl">check</span>
                    <span className="font-medium">Parts in van for most repairs</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <span className="text-green-500 text-xl">check</span>
                    <span className="font-medium">{service.guarantee}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-slate-600 text-sm">Callout from</p>
                  <p className="text-4xl font-bold text-slate-900">GBP{service.price.callout}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              When to Call for {service.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.commonScenarios.map((scenario, index) => (
                <div key={index} className="flex items-start gap-4 bg-red-50 p-6 rounded-xl">
                  <span className="text-2xl">alert</span>
                  <span className="text-slate-700">{scenario}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Bring */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What Our Engineers Bring
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {service.whatWeBring.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl">tools</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-3">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Transparent Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-slate-400 mb-2">Callout Fee</p>
                <p className="text-4xl font-bold">GBP{service.price.callout}</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-slate-400 mb-2">Hourly Rate</p>
                <p className="text-4xl font-bold">GBP{service.price.hourlyRate}/hr</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-slate-400 mb-2">Fixed Price</p>
                <p className="text-4xl font-bold">{service.price.fixedPriceAvailable ? 'Available' : 'N/A'}</p>
              </div>
            </div>
            
            <p className="text-center text-slate-400 mt-6">
              {service.guarantee}
            </p>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {service.name} Coverage Areas
            </h2>
            <p className="text-slate-600 mb-8">
              We provide {service.name.toLowerCase()} across London including:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {coverageAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/same-day/${resolvedParams.service}/${area.slug}`}
                  className="bg-slate-50 px-4 py-3 rounded-lg text-center hover:bg-red-50 hover:text-red-700 transition-colors text-sm"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Emergency Services */}
        {otherServices.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Other Emergency Services
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/same-day/${relatedService.slug}`}
                    className="bg-white rounded-lg p-4 hover:bg-red-50 transition-colors group shadow-sm"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-red-600 mb-1">
                      {relatedService.name}
                    </h3>
                    <p className="text-slate-500 text-sm">{relatedService.responseTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          cta={{
            headline: `Need ${service.name}?`,
            subtext: `${service.responseTime} response. ${service.availability}.`,
            buttonText: 'Call Now',
            phoneNumber: '020 1234 5678',
          }}
        />
      </main>
    </>
  );
}