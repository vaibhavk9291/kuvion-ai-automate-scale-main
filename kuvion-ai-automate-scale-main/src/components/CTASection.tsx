import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8 section-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            Limited availability
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            Ready to <span className="glow-text">automate</span> your startup?
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Book a free strategy call and discover how AI can transform your operations.
          </p>

          <div className="pt-4 section-fade-in animate-delay-100">
            <button
              data-cal-link="pixonx-ai-rr9on1/30min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="btn-primary text-lg px-10 py-5 group"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground section-fade-in animate-delay-200">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Free 30-min call
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Custom proposal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
