'use client';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

const StarryBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine); // load lightweight engine
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: '#000' } },
        particles: {
          number: { value: 100 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.8 },
          size: { value: 1.5 },
          move: { enable: true, speed: 0.2 },
        },
      }}
    />
  );
};

export default StarryBackground;
