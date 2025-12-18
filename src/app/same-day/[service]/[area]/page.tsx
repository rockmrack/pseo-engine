// ============================================================================
// SAME-DAY SERVICE + AREA PAGE
// /same-day/[service]/[area] - Same-day emergency service in specific area
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sameDayServices, getSameDayService } from '@/lib/data/same-day-database';
import { locations, getLocation } from '@/lib/data/locations';
import { CTASection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ service: string; area: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; area: string }[] = [];
  
  sameDayServices.forEach((service) => {
    locations.slice(0, 30).forEach((location) => {
      params.push({
        service: service.slug,
        area: location.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getSameDayService(resolvedParams.service);
  const location = getLocation(resolvedParams.area);
  
  if (!service || !location) {
    return { title: 'Not Found' };
  }

  return {
    title: `${service.name} in ${location.name} | ${service.responseTime} Response`,
    description: `Emergency ${service.name.toLowerCase()} in ${location.name}. ${service.responseTime} response, ${service.availability}. Local engineers ready now.`,
    openGraph: {
      title: `${service.name} in ${location.name}`,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://example.co.uk/same-day/${resolvedParams.service}/${resolvedParams.area}`,
    },
  };
}

export default async function SameDayAreaPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = getSameDayService(resolvedParams.service);
  const location = getLocation(resolvedParams.area);
  
  if (!service || !location) {
    notFound();
  }

  const urgencyColors = {
    critical: 'from-red-600 to-red-800',
    high: 'from-orange-600 to-orange-800',
    standard: 'from-blue-600 to-blue-800',
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className={`bg-gradient-to-br ${urgencyColors[service.urgencyLevel]} text-white py-16`}>
          <div className="container mx-auto px-4">
            <nav className="mb-6 text-white/70 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/same-day" className="hover:text-white">Same Day</Link>
              <span className="mx-2">/</span>
              <Link href={`/same-day/${service.slug}`} className="hover:text-white">{service.name}</Link>
              <span className="mx-2">/</span>
              <span>{location.name}</span>
            </nav>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
                    {service.urgencyLevel.toUpperCase()} PRIORITY
                  </span>
                  <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    AVAILABLE NOW
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {service.name} in {location.name}
                </h1>
                
                <p className="text-xl text-white/90 mb-6">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <span className="text-white/70 text-sm">Response Time</span>
                    <p className="font-bold">{service.responseTime}</p>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <span className="text-white/70 text-sm">Available</span>
                    <p className="font-bold">{service.availability}</p>
                  </div>
                </div>
                
                <Link
                  href="tel:02012345678"
                  className="inline-block bg-yellow-500 text-yellow-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  Call Now: 020 1234 5678
                </Link>
              </div>
              
              <div className="bg-white text-slate-900 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">pin</span>
                  <p className="text-xl font-bold text-slate-900">{location.name} Coverage</p>
                  <p className="text-red-600 font-semibold">{service.responseTime} Response Time</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <span className="text-green-500 text-xl">check</span>
                    <span className="font-medium">Local {location.name} engineers</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <span className="text-green-500 text-xl">check</span>
                    <span className="font-medium">Know the area well</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <span className="text-green-500 text-xl">check</span>
                    <span className="font-medium">Parts for common issues</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-center text-slate-600">Emergency rate from</p>
                  <p className="text-center text-4xl font-bold text-slate-900">GBP{service.price.callout}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              When to Call for {service.name} in {location.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.commonScenarios.map((scenario, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-red-500 text-xl">alert</span>
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
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Transparent Emergency Pricing
            </h2>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl text-center">
                <p className="text-slate-400 mb-2">Callout Fee</p>
                <p className="text-3xl font-bold">GBP{service.price.callout}</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl text-center">
                <p className="text-slate-400 mb-2">Hourly Rate</p>
                <p className="text-3xl font-bold">GBP{service.price.hourlyRate}/hr</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl text-center">
                <p className="text-slate-400 mb-2">Fixed Price Option</p>
                <p className="text-3xl font-bold">{service.price.fixedPriceAvailable ? 'Available' : 'Hourly Only'}</p>
              </div>
            </div>
            
            <p className="text-center mt-6 text-slate-400">
              {service.guarantee}
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          cta={{
            headline: `Need Emergency ${service.name} in ${location.name}?`,
            subtext: `${service.responseTime} response. Local engineers ready now.`,
            buttonText: 'Call Now',
            phoneNumber: '020 1234 5678',
          }}
        />
      </main>
    </>
  );
}