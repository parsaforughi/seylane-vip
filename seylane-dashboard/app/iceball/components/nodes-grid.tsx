'use client';

import { m } from 'framer-motion';
import type { IceballNode } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/components/providers/language-provider';

export function FrostNodes({ nodes }: { nodes: IceballNode[] }) {
  const { t } = useTranslation();

  return (
    <Card className="border-white/5 bg-gradient-to-br from-white/5 to-transparent">
      <CardHeader>
        <CardTitle>{t('iceball.nodesTitle')}</CardTitle>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">{t('iceball.nodesSubtitle')}</p>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {nodes.map((node) => (
          <m.div key={node.id} className="rounded-2xl border border-white/10 bg-white/5 p-4" whileHover={{ translateY: -2 }}>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
              <span>{node.name}</span>
              <span>{node.status}</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50">{t('iceball.temperature')}</p>
                <p className="text-2xl font-semibold text-white">{node.temperature}°C</p>
              </div>
              <div>
                <p className="text-xs text-white/50">{t('iceball.charge')}</p>
                <p className="text-2xl text-cyan-300">{node.charge}%</p>
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${node.charge}%` }} />
            </div>
          </m.div>
        ))}
      </CardContent>
    </Card>
  );
}
