const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 section-fade-in">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
              Startups waste{' '}
              <span className="glow-text">50% of their time</span>{' '}
              on repetitive tasks
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Support, onboarding, CRM updates, emails and content. Pixonx AI replaces these tasks with autonomous systems.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 section-fade-in animate-delay-200">
            {[
              { value: '50%', label: 'Time saved on repetitive tasks' },
              { value: '10×', label: 'Faster response to leads' },
              { value: '24/7', label: 'Autonomous operation' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card-hover p-8 text-center"
              >
                <div className="font-display font-bold text-4xl md:text-5xl glow-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
