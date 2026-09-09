import { Feature72 } from '@/components/ui/feature-72';

const ServicesSection = () => {
  return (
    <div id="services">
      <Feature72
        heading="Our Services"
        taglineBadge="Services"
        description="Comprehensive digital marketing and growth solutions tailored to scale your brand."
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
              'Digital marketing strategy',
              'Online growth campaigns',
              'Campaign planning',
              'Performance analysis',
            ],
          },
          {
            id: 'social-media-management',
            title: 'Social Media Management',
            category: 'SOCIAL MEDIA',
            icon: (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            ),
            points: [
              'Social media strategy',
              'Content planning',
              'Post scheduling',
              'Instagram/Facebook management',
              'Audience engagement',
              'Monthly performance reports',
            ],
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
              'Social media creatives',
              'Reels & short-form video content',
              'Captions',
              'Content calendars',
              'Creative concepts',
              'Promotional content',
            ],
          },
          {
            id: 'paid-advertising',
            title: 'Paid Advertising',
            category: 'PAID ADVERTISING',
            icon: (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
              </svg>
            ),
            points: [
              'Meta/Facebook Ads',
              'Instagram Ads',
              'Campaign setup',
              'Audience targeting',
              'Campaign optimization',
              'Performance reporting',
            ],
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
              'Brand positioning',
              'Brand strategy',
              'Social media branding',
              'Creative direction',
              'Visual consistency',
              'Competitor research',
            ],
          },
          {
            id: 'marketing-consultation',
            title: 'Marketing Consultation',
            category: 'MARKETING CONSULTATION',
            icon: (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            ),
            points: [
              'Digital marketing audit',
              'Growth strategy',
              'Campaign planning',
              'Marketing recommendations',
            ],
          },
        ]}
      />
    </div>
  );
};

export default ServicesSection;
