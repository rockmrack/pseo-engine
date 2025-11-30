'use client';

// ============================================================================
// CONTACT FORM WITH LEAD CAPTURE
// Captures leads and sends to email/webhook
// ============================================================================

import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { services } from '@/lib/data/services';

interface FormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
  urgency: 'standard' | 'urgent' | 'emergency';
}

interface ContactFormProps {
  preselectedService?: string;
  preselectedLocation?: string;
  variant?: 'full' | 'compact';
}

export function ContactForm({ preselectedService, preselectedLocation, variant = 'full' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    postcode: preselectedLocation || '',
    service: preselectedService || '',
    message: '',
    urgency: 'standard',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        service: '',
        message: '',
        urgency: 'standard',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please call us directly or try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We have received your enquiry and will get back to you within 2 hours during business hours.
        </p>
        <p className="text-green-600 text-sm">
          For urgent matters, please call us directly on <strong>020 7946 0958</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            placeholder="John Smith"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            placeholder="07123 456789"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        {/* Postcode */}
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-navy-700 mb-2">
            Postcode *
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors uppercase"
            placeholder="NW3 2QG"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-2">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors bg-white"
          >
            <option value="">Select a service...</option>
            {services.map(service => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-navy-700 mb-2">
            How Urgent?
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors bg-white"
          >
            <option value="standard">Standard - Within a week</option>
            <option value="urgent">Urgent - Within 48 hours</option>
            <option value="emergency">Emergency - Today</option>
          </select>
        </div>
      </div>

      {/* Message */}
      {variant === 'full' && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
            placeholder="Please describe what you need help with, any specific requirements, and your preferred times for us to visit..."
          />
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-navy-900 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Get Free Quote
          </>
        )}
      </button>

      <p className="text-sm text-navy-500 text-center">
        By submitting this form, you agree to our privacy policy. We will never share your details with third parties.
      </p>
    </form>
  );
}
