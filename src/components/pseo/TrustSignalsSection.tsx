// Server Component - No 'use client' for zero JS bundle impact
// CSS animations replace framer-motion (~140KB saved)

import { MapPin, Award, Shield, CheckCircle } from 'lucide-react';
import { TrustSignal } from '@/types';

interface TrustSignalsSectionProps {
  signals: TrustSignal[];
}

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  'check-circle': <CheckCircle className="w-8 h-8" />,
};

export function TrustSignalsSection({ signals }: TrustSignalsSectionProps) {
  return (
    <section className="section-cream">
      <div className="container-lg">
        {/* CSS animation instead of framer-motion */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="heading-3 text-navy-900 mb-4">Why Choose Us?</h2>
          <p className="body-large text-navy-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional service with complete peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="card p-6 text-center group hover:border-gold-300 animate-fade-in-up hover-lift"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                {iconMap[signal.icon] || <Shield className="w-8 h-8" />}
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">{signal.name}</h3>
              <p className="text-sm text-navy-600">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
