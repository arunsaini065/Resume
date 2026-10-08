import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, Code, Cpu, Smartphone, Shield, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 bg-[#0a0f1c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Technical Stack & Engineering Proficiency
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
            Core Competencies & Android Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Hands-on mastery gained across 6 years of shipping consumer Android applications targeting
            Android 23 through Android 36 with production rigor.
          </p>
        </div>

        {/* Tab selection for Categories */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-8 overflow-x-auto">
          {PORTFOLIO_DATA.skills.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === index
                  ? 'bg-emerald-500 text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Skills List */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <h3 className="font-display text-lg font-bold text-white">
              {PORTFOLIO_DATA.skills[activeTab].title}
            </h3>
            <span className="text-xs font-mono text-emerald-400">
              {PORTFOLIO_DATA.skills[activeTab].skills.length} Core Technologies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.skills[activeTab].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white tracking-wide">{skill.name}</span>
                    <span className="text-[11px] font-mono font-medium text-emerald-400">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                    {skill.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Assisted Modern Development Spotlight */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>AI-Augmented Development Workflow</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Arun leverages modern AI engineering tooling (Antigravity/Gemini, Cursor, Claude, ChatGPT)
              to accelerate code refactoring, generate unit test matrices, and rapidly analyze Android
              tombstone crash traces.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Cursor</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Antigravity</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">Claude</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700">ChatGPT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
