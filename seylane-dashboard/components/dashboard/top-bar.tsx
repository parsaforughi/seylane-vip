'use client';

import { LucideBell, LucideWifi, LucideCpu } from 'lucide-react';
import { m } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/components/providers/language-provider';
import { LanguageToggle } from '@/components/language/language-toggle';

export function TopBar() {
  const { t } = useTranslation();

  return (
    <div className="glass-panel flex flex-wrap items-center justify-between gap-4 border-white/5 px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t('topbar.commandCenter')}</p>
        <p className="text-2xl font-semibold">{t('topbar.missionStatus')}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <LanguageToggle />
        <m.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/60">
          <LucideWifi className="h-4 w-4 text-cyan-300" />
          <span>{t('topbar.secureLink')}</span>
        </m.div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          <LucideCpu className="h-4 w-4 text-fuchsia-300" />
          <span>{t('topbar.neuralLoad')}</span>
        </div>
        <Button variant="ghost" size="icon" className="relative">
          <LucideBell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-fuchsia-400" />
        </Button>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
          <Image src="/assets/avatar.svg" alt={t('brand.operator')} width={32} height={32} className="rounded-full border border-white/20" />
          <div className="text-xs">
            <p className="text-white/80">{t('brand.operator')}</p>
            <p className="text-white/50">{t('brand.status')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
