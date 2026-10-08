export interface AppProject {
  id: string;
  name: string;
  tagline: string;
  installs: string;
  installsCount: number;
  category: 'Media & Streaming' | 'File Management' | 'Utility & Tools';
  role: string;
  rating?: string;
  iconBg: string;
  accentColor: string;
  keyFeatures: string[];
  architecture: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string;
    techStack: string[];
  };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; context: string }[];
}

export interface WorkRole {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Arun Saini',
    title: 'Senior Android Developer',
    experienceYears: '6+ Years',
    location: 'Dehradun, Uttarakhand, India',
    workPreferences: 'Open to: Relocation / Remote / Hybrid',
    phone: '+91 83940 02785',
    email: 'arunsaini065@gmail.com',
    linkedin: 'https://www.linkedin.com/in/arun-kumar-saini-ab6746170/',
    github: 'https://github.com/arunsaini065',
    summary:
      'Android developer with 6 years of experience in Kotlin and Java, building high-scale consumer apps for Google Play. Specialises in media playback (Media3/ExoPlayer), background file & download engines, and Application Not Responding (ANR) reduction. Contributed to 20+ published apps including HD Video Player All Formats (100M+ installs) with hands-on ownership across feature development, performance debugging, and Play Store rollouts with 99.9% crash-free users.',
  },

  vitals: [
    {
      metric: '0.25%',
      label: 'ANR Rate Across All Apps',
      subtext: 'Reduced from 0.76% in File Manager via thread offloading & StrictMode',
      highlight: true,
    },
    {
      metric: '128M+',
      label: 'Total Google Play Installs',
      subtext: 'Across 20+ published consumer applications',
      highlight: true,
    },
    {
      metric: '+92%',
      label: 'AdMob Ad Fill Rate',
      subtext: 'Engineered lifecycle-aware preload & cooldown architecture',
      highlight: false,
    },
    {
      metric: '99.9%',
      label: 'Crash-Free User Rate',
      subtext: 'Maintained over 150+ production releases on Android 23–36',
      highlight: false,
    },
  ],

  apps: [
    {
      id: 'hd-video-player',
      name: 'HD Video Player All Formats',
      tagline: 'Flagship Media Player with Multi-format Playback, Casting & Subtitle AI',
      installs: '100M+ Installs',
      installsCount: 100000000,
      category: 'Media & Streaming',
      role: 'Core Media Engine & Feature Lead',
      rating: '4.6 ★',
      iconBg: 'from-emerald-500/20 to-teal-600/30',
      accentColor: '#10b981',
      keyFeatures: [
        'ExoPlayer / Media3 streaming engine',
        'AI Subtitle Translator integration',
        'Google Cast & DLNA module',
        'Resumable multi-part download engine (+80% completion)',
        'Picture-in-Picture (PiP) and background audio',
      ],
      architecture: {
        overview:
          'High-performance Android media player handling 4K/UHD, MKV, MP4, FLV with custom ExoPlayer renderers, audio equalizer, gesture brightness/volume controls, and low-latency hardware decoding.',
        challenge:
          'Users experienced high playback stall rates and low download completion rates on low-bandwidth networks, alongside main-thread jank when scanning multi-gigabyte media stores.',
        solution:
          'Engineered a segmented resumable download pipeline with WorkManager and OkHttp interceptors. Integrated Media3 cache data sources and offloaded file-store indexing to background Coroutine dispatchers.',
        impact:
          'Raised download completion and playback success rate by 80%. Supported 1600+ device models with 99.9% crash-free stability.',
        techStack: ['Kotlin', 'Media3 / ExoPlayer', 'WorkManager', 'Coroutines', 'Google Cast SDK', 'Room'],
      },
    },
    {
      id: 'file-manager',
      name: 'File Manager',
      tagline: 'High-speed Storage Management, Archive Engine & Document Hub',
      installs: '10M+ Installs',
      installsCount: 10000000,
      category: 'File Management',
      role: 'ANR Optimization & Core Utilities',
      rating: '4.5 ★',
      iconBg: 'from-blue-500/20 to-indigo-600/30',
      accentColor: '#3b82f6',
      keyFeatures: [
        'Reduced ANR rate from 0.76% down to 0.25%',
        'ZIP/RAR compression & archive extractor',
        'Integrated PDF rendering & document viewer',
        'SAF (Storage Access Framework) Scoped Storage compliant',
        'Safe folder with biometric lock',
      ],
      architecture: {
        overview:
          'Comprehensive Android file explorer offering deep storage analysis, duplicate cleaning, root browsing option, and direct cloud/LAN sharing.',
        challenge:
          'Heavy disk I/O queries in RecyclerView file lists and deep directory traversals blocked the UI thread, causing an ANR rate spike to 0.76% and negative Play Store reviews.',
        solution:
          'Conducted deep StrictMode profiling and Android Studio traces. Replaced synchronous Java file calls with asynchronous Flow streams and Paging 3 diff calculations.',
        impact:
          'Cut ANR rate to 0.25%, elevated Play Store rating, and cleared all Android 36 Scoped Storage warnings.',
        techStack: ['Kotlin', 'Paging 3', 'Coroutines Flow', 'SAF', 'Room DB', 'StrictMode'],
      },
    },
    {
      id: 'video-to-mp3',
      name: 'Video to MP3 Converter',
      tagline: 'Audio Extractor, Ringtone Maker & Audio Trimmer',
      installs: '10M+ Installs',
      installsCount: 10000000,
      category: 'Media & Streaming',
      role: 'Audio Processing & Monetization Architecture',
      rating: '4.7 ★',
      iconBg: 'from-amber-500/20 to-orange-600/30',
      accentColor: '#f59e0b',
      keyFeatures: [
        'High-bitrate MP3/AAC audio extraction',
        'Waveform audio cutter & ringtone setter',
        'Batch media conversion with background notification',
        'AdMob lifecycle-aware banner & interstitial preload',
      ],
      architecture: {
        overview:
          'Audio processing suite utilizing native NDK/FFmpeg and Android MediaCodec wrappers to extract, normalize, and tag audio tracks.',
        challenge:
          'Background conversion tasks were killed by aggressive OEM battery managers on Android 12+ devices, causing failed exports.',
        solution:
          'Implemented Foreground Service with high-priority WorkManager constraints and real-time Notification progress updates.',
        impact:
          'Export failure rate dropped below 0.1%, with over 10M+ downloads and high ad monetization efficiency.',
        techStack: ['Kotlin', 'MediaCodec', 'Foreground Services', 'AdMob Preload', 'WorkManager'],
      },
    },
    {
      id: 'zx-file-manager',
      name: 'ZX File Manager',
      tagline: 'Lightweight File Explorer, Media Previewer & Cleaner',
      installs: '5M+ Installs',
      installsCount: 5000000,
      category: 'File Management',
      role: 'Feature Development & Performance Tuning',
      rating: '4.5 ★',
      iconBg: 'from-cyan-500/20 to-blue-600/30',
      accentColor: '#06b6d4',
      keyFeatures: [
        'Instant storage analyzer with visual ring chart',
        'High-speed Wi-Fi Direct file sharing',
        'High-speed thumbnail cache for 50,000+ files',
        'Junk cleaner and duplicate file detector',
      ],
      architecture: {
        overview:
          'Lightweight file system manager targeted for emerging markets with minimal memory footprint and fast startup times under 1 second.',
        challenge:
          'Loading 10,000+ images in photo albums caused severe OutOfMemory (OOM) crashes on 2GB RAM budget phones.',
        solution:
          'Integrated custom Glide disk cache strategies with hardware bitmap pooling and recycled view pools.',
        impact:
          'Eliminated OOM crashes across low-end Android 23–28 devices; app cold start optimized to under 900ms.',
        techStack: ['Kotlin', 'MVVM', 'Glide Caching', 'Custom RecycledViewPool', 'Clean Architecture'],
      },
    },
    {
      id: 'vidfetch-downloader',
      name: 'Video Downloader - VidFetch',
      tagline: 'Smart WebView Media Sniffer & Resumable Download Engine',
      installs: '1M+ Installs',
      installsCount: 1000000,
      category: 'Utility & Tools',
      role: 'WebView Engine & Download Pipeline Owner',
      rating: '4.4 ★',
      iconBg: 'from-purple-500/20 to-pink-600/30',
      accentColor: '#a855f7',
      keyFeatures: [
        'In-app WebView media URL detection & MIME sniffing',
        'Parallel segmented resumable download engine',
        'Bandwidth throttling & background resume upon Wi-Fi reconnection',
        'Integrated private video vault with pin protection',
      ],
      architecture: {
        overview:
          'Smart browsing client that intercepts media requests in WebView, detects direct video stream URLs, and launches multithreaded downloads.',
        challenge:
          'Complex JS-heavy websites triggered WebView memory leaks and missed dynamic media manifests.',
        solution:
          'Engineered a custom WebViewClient with resource interception hooks and isolated WebView process management.',
        impact:
          'Achieved over 95% media detection accuracy and 1M+ active installs.',
        techStack: ['Kotlin', 'Android WebView', 'OkHttp Interceptors', 'WorkManager', 'AES-256 Storage'],
      },
    },
    {
      id: 'pixmate-photo',
      name: 'PixMate Photo Collage Maker',
      tagline: 'Photo Editing, Collage Grids & Private Photo Vault',
      installs: '1M+ Installs',
      installsCount: 1000000,
      category: 'Utility & Tools',
      role: 'UI Performance & Image Processing',
      rating: '4.6 ★',
      iconBg: 'from-rose-500/20 to-red-600/30',
      accentColor: '#f43f5e',
      keyFeatures: [
        '100+ customizable collage grid layouts',
        'Real-time GPU photo filters and text overlays',
        'Smooth pinch-to-zoom multi-touch canvas',
        'Secure private photo vault with AES encryption',
      ],
      architecture: {
        overview:
          'Creative photo editing app with custom canvas gesture handlers and high-resolution rendering pipeline.',
        challenge:
          'High memory allocation when compositing 9 high-res photos on mobile canvas triggered Garbage Collection stutter.',
        solution:
          'Implemented bitmap sub-sampling and GPU shader acceleration via RenderScript/OpenGLES shader passes.',
        impact:
          'Zero dropped frames during live canvas transformation and 1M+ installs on Google Play.',
        techStack: ['Java', 'Kotlin', 'Custom Canvas Views', 'OpenGLES / Shaders', 'Biometrics'],
      },
    },
    {
      id: 'gocleaner-storage',
      name: 'GoCleaner - Junk Storage Cleaner',
      tagline: 'Deep Storage Scans, Duplicate Eliminator & Private Locker',
      installs: '100K+ Installs',
      installsCount: 100000,
      category: 'File Management',
      role: 'File System Scanning & Background Optimization',
      rating: '4.5 ★',
      iconBg: 'from-emerald-500/20 to-green-600/30',
      accentColor: '#22c55e',
      keyFeatures: [
        'Heuristic app cache and residual file scanner',
        'MD5-based duplicate photo and file detection',
        'Large file scanner with interactive preview',
        'App uninstaller with batch removal support',
      ],
      architecture: {
        overview:
          'High-speed Android storage cleanup utility designed for fast indexation without draining battery.',
        challenge: 'Deep file system scans drained battery and triggered StrictMode violations.',
        solution: 'Implemented throttled background scanning using Coroutines Dispatchers.IO with yield checks.',
        impact: 'Maintained 0.2% ANR threshold and received positive user ratings.',
        techStack: ['Kotlin', 'Coroutines', 'File IO', 'Room', 'Battery Optimization APIs'],
      },
    },
    {
      id: 'doc-scanner',
      name: 'Doc Scanner & File Manager',
      tagline: 'Document Scanning, Auto-Edge Detection & Multipage PDF Export',
      installs: '10K+ Installs',
      installsCount: 10000,
      category: 'Utility & Tools',
      role: 'Camera & Document Processing',
      rating: '4.6 ★',
      iconBg: 'from-sky-500/20 to-indigo-600/30',
      accentColor: '#0ea5e9',
      keyFeatures: [
        'CameraX integration with live edge detection',
        'Perspective transform and contrast filters',
        'Multi-page PDF generation with password protection',
        'OCR text extraction integration',
      ],
      architecture: {
        overview:
          'Mobile document scanner enabling users to digitize receipts, IDs, and multi-page documents to PDF.',
        challenge: 'Perspective correction caused frame drops on low-tier cameras.',
        solution: 'Utilized CameraX ImageAnalysis analyzer with downsampled CV contour points.',
        impact: 'Delivered sub-100ms auto-edge snapping.',
        techStack: ['Kotlin', 'CameraX', 'PDFDocument API', 'OpenCV wrappers', 'MVVM'],
      },
    },
  ] as AppProject[],

  featuredProject: {
    id: 'fit-app',
    name: 'Fit App (Jetpack Compose)',
    tagline: 'Modern Fitness & Workout Tracker built 100% with Jetpack Compose & Clean Architecture',
    screensCount: '20+ Compose Screens',
    status: 'Featured Architecture Project',
    description:
      'Engineered an offline-first fitness tracking app with 20+ Jetpack Compose screens covering workout logging, interactive progress charts, BMI calculator, daily step targets, and scheduled reminders. Architected using MVVM, StateFlow, Room DB with MVI unidirectional data flow.',
    techStack: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Room Database',
      'StateFlow & Coroutines',
      'Navigation Compose',
      'Hilt Dependency Injection',
    ],
  },

  skills: [
    {
      title: 'Languages & UI Frameworks',
      skills: [
        { name: 'Kotlin', level: 'Expert', context: 'Primary language for 6+ years; Coroutines, Flow, DSLs' },
        { name: 'Java', level: 'Expert', context: 'Core Android SDK, legacy migration, native interop' },
        { name: 'Jetpack Compose', level: 'Expert', context: 'Declarative UI, State, Animations, Custom Modifiers' },
        { name: 'XML Layouts & Material 3', level: 'Expert', context: 'Complex ConstraintLayout, RecyclerView, Themes' },
        { name: 'Android TV & Leanback', level: 'Advanced', context: 'D-pad navigation, Leanback UI components' },
      ],
    },
    {
      title: 'Architecture & Async',
      skills: [
        { name: 'MVVM & Clean Architecture', level: 'Expert', context: 'Unidirectional data flow, clean separation of concerns' },
        { name: 'Kotlin Coroutines & Flow', level: 'Expert', context: 'StateFlow, SharedFlow, Dispatchers optimization' },
        { name: 'Room Database', level: 'Expert', context: 'Offline-first caching, Migrations, Flow observation' },
        { name: 'Retrofit & REST APIs', level: 'Expert', context: 'OkHttp interceptors, error mapping, network cache' },
        { name: 'WorkManager', level: 'Expert', context: 'Guaranteed background tasks, chained workers, constraints' },
      ],
    },
    {
      title: 'Media, Files & ANR Optimization',
      skills: [
        { name: 'ExoPlayer / Media3', level: 'Expert', context: 'Streaming, caching, custom renderers, audio focus' },
        { name: 'ANR Debugging & StrictMode', level: 'Expert', context: 'Reduced ANR to 0.25%, main-thread profiler, traces' },
        { name: 'Resumable Download Engine', level: 'Expert', context: 'Chunked multi-thread transfers, auto-resume' },
        { name: 'SAF & Scoped Storage', level: 'Expert', context: 'Targeted Android 36 API, zero deprecation warnings' },
        { name: 'WebView Media Sniffing', level: 'Advanced', context: 'Resource interception, memory leak prevention' },
      ],
    },
    {
      title: 'Monetization, Delivery & Tools',
      skills: [
        { name: 'AdMob Architecture', level: 'Expert', context: 'Preload & cooldown flows (+92% fill rate, 99.9% crash cut)' },
        { name: 'Play Console & Releases', level: 'Expert', context: '150+ production releases, staged rollouts, vitals' },
        { name: 'Firebase Suite', level: 'Expert', context: 'Crashlytics, Remote Config, Analytics, Cloud Messaging' },
        { name: 'Hilt, Dagger & Koin', level: 'Expert', context: 'Scalable modular dependency injection' },
        { name: 'Google Play Billing (IAP)', level: 'Advanced', context: 'Subscriptions, one-time purchases, entitlement checks' },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      title: 'Senior Android Developer',
      company: 'Rareprob Solutions',
      location: 'Dehradun, India',
      period: 'May 2025 – Present',
      type: 'Full-time',
      summary:
        'Technical ownership of core architecture, ANR vitals reduction, Android 36 SDK migration, and monetization reliability across 20+ consumer Google Play apps.',
      highlights: [
        'Diagnosed and fixed ANRs across WebView, ad SDKs, media, and RecyclerView flows using Google Play Console vitals, StrictMode, and Android Studio profiling — maintaining ANRs under 0.25%.',
        'Built AdMob preload, cooldown, and lifecycle-aware banner & interstitial flows in 20+ apps, raising ad fill rate by 92% and slashing ad crashes by 99.9%.',
        'Upgraded all apps to target Android 36 API level by modernizing storage permissions, navigation, and background worker logic, eliminating 100% of Play Console warnings.',
        'Shipped 150+ production releases with 99.9% crash-free user rate and zero major rollout regressions.',
        'Led migration of legacy XML layouts to Jetpack Compose, reducing boilerplate UI code by up to 30% and speeding up feature delivery.',
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'ExoPlayer / Media3', 'AdMob', 'StrictMode', 'Android 36 API', 'Hilt'],
    },
    {
      title: 'Android Developer',
      company: 'Rareprob Solutions',
      location: 'Dehradun, India',
      period: 'Mar 2022 – Mar 2025',
      type: 'Full-time',
      summary:
        'Engineered high-scale media playback, storage, and utility apps; optimized cold start and memory footprints across 1600+ physical device configurations.',
      highlights: [
        'Implemented MVVM and repository patterns with Coroutines and Flow across all apps, lowering screen cold start to <1 sec and crash rate to <0.1%.',
        'Engineered the segmented resumable download manager and WebView media sniffer for Video Downloader - VidFetch (1M+ installs).',
        'Built subtitle translation, casting, and playlist playback features for HD Video Player All Formats (100M+ installs).',
        'Developed ZIP compression and PDF viewing engines in File Manager (10M+ installs).',
        'Fixed memory leaks and main-thread I/O bottlenecks, eliminating 99.9% of OutOfMemory crashes across Android 23–36 devices.',
      ],
      tech: ['Kotlin', 'Java', 'MVVM', 'Coroutines Flow', 'WorkManager', 'Room', 'Glide', 'Git'],
    },
    {
      title: 'Software Engineer',
      company: 'Rareprob Solutions',
      location: 'Dehradun, India',
      period: 'Jun 2020 – Mar 2022',
      type: 'Full-time',
      summary:
        'Developed native Android features in Java and Kotlin, integrated Firebase analytics and monetization SDKs, and spearheaded Java-to-Kotlin modernization.',
      highlights: [
        'Developed Android UI screens in Java and Kotlin for consumer media, image editing, and file utility apps.',
        'Migrated legacy Java codebases to Kotlin, introducing ViewModel and lifecycle-aware architectures for cleaner lifecycle handling.',
        'Integrated AdMob banners/interstitials and Firebase Crashlytics to monitor live crashes during Google Play rollouts.',
      ],
      tech: ['Java', 'Kotlin', 'Android SDK', 'Firebase Crashlytics', 'AdMob', 'XML'],
    },
  ] as WorkRole[],

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      field: 'Computer Science',
      institution: 'Graphic Era Deemed to be University',
      period: '2022 – 2024',
    },
    {
      degree: "Master's Degree (M.Sc)",
      field: 'Computer Science',
      institution: 'Chaudhary Charan Singh University',
      period: '2020 – 2022',
    },
    {
      degree: "Bachelor's Degree (B.Sc)",
      field: 'Computer Science',
      institution: 'Chaudhary Charan Singh University',
      period: '2017 – 2020',
    },
  ] as EducationItem[],
};
