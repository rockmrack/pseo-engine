'use client';

// ============================================================================
// EMERGENCY SERVICES BANNER
// Sticky banner for 24/7 emergency services with click-to-call
// ============================================================================

import { useState, useEffect } from 'react';
import { Phone, X, AlertTriangle, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface EmergencyBannerProps {
  variant?: 'top' | 'bottom' | 'floating';
  services?: string[];
}

export function EmergencyBanner({
  variant = 'top',
  services = ['Emergency Plumber', 'Boiler Breakdown', 'Burst Pipes', 'No Hot Water']
}: EmergencyBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showFloating, setShowFloating] = useState(false);

  // Show floating button after scrolling
  useEffect(() => {
    if (variant !== 'floating') return;

    const handleScroll = () => {
      setShowFloating(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  if (!isVisible && variant !== 'floating') return null;

  // Floating variant
  if (variant === 'floating') {
    return (
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showFloating ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-full shadow-xl transition-colors"
        >
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <Phone className="w-5 h-5" />
          </div>
          <div className="pr-2">
            <p className="text-xs font-medium opacity-90">24/7 Emergency</p>
            <p className="font-bold">{siteConfig.phone}</p>
          </div>
        </a>
      </div>
    );
  }

  // Top/Bottom banner variant
  const positionClasses = variant === 'top'
    ? 'top-0'
    : 'bottom-0';

  return (
    <div className={`fixed ${positionClasses} left-0 right-0 z-50 bg-red-600 text-white`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Left: Icon and text */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-10 h-10 bg-white/20 rounded-full items-center justify-center animate-pulse">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">
                24/7 Emergency Service Available
              </p>
              <p className="text-xs sm:text-sm text-red-100 hidden sm:block">
                {services.join(' • ')}
              </p>
            </div>
          </div>

          {/* Center: Available now badge */}
          <div className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Engineers Available Now</span>
          </div>

          {/* Right: Call button and close */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-red-600 hover:bg-red-50 font-bold px-4 sm:px-6 py-2 rounded-full transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Compact inline emergency CTA for embedding in pages
export function EmergencyCallout() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Emergency? We are Here 24/7</h3>
            <p className="text-red-100">
              Burst pipes, boiler breakdowns, electrical emergencies - we respond fast.
            </p>
          </div>
        </div>
        <a
          href={`tel:${siteConfig.phone}`}
          className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <Phone className="w-5 h-5" />
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
