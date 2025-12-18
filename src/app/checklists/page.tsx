// ============================================================================
// CHECKLISTS INDEX PAGE
// /checklists - Main checklists landing page
// ============================================================================

import { Metadata } from 'next';
import Link from 'next/link';
import { maintenanceChecklists, checklistCategories } from '@/lib/data/checklists-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';

export const metadata: Metadata = {
  title: 'Home Maintenance Checklists | Free Downloadable Guides | Hampstead Renovations',
  description: 'Free home maintenance checklists for heating, plumbing, electrical, and seasonal tasks. Keep your home in top condition with our expert guides.',
  openGraph: {
    title: 'Home Maintenance Checklists',
    description: 'Free downloadable home maintenance checklists to keep your property in perfect condition.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hampsteadrenovations.co.uk/checklists',
  },
};

// Helper function to count total items in a checklist
function countChecklistItems(checklist: { sections: { items: unknown[] }[] }): number {
  return checklist.sections.reduce((total, section) => total + section.items.length, 0);
}

// Helper to get difficulty badge styling
function getDifficultyBadge(difficulty: string): { bg: string; text: string } {
  switch (difficulty) {
    case 'easy':
      return { bg: 'bg-green-100', text: 'text-green-700' };
    case 'medium':
      return { bg: 'bg-yellow-100', text: 'text-yellow-700' };
    case 'hard':
      return { bg: 'bg-red-100', text: 'text-red-700' };
    default:
      return { bg: 'bg-slate-100', text: 'text-slate-700' };
  }
}

export default function ChecklistsPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Checklists', href: '/checklists', current: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbs} className="mb-6 text-orange-200" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Home Maintenance Checklists
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Free expert checklists to help you maintain your home. Prevent costly repairs 
            with regular maintenance tasks you can do yourself or know when to call a professional.
          </p>
          
          {/* Value Prop */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free to download</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Expert-created content</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Printable formats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Browse by Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {checklistCategories.map((category) => {
              const count = maintenanceChecklists.filter(c => c.category === category.slug).length;
              return (
                <Link
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 rounded-xl p-6 text-center transition-all"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-500">{count} checklists</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Checklists by Category */}
      {checklistCategories.map((category) => {
        const categoryChecklists = maintenanceChecklists.filter(c => c.category === category.slug);
        
        return (
          <section 
            key={category.slug} 
            id={category.slug}
            className="py-16 odd:bg-slate-50 even:bg-white"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {category.icon} {category.name}
                  </h2>
                  <p className="text-slate-600 mt-1">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryChecklists.map((checklist) => {
                  const badge = getDifficultyBadge(checklist.difficulty);
                  const itemCount = countChecklistItems(checklist);
                  
                  return (
                    <Link
                      key={checklist.slug}
                      href={`/checklists/${checklist.slug}`}
                      className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {checklist.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full capitalize ${badge.bg} ${badge.text}`}>
                          {checklist.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-4">
                        {checklist.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">
                          {itemCount} tasks • {checklist.sections.length} sections
                        </span>
                        <span className="text-slate-500">
                          ⏱️ ~{checklist.estimatedTime}
                        </span>
                      </div>
                      
                      <div className="mt-4 text-orange-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                        View checklist →
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Use Checklists */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Regular Maintenance Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Save Money</h3>
              <p className="text-slate-600">
                Prevent expensive emergency repairs with regular maintenance checks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Protect Your Home</h3>
              <p className="text-slate-600">
                Extend the life of your home&apos;s systems and maintain property value.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Peace of Mind</h3>
              <p className="text-slate-600">
                Know your home is safe and all systems are working properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Some maintenance tasks require professional expertise. Our team of certified 
            tradespeople is ready to help with any home repair or renovation project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Total Checklists Count */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>
            Browse our collection of <strong>{maintenanceChecklists.length}</strong> free home maintenance checklists
          </p>
        </div>
      </section>
    </main>
  );
}
