import { PulseFitHero } from '@/components/ui/pulse-fit-hero';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { AuroraBackground } from '@/components/ui/aurora-background';

const HeroSection = () => {
  return (
    <AuroraBackground className="!h-auto" showRadialGradient={true}>
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 mb-4">
            <h1 className="font-bold text-[clamp(36px,6vw,72px)] leading-[1.1] text-[#1a1a1a] tracking-tight mb-8">
              Grow Faster with AI-Powered Marketing Systems
            </h1>
            <p className="font-normal text-[clamp(16px,2vw,20px)] leading-[1.6] text-[#4a5568] max-w-[600px] mb-8">
              We help businesses grow using AI marketing, UGC ads, social media growth, and high-converting websites.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button
                onClick={() => document.getElementById('hero-cal-trigger')?.click()}
                className="flex flex-row items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 bg-[#1a1a1a] text-[18px] font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              >
                Book Strategy Call
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full transition-all hover:scale-105 border border-[#cbd5e0] text-[18px] font-medium text-[#1a1a1a] bg-transparent"
              >
                Explore Services
              </button>
            </div>
            
            <p className="text-[13px] text-[#718096] italic mt-6">
              *Free 30-minute strategy call — no commitment required
            </p>
          </div>
        }
      >
        {/* The scrolling container content — we'll put the PulseFit program cards inside the scrolling device window */}
        <div className="w-full h-full bg-white relative overflow-hidden flex flex-col items-center justify-center p-8 border border-gray-100">
          <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=720&fit=crop" 
            alt="Dashboard Dashboard"
            className="w-full h-full object-cover rounded-lg border border-gray-200 shadow-sm"
          />
        </div>
      </ContainerScroll>

      {/* Hidden Cal.com trigger */}
      <button
        data-cal-link="pixonx-ai-rr9on1/30min"
        data-cal-config='{"layout":"month_view","theme":"dark"}'
        className="hidden"
        aria-hidden="true"
        id="hero-cal-trigger"
      />
      
      {/* We append the PulseFit programs carousel below the scroll animation */}
      <PulseFitHero
        logo=""
        navigation={[]}
        title=""
        subtitle=""
        className="!min-h-0 -mt-32 pb-20"
        programs={[
          {
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
            category: 'DIGITAL MARKETING',
            title: 'Data-driven campaign strategy',
          },
          {
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop',
            category: 'SOCIAL MEDIA',
            title: 'Instagram & Facebook growth',
          },
          {
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=800&fit=crop',
            category: 'CONTENT CREATION',
            title: 'Reels & creator video content',
          },
          {
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop',
            category: 'PAID ADVERTISING',
            title: 'Performance ad campaigns',
          },
          {
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=800&fit=crop',
            category: 'BRANDING & STRATEGY',
            title: 'Brand identity & positioning',
          },
          {
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop',
            category: 'MARKETING CONSULTATION',
            title: 'Strategic growth audits',
          },
        ]}
      >
        <div className="hidden"></div>
      </PulseFitHero>
    </AuroraBackground>
  );
};

export default HeroSection;
