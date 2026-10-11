// FILE: src/components/DealershipTrustBar.tsx
import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Wrench } from 'lucide-react';

export default function DealershipTrustBar() {
  return (
    <div className="bg-neutral-900 border-y border-neutral-800 text-white py-4 px-4 sm:px-6 shadow-md relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-red-600/20 text-red-500 shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-neutral-100">Lowest All-In DP</p>
            <p className="text-[11px] text-neutral-400">Exclusive factory discounts</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-red-600/20 text-red-500 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-neutral-100">24-48 Hr Fast Approval</p>
            <p className="text-[11px] text-neutral-400">All major Bicol banks</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-red-600/20 text-red-500 shrink-0">
            <Wrench className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-neutral-100">Official 3S Dealership</p>
            <p className="text-[11px] text-neutral-400">Sales, Genuine Parts & Service</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-red-600/20 text-red-500 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-neutral-100">Official Warranty</p>
            <p className="text-[11px] text-neutral-400">Free 1-Yr Ins. & 3-Yr LTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
