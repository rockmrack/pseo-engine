// ============================================================================
// CHECKLIST DETAIL PAGE
// /checklists/[type] - Individual checklist page with HowTo schema
// ============================================================================

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  checklists, 
  getChecklist, 
  getRelatedChecklists 
} from '@/lib/data/checklists-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

interface PageProps {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return checklists.map((checklist) => ({
    type: checklist.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const checklist = getChecklist(resolvedParams.type);
  
  if (!checklist) {
    return { title: 'Checklist Not Found' };
  }

  const totalTasks = checklist.sections.reduce((sum, section) => sum + section.items.length, 0);

  return {
    title: `${checklist.title} | Free Printable Checklist | Hampstead Renovations`,
    description: `${checklist.description} ${totalTasks} tasks, approximately ${checklist.estimatedTime} to complete.`,
    openGraph: {
      title: checklist.title,
      description: checklist.description,
      type: 'article',
    },
    alternates: {
      canonical: `https://hampsteadrenovations.co.uk/checklists/${resolvedParams.type}`,
    },
  };
}

export default async function ChecklistPage({ params }: PageProps) {
  const resolvedParams = await params;
  const checklist = getChecklist(resolvedParams.type);
  
  if (!checklist) {
    notFound();
  }

  const relatedChecklists = getRelatedChecklists(resolvedParams.type).slice(0, 3);
  const totalTasks = checklist.sections.reduce((sum, section) => sum + section.items.length, 0);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Checklists', href: '/checklists' },
    { name: checklist.title, href: `/checklists/${resolvedParams.type}`, current: true },
  ];

  // HowTo Schema for rich results
  let stepIndex = 0;
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: checklist.title,
    description: checklist.description,
    totalTime: `PT${checklist.estimatedTime.replace(/[^0-9]/g, '')}M`,
    step: checklist.sections.flatMap((section) => 
      section.items.map((item) => ({
        '@type': 'HowToStep',
        position: ++stepIndex,
        name: item.task,
        text: item.description,
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-500 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbs} className="mb-6 text-orange-200" />
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                {checklist.category.charAt(0).toUpperCase() + checklist.category.slice(1)}
              </span>
              <span className="text-orange-200">
                {totalTasks} tasks
              </span>
              <span className="text-orange-200">
                ⏱️ ~{checklist.estimatedTime}
              </span>
              <span className={`text-sm px-3 py-1 rounded-full ${
                checklist.difficulty === 'easy'
                  ? 'bg-green-600 text-white'
                  : checklist.difficulty === 'medium'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-red-600 text-white'
              }`}>
                {checklist.difficulty.charAt(0).toUpperCase() + checklist.difficulty.slice(1)}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {checklist.title}
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl">
              {checklist.description}
            </p>
          </div>
        </section>

        {/* When to Use */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">When to Use This Checklist:</h2>
            <p className="text-slate-700">{checklist.whenToUse}</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-slate-700 text-lg leading-relaxed">
              {checklist.introduction}
            </p>
          </div>
        </section>

        {/* Checklist Sections */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            {checklist.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {sectionIndex + 1}. {section.title}
                </h2>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${
                        item.important ? 'border-red-500' : 'border-blue-500'
                      }`}
                    >
                      <div className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="w-5 h-5 rounded border-slate-300 text-blue-600 mt-1 mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-2">
                            {item.task}
                            {item.important && (
                              <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                                Important
                              </span>
                            )}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {item.description}
                          </p>
                          {item.proTip && (
                            <div className="mt-3 bg-blue-50 rounded-lg p-3 text-sm">
                              <span className="font-medium text-blue-800">💡 Pro Tip:</span>
                              <span className="text-blue-700 ml-2">{item.proTip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips & Warnings */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tips */}
              {checklist.tips.length > 0 && (
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">💡 Helpful Tips</h3>
                  <ul className="space-y-3">
                    {checklist.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-green-800 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Warnings */}
              {checklist.warnings.length > 0 && (
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ Important Warnings</h3>
                  <ul className="space-y-3">
                    {checklist.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">!</span>
                        <span className="text-red-800 text-sm">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {checklist.relatedServices.length > 0 && (
          <section className="py-12 bg-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Need Professional Help?
              </h2>
              <p className="text-slate-600 mb-6">
                If any of these tasks seem complex or you&apos;d prefer professional assistance, 
                we offer the following services:
              </p>
              <div className="flex flex-wrap gap-3">
                {checklist.relatedServices.map((service, index) => (
                  <Link 
                    key={index}
                    href={`/services`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Checklists */}
        {relatedChecklists.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Related Checklists
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedChecklists.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/checklists/${related.slug}`}
                    className="group bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <span className="text-3xl mb-3 block">{related.icon}</span>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {related.estimatedTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          cta={{
            headline: 'Need Help With Home Maintenance?',
            subtext: 'Our team of experts can handle any task on this checklist. Get a free quote today.',
            buttonText: 'Get Free Quote',
            phoneNumber: '020 1234 5678',
          }}
        />
      </main>
    </>
  );
}
