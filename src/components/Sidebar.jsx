import React from 'react';
import {
  LayoutDashboard,
  Stethoscope,
  Utensils,
  Flower2,
  AlertTriangle,
  UserCheck,
  Building2,
  Landmark,
  HeartHandshake,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'symptom', label: 'Symptom Analysis', icon: Stethoscope },
  { id: 'diet', label: 'Diet Plans', icon: Utensils },
  { id: 'yoga', label: 'Yoga & Exercise', icon: Flower2 },
  { id: 'severity', label: 'Severity Check', icon: AlertTriangle },
  { id: 'doctor', label: 'Doctor Analysis', icon: UserCheck },
  { id: 'hospital', label: 'Find Hospital', icon: Building2 },
  { id: 'govt', label: 'Govt Schemes', icon: Landmark },
];

export default function Sidebar({ activeTab, setActiveTab, mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-gradient-to-b from-purple-50 via-purple-50/50 to-white border-r border-purple-100/80 p-5 z-50 transition-transform duration-300 flex flex-col justify-between shadow-xl shadow-purple-500/5 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Logo */}
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20 text-white">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                  PCOD Care AI
                </h1>
                <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider bg-purple-100/80 px-2 py-0.5 rounded-full">
                  Women's Health
                </span>
              </div>
            </div>
            <button
              className="lg:hidden text-slate-500 hover:text-slate-700 p-1"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 scale-[1.02]'
                      : 'text-slate-600 hover:bg-purple-100/60 hover:text-purple-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* AI Status Card at Bottom */}
        <div className="bg-gradient-to-br from-purple-100/80 to-indigo-50 border border-purple-200/60 rounded-2xl p-4 text-xs text-purple-900 shadow-sm">
          <div className="flex items-center gap-2 font-semibold mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>AI Health Assistant Active</span>
          </div>
          <p className="text-purple-700/80 text-[11px] leading-relaxed">
            Real-time personalized PCOS & PCOD monitoring initialized.
          </p>
        </div>
      </aside>
    </>
  );
}
