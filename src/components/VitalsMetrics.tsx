import React from 'react';
import { ShieldCheck, TrendingDown, TrendingUp, Cpu, Smartphone, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const VitalsMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0f1c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Google Play Console Vitals & Reliability
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
            Production Vitals Engineered for Scale
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Direct ownership across Google Play vitals, ANR thresholds, memory leak profiling, and
            lifecycle-aware ad monetization flows on 1,600+ physical device configurations.
          </p>
        </div>

        {/* 4 Primary Quantitative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.vitals.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                item.highlight
                  ? 'bg-slate-900/90 border-emerald-500/30 ring-1 ring-emerald-500/10'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                  {item.metric}
                </span>
                {item.highlight ? (
                  <TrendingDown className="w-5 h-5 text-emerald-400" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-slate-200 mt-3">{item.label}</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{item.subtext}</p>
            </div>
          ))}
        </div>

        {/* Play Console Proof Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ANR Threshold Mastery</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google Play bad behavior threshold is <strong>0.47%</strong>. Arun reduced File
              Manager's ANR rate from <strong>0.76% down to 0.25%</strong>, maintaining it across
              all 20+ applications via StrictMode and async coroutines.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Target Android 36 SDK Migration</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upgraded all apps to the latest Android 36 API level, refactoring Scoped Storage,
              Foreground Service types, and back navigation, clearing 100% of Play Console warnings.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1,600+ Device Models Supported</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tested and optimized memory footprints for budget 2GB RAM phones up to flagship
              foldables across Android 23 through Android 36 with 99.9% crash-free stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
