// FILE: src/components/MitsubishiFooter.tsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award } from 'lucide-react';

export default function MitsubishiFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-xl p-2">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-red-600">
                  <polygon points="50,5 65,31 50,57 35,31" />
                  <polygon points="65,31 95,31 80,57 50,57" />
                  <polygon points="35,31 5,31 20,57 50,57" />
                </svg>
              </div>
              <div>
                <span className="text-base font-extrabold tracking-wider text-white block">
                  MITSUBISHI <span className="text-red-500">MOTORS</span>
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-widest block">
                  Albay Bicol Branch
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Your trusted authorized dealership in Albay, Bicol. Offering genuine Mitsubishi passenger vehicles, commercial trucks, fast bank approvals, and authentic service.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Official Mitsubishi Motors Philippines Partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home Showroom
                </Link>
              </li>
              <li>
                <Link href="/#vehicles" className="hover:text-red-400 transition-colors">
                  Explore Models & Specs
                </Link>
              </li>
              <li>
                <Link href="/#promos" className="hover:text-red-400 transition-colors">
                  Low Downpayment Promos
                </Link>
              </li>
              <li>
                <Link href="/#branch" className="hover:text-red-400 transition-colors">
                  Branch Location & Facilities
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/robert-villa" className="text-neutral-300 hover:text-red-400 transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Robert Villa Personal Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Dealership Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Showroom Hours
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-200">Monday - Saturday</p>
                  <p>8:00 AM - 5:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-200">Sunday & Holidays</p>
                  <p>9:00 AM - 4:00 PM (On-Call & Inquiries)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Albay Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Albay Branch Location
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Maharlika Highway, Daraga / Legazpi City, Albay, Bicol Region 4501</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>(052) 742-8888 / +63 917 555 4321</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>sales.albay@mitsubishi-dealers.ph</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Mitsubishi Motors Albay Bicol Branch. All rights reserved.</p>
          <p className="text-neutral-400">
            Dedicated portal for Mitsubishi Philippines clients across Albay, Legazpi, Daraga, Tabaco, and Bicolandia.
          </p>
        </div>
      </div>
    </footer>
  );
}
