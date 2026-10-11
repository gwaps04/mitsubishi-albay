// FILE: src/components/MitsubishiNavbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Car, MapPin, Tag, Calendar } from 'lucide-react';

export default function MitsubishiNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all">
      {/* Top micro-bar for Albay branch contact */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Mitsubishi Motors Albay • Bicol Region Authorized Dealership</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="hidden md:inline">Showroom: Mon - Sat 8:00 AM - 5:30 PM</span>
            <a href="tel:+63527428888" className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-red-500" />
              <span>(052) 742-8888</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Top-Left: Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative flex items-center justify-center w-11 h-11 bg-black rounded-xl p-2 shadow-sm group-hover:bg-neutral-800 transition-colors">
            {/* Mitsubishi Three Diamonds stylized vector */}
            <svg viewBox="0 0 100 100" className="w-7 h-7 fill-red-600 drop-shadow-sm">
              <polygon points="50,5 65,31 50,57 35,31" />
              <polygon points="65,31 95,31 80,57 50,57" />
              <polygon points="35,31 5,31 20,57 50,57" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wider text-neutral-900 leading-tight group-hover:text-red-600 transition-colors">
              MITSUBISHI <span className="text-red-600">MOTORS</span>
            </span>
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Albay Bicol Branch
            </span>
          </div>
        </Link>

        {/* Desktop Clean Navigation Links (Dealership Focused) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <Link href="/" className="hover:text-red-600 transition-colors py-2">
            Home
          </Link>
          <Link href="/#vehicles" className="hover:text-red-600 transition-colors py-2 flex items-center gap-1.5">
            <Car className="w-4 h-4 text-neutral-400" />
            <span>Vehicle Units</span>
          </Link>
          <Link href="/#promos" className="hover:text-red-600 transition-colors py-2 flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-neutral-400" />
            <span>Low DP Promos</span>
          </Link>
          <Link href="/#branch" className="hover:text-red-600 transition-colors py-2 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-neutral-400" />
            <span>Branch & Showroom</span>
          </Link>
        </div>

        {/* Top-Right: Quick CTA Action */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#vehicles"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 active:bg-red-800 transition-all shadow-sm hover:shadow"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Test Drive / Quote</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer (Cleaned of individual salesmen) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-neutral-800 hover:bg-neutral-100 font-medium text-base"
            >
              Home Showroom
            </Link>
            <Link
              href="/#vehicles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-neutral-800 hover:bg-neutral-100 font-medium text-base flex items-center gap-2"
            >
              <Car className="w-5 h-5 text-neutral-500" />
              Available Vehicle Units
            </Link>
            <Link
              href="/#promos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-neutral-800 hover:bg-neutral-100 font-medium text-base flex items-center gap-2"
            >
              <Tag className="w-5 h-5 text-neutral-500" />
              Low DP Promos & Financing
            </Link>
            <Link
              href="/#branch"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-neutral-800 hover:bg-neutral-100 font-medium text-base flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-neutral-500" />
              Branch & Dealership Location
            </Link>

            <div className="pt-3 mt-2 border-t border-neutral-100 flex flex-col gap-2">
              <Link
                href="/#vehicles"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-red-600 text-white font-semibold text-sm shadow-sm"
              >
                Inquire / Book Test Drive
              </Link>
              <a
                href="tel:+63527428888"
                className="w-full text-center py-2.5 rounded-xl border border-neutral-300 text-neutral-700 font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-600" />
                Call Albay Branch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
