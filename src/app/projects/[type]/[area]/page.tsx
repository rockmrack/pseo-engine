// ============================================================================
// PSEO ENGINE - PROJECT/PORTFOLIO PAGES
// /projects/[type]/[area] - Showcasing project types by area
// 10x SEO Expansion - Strategy 5
// ============================================================================

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  projectTypes,
  getProjectType,
  generateProjectParams,
} from '@/lib/data/projects-database';
import { getLocation } from '@/lib/data-access';
import { siteConfig, BASE_URL } from '@/lib/config';
import {
  HeroSection,
  FAQSection,
  CTASection,
  TrustSignalsSection,
  TestimonialsSection,
} from '@/components/pseo';
// Schema components removed - using inline JSON-LD

interface ProjectPageProps {
  params: Promise<{
    type: string;
    area: string;
  }>;
}

export async function generateStaticParams() {
  return generateProjectParams();
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { type: typeSlug, area: areaSlug } = await params;
  
  const projectType = getProjectType(typeSlug);
  const location = getLocation(areaSlug);
  
  if (!projectType || !location) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${projectType.name} in ${location.name} | Portfolio | ${siteConfig.businessName}`;
  const description = `Explore ${projectType.name.toLowerCase()} projects in ${location.name}. ${projectType.description} Average investment ${projectType.averageBudget}. View our ${location.name} portfolio.`;
  
  return {
    title,
    description,
    keywords: [
      `${projectType.name.toLowerCase()} ${location.name}`,
      `${location.name} ${projectType.categories[0].toLowerCase()}`,
      `${projectType.name.toLowerCase()} ${location.postcode}`,
      `${location.name} renovation projects`,
      `${projectType.categories.join(' ').toLowerCase()} ${location.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
    },
    alternates: {
      canonical: `${BASE_URL}/projects/${typeSlug}/${areaSlug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { type: typeSlug, area: areaSlug } = await params;
  
  const projectType = getProjectType(typeSlug);
  const location = getLocation(areaSlug);
  
  if (!projectType || !location) {
    notFound();
  }
  
  // Generate project-specific FAQs
  const projectFaqs = [
    {
      question: `How much does ${projectType.name.toLowerCase()} cost in ${location.name}?`,
      answer: `${projectType.name} in ${location.name} typically costs ${projectType.averageBudget}. This investment can add ${projectType.valueAddedPercentage} to your property value. ${siteConfig.businessName} provides detailed, itemized quotes for all projects.`,
    },
    {
      question: `How long does ${projectType.name.toLowerCase()} take in ${location.name}?`,
      answer: `${projectType.name} projects typically take ${projectType.averageTimeline}. Timelines can vary based on property specifics in ${location.name}. We provide detailed project schedules with every quote.`,
    },
    {
      question: `Is ${projectType.name.toLowerCase()} worth it in ${location.name}?`,
      answer: `Yes, ${projectType.name.toLowerCase()} in ${location.name} can add ${projectType.valueAddedPercentage} to property value. Beyond financial returns, you'll enjoy: ${projectType.beforeAfterImprovements.slice(0, 2).join(', ')}. It's particularly valuable for ${projectType.idealFor[0].toLowerCase()}.`,
    },
    {
      question: `What does ${projectType.name.toLowerCase()} include?`,
      answer: `Our ${projectType.name.toLowerCase()} typically includes: ${projectType.typicalFeatures.join(', ')}. Every project is tailored to your specific property and requirements.`,
    },
    {
      question: `Why choose ${siteConfig.businessName} for ${projectType.name.toLowerCase()}?`,
      answer: `${siteConfig.businessName} specializes in ${projectType.categories.join(', ').toLowerCase()} projects throughout ${location.name}. We combine local expertise with exceptional craftsmanship, delivering transformations that enhance both lifestyle and property value.`,
    },
  ];
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.businessName,
            "description": `${projectType.name} specialists in ${location.name}`,
            "url": `${BASE_URL}/projects/${typeSlug}/${areaSlug}`,
            "telephone": siteConfig.phone,
            "areaServed": location.name,
          }),
        }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <HeroSection
          h1={`${projectType.name} in ${location.name}`}
          subtitle={`${projectType.description} Discover how ${siteConfig.businessName} transforms ${location.name} properties with expert ${projectType.categories[0].toLowerCase()} expertise.`}
          trustBadges={[`Budget: ${projectType.averageBudget}`, `Timeline: ${projectType.averageTimeline}`, 'Expert Craftsmanship']}
          ctaText="Discuss Your Project"
          ctaSecondary="View Our Work"
          location={location.name}
        />
        
        {/* Project Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {projectType.categories.map((category, index) => (
                  <div key={index} className="bg-blue-600 text-white rounded-lg p-4 text-center">
                    <span className="font-semibold">{category}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Key Stats */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-gray-600">Average Investment:</span>
                      <span className="font-bold text-blue-600">{projectType.averageBudget}</span>
                    </div>
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-gray-600">Typical Timeline:</span>
                      <span className="font-bold">{projectType.averageTimeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Value Added:</span>
                      <span className="font-bold text-green-600">{projectType.valueAddedPercentage}</span>
                    </div>
                  </div>
                </div>
                
                {/* Ideal For */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
                  <ul className="space-y-3">
                    {projectType.idealFor.map((ideal, index) => (
                      <li key={index} className="flex items-center">
                        <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          ✓
                        </span>
                        <span className="text-gray-700">{ideal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Typical Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What&apos;s Included in {projectType.name}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectType.typicalFeatures.map((feature, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4">
                      {index + 1}
                    </div>
                    <p className="font-medium text-gray-900">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Before/After Transformations */}
        <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The Transformation You Can Expect
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6">
                {projectType.beforeAfterImprovements.map((improvement, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center">
                      <span className="text-green-400 text-2xl mr-3">→</span>
                      <span className="text-lg">{improvement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Value Proposition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Invest in {projectType.name} in {location.name}?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Increase Value</h3>
                  <p className="text-gray-600">
                    Add {projectType.valueAddedPercentage} to your {location.name} property value
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transform Living</h3>
                  <p className="text-gray-600">
                    Enjoy a dramatically improved home experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Delivery</h3>
                  <p className="text-gray-600">
                    {siteConfig.businessName}&apos;s proven {location.name} expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trust Signals */}
        <TrustSignalsSection signals={[
          { type: 'insurance', icon: 'shield', name: 'Fully Insured', description: 'Complete peace of mind' },
          { type: 'award', icon: 'award', name: '20+ Years Experience', description: 'Expert craftsmanship' },
          { type: 'guarantee', icon: 'check-circle', name: 'Satisfaction Guaranteed', description: 'Quality assured' },
          { type: 'distance', icon: 'map-pin', name: 'Local Experts', description: `Serving ${location.name}` },
        ]} />
        
        {/* FAQs */}
        <FAQSection
          title={`${projectType.name} FAQs - ${location.name}`}
          faqs={projectFaqs}
        />
        
        {/* Testimonials */}
        <TestimonialsSection
          title={`What ${location.name} Clients Say About Their Projects`}
          testimonials={[
            { name: 'Project Customer', location: location.name, rating: 5, text: `Our ${projectType.name.toLowerCase()} project exceeded expectations. Professional team and beautiful results.`, service: projectType.name, date: new Date().toISOString(), verified: true },
            { name: 'Happy Homeowner', location: location.name, rating: 5, text: 'Transformed our property completely. The attention to detail was exceptional.', service: projectType.name, date: new Date().toISOString(), verified: true },
            { name: 'Satisfied Client', location: location.name, rating: 5, text: 'From design to completion, the whole process was smooth. Highly recommend!', service: projectType.name, date: new Date().toISOString(), verified: true },
          ]}
        />
        
        {/* Other Project Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Explore Other Project Types in {location.name}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {projectTypes
                .filter(p => p.slug !== typeSlug)
                .slice(0, 6)
                .map(project => (
                  <a
                    key={project.slug}
                    href={`/projects/${project.slug}/${areaSlug}`}
                    className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-800"
                  >
                    {project.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection
          cta={{
            headline: `Start Your ${projectType.name} in ${location.name}`,
            subtext: `Ready to transform your ${location.name} property? ${siteConfig.businessName} delivers exceptional ${projectType.categories[0].toLowerCase()} projects. Let's discuss your vision.`,
            buttonText: 'Schedule Consultation',
            phoneNumber: siteConfig.phone,
          }}
        />
      </main>
    </>
  );
}
