import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b12] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-display text-base font-bold text-white">
              {PORTFOLIO_DATA.personal.name}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Senior Android Developer · 6 Years Experience · 128M+ Installs on Google Play
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <button
              onClick={() => scrollTo('apps')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Apps
            </button>
            <button
              onClick={() => scrollTo('anr-lab')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              ANR Lab
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
            <button
              onClick={onOpenResume}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Resume (CV)
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} Arun Saini. Built for Google Play engineering excellence.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
