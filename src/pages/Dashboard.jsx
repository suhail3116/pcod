import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  CalendarCheck,
  Scale,
  Droplets,
  Microscope,
  Lightbulb,
  Plus,
  Utensils,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Dashboard({ setActiveTab }) {
  const [water, setWater] = useState(0);
  const goalWater = 2.5;

  const handleAddWater = () => {
    if (water < goalWater) {
      const nextVal = Math.min(goalWater, Number((water + 0.2).toFixed(1)));
      setWater(nextVal);
      if (nextVal === goalWater) {
        alert("Great job! You've reached your daily hydration goal of 2.5L 🎉");
      }
    } else {
      alert("Goal reached! Stay hydrated and listen to your body 💧");
    }
  };

  const waterPercentage = Math.round((water / goalWater) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 rounded-3xl p-8 text-white shadow-xl shadow-purple-900/10">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-purple-100 mb-3 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Personalized PCOS Care Portal</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, Health Seeker</h1>
            <p className="mt-2 text-purple-100/90 text-sm max-w-xl italic font-light">
              "Self-care is how you take your power back." — Lalah Delia
            </p>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Engine: Active & Personalized</span>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Why Track Symptoms Card */}
        <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/80 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-purple-700 font-bold text-lg mb-2">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
                <Heart className="w-5 h-5 fill-purple-600/20" />
              </div>
              <h3>Why Track Symptoms?</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Monitoring changes in your skin, hair growth, and energy levels helps our AI provide 80-90% more accurate health predictions.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-100 max-h-48">
            <img
              src="/ai-predictive.jpg"
              alt="Medical Analysis"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Nutritional Focus Card */}
        <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200/80 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-purple-700 font-bold text-lg mb-2">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
                <Utensils className="w-5 h-5" />
              </div>
              <h3>Nutritional Focus</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Current research suggests that a low-glycemic diet is key to managing insulin resistance in PCOD patients.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-100 max-h-48">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800"
              alt="Healthy Plate"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cycle Tracker */}
        <div className="glass-card rounded-2xl p-6 border border-purple-100 bg-gradient-to-b from-white to-purple-50/30 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5 text-purple-800 font-semibold text-base">
              <CalendarCheck className="w-5 h-5 text-purple-600" />
              <span>Cycle Tracker</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-xs">
              Day 14
            </span>
          </div>
          <p className="text-slate-600 text-sm">
            Your next cycle is predicted in <strong className="text-purple-700 font-bold">12 days</strong>.
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Progress</span>
              <span>60%</span>
            </div>
            <div className="w-full h-2.5 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full w-[60%]" />
            </div>
          </div>
        </div>

        {/* BMI & Weight */}
        <div className="glass-card rounded-2xl p-6 border border-slate-200/80 bg-white flex flex-col justify-between">
          <div className="flex items-center gap-2.5 text-purple-800 font-semibold text-base mb-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            <span>BMI & Weight</span>
          </div>
          <div className="my-2">
            <span className="text-2xl font-extrabold text-slate-800">24.2</span>
            <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700">
              Healthy
            </span>
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Weight is stable this month
          </p>
        </div>

        {/* Hydration Card */}
        <div className="glass-card rounded-2xl p-6 border border-blue-100 bg-gradient-to-b from-white to-blue-50/30 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5 text-blue-900 font-semibold text-base">
              <Droplets className="w-5 h-5 text-blue-500" />
              <span>Hydration</span>
            </div>
            <span className="text-xs font-semibold text-blue-700">
              {water}L / {goalWater}L
            </span>
          </div>
          <div className="my-2">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Logged</span>
              <span>{waterPercentage}%</span>
            </div>
            <div className="w-full h-2.5 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${waterPercentage}%` }}
              />
            </div>
          </div>
          <button
            onClick={handleAddWater}
            className="mt-2 w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> Add Glass (+0.2L)
          </button>
        </div>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Research Highlights */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-slate-200/80 bg-white">
          <div className="flex items-center gap-3 text-purple-800 font-bold text-lg mb-4">
            <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
              <Microscope className="w-5 h-5" />
            </div>
            <h3>Latest Research Highlights (March 2026)</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">AI Diagnostics</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                New NIH studies confirm AI/ML models can now diagnose PCOS with 80-90% accuracy using ultrasound and lab data.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">Metabolic Update</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Research highlights the success of low-glycemic index diets and GLP-1 agonists in managing insulin resistance.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">Microbiome Discovery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical trials show Metformin treatment significantly improves gut bacteria diversity, aiding cycle regularity.
              </p>
            </div>
          </div>
        </div>

        {/* AI Suggestion */}
        <div className="glass-card rounded-2xl p-6 border border-purple-200 bg-gradient-to-b from-purple-50/80 to-indigo-50/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-purple-800 font-bold text-lg mb-3">
              <Lightbulb className="w-5 h-5 text-amber-500 fill-amber-400/30" />
              <h3>AI Suggestion</h3>
            </div>
            <p className="text-sm text-purple-950 leading-relaxed">
              Based on your recent logs, adding 15 minutes of <strong className="text-purple-700">Kapalbhati Yoga</strong> today could help manage stress levels and cortisol balance.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('yoga')}
            className="mt-6 w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-purple-500/20"
          >
            <span>Explore Yoga Routines</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          onClick={() => setActiveTab('symptom')}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm flex items-center gap-2 hover:opacity-95 shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02]"
        >
          <Plus className="w-4 h-4" /> Log Symptoms
        </button>
        <button
          onClick={handleAddWater}
          className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-[1.02]"
        >
          <Droplets className="w-4 h-4 text-blue-500" /> Add Water
        </button>
        <button
          onClick={() => setActiveTab('diet')}
          className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all hover:scale-[1.02]"
        >
          <Utensils className="w-4 h-4 text-emerald-500" /> View Today's Diet
        </button>
      </div>
    </div>
  );
}
