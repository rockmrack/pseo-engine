'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clipboard, Wrench, Shield } from 'lucide-react';
import { ProcessStep } from '@/types';

interface ServiceDetailSectionProps {
  title: string;
  body: string;
  bulletPoints: string[];
  processSteps: ProcessStep[];
  priceAnchor?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone className="w-6 h-6" />,
  clipboard: <Clipboard className="w-6 h-6" />,
  tool: <Wrench className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
};

export function ServiceDetailSection({
  title,
  body,
  bulletPoints,
  processSteps,
  priceAnchor,
}: ServiceDetailSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 text-navy-900 mb-6">{title}</h2>

            <div className="prose prose-lg prose-navy max-w-none mb-8">
              <p className="body-large text-navy-700 leading-relaxed">{body}</p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-gold-600" />
                  </div>
                  <span className="text-navy-700">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Price Anchor */}
            {priceAnchor && (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-cream-100 border border-cream-300 rounded-lg">
                <span className="text-navy-600">Starting</span>
                <span className="text-2xl font-bold text-navy-900">{priceAnchor}</span>
              </div>
            )}
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="heading-4 text-navy-900 mb-8">How It Works</h3>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative flex gap-4"
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-12 bg-cream-200" />
                  )}

                  {/* Step Number */}
                  <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400 relative z-10">
                    {iconMap[step.icon] || <span className="font-bold">{step.number}</span>}
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow pt-1">
                    <h4 className="font-semibold text-navy-900 mb-1">{step.title}</h4>
                    <p className="text-navy-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
