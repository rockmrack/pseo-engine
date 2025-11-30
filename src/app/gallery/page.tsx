import { Metadata } from 'next';
import { ProjectGallery } from '@/components/gallery/ProjectGallery';
import { siteConfig, BASE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: `Our Work | Project Gallery | ${siteConfig.businessName}`,
  description: 'Browse our portfolio of completed bathroom renovations, kitchen installations, boiler upgrades, and more across North London. See the quality of our workmanship.',
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-luxury text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Work
            </h1>
            <p className="text-xl text-cream-200">
              Browse our portfolio of completed projects across North London.
              From bathroom transformations to kitchen installations, see the quality that sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery showTitle={false} />

      {/* CTA */}
      <section className="py-16 bg-gold-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-navy-800 mb-8 max-w-xl mx-auto">
            Let us bring the same quality and attention to detail to your project.
            Get a free quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white hover:bg-cream-100 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
