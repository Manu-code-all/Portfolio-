'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
}

/**
 * Wraps its children (a button or link) with a canvas overlay that bursts a
 * handful of accent-colored particles on hover. Kokonut-UI-inspired
 * "particle-button" pattern, re-skinned to the site's own accent tokens.
 * No-ops entirely under prefers-reduced-motion.
 */
export function ParticleButton({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf: number | null = null;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const size = () => {
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width * 1.8 * dpr;
      canvas.height = rect.height * 1.8 * dpr;
    };
    size();

    const spawn = () => {
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: w / 2 + (Math.random() - 0.5) * w * 0.5,
          y: h * 0.65 + (Math.random() - 0.5) * h * 0.2,
          vx: (Math.random() - 0.5) * 0.6 * dpr,
          vy: (-0.4 - Math.random() * 0.9) * dpr,
          r: (1.2 + Math.random() * 1.8) * dpr,
          life: 1,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.018;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = '#ffb877';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      particles = particles.filter((p) => p.life > 0);
      if (particles.length) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const onEnter = () => {
      size();
      spawn();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    wrapper.addEventListener('mouseenter', onEnter);
    window.addEventListener('resize', size);

    return () => {
      wrapper.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('resize', size);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span ref={wrapperRef} className="particle-btn">
      {children}
      <canvas ref={canvasRef} aria-hidden="true" />
    </span>
  );
}
