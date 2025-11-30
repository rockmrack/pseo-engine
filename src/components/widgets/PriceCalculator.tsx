'use client';

// ============================================================================
// INTERACTIVE PRICE CALCULATOR
// Gives instant estimates to increase engagement and conversions
// ============================================================================

import { useState } from 'react';
import { Calculator, ArrowRight, Phone, Info } from 'lucide-react';
import Link from 'next/link';

interface PriceRange {
  min: number;
  max: number;
  unit: string;
}

interface ServicePricing {
  name: string;
  slug: string;
  basePrice: PriceRange;
  options: {
    name: string;
    priceModifier: number; // multiplier or fixed add
    type: 'multiplier' | 'fixed';
  }[];
  sizeOptions?: {
    name: string;
    multiplier: number;
  }[];
}

const servicePricing: ServicePricing[] = [
  {
    name: 'Boiler Repair',
    slug: 'boiler-repair',
    basePrice: { min: 80, max: 150, unit: 'per repair' },
    options: [
      { name: 'Combi Boiler', priceModifier: 1.0, type: 'multiplier' },
      { name: 'System Boiler', priceModifier: 1.2, type: 'multiplier' },
      { name: 'Conventional Boiler', priceModifier: 1.3, type: 'multiplier' },
    ],
  },
  {
    name: 'Boiler Installation',
    slug: 'boiler-installation',
    basePrice: { min: 2000, max: 3500, unit: 'installed' },
    options: [
      { name: 'Like-for-like swap', priceModifier: 1.0, type: 'multiplier' },
      { name: 'New location', priceModifier: 1.3, type: 'multiplier' },
      { name: 'Full system upgrade', priceModifier: 1.5, type: 'multiplier' },
    ],
  },
  {
    name: 'Bathroom Installation',
    slug: 'bathroom-installation',
    basePrice: { min: 4000, max: 8000, unit: 'complete' },
    sizeOptions: [
      { name: 'Small (under 4m²)', multiplier: 0.8 },
      { name: 'Medium (4-7m²)', multiplier: 1.0 },
      { name: 'Large (over 7m²)', multiplier: 1.4 },
    ],
    options: [
      { name: 'Standard fixtures', priceModifier: 1.0, type: 'multiplier' },
      { name: 'Premium fixtures', priceModifier: 1.4, type: 'multiplier' },
      { name: 'Luxury fixtures', priceModifier: 1.8, type: 'multiplier' },
    ],
  },
  {
    name: 'Kitchen Fitting',
    slug: 'kitchen-fitting',
    basePrice: { min: 3000, max: 6000, unit: 'labour only' },
    sizeOptions: [
      { name: 'Small (up to 10 units)', multiplier: 0.7 },
      { name: 'Medium (10-15 units)', multiplier: 1.0 },
      { name: 'Large (15+ units)', multiplier: 1.4 },
    ],
    options: [
      { name: 'Units only', priceModifier: 1.0, type: 'multiplier' },
      { name: 'With worktops', priceModifier: 1.2, type: 'multiplier' },
      { name: 'Full kitchen (electrics, plumbing)', priceModifier: 1.6, type: 'multiplier' },
    ],
  },
  {
    name: 'Electrical Rewiring',
    slug: 'electrical-rewiring',
    basePrice: { min: 3000, max: 5000, unit: 'complete' },
    sizeOptions: [
      { name: '1-2 bed flat', multiplier: 0.7 },
      { name: '2-3 bed house', multiplier: 1.0 },
      { name: '4+ bed house', multiplier: 1.5 },
    ],
    options: [
      { name: 'Partial rewire', priceModifier: 0.6, type: 'multiplier' },
      { name: 'Full rewire', priceModifier: 1.0, type: 'multiplier' },
      { name: 'With consumer unit', priceModifier: 1.15, type: 'multiplier' },
    ],
  },
  {
    name: 'Plastering',
    slug: 'plastering',
    basePrice: { min: 400, max: 600, unit: 'per room' },
    options: [
      { name: 'Patch repair', priceModifier: 0.3, type: 'multiplier' },
      { name: 'One wall', priceModifier: 0.5, type: 'multiplier' },
      { name: 'Full room', priceModifier: 1.0, type: 'multiplier' },
    ],
  },
];

export function PriceCalculator() {
  const [selectedService, setSelectedService] = useState<ServicePricing | null>(null);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(0);

  const calculatePrice = (): { min: number; max: number } | null => {
    if (!selectedService) return null;

    let baseMin = selectedService.basePrice.min;
    let baseMax = selectedService.basePrice.max;

    // Apply size modifier
    if (selectedService.sizeOptions) {
      const sizeMultiplier = selectedService.sizeOptions[selectedSize].multiplier;
      baseMin *= sizeMultiplier;
      baseMax *= sizeMultiplier;
    }

    // Apply option modifier
    const option = selectedService.options[selectedOption];
    if (option.type === 'multiplier') {
      baseMin *= option.priceModifier;
      baseMax *= option.priceModifier;
    } else {
      baseMin += option.priceModifier;
      baseMax += option.priceModifier;
    }

    return {
      min: Math.round(baseMin),
      max: Math.round(baseMax),
    };
  };

  const price = calculatePrice();

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-luxury text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-8 h-8 text-gold-400" />
          <h3 className="text-2xl font-bold">Instant Price Calculator</h3>
        </div>
        <p className="text-cream-200">
          Get an instant estimate for your project. Prices are guide only - we will confirm after a site visit.
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">
            Select Service
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {servicePricing.map((service) => (
              <button
                key={service.slug}
                onClick={() => {
                  setSelectedService(service);
                  setSelectedOption(0);
                  setSelectedSize(0);
                }}
                className={`p-3 text-sm rounded-lg border transition-all ${
                  selectedService?.slug === service.slug
                    ? 'border-gold-500 bg-gold-50 text-gold-700 font-medium'
                    : 'border-cream-200 hover:border-gold-300 text-navy-700'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {selectedService && (
          <>
            {/* Size Options */}
            {selectedService.sizeOptions && (
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Property Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedService.sizeOptions.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(index)}
                      className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                        selectedSize === index
                          ? 'border-gold-500 bg-gold-50 text-gold-700 font-medium'
                          : 'border-cream-200 hover:border-gold-300 text-navy-700'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Options */}
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-2">
                Type of Work
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedService.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                      selectedOption === index
                        ? 'border-gold-500 bg-gold-50 text-gold-700 font-medium'
                        : 'border-cream-200 hover:border-gold-300 text-navy-700'
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            {price && (
              <div className="bg-navy-900 rounded-xl p-6 text-center">
                <p className="text-cream-300 text-sm mb-2">Estimated Price</p>
                <p className="text-4xl font-bold text-white mb-1">
                  £{price.min.toLocaleString()} - £{price.max.toLocaleString()}
                </p>
                <p className="text-gold-400 text-sm">
                  {selectedService.basePrice.unit}
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-sm text-navy-500 bg-cream-50 p-4 rounded-lg">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                This is a guide price only. Final quotes depend on your specific requirements,
                property access, and materials chosen. We provide free, no-obligation quotes
                after a site visit.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/local/hampstead/${selectedService.slug}`}
                className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Get Exact Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:02079460958"
                className="flex-1 bg-navy-100 hover:bg-navy-200 text-navy-900 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </>
        )}

        {!selectedService && (
          <div className="text-center py-8 text-navy-500">
            <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Select a service above to see pricing</p>
          </div>
        )}
      </div>
    </div>
  );
}
