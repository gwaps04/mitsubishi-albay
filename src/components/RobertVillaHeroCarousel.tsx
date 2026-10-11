// FILE: src/components/RobertVillaHeroCarousel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Award,
  Star,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  Sparkles,
} from 'lucide-react';

interface RobertSlide {
  id: string;
  image: string;
  fallbackImage: string;
  caption: string;
}

const ROBERT_HERO_SLIDES: RobertSlide[] = [
  {
    id: 'robert-1',
    image: '/robert-hero1.jpg',
    fallbackImage: 'https://placehold.co/800x1000/18181b/ffffff?text=Robert+Villa+Slide+1',
    caption: 'Official Vehicle Handover & Client Orientation',
  },
  {
    id: 'robert-2',
    image: '/robert-hero2.jpg',
    fallbackImage: 'https://placehold.co/800x1000/18181b/ffffff?text=Robert+Villa+Slide+2',
    caption: 'Dealership Champion 2025-2026 • Albay Branch',
  },
  {
    id: 'robert-3',
    image: '/robert-hero3.jpg',
    fallbackImage: 'https://placehold.co/800x1000/18181b/ffffff?text=Robert+Villa+Slide+3',
    caption: 'Top Sales Consultant • Serving Entire Bicolandia',
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide auto-sliding

export default function RobertVillaHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const slideCount = ROBERT_HERO_SLIDES.length;

  // Unconditional auto-sliding timer every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [slideCount]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

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
    <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border border-neutral-800 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Client Share & Verification Bar */}
      <div className="mb-8 p-3.5 rounded-2xl bg-black/60 border border-neutral-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10">
        <div className="flex items-center gap-2 text-neutral-300">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Official Direct Client Portal</strong> • Verified #1 Sales Consultant for Mitsubishi Motors Albay
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

      {/* Main Grid: Left Content + Right Auto-Sliding Carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Headlines, Credentials & Actions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Official Accolade Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black shadow-sm">
              <Star className="w-3.5 h-3.5 fill-black" />
              Branch Champion 2025 - 2026
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-400 border border-red-500/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              Certified Mitsubishi Motors Master Consultant
            </span>
          </div>

          {/* Requested Headline */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Driving Excellence and Integrity at Mitsubishi Albay
            </h1>
            <p className="text-red-400 text-sm font-semibold tracking-wide mt-2">
              Robert Villa • Top 1 Senior Sales Consultant • Albay Bicol Branch
            </p>
          </div>

          {/* Requested Sub-headline */}
          <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            As the region&apos;s top-ranking automotive professional, Robert Villa delivers more than just car keys—he delivers peace of mind. Experience expert guidance, honest advice, and world-class service from your first inquiry to the final turnover.
          </p>

          {/* Value Highlights Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">350+ Units Released</p>
                <p className="text-xs text-neutral-400">Serving Legazpi, Daraga, Tabaco, and Bicolandia.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Fast 24-48 Hr Approvals</p>
                <p className="text-xs text-neutral-400">Direct partners with BDO, BPI, Metrobank, Security Bank.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">100% Honest Computations</p>
                <p className="text-xs text-neutral-400">Zero hidden fees, transparent monthly terms.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Door-to-Door Delivery</p>
                <p className="text-xs text-neutral-400">Free vehicle handover anywhere in Albay province.</p>
              </div>
            </div>
          </div>

          {/* Action CTAs & Direct Contact Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm transition-all shadow-lg shadow-red-600/30 group"
            >
              <Send className="w-4 h-4" />
              <span>Request Personal Quote Online</span>
            </a>

            <a
              href="tel:+639175554321"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm border border-neutral-700 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Call Robert: 0917 555 4321</span>
            </a>

            <a
              href="https://wa.me/639175554321"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp / Viber</span>
            </a>
          </div>
        </div>

        {/* Right Column: AUTO-SLIDING CAROUSEL OF ROBERT-HERO IMAGES */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm sm:max-w-md group">
            {/* Aspect Ratio Guard: aspect-[3/4] perfectly fits Robert's portrait photography without cropping! */}
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border-4 border-red-600 shadow-2xl bg-neutral-900">
              {ROBERT_HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        // Fallback if local file not yet loaded
                        const target = e.currentTarget;
                        if (target.src !== slide.fallbackImage) {
                          target.src = slide.fallbackImage;
                        }
                      }}
                      className={`w-full h-full object-cover object-top transform transition-transform duration-[6000ms] ease-out ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                    />
                    {/* Bottom gradient on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}

              {/* Floating Champion Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/85 backdrop-blur-md border border-neutral-700 py-2.5 px-3.5 rounded-xl flex items-center justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>#1 Top Sales Consultant</span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-0.5">
                    {ROBERT_HERO_SLIDES[currentSlide].caption}
                  </p>
                </div>
                <span className="text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-md">
                  Albay Branch
                </span>
              </div>
            </div>

            {/* Slide Navigation & Countdown Indicators */}
            <div className="mt-4 flex items-center justify-between w-full px-2">
              {/* Slide Indicator Pills with Live 5s Progress Fill */}
              <div className="flex items-center gap-2">
                {ROBERT_HERO_SLIDES.map((slide, idx) => {
                  const isCurrent = idx === currentSlide;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative overflow-hidden transition-all duration-300 rounded-full flex items-center justify-center h-8 ${
                        isCurrent
                          ? 'bg-neutral-800 border border-red-500 text-white px-3.5 text-xs font-bold shadow-md'
                          : 'bg-neutral-800/60 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 px-2.5 text-xs font-medium'
                      }`}
                      aria-label={`Jump to slide ${idx + 1}`}
                    >
                      {isCurrent && (
                        <span
                          key={`progress-${currentSlide}`}
                          className="absolute inset-0 bg-red-600/90 -z-10 origin-left animate-[progressFill_5000ms_linear_forwards]"
                        />
                      )}
                      <span className="relative z-10">0{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 flex items-center justify-center transition-all active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 flex items-center justify-center transition-all active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
