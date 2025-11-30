'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Areas', href: '/areas' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cream-200">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2 hidden md:block">
        <div className="container-lg flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.address.street}, {siteConfig.address.postcode}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{siteConfig.businessHours.weekday} | {siteConfig.businessHours.emergency}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-lg">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-navy-800 rounded-lg flex items-center justify-center">
              <span className="text-gold-400 font-bold text-lg md:text-xl">HR</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-navy-900 text-lg">{siteConfig.businessName}</div>
              <div className="text-xs text-navy-600">Premium Home Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="btn-secondary"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-cream-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-navy-700 hover:text-navy-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="btn-secondary w-full text-center mt-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
