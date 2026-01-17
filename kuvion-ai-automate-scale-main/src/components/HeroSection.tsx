import HolographicCube from './HolographicCube';

const HeroSection = () => {
  const services = ['Chatbots', 'Voice AI', 'Workflows', 'CRM Integrations', 'AI Ads'];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 section-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              AI systems that{' '}
              <span className="glow-text">eliminate manual work</span>{' '}
              and increase revenue — automatically.
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed section-fade-in animate-delay-100">
              We build AI chatbots, voice agents, workflow automation and AI-generated content engines that help startups scale 10× without hiring.
            </p>

            <div className="flex flex-wrap gap-4 section-fade-in animate-delay-200">
              <button
                onClick={() => (window as any).Cal?.("modal", "30min", { layout: "month_view", theme: "dark" })}
                className="btn-primary"
              >
                Book Strategy Call
              </button>
              <button className="btn-secondary">
                See Demo
              </button>
            </div>

            {/* Service tags */}
            <div className="flex flex-wrap gap-3 pt-4 section-fade-in animate-delay-300">
              {services.map((service, i) => (
                <span
                  key={service}
                  className="px-4 py-2 text-sm text-muted-foreground glass-card"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Holographic cube */}
          <div className="flex justify-center lg:justify-end section-fade-in animate-delay-400">
            <HolographicCube />
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
