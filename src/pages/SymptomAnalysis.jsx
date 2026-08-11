import React, { useState } from 'react';
import {
  Stethoscope,
  Check,
  AlertCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const questions = [
  {
    id: 1,
    title: '1. How frequent are your periods?',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    options: [
      { label: 'Regular (21-35 days)', score: 0 },
      { label: 'Irregular / Missing', score: 2 }
    ]
  },
  {
    id: 2,
    title: '2. Do you experience persistent adult acne or oily skin?',
    image: '/acene_oil.webp',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 }
    ]
  },
  {
    id: 3,
    title: '3. Have you noticed unusual hair thinning or male-pattern baldness?',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 }
    ]
  },
  {
    id: 4,
    title: '4. Do you have excess hair growth on your face, chest, or back?',
    image: '/hair.webp',
    options: [
      { label: 'Significant', score: 2 },
      { label: 'None / Minimal', score: 0 }
    ]
  },
  {
    id: 5,
    title: '5. Have you experienced rapid weight gain around the abdomen area?',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    options: [
      { label: 'Yes', score: 1 },
      { label: 'No', score: 0 }
    ]
  }
];

export default function SymptomAnalysis({ setActiveTab }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (qId, optionIndex, score) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: { index: optionIndex, score }
    }));
  };

  const handleRunAnalysis = () => {
    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all 5 questions before running analysis.');
      return;
    }

    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);
    const isLikely = totalScore >= 4;

    setResult({
      score: totalScore,
      isLikely,
      title: isLikely ? 'Hormonal Imbalance Likely' : 'Low Probability',
      description: isLikely
        ? 'Based on your symptoms, there are several markers consistent with PCOD/PCOS. We strongly recommend proceeding to the Severity Check for detailed grading.'
        : 'Your current symptoms do not strongly indicate PCOD. However, continue tracking your cycle and consult a healthcare specialist if patterns change.'
    });

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Visual Quiz</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800">Symptom Tracker & Quiz</h1>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          Identify hormonal patterns through visual assessment and AI guided scoring.
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q) => {
          const selected = answers[q.id];
          return (
            <div
              key={q.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm"
            >
              <div className="h-44 w-full bg-slate-100 overflow-hidden relative">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {q.options.map((opt, idx) => {
                    const isSelected = selected && selected.index === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(q.id, idx, opt.score)}
                        className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20 scale-[1.01]'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-purple-50 hover:border-purple-200'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isSelected && <Check className="w-5 h-5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Button */}
      <button
        onClick={handleRunAnalysis}
        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-base shadow-xl shadow-purple-600/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
      >
        <Stethoscope className="w-5 h-5" />
        <span>Run Symptom Analysis</span>
      </button>

      {/* Result Section */}
      {result && (
        <div
          className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
            result.isLikely
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl ${
                result.isLikely ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'
              }`}
            >
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="font-extrabold text-xl">{result.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{result.description}</p>

              {result.isLikely && (
                <div className="pt-3">
                  <button
                    onClick={() => setActiveTab('severity')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-xs hover:bg-rose-700 transition-colors shadow-md shadow-rose-600/20"
                  >
                    <span>Proceed to Severity Check</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
