import React, { useState } from 'react';
import { Layers, Cpu, Server, Radio, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activePipeline, setActivePipeline] = useState<'media' | 'admob' | 'clean'>('media');

  return (
    <section id="architecture" className="py-20 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            System Design & Core Pipelines
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
            Production Android Architecture Patterns
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            How Arun designs resilient, decoupled, and testable Android systems built for 100M+
            installs, low memory overhead, and 99.9% crash-free sessions.
          </p>
        </div>

        {/* Pipeline Selector */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl mb-8 w-fit overflow-x-auto">
          <button
            onClick={() => setActivePipeline('media')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activePipeline === 'media'
                ? 'bg-emerald-500 text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Media3 & Resumable Streaming Pipeline
          </button>
          <button
            onClick={() => setActivePipeline('admob')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activePipeline === 'admob'
                ? 'bg-emerald-500 text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AdMob Preload & Cooldown Engine (+92%)
          </button>
          <button
            onClick={() => setActivePipeline('clean')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activePipeline === 'clean'
                ? 'bg-emerald-500 text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Clean Architecture & StateFlow Flow
          </button>
        </div>

        {/* Active Pipeline Card */}
        {activePipeline === 'media' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-8">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                ExoPlayer / Media3 · Resumable Chunk Engine · Google Cast
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                High-Concurrency Media Streaming & Resumable Download Pipeline
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                Architected for <strong>HD Video Player All Formats (100M+ Installs)</strong>. Solves
                the dual problem of network packet jitter and large 4K file memory overhead by
                separating media parsing, segmented byte caching, and hardware rendering into
                isolated coroutine scopes.
              </p>
            </div>

            {/* Visual Architecture Flow Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative">
                <div className="text-[11px] font-mono text-slate-500">PHASE 01</div>
                <h4 className="text-sm font-semibold text-white mt-1">URL & Manifest Parsing</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  OkHttp custom client sniffs MIME types, parses HLS/DASH manifest or MKV headers in
                  background Dispatchers.IO.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative">
                <div className="text-[11px] font-mono text-slate-500">PHASE 02</div>
                <h4 className="text-sm font-semibold text-emerald-400 mt-1">Segmented Chunk Cache</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Custom LRU SimpleCache splits media into discrete 2MB chunks. Chunks are cached
                  locally with AES hash validation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative">
                <div className="text-[11px] font-mono text-slate-500">PHASE 03</div>
                <h4 className="text-sm font-semibold text-teal-300 mt-1">Resumable WorkManager</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Background worker persists byte offset in Room DB. If Wi-Fi drops, state survives
                  OS kills and resumes automatically.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative">
                <div className="text-[11px] font-mono text-slate-500">PHASE 04</div>
                <h4 className="text-sm font-semibold text-white mt-1">Hardware Surface Render</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Feeds MediaCodec hardware decoder with zero-copy byte buffers. 60 FPS output on
                  Android 23 to 36 devices.
                </p>
              </div>
            </div>

            {/* Impact Metric Bar */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-300 font-medium">
                Production Outcome: Raised playback success and download completion by{' '}
                <strong className="text-emerald-400 font-bold">80%</strong> across 100M+ installs.
              </span>
              <span className="font-mono text-emerald-400 font-bold shrink-0">
                100M+ Google Play Users
              </span>
            </div>
          </div>
        )}

        {activePipeline === 'admob' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-8">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                AdMob SDK · Lifecycle Events · Cooldown Coroutines
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                AdMob Preload, Cooldown & Crash-Proof Monetization Pipeline
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                Implemented across <strong>20+ published applications</strong>. Increased ad fill
                rate by <strong>92%</strong> while slashing ad-related crashes by <strong>99.9%</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-500">STRATEGY 01</div>
                <h4 className="text-sm font-semibold text-white">Lifecycle-Aware Preloading</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ads are fetched ahead of time during idle network cycles rather than when the user
                  taps an action. Reduces ad latency to 0ms when displayed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-500">STRATEGY 02</div>
                <h4 className="text-sm font-semibold text-emerald-400">Intelligent Cooldown Timers</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enforces a dynamic 45–60s cooldown between interstitials. Prevents multiple ad
                  bursts that trigger user annoyance and Google AdMob policy violations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-500">STRATEGY 03</div>
                <h4 className="text-sm font-semibold text-teal-300">Safe Activity Dismissal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Wraps callbacks in WeakReferences and checks Activity lifecycle state before
                  calling show(), eliminating 99.9% of BadTokenException window leak crashes.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-300 font-medium">
                Production Outcome: Ad fill rate increased from 48% to{' '}
                <strong className="text-emerald-400 font-bold">92%</strong>; ad crash rate reduced
                to zero.
              </span>
              <span className="font-mono text-emerald-400 font-bold shrink-0">
                +92% Ad Revenue Efficiency
              </span>
            </div>
          </div>
        )}

        {activePipeline === 'clean' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-8">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Jetpack Compose · MVVM · Room DB · Hilt DI
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                Modern Unidirectional Clean Architecture
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                Applied across the featured <strong>Fit App (20+ Screens)</strong> and modern
                migrations. Ensures strict separation of concerns, zero business logic in the UI
                layer, and seamless offline-first capability.
              </p>
            </div>

            {/* 3 Tier Layers */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-emerald-400">UI LAYER</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">
                    Jetpack Compose / XML ViewBinding + StateFlow
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Stateless Composables consuming immutable UiState objects; zero side-effects.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">Unidirectional Data Flow</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-teal-400">DOMAIN LAYER</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">
                    Use Cases & Business Logic
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Pure Kotlin classes independent of Android framework SDK, easily unit tested with
                    JUnit.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">100% Testable</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-sky-400">DATA LAYER</span>
                  <h4 className="text-sm font-semibold text-white mt-0.5">
                    Repository Pattern + Room DB + Retrofit
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Single source of truth with offline-first synchronization and Coroutines Flow.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">Offline-First Caching</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
