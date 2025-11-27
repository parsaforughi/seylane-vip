'use client';

import type { ReactNode } from 'react';
import { m } from 'framer-motion';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  children: ReactNode;
  showSidebar?: boolean;
}

export function ModuleShell({ title, subtitle, actions, children, showSidebar = true }: Props) {
  const hasSidebar = showSidebar;

  return (
    <div className="px-4 py-10 lg:px-12">
      <div className={`grid gap-8 ${hasSidebar ? 'lg:grid-cols-[280px_1fr]' : ''}`}>
        {hasSidebar && <Sidebar />}
        <div className="space-y-8">
          <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-panel flex flex-wrap items-center justify-between gap-4 border-white/5 px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{subtitle}</p>
              <p className="text-2xl font-semibold">{title}</p>
            </div>
            {actions ?? <Button variant="ghost">Launch Sequence</Button>}
          </m.div>
          {children}
        </div>
      </div>
    </div>
  );
}
