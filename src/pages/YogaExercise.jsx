import React from 'react';
import { Flower2, Flame, Heart, Activity } from 'lucide-react';

const yogaPoses = [
  {
    title: 'Butterfly Pose (Baddha Konasana)',
    tag: 'Pelvic Health',
    desc: 'Stimulates the abdominal organs and helps in opening up the pelvic region to reduce tension and improve blood flow.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600',
    duration: '5 mins'
  },
  {
    title: 'Cobra Pose (Bhujangasana)',
    tag: 'Abdominal Tone',
    desc: 'Tones the abdomen, improves digestion, and expands the chest to encourage deeper diaphragmatic breathing.',
    img: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600',
    duration: '3 mins'
  },
  {
    title: "Child's Pose (Balasana)",
    tag: 'Stress Relief',
    desc: 'A restorative pose that calms the central nervous system, reduces cortisol levels, and relieves lumbar pressure.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600',
    duration: '5 mins'
  },
  {
    title: 'Garland Pose (Malasana)',
    tag: 'Hormonal Balance',
    desc: 'Increases blood circulation to the pelvic area, tones hips, and improves overall pelvic metabolism for weight management.',
    img: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600',
    duration: '4 mins'
  }
];

export default function YogaExercise() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-2">
            <Flower2 className="w-3.5 h-3.5" />
            <span>Mindful Movement</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800">Yoga & Movement</h1>
          <p className="text-slate-500 text-sm mt-1">
            Reduce stress, regulate cortisol, and enhance pelvic circulation with targeted poses.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {yogaPoses.map((pose, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-200/80 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full bg-slate-100">
                <img
                  src={pose.img}
                  alt={pose.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-purple-600/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  {pose.tag}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white font-medium text-xs px-2.5 py-1 rounded-lg">
                  {pose.duration}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-800 text-lg mb-2">{pose.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{pose.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Movement Goal Card */}
      <div className="glass-card rounded-2xl p-6 border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20 shrink-0">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-indigo-950 text-base mb-1">Daily Movement Goal</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Aim for <strong className="text-indigo-800">30 minutes of brisk walking</strong> or <strong className="text-indigo-800">20 minutes of restorative yoga</strong> daily. Regular low-impact movement significantly improves insulin sensitivity and regularizes cycle rhythm.
          </p>
        </div>
      </div>
    </div>
  );
}
