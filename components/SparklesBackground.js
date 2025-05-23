'use client';

import { SparklesCore } from './ui/sparkles';

const SparklesBackground = () => (
  <div className="absolute inset-0 -z-2 select-none pointer-events-none">
    <SparklesCore
      background="transparent"
      minSize={0.4}
      maxSize={1.0}
      particleDensity={80}
      className="w-full h-full"
      particleColor="#bae6fd"
    />
  </div>
);

export default SparklesBackground;