// ============================================================================
// ROOM-SPECIFIC SERVICE PAGE
// /rooms/[room]/[service] - Room-specific service pages
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  roomTypes,
  getRoomType,
  roomServices,
  getRoomService,
  getServicesForRoom,
  generateRoomServiceParams
} from '@/lib/data/room-services-database';
import { CTASection, FAQSection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ room: string; service: string }>;
}

export async function generateStaticParams() {
  return generateRoomServiceParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const room = getRoomType(resolvedParams.room);
  const service = getRoomService(resolvedParams.room, resolvedParams.service);
  
  if (!room || !service) {
    return { title: 'Not Found' };
  }

  return {
    title: `${service.title} | ${room.name} Specialists | London`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `https://example.co.uk/rooms/${resolvedParams.room}/${resolvedParams.service}`,
    },
  };
}

export default async function RoomServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const room = getRoomType(resolvedParams.room);
  const service = getRoomService(resolvedParams.room, resolvedParams.service);
  
  if (!room || !service) {
    notFound();
  }

  // Get other services for this room
  const otherServices = getServicesForRoom(room.slug).filter(s => s.serviceSlug !== service.serviceSlug);

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'London Property Services',
    },
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="mb-6 text-blue-200 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/rooms" className="hover:text-white">Rooms</Link>
              <span className="mx-2">/</span>
              <Link href={`/rooms/${room.slug}`} className="hover:text-white">{room.name}</Link>
              <span className="mx-2">/</span>
              <span>{service.serviceName}</span>
            </nav>
            
            <div className="max-w-3xl">
              <span className="inline-block bg-blue-500/30 text-blue-200 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {room.name} Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-blue-600/50 px-4 py-2 rounded-lg">
                  <span className="text-blue-200 text-sm">Typical Cost</span>
                  <p className="font-bold">{service.typicalCost}</p>
                </div>
                <div className="bg-blue-600/50 px-4 py-2 rounded-lg">
                  <span className="text-blue-200 text-sm">Timeframe</span>
                  <p className="font-bold">{service.timeframe}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="tel:02012345678"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call: 020 1234 5678
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Common Requests */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Common {room.name} {service.serviceName} Requests
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.commonRequests.map((request, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{request}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Our {service.serviceName} Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.ourProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-slate-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Room Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              About {room.name} Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-600 mb-6">{room.description}</p>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Typical Issues</h3>
                <ul className="space-y-2">
                  {room.typicalIssues.map((issue, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-600">
                      <span className="text-amber-500">!</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Considerations</h3>
                <ul className="space-y-2">
                  {room.considerations.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-500">i</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {room.averageSize && (
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500">Average Room Size</span>
                    <p className="font-semibold text-slate-900">{room.averageSize}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <FAQSection
            title={`${room.name} ${service.serviceName} FAQs`}
            faqs={service.faqs}
          />
        )}

        {/* Other Services for This Room */}
        {otherServices.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Other {room.name} Services
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {otherServices.map((other) => (
                  <Link
                    key={other.serviceSlug}
                    href={`/rooms/${room.slug}/${other.serviceSlug}`}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">{other.serviceName}</h3>
                    <p className="text-sm text-slate-600 mb-4">{other.description.slice(0, 100)}...</p>
                    <span className="text-blue-600 text-sm font-medium">Learn more</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          cta={{
            headline: `Need ${service.serviceName} for Your ${room.name}?`,
            subtext: `Expert ${room.name.toLowerCase()} specialists ready to help.`,
            buttonText: 'Get a Quote',
            phoneNumber: '020 1234 5678',
          }}
        />
      </main>
    </>
  );
}