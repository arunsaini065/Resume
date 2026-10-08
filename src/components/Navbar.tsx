import React, { useState } from 'react';
import { FileText, Phone, Mail, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-6 text links) - Zone 3 (1-2 actions) */}
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Work
            </span>
          </a>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('apps')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Apps & 100M+ Impact
            </button>
            <button
              onClick={() => scrollTo('anr-lab')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              ANR & Perf Lab
            </button>
            <button
              onClick={() => scrollTo('architecture')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Experience
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/80 rounded-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume (CV)</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 hover:text-white"
              title="View Resume"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090d16]/98 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('apps')}
              className="text-left py-1 hover:text-emerald-400 transition-colors"
            >
              Apps & 100M+ Impact
            </button>
            <button
              onClick={() => scrollTo('anr-lab')}
              className="text-left py-1 hover:text-emerald-400 transition-colors"
            >
              ANR & Perf Lab
            </button>
            <button
              onClick={() => scrollTo('architecture')}
              className="text-left py-1 hover:text-emerald-400 transition-colors"
            >
              Architecture & Pipelines
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="text-left py-1 hover:text-emerald-400 transition-colors"
            >
              Technical Skills
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="text-left py-1 hover:text-emerald-400 transition-colors"
            >
              Work Experience & Education
            </button>
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 text-xs font-semibold text-black bg-emerald-400 rounded-lg"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
