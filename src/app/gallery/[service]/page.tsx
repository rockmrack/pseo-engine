// ============================================================================
// GALLERY SERVICE PAGE - Before/After Projects
// /gallery/[service] - Service-specific gallery pages
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  getProjectsByService,
  galleryServices 
} from '@/lib/data/before-after-database';
import { Breadcrumb, generateBreadcrumbs } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return galleryServices.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = galleryServices.find(s => s.slug === resolvedParams.service);
  
  if (!service) {
    return { title: 'Gallery Not Found' };
  }

  const projects = getProjectsByService(resolvedParams.service);
  
  return {
    title: `${service.name} Before & After Gallery | Hampstead Renovations`,
    description: `View ${projects.length}+ ${service.name.toLowerCase()} before and after photos. See real transformations from our North London projects.`,
    openGraph: {
      title: `${service.name} Before & After Gallery`,
      description: `See real ${service.name.toLowerCase()} transformations from Hampstead Renovations.`,
      type: 'website',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/gallery/${resolvedParams.service}`,
    },
  };
}

export default async function GalleryServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = galleryServices.find(s => s.slug === resolvedParams.service);
  
  if (!service) {
    notFound();
  }

  const projects = getProjectsByService(resolvedParams.service);
  
  const breadcrumbs = generateBreadcrumbs('gallery', {
    service: resolvedParams.service,
    serviceName: service.name,
  });

  // ImageGallery schema for rich results
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${service.name} Before & After Gallery`,
    description: `Before and after photos of ${service.name.toLowerCase()} projects by Hampstead Renovations`,
    numberOfItems: projects.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbs} className="mb-6 text-slate-300" />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.name} Before & After Gallery
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Browse {projects.length} real {service.name.toLowerCase()} transformations 
              completed by our expert team across North London.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article 
                  key={project.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Before/After Descriptions */}
                  <div className="bg-gradient-to-r from-red-500 to-green-500 p-4">
                    <div className="flex justify-between text-white text-sm font-medium">
                      <span className="bg-red-600 px-3 py-1 rounded">BEFORE</span>
                      <span className="bg-green-600 px-3 py-1 rounded">AFTER</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50">
                    <div className="text-sm">
                      <p className="text-slate-600">{project.beforeDescription}</p>
                    </div>
                    <div className="text-sm border-l border-slate-200 pl-4">
                      <p className="text-slate-700">{project.afterDescription}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-3">
                      {project.area} • {project.duration}
                    </p>
                    <p className="text-slate-700 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <h3 className="text-sm font-semibold text-red-600">Challenge:</h3>
                        <p className="text-sm text-slate-600">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-green-600">Solution:</h3>
                        <p className="text-sm text-slate-600">{project.solution}</p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((f, i) => (
                        <span 
                          key={i}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Cost Range */}
                    {project.cost && (
                      <p className="text-sm text-slate-500">
                        Project cost: <span className="font-semibold text-slate-700">{project.cost}</span>
                      </p>
                    )}

                    {/* Testimonial */}
                    {project.testimonial && (
                      <blockquote className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-sm italic text-slate-600">&quot;{project.testimonial.quote}&quot;</p>
                        <cite className="text-xs text-slate-500 mt-1 block">
                          — {project.testimonial.author}, {project.testimonial.location}
                        </cite>
                      </blockquote>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">
                  No gallery projects available for this service yet.
                </p>
                <Link 
                  href="/gallery"
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  View all projects →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Services Gallery Links */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Explore More Galleries
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryServices
                .filter(s => s.slug !== resolvedParams.service)
                .map((s) => {
                  const count = getProjectsByService(s.slug).length;
                  return (
                    <Link
                      key={s.slug}
                      href={`/gallery/${s.slug}`}
                      className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-slate-900">{s.name}</h3>
                      <p className="text-sm text-slate-500">{count} projects</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Ready to Transform Your ${service.name}?`,
            subtext: "Get a free quote and see how we can bring your vision to life.",
            buttonText: "Get Free Quote",
            phoneNumber: "020 8000 0000"
          }}
        />
      </main>
    </>
  );
}
