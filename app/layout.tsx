import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { JsonLd, organizationSchema, faqSchema } from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FleetJustice - Commercial Trucking Insurance & Legal Recovery',
  description: 'Professional commercial trucking insurance and 18-wheeler accident legal services. Hazmat liability, new authority quotes, and accident recovery. Get a free quote today.',
  keywords: 'commercial trucking insurance, 18-wheeler accident lawyer, hazmat liability, fleet insurance, owner-operator insurance, truck accident recovery, DOT compliance',
  // ADD THIS ICONS SECTION
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'FleetJustice - Commercial Trucking Insurance & Legal Recovery',
    description: 'Professional commercial trucking insurance and legal services nationwide.',
    type: 'website',
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
        {/* Force the browser to recognize the icon immediately */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script src="https://pl29101359.profitablecpmratenetwork.com/3d/a0/36/3da03618ef072d0da9c24cfb8af97881.js"></script>
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
