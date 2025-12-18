// ============================================================================
// SAME-DAY INDEX PAGE
// /same-day - All same-day emergency services
// ============================================================================

import { Metadata } from 'next';
import Link from 'next/link';
import { sameDayServices } from '@/lib/data/same-day-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection } from '@/components/pseo';

export const metadata: Metadata = {
  title: 'Same Day Emergency Services | 24/7 Plumbing, Heating & Electrical',
  description: 'Need an emergency plumber, electrician, or heating engineer today? Same-day service across London with 30-minute response times. Available 24/7.',
  openGraph: {
    title: 'Same Day Emergency Services',
    description: '24/7 emergency plumbing, heating, and electrical services across London.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hampsteadrenovations.co.uk/same-day',
  },
};

export default function SameDayIndexPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Same Day Services', href: '/same-day', current: true },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbs} className="mb-6 text-red-200" />
          
          <div className="max-w-3xl">
            <span className="inline-block bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
              24/7 EMERGENCY SERVICE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Same Day Emergency Services
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Don&apos;t wait for tomorrow. Our emergency engineers are available now for 
              urgent plumbing, heating, and electrical issues across London.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:020XXXXXXXX"
                className="bg-yellow-500 text-yellow-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors text-center"
              >
                📞 Call Now: 020 XXXX XXXX
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Request Callback
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-lg">
              <p className="text-3xl font-bold">30 min</p>
              <p className="text-red-200 text-sm">Avg Response</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-lg">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-red-200 text-sm">Availability</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-lg">
              <p className="text-3xl font-bold">No</p>
              <p className="text-red-200 text-sm">Call-out Fee*</p>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-4 rounded-lg">
              <p className="text-3xl font-bold">Gas Safe</p>
              <p className="text-red-200 text-sm">Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Emergency Services Available Today
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sameDayServices.map((service) => (
              <Link
                key={service.slug}
                href={`/same-day/${service.slug}`}
                className="group bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.name}
                  </h3>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                    {service.responseTime}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {service.description.slice(0, 100)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-semibold">From £{service.price.callout}</span>
                  <span className="text-slate-400 group-hover:text-red-600 transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            When to Call for Emergency Service
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-4 block">💧</span>
              <h3 className="font-bold text-slate-900 mb-2">Water Leak</h3>
              <p className="text-slate-600 text-sm">Burst pipe, leaking tap, or water damage</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-4 block">🔥</span>
              <h3 className="font-bold text-slate-900 mb-2">No Heating</h3>
              <p className="text-slate-600 text-sm">Boiler breakdown or no hot water</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="font-bold text-slate-900 mb-2">Power Issues</h3>
              <p className="text-slate-600 text-sm">Tripping fuse, no power, electrical smell</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-4 block">🚽</span>
              <h3 className="font-bold text-slate-900 mb-2">Blocked Drain</h3>
              <p className="text-slate-600 text-sm">Toilet blocked, drain backing up</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            How Emergency Service Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 text-sm">Describe your emergency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 mb-2">We Dispatch</h3>
              <p className="text-slate-600 text-sm">Nearest engineer sent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 mb-2">We Arrive</h3>
              <p className="text-slate-600 text-sm">Within 30-60 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-slate-900 mb-2">We Fix It</h3>
              <p className="text-slate-600 text-sm">Same-day resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Got an Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-6">
            Our engineers are standing by. Call now for immediate assistance.
          </p>
          <Link
            href="tel:020XXXXXXXX"
            className="inline-block bg-yellow-500 text-yellow-900 px-10 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors"
          >
            📞 020 XXXX XXXX
          </Link>
          <p className="text-red-200 text-sm mt-4">
            * No call-out fee when work is completed
          </p>
        </div>
      </section>
    </main>
  );
}
