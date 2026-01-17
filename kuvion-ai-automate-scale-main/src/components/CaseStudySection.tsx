import { Quote, ArrowRight } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section id="results" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Real <span className="glow-text">results</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto section-fade-in animate-delay-100">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />

            <div className="space-y-6 pl-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                "Pixonx AI automated our entire onboarding flow. What used to take 3 support reps now runs on autopilot. We saved $12K/month and response times went from hours to seconds."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold">JD</span>
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    John Doe
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Founder, TechStartup Inc.
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50 mt-6">
                {[
                  { value: '$12K', label: 'Saved monthly' },
                  { value: '3→0', label: 'Support reps needed' },
                  { value: '< 1s', label: 'Response time' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display font-bold text-xl glow-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 section-fade-in animate-delay-200">
            <button className="btn-secondary group">
              See More Case Studies
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
