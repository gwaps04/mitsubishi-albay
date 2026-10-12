// FILE: src/components/RobertVillaPortalView.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import RobertVillaHeroCarousel from '@/components/RobertVillaHeroCarousel';
import RobertVillaVehicleGrid from '@/components/RobertVillaVehicleGrid';
import RobertVillaTestimonials from '@/components/RobertVillaTestimonials';
import RobertVillaContactForm from '@/components/RobertVillaContactForm';
import { ChevronRight, ShieldCheck, Phone } from 'lucide-react';

export default function RobertVillaPortalView() {
  const [selectedUnit, setSelectedUnit] = useState<string>('Montero Sport Black Series');

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* 1. Breadcrumb Micro-bar */}
      <div className="bg-white border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home Showroom
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-neutral-900">
            Robert Villa (Top 1 Sales Consultant • Albay Branch)
          </span>
        </div>
      </div>

      {/* 2. Full-Width Responsive Hero Section */}
      <RobertVillaHeroCarousel />

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-14">
        {/* Available Car Units with Allocation & Promo Computations */}
        <RobertVillaVehicleGrid onSelectUnit={(unitName) => setSelectedUnit(unitName)} />

        {/* Verified Client Testimonials */}
        <RobertVillaTestimonials />

        {/* Personalized Contact & Quotation Inquiry Section */}
        <RobertVillaContactForm selectedUnit={selectedUnit} />

        {/* Albay Dealership Assurance Box */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-neutral-900">Official Mitsubishi Albay Warranty & Aftersales Guarantee</p>
              <p className="text-neutral-500">All vehicles purchased through Robert Villa include nationwide 3 to 5-year warranty and Albay PMS servicing.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+63527428888"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Dealership Trunkline</span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold transition-colors"
            >
              <span>Dealership Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
