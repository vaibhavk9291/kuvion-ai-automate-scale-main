import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const logos = ['Slack', 'Zoom', 'Spotify', 'Airbnb', 'Envato', 'Shopify', 'Notion', 'Figma'];

const TrustedByStrip = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`py-12 border-y border-[#E5E7EB] section-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6">
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-8 font-medium">
          Trusted by growing brands
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-[#D1D5DB] text-lg md:text-xl font-semibold whitespace-nowrap select-none hover:text-[#9CA3AF] transition-colors duration-300"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByStrip;
