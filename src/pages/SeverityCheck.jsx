import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 'q1',
    title: '1. How often do you experience your menstrual cycles?',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    options: [
      { label: 'Regular (21-35 days)', score: 0 },
      { label: 'Slightly Irregular', score: 1 },
      { label: 'Highly Irregular (>45 days)', score: 3 }
    ]
  },
  {
    id: 'q2',
    title: '2. Have you noticed significant hair growth on face/body or thinning on scalp?',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    options: [
      { label: 'None', score: 0 },
      { label: 'Moderate', score: 1 },
      { label: 'Severe', score: 3 }
    ]
  },
  {
    id: 'q3',
    title: '3. Have you experienced sudden weight gain or difficulty losing weight?',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    options: [
      { label: 'Significant Change', score: 2 },
      { label: 'No Change', score: 0 }
    ]
  }
];

export default function SeverityCheck({ setActiveTab }) {
  const [scores, setScores] = useState({ q1: 0, q2: 0, q3: 0 });
  const [result, setResult] = useState(null);

  const handleSelect = (qId, score) => {
    setScores((prev) => ({ ...prev, [qId]: score }));
  };

  const handleCalculate = () => {
    const total = scores.q1 + scores.q2 + scores.q3;
    let level = 'mild';
    let title = 'Mild / Early Stage';
    let desc = 'Symptoms are currently manageable with targeted lifestyle modifications and diet. Regular monitoring is recommended.';

    if (total >= 6) {
      level = 'high';
      title = 'High Severity Detected';
      desc = 'Significant clinical markers of hormonal imbalance. Immediate consultation with a specialized gynecologist or endocrinologist is strongly recommended.';
    } else if (total >= 3) {
      level = 'moderate';
      title = 'Moderate Severity';
      desc = 'Noticeable PCOD markers present. Active lifestyle modifications and medical review are advised to prevent progression.';
    }

    setResult({ total, level, title, desc });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Clinical Assessment</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">Severity Analysis</h1>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          Advanced clinical assessment for hormonal health grading and specialist recommendations.
        </p>
      </div>

      {/* Quiz Cards */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm"
          >
            <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
              <img
                src={q.image}
                alt={q.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <h3 className="absolute bottom-4 left-6 right-6 font-bold text-white text-lg">
                {q.title}
              </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {q.options.map((opt, idx) => {
                  const isSelected = scores[q.id] === opt.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(q.id, opt.score)}
                      className={`px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 scale-[1.02]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-purple-50 hover:border-purple-200'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Run Analysis Button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-purple-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-purple-600/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
      >
        <AlertTriangle className="w-5 h-5" />
        <span>Analyze My Results</span>
      </button>

      {/* Result Display */}
      {result && (
        <div
          className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
            result.level === 'high'
              ? 'bg-rose-50 border-rose-300 text-rose-950'
              : result.level === 'moderate'
              ? 'bg-amber-50 border-amber-300 text-amber-950'
              : 'bg-emerald-50 border-emerald-300 text-emerald-950'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl ${
                result.level === 'high'
                  ? 'bg-rose-100 text-rose-600'
                  : result.level === 'moderate'
                  ? 'bg-amber-100 text-amber-600'
                  : 'bg-emerald-100 text-emerald-600'
              }`}
            >
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-extrabold text-xl">{result.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{result.desc}</p>
              <div className="pt-3">
                <button
                  onClick={() => setActiveTab('doctor')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-colors shadow-md shadow-purple-600/20"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Consult Specialist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
