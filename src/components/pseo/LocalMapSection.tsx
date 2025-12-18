// Server Component - No 'use client' for zero JS bundle impact
// CSS animations replace framer-motion (~140KB saved)

import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { Location } from '@/types';
import { siteConfig, GOOGLE_MAPS_API_KEY } from '@/lib/config';
import { getDistanceFromHQ } from '@/lib/content-engine';

interface LocalMapSectionProps {
  location: Location;
}

export function LocalMapSection({ location }: LocalMapSectionProps) {
  const distance = getDistanceFromHQ(location);

  // Generate Google Maps embed URL
  const mapQuery = encodeURIComponent(
    `${location.name}, ${location.area}, ${location.postcode}, London, UK`
  );
  const mapEmbedUrl = GOOGLE_MAPS_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${mapQuery}&zoom=15`
    : null;

  // Generate directions URL
  const directionsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.postcode}`
  )}/${mapQuery}`;

  return (
    <section className="section bg-cream-50">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map - CSS animation instead of framer-motion */}
          <div className="aspect-[4/3] bg-cream-200 rounded-2xl overflow-hidden shadow-lg animate-fade-in-left">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${location.name}, ${location.area}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream-100 to-cream-300">
                <div className="text-center text-navy-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-navy-400" />
                  <p className="font-medium">{location.name}</p>
                  <p className="text-sm">{location.area}, {location.postcode}</p>
                </div>
              </div>
            )}
          </div>

          {/* Info - CSS animation */}
          <div className="animate-fade-in-right animation-delay-200">
            <h2 className="heading-3 text-navy-900 mb-4">
              Local to {location.name}
            </h2>
            <p className="body-large text-navy-600 mb-8">
              We're based at {siteConfig.address.street}, just {distance} miles from {location.name}.
              That means no long waits – we can be with you quickly when you need us.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">{distance}</div>
                    <div className="text-sm text-navy-500">Miles away</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">~15</div>
                    <div className="text-sm text-navy-500">Min drive</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">2hr</div>
                    <div className="text-sm text-navy-500">Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Info */}
            <div className="bg-white p-6 rounded-xl border border-cream-200 mb-6">
              <h3 className="font-semibold text-navy-900 mb-4">About {location.name}</h3>
              <div className="space-y-3 text-sm text-navy-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Area:</strong> {location.area}, {location.borough}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 flex items-center justify-center text-gold-500">📮</span>
                  <span><strong>Postcode:</strong> {location.postcode}</span>
                </div>
                {location.landmarks.length > 0 && (
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-gold-500">🏛️</span>
                    <span><strong>Nearby:</strong> {location.landmarks.slice(0, 2).join(', ')}</span>
                  </div>
                )}
                {location.transportLinks.length > 0 && (
                  <div className="flex items-start gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-gold-500">🚇</span>
                    <span><strong>Transport:</strong> {location.transportLinks.slice(0, 2).join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Get Directions */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto">
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions from Our Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
