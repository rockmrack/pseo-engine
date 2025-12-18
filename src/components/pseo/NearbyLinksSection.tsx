// Server Component - No 'use client' for zero JS bundle impact
// CSS animations replace framer-motion (~140KB saved)

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { NearbyLink } from '@/types';

interface NearbyLinksSectionProps {
  links: NearbyLink[];
  serviceName: string;
  currentLocation: string;
}

export function NearbyLinksSection({
  links,
  serviceName,
  currentLocation,
}: NearbyLinksSectionProps) {
  if (links.length === 0) return null;

  return (
    <section className="section bg-white border-t border-cream-200">
      <div className="container-lg">
        {/* CSS animation instead of framer-motion */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="heading-4 text-navy-900 mb-3">
            Also Serving Nearby Streets
          </h2>
          <p className="text-navy-600">
            Looking for {serviceName.toLowerCase()} in a neighbouring area? We cover these streets too:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, index) => (
            <div
              key={link.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link
                href={link.slug}
                className="block p-4 bg-cream-50 hover:bg-cream-100 rounded-xl border border-cream-200 hover:border-gold-300 transition-all group hover-lift"
              >
                <div className="flex items-center gap-2 text-navy-700 group-hover:text-navy-900">
                  <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="font-medium text-sm truncate">{link.name}</span>
                </div>
                <div className="text-xs text-navy-500 mt-1 pl-6">{link.distance}</div>
              </Link>
            </div>
          ))}
        </div>

        {/* Link to full areas page - CSS animation */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-300">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium group"
          >
            View all areas we cover
            <ArrowRight className="w-4 h-4 group-hover-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
