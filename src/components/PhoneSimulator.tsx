import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Tv,
  Subtitles,
  Volume2,
  VolumeX,
  FastForward,
  Download,
  CheckCircle2,
  Activity,
  Flame,
  Footprints,
  RotateCcw,
  Sparkles,
  Layers,
  Smartphone
} from 'lucide-react';

export const PhoneSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'download' | 'fit'>('video');

  // Video player state
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);
  const [isCasting, setIsCasting] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [speed, setSpeed] = useState<'1.0x' | '1.5x' | '2.0x'>('1.0x');

  // Download manager state
  const [isDownloading, setIsDownloading] = useState(true);
  const [downloadProgress, setDownloadProgress] = useState(64);
  const [chunk1, setChunk1] = useState(78);
  const [chunk2, setChunk2] = useState(65);
  const [chunk3, setChunk3] = useState(58);
  const [chunk4, setChunk4] = useState(54);

  // Fit app state
  const [steps, setSteps] = useState(8420);
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([1]);

  // Video progress interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Download chunks simulation
  useEffect(() => {
    if (!isDownloading) return;
    const interval = setInterval(() => {
      setChunk1((p) => (p >= 100 ? 100 : p + 2));
      setChunk2((p) => (p >= 100 ? 100 : p + 3));
      setChunk3((p) => (p >= 100 ? 100 : p + 1.5));
      setChunk4((p) => (p >= 100 ? 100 : p + 2.5));

      setDownloadProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(100, Math.round(prev + 1));
      });
    }, 500);
    return () => clearInterval(interval);
  }, [isDownloading]);

  const toggleWorkout = (id: number) => {
    setCompletedWorkouts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Device Mode Switcher (Interactive Segmented Control) */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-4 shadow-lg">
        <button
          onClick={() => setActiveTab('video')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'video'
              ? 'bg-emerald-500 text-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>HD Video Player (100M+)</span>
        </button>

        <button
          onClick={() => setActiveTab('download')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'download'
              ? 'bg-emerald-500 text-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resumable Engine</span>
        </button>

        <button
          onClick={() => setActiveTab('fit')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'fit'
              ? 'bg-emerald-500 text-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Fit App (Compose)</span>
        </button>
      </div>

      {/* Flagship Android Smartphone Bezel */}
      <div className="relative w-[320px] sm:w-[350px] h-[670px] bg-slate-950 rounded-[44px] p-3 shadow-2xl shadow-emerald-950/40 border-[4px] border-slate-800 ring-1 ring-slate-700/50">
        {/* Subtle Side Button Outlines */}
        <div className="absolute -left-[6px] top-28 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[6px] top-44 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[6px] top-32 w-[3px] h-16 bg-slate-700 rounded-r-sm" />

        {/* Screen Glass Surface */}
        <div className="relative w-full h-full bg-[#0d131f] rounded-[36px] overflow-hidden flex flex-col border border-slate-800/60">
          {/* Status Bar */}
          <div className="h-8 px-6 pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400 shrink-0 z-20">
            <span className="font-semibold text-slate-200">10:42</span>
            {/* Front Camera Punch Hole */}
            <div className="w-3.5 h-3.5 bg-black rounded-full ring-1 ring-slate-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-[10px] font-bold text-emerald-400">5G</span>
              <span className="text-[10px]">98%</span>
            </div>
          </div>

          {/* SCREEN CONTENT BY MODE */}
          <div className="flex-1 flex flex-col overflow-y-auto px-4 pb-4">
            {/* ================= MODE 1: HD VIDEO PLAYER ================= */}
            {activeTab === 'video' && (
              <div className="flex-1 flex flex-col justify-between py-2 space-y-3">
                {/* App Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      HD Video Player
                    </h4>
                    <p className="text-[10px] text-slate-400">ExoPlayer Media3 Engine</p>
                  </div>
                  <button
                    onClick={() => setIsCasting(!isCasting)}
                    className={`p-1.5 rounded-lg border text-xs transition-colors ${
                      isCasting
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                    title="Google Cast"
                  >
                    <Tv className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Casting banner */}
                {isCasting && (
                  <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-lg p-2 flex items-center justify-between text-[11px] text-emerald-300">
                    <span className="flex items-center gap-1.5">
                      <Tv className="w-3 h-3 text-emerald-400" />
                      Living Room TV (4K Cast)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">60 FPS</span>
                  </div>
                )}

                {/* Video Playback Canvas Viewport */}
                <div className="relative aspect-video w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between p-3 group shadow-inner">
                  {/* Subtle video background art */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/40" />

                  {/* Audio Waveform Visualization */}
                  <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-1 opacity-70">
                    {[16, 28, 42, 60, 34, 48, 55, 30, 22, 45, 62, 38, 20].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full bg-emerald-400/80 transition-all duration-300 ${
                          isPlaying ? 'animate-pulse' : 'opacity-30'
                        }`}
                        style={{ height: isPlaying ? `${h}px` : '6px' }}
                      />
                    ))}
                  </div>

                  {/* Top Video Overlay */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-300">
                    <span className="font-mono bg-black/60 px-1.5 py-0.5 rounded text-[9px] border border-slate-800">
                      MKV · 4K UHD · 60fps
                    </span>
                    <span className="font-mono text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      HW Decoded
                    </span>
                  </div>

                  {/* AI Subtitle Overlay */}
                  {showSubtitles && (
                    <div className="relative z-10 text-center my-auto">
                      <span className="inline-block bg-black/85 text-emerald-200 text-[11px] px-2.5 py-1 rounded border border-emerald-500/30 shadow-md">
                        {progress < 50
                          ? 'Streaming ExoPlayer Media3 segmented cache'
                          : 'Zero-buffer playback achieved on low bandwidth'}
                      </span>
                    </div>
                  )}

                  {/* Playback Scrubbing Bar */}
                  <div className="relative z-10 w-full space-y-1">
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden cursor-pointer">
                      <div
                        className="bg-emerald-400 h-full rounded-full transition-all duration-200"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                      <span>03:{progress < 10 ? `0${progress}` : progress}</span>
                      <span>08:45</span>
                    </div>
                  </div>
                </div>

                {/* Controller Actions */}
                <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 text-slate-400 hover:text-white"
                      title="Mute"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setProgress((p) => Math.max(0, p - 10))}
                      className="text-slate-400 hover:text-white text-[11px] font-mono"
                    >
                      -10s
                    </button>

                    {/* Central Play/Pause Toggle */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black flex items-center justify-center shadow-md shadow-emerald-500/30 transition-transform active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={() => setProgress((p) => Math.min(100, p + 10))}
                      className="text-slate-400 hover:text-white text-[11px] font-mono"
                    >
                      +10s
                    </button>

                    <button
                      onClick={() => {
                        const speeds: ('1.0x' | '1.5x' | '2.0x')[] = ['1.0x', '1.5x', '2.0x'];
                        const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
                        setSpeed(speeds[nextIdx]);
                      }}
                      className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700"
                    >
                      {speed}
                    </button>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around text-[10px] text-slate-400">
                    <button
                      onClick={() => setShowSubtitles(!showSubtitles)}
                      className={`flex items-center gap-1 ${
                        showSubtitles ? 'text-emerald-400 font-semibold' : ''
                      }`}
                    >
                      <Subtitles className="w-3.5 h-3.5" />
                      AI Subtitles
                    </button>
                    <span className="text-slate-700">|</span>
                    <span className="text-slate-300">Background Audio: Active</span>
                    <span className="text-slate-700">|</span>
                    <span className="text-slate-300">PiP: Ready</span>
                  </div>
                </div>

                {/* Engineering Highlight Card */}
                <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-emerald-300">Arun's Architecture Win</span>
                    <span className="text-[10px] font-mono text-emerald-400">+80% Success</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                    Custom Media3 CacheDataSource offloaded to background Coroutines. ANR dropped below
                    0.25%.
                  </p>
                </div>
              </div>
            )}

            {/* ================= MODE 2: RESUMABLE DOWNLOAD ENGINE ================= */}
            {activeTab === 'download' && (
              <div className="flex-1 flex flex-col justify-between py-2 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">VidFetch Engine</h4>
                    <p className="text-[10px] text-slate-400">Segmented Multi-Part Downloader</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsDownloading(!isDownloading);
                    }}
                    className="px-2 py-1 text-[10px] font-semibold rounded bg-slate-800 border border-slate-700 text-emerald-400"
                  >
                    {isDownloading ? 'Pause All' : 'Resume All'}
                  </button>
                </div>

                {/* Primary Active Task */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-[11px] font-semibold text-slate-200">
                        HD_Marvel_Trailer_4K.mp4
                      </h5>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {(1.4 * (downloadProgress / 100)).toFixed(2)} GB / 1.40 GB · 14.8 MB/s
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400">
                      {downloadProgress}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>

                  {/* 4 Multi-Thread Chunks */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                      <span>Chunk 1 (Offset 0-350MB)</span>
                      <span className="text-slate-300">{Math.round(chunk1)}%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden">
                      <div className="bg-emerald-500/80 h-full" style={{ width: `${chunk1}%` }} />
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                      <span>Chunk 2 (Offset 350-700MB)</span>
                      <span className="text-slate-300">{Math.round(chunk2)}%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden">
                      <div className="bg-teal-500/80 h-full" style={{ width: `${chunk2}%` }} />
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                      <span>Chunk 3 (Offset 700-1050MB)</span>
                      <span className="text-slate-300">{Math.round(chunk3)}%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden">
                      <div className="bg-cyan-500/80 h-full" style={{ width: `${chunk3}%` }} />
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                      <span>Chunk 4 (Offset 1050-1400MB)</span>
                      <span className="text-slate-300">{Math.round(chunk4)}%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-500/80 h-full" style={{ width: `${chunk4}%` }} />
                    </div>
                  </div>
                </div>

                {/* Completed Queue */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Completed Downloads
                  </span>
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-slate-300 font-medium text-[11px]">Podcast_Audio_Track.m4a</p>
                        <p className="text-[9px] text-slate-500 font-mono">48.2 MB · Verified Hash</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-mono">Saved</span>
                  </div>
                </div>

                {/* Resilience Feature */}
                <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-2 text-[10px] text-slate-400">
                  <span className="text-slate-200 font-medium">WorkManager Handshake:</span> Recovers
                  seamlessly across network dropouts, OS kills, and low battery states without restart.
                </div>
              </div>
            )}

            {/* ================= MODE 3: FIT APP (JETPACK COMPOSE) ================= */}
            {activeTab === 'fit' && (
              <div className="flex-1 flex flex-col justify-between py-2 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">Fit App</h4>
                    <p className="text-[10px] text-slate-400">100% Jetpack Compose Architecture</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    20+ Screens
                  </span>
                </div>

                {/* Compose Daily Progress Card */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400">Daily Step Goal</span>
                    <div className="text-lg font-bold text-white font-mono mt-0.5">
                      {steps.toLocaleString()}
                      <span className="text-[10px] text-slate-400 font-normal"> / 10,000</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-[10px]">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Flame className="w-3 h-3" />
                        524 kcal
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="flex items-center gap-1 text-teal-400">
                        <Footprints className="w-3 h-3" />
                        6.2 km
                      </span>
                    </div>
                  </div>

                  {/* Circular Step Ring Simulation */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        stroke="#1e293b"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="26"
                        stroke="#10b981"
                        strokeWidth="5"
                        strokeDasharray={163}
                        strokeDashoffset={163 - (163 * 84) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <span className="absolute text-[11px] font-mono font-bold text-white">84%</span>
                  </div>
                </div>

                {/* Workout Checklist (Interactive StateFlow simulation) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-mono uppercase tracking-wider">Today's Routine</span>
                    <span>StateFlow + Room</span>
                  </div>

                  {[
                    { id: 1, name: 'Morning Cardio Run', duration: '25 mins', cal: '210 cal' },
                    { id: 2, name: 'Core & Abdominal Circuit', duration: '15 mins', cal: '130 cal' },
                    { id: 3, name: 'Evening Mobility Stretch', duration: '12 mins', cal: '80 cal' },
                  ].map((w) => {
                    const isDone = completedWorkouts.includes(w.id);
                    return (
                      <div
                        key={w.id}
                        onClick={() => toggleWorkout(w.id)}
                        className={`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                          isDone
                            ? 'bg-emerald-950/30 border-emerald-800/40'
                            : 'bg-slate-900/60 border-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                              isDone
                                ? 'bg-emerald-500 border-emerald-400 text-black'
                                : 'border-slate-700 bg-slate-800'
                            }`}
                          >
                            {isDone && '✓'}
                          </div>
                          <div>
                            <p
                              className={`text-[11px] font-medium ${
                                isDone ? 'text-slate-400 line-through' : 'text-slate-200'
                              }`}
                            >
                              {w.name}
                            </p>
                            <p className="text-[9px] text-slate-500 font-mono">
                              {w.duration} · {w.cal}
                            </p>
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-400 font-mono">
                          {isDone ? 'Done' : 'Pending'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-2 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Navigation Compose + Hilt DI</span>
                  <span className="text-emerald-400 font-mono">Zero XML</span>
                </div>
              </div>
            )}
          </div>

          {/* Android 15 Gesture Bar */}
          <div className="h-4 flex items-center justify-center shrink-0 pb-1">
            <div className="w-24 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Simulator helper note */}
      <p className="text-[11px] text-slate-400 mt-3 text-center">
        Live interactive simulator · Switch tabs to test playback, resumable chunks & Compose UI
      </p>
    </div>
  );
};
