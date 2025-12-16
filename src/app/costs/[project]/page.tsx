import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calculator, PoundSterling, TrendingUp, Clock } from 'lucide-react';
import { 
  projectCostTemplates, 
  getProjectCostTemplateBySlug, 
  getAllProjectCostSlugs,
  PRICING_LAST_UPDATED,
} from '@/lib/data/pricing-database';
import { siteConfig, BASE_URL } from '@/lib/config';
import { CostCalculatorClient } from './CostCalculatorClient';

interface PageProps {
  params: Promise<{
    project: string;
  }>;
  searchParams: Promise<{
    postcode?: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjectCostSlugs().map((slug) => ({
    project: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { project } = await params;
  const template = getProjectCostTemplateBySlug(project);

  if (!template) {
    return { title: 'Cost Calculator Not Found' };
  }

  return {
    title: template.metaTitle,
    description: template.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/costs/${template.slug}`,
    },
    openGraph: {
      title: template.metaTitle,
      description: template.metaDescription,
      type: 'website',
    },
  };
}

export default async function CostCalculatorPage({ params, searchParams }: PageProps) {
  const { project } = await params;
  const { postcode } = await searchParams;
  const template = getProjectCostTemplateBySlug(project);

  if (!template) {
    notFound();
  }

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: template.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Service Schema with price range
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: template.name,
    description: template.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postcode,
        addressCountry: 'GB',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
        price: template.baseCostPerUnit,
        unitText: template.unit,
      },
    },
  };

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16 md:py-20">
        <div className="container-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Cost Calculator
            </div>

            <h1 className="heading-1 mb-6">
              Cost of {template.name} in{' '}
              <span className="text-gold-400">Hampstead</span>
            </h1>

            <p className="body-large text-navy-200 mb-6">
              {template.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                <PoundSterling className="w-4 h-4 text-gold-400" />
                From £{template.baseCostPerUnit} per {template.unit}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                <Clock className="w-4 h-4 text-gold-400" />
                {template.timeline}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                <TrendingUp className="w-4 h-4 text-gold-400" />
                Updated {PRICING_LAST_UPDATED}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator - Client Component */}
      <CostCalculatorClient template={template} postcode={postcode} />
    </>
  );
}

export const revalidate = 86400; // Revalidate daily for fresh pricing
