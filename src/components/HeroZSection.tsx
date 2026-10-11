// FILE: src/components/HeroZSection.tsx
import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroZSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-white py-16 lg:py-24">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ED0000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Z-Pattern Diagnostic Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Official Albay Bicol Branch Showcase
          </span>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            • Experience Legendary Japanese Reliability in Bicolandia
          </span>
        </div>

        {/* Z-Pattern Main Diagonal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Top-Left to Mid Diagonal: Headlines and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Drive Your Ambition Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
                Albay & Bicolandia
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Welcome to the authorized Mitsubishi Albay showroom. From rugged climbs around Mt. Mayon to sleek city drives in Legazpi, find exclusive low downpayment promos, 24-hour bank approvals, and personalized care from our certified team.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Lowest All-in Downpayment Deals</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Fast Bank Approval Assistance</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Top-Rated Dealership Service</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Official Warranty & Genuine Parts</span>
              </div>
            </div>

            {/* Z-Pattern Diagonal Path to Primary Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/robert-villa"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-base hover:bg-red-700 active:bg-red-800 transition-all shadow-lg shadow-red-600/30 group"
              >
                <Award className="w-5 h-5 text-amber-300" />
                <span>Meet Robert Villa (Top 1 Agent)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#vehicles"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-base border border-neutral-700 transition-colors"
              >
                <span>View 2026 Vehicle Lineup</span>
              </Link>
            </div>
          </div>

          {/* Top-Right visual anchor in Z-Pattern: Distinct Hero Image Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-800 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full bg-neutral-900">
                {/* Visual image placeholder tag */}
                <img
                  src="https://placehold.co/800x600/18181b/ffffff?text=Mitsubishi+Albay+Showroom+Hero+Banner"
                  alt="Mitsubishi Albay Showroom Hero Banner Placeholder"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating badge inside hero placeholder */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-400 font-bold">Featured Unit</p>
                    <p className="text-sm font-semibold text-white">Mitsubishi Montero Sport 2026</p>
                  </div>
                  <span className="text-xs font-bold bg-red-600 px-2.5 py-1 rounded-lg text-white">
                    Low DP Promo
                  </span>
                </div>
              </div>
            </div>

            {/* Branch accreditation pill */}
            <div className="mt-4 flex items-center justify-between px-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authorized Dealer
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" /> Fast Release Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
