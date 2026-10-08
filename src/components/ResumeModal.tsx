import React, { useState } from 'react';
import { X, Copy, Check, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plainTextResume = `
ARUN SAINI
Senior Android Developer
Dehradun, Uttarakhand | Open to: relocation / remote / hybrid
Phone: +91 83940 02785 | Email: arunsaini065@gmail.com
LinkedIn: https://www.linkedin.com/in/arun-kumar-saini-ab6746170/
GitHub: https://github.com/arunsaini065

PROFESSIONAL SUMMARY
Android developer with 6 years of experience in Kotlin and Java, building consumer apps for Google Play. Specialises in media playback, file management, download management and Application Not Responding (ANR) reduction. Contributed to 20+ published apps, including HD Video Player All Formats (100M+ installs), with hands-on ownership across feature development, debugging and releases. Owned features like Video Streaming, AI Subtitle Translator, EXO Player, Media3 and reduced ANR rate to 0.25% in all apps.

KEY ACHIEVEMENTS
- Reduced the ANR rate in File Manager app from 0.76% to 0.25% by resolving the crash rate, optimizing apps performance, improving user ratings and retention.
- Built the resumable download engine / casting module for HD Video Player All Formats (100M+ installs), raising download completion / playback success by 80%.
- Increased ad fill rate by 92% across 20 apps by designing AdMob preload and cooldown flows.
- Investigated and resolved ANRs across WebView, media, ad SDK and RecyclerView flows using Play Console vitals, StrictMode and performance debugging, improving app stability and responsiveness.
- Built and maintained media playback, file management and resumable download features across published Android apps, including HD Video Player All Formats (100M+ installs) and Video Downloader - VidFetch (1M+ installs).
- Upgraded all apps to target Android 36 API Level, clearing 100% Play Console warnings and cutting crashes by 99.9%.

TECHNICAL SKILLS
- Languages and UI: Kotlin, Java, XML, Android SDK, Jetpack Compose, RecyclerView, Android TV
- Architecture: MVVM, Clean Architecture, ViewModel, Repository Pattern, Activity and Fragment lifecycle
- Async and data: Coroutines, Flow, Room, Retrofit, REST APIs, WorkManager, Live data
- Media and files: Video and audio playback, WebView, file and storage management, download management
- Quality: ANR investigation, performance debugging, StrictMode, Android SDK migration, crash analysis, debugging, JUnit
- Delivery and monetization: AdMob, Firebase Remote Config, Firebase Crashlytics, Firebase Analytics, Play Console, app releases, Git, Gradle, CI/CD
- Billing and Payment: In-app purchases
- Libraries and tools: Hilt, Dagger, Navigation, Media3 / ExoPlayer, Paging 3, Koin
- AI-assisted development: Antigravity (Gemini), ChatGPT, Claude, Cursor

WORK EXPERIENCE
Rareprob Solutions
Senior Android Developer | May 2025 – Present
- Diagnosed and fixed ANRs in WebView, ad SDK, media and RecyclerView screens using Play Console reports, StrictMode and profiling, maintaining ANR rate under 0.25%.
- Built AdMob preload, cooldown and lifecycle-aware banner and interstitial flows in 20+ apps raising ad fill rate by 92% and cutting ad-related crashes by 99.9%.
- Upgraded all apps to target Android 36 API Level, clearing 100% Play Console warnings and cutting crashes by 99.9%.
- Shipped 150+ releases across 20+ apps, owning implementation, debugging and Play Console rollout, with 99.9% crash-free users.
- Migrated XML-based screens to Jetpack Compose, reducing UI code by up to 30%.

Android Developer | Mar 2022 – Mar 2025
- Built features in Kotlin and Java using MVVM, ViewModel, repository pattern, coroutines and Flow in all apps, reducing load time to <1 sec and crash rate to 0.1%.
- Built the resumable download manager and WebView media detection for Video Downloader - VidFetch (1M+ installs).
- Implemented subtitle, casting and playlist playback in HD Video Player All Formats (100M+ installs).
- Developed file operations, ZIP and PDF utilities in File Manager (10M+ installs).
- Fixed lifecycle leaks and main-thread blocking, reducing OOM crashes by 99.9% on Android 23-36.

Software Engineer | Jun 2020 – Mar 2022
- Developed Android screens in Java and Kotlin for consumer apps including media, file handling and Firebase / AdMob integrations.
- Migrated Java code to Kotlin and adopted ViewModel and lifecycle-aware components.

SELECTED PUBLISHED APPS
- HD Video Player All Formats (100M+ installs)
- File Manager (10M+ installs)
- Video to Mp3 Converter (10M+ installs)
- ZX File Manager (5M+ installs)
- Video Downloader - VidFetch (1M+ installs)
- PixMate Photo Collage Maker (1M+ installs)
- GoCleaner - Junk Storage Cleaner (100K+ installs)
- Doc Scanner & File Manager (10K+ installs)

FEATURED PROJECT
- Fit App: 20+ Compose screens, Room offline-first DB, StateFlow, MVVM, Clean Architecture.

EDUCATION
- Master of Computer Applications (MCA), Computer Science | Graphic Era Deemed to be University | 2022 – 2024
- Master's, Computer Science | Chaudhary Charan Singh University | 2020 – 2022
- Bachelor's, Computer Science | Chaudhary Charan Singh University | 2017 – 2020
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">Curriculum Vitae</span>
            <span className="text-xs text-slate-400 font-mono">· Arun Saini</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title="Copy ATS Plain Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Formatted Resume */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d16] text-slate-300 print:bg-white print:text-black">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              ARUN SAINI
            </h1>
            <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700 mt-1">
              Senior Android Developer (6+ Years Experience)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 print:text-gray-600 mt-2">
              <span>Dehradun, Uttarakhand, India</span>
              <span>·</span>
              <span>Open to: Relocation / Remote / Hybrid</span>
              <span>·</span>
              <span>+91 83940 02785</span>
              <span>·</span>
              <span>arunsaini065@gmail.com</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 print:text-blue-700 mt-2">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 underline"
              >
                LinkedIn Profile
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black border-b border-slate-800/80 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-gray-800">
              Android developer with 6 years of experience in Kotlin and Java, building consumer apps
              for Google Play. Specialises in media playback, file management, download management
              and Application Not Responding (ANR) reduction. Contributed to 20+ published apps,
              including HD Video Player All Formats (100M+ installs), with hands-on ownership across
              feature development, debugging and releases. Owned features like Video Streaming, AI
              Subtitle Translator, EXO Player, Media3 and reduced ANR rate to 0.25% in all apps.
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black border-b border-slate-800/80 pb-1 mb-2">
              Key Achievements
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">›</span>
                <span>
                  <strong>Reduced ANR rate:</strong> Lowered File Manager ANR from 0.76% to 0.25% by
                  resolving crashes, optimizing performance, and eliminating main-thread disk I/O.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">›</span>
                <span>
                  <strong>Resumable Download & Casting Engine:</strong> Built for HD Video Player All
                  Formats (100M+ installs), raising completion and playback success rate by 80%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">›</span>
                <span>
                  <strong>AdMob Monetization Engine:</strong> Increased ad fill rate by 92% across 20
                  apps by designing lifecycle-aware preload and cooldown flows.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">›</span>
                <span>
                  <strong>Android 36 Target SDK Migration:</strong> Upgraded all 20+ apps, clearing
                  100% Play Console warnings and cutting crash rate by 99.9%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">›</span>
                <span>
                  <strong>150+ Production Releases:</strong> Shipped releases with 99.9% crash-free
                  users, supporting 1,600+ device models across Android 23 to 36.
                </span>
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black border-b border-slate-800/80 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 print:text-gray-800">
              <div>
                <strong>Languages & UI:</strong> Kotlin, Java, XML, Android SDK, Jetpack Compose,
                RecyclerView, Android TV
              </div>
              <div>
                <strong>Architecture:</strong> MVVM, Clean Architecture, ViewModel, Repository
                Pattern, Activity/Fragment Lifecycle
              </div>
              <div>
                <strong>Async & Data:</strong> Coroutines, Flow, StateFlow, Room, Retrofit, REST
                APIs, WorkManager, LiveData
              </div>
              <div>
                <strong>Media & Files:</strong> Video/Audio playback, Media3, ExoPlayer, WebView,
                Storage Access Framework (SAF), Resumable Downloads
              </div>
              <div>
                <strong>Quality & Vitals:</strong> ANR Investigation, StrictMode, Play Console
                Vitals, Memory Profiling, Crash Analysis, JUnit
              </div>
              <div>
                <strong>Monetization & Tools:</strong> AdMob Preload/Cooldown, Google Play Billing
                (IAP), Firebase Crashlytics & Analytics, Hilt, Dagger, Git, Gradle, CI/CD
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black border-b border-slate-800/80 pb-1 mb-4">
              Work Experience
            </h2>

            <div className="space-y-6">
              {PORTFOLIO_DATA.experiences.map((exp, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <h3 className="font-bold text-white print:text-black text-sm">{exp.title}</h3>
                    <span className="text-xs font-mono text-emerald-400 print:text-gray-600">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-gray-600">
                    {exp.company} · {exp.location}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 print:text-gray-800 mt-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-black border-b border-slate-800/80 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs text-slate-300 print:text-gray-800">
              {PORTFOLIO_DATA.education.map((edu, i) => (
                <div key={i} className="flex flex-wrap items-baseline justify-between">
                  <div>
                    <span className="font-semibold text-white print:text-black">{edu.degree}</span>{' '}
                    — {edu.institution}
                  </div>
                  <span className="font-mono text-slate-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
