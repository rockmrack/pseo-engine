// Server Component - No 'use client' for zero JS bundle impact
// CSS animations replace framer-motion (~140KB saved)

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
          {/* Content - CSS animation */}
          <div className="animate-fade-in-up">
            <h2 className="heading-2 text-navy-900 mb-6">{title}</h2>

            <div className="prose prose-lg prose-navy max-w-none mb-8">
              <p className="body-large text-navy-700 leading-relaxed">{body}</p>
            </div>

            {/* Benefits List - staggered via CSS */}
            <div className="space-y-4 mb-8">
              {bulletPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-gold-600" />
                  </div>
                  <span className="text-navy-700">{point}</span>
                </div>
              ))}
            </div>

            {/* Price Anchor */}
            {priceAnchor && (
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-cream-100 border border-cream-300 rounded-lg">
                <span className="text-navy-600">Starting</span>
                <span className="text-2xl font-bold text-navy-900">{priceAnchor}</span>
              </div>
            )}
          </div>

          {/* Process Steps - CSS animation */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="heading-4 text-navy-900 mb-8">How It Works</h3>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-4 animate-fade-in-right"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
