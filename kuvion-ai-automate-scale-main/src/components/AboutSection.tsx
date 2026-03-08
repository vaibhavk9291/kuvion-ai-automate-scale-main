import { About3 } from '@/components/ui/about-3';

const AboutSection = () => {
  return (
    <div id="about">
      <About3
        title="About Pixonx AI Studio"
        description="We're an AI-powered marketing studio focused on growth systems. We combine cutting-edge AI technology with creative strategy to help businesses scale through intelligent automation, compelling content, and high-converting digital experiences."
        mainImage={{
          src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=620&fit=crop',
          alt: 'Team collaborating on marketing strategy',
        }}
        secondaryImage={{
          src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
          alt: 'Creative workspace with analytics',
        }}
        breakout={{
          src: '/pixonx-full-logo.png',
          alt: 'Pixonx AI Studio',
          title: 'AI-powered growth for modern brands',
          description:
            'From campaign strategy to website funnels, we deliver end-to-end marketing systems that drive measurable results.',
          buttonText: 'Book a Call',
          buttonUrl: '#contact',
        }}
        companiesTitle="Trusted by growing brands"
        companies={[
          {
            src: 'https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg',
            alt: 'TechStartup',
          },
          {
            src: 'https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg',
            alt: 'GrowthCo',
          },
          {
            src: 'https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg',
            alt: 'ScaleUp',
          },
          {
            src: 'https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg',
            alt: 'BrandForge',
          },
          {
            src: 'https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg',
            alt: 'VentureX',
          },
          {
            src: 'https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg',
            alt: 'NexGen',
          },
        ]}
        achievementsTitle="Our Growth in Numbers"
        achievementsDescription="Real results from real campaigns — here's how we've helped businesses grow with AI-powered marketing systems."
        achievements={[
          { label: 'Brands Scaled', value: '50+' },
          { label: 'Campaigns Launched', value: '200+' },
          { label: 'Client Satisfaction', value: '98%' },
          { label: 'Revenue Generated', value: '₹5Cr+' },
        ]}
      />
    </div>
  );
};

export default AboutSection;
