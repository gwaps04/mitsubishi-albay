// FILE: src/components/RobertVillaBio.tsx
import React from 'react';
import { Award, Star, ShieldCheck, CheckCircle2, Phone, Mail, MessageCircle, MapPin, Sparkles } from 'lucide-react';

export default function RobertVillaBio() {
  return (
    <div className="rounded-3xl bg-neutral-900 border border-neutral-800 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Professional Headshot Placeholder */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-full max-w-sm">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl bg-neutral-800">
              <img
                src="https://placehold.co/600x600/18181b/ffffff?text=Robert+Villa+Professional+Headshot"
                alt="Robert Villa Professional Headshot Placeholder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Badges on Headshot */}
            <div className="absolute -bottom-3 left-4 right-4 bg-black/90 backdrop-blur-md border border-neutral-700 py-2 px-3 rounded-xl flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                <Award className="w-4 h-4" />
                <span>#1 Top Salesman</span>
              </div>
              <span className="text-[11px] font-semibold text-neutral-300">
                Albay Bicol Branch
              </span>
            </div>
          </div>

          {/* Quick Direct Connect Buttons */}
          <div className="w-full max-w-sm mt-8 flex flex-col gap-2">
            <a
              href="tel:+639175554321"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Robert: +63 917 555 4321</span>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/639175554321"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp / Viber</span>
              </a>
              <a
                href="mailto:robert.villa@mitsubishi-albay.ph"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-xs border border-neutral-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Inquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bio & Professional Accolades */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black">
              <Star className="w-3.5 h-3.5 fill-black" />
              Sales Champion of the Year
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-400 border border-red-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Certified Mitsubishi Motors Master Consultant
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Robert Villa
            </h1>
            <p className="text-red-400 text-base font-semibold mt-1">
              Senior Executive Sales Consultant • Mitsubishi Albay Bicol Branch
            </p>
          </div>

          {/* Welcoming Bio */}
          <div className="space-y-3 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            <p>
              &ldquo;Welcome to my personal Mitsubishi showroom! For over 8 years, I have had the privilege of helping hundreds of families, entrepreneurs, OFWs, and corporate partners across Albay and the wider Bicol region drive home their dream vehicles.&rdquo;
            </p>
            <p>
              &ldquo;My philosophy is simple: <strong className="font-semibold text-white">complete transparency, honest computations, and zero hidden charges</strong>. Whether you need an agile Mirage G4, an adventure-ready Xpander Cross, or a rugged 4x4 Triton or Montero Sport, I personally manage your bank applications to secure the highest approval odds and lowest monthly rates possible.&rdquo;
            </p>
          </div>

          {/* Key Accolades & Value Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">350+ Units Released</p>
                <p className="text-xs text-neutral-400">Serving Legazpi, Daraga, Tabaco, and entire Bicol Region.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Fast 24-Hour Approval</p>
                <p className="text-xs text-neutral-400">Direct partnerships with BDO, BPI, Metrobank, RCBC, and PSBank.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Free Door-to-Door Delivery</p>
                <p className="text-xs text-neutral-400">Free vehicle unit turnover anywhere within Albay province.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Hassle-Free Trade-In</p>
                <p className="text-xs text-neutral-400">Highest market appraisal for your existing vehicle trade-in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
