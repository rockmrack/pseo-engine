import Link from 'next/link';
import { ArrowRight, Phone, MapPin, Shield, Star, Clock, CheckCircle, Wrench, Zap, Droplets, Home } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';

// Get featured locations and services
const featuredLocations = locations.slice(0, 12);
const featuredServices = services.slice(0, 8);
const serviceCategories = Array.from(new Set(services.map(s => s.category))).slice(0, 6);

const categoryIcons: Record<string, React.ReactNode> = {
  plumbing: <Droplets className="w-6 h-6" />,
  electrical: <Zap className="w-6 h-6" />,
  carpentry: <Home className="w-6 h-6" />,
  heating: <Wrench className="w-6 h-6" />,
  building: <Home className="w-6 h-6" />,
  decorating: <Home className="w-6 h-6" />,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-luxury text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-lg relative py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
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
                TrustMark
              </span>
            </div>

            <h1 className="heading-1 mb-6">
              Premium Home Services Across{' '}
              <span className="text-gold-400">North London</span>
            </h1>

            <p className="body-large text-navy-200 mb-8 max-w-2xl">
              Trusted plumbers, electricians, carpenters, and builders serving Hampstead,
              Belsize Park, Highgate, and surrounding areas. Quality craftsmanship since 2010.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4">
                Get a Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <div className="text-sm text-navy-300">Google Rating</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-1">
                  <Shield className="w-5 h-5" />
                  <span className="text-2xl font-bold">14+</span>
                </div>
                <div className="text-sm text-navy-300">Years Experience</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold">2hr</span>
                </div>
                <div className="text-sm text-navy-300">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">Our Services</h2>
            <p className="body-large text-navy-600 max-w-2xl mx-auto">
              From emergency repairs to complete renovations, we provide comprehensive
              home services across North London.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {serviceCategories.map((category) => {
              const categoryServices = services.filter(s => s.category === category).slice(0, 4);
              return (
                <div key={category} className="card p-6 hover:border-gold-300">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 mb-4">
                    {categoryIcons[category] || <Wrench className="w-6 h-6" />}
                  </div>
                  <h3 className="heading-4 text-navy-900 mb-3 capitalize">
                    {category.replace(/-/g, ' ')}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {categoryServices.map(service => (
                      <li key={service.slug} className="text-sm text-navy-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold-500" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${category}`}
                    className="text-gold-600 font-medium flex items-center gap-1 hover:text-gold-700"
                  >
                    View all {category} services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="section-cream">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-navy-900 mb-4">Areas We Cover</h2>
            <p className="body-large text-navy-600 max-w-2xl mx-auto">
              Based at {siteConfig.address.street}, we serve all of North London with
              fast response times and local expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {featuredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/local/${location.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-cream-200 hover:border-gold-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-600 group-hover:text-white" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">{location.name}</div>
                  <div className="text-sm text-navy-500">{location.postcode}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/areas" className="btn-outline">
              View All Areas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-navy-900 mb-6">
                Why North London Trusts Us
              </h2>
              <p className="body-large text-navy-600 mb-8">
                For over 14 years, we've been the go-to choice for homeowners across
                Hampstead, Highgate, and beyond. Our commitment to quality craftsmanship
                and exceptional service has earned us a 4.9-star rating from over 200 reviews.
              </p>

              <div className="space-y-4">
                {[
                  'Fully certified: Gas Safe, NICEIC, TrustMark approved',
                  'Local experts based at 250 Finchley Road, NW3',
                  '2-hour emergency response across our service area',
                  'Transparent pricing with no hidden costs',
                  'Experienced with period properties and listed buildings',
                  '£5 million public liability insurance',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="text-navy-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-luxury p-6 text-center">
                <div className="text-4xl font-bold text-gold-500 mb-2">14+</div>
                <div className="text-navy-600">Years in Business</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-4xl font-bold text-gold-500 mb-2">5000+</div>
                <div className="text-navy-600">Projects Completed</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-4xl font-bold text-gold-500 mb-2">4.9</div>
                <div className="text-navy-600">Google Rating</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-4xl font-bold text-gold-500 mb-2">50+</div>
                <div className="text-navy-600">Expert Tradespeople</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-navy">
        <div className="container-lg text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
            Whether it's an emergency repair or a planned renovation, we're here to help.
            Get a free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4">
              Request a Callback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
