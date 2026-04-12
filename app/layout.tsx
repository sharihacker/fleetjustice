import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { JsonLd, organizationSchema, faqSchema } from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FleetJustice - Commercial Trucking Insurance & Legal Recovery',
  description: 'Professional commercial trucking insurance and 18-wheeler accident legal services. Hazmat liability, new authority quotes, and accident recovery.',
  keywords: 'commercial trucking insurance, 18-wheeler accident lawyer, fleet insurance, DOT compliance',
  manifest: '/site.webmanifest',
  verification: {
    other: {
      'google-adsense-account': 'ca-pub-5181356326435616',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={faqSchema} />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
