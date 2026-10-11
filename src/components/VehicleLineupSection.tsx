// FILE: src/components/VehicleLineupSection.tsx
import React from 'react';
import Link from 'next/link';
import { Car, Users, Fuel, Sparkles, ArrowRight } from 'lucide-react';

interface VehicleUnit {
  id: string;
  name: string;
  tagline: string;
  category: string;
  imagePlaceholder: string;
  priceEstimate: string;
  lowDownpayment: string;
  monthlyPromo: string;
  seats: string;
  engine: string;
  transmission: string;
  badge?: string;
}

const VEHICLE_DATA: VehicleUnit[] = [
  {
    id: 'montero-sport',
    name: 'Montero Sport Black Series',
    tagline: 'Refined 7-seater midsize SUV with bold commanding presence',
    category: 'Midsize SUV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Montero+Sport+Black+Series',
    priceEstimate: '₱2,128,000 SRP',
    lowDownpayment: '₱98,000 All-In DP',
    monthlyPromo: '₱38,450 / mo (60 mos)',
    seats: '7-Seater',
    engine: '2.4L MIVEC Clean Diesel Turbo',
    transmission: '8-Speed Automatic',
    badge: 'Best Seller',
  },
  {
    id: 'triton-athlete',
    name: 'All-New Triton Athlete 4x4',
    tagline: 'Next-gen rally-bred power engineered to conquer Bicol terrain',
    category: '4x4 Pickup Truck',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Triton+Athlete+4x4',
    priceEstimate: '₱1,909,000 SRP',
    lowDownpayment: '₱85,000 All-In DP',
    monthlyPromo: '₱35,120 / mo (60 mos)',
    seats: '5-Seater',
    engine: '2.4L Bi-Turbo Clean Diesel (204 PS)',
    transmission: '6-Speed AT with Super Select 4WD-II',
    badge: 'High Performance',
  },
  {
    id: 'xpander-cross',
    name: 'Mitsubishi Xpander Cross',
    tagline: 'Philippines #1 favorite family 7-seater MPV with 225mm ground clearance',
    category: '7-Seater Crossover MPV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Xpander+Cross+MPV',
    priceEstimate: '₱1,346,000 SRP',
    lowDownpayment: '₱48,000 All-In DP',
    monthlyPromo: '₱24,800 / mo (60 mos)',
    seats: '7-Seater',
    engine: '1.5L DOHC 16V MIVEC',
    transmission: '4-Speed AT with Active Yaw Control',
    badge: 'Family Favorite',
  },
  {
    id: 'xforce',
    name: 'Mitsubishi Xforce Premium',
    tagline: 'Dynamic 5-seater compact SUV with Yamaha Premium Sound',
    category: 'Compact SUV',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Mitsubishi+Xforce+SUV',
    priceEstimate: '₱1,581,000 SRP',
    lowDownpayment: '₱68,000 All-In DP',
    monthlyPromo: '₱29,350 / mo (60 mos)',
    seats: '5-Seater',
    engine: '1.5L 4-Cylinder MIVEC',
    transmission: 'CVT with Wet/Gravel/Mud Drive Modes',
    badge: 'New Arrival',
  },
  {
    id: 'mirage-g4',
    name: 'Mirage G4 GLS AT',
    tagline: 'The unmatched fuel-efficiency champion for daily commuters and TNVS',
    category: 'Subcompact Sedan',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Mirage+G4+Sedan',
    priceEstimate: '₱899,000 SRP',
    lowDownpayment: '₱28,000 All-In DP',
    monthlyPromo: '₱16,420 / mo (60 mos)',
    seats: '5-Seater',
    engine: '1.2L 12-Valve DOHC MIVEC',
    transmission: 'INVECS-III CVT',
    badge: 'Top Fuel Saver',
  },
  {
    id: 'l300-fb',
    name: 'Mitsubishi L300 FB Body',
    tagline: 'The undisputed backbone of Philippine businesses and logistics',
    category: 'Commercial Vehicle',
    imagePlaceholder: 'https://placehold.co/600x400/18181b/ffffff?text=Mitsubishi+L300+FB+Utility',
    priceEstimate: '₱1,010,000 SRP',
    lowDownpayment: '₱45,000 All-In DP',
    monthlyPromo: '₱18,950 / mo (60 mos)',
    seats: '17-Seater Utility',
    engine: '2.2L Turbocharged Euro 4 Diesel',
    transmission: '5-Speed Manual',
    badge: 'Business Essential',
  },
];

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
            <Link
              href="/salesman/robert-villa"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
            >
              <span>Get Robert Villa&apos;s custom computation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VEHICLE_DATA.map((unit) => (
            <div
              key={unit.id}
              className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Container with distinct placeholder URL */}
              <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                <img
                  src={unit.imagePlaceholder}
                  alt={`${unit.name} Placeholder`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                      <span className="font-bold text-red-600 text-sm">{unit.lowDownpayment}</span>
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
                    <span className="flex items-center gap-1">
                      <Fuel className="w-3.5 h-3.5 text-neutral-400" />
                      {unit.transmission}
                    </span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-5 pt-3">
                  <Link
                    href={`/salesman/robert-villa?model=${unit.id}#inquiry`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-red-600 text-white text-xs font-semibold transition-colors text-center"
                  >
                    <span>Inquire / Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
