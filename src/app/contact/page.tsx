import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig, BASE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.businessName}`,
  description: `Get in touch with ${siteConfig.businessName} for a free quote. Call ${siteConfig.phone} or fill out our contact form. Same-day response guaranteed.`,
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-cream-200">
              Ready to start your project? Get a free, no-obligation quote today.
              We respond to all enquiries within 2 hours during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Request a Free Quote
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-gold-50 rounded-xl p-6 border border-gold-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Call Us</h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-2xl font-bold text-gold-600 hover:text-gold-700"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-navy-600 mt-1">
                      24/7 for emergencies
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email Us</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-navy-600 hover:text-gold-600"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Our Office</h3>
                    <address className="not-italic text-navy-600">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}<br />
                      {siteConfig.address.postcode}
                    </address>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 border border-cream-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Opening Hours</h3>
                    <ul className="text-navy-600 space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">8am - 6pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9am - 4pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Emergency only</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-navy-900 rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-gold-400">✓</span>
                    Free, no-obligation quotes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-400">✓</span>
                    Fully insured and qualified
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-400">✓</span>
                    Local tradesmen you can trust
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold-400">✓</span>
                    Work guaranteed for 12 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Find Us
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=${encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.postcode}`)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
