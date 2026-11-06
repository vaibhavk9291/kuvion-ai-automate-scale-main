import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2, Sparkles, Film, Wand2, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

interface RealEstatePair {
  id: string;
  title: string;
  subtitle: string;
  propertyType: string;
  rawSrc: string;
  finalSrc: string;
  features: string[];
}

const REAL_ESTATE_PAIRS: RealEstatePair[] = [
  {
    id: 'klickpin-presenter',
    title: 'Modern Neighborhood & Luxury Home Tour',
    subtitle: 'Presenter On-Camera Walkthrough with Drone Aerials',
    propertyType: 'Agent Tour & Drone Reel',
    rawSrc: '/videos/showcase/realestate-raw-klickpin.mp4',
    finalSrc: '/videos/showcase/realestate-final-klickpin.mp4',
    features: [
      'Rich warm cinematic color grade',
      'High-contrast kinetic captions ("Finished walkout lower level")',
      'Seamless drone & gimbal cuts',
      'Immersive ambient & upbeat background score',
    ],
  },
  {
    id: 'herriman-interior',
    title: 'Architectural Kitchen & Interior Showcase',
    subtitle: 'Raw Walkthrough to High-End Property Listing',
    propertyType: 'Interior Architectural Tour',
    rawSrc: '/videos/showcase/realestate-raw-herriman.mp4',
    finalSrc: '/videos/showcase/realestate-final-herriman.mp4',
    features: [
      'Exposure balancing & warm wood tone enhancement',
      'Camera stabilization & glidecam smoothing',
      'Dynamic speed ramping between key rooms',
      'Clean architectural aesthetic for luxury buyers',
    ],
  },
];

const VideoShowcaseSection = () => {
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);
  const activePair = REAL_ESTATE_PAIRS[selectedPairIndex];

  // Video refs for real estate before & after
  const rawVideoRef = useRef<HTMLVideoElement>(null);
  const finalVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingPair, setIsPlayingPair] = useState(true);
  const [isFinalMuted, setIsFinalMuted] = useState(true);
  const [isRawMuted, setIsRawMuted] = useState(true);

  // Video ref for motion graphics
  const motionVideoRef = useRef<HTMLVideoElement>(null);
  const [isMotionPlaying, setIsMotionPlaying] = useState(true);
  const [isMotionMuted, setIsMotionMuted] = useState(true);

  // Sync playback between raw and final
  const togglePlayPair = () => {
    const raw = rawVideoRef.current;
    const final = finalVideoRef.current;
    if (!raw || !final) return;

    if (isPlayingPair) {
      raw.pause();
      final.pause();
      setIsPlayingPair(false);
    } else {
      raw.play();
      final.play();
      setIsPlayingPair(true);
    }
  };

  const restartPair = () => {
    const raw = rawVideoRef.current;
    const final = finalVideoRef.current;
    if (!raw || !final) return;
    raw.currentTime = 0;
    final.currentTime = 0;
    raw.play();
    final.play();
    setIsPlayingPair(true);
  };

  // Switch project pair and reset times
  useEffect(() => {
    if (rawVideoRef.current && finalVideoRef.current) {
      rawVideoRef.current.currentTime = 0;
      finalVideoRef.current.currentTime = 0;
      rawVideoRef.current.play().catch(() => {});
      finalVideoRef.current.play().catch(() => {});
      setIsPlayingPair(true);
    }
  }, [selectedPairIndex]);

  // Motion graphics toggle
  const toggleMotionPlay = () => {
    if (!motionVideoRef.current) return;
    if (isMotionPlaying) {
      motionVideoRef.current.pause();
      setIsMotionPlaying(false);
    } else {
      motionVideoRef.current.play();
      setIsMotionPlaying(true);
    }
  };

  return (
    <section id="video-showcase" className="py-24 bg-[#0A0A0C] text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-[450px] h-[350px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <Film className="w-3.5 h-3.5" />
            Video Editing & Motion Graphics Portfolio
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">
            From Raw Footage to Viral, High-Converting Content
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            See the exact difference professional post-production makes. We transform flat, unedited camera captures into retention-optimized real estate reels and immersive Vox-style motion graphic stories.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PART 1: REAL ESTATE BEFORE & AFTER (PARALLEL MOBILE SCREENS)   */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-24 rounded-3xl bg-gradient-to-b from-[#121215] to-[#0D0D10] border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle accent border at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-400 opacity-70" />

          {/* Module Header & Switcher */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Client Case Study
                </span>
                <span className="text-xs text-gray-400">Before & After Side-by-Side</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {activePair.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {activePair.subtitle}
              </p>
            </div>

            {/* Project Pair Tabs & Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-xl bg-black/60 p-1 border border-white/10">
                {REAL_ESTATE_PAIRS.map((pair, idx) => (
                  <button
                    key={pair.id}
                    onClick={() => setSelectedPairIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedPairIndex === idx
                        ? 'bg-amber-400 text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Reel {idx + 1}: {pair.propertyType}
                  </button>
                ))}
              </div>

              {/* Master Sync Play / Pause */}
              <button
                onClick={togglePlayPair}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-all shadow-sm"
              >
                {isPlayingPair ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-300" />
                    Pause Both
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    Play Both
                  </>
                )}
              </button>

              <button
                onClick={restartPair}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs border border-white/15 transition-all"
                title="Replay from start"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TWO PARALLEL MOBILE SCREENS (MATCHING REFERENCE IMAGE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-center mb-10">
            {/* SCREEN 1: RAW VIDEO */}
            <div className="relative flex flex-col items-center">
              {/* Reference yellow pill badge: ● RAW VIDEO */}
              <div className="mb-4 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF08A] text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(254,240,138,0.35)] border border-yellow-200">
                  <span className="w-2 h-2 rounded-full bg-black shrink-0 animate-pulse" />
                  RAW VIDEO
                </div>
              </div>

              {/* Mobile Phone Mockup Frame */}
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[36px] bg-black p-2.5 border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-white/30 hover:scale-[1.01]">
                {/* Speaker pill notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black mr-2 border border-neutral-800" />
                  <div className="w-8 h-1 rounded-full bg-neutral-800" />
                </div>

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <video
                    ref={rawVideoRef}
                    src={activePair.rawSrc}
                    autoPlay
                    loop
                    muted={isRawMuted}
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover filter brightness-95"
                  />

                  {/* Subtle Raw Watermark Banner */}
                  <div className="absolute bottom-4 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-center pointer-events-none">
                    <span className="text-[11px] font-medium text-gray-300">
                      Uncut camera capture • Flat profile • Raw audio
                    </span>
                  </div>

                  {/* Audio toggle button */}
                  <button
                    onClick={() => {
                      if (!rawVideoRef.current) return;
                      const next = !isRawMuted;
                      rawVideoRef.current.muted = next;
                      setIsRawMuted(next);
                      if (!next && finalVideoRef.current) {
                        finalVideoRef.current.muted = true;
                        setIsFinalMuted(true);
                      }
                    }}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                    title={isRawMuted ? 'Unmute Raw Audio' : 'Mute'}
                  >
                    {isRawMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                  </button>
                </div>
              </div>
            </div>

            {/* SCREEN 2: FINAL VIDEO (PROMINENT ELEVATION) */}
            <div className="relative flex flex-col items-center">
              {/* Reference yellow pill badge: ● FINAL VIDEO */}
              <div className="mb-4 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF08A] text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(254,240,138,0.45)] border border-yellow-200">
                  <span className="w-2 h-2 rounded-full bg-black shrink-0 animate-ping" />
                  FINAL VIDEO
                </div>
              </div>

              {/* Mobile Phone Mockup Frame (Slightly larger glow & prominence) */}
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[36px] bg-black p-2.5 border-2 border-amber-400/50 shadow-[0_25px_60px_rgba(250,204,21,0.25)] overflow-hidden transition-all duration-300 hover:border-amber-400 hover:scale-[1.02]">
                {/* Speaker pill notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black mr-2 border border-neutral-800" />
                  <div className="w-8 h-1 rounded-full bg-neutral-800" />
                </div>

                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <video
                    ref={finalVideoRef}
                    src={activePair.finalSrc}
                    autoPlay
                    loop
                    muted={isFinalMuted}
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Highlights banner at bottom */}
                  <div className="absolute bottom-4 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/75 backdrop-blur-md border border-amber-400/30 text-center pointer-events-none">
                    <span className="text-[11px] font-semibold text-amber-300">
                      Color Graded • Kinetic Captions • Sound Design
                    </span>
                  </div>

                  {/* Audio toggle button */}
                  <button
                    onClick={() => {
                      if (!finalVideoRef.current) return;
                      const next = !isFinalMuted;
                      finalVideoRef.current.muted = next;
                      setIsFinalMuted(next);
                      if (!next && rawVideoRef.current) {
                        rawVideoRef.current.muted = true;
                        setIsRawMuted(true);
                      }
                    }}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                    title={isFinalMuted ? 'Unmute Final Video (Hear Music & SFX)' : 'Mute'}
                  >
                    {isFinalMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bullet Breakdown of what we did */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {activePair.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300 leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PART 2: VOX-STYLE MOTION GRAPHICS SHOWCASE IN MOBILE FRAME     */}
        {/* ------------------------------------------------------------- */}
        <div className="rounded-3xl bg-gradient-to-b from-[#121215] to-[#0A0A0D] border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Top subtle indigo glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Phone Mockup Frame with Motion Graphics */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Badge */}
              <div className="mb-4 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF08A] text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(254,240,138,0.4)] border border-yellow-200">
                  <span className="w-2 h-2 rounded-full bg-black shrink-0 animate-pulse" />
                  MOTION GRAPHICS REEL
                </div>
              </div>

              {/* Mobile Phone Frame */}
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[36px] bg-black p-2.5 border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 hover:border-blue-400/60 hover:scale-[1.015]">
                {/* Speaker pill notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black mr-2 border border-neutral-800" />
                  <div className="w-8 h-1 rounded-full bg-neutral-800" />
                </div>

                {/* Inner Screen */}
                <div
                  onClick={toggleMotionPlay}
                  className="relative w-full h-full rounded-[28px] overflow-hidden bg-neutral-950 flex items-center justify-center cursor-pointer select-none"
                >
                  <video
                    ref={motionVideoRef}
                    src="/videos/showcase/motion-graphics-vox.mp4"
                    autoPlay
                    loop
                    muted={isMotionMuted}
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Play overlay when paused */}
                  {!isMotionPlaying && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                        <Play className="w-6 h-6 ml-0.5 fill-black" />
                      </div>
                    </div>
                  )}

                  {/* Top overlay controls */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!motionVideoRef.current) return;
                        const next = !isMotionMuted;
                        motionVideoRef.current.muted = next;
                        setIsMotionMuted(next);
                      }}
                      className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                      title={isMotionMuted ? 'Unmute Sound' : 'Mute'}
                    >
                      {isMotionMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!motionVideoRef.current) return;
                        if (motionVideoRef.current.requestFullscreen) {
                          motionVideoRef.current.requestFullscreen();
                        }
                      }}
                      className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom hint */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/60 pointer-events-none">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {isMotionPlaying ? 'Tap to pause' : 'Tap to resume'}
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      Vox-Style Motion
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Breakdown & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                <Wand2 className="w-3.5 h-3.5" />
                Documentary & Storytelling Style
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Vox-Style Motion Graphics & Kinetic Visual Storytelling
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Turn complex ideas, founder interviews, or tech deep-dives into bingeable visual narratives. We combine tactile paper collage animations, archival footage, analog polaroids, and synced Foley sound design.
              </p>

              {/* Core Motion Graphic Features */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Paper Cutout & Archival Collage Art</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Custom-animated polaroids, yellow highlighter markers, sticky notes, and newspaper grids that command instant attention on social feeds.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Retention Pacing & Kinetic Typography</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Every second is paced to maximize watch time. Highlighted subtitle bars, 2D vector illustrations, and micro-zooms prevent viewer drop-off.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Custom Foley SFX & Audio Mastering</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Tactile paper rustles, mechanical typewriter clicks, tape stops, and cinematic sub-bass whooshes layered to perfection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    const calTrigger = document.getElementById('hero-cal-trigger');
                    if (calTrigger) {
                      calTrigger.click();
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  Get Your Videos Edited
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400">
                  Fast 24–48 hour turnaround on reels
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
