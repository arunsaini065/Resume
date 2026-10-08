import React, { useState } from 'react';
import {
  Smartphone,
  Download,
  Star,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
  X,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA, AppProject } from '../data/portfolioData';

export const AppsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalApp, setActiveModalApp] = useState<AppProject | null>(null);

  const categories = ['All', 'Media & Streaming', 'File Management', 'Utility & Tools'];

  const filteredApps =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.apps
      : PORTFOLIO_DATA.apps.filter((app) => app.category === selectedCategory);

  return (
    <section id="apps" className="py-20 bg-[#0a0f1c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Google Play Portfolio & Hands-on Ownership
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
              Published Consumer Android Apps (128M+ Installs)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              End-to-end development, architecture refactoring, and Play Console release management
              across top-ranking consumer apps with 99.9% crash-free stability.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers as permitted in Section 1.A) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat} {cat === 'All' && `(${PORTFOLIO_DATA.apps.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Banner: Fit App (Jetpack Compose) */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              {/* Unboxed metadata */}
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <span>Featured Architecture Showcase</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">100% Jetpack Compose</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">{PORTFOLIO_DATA.featuredProject.screensCount}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.featuredProject.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {PORTFOLIO_DATA.featuredProject.description}
              </p>

              {/* Tech stack line */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
                {PORTFOLIO_DATA.featuredProject.techStack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="text-slate-300 font-mono text-[11px]">{tech}</span>
                    {i < PORTFOLIO_DATA.featuredProject.techStack.length - 1 && (
                      <span className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-right w-full sm:w-auto lg:w-full">
                <div className="text-xs text-slate-400 font-mono">State Management</div>
                <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                  StateFlow + Unidirectional Data Flow
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-right w-full sm:w-auto lg:w-full">
                <div className="text-xs text-slate-400 font-mono">Persistence</div>
                <div className="text-sm font-semibold text-teal-300 mt-0.5">
                  Offline-First Room DB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Unboxed Metadata Line (Section 1.A zero-pill discipline) */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-medium">{app.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{app.role}</span>
                  </div>
                  {app.rating && (
                    <span className="text-amber-400 font-medium tabular-nums">{app.rating}</span>
                  )}
                </div>

                {/* Primary Card Title */}
                <h3 className="font-display text-lg font-bold text-white mt-3 group-hover:text-emerald-400 transition-colors">
                  {app.name}
                </h3>

                {/* Installs & Subtext */}
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-xl font-extrabold text-white tabular-nums tracking-tight">
                    {app.installs}
                  </span>
                  <span className="text-xs text-slate-500 font-normal">on Google Play</span>
                </div>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{app.tagline}</p>

                {/* Key Features List */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                  {app.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {app.architecture.techStack[0]} · {app.architecture.techStack[1]}
                </span>
                <button
                  onClick={() => setActiveModalApp(app)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <span>Tech Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Architecture Modal */}
      {activeModalApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span>{activeModalApp.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-white font-bold">{activeModalApp.installs}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mt-0.5">
                  {activeModalApp.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalApp(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  OVERVIEW
                </h4>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {activeModalApp.architecture.overview}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400">
                  ENGINEERING CHALLENGE
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalApp.architecture.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  ARUN'S ARCHITECTURAL SOLUTION
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalApp.architecture.solution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  MEASURABLE IMPACT
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalApp.architecture.impact}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                  TECHNOLOGIES & SDKS
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {activeModalApp.architecture.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-end">
              <button
                onClick={() => setActiveModalApp(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
