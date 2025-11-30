'use client';

import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-3 text-navy-900 mb-4">Why Choose Us?</h2>
          <p className="body-large text-navy-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional service with complete peace of mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card p-6 text-center group hover:border-gold-300"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                {iconMap[signal.icon] || <Shield className="w-8 h-8" />}
              </div>
              <h3 className="font-semibold text-navy-900 mb-2">{signal.name}</h3>
              <p className="text-sm text-navy-600">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
