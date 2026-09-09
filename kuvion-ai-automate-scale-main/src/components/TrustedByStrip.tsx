import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const brands = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

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
          <div className="marquee-track items-center">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-6"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-7 md:h-8 w-auto object-contain select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByStrip;
