// FILE: src/components/BranchLocationSection.tsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ShieldCheck, Wrench, Calendar, Sparkles } from 'lucide-react';

export default function BranchLocationSection() {
  return (
    <section id="branch" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 lg:p-12 overflow-hidden relative shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mitsubishi Motors Philippines Authorized Dealer</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Visit Mitsubishi Albay in the Heart of Bicolandia
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Conveniently located along the central Maharlika Highway corridor serving Legazpi City, Daraga, Tabaco City, Ligao, and neighboring Bicol provinces. Our full-scale 3S facility offers vehicle sales, genuine periodic maintenance service (PMS), and comprehensive body & paint bays.
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-neutral-800 text-red-500 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Certified 3S Facility</h4>
                    <p className="text-xs text-neutral-400">Sales, Genuine Spare Parts, and Service under one roof.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-neutral-800 text-red-500 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Master Technicians</h4>
                    <p className="text-xs text-neutral-400">Factory-trained Japanese engineering diagnostic standards.</p>
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+63527428888"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Dealership: (052) 742-8888</span>
                </a>
                <Link
                  href="/salesman/robert-villa#inquiry"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm border border-neutral-700 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span>Schedule Test Drive</span>
                </Link>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-800 shadow-xl">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="https://placehold.co/800x600/18181b/ffffff?text=Mitsubishi+Albay+Dealership+and+Showroom"
                    alt="Mitsubishi Albay Dealership and Showroom Placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-neutral-950/90 border-t border-neutral-800 text-xs text-neutral-300">
                  <p className="font-semibold text-white">Mitsubishi Albay Showroom & Service Center</p>
                  <p className="text-neutral-400 mt-0.5">Maharlika Highway, Daraga / Legazpi, Albay, Bicol 4501</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
