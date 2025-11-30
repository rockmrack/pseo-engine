import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';

// Get top locations for footer
const topLocations = locations.slice(0, 12);

// Get service categories
const serviceCategories = Array.from(new Set(services.map(s => s.category))).slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xl">HR</span>
              </div>
              <div>
                <div className="font-bold text-lg">{siteConfig.businessName}</div>
                <div className="text-sm text-navy-300">Premium Home Services</div>
              </div>
            </div>
            <p className="text-navy-300 mb-6 text-sm leading-relaxed">
              Trusted by homeowners across North London since 2010. We provide expert
              plumbing, electrical, carpentry, and renovation services with a focus
              on quality craftsmanship.
            </p>
            <div className="flex gap-4">
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/services/${category}`}
                    className="text-navy-300 hover:text-gold-400 transition-colors text-sm capitalize"
                  >
                    {category.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Cover */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Areas We Cover</h3>
            <ul className="space-y-3">
              {topLocations.slice(0, 8).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/local/${location.slug}`}
                    className="text-navy-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {location.name}, {location.postcode}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">{siteConfig.phone}</div>
                    <div className="text-sm">24/7 Emergency Line</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">{siteConfig.email}</div>
                    <div className="text-sm">Email Us</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{siteConfig.address.street}</div>
                  <div className="text-sm">London, {siteConfig.address.postcode}</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-navy-300">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Mon-Fri: {siteConfig.businessHours.weekday}</div>
                  <div className="text-sm">Sat: {siteConfig.businessHours.saturday}</div>
                  <div className="text-sm">{siteConfig.businessHours.emergency}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-navy-800">
        <div className="container-lg py-8">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="text-gold-400 font-bold text-2xl">Gas Safe</div>
              <div className="text-navy-400 text-xs">Registered</div>
            </div>
            <div className="text-center">
              <div className="text-gold-400 font-bold text-2xl">NICEIC</div>
              <div className="text-navy-400 text-xs">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-gold-400 font-bold text-2xl">TrustMark</div>
              <div className="text-navy-400 text-xs">Endorsed</div>
            </div>
            <div className="text-center">
              <div className="text-gold-400 font-bold text-2xl">Which?</div>
              <div className="text-navy-400 text-xs">Trusted Trader</div>
            </div>
            <div className="text-center">
              <div className="text-gold-400 font-bold text-2xl">Checkatrade</div>
              <div className="text-navy-400 text-xs">Verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-lg py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-navy-400">
            <div>
              © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-gold-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
