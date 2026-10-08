import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Linkedin, Github, Send, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('recruiter');
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [customNote, setCustomNote] = useState('');

  const templates: Record<string, { label: string; subject: string; body: string }> = {
    recruiter: {
      label: 'Senior Android Role Opportunity',
      subject: `Senior Android Developer Opportunity at ${companyName || '[Company]'}`,
      body: `Hi Arun,\n\nI reviewed your portfolio and were impressed by your 100M+ install track record and ANR optimization (0.25%) across Google Play apps.\n\nWe have an exciting Senior Android Developer opening at ${companyName || 'our team'} that aligns well with your 6 years of Kotlin, Media3, and Compose experience.\n\nCould we connect for a brief 15-minute chat this week?\n\nBest regards,\n${recruiterName || '[Your Name]'}`,
    },
    consulting: {
      label: 'ANR & Performance Consulting',
      subject: 'Android ANR & ExoPlayer Consulting Inquiry',
      body: `Hi Arun,\n\nWe have an Android application currently facing ANR issues and media playback performance bottlenecks. We would love to discuss your consulting availability for performance audit and optimization.\n\nBest regards,\n${recruiterName || '[Your Name]'}`,
    },
    general: {
      label: 'General Technical Connect',
      subject: 'Connecting via Arun Saini Android Portfolio',
      body: `Hi Arun,\n\nI came across your portfolio and wanted to connect regarding your Android engineering work.\n\nBest regards,\n${recruiterName || '[Your Name]'}`,
    },
  };

  const currentTemplate = templates[selectedTemplate];

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    currentTemplate.subject
  )}&body=${encodeURIComponent(customNote || currentTemplate.body)}`;

  return (
    <section id="contact" className="py-20 bg-[#0a0f1c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Direct Communication & Inquiries
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
            Let's Build Exceptional Android Products Together
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Actively open to Senior Android Developer opportunities (Full-time Remote, Hybrid, or
            Relocation). Reach out directly by phone, email, WhatsApp, or launch a quick message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Channels Card (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={`https://wa.me/918394002785?text=${encodeURIComponent(
                    'Hi Arun, saw your Android developer portfolio!'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => handleCopy('+91 83940 02785', 'phone')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-sm font-bold text-white hover:text-teal-300 transition-colors font-mono"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Relocation Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <MapPin className="w-4 h-4" />
                <span>Base Location & Flexibility</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently based in <strong>Dehradun, Uttarakhand, India</strong>. Actively open to{' '}
                <strong>relocation, full remote, or hybrid arrangements</strong> across India and
                internationally.
              </p>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white"
              >
                <Github className="w-4 h-4 text-slate-300 shrink-0" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right: Quick Recruiter Message Composer (Col 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                1-Click Quick Connect
              </span>
              <h3 className="font-display text-lg font-bold text-white mt-1">
                Send a Structured Inquiry to Arun
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select an inquiry template to pre-populate a formal message and launch in your email client.
              </p>
            </div>

            {/* Template selector tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(templates).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedTemplate(key);
                    setCustomNote('');
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedTemplate === key
                      ? 'bg-emerald-500 text-black font-bold'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Name / Company inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  Your Name / Recruiter Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                  value={recruiterName}
                  onChange={(e) => setRecruiterName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Uber / PhonePe / Meta"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Message preview / editable */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Email Body Preview (Editable)
              </label>
              <textarea
                rows={6}
                value={customNote || currentTemplate.body}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full p-3 text-xs font-mono bg-slate-950 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-emerald-500 leading-relaxed resize-y"
              />
            </div>

            {/* Send CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400 font-mono">
                Recipient: arunsaini065@gmail.com
              </span>
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
