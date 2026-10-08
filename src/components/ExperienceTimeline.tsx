import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Career Progression & Education
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            6 years of continuous engineering leadership at Rareprob Solutions, evolving from native
            Java screen development to architecting multi-million install media platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-3 pl-6 space-y-10">
              {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 ring-4 ring-[#090d16]" />

                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h4>
                      <span className="text-xs font-mono text-emerald-400 font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1">
                      <span className="text-slate-200 font-medium">{exp.company}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{exp.location}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{exp.type}</span>
                    </div>

                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed italic">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-2">
                    {exp.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">›</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 text-slate-400 rounded border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Credentials (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="text-xs font-mono text-emerald-400 font-semibold">{edu.period}</div>
                  <h4 className="font-display text-sm font-bold text-white mt-1">{edu.degree}</h4>
                  <div className="text-xs text-slate-300 mt-0.5">{edu.field}</div>
                  <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800/80">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-800/40 mt-8 space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Availability
              </span>
              <h4 className="font-display text-base font-bold text-white">
                Ready for Senior Android Roles
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open to full-time remote roles globally, hybrid or on-site opportunities with relocation.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Email Arun Saini</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
