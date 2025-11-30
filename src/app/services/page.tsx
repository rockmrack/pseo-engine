import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle, Wrench, Zap, Droplets, Home, Shield, Wifi } from 'lucide-react';
import { services, getAllCategories } from '@/lib/data/services';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Our Services | Plumbing, Electrical, Carpentry & More',
  description: `${siteConfig.businessName} offers comprehensive home services including plumbing, electrical, carpentry, roofing, decorating, and smart home installation across North London.`,
  keywords: [
    'plumber North London',
    'electrician Hampstead',
    'carpenter NW3',
    'builder London',
    'home renovation services',
  ],
};

const categoryIcons: Record<string, React.ReactNode> = {
  plumbing: <Droplets className="w-8 h-8" />,
  heating: <Wrench className="w-8 h-8" />,
  electrical: <Zap className="w-8 h-8" />,
  carpentry: <Home className="w-8 h-8" />,
  roofing: <Home className="w-8 h-8" />,
  decorating: <Home className="w-8 h-8" />,
  building: <Home className="w-8 h-8" />,
  restoration: <Home className="w-8 h-8" />,
  security: <Shield className="w-8 h-8" />,
  'smart-home': <Wifi className="w-8 h-8" />,
  outdoor: <Home className="w-8 h-8" />,
  emergency: <Wrench className="w-8 h-8" />,
};

const categoryDescriptions: Record<string, string> = {
  plumbing: 'From leak repairs to bathroom installations, our Gas Safe registered plumbers handle all your plumbing needs.',
  heating: 'Expert heating engineers for boiler repairs, installations, and central heating maintenance.',
  electrical: 'NICEIC approved electricians for rewiring, lighting, EV chargers, and smart home installations.',
  carpentry: 'Master craftsmen for bespoke joinery, sash window restoration, and kitchen fitting.',
  roofing: 'Professional roofers for repairs, replacements, and loft conversions.',
  decorating: 'Expert decorators using premium paints for flawless interior and exterior finishes.',
  building: 'Experienced builders for extensions, loft conversions, and structural work.',
  restoration: 'Specialist restoration services for period properties and heritage features.',
  security: 'Comprehensive security solutions including alarms, CCTV, and smart locks.',
  'smart-home': 'Future-proof your home with integrated smart technology and automation.',
  outdoor: 'Transform your outdoor spaces with landscaping, fencing, and garden structures.',
  emergency: '24/7 emergency services for urgent plumbing, electrical, and heating issues.',
};

export default function ServicesPage() {
  const categories = getAllCategories();

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = services.filter(s => s.category === category);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16 md:py-24">
        <div className="container-lg">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Premium Home Services for{' '}
              <span className="text-gold-400">Every Need</span>
            </h1>
            <p className="body-large text-navy-200 mb-8">
              From emergency repairs to complete renovations, our team of certified
              tradespeople delivers exceptional results across {services.length}+ services.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="badge bg-white/10 text-white backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-1 text-gold-400" />
                Gas Safe Registered
              </span>
              <span className="badge bg-white/10 text-white backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-1 text-gold-400" />
                NICEIC Approved
              </span>
              <span className="badge bg-white/10 text-white backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-1 text-gold-400" />
                Fully Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category} id={category} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center text-gold-600 flex-shrink-0">
                    {categoryIcons[category] || <Wrench className="w-8 h-8" />}
                  </div>
                  <div>
                    <h2 className="heading-2 text-navy-900 capitalize mb-2">
                      {category.replace(/-/g, ' ')} Services
                    </h2>
                    <p className="text-navy-600 max-w-2xl">
                      {categoryDescriptions[category] || `Expert ${category} services across North London.`}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {servicesByCategory[category].map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.category}/${service.slug}`}
                      className="card p-6 hover:border-gold-300 group"
                    >
                      <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-navy-600 mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gold-600">
                          {service.priceAnchor}
                        </span>
                        <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gold-500 py-8">
        <div className="container-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">
                Need Emergency Help?
              </h2>
              <p className="text-navy-800">
                Our 24/7 emergency team is ready to respond to urgent issues across North London.
              </p>
            </div>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-primary bg-navy-900 hover:bg-navy-800">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy">
        <div className="container-lg text-center">
          <h2 className="heading-2 text-white mb-4">
            Not Sure What Service You Need?
          </h2>
          <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
            Our team can help diagnose the problem and recommend the right solution.
            Get a free, no-obligation assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary">
              <Phone className="w-4 h-4 mr-2" />
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
              Request a Callback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
