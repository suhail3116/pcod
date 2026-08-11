import React from 'react';
import { Utensils, Lightbulb, Clock, CheckCircle } from 'lucide-react';

const dietItems = [
  {
    tag: 'Breakfast',
    title: 'Overnight Oats',
    desc: 'Chia seeds and berries with a touch of cinnamon. Low Glycemic Index (GI) to prevent morning sugar spikes.',
    img: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=600',
    time: 'Prep: 5 mins',
    benefits: ['Low GI', 'Rich in Fiber']
  },
  {
    tag: 'Lunch',
    title: 'Quinoa & Chickpeas',
    desc: 'Spinach salad with lemon-tahini dressing. Rich in fiber, iron, and plant-based protein for steady energy.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600',
    time: 'Prep: 15 mins',
    benefits: ['High Protein', 'Insulin Support']
  },
  {
    tag: 'Dinner',
    title: 'Baked Salmon & Broccoli',
    desc: 'Omega-3 fatty acids help reduce chronic inflammation and support menstrual cycle regularity.',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600',
    time: 'Prep: 25 mins',
    benefits: ['Omega-3', 'Anti-Inflammatory']
  },
  {
    tag: 'Healthy Snack',
    title: 'Walnuts & Greek Yogurt',
    desc: 'Probiotics for gut health and healthy monounsaturated fats to keep you satiated between meals.',
    img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80&w=600',
    time: 'Prep: 2 mins',
    benefits: ['Probiotics', 'Healthy Fats']
  }
];

export default function DietPlans() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>Hormone Balancing Diet</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800">Personalized Diet Plan</h1>
          <p className="text-slate-500 text-sm mt-1">
            Nutrition tailored specifically for managing insulin sensitivity and hormonal harmony.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dietItems.map((item, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-200/80 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 w-full bg-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-purple-700 font-bold text-xs px-3 py-1 rounded-full shadow-sm border border-purple-100">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[11px] font-medium"
                    >
                      <CheckCircle className="w-3 h-3 text-purple-600" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Nutrition Tip Card */}
      <div className="glass-card rounded-2xl p-6 border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-purple-600 text-white shadow-md shadow-purple-600/20 shrink-0">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-purple-900 text-base mb-1">AI Nutrition Tip</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Prioritize <strong className="text-purple-800">high-fiber foods</strong> (at least 25g/day) to improve insulin sensitivity. This prevents sugar spikes that trigger excess androgen production in PCOD.
          </p>
        </div>
      </div>
    </div>
  );
}
