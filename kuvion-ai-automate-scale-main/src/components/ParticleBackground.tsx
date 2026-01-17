import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 10;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%);
        border-radius: 50%;
        left: ${startX}px;
        bottom: -20px;
        pointer-events: none;
        animation: particle-float ${duration}s linear ${delay}s infinite;
      `;

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, (duration + delay) * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 200);
    }

    // Continuously add particles
    const interval = setInterval(createParticle, 500);

    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
