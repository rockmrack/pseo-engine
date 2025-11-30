'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Star, Shield, Clock, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  h1: string;
  subtitle: string;
  trustBadges: string[];
  ctaText: string;
  ctaSecondary: string;
  distance?: string;
  location?: string;
}

export function HeroSection({
  h1,
  subtitle,
  trustBadges,
  ctaText,
  ctaSecondary,
  distance,
  location,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-luxury text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-lg relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {trustBadges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* H1 */}
            <h1 className="heading-1 mb-6 text-balance">
              {h1}
            </h1>

            {/* Subtitle */}
            <p className="body-large text-navy-200 mb-8 max-w-xl">
              {subtitle}
            </p>

            {/* Distance Badge (if available) */}
            {distance && location && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-lg mb-8 font-medium">
                <MapPin className="w-5 h-5" />
                <span>Only {distance} miles from {location}</span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="btn-secondary text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                {ctaText}
              </a>
              <a
                href="#quote"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4"
              >
                {ctaSecondary}
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
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
          </motion.div>

          {/* Image/Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] bg-navy-700 rounded-2xl overflow-hidden shadow-luxury">
                <div className="w-full h-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center">
                  <div className="text-center text-navy-400">
                    <div className="text-6xl mb-4">🏠</div>
                    <div className="text-sm">Premium Property Image</div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-navy-900 rounded-xl shadow-luxury p-4 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Free Quote</div>
                    <div className="text-sm text-navy-600">No obligation assessment for your project</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
