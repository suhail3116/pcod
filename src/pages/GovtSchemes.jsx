import React from 'react';
import { Landmark, ExternalLink, ShieldCheck, FileCheck2, HeartHandshake } from 'lucide-react';

const schemes = [
  {
    title: 'Ayushman Bharat (PM-JAY)',
    desc: 'Provides cashless coverage up to ₹5 lakh per family for secondary and tertiary care, including hormonal investigations and specialized gynecological surgeries.',
    link: 'https://beneficiary.nha.gov.in/',
    btnText: 'Check Eligibility / Apply',
    tag: 'National Coverage'
  },
  {
    title: 'Adolescent Friendly Health Clinics (AFHCs)',
    desc: 'Under the Rashtriya Kishor Swasthya Karyakram (RKSK), girls aged 10-19 can access free counseling and treatment for menstrual irregularities and PCOD.',
    link: 'https://nhm.gov.in/showlink.php?id=180',
    btnText: 'View Clinic Locations',
    tag: 'RKSK Initiative'
  },
  {
    title: 'Pradhan Mantri Matru Vandana Yojana',
    desc: 'Offers financial assistance to ensure proper nutrition for women. Critical for PCOD patients as diet directly impacts insulin and hormone levels.',
    link: 'https://pmmvy.wcd.gov.in/',
    btnText: 'Direct Apply Portal',
    tag: 'Nutrition Support'
  },
  {
    title: 'NHM Free Diagnostic Services',
    desc: 'Available at Government Medical Colleges and District Hospitals for specialized PCOD blood tests and pelvic ultrasound scans free of charge.',
    link: 'https://www.nhm.tn.gov.in/',
    btnText: 'NHM Tamil Nadu Portal',
    tag: 'Free Diagnostics'
  }
];

export default function GovtSchemes() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-2">
            <Landmark className="w-3.5 h-3.5" />
            <span>Public Healthcare Benefits</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800">Govt Schemes & Support</h1>
          <p className="text-slate-500 text-sm mt-1">
            National healthcare initiatives covering PCOD/PCOS diagnostics, treatments, and nutritional aid.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schemes.map((s, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl p-6 border-l-4 border-l-purple-600 border-slate-200/80 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold text-[11px] border border-purple-100">
                  {s.tag}
                </span>
                <ShieldCheck className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">{s.desc}</p>
            </div>

            <button
              onClick={() => window.open(s.link, '_blank', 'noopener,noreferrer')}
              className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>{s.btnText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* ABHA ID Wide Card */}
      <div className="glass-card rounded-2xl p-8 border border-purple-200 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-medium border border-white/10">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Digital Health Records</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Create Your ABHA Health ID</h3>
          <p className="text-purple-200 text-xs max-w-xl leading-relaxed">
            Digitally store your PCOD prescriptions, ultrasound reports, and lab results for seamless doctor consultations across India.
          </p>
        </div>

        <button
          onClick={() => window.open('https://abdm.gov.in/', '_blank', 'noopener,noreferrer')}
          className="px-6 py-3.5 rounded-xl bg-white text-purple-900 font-bold text-xs hover:bg-purple-50 transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-black/20"
        >
          <span>Create ABHA ID Now</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
