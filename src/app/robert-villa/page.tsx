// FILE: src/app/robert-villa/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import RobertVillaPortalView from '@/components/RobertVillaPortalView';

export const metadata: Metadata = {
  title: 'Robert Villa | Official Client Portal • Mitsubishi Albay',
  description:
    'Direct client portal for Robert Villa, Top 1 Sales Consultant at Mitsubishi Motors Albay Bicol Branch. Direct quotations, low downpayment promos, and 24-hr bank approval assistance.',
  openGraph: {
    title: 'Robert Villa | Top 1 Sales Consultant • Mitsubishi Albay',
    description:
      'Official direct client portal for Robert Villa. Explore exclusive low downpayment promos and get fast quotation assistance.',
    type: 'profile',
  },
};

export default function RobertVillaDirectPage() {
  return <RobertVillaPortalView />;
}
