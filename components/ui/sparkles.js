'use client';

import { useEffect, useRef } from 'react';

export const SparklesCore = ({
  className = '',
  background = 'transparent',
  particleColor = '#e0f2fe', // Brighter blue for contrast
  gradientColors = null,
  minSize = 0.6, // Larger for visibility
  maxSize = 1.2,
  particleDensity = 80,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = width < 640;
    const particles = [];

    // Optimize density: 50% less on mobile, cap at 40
    const adjustedDensity = isMobile ? Math.min(Math.floor(particleDensity * 0.5), 40) : particleDensity;

    // Create gradient if provided
    let gradient = null;
    if (gradientColors) {
      gradient = ctx.createLinearGradient(0, 0, width, height);
      gradientColors.forEach(({ stop, color }) => gradient.addColorStop(stop, color));
    }

    const createParticles = () => {
      for (let i = 0; i < adjustedDensity; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          baseSize: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          speedY: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          opacity: isMobile ? Math.random() * 0.3 + 0.7 : Math.random() * 0.3 + 0.6, // Higher opacity
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const updateParticles = (targetX, targetY) => {
      for (let p of particles) {
        if (isReducedMotion) {
          p.speedX = p.speedY = 0; // Pause motion
        } else {
          // Touch/mouse attraction
          if (targetX !== undefined && targetY !== undefined) {
            const dx = targetX - p.x;
            const dy = targetY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (isMobile ? 80 : 100)) {
              p.speedX += dx * (isMobile ? 0.0008 : 0.001);
              p.speedY += dy * (isMobile ? 0.0008 : 0.001);
            }
          }

          p.x += p.speedX;
          p.y += p.speedY;

          // Twinkle effect
          p.twinklePhase += isMobile ? 0.03 : 0.05;
          p.size = p.baseSize + Math.sin(p.twinklePhase) * (isMobile ? 0.15 : 0.2);
          p.opacity = (isMobile ? 0.7 : 0.6) + Math.sin(p.twinklePhase) * (isMobile ? 0.3 : 0.3);

          // Boundary check
          if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
            p.speedX = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
            p.speedY = (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3);
          }
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient || particleColor;
      ctx.globalAlpha = 1;

      for (let p of particles) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let animationFrameId;
    const animate = () => {
      updateParticles(targetX, targetY);
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Interaction: mouse for desktop, touch for mobile
    let targetX;
    let targetY;
    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
      }
    };
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
      }
    };

    // Fade-in effect: faster on mobile
    let fadeOpacity = 0;
    const fadeIn = () => {
      fadeOpacity += isMobile ? 0.1 : 0.05;
      ctx.globalAlpha = fadeOpacity;
      if (fadeOpacity < 1) {
        requestAnimationFrame(fadeIn);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (gradientColors) {
        gradient = ctx.createLinearGradient(0, 0, width, height);
        gradientColors.forEach(({ stop, color }) => gradient.addColorStop(stop, color));
      }
    };

    window.addEventListener('resize', handleResize);
    if (!isReducedMotion) {
      if (isMobile) {
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
      } else {
        window.addEventListener('mousemove', handleMouseMove);
      }
    }
    createParticles();
    fadeIn();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor, gradientColors, minSize, maxSize, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top - 0 left - 0 ${className} `}
      style={{ background }}
      aria-hidden="true"
    />
  );
};