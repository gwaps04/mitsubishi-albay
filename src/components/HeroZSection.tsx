// FILE: src/components/HeroZSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Car, Phone, ShieldCheck } from 'lucide-react';
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
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-end pb-20 sm:pb-24 lg:pb-24 overflow-hidden bg-neutral-950 text-white"
      aria-label="Mitsubishi Motors Albay Hero Showcase"
    >
      {/* ============================================================== */}
      {/* 1. AUTO-TRANSITION BACKGROUND CAROUSEL (UNTOUCHED)             */}
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

        {/* Minimal Non-Intrusive Gradient: Light vignette so the car is 100% visible and unblocked */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. AIRY CINEMATIC FLOATING TEXT (NO BULKY CARD BLOCKING CARS)   */}
      {/* ============================================================== */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl space-y-4">
          {/* Tag & Dealership Badge with Soft Backdrop Pill */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-red-400 border border-white/20 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              {activeSlideData.tag}
            </span>
            <span className="text-xs text-neutral-200 hidden sm:inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Official Albay Showroom
            </span>
          </div>

          {/* Headline with High-Contrast Text Shadow (Never blocks the vehicle) */}
          <div key={`headline-${currentSlide}`} className="animate-[fadeIn_500ms_ease-in-out]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              {activeSlideData.title}
            </h1>
          </div>

          {/* Subheadline with Light Text Shadow */}
          <div key={`subheadline-${currentSlide}`} className="animate-[fadeIn_600ms_ease-in-out]">
            <p className="text-sm sm:text-base text-neutral-100 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-xl">
              {activeSlideData.subtitle}
            </p>
          </div>

          {/* Sleek, Compact Floating Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="#vehicles"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xl shadow-black/50 group"
            >
              <Car className="w-4 h-4 text-white" />
              <span>Explore 2026 Lineup</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+63527428888"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black/60 hover:bg-black/80 text-white font-medium text-xs sm:text-sm border border-white/30 backdrop-blur-md shadow-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Call Showroom: (052) 742-8888</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. MINIMALIST SLIDE INDICATORS (PINNED TO BOTTOM RIGHT)        */}
      {/* ============================================================== */}
      <div className="absolute bottom-5 right-4 sm:right-6 z-30 flex items-center gap-2">
        {/* Slide Indicator Dots (1, 2, 3) */}
        <div className="flex items-center gap-1.5">
          {HERO_CAROUSEL_SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`relative overflow-hidden transition-all duration-300 rounded-full flex items-center justify-center h-8 ${
                  isCurrent
                    ? 'bg-neutral-900 border border-red-500 text-white px-3 text-[11px] font-bold shadow-lg'
                    : 'bg-black/60 hover:bg-black/80 text-neutral-300 border border-white/20 px-2.5 text-[11px] font-medium backdrop-blur-md'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              >
                {isCurrent && (
                  <span
                    key={`progress-fill-${currentSlide}`}
                    className="absolute inset-0 bg-red-600/90 -z-10 origin-left animate-[progressFill_5000ms_linear_forwards]"
                  />
                )}
                <span className="relative z-10">0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Prev / Next Arrow Controls */}
        <div className="flex items-center gap-1.5 ml-1">
          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 rounded-lg bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
            aria-label="Previous Hero Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-8 rounded-lg bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all active:scale-95"
            aria-label="Next Hero Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
