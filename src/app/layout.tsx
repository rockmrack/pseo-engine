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
    default: `${siteConfig.businessName} | #1 Home Renovation Services in Hampstead & North London`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} - North London's most trusted home renovation company. Expert plumbers, electricians, carpenters, and builders serving Hampstead, Highgate, Muswell Hill, Crouch End, Islington, Finchley, Golders Green & all NW/N postcodes. 4.9★ rating, 14+ years experience. Call 07459 345456.`,
  keywords: [
    // PRIMARY - Hampstead
    'Hampstead Renovations',
    'home renovation Hampstead',
    'plumber Hampstead',
    'electrician Hampstead',
    'builder Hampstead NW3',
    'bathroom installation Hampstead',
    'kitchen fitting Hampstead',
    'boiler repair Hampstead',
    // NORTH WEST LONDON
    'plumber North West London',
    'electrician NW London',
    'builder North London',
    'home renovation NW3',
    'home renovation NW6',
    'home renovation NW11',
    'plumber Golders Green',
    'builder Swiss Cottage',
    'electrician West Hampstead',
    'plumber Belsize Park',
    'builder St Johns Wood',
    'plumber Kentish Town',
    'electrician Camden',
    // NORTH LONDON - N POSTCODES
    'plumber Highgate N6',
    'electrician Muswell Hill N10',
    'builder Crouch End N8',
    'plumber Islington N1',
    'electrician Finchley N3',
    'builder Stoke Newington N16',
    'plumber Wood Green N22',
    'electrician Tottenham N17',
    'builder Palmers Green N13',
    'plumber Winchmore Hill N21',
    // SERVICE KEYWORDS
    'Victorian property renovation London',
    'period property specialists North London',
    'loft conversion Hampstead',
    'extension building North London',
    'boiler installation NW London',
    'emergency plumber Hampstead',
    '24 hour electrician North London',
    'Gas Safe plumber NW3',
    'NICEIC electrician Hampstead',
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
    title: `${siteConfig.businessName} | #1 Home Renovation in Hampstead & North London`,
    description: 'Expert home renovation services across Hampstead, Highgate, Muswell Hill, Crouch End, Islington, Finchley & all North London. Victorian property specialists. 4.9★ Google rating. Trusted local craftsmen for plumbing, electrical, carpentry & building work.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} - Premium Home Renovation Services in Hampstead & North London`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.businessName} | Hampstead & North London`,
    description: 'Expert home renovation services. Victorian property specialists. 4.9★ rated. Serving NW3, NW6, NW11, N1, N6, N8, N10 & all North London postcodes.',
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
        {/* ============================================================= */}
        {/* PERFORMANCE OPTIMIZATIONS - 50 SEO IMPROVEMENTS              */}
        {/* ============================================================= */}
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        
        {/* Preconnect to critical origins for faster connections */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets for faster rendering */}
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
        
        {/* Content freshness - Last modified hint for search engines */}
        <meta name="revisit-after" content="3 days" />
        
        {/* Geographic targeting for local SEO - HAMPSTEAD & NORTH LONDON */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="Hampstead, London" />
        <meta name="geo.position" content="51.5556;-0.1779" />
        <meta name="ICBM" content="51.5556, -0.1779" />
        
        {/* Extended local business signals */}
        <meta name="DC.title" content="Hampstead Renovations - Home Renovation Services" />
        <meta name="DC.creator" content="Hampstead Renovations" />
        <meta name="DC.subject" content="Home renovation, plumbing, electrical, building services in Hampstead and North London" />
        <meta name="DC.description" content="Expert home renovation services across Hampstead, North West London, and North London" />
        <meta name="DC.coverage" content="Hampstead, Highgate, Muswell Hill, Crouch End, Islington, Finchley, Golders Green, Camden, Swiss Cottage, Belsize Park, Kentish Town, North London, NW3, NW6, NW11, N1, N6, N8, N10" />
        
        {/* Service area meta tags */}
        <meta name="coverage" content="North London, North West London, Hampstead, NW3, NW6, NW11, NW1, NW5, NW8, N1, N2, N6, N8, N10, N16" />
        <meta name="distribution" content="local" />
        <meta name="target" content="Hampstead residents, North London homeowners, NW London property owners" />
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
