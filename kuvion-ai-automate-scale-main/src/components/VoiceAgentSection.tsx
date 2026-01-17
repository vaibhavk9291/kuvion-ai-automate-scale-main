import { Volume2, Mic, Clock } from 'lucide-react';

const VoiceAgentSection = () => {
  return (
    <section id="voice" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="glass-card p-8 md:p-16 text-center space-y-8">
          {/* Floating icons */}
          <div className="flex justify-center gap-4 mb-8">
            {[Mic, Volume2, Clock].map((Icon, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <Icon className="w-7 h-7 text-primary" />
              </div>
            ))}
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl section-fade-in">
            Talk. Book. Close.{' '}
            <span className="glow-text">24/7.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto section-fade-in animate-delay-100">
            AI voice agents that sound human, qualify leads, answer questions, and schedule demos — even when you sleep.
          </p>

          <div className="pt-4 section-fade-in animate-delay-200">
            <button className="btn-primary text-lg px-8 py-4 group">
              <Volume2 className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Hear Voice Demo
            </button>
          </div>

          {/* Audio waveform visualization */}
          <div className="flex items-center justify-center gap-1 pt-8 opacity-60">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-primary to-accent rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 30 + 10}px`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentSection;
