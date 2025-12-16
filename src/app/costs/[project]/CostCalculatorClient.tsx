'use client';

// ============================================================================
// DYNAMIC COST CALCULATOR PAGE
// Idea 63: Auto-updating pricing with interactive calculator
// ============================================================================

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  Info,
  TrendingUp,
  TrendingDown,
  Minus,
  Clock,
  PoundSterling,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { 
  ProjectCostTemplate,
  calculateProjectCost,
  PRICING_LAST_UPDATED,
} from '@/lib/data/pricing-database';

interface CostCalculatorClientProps {
  template: ProjectCostTemplate;
  postcode?: string;
}

export function CostCalculatorClient({ template, postcode = 'NW3' }: CostCalculatorClientProps) {
  const [selectedSize, setSelectedSize] = useState(template.sizeOptions[1]?.avgSize || 100);
  const [selectedSpec, setSelectedSpec] = useState(template.specLevels[1]?.name || 'Mid-Range');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedPostcode, setSelectedPostcode] = useState(postcode);

  const calculation = useMemo(() => {
    return calculateProjectCost(template, selectedSize, selectedSpec, selectedPostcode, selectedOptions);
  }, [template, selectedSize, selectedSpec, selectedPostcode, selectedOptions]);

  const toggleOption = (optionName: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionName) 
        ? prev.filter(o => o !== optionName)
        : [...prev, optionName]
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', { 
      style: 'currency', 
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {/* Calculator Section */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Inputs */}
            <div className="lg:col-span-2 space-y-8">
              {/* Size Selection */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <h3 className="heading-5 text-navy-900 mb-4">1. Select Size</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {template.sizeOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => setSelectedSize(option.avgSize)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedSize === option.avgSize
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-cream-200 hover:border-gold-300'
                      }`}
                    >
                      <div className="font-medium text-navy-900">{option.name}</div>
                      <div className="text-sm text-navy-500">
                        {option.minSize}-{option.maxSize} {template.unit}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-sm text-navy-600 mb-2">
                    Or enter exact size ({template.unit}):
                  </label>
                  <input
                    type="number"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Spec Level */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <h3 className="heading-5 text-navy-900 mb-4">2. Choose Specification</h3>
                <div className="space-y-3">
                  {template.specLevels.map((spec) => (
                    <button
                      key={spec.name}
                      onClick={() => setSelectedSpec(spec.name)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-start gap-4 ${
                        selectedSpec === spec.name
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-cream-200 hover:border-gold-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                        selectedSpec === spec.name ? 'border-gold-500 bg-gold-500' : 'border-cream-400'
                      }`}>
                        {selectedSpec === spec.name && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-navy-900">{spec.name}</div>
                        <div className="text-sm text-navy-500">{spec.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <h3 className="heading-5 text-navy-900 mb-4">3. Your Location</h3>
                <select
                  value={selectedPostcode}
                  onChange={(e) => setSelectedPostcode(e.target.value)}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                >
                  <option value="NW3">NW3 - Hampstead</option>
                  <option value="NW1">NW1 - Camden / Regent&apos;s Park</option>
                  <option value="NW8">NW8 - St John&apos;s Wood</option>
                  <option value="N6">N6 - Highgate</option>
                  <option value="default">Other North London</option>
                </select>
                <p className="text-sm text-navy-500 mt-2 flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Prime areas have higher labour costs due to access constraints and parking.
                </p>
              </div>

              {/* Optional Extras */}
              <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200">
                <h3 className="heading-5 text-navy-900 mb-4">4. Optional Extras</h3>
                <div className="space-y-3">
                  {template.options.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => toggleOption(option.name)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-start gap-4 ${
                        selectedOptions.includes(option.name)
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-cream-200 hover:border-gold-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                        selectedOptions.includes(option.name) ? 'border-gold-500 bg-gold-500' : 'border-cream-400'
                      }`}>
                        {selectedOptions.includes(option.name) && (
                          <CheckCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium text-navy-900">{option.name}</span>
                          <span className="font-medium text-gold-600">
                            +{formatCurrency(option.cost)}{option.type === 'per-unit' ? `/${template.unit}` : ''}
                          </span>
                        </div>
                        <div className="text-sm text-navy-500">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Panel - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Estimate Card */}
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-medium mb-2">
                    <Calculator className="w-4 h-4" />
                    Your Estimate
                  </div>
                  
                  <div className="text-4xl font-bold mb-1">
                    {formatCurrency(calculation.min)} - {formatCurrency(calculation.max)}
                  </div>
                  
                  <div className="text-navy-300 text-sm mb-6">
                    Based on {selectedSize} {template.unit} at {selectedSpec} spec
                  </div>

                  {/* Breakdown */}
                  <div className="border-t border-white/20 pt-4 space-y-2">
                    {calculation.breakdown.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-navy-300">{item.item}</span>
                        <span className="text-white">{formatCurrency(item.cost)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20">
                    <a 
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="btn-secondary w-full justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Get Exact Quote
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-cream-50 rounded-xl p-4 border border-cream-200">
                  <div className="text-sm font-medium text-navy-900 mb-3">Why trust our pricing?</div>
                  <ul className="space-y-2 text-sm text-navy-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Based on actual project costs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Updated {PRICING_LAST_UPDATED}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      No obligation quote
                    </li>
                  </ul>
                </div>

                {/* Disclaimer */}
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-start gap-2 text-sm text-amber-800">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      This is an estimate only. Final costs depend on site survey, access, and existing conditions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-cream">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="heading-4 text-navy-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {template.whatIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="heading-4 text-navy-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-amber-500" />
                Not Included (Extra Cost)
              </h3>
              <ul className="space-y-3">
                {template.whatNotIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-600">
                    <Minus className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border border-cream-200">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-gold-500" />
              <div>
                <div className="font-semibold text-navy-900">Typical Timeline</div>
                <div className="text-navy-600">{template.timeline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </div>
            <h2 className="heading-2 text-navy-900 mb-4">
              {template.name} FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {template.faqs.map((faq, index) => (
              <details key={index} className="group bg-cream-50 rounded-xl border border-cream-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-navy-900 pr-4">{faq.question}</h3>
                  <ArrowRight className="w-5 h-5 text-navy-400 transform group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-navy-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy">
        <div className="container-lg text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready for an Accurate Quote?
          </h2>
          <p className="body-large text-navy-200 mb-8 max-w-2xl mx-auto">
            Our estimates are based on hundreds of completed projects. For an exact price, we&apos;ll need to survey your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-secondary text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-lg px-8 py-4">
              Request Survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
