import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SymptomAnalysis from './pages/SymptomAnalysis';
import DietPlans from './pages/DietPlans';
import YogaExercise from './pages/YogaExercise';
import SeverityCheck from './pages/SeverityCheck';
import DoctorAnalysis from './pages/DoctorAnalysis';
import FindHospital from './pages/FindHospital';
import GovtSchemes from './pages/GovtSchemes';
import { Menu, HeartHandshake } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'symptom':
        return <SymptomAnalysis setActiveTab={setActiveTab} />;
      case 'diet':
        return <DietPlans />;
      case 'yoga':
        return <YogaExercise />;
      case 'severity':
        return <SeverityCheck setActiveTab={setActiveTab} />;
      case 'doctor':
        return <DoctorAnalysis setActiveTab={setActiveTab} />;
      case 'hospital':
        return <FindHospital />;
      case 'govt':
        return <GovtSchemes />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Container */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        {/* Mobile Top Navbar */}
        <header className="lg:hidden sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-purple-100 px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <span className="font-bold text-base bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
              PCOD Care AI
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-xl text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-10 max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
