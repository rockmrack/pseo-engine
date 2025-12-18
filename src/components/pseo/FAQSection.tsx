'use client';

// Client Component - Needs useState for accordion interactivity
// CSS transitions replace framer-motion (~140KB saved)

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ } from '@/types';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-cream-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-navy-900 pr-4">{faq.question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-navy-400 flex-shrink-0 accordion-chevron',
            isOpen && 'is-open'
          )}
        />
      </button>
      {/* CSS-only accordion animation - replaces AnimatePresence */}
      <div className={cn('accordion-content', isOpen && 'is-open')}>
        <div className="px-6 text-navy-600 border-t border-cream-100">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services.',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-cream-50">
      <div className="container-lg">
        <div className="max-w-3xl mx-auto">
          {/* CSS animation instead of framer-motion */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-2xl text-gold-600 mb-4">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h2 className="heading-3 text-navy-900 mb-4">{title}</h2>
            <p className="body text-navy-600">{subtitle}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </div>
            ))}
          </div>

          {/* Contact CTA - CSS animation */}
          <div className="mt-10 p-6 bg-navy-800 text-white rounded-xl text-center animate-fade-in-up animation-delay-300">
            <p className="mb-4">Still have questions? We're here to help.</p>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
