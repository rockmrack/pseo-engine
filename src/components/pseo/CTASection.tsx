// Server Component - No 'use client' for zero JS bundle impact
// CSS animations replace framer-motion (~140KB saved)

import { Phone, ArrowRight, Clock, MapPin } from 'lucide-react';
import { CTAContent } from '@/types';
import { siteConfig } from '@/lib/config';

interface CTASectionProps {
  cta: CTAContent;
}

export function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="section-navy relative overflow-hidden" id="quote">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-lg relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* CSS animation instead of framer-motion */}
          <div className="animate-fade-in-up">
            {/* Urgency Badge */}
            {cta.urgencyText && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                {cta.urgencyText}
              </div>
            )}

            <h2 className="heading-2 text-white mb-4">
              {cta.headline}
            </h2>
            <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
              {cta.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`tel:${cta.phoneNumber.replace(/\s/g, '')}`}
                className="btn-secondary text-lg px-8 py-4 group"
              >
                <Phone className="w-5 h-5 mr-2" />
                {cta.buttonText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover-arrow" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4"
              >
                Email Us Instead
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-gold-400" />
                <div className="font-semibold text-white">{siteConfig.phone}</div>
                <div className="text-sm text-navy-300">24/7 Emergency Line</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-gold-400" />
                <div className="font-semibold text-white">{siteConfig.address.street}</div>
                <div className="text-sm text-navy-300">London, {siteConfig.address.postcode}</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-gold-400" />
                <div className="font-semibold text-white">{siteConfig.businessHours.weekday}</div>
                <div className="text-sm text-navy-300">Mon-Fri</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
