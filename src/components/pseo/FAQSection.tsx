'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      >
        <span className="font-medium text-navy-900 pr-4">{faq.question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-navy-400 flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 text-navy-600 border-t border-cream-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-2xl text-gold-600 mb-4">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h2 className="heading-3 text-navy-900 mb-4">{title}</h2>
            <p className="body text-navy-600">{subtitle}</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 p-6 bg-navy-800 text-white rounded-xl text-center"
          >
            <p className="mb-4">Still have questions? We're here to help.</p>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
