import React, { useState } from 'react';
import {
  Zap,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
  Code2,
  Layers,
  Flame,
  ShieldCheck,
} from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  app: string;
  problem: string;
  symptom: string;
  unoptimizedAnr: string;
  optimizedAnr: string;
  rootCause: string;
  solution: string;
  kotlinSnippet: string;
  fpsBefore: number;
  fpsAfter: number;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'recyclerview-io',
    title: 'RecyclerView Main-Thread Disk I/O',
    app: 'File Manager (10M+ Installs)',
    problem: 'Synchronous File system queries blocked UI thread during fast folder scrolling.',
    symptom: 'StrictMode DiskReadViolation, dropped 48 frames, ANR popup: "File Manager is not responding".',
    unoptimizedAnr: '0.76% ANR Rate',
    optimizedAnr: '0.25% ANR Rate',
    rootCause: 'Direct File.listFiles() invocation inside RecyclerView Adapter onBindViewHolder.',
    solution:
      'Migrated file querying to Coroutines Flow on Dispatchers.IO with Paging 3 DiffUtil and memory LRU thumbnail pooling.',
    kotlinSnippet: `// ARUN'S OPTIMIZED REFACTOR:
fun getFilesInDirectory(path: String): Flow<PagingData<FileItem>> =
    Pager(
        config = PagingConfig(pageSize = 40, prefetchDistance = 10),
        pagingSourceFactory = { FilePagingSource(path, Dispatchers.IO) }
    ).flow.cachedIn(viewModelScope)

// ViewModel UI consumption (Zero UI thread blocking)
viewModel.filesFlow
    .flowWithLifecycle(lifecycle, Lifecycle.State.STARTED)
    .onEach { pagingData -> fileAdapter.submitData(pagingData) }
    .launchIn(viewLifecycleOwner.lifecycleScope)`,
    fpsBefore: 18,
    fpsAfter: 60,
  },
  {
    id: 'admob-cooldown',
    title: 'AdMob SDK Lifecycle & Main-Thread Lock',
    app: 'All 20+ Google Play Apps',
    problem: 'Uncontrolled repeat ad requests on Activity onResume collided with UI rendering.',
    symptom: 'Ad-related ANRs on cold start, 8% fill drop, intermittent crashes during orientation changes.',
    unoptimizedAnr: '0.62% ANR Rate',
    optimizedAnr: '0.21% ANR Rate',
    rootCause: 'Synchronous interstitial ad load calls executed without lifecycle awareness or cooldown tracking.',
    solution:
      'Engineered an AdMob Preload & Cooldown manager with StateFlow, checking network constraints and a 45s cooldown window.',
    kotlinSnippet: `// ARUN'S LIFECYCLE-AWARE AD PRELOAD ENGINE:
class AdPreloadManager @Inject constructor(
    private val context: Context
) {
    private val _adState = MutableStateFlow<AdState>(AdState.Idle)
    private var lastAdShownTimestamp = 0L
    private val COOLDOWN_MS = 45_000L

    fun preloadInterstitial(adUnitId: String) {
        if (System.currentTimeMillis() - lastAdShownTimestamp < COOLDOWN_MS) return
        val adRequest = AdRequest.Builder().build()
        InterstitialAd.load(context, adUnitId, adRequest, object : InterstitialAdLoadCallback() {
            override fun onAdLoaded(ad: InterstitialAd) {
                _adState.value = AdState.Ready(ad)
            }
        })
    }
}`,
    fpsBefore: 24,
    fpsAfter: 60,
  },
  {
    id: 'exoplayer-cache',
    title: 'Media3 4K Streaming & Buffer Freezes',
    app: 'HD Video Player (100M+ Installs)',
    problem: 'High-bitrate MKV/4K streams starved network buffers on variable 4G/5G connections.',
    symptom: 'ExoPlayer playback stalls, audio/video desync, main-thread memory spikes during segment decoding.',
    unoptimizedAnr: '0.54% ANR Rate',
    optimizedAnr: '0.22% ANR Rate',
    rootCause: 'Standard DefaultHttpDataSource without localized segment caching or predictive pre-buffering.',
    solution:
      'Architected a custom CacheDataSourceFactory backed by SimpleCache and WorkManager segmented prefetchers.',
    kotlinSnippet: `// ARUN'S RESUMABLE MEDIA3 CACHING PIPELINE:
val cache = SimpleCache(
    File(context.cacheDir, "exoplayer_media_cache"),
    LeastRecentlyUsedCacheEvictor(200L * 1024 * 1024),
    StandaloneDatabaseProvider(context)
)

val upstreamFactory = DefaultHttpDataSource.Factory()
    .setConnectTimeoutMs(8000)
    .setReadTimeoutMs(8000)

val cacheDataSourceFactory = CacheDataSource.Factory()
    .setCache(cache)
    .setUpstreamDataSourceFactory(upstreamFactory)
    .setFlags(CacheDataSource.FLAG_IGNORE_CACHE_ON_ERROR)`,
    fpsBefore: 28,
    fpsAfter: 60,
  },
];

export const AnrLab: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('recyclerview-io');
  const [isOptimized, setIsOptimized] = useState<boolean>(true);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <section id="anr-lab" className="py-20 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Interactive Architecture Deep Dive</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1.5 tracking-tight">
              ANR & Performance Debugger Lab
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              Explore how Arun diagnosed and resolved production ANRs (Application Not Responding)
              across 20+ consumer apps to bring rates down to 0.25%.
            </p>
          </div>

          {/* Interactive State Toggle */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setIsOptimized(false)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                !isOptimized
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Unoptimized (0.76% ANR)
            </button>
            <button
              onClick={() => setIsOptimized(true)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                isOptimized
                  ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Arun's Optimized (0.25% ANR)
            </button>
          </div>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {SCENARIOS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveScenarioId(item.id)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                activeScenarioId === item.id
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-md'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-400">{item.app}</div>
              <div className="text-sm font-semibold text-white mt-1">{item.title}</div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-1">{item.problem}</div>
            </button>
          ))}
        </div>

        {/* Live Lab Console & Diagnostic Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Vitals Meter & Diagnostics (Col 5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Realtime Play Console Vitals Telemetry Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isOptimized
                  ? 'bg-slate-900/80 border-emerald-500/40'
                  : 'bg-rose-950/20 border-rose-500/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Google Play Console Vitals
                </span>
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded ${
                    isOptimized
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {isOptimized ? 'HEALTHY VITALS' : 'BAD BEHAVIOR THRESHOLD EXCEEDED'}
                </span>
              </div>

              {/* ANR Rate Comparison */}
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400">Current App ANR Rate</span>
                  <div
                    className={`font-display text-4xl font-extrabold tabular-nums mt-1 ${
                      isOptimized ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isOptimized ? scenario.optimizedAnr : scenario.unoptimizedAnr}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">UI Rendering FPS</span>
                  <div
                    className={`font-display text-3xl font-extrabold tabular-nums mt-1 ${
                      isOptimized ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isOptimized ? `${scenario.fpsAfter} FPS` : `${scenario.fpsBefore} FPS`}
                  </div>
                </div>
              </div>

              {/* FPS Frame Bar */}
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Frame Render Stability</span>
                  <span>{isOptimized ? '16.6ms / frame' : '82.4ms / frame (Jank)'}</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isOptimized ? 'w-full bg-emerald-400' : 'w-[30%] bg-rose-500'
                    }`}
                  />
                </div>
              </div>

              {/* Status Note */}
              <div
                className={`mt-4 p-3 rounded-lg text-xs leading-relaxed ${
                  isOptimized
                    ? 'bg-emerald-950/40 text-emerald-200 border border-emerald-800/40'
                    : 'bg-rose-950/40 text-rose-200 border border-rose-800/40'
                }`}
              >
                {isOptimized ? (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Zero main-thread blocking detected. StrictMode compliant. App operates safely
                      under the 0.47% Google Play threshold.
                    </span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>
                      Critical ANR Warning: Main thread blocked for &gt;5000ms. Play Console vitals
                      impacted and user churn increases.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Diagnostic Details */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div>
                <span className="text-xs font-mono text-slate-500">ROOT CAUSE INVESTIGATED</span>
                <p className="text-xs font-medium text-slate-300 mt-1">{scenario.rootCause}</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-500">ARUN'S ARCHITECTURAL SOLUTION</span>
                <p className="text-xs font-medium text-emerald-300 mt-1 leading-relaxed">
                  {scenario.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Kotlin Code Refactor (Col 7) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* IDE Header */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-slate-400 font-medium">
                  {scenario.id === 'recyclerview-io'
                    ? 'FileManagerRepository.kt'
                    : scenario.id === 'admob-cooldown'
                    ? 'AdPreloadManager.kt'
                    : 'MediaCacheDataSource.kt'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kotlin 2.0 · Coroutines</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4 sm:p-5 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed bg-[#070b12]">
              <pre>
                <code>{scenario.kotlinSnippet}</code>
              </pre>
            </div>

            {/* Verification Footer */}
            <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified with Android Studio Profiler & StrictMode</span>
              </div>
              <span className="font-mono text-emerald-400">0.25% Threshold Achieved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
