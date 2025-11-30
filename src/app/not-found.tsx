import Link from 'next/link';
import { Home, Search, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cream-50">
      <div className="container-lg py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl font-bold text-navy-200 mb-4">404</div>
          <h1 className="heading-2 text-navy-900 mb-4">Page Not Found</h1>
          <p className="body-large text-navy-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or
            doesn't exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Link href="/services" className="btn-outline">
              <Search className="w-4 h-4 mr-2" />
              Browse Services
            </Link>
          </div>

          <div className="p-6 bg-white rounded-xl border border-cream-200">
            <p className="text-navy-600 mb-4">
              Need help? Give us a call and we'll point you in the right direction.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
