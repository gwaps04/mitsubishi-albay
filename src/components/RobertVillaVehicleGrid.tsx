// FILE: src/components/RobertVillaVehicleGrid.tsx
'use client';

import React from 'react';
import { Car, Check, Users, Fuel, ArrowRight } from 'lucide-react';
import AspectImage from '@/components/AspectImage';
import { ALBAY_VEHICLES } from '@/lib/vehiclesData';

interface RobertVillaVehicleGridProps {
  onSelectUnit?: (unitName: string) => void;
}

export default function RobertVillaVehicleGrid({ onSelectUnit }: RobertVillaVehicleGridProps) {
  const handleSelect = (unitName: string) => {
    if (onSelectUnit) {
      onSelectUnit(unitName);
    }
    const formEl = document.getElementById('inquiry');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 mb-2">
            <Car className="w-3.5 h-3.5" />
            <span>Robert Villa&apos;s Allocation & Promo Units</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Available Mitsubishi Units & Low DP Promos
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            All units are available for immediate reservation, fast bank approval, and unit release at Albay Branch.
          </p>
        </div>
        <span className="text-xs text-neutral-500 font-medium self-start sm:self-auto">
          Updated for 2026 Promo Cycles
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALBAY_VEHICLES.map((unit) => (
          <div
            key={unit.id}
            className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Aspect Ratio Guard: aspect-[16/10] ensures any image aspect ratio fits uniformly */}
              <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden">
                <AspectImage
                  src={unit.imagePlaceholder}
                  alt={`${unit.name} ${unit.variant}`}
                  aspectClass="aspect-[16/10]"
                  objectFit="cover"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-neutral-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {unit.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                  {unit.srp}
                </div>
              </div>

              {/* Information */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                  {unit.name}
                </h3>
                <p className="text-xs font-medium text-neutral-500 mb-3">{unit.variant}</p>

                {/* Promo Box */}
                <div className="p-3 rounded-xl bg-red-50/60 border border-red-200/80 mb-4 space-y-1">
                  <div className="text-xs font-bold text-red-600">
                    {unit.promoDP}
                  </div>
                  <div className="text-xs text-neutral-700">
                    Monthly: <span className="font-semibold text-neutral-900">{unit.monthlyPromo}</span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-600 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{unit.seats}</span>
                  </span>
                  <span className="flex items-center gap-1.5 truncate">
                    <Fuel className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">{unit.transmission}</span>
                  </span>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                  {unit.keyPerks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Select CTA */}
            <div className="p-5 pt-0">
              <button
                type="button"
                onClick={() => handleSelect(`${unit.name} (${unit.variant})`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-red-600 text-white text-xs font-semibold transition-all shadow-sm active:scale-98"
              >
                <span>Select for Robert&apos;s Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
