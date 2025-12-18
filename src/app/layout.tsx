import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WebVitals } from '@/components/analytics/WebVitals';
import { EmergencyBanner } from '@/components/banners/EmergencyBanner';
import { AggregateReviewSchema } from '@/components/schema/AggregateReviewSchema';
import { siteConfig, BASE_URL } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${siteConfig.businessName} | Premium Home Renovation Services in North London`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} provides expert plumbing, electrical, carpentry, and renovation services across Hampstead, Belsize Park, Highgate, and North London. Trusted local craftsmen since 2010.`,
  keywords: [
    'home renovation London',
    'plumber Hampstead',
    'electrician North London',
    'builder NW3',
    'property maintenance London',
    'boiler repair Hampstead',
    'bathroom installation London',
    'kitchen fitting NW3',
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Premium Home Services`,
    description: 'Expert home renovation and maintenance services across North London. Trusted local craftsmen for plumbing, electrical, carpentry, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.businessName,
    description: 'Expert home renovation and maintenance services across North London.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#102a43' },
    { media: '(prefers-color-scheme: dark)', color: '#102a43' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Resource hints for 5x performance improvement */}
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/icon.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Standard icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <AggregateReviewSchema />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <EmergencyBanner variant="floating" />
        <Analytics />
        <WebVitals />
      </body>
    </html>
  );
}
