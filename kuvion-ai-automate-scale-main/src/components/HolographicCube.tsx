const HolographicCube = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse-glow" />
      
      {/* Cube container */}
      <div className="relative w-full h-full animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
        {/* Cube faces */}
        {[
          { transform: 'translateZ(80px)', gradient: 'from-primary/30 to-accent/20' },
          { transform: 'rotateY(180deg) translateZ(80px)', gradient: 'from-accent/30 to-primary/20' },
          { transform: 'rotateY(90deg) translateZ(80px)', gradient: 'from-primary/20 to-accent/30' },
          { transform: 'rotateY(-90deg) translateZ(80px)', gradient: 'from-accent/20 to-primary/30' },
          { transform: 'rotateX(90deg) translateZ(80px)', gradient: 'from-primary/25 to-accent/25' },
          { transform: 'rotateX(-90deg) translateZ(80px)', gradient: 'from-accent/25 to-primary/25' },
        ].map((face, i) => (
          <div
            key={i}
            className={`absolute inset-[15%] bg-gradient-to-br ${face.gradient} backdrop-blur-sm border border-white/10 rounded-xl`}
            style={{ 
              transform: face.transform,
              backfaceVisibility: 'visible',
            }}
          >
            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              {Array.from({ length: 9 }).map((_, j) => (
                <div key={j} className="border border-white/5" />
              ))}
            </div>
            
            {/* Center glow */}
            <div className="absolute inset-1/4 bg-gradient-to-br from-primary/40 to-accent/40 rounded-lg blur-sm" />
          </div>
        ))}
        
        {/* Inner core */}
        <div 
          className="absolute inset-[35%] bg-gradient-to-br from-primary to-accent rounded-lg opacity-60 blur-sm"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>
      
      {/* Floating particles around cube */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full animate-float"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default HolographicCube;
