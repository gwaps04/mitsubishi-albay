// FILE: src/app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import MitsubishiNavbar from '@/components/MitsubishiNavbar';
import MitsubishiFooter from '@/components/MitsubishiFooter';

export const metadata: Metadata = {
  title: 'Mitsubishi Albay Bicol Branch',
  description: 'Official showcase and top sales consultant portal for Mitsubishi Motors Albay, Bicol Branch.',
  openGraph: {
    title: 'Mitsubishi Albay Bicol Branch',
    description: 'Official showcase and top sales consultant portal for Mitsubishi Motors Albay, Bicol Branch.',
    type: 'website',
    locale: 'en_PH',
    siteName: 'Mitsubishi Motors Albay',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-poppins antialiased">
        <MitsubishiNavbar />
        <main className="flex-1">{children}</main>
        <MitsubishiFooter />
      </body>
    </html>
  );
}
