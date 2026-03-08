import FeaturesCards from '@/components/ui/feature-shader-cards';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-[#6B7280] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-[#6B7280] text-[17px] max-w-lg mx-auto">
            Selected projects where AI met creativity to drive real growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <FeaturesCards />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
