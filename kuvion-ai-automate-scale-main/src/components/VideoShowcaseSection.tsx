import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';

type TabType = 'short-video' | 'motion-graphic';

interface ReelPair {
  id: string;
  title: string;
  rawSrc: string;
  finalSrc: string;
}

const REEL_PAIRS: ReelPair[] = [
  {
    id: 'reel-1',
    title: 'Client Reel 01 • Agent Property Tour',
    rawSrc: '/videos/showcase/realestate-raw-klickpin.mp4',
    finalSrc: '/videos/showcase/realestate-final-klickpin.mp4',
  },
  {
    id: 'reel-2',
    title: 'Client Reel 02 • Luxury Home Walkthrough',
    rawSrc: '/videos/showcase/realestate-raw-herriman.mp4',
    finalSrc: '/videos/showcase/realestate-final-herriman.mp4',
  },
];

interface StaggeredPhonePairProps {
  pair: ReelPair;
}

const StaggeredPhonePair: React.FC<StaggeredPhonePairProps> = ({ pair }) => {
  const rawVideoRef = useRef<HTMLVideoElement>(null);
  const finalVideoRef = useRef<HTMLVideoElement>(null);

  const [isRawMuted, setIsRawMuted] = useState(true);
  const [isFinalMuted, setIsFinalMuted] = useState(true);

  return (
    <div className="flex flex-col items-center">
      {/* Minimal clean title */}
      <h3 className="text-sm font-medium tracking-wide text-neutral-400 mb-6 text-center">
        {pair.title}
      </h3>

      {/* Staggered Parallel Phone Mockup Composition */}
      <div className="relative w-full max-w-[460px] h-[520px] sm:h-[580px] flex items-center justify-center">
        {/* PHONE 1: RAW VIDEO (Left, positioned slightly higher) */}
        <div className="absolute left-2 sm:left-4 top-2 sm:top-4 z-0 w-[190px] sm:w-[230px] aspect-[9/16] rounded-[28px] sm:rounded-[34px] bg-[#0E0E11] p-1.5 sm:p-2 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
          {/* Badge: ● RAW VIDEO */}
          <div className="absolute -top-3 left-4 z-30">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FEF08A] text-black font-bold text-[10px] tracking-wide uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              RAW VIDEO
            </div>
          </div>

          {/* Screen */}
          <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-black">
            <video
              ref={rawVideoRef}
              src={pair.rawSrc}
              autoPlay
              loop
              muted={isRawMuted}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover filter brightness-90"
            />

            {/* Subtle Audio Toggle */}
            <button
              onClick={() => {
                if (!rawVideoRef.current) return;
                const next = !isRawMuted;
                rawVideoRef.current.muted = next;
                setIsRawMuted(next);
              }}
              className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 flex items-center justify-center hover:bg-black/90 transition-all"
              title={isRawMuted ? 'Unmute' : 'Mute'}
            >
              {isRawMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-yellow-300" />}
            </button>
          </div>
        </div>

        {/* PHONE 2: FINAL VIDEO (Right, positioned slightly lower & overlapping in front) */}
        <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 z-10 w-[205px] sm:w-[250px] aspect-[9/16] rounded-[30px] sm:rounded-[36px] bg-[#0E0E11] p-1.5 sm:p-2 border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.02]">
          {/* Badge: ● FINAL VIDEO */}
          <div className="absolute -top-3 left-4 z-30">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FEF08A] text-black font-bold text-[10px] tracking-wide uppercase shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              FINAL VIDEO
            </div>
          </div>

          {/* Screen */}
          <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-black">
            <video
              ref={finalVideoRef}
              src={pair.finalSrc}
              autoPlay
              loop
              muted={isFinalMuted}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* Subtle Audio Toggle */}
            <button
              onClick={() => {
                if (!finalVideoRef.current) return;
                const next = !isFinalMuted;
                finalVideoRef.current.muted = next;
                setIsFinalMuted(next);
              }}
              className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 flex items-center justify-center hover:bg-black/90 transition-all"
              title={isFinalMuted ? 'Unmute final audio' : 'Mute'}
            >
              {isFinalMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-yellow-300" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('short-video');
  const motionVideoRef = useRef<HTMLVideoElement>(null);
  const [isMotionMuted, setIsMotionMuted] = useState(true);
  const [isMotionPlaying, setIsMotionPlaying] = useState(true);

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
    <section id="video-showcase" className="py-20 bg-[#09090B] text-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
            Featured Work
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Clean, high-retention video editing and motion graphics crafted for modern brands.
          </p>
        </div>

        {/* Minimal Glass Pill Tab Bar (Exact match to reference image) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('short-video')}
              className={`px-6 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === 'short-video'
                  ? 'bg-white/20 text-white shadow-sm backdrop-blur-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Short video
            </button>
            <button
              onClick={() => setActiveTab('motion-graphic')}
              className={`px-6 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === 'motion-graphic'
                  ? 'bg-white/20 text-white shadow-sm backdrop-blur-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Motion Graphic
            </button>
          </div>
        </div>

        {/* TAB 1: SHORT VIDEO (Total 4 Frames - 2 Staggered Parallel Pairs Visible Together) */}
        {activeTab === 'short-video' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
            {REEL_PAIRS.map((pair) => (
              <div
                key={pair.id}
                className="rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm p-4 sm:p-8"
              >
                <StaggeredPhonePair pair={pair} />
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: MOTION GRAPHIC (Minimal Phone Frame with Vox Video) */}
        {activeTab === 'motion-graphic' && (
          <div className="max-w-md mx-auto flex flex-col items-center">
            <h3 className="text-sm font-medium tracking-wide text-neutral-400 mb-6 text-center">
              Vox-Style Documentary & Kinetic Motion Graphics
            </h3>

            {/* Mobile Phone Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/16] rounded-[34px] bg-[#0E0E11] p-2 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              {/* Screen */}
              <div
                onClick={toggleMotionPlay}
                className="relative w-full h-full rounded-[26px] overflow-hidden bg-black cursor-pointer"
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

                {/* Play/Pause icon when paused */}
                {!isMotionPlaying && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                      <Play className="w-5 h-5 ml-0.5 fill-black" />
                    </div>
                  </div>
                )}

                {/* Audio Controls */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!motionVideoRef.current) return;
                      const next = !isMotionMuted;
                      motionVideoRef.current.muted = next;
                      setIsMotionMuted(next);
                    }}
                    className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-black/90 transition-all"
                    title={isMotionMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMotionMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-yellow-300" />}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!motionVideoRef.current) return;
                      if (motionVideoRef.current.requestFullscreen) {
                        motionVideoRef.current.requestFullscreen();
                      }
                    }}
                    className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-black/90 transition-all"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
