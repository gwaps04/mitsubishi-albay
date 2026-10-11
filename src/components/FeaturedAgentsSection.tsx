// FILE: src/components/FeaturedAgentsSection.tsx
import React from 'react';
import Link from 'next/link';
import { Award, ArrowRight, Star, Phone, MessageSquare, CheckCircle, Shield } from 'lucide-react';

export default function FeaturedAgentsSection() {
  return (
    <section id="agents" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 mb-3">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>Albay Bicol Branch Sales Consultants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Meet Our Top Certified Sales Executives
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Our accredited specialists are dedicated to providing clear quotations, swift bank financing approval, and courteous guidance across Albay and the Bicol region.
          </p>
        </div>

        {/* Highlighted Top 1 Agent: Robert Villa Special Hero Card */}
        <div className="mb-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-black p-6 sm:p-8 lg:p-10 text-white shadow-xl border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Robert's Headshot Placeholder */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl bg-neutral-800">
                  <img
                    src="https://placehold.co/500x500/18181b/ffffff?text=Robert+Villa+Top+1+Salesman"
                    alt="Robert Villa Headshot Placeholder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Champion Trophy Tag */}
                <div className="absolute -bottom-3 -right-3 bg-red-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>#1 Top Salesman</span>
                </div>
              </div>
            </div>

            {/* Robert's Profile & Accomplishments */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  Branch Champion 2025 - 2026
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                  8+ Years Experience
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700">
                  350+ Units Released
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Robert Villa
                </h3>
                <p className="text-red-400 text-sm font-semibold tracking-wide mt-0.5">
                  Top 1 Senior Sales Consultant • Mitsubishi Motors Albay
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                &ldquo;Kumusta mga ka-Bicolano! My commitment is to give you honest financing calculations, zero hidden fees, and hassle-free bank approvals within 24 to 48 hours. Let&apos;s get you behind the wheel of your dream Mitsubishi today.&rdquo;
              </p>

              {/* Value metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                  <p className="text-xs text-neutral-400">Bank Partners</p>
                  <p className="text-sm font-bold text-white">BDO, BPI, Metrobank + 6</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                  <p className="text-xs text-neutral-400">Approval Speed</p>
                  <p className="text-sm font-bold text-white">24 - 48 Hours</p>
                </div>
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60 col-span-2 sm:col-span-1">
                  <p className="text-xs text-neutral-400">Rating</p>
                  <p className="text-sm font-bold text-amber-400">4.98 / 5.0 (Client Fav)</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/salesman/robert-villa"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-md group"
                >
                  <span>View Dedicated Salesman Page</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/salesman/robert-villa#inquiry"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm border border-neutral-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-red-400" />
                  <span>Request Quote Directly</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Branch Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Agent 2 */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-200 mx-auto mb-4 border-2 border-neutral-300">
                <img
                  src="https://placehold.co/300x300/1e293b/ffffff?text=Agent+Maria+Santos"
                  alt="Maria Santos Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 text-center">Maria Santos</h4>
              <p className="text-xs font-semibold text-red-600 text-center mb-3">
                Fleet & Commercial Truck Specialist
              </p>
              <p className="text-xs text-neutral-600 text-center leading-relaxed">
                Specializes in L300 and Canter commercial vehicle programs for MSMEs and corporate delivery fleets across Albay.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-200 flex justify-between items-center text-xs">
              <span className="text-neutral-500">5 Years Experience</span>
              <span className="font-semibold text-neutral-800">Albay Branch</span>
            </div>
          </div>

          {/* Agent 3 */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-200 mx-auto mb-4 border-2 border-neutral-300">
                <img
                  src="https://placehold.co/300x300/1e293b/ffffff?text=Agent+Carlos+Reyes"
                  alt="Carlos Reyes Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 text-center">Carlos Reyes</h4>
              <p className="text-xs font-semibold text-red-600 text-center mb-3">
                Financing & Fast Approval Officer
              </p>
              <p className="text-xs text-neutral-600 text-center leading-relaxed">
                Expert in OFWs, business owners, and first-time car buyers needing custom bank financing options and documentation help.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-200 flex justify-between items-center text-xs">
              <span className="text-neutral-500">6 Years Experience</span>
              <span className="font-semibold text-neutral-800">Albay Branch</span>
            </div>
          </div>

          {/* Agent 4 */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-200 mx-auto mb-4 border-2 border-neutral-300">
                <img
                  src="https://placehold.co/300x300/1e293b/ffffff?text=Agent+Elena+Bautista"
                  alt="Elena Bautista Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 text-center">Elena Bautista</h4>
              <p className="text-xs font-semibold text-red-600 text-center mb-3">
                Customer Relations & Test Drive Consultant
              </p>
              <p className="text-xs text-neutral-600 text-center leading-relaxed">
                Dedicated to arranging at-home test drives throughout Legazpi, Daraga, and Tabaco with complete model walkthroughs.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-200 flex justify-between items-center text-xs">
              <span className="text-neutral-500">4 Years Experience</span>
              <span className="font-semibold text-neutral-800">Albay Branch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
