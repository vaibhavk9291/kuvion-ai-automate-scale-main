import { Search, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Audit',
    description: 'We analyze your workflows, identify bottlenecks, and map automation opportunities.',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Automate',
    description: 'We build and deploy custom AI systems tailored to your specific needs and integrations.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Scale',
    description: 'Your AI systems handle growth while you focus on strategy and high-value work.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            How it <span className="glow-text">works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From audit to automation in 7 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 -translate-y-1/2" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative section-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="glass-card-hover p-8 text-center space-y-4 relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <span className="text-5xl font-display font-bold text-muted/30">
                  {step.number}
                </span>
                
                <h3 className="font-display font-semibold text-2xl text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Delivery note */}
        <div className="text-center mt-12 section-fade-in animate-delay-400">
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-card text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            Average delivery: 7 days
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
