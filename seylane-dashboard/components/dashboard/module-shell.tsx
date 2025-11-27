'use client';

import type { ReactNode } from 'react';
import { m } from 'framer-motion';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/components/providers/language-provider';

interface Props {
  titleKey: string;
  subtitleKey: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function ModuleShell({ titleKey, subtitleKey, actions, children }: Props) {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="space-y-8">
          <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-panel flex flex-wrap items-center justify-between gap-4 border-white/5 px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t(subtitleKey)}</p>
              <p className="text-2xl font-semibold">{t(titleKey)}</p>
            </div>
            {actions ?? <Button variant="ghost">{t('moduleShell.defaultAction')}</Button>}
          </m.div>
          {children}
        </div>
      </div>
    </div>
  );
}
