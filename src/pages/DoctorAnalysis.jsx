import React from 'react';
import { UserCheck, Bot, Star, Building2, MapPin, ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Asha Rao',
    district: 'Coimbatore',
    rating: 4.6,
    reviews: '1.7k Reviews',
    expertise: 'Reproductive Medicine & PCOS',
    hospital: 'Rao Hospital, R.S. Puram'
  },
  {
    name: 'Dr. Swarnakumari C',
    district: 'Chennai',
    rating: 4.0,
    reviews: '40+ Years Exp',
    expertise: 'Gynaecology & Reproductive Medicine',
    hospital: "Apollo Women's Hospital, Thousand Lights"
  }
];

export default function DoctorAnalysis({ setActiveTab }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-2">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Specialist Referrals</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800">Doctor Analysis & Referrals</h1>
          <p className="text-slate-500 text-sm mt-1">
            Connect with top-rated gynecologists & reproductive endocrinologists based on your AI assessment.
          </p>
        </div>
      </div>

      {/* AI Summary Banner */}
      <div className="glass-card rounded-2xl p-6 border-l-4 border-l-purple-600 border-slate-200/80 bg-white flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-purple-100 text-purple-600 shrink-0">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-base mb-1">AI Consultation Summary</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Based on your logged symptoms and assessment markers, we recommend discussing <strong className="text-purple-700">Insulin Resistance screening</strong> and <strong className="text-purple-700">Hirsutism management options</strong> during your next specialist visit.
          </p>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-800 text-lg">Top-Rated Nearby Specialists</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/80 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold text-xs">
                    <MapPin className="w-3 h-3" />
                    {doc.district}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{doc.rating}</span>
                    <span className="text-slate-400 font-normal">({doc.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-1">{doc.name}</h3>
                <p className="text-xs text-slate-500 mb-3">
                  <strong className="text-slate-700">Expertise:</strong> {doc.expertise}
                </p>
                <p className="text-xs text-slate-600 flex items-center gap-1.5 mb-6">
                  <Building2 className="w-4 h-4 text-purple-600" />
                  <span>{doc.hospital}</span>
                </p>
              </div>

              <button
                onClick={() => setActiveTab('hospital')}
                className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Book Appointment / View Hospitals</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
