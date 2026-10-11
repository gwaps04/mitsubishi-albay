// FILE: src/components/RobertVillaBio.tsx
'use client';

import React, { useState } from 'react';
import { Award, Star, ShieldCheck, CheckCircle2, Phone, Mail, MessageCircle, Share2, Check, Sparkles } from 'lucide-react';

export default function RobertVillaBio() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const shareUrl = `${window.location.origin}/robert-villa`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className="rounded-3xl bg-neutral-900 border border-neutral-800 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Client Share Bar */}
      <div className="mb-8 p-3.5 rounded-2xl bg-black/60 border border-neutral-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-neutral-300">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Official Direct Client Portal</strong> • Send this link to family or clients for verified pricing
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopyLink}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-600 transition-colors font-medium active:scale-95"
        >
          {copied ? (
            <React.Fragment>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Link Copied! Send via Chat</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Share2 className="w-3.5 h-3.5 text-neutral-300" />
              <span>Share Robert&apos;s Link</span>
            </React.Fragment>
          )}
        </button>
      </div>

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
                <span>#1 Top Sales Consultant</span>
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
              Dealership Sales Champion 2025 - 2026
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
              Top 1 Senior Sales Consultant • Mitsubishi Motors Albay Bicol Branch
            </p>
          </div>

          {/* Welcoming Bio */}
          <div className="space-y-3 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            <p>
              &ldquo;Diyos marhay na aldaw mga ka-Bicolano! Welcome to my personal Mitsubishi showroom. Over the past 8 years, I have helped more than 350+ Bicolano families, OFWs, and local entrepreneurs drive home their brand-new Mitsubishi vehicles.&rdquo;
            </p>
            <p>
              &ldquo;My promise to every client is absolute: <strong className="font-semibold text-white">100% transparent computations, honest promos with zero hidden charges, and VIP handling of your bank approval</strong>. Whether you need a Montero Sport, Triton 4x4, Xpander Cross, or Mirage G4, you can message me directly for instant quotes and loan assistance.&rdquo;
            </p>
          </div>

          {/* Key Accolades & Value Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">350+ Units Released</p>
                <p className="text-xs text-neutral-400">Trusted across Legazpi, Daraga, Tabaco, and Bicol region.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Fast 24-48 Hour Approvals</p>
                <p className="text-xs text-neutral-400">Direct connections with BDO, BPI, Metrobank, RCBC, and PSBank.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Door-to-Door Delivery</p>
                <p className="text-xs text-neutral-400">Free vehicle turnover ceremony at your residence in Albay.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Trade-In Appraisal</p>
                <p className="text-xs text-neutral-400">High trade-in trade-value credit towards your new Mitsubishi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
