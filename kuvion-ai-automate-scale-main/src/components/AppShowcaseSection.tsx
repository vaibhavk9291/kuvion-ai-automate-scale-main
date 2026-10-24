import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2, Sparkles, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';

interface AppDemo {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  videoSrc: string;
  features: string[];
  techStack: string[];
}

const APP_DEMOS: AppDemo[] = [
  {
    id: 'onboarding-mascot-flow',
    title: 'Gamified Onboarding & Mascot Experience',
    category: 'ONBOARDING & AI FLOW',
    badge: 'Mascot & Onboarding',
    description:
      'Step-by-step personalized onboarding flow with an interactive animated mascot that reacts to user selections, dynamic cues, and voice practice.',
    videoSrc: '/videos/output_progressive_aa58dd93-e06a-447d-badb-cc1882031f09.mp4',
    features: [
      'Reactive animated character mascot',
      'Personalized multi-step flow',
      'Adaptive voice & cue card prompts',
      'High-conversion drop-off protection',
    ],
    techStack: ['iOS & Android', 'Lottie / Rive', 'Voice UI'],
  },
  {
    id: 'interactive-practice-mascot',
    title: 'Daily Practice & Habit Loop System',
    category: 'RETENTION & MASCOT',
    badge: 'Interactive Mascot',
    description:
      'Micro-learning & daily streak experience featuring a lively animated mascot, iOS home-screen widgets, and fast friction-free learning loops.',
    videoSrc: '/videos/output_progressive_38ec0a46-826f-457d-96a8-e81d63680f68.mp4',
    features: [
      'Blinking & expressive companion mascot',
      'Daily topic cards & streak retention',
      'iOS home-screen widget integration',
      'Feynman technique practice modules',
    ],
    techStack: ['React Native / Swift', 'iOS Widgets', '60 FPS'],
  },
  {
    id: 'fluid-splash-launch',
    title: 'Native Launch & Micro-Interactions',
    category: 'UI/UX & MOTION',
    badge: 'Splash & Dynamic Island',
    description:
      'Smooth app launch with custom animated splash screen, dynamic island integration, and seamless transitions directly into the app state.',
    videoSrc: '/videos/output_progressive_83194bb2-9f51-4a45-a5e7-1582f79949fd.mp4',
    features: [
      'Instant-load branded splash motion',
      'Dynamic Island & status bar styling',
      'Zero-latency native responsiveness',
      'Clean typography & minimal palette',
    ],
    techStack: ['Native Performance', 'Custom Motion', 'Store-Ready'],
  },
];

interface VideoCardProps {
  demo: AppDemo;
}

const VideoCard: React.FC<VideoCardProps> = ({ demo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="group relative flex flex-col rounded-3xl bg-[#0F0F11] border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-[1.015]">
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Video Viewport Container */}
      <div
        onClick={togglePlay}
        className="relative w-full h-[460px] bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
      >
        {/* Background glow behind video */}
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

        <video
          ref={videoRef}
          src={demo.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-contain pointer-events-auto"
        />

        {/* Video Overlay Badges & Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-medium text-white shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {demo.badge}
          </span>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
              title={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={handleFullscreen}
              className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
              title="Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center Play/Pause button on pause or hover */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110">
              <Play className="w-7 h-7 ml-1" />
            </div>
          </div>
        )}

        {/* Bottom subtle hint */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/60 pointer-events-none">
          <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
            {isPlaying ? 'Click video to pause' : 'Click to resume'}
          </span>
          <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
            Interactive Preview
          </span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-6 md:p-7 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#0F0F11] to-[#0A0A0C]">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-semibold tracking-wider text-blue-400 uppercase">
              {demo.category}
            </span>
            <div className="flex items-center gap-1.5">
              {demo.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
            {demo.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {demo.description}
          </p>

          {/* Key Feature Bullets */}
          <ul className="space-y-2 mb-6">
            {demo.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-[13px] text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer action */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-blue-400" />
            Ready for App Store & Play Store
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-blue-400 transition-colors group/link"
          >
            Build this
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AppShowcaseSection = () => {
  return (
    <section id="app-showcase" className="py-24 bg-[#0A0A0C] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            App Development Portfolio
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Real Apps, Crazy Animations & Custom Mascots
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Here is a direct look at the mobile experiences we build. From gamified mascot interactions to 60 FPS onboarding flows — ready to launch on iOS and Android.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {APP_DEMOS.map((demo) => (
            <VideoCard key={demo.id} demo={demo} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900/30 via-neutral-900 to-purple-900/30 border border-white/15 p-8 md:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Have an app idea with custom mascots or animations?
              </h3>
              <p className="text-sm text-gray-300 max-w-lg">
                We handle end-to-end design, UI/UX, cross-platform code, backend databases, and submission to the Apple App Store & Google Play.
              </p>
            </div>

            <button
              onClick={() => {
                const calTrigger = document.getElementById('hero-cal-trigger');
                if (calTrigger) {
                  calTrigger.click();
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="shrink-0 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all shadow-xl flex items-center gap-2"
            >
              Book App Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
