import React from 'react';
import {
  MapPin,
  Briefcase,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PhoneSimulator } from './PhoneSimulator';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Subtle Radial Glow in background (60-30-10 discipline) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Narrative & Proof (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location Meta (Unboxed text with clean typographic separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">{PORTFOLIO_DATA.personal.title}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{PORTFOLIO_DATA.personal.workPreferences}</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Scaling Android apps to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                128M+ installs
              </span>{' '}
              with 0.25% ANR & 99.9% crash-free vitals.
            </h1>

            {/* Body Prose */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Senior Android Engineer with 6 years of deep specialization in Kotlin, Java, Media3 /
              ExoPlayer streaming, resumable download pipelines, and Play Console vitals
              optimization. Shipped over 150+ production releases across 20+ consumer apps for
              Google Play.
            </p>

            {/* Proof Points Strip (Clean editorial text without pill enclosures) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800/80">
              <div>
                <div className="font-display text-2xl font-bold text-white tabular-nums">6+ Yrs</div>
                <div className="text-xs text-slate-400 mt-0.5">Android Experience</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-emerald-400 tabular-nums">128M+</div>
                <div className="text-xs text-slate-400 mt-0.5">Total Play Installs</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-teal-300 tabular-nums">0.25%</div>
                <div className="text-xs text-slate-400 mt-0.5">ANR Threshold Met</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-white tabular-nums">API 36</div>
                <div className="text-xs text-slate-400 mt-0.5">Android SDK Target</div>
              </div>
            </div>

            {/* Action Buttons & Quick Recruiter Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('apps')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>Explore Flagship Apps</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('anr-lab')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Open ANR Debugger Lab</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>View Full CV</span>
              </button>
            </div>

            {/* Verified Contact Badges & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-400" />
                <span>LinkedIn Profile</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub (arunsaini065)</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Android Device Simulator (Col 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneSimulator />
          </div>
        </div>
      </div>
    </section>
  );
};
