// FILE: src/components/HeroZSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Car, Phone, ShieldCheck } from 'lucide-react';
import { HERO_CAROUSEL_SLIDES, HeroSlide } from '@/lib/vehiclesData';

const SLIDE_DURATION = 5000; // 5 seconds per slide auto-transition

function CarouselBackgroundSlide({
  slide,
  isActive,
  isPriority,
}: {
  slide: HeroSlide;
  isActive: boolean;
  isPriority: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(slide.image);

  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <img
        src={imgSrc}
        alt={slide.title}
        loading={isPriority ? 'eager' : 'lazy'}
        onError={() => {
          // If local file fails or is 0-bytes, smoothly fallback to high-res placeholder
          if (imgSrc !== slide.fallbackImage) {
            setImgSrc(slide.fallbackImage);
          }
        }}
        className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
          isActive ? 'scale-105' : 'scale-100'
        }`}
      />
    </div>
  );
}

export default function HeroZSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = HERO_CAROUSEL_SLIDES.length;

  // Unconditional auto-transition timer: advances every 5 seconds
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

  const activeSlideData = HERO_CAROUSEL_SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center overflow-hidden bg-neutral-950 text-white"
      aria-label="Mitsubishi Motors Albay Hero Showcase"
    >
      {/* ============================================================== */}
      {/* 1. AUTO-TRANSITION BACKGROUND CAROUSEL (IMAGES FULLY VISIBLE)  */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_CAROUSEL_SLIDES.map((slide, index) => (
          <CarouselBackgroundSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentSlide}
            isPriority={index === 0}
          />
        ))}

        {/* Soft, Transparent Scrim: Vehicles remain vibrant and clearly visible across the screen */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-950/90 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. FOREGROUND CONTENT: FROSTED GLASS PANEL FOR 100% CONTRAST  */}
      {/* ============================================================== */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        {/* Luxury Glassmorphism Container: Leaves the rest of the car clearly visible */}
        <div className="max-w-2xl bg-black/55 backdrop-blur-md p-6 sm:p-9 lg:p-10 rounded-3xl border border-white/15 shadow-2xl space-y-6">
          {/* Tag & Dealership Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/40 text-red-300 border border-red-500/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              {activeSlideData.tag}
            </span>
            <span className="text-xs text-neutral-300 hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Official Albay Showroom
            </span>
          </div>

          {/* Main Headline */}
          <div key={`headline-${currentSlide}`} className="animate-[fadeIn_500ms_ease-in-out]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {activeSlideData.title}
            </h1>
          </div>

          {/* Subheadline */}
          <div key={`subheadline-${currentSlide}`} className="animate-[fadeIn_600ms_ease-in-out]">
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed font-light">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Value Highlights Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-neutral-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Lowest All-in Downpayment Deals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Fast 24-48 Hr Bank Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Albay 3S Showroom & Service Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Free 1-Yr Insurance & 3-Yr LTO</span>
            </div>
          </div>

          {/* Call-to-Action Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="#vehicles"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 active:bg-red-800 transition-all shadow-lg shadow-red-600/40 group"
            >
              <Car className="w-4 h-4 text-white" />
              <span>Explore 2026 Vehicle Lineup</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+63527428888"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 backdrop-blur-md transition-all"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Call: (052) 742-8888</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. CAROUSEL AUTO-TRANSITION CONTROLS & TIMED PROGRESS PILLS   */}
      {/* ============================================================== */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Slide Indicator Dots (1, 2, 3) with Live 5s Progress Bar */}
        <div className="flex items-center gap-2">
          {HERO_CAROUSEL_SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`relative overflow-hidden transition-all duration-300 rounded-full flex items-center justify-center min-h-[38px] ${
                  isCurrent
                    ? 'bg-neutral-900 border border-red-500 text-white px-4 py-1.5 text-xs font-bold shadow-xl'
                    : 'bg-black/50 hover:bg-black/70 text-neutral-300 border border-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md'
                }`}
                aria-label={`Jump to slide ${idx + 1}: ${slide.highlightUnit}`}
              >
                {/* Visual live progress bar filling across 5000ms */}
                {isCurrent && (
                  <span
                    key={`progress-fill-${currentSlide}`}
                    className="absolute inset-0 bg-red-600/90 -z-10 origin-left animate-[progressFill_5000ms_linear_forwards]"
                  />
                )}
                <span className="relative z-10">0{idx + 1}</span>
                {isCurrent && (
                  <span className="relative z-10 ml-2 hidden sm:inline text-[11px] font-normal text-white">
                    • {slide.highlightUnit}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Carousel Prev / Next Arrow Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
            aria-label="Previous Hero Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-11 h-11 rounded-xl bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
            aria-label="Next Hero Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
