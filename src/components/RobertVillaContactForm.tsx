// FILE: src/components/RobertVillaContactForm.tsx
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, MessageSquare, Clock, UserCheck } from 'lucide-react';

interface RobertVillaContactFormProps {
  selectedUnit?: string;
}

export default function RobertVillaContactForm({ selectedUnit }: RobertVillaContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    location: 'Legazpi City',
    preferredModel: selectedUnit || 'Montero Sport Black Series',
    financingType: 'Bank Financing',
    downpaymentPlan: '20% Downpayment',
    needTestDrive: false,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update preferredModel if prop changes
  React.useEffect(() => {
    if (selectedUnit) {
      setFormData((prev) => ({ ...prev, preferredModel: selectedUnit }));
    }
  }, [selectedUnit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief processing for mockup
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      location: 'Legazpi City',
      preferredModel: 'Montero Sport Black Series',
      financingType: 'Bank Financing',
      downpaymentPlan: '20% Downpayment',
      needTestDrive: false,
      message: '',
    });
  };

  return (
    <div id="inquiry" className="rounded-3xl bg-white border border-neutral-200 shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Info Column */}
        <div className="lg:col-span-5 bg-neutral-900 text-white p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30">
              <UserCheck className="w-3.5 h-3.5" />
              Direct to Robert Villa
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Get Your Free Personalized Quotation
            </h3>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Fill out this quick form. Robert Villa will personally prepare an official bank financing worksheet with exact monthly amortizations, insurance coverage, and all current factory discounts.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>Quick Response Time: Within 2 Hours (8 AM - 7 PM)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Obligation & 100% Confidential</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Mobile: +63 917 555 4321</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/70 text-xs">
            <p className="font-semibold text-white mb-1">🏦 Partner Banks in Albay:</p>
            <p className="text-neutral-400">
              BDO Unibank • BPI • Metrobank • Security Bank • RCBC • Maybank • PSBank • Robinsons Bank
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-6 sm:p-10">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900">
                Inquiry Successfully Sent to Robert Villa!
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-neutral-900">{formData.fullName || 'Valued Client'}</strong>! Robert will review your preferred model ({formData.preferredModel}) and reach you at <span className="font-semibold text-neutral-900">{formData.mobile || 'your phone number'}</span> with your itemized quotation breakdown.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Juan dela Cruz"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0917-000-0000"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Town / City in Bicol
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 bg-white"
                  >
                    <option value="Legazpi City">Legazpi City, Albay</option>
                    <option value="Daraga">Daraga, Albay</option>
                    <option value="Tabaco City">Tabaco City, Albay</option>
                    <option value="Ligao City">Ligao City, Albay</option>
                    <option value="Guinobatan">Guinobatan, Albay</option>
                    <option value="Camalig">Camalig, Albay</option>
                    <option value="Polangui">Polangui, Albay</option>
                    <option value="Sorsogon">Sorsogon Province</option>
                    <option value="Camarines Sur">Camarines Sur / Naga</option>
                    <option value="Other / OFW">Other Region / OFW Client</option>
                  </select>
                </div>
              </div>

              {/* Model selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Mitsubishi Vehicle Model
                </label>
                <select
                  value={formData.preferredModel}
                  onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 bg-white font-medium"
                >
                  <option value="Montero Sport Black Series">Montero Sport Black Series (Midsize SUV)</option>
                  <option value="Triton Athlete 4x4">All-New Triton Athlete 4x4 (Pickup Truck)</option>
                  <option value="Xpander Cross">Mitsubishi Xpander Cross (7-Seater MPV)</option>
                  <option value="Mitsubishi Xforce">Mitsubishi Xforce (Compact SUV)</option>
                  <option value="Mirage G4">Mirage G4 GLS (Subcompact Sedan)</option>
                  <option value="Outlander PHEV">Outlander Plug-in Hybrid EV</option>
                  <option value="Mitsubishi L300">Mitsubishi L300 FB Commercial</option>
                </select>
              </div>

              {/* Financing and Downpayment Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Financing Method
                  </label>
                  <select
                    value={formData.financingType}
                    onChange={(e) => setFormData({ ...formData, financingType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 bg-white"
                  >
                    <option value="Bank Financing">Bank Financing (Fast Approval)</option>
                    <option value="In-House Financing">In-House Financing</option>
                    <option value="Cash Purchase">Cash Payment</option>
                    <option value="OFW Assistance">OFW Auto Loan Assistance</option>
                    <option value="Company / Fleet">Company Fleet Purchase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Downpayment Preference
                  </label>
                  <select
                    value={formData.downpaymentPlan}
                    onChange={(e) => setFormData({ ...formData, downpaymentPlan: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 bg-white"
                  >
                    <option value="Lowest All-In Promo DP">Lowest All-In Promo DP (Recommended)</option>
                    <option value="15% Downpayment">15% Downpayment</option>
                    <option value="20% Downpayment">20% Downpayment</option>
                    <option value="30% Downpayment">30% Downpayment</option>
                    <option value="50% Downpayment">50% Downpayment (Lowest Monthly)</option>
                  </select>
                </div>
              </div>

              {/* Checkbox for Test Drive */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-800">
                  <input
                    type="checkbox"
                    checked={formData.needTestDrive}
                    onChange={(e) => setFormData({ ...formData, needTestDrive: e.target.checked })}
                    className="w-4 h-4 text-red-600 rounded border-neutral-300 focus:ring-red-500"
                  />
                  <span>Yes, I want to schedule a test drive at Albay showroom or home demo</span>
                </label>
              </div>

              {/* Additional message / notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell Robert any specific requests, trade-in details, or target release date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending to Robert Villa...' : 'Submit Inquiry & Get Quotation'}</span>
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2">
                  Protected by privacy protocols. No spam, only your direct quote from Robert Villa.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
