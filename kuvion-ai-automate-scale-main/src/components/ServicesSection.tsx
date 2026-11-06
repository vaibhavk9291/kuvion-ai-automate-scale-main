import { Feature72 } from '@/components/ui/feature-72';

const ServicesSection = () => {
  return (
    <div id="services">
      <Feature72
        heading="Our Services"
        taglineBadge="Services"
        description="From viral short-form content editing and high-end motion graphics to AI growth systems and turnkey mobile apps."
        linkText="Book a Strategy Call"
        linkUrl="#contact"
        features={[
          {
            id: 'digital-marketing',
            title: 'Digital Marketing',
            category: 'AI MARKETING',
            icon: (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ),
            points: [
              'Digital marketing & growth strategy',
              'High-converting online campaigns',
              'Audience targeting & funnels',
              'Performance tracking & analytics',
            ],
            action: {
              text: 'Explore Growth Strategy',
              url: '#contact',
            },
          },
          {
            id: 'short-form-content-editing',
            title: 'Short-Form Content Editing',
            category: 'REELS & SHORTS',
            icon: (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 8l5 3.5-5 3.5V8z" fill="currentColor" />
              </svg>
            ),
            points: [
              'Vertical reels, TikToks & Shorts',
              'Hook optimization & retention pacing',
              'Dynamic kinetic captions & presets',
              'Visual punch-ins, B-roll & SFX',
            ],
            action: {
              text: 'Watch Live Video Showcase',
              url: '#video-showcase',
            },
          },
          {
            id: 'content-creation',
            title: 'Content Creation',
            category: 'CONTENT CREATION',
            icon: (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
            ),
            points: [
              'High-converting social media creatives',
              'Carousel graphics & promotional banners',
              'Engaging captions & content calendars',
              'Creative concepts & brand storytelling',
            ],
            action: {
              text: 'View Creative Solutions',
              url: '#contact',
            },
          },
          {
            id: 'video-editing-motion-graphics',
            title: 'Video Editing & Motion Graphics',
            category: 'POST-PRODUCTION',
            icon: (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            ),
            points: [
              'High-end commercial & real estate edits',
              'Vox-style documentary & motion graphics',
              'Cinematic color grading & stabilization',
              'Multi-track sound design & mastering',
            ],
            action: {
              text: 'View Before & After Reel',
              url: '#video-showcase',
            },
          },
          {
            id: 'branding-strategy',
            title: 'Branding & Strategy',
            category: 'BRANDING & STRATEGY',
            icon: (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ),
            points: [
              'Strategic brand positioning & identity',
              'Creative direction & visual consistency',
              'Social media aesthetic & style guide',
              'Market research & competitor benchmarking',
            ],
            action: {
              text: 'Build Brand Identity',
              url: '#contact',
            },
          },
          {
            id: 'app-development',
            title: 'App Development',
            category: 'IOS & ANDROID',
            icon: (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18h.01" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            points: [
              'Complete iOS & Android mobile apps',
              'UI/UX design & interactive prototypes',
              'Backend APIs & cloud database setup',
              'App Store & Google Play launch support',
            ],
            action: {
              text: 'Watch Live App Demos',
              url: '#app-showcase',
            },
          },
        ]}
      />
    </div>
  );
};

export default ServicesSection;
