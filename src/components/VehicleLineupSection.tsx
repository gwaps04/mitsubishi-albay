// FILE: src/components/VehicleLineupSection.tsx
import React from 'react';
import { Car, Users, Fuel, ArrowRight, Phone } from 'lucide-react';
import AspectImage from '@/components/AspectImage';
import { ALBAY_VEHICLES } from '@/lib/vehiclesData';

export default function VehicleLineupSection() {
  return (
    <section id="vehicles" className="py-16 lg:py-24 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-600 mb-2">
              <Car className="w-3.5 h-3.5" />
              <span>2026 Model Catalog & Promos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Featured Units at Albay Showroom
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-xl">
              Competitive all-in downpayment bundles with free 1-year comprehensive insurance, 3-year LTO registration, and chattel mortgage fees.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="tel:+63527428888"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Showroom: (052) 742-8888</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALBAY_VEHICLES.map((unit) => (
            <div
              key={unit.id}
              className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Aspect Ratio Guard: aspect-[16/10] ensures uniform card heights */}
              <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden">
                <AspectImage
                  src={unit.imagePlaceholder}
                  alt={`${unit.name} ${unit.variant}`}
                  aspectClass="aspect-[16/10]"
                  objectFit="cover"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                {unit.badge && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow">
                    {unit.badge}
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-neutral-200 text-xs px-2.5 py-1 rounded-lg font-medium border border-white/10">
                  {unit.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                    {unit.tagline}
                  </p>

                  {/* Promo Highlights Box */}
                  <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-500">All-In Downpayment:</span>
                      <span className="font-bold text-red-600 text-sm">{unit.promoDP}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-500">Monthly Estimate:</span>
                      <span className="font-semibold text-neutral-800">{unit.monthlyPromo}</span>
                    </div>
                  </div>

                  {/* Specs Quick Pill */}
                  <div className="mt-3 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2 text-[11px] text-neutral-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      {unit.seats}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <Fuel className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate">{unit.transmission}</span>
                    </span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-5 pt-3">
                  <a
                    href="tel:+63527428888"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-red-600 text-white text-xs font-semibold transition-colors text-center"
                  >
                    <span>Inquire with Showroom</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
