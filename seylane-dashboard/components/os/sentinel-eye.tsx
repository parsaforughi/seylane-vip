'use client';

import { useMemo } from 'react';
import { m } from 'framer-motion';
import { useTranslation } from '@/components/providers/language-provider';
import { useLanguageStore } from '@/lib/state/language-store';
import { RobotCore } from '@/components/dashboard/RobotCore';

export function SentinelEye() {
  const { t } = useTranslation();
  const language = useLanguageStore((state) => state.currentLanguage);
  const isRTL = language === 'fa';

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
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171a2b] via-[#111325] to-[#0c0f1f] p-8 text-center shadow-glass"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
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
