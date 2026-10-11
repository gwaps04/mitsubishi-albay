// FILE: src/components/RobertVillaVehicleGrid.tsx
'use client';

import React from 'react';
import { Car, Check, Users, Fuel, ArrowRight, Sparkles } from 'lucide-react';

export interface UnitDetail {
  id: string;
  name: string;
  variant: string;
  category: string;
  imagePlaceholder: string;
  srp: string;
  promoDP: string;
  monthly: string;
  seats: string;
  transmission: string;
  fuelType: string;
  keyPerks: string[];
}

export const ROBERT_UNITS: UnitDetail[] = [
  {
    id: 'montero-sport',
    name: 'Montero Sport',
    variant: 'Black Series 4x2 AT',
    category: 'Midsize SUV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Montero+Sport+Black+Series',
    srp: '₱2,128,000',
    promoDP: '₱98,000 All-In Downpayment',
    monthly: '₱38,450 / mo (60 Months)',
    seats: '7-Seater',
    transmission: '8-Speed Automatic',
    fuelType: '2.4L Diesel Turbo MIVEC',
    keyPerks: ['Free 1-Yr Comprehensive Insurance', 'Free 3-Yr LTO Registration', 'Free Chattel Mortgage'],
  },
  {
    id: 'triton-athlete',
    name: 'All-New Triton',
    variant: 'Athlete 4x4 AT',
    category: '4x4 Pickup Truck',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Triton+Athlete+4x4',
    srp: '₱1,909,000',
    promoDP: '₱85,000 All-In Downpayment',
    monthly: '₱35,120 / mo (60 Months)',
    seats: '5-Seater',
    transmission: '6-Speed AT with Super Select 4WD-II',
    fuelType: '2.4L Clean Diesel Bi-Turbo',
    keyPerks: ['Free Bedliner & Window Tint', 'Free PMS Labor for 1st Year', 'Free 3-Yr LTO Registration'],
  },
  {
    id: 'xpander-cross',
    name: 'Xpander Cross',
    variant: '1.5L AT Two-Tone',
    category: '7-Seater Crossover MPV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Xpander+Cross+MPV',
    srp: '₱1,346,000',
    promoDP: '₱48,000 All-In Downpayment',
    monthly: '₱24,800 / mo (60 Months)',
    seats: '7-Seater',
    transmission: '4-Speed Automatic',
    fuelType: '1.5L MIVEC Gasoline',
    keyPerks: ['225mm High Ground Clearance', 'Active Yaw Control Safety', 'Spacious Flexible Interior'],
  },
  {
    id: 'xforce',
    name: 'Mitsubishi Xforce',
    variant: 'Premium 1.5L CVT',
    category: 'Compact SUV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Mitsubishi+Xforce+SUV',
    srp: '₱1,581,000',
    promoDP: '₱68,000 All-In Downpayment',
    monthly: '₱29,350 / mo (60 Months)',
    seats: '5-Seater',
    transmission: 'CVT Automatic',
    fuelType: '1.5L DOHC MIVEC',
    keyPerks: ['Yamaha Dynamic Premium Sound', 'Drive Modes (Wet/Gravel/Mud)', 'Wireless Apple CarPlay/Android Auto'],
  },
  {
    id: 'mirage-g4',
    name: 'Mirage G4',
    variant: 'GLS 1.2L CVT',
    category: 'Subcompact Sedan',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Mirage+G4+Sedan',
    srp: '₱899,000',
    promoDP: '₱28,000 All-In Downpayment',
    monthly: '₱16,420 / mo (60 Months)',
    seats: '5-Seater',
    transmission: 'INVECS-III CVT',
    fuelType: '1.2L 3-Cylinder MIVEC',
    keyPerks: ['Up to 23 km/L Fuel Efficiency', 'Keyless Operation System', 'Affordable Maintenance'],
  },
  {
    id: 'outlander-phev',
    name: 'Outlander PHEV',
    variant: 'Plug-In Hybrid EV 4WD',
    category: 'Electric / Hybrid SUV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Outlander+PHEV',
    srp: '₱2,998,000',
    promoDP: '₱180,000 Low DP Option',
    monthly: '₱56,200 / mo (60 Months)',
    seats: '7-Seater',
    transmission: 'Twin Motor 4WD EV',
    fuelType: 'Twin Motor + 2.4L Atkinson Cycle',
    keyPerks: ['Zero-Emission Daily City Range', 'Super All-Wheel Control (S-AWC)', 'Exempt from Number Coding'],
  },
];

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
        {ROBERT_UNITS.map((unit) => (
          <div
            key={unit.id}
            className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Image with distinct placeholder */}
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <img
                  src={unit.imagePlaceholder}
                  alt={`${unit.name} ${unit.variant} Placeholder`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                    Monthly: <span className="font-semibold text-neutral-900">{unit.monthly}</span>
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
                <span>Select for Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
