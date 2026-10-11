// FILE: src/app/page.tsx
import React from 'react';
import HeroZSection from '@/components/HeroZSection';
import VehicleLineupSection from '@/components/VehicleLineupSection';
import BranchLocationSection from '@/components/BranchLocationSection';
import Link from 'next/link';
import { Award, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function MitsubishiHomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero with Strict Z-Pattern guiding eye down the visual diagonal */}
      <HeroZSection />

      {/* 2. Primary Z-Pattern Bottom Call-to-Action Bridge */}
      <section className="bg-red-600 text-white py-6 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-2.5 bg-black/20 rounded-xl shrink-0">
              <Award className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <p className="font-extrabold text-base sm:text-lg">
                Looking for the best Mitsubishi deal in Albay?
              </p>
              <p className="text-xs sm:text-sm text-red-100 font-light">
                Work directly with Robert Villa, our #1 Sales Consultant for fast bank approvals and custom downpayment quotes.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Link
              href="/robert-villa"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-red-600 hover:bg-neutral-100 font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Connect with Robert Villa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Available Vehicle Units Catalog */}
      <div id="promos" className="scroll-mt-20">
        <VehicleLineupSection />
      </div>

      {/* 4. Dealership & Location Info */}
      <BranchLocationSection />

      {/* 6. Bottom Inquiry Final Call-to-Action */}
      <section className="py-14 bg-neutral-900 text-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-400 border border-red-500/40">
            <Sparkles className="w-3.5 h-3.5" />
            Zero Commitment Initial Quotation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Drive Your Brand-New Mitsubishi Home?
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto font-light">
            Contact Mitsubishi Albay Bicol Branch today. Our certified sales consultants will assist you with financing applications, trade-in appraisals, and test-drives.
          </p>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/#vehicles"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Browse Vehicle Catalog</span>
            </Link>
            <Link
              href="/robert-villa"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm border border-neutral-700 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Robert Villa Client Portal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
