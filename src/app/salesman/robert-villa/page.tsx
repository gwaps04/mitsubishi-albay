// FILE: src/app/salesman/robert-villa/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import RobertVillaPortalView from '@/components/RobertVillaPortalView';

export const metadata: Metadata = {
  title: 'Robert Villa | Top 1 Sales Consultant • Mitsubishi Albay Bicol Branch',
  description:
    'Dedicated client portal for Robert Villa, #1 Top Sales Consultant at Mitsubishi Motors Albay. Get exclusive low downpayment calculations, 24-hr bank financing assistance, and test-drive reservations.',
  openGraph: {
    title: 'Robert Villa | Top 1 Sales Consultant • Mitsubishi Albay Bicol Branch',
    description:
      'Direct client portal for Robert Villa. Explore exclusive low downpayment promos on Montero Sport, Triton 4x4, and Xpander Cross with fast bank approvals.',
    type: 'profile',
  },
};

export default function RobertVillaSalesmanPage() {
  return <RobertVillaPortalView />;
}
