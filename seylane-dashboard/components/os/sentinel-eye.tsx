'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from '@/components/providers/language-provider';
import { useLanguageStore } from '@/lib/state/language-store';
import { RobotCore } from '@/components/dashboard/RobotCore';

const PARTICLE_COUNT = 120;

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  driftX: number;
  driftY: number;
}

export function SentinelEye() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const smoothX = useSpring(parallaxX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(parallaxY, { stiffness: 80, damping: 20 });
  const { t } = useTranslation();
  const language = useLanguageStore((state) => state.currentLanguage);
  const isRTL = language === 'fa';

  useEffect(() => {
    const initialParticles = Array.from({ length: PARTICLE_COUNT }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      driftX: (Math.random() - 0.5) * 0.3,
      driftY: (Math.random() - 0.5) * 0.3,
    }));
    setParticles(initialParticles);
  }, []);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.driftX + 100) % 100,
          y: (particle.y + particle.driftY + 100) % 100,
          opacity: 0.1 + Math.abs(Math.sin((particle.x + particle.y + Date.now() / 1000) / 14)) * 0.25,
        })),
      );
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    parallaxX.set((x / rect.width) * 20);
    parallaxY.set((y / rect.height) * 20);
  };

  const handleMouseLeave = () => {
    parallaxX.set(0);
    parallaxY.set(0);
  };

  const metrics = useMemo(
    () => [
      { label: t('hero.metrics.load'), value: '62%' },
      { label: t('hero.metrics.uptime'), value: '99.7%' },
      { label: t('hero.metrics.sync'), value: '04:12 UTC' },
      { label: t('hero.metrics.operator'), value: t('hero.metrics.operatorValue') },
    ],
    [t],
  );

  return (
    <m.div
      ref={containerRef}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-8 text-center shadow-glass"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            className="absolute rounded-full bg-cyan-100"
          />
        ))}
      </div>
      <div className="relative space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">{t('hero.subtitle')}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{t('hero.title')}</h1>
          <p className="mx-auto max-w-3xl text-white/70">{t('hero.description')}</p>
        </div>
        <div className="flex justify-center">
          <RobotCore />
        </div>
        <div className={`mx-auto grid w-full gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}
