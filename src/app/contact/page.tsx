import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Clock, CheckCircle, Star, 
  Shield, ArrowRight, MessageSquare, FileText, AlertCircle
} from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig, BASE_URL } from '@/lib/config';

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.businessName} - Get a Free Quote Today`,
  description: `Contact ${siteConfig.businessName} for a free, no-obligation quote. Call ${siteConfig.phone} for 24/7 emergency service or fill out our online form. Same-day response guaranteed.`,
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.businessName}`,
    description: `Get in touch with North London's trusted home renovation experts. Free quotes, 24/7 emergency service, same-day response.`,
    url: `${BASE_URL}/contact`,
    siteName: siteConfig.businessName,
    locale: 'en_GB',
    type: 'website',
  },
};

// ============================================================================
// DATA
// ============================================================================

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: siteConfig.phone,
    secondary: '24/7 for emergencies',
    action: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    highlight: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: siteConfig.email,
    secondary: 'Response within 2 hours',
    action: `mailto:${siteConfig.email}`,
    highlight: false,
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    primary: 'Send a Message',
    secondary: 'Quick responses',
    action: `https://wa.me/44${siteConfig.phone.replace(/\s/g, '').slice(1)}`,
    highlight: false,
  },
];

const trustPoints = [
  { icon: CheckCircle, text: 'Free, no-obligation quotes' },
  { icon: Clock, text: 'Same-day response guarantee' },
  { icon: Shield, text: 'Fully insured & qualified' },
  { icon: Star, text: '4.9★ rated on Google' },
];

const faqs = [
  {
    question: 'How quickly will you respond to my enquiry?',
    answer: 'We aim to respond to all enquiries within 2 hours during business hours. For emergencies, our 24/7 line is always available.',
  },
  {
    question: 'Do you charge for quotes?',
    answer: 'No, all our quotes are completely free with no obligation. We\'ll visit your property, assess the work needed, and provide a detailed written quote.',
  },
  {
    question: 'What areas do you cover?',
    answer: `We cover all of North London, with our primary service area including ${siteConfig.serviceArea.primary.slice(0, 5).join(', ')} and surrounding postcodes.`,
  },
  {
    question: 'Are you available for emergency callouts?',
    answer: 'Yes, we offer 24/7 emergency callout services for urgent plumbing, heating, and electrical issues. Call us any time on ' + siteConfig.phone + '.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer, debit/credit cards, and cash. For larger projects, we can discuss staged payment plans.',
  },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function ContactPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: siteConfig.businessName,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                postalCode: siteConfig.address.postcode,
                addressCountry: 'GB',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '17:00',
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-luxury text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-400 text-sm font-medium rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Let&apos;s Discuss Your
              <span className="text-gold-400 block mt-2">Home Project</span>
            </h1>
            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
              Ready to transform your home? Get a free, no-obligation quote today. 
              Our friendly team responds to all enquiries within 2 hours during business hours.
            </p>
            
            {/* Trust Points */}
            <div className="flex flex-wrap gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <point.icon className="w-4 h-4 text-gold-400" />
                  <span className="text-sm">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Bar */}
      <section className="bg-white py-6 border-b border-cream-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  method.highlight 
                    ? 'bg-gold-50 border-2 border-gold-400 hover:bg-gold-100' 
                    : 'bg-cream-50 border border-cream-200 hover:border-gold-400'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  method.highlight ? 'bg-gold-500 text-navy-900' : 'bg-navy-100 text-navy-600'
                }`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-navy-500">{method.title}</div>
                  <div className={`font-bold ${method.highlight ? 'text-gold-600 text-lg' : 'text-navy-900'}`}>
                    {method.primary}
                  </div>
                  <div className="text-xs text-navy-500">{method.secondary}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">Request a Free Quote</h2>
                    <p className="text-navy-600">Fill out the form below and we&apos;ll get back to you within 2 hours</p>
                  </div>
                </div>
                <ContactForm />
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details 
                      key={index} 
                      className="bg-white rounded-xl shadow-sm border border-cream-200 group"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="font-semibold text-navy-900 pr-4">{faq.question}</h3>
                        <span className="text-gold-500 text-2xl group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <div className="px-6 pb-6 text-navy-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergency Banner */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-800 mb-1">Emergency?</h3>
                    <p className="text-red-700 text-sm mb-3">
                      Burst pipes, gas leaks, or electrical emergencies? We&apos;re available 24/7.
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-cream-200">
                <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  Our Office
                </h3>
                <address className="not-italic text-navy-600 mb-4">
                  <p className="font-medium text-navy-900">{siteConfig.businessName}</p>
                  <p>{siteConfig.address.street}</p>
                  <p>{siteConfig.address.city}</p>
                  <p>{siteConfig.address.postcode}</p>
                </address>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.postcode}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-600 hover:text-gold-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-cream-200">
                <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold-500" />
                  Opening Hours
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-navy-600">Monday - Friday</span>
                    <span className="font-medium text-navy-900">{siteConfig.businessHours.weekday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-navy-600">Saturday</span>
                    <span className="font-medium text-navy-900">{siteConfig.businessHours.saturday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-navy-600">Sunday</span>
                    <span className="font-medium text-navy-900">{siteConfig.businessHours.sunday}</span>
                  </li>
                  <li className="pt-3 border-t border-cream-200">
                    <span className="text-gold-600 font-medium">{siteConfig.businessHours.emergency}</span>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-navy-900 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold-400" />
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>14+ years serving North London</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Gas Safe & NICEIC registered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>£5m public liability insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>12-month guarantee on all work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>5,000+ projects completed</span>
                  </li>
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-gold-50 rounded-xl p-6 border border-gold-200">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <blockquote className="text-navy-800 italic mb-4">
                  &quot;From the first phone call to the final cleanup, the team was professional, 
                  punctual, and produced exceptional work. Highly recommend!&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-gold-400 font-bold">
                    JM
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">James M.</div>
                    <div className="text-sm text-navy-600">Hampstead, NW3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">Find Us</h2>
            <p className="text-navy-600">
              Conveniently located on Finchley Road, serving all of North London
            </p>
          </div>
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-cream-200">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8!2d${siteConfig.address.coordinates.lng}!3d${siteConfig.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMyJzU0LjYiTiAwwrAxMCc1Ny43Ilc!5e0!3m2!1sen!2suk!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hampstead Renovations Office Location"
            />
          </div>
        </div>
      </section>

      {/* Service Areas Quick Links */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">Areas We Cover</h2>
            <p className="text-navy-600">
              Fast response times across all North London postcodes
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[...siteConfig.serviceArea.primary, ...siteConfig.serviceArea.secondary.slice(0, 6)].map((postcode) => (
              <Link
                key={postcode}
                href={`/areas/${postcode.toLowerCase()}`}
                className="px-4 py-2 bg-white hover:bg-gold-50 border border-cream-200 hover:border-gold-400 rounded-full text-navy-800 text-sm font-medium transition-colors"
              >
                {postcode}
              </Link>
            ))}
            <Link
              href="/areas"
              className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-full text-sm font-medium transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Prefer to Talk?
          </h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">
            Our friendly team is ready to discuss your project. No pressure, just honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
