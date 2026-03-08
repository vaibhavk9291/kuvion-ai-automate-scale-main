import { Feature72 } from '@/components/ui/feature-72';

const ServicesSection = () => {
  return (
    <div id="services">
      <Feature72
        heading="Our Services"
        description="End-to-end AI marketing solutions to help your brand grow. From campaign strategy to website funnels, we deliver systems that drive measurable results."
        linkText="Book a Strategy Call"
        linkUrl="#contact"
        features={[
          {
            id: 'ai-marketing',
            title: 'AI Marketing',
            description:
              'AI-driven marketing campaigns and optimization for maximum growth. Includes AI campaign strategy, ad optimization, creative testing, and performance analytics.',
            image:
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
          },
          {
            id: 'ai-ugc-ads',
            title: 'AI UGC Ads',
            description:
              'AI-generated creator-style advertising content that converts. Includes AI creator ads, product storytelling, short-form ads, and A/B testing.',
            image:
              'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=450&fit=crop',
          },
          {
            id: 'social-media-growth',
            title: 'Social Media Growth',
            description:
              'Structured content systems for sustainable social media growth. Includes reel creation, content calendar, audience growth, and brand visuals.',
            image:
              'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop',
          },
          {
            id: 'website-development',
            title: 'Website Development',
            description:
              'High-converting modern websites designed for business growth. Includes landing pages, e-commerce, SaaS dashboards, and UI/UX design.',
            image:
              'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
          },
        ]}
      />
    </div>
  );
};

export default ServicesSection;
