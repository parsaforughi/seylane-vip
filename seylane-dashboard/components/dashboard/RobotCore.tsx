'use client';

import { useEffect } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from '@/components/providers/language-provider';

const modules = ['overview', 'explainer', 'autodm', 'iceball'] as const;
type ModuleKey = (typeof modules)[number];

const moduleSelectors: Record<ModuleKey, string[]> = {
  overview: ['a[href="/dashboard"]'],
  explainer: ['a[href="/explainer"]'],
  autodm: ['a[href="/autodm"]'],
  iceball: ['a[href="/iceball"]'],
};

const moduleOffsets: Record<ModuleKey, { x: number; y: number }> = {
  overview: { x: 0, y: 0 },
  explainer: { x: -12, y: -4 },
  autodm: { x: 12, y: 4 },
  iceball: { x: 8, y: -10 },
};

export function RobotCore() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pupilX = useSpring(pointerX, { stiffness: 140, damping: 18 });
  const pupilY = useSpring(pointerY, { stiffness: 140, damping: 18 });
  const { t } = useTranslation();

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      pointerX.set(x * 14);
      pointerY.set(y * 10);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [pointerX, pointerY]);

  useEffect(() => {
    const unsubscribes: Array<() => void> = [];
    modules.forEach((key) => {
      moduleSelectors[key].forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
          const enter = () => {
            const offset = moduleOffsets[key];
            pointerX.set(offset.x);
            pointerY.set(offset.y);
          };
          const leave = () => {
            pointerX.set(0);
            pointerY.set(0);
          };
          element.addEventListener('mouseenter', enter);
          element.addEventListener('mouseleave', leave);
          unsubscribes.push(() => {
            element.removeEventListener('mouseenter', enter);
            element.removeEventListener('mouseleave', leave);
          });
        });
      });
    });
    return () => unsubscribes.forEach((unsub) => unsub());
  }, [pointerX, pointerY]);

  return (
    <div className="flex w-full justify-center">
      <m.div
        className="relative flex h-60 w-60 items-center justify-center"
        animate={{ scale: [1, 1.015, 1], y: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative h-60 w-60 rounded-full bg-gradient-to-br from-purple-300 via-blue-300 to-cyan-200 p-5 shadow-[0_30px_60px_rgba(41,98,255,0.25)]">
          <div className="absolute inset-4 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute inset-2 rounded-full border border-white/30" />
          <div className="absolute left-1/2 top-[30%] h-14 w-36 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-16 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-xl" />
          <div className="absolute inset-0 flex items-center justify-center gap-12">
            {['left', 'right'].map((side) => (
              <div key={side} className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute h-full w-full rounded-full bg-white shadow-[inset_0_-6px_12px_rgba(0,0,0,0.08)]" />
                <m.div
                  style={{ x: pupilX, y: pupilY }}
                  className="relative flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-gradient-to-b from-cyan-500 to-blue-700 shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute h-3.5 w-3.5 rounded-full bg-[#080a23]" />
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                </m.div>
              </div>
            ))}
          </div>
        </div>
      </m.div>
      <span className="sr-only">{t('hero.sprite.label')}</span>
    </div>
  );
}
