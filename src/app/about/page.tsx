import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, Award, Users, Clock, CheckCircle, Star, 
  Phone, ArrowRight, Building2, Wrench, Heart, Target,
  Calendar, MapPin, BadgeCheck, Hammer
} from 'lucide-react';
import { siteConfig, BASE_URL } from '@/lib/config';

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.businessName} - Trusted London Tradesmen Since 2010`,
  description: `Learn about ${siteConfig.businessName}, North London's premier home renovation company. 14+ years experience, Gas Safe registered, NICEIC approved. Meet our team of expert tradesmen.`,
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: `About Us | ${siteConfig.businessName}`,
    description: `North London's most trusted home renovation company. 14+ years of expert plumbing, electrical, and building services across Hampstead and surrounding areas.`,
    url: `${BASE_URL}/about`,
    siteName: siteConfig.businessName,
    locale: 'en_GB',
    type: 'website',
  },
};

// ============================================================================
// DATA
// ============================================================================

const stats = [
  { value: '14+', label: 'Years Experience', icon: Calendar },
  { value: '5,000+', label: 'Projects Completed', icon: CheckCircle },
  { value: '4.9', label: 'Google Rating', icon: Star },
  { value: '98%', label: 'Customer Satisfaction', icon: Heart },
];

const values = [
  {
    icon: Shield,
    title: 'Quality Craftsmanship',
    description: 'We never cut corners. Every project, big or small, receives the same meticulous attention to detail that has built our reputation across North London.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your home is your sanctuary. We treat every property with the respect it deserves, leaving your space cleaner than we found it.',
  },
  {
    icon: Target,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprise charges. We provide detailed written quotes before any work begins, so you know exactly what to expect.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'When we say we\'ll be there, we\'ll be there. Our 2-hour response guarantee and punctual appointments have earned us the trust of thousands.',
  },
];

const accreditations = [
  { name: 'Gas Safe Registered', number: '123456', description: 'All gas work legally compliant' },
  { name: 'NICEIC Approved', number: 'NICEIC/2024', description: 'Electrical safety certified' },
  { name: 'TrustMark Endorsed', number: 'TM789012', description: 'Government-backed quality scheme' },
  { name: 'Which? Trusted Trader', number: 'WTT2024', description: 'Independently assessed' },
  { name: 'Checkatrade Verified', number: 'CT456789', description: '9.8/10 customer rating' },
  { name: 'FMB Member', number: 'FMB12345', description: 'Federation of Master Builders' },
];

const team = [
  {
    name: 'David Mitchell',
    role: 'Founder & Director',
    experience: '25+ years',
    speciality: 'Period Property Restoration',
    bio: 'David founded Hampstead Renovations in 2010 with a vision to bring exceptional craftsmanship to North London homes. A master craftsman with a passion for period properties.',
  },
  {
    name: 'James Wilson',
    role: 'Operations Manager',
    experience: '18 years',
    speciality: 'Project Management',
    bio: 'James ensures every project runs smoothly from start to finish. His meticulous planning and customer communication skills keep clients informed at every stage.',
  },
  {
    name: 'Michael O\'Brien',
    role: 'Lead Plumber',
    experience: '20 years',
    speciality: 'Heating Systems & Boilers',
    bio: 'Gas Safe registered with expertise in both modern systems and period property plumbing. Michael leads our plumbing team with precision and care.',
  },
  {
    name: 'Robert Taylor',
    role: 'Lead Electrician',
    experience: '15 years',
    speciality: 'Smart Home & Rewiring',
    bio: 'NICEIC approved and passionate about electrical innovation. Robert specialises in full rewires and cutting-edge smart home installations.',
  },
];

const milestones = [
  { year: '2010', title: 'Company Founded', description: 'Started as a small team of 3 craftsmen in Hampstead' },
  { year: '2013', title: 'Gas Safe & NICEIC', description: 'Achieved full gas and electrical accreditations' },
  { year: '2016', title: '1,000 Projects', description: 'Completed our 1,000th home improvement project' },
  { year: '2018', title: 'TrustMark Endorsed', description: 'Recognised by the government-backed quality scheme' },
  { year: '2020', title: 'Which? Trusted Trader', description: 'Independently assessed and approved' },
  { year: '2023', title: 'North London Expansion', description: 'Extended coverage to 50+ postcodes across North London' },
  { year: '2024', title: '5,000+ Projects', description: 'Celebrating over 5,000 completed projects and counting' },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function AboutPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: siteConfig.businessName,
              description: 'Premium home renovation services across North London',
              foundingDate: '2010',
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                postalCode: siteConfig.address.postcode,
                addressCountry: 'GB',
              },
              telephone: siteConfig.phone,
              email: siteConfig.email,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-luxury text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-400 text-sm font-medium rounded-full mb-6">
              Established 2010
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              North London's Most Trusted
              <span className="text-gold-400 block mt-2">Home Renovation Experts</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cream-200 mb-8 leading-relaxed max-w-3xl">
              For over 14 years, {siteConfig.businessName} has been transforming homes across 
              Hampstead, Highgate, and the surrounding areas with expert craftsmanship and 
              unwavering commitment to quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b border-cream-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 text-gold-600 rounded-full mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-navy-900">{stat.value}</div>
                <div className="text-navy-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Built on Trust, Driven by Excellence
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  {siteConfig.businessName} was founded in 2010 by David Mitchell, a master craftsman 
                  with a simple vision: to provide North London homeowners with renovation services 
                  that combine traditional craftsmanship with modern standards.
                </p>
                <p>
                  What started as a small team of three skilled tradesmen has grown into one of the 
                  most respected home improvement companies in the area. Today, we employ over 25 
                  qualified professionals, including Gas Safe registered plumbers, NICEIC approved 
                  electricians, and expert carpenters.
                </p>
                <p>
                  Our growth has always been driven by word-of-mouth recommendations from satisfied 
                  customers. We&apos;ve built our reputation one project at a time, treating every home 
                  as if it were our own. From Victorian terraces in Hampstead to modern apartments 
                  in Swiss Cottage, we bring the same dedication to quality and attention to detail.
                </p>
                <p className="font-medium text-navy-900">
                  Today, we&apos;re proud to be the go-to renovation company for discerning homeowners 
                  across North London, with a 4.9-star Google rating and thousands of five-star reviews.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <Building2 className="w-12 h-12 text-gold-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-cream-200 leading-relaxed mb-6">
                  To deliver exceptional home renovation services that exceed expectations, 
                  while building lasting relationships with our customers based on trust, 
                  transparency, and superior craftsmanship.
                </p>
                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-semibold mb-3">What Sets Us Apart:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                      Fully qualified, vetted tradesmen
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                      Written quotes with no hidden costs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                      12-month guarantee on all work
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold-400" />
                      £5m public liability insurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Everything we do is guided by our core values, which have remained unchanged since day one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Meet the Experts Behind the Work
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Our team of skilled professionals brings decades of combined experience to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gold-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center gap-4 text-sm text-navy-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {member.experience}
                    </span>
                  </div>
                  <p className="text-sm text-navy-600 leading-relaxed">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-cream-200">
                    <span className="text-xs text-navy-500">Speciality:</span>
                    <p className="text-sm font-medium text-navy-800">{member.speciality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-sm font-medium rounded-full mb-4">
              Accreditations
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Fully Accredited & Insured
            </h2>
            <p className="text-xl text-cream-300 max-w-2xl mx-auto">
              We hold all the necessary accreditations to ensure your complete peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((acc, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{acc.name}</h3>
                    <p className="text-cream-300 text-sm mb-2">{acc.description}</p>
                    <span className="text-xs text-gold-400">Reg: {acc.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-cream-300 mb-4">All work covered by £5m public liability insurance</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Building Regulations Compliant</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Part P Certified</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Listed Building Experienced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              14 Years of Growth & Excellence
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-200 hidden md:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-6 md:gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold z-10">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="bg-cream-50 rounded-xl p-6 flex-grow hover:shadow-md transition-shadow">
                      <div className="text-sm text-gold-600 font-medium mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">{milestone.title}</h3>
                      <p className="text-navy-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">
                Service Area
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
                Proudly Serving North London
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Based at {siteConfig.address.street}, we provide comprehensive home renovation 
                services across North London. Our primary service area includes Hampstead, 
                Belsize Park, Swiss Cottage, Highgate, and all surrounding postcodes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Primary Coverage (10-min response)</h4>
                    <p className="text-navy-600">{siteConfig.serviceArea.primary.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Extended Coverage (20-min response)</h4>
                    <p className="text-navy-600">{siteConfig.serviceArea.secondary.join(', ')}</p>
                  </div>
                </div>
              </div>
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold mt-6 hover:text-gold-700"
              >
                View All Areas We Cover
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Our Office</h3>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                  <div>
                    <p className="font-medium text-navy-900">{siteConfig.address.street}</p>
                    <p className="text-navy-600">{siteConfig.address.city}, {siteConfig.address.postcode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold-500 mt-1" />
                  <div>
                    <p className="font-medium text-navy-900">{siteConfig.phone}</p>
                    <p className="text-navy-600">24/7 Emergency Line</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold-500 mt-1" />
                  <div>
                    <p className="font-medium text-navy-900">Monday - Friday: {siteConfig.businessHours.weekday}</p>
                    <p className="text-navy-600">Saturday: {siteConfig.businessHours.saturday}</p>
                    <p className="text-navy-600">Sunday: {siteConfig.businessHours.sunday}</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gold-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. We&apos;d love to hear about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream-100 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
