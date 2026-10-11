// FILE: src/components/RobertVillaTestimonials.tsx
import React from 'react';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  unit: string;
  comment: string;
  turnaround: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Atty. Victor & Dr. Melissa Ramos',
    location: 'Legazpi City, Albay',
    unit: 'Montero Sport Black Series',
    comment:
      'Sir Robert made our SUV purchase completely stress-free! Approved with BDO in less than 24 hours without endless back-and-forth bank visits. Delivered right to our garage with full orientation.',
    turnaround: 'Approved in 18 Hours',
  },
  {
    id: '2',
    clientName: 'Engr. Carlos Mendoza (Contractor)',
    location: 'Daraga, Albay',
    unit: 'All-New Triton Athlete 4x4',
    comment:
      'We needed a tough 4x4 for construction sites in Guinobatan and Ligao. Robert secured the lowest all-in downpayment rate with free bedliner and insurance. Hands down the most reliable agent in Albay.',
    turnaround: 'Released Same Week',
  },
  {
    id: '3',
    clientName: 'Mary Ann & Gerald Tan (OFW Family)',
    location: 'Tabaco City, Albay',
    unit: 'Mitsubishi Xpander Cross',
    comment:
      'My husband is working in Dubai and Robert assisted us throughout the OFW auto-loan process patiently. Sobrang bait at walang hidden charges. Excited na ang buong pamilya!',
    turnaround: 'OFW Loan Specialist',
  },
];

export default function RobertVillaTestimonials() {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 mb-2">
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>Client Feedback & Testimonials</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
          What Bicolano Clients Say About Robert Villa
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1">
          Genuine satisfaction from vehicle owners across Albay, Sorsogon, and Camarines Sur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {t.turnaround}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                &ldquo;{t.comment}&rdquo;
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-neutral-900">{t.clientName}</p>
                <p className="text-[11px] text-neutral-500">{t.location}</p>
              </div>
              <span className="text-[11px] font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                {t.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
