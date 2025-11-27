'use client';

import { m } from 'framer-motion';
import type { IceballAlert } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/components/providers/language-provider';

const severityColor: Record<IceballAlert['severity'], string> = {
  low: 'text-emerald-300',
  medium: 'text-amber-300',
  high: 'text-rose-300',
};

export function AlertStack({ alerts, loading }: { alerts: IceballAlert[]; loading: boolean }) {
  const { t } = useTranslation();

  return (
    <Card className="border-white/5 bg-white/5">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{t('iceball.alertsTitle')}</CardTitle>
        <Badge className="bg-blue-500/20 text-blue-100">{t('iceball.alertsBadge')}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && !alerts.length && <Skeleton className="h-40 w-full" />}        
        {alerts.map((alert) => (
          <m.div key={alert.id} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm text-white/80">{alert.description}</p>
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className={severityColor[alert.severity]}>{t(`iceball.severity.${alert.severity}`)}</span>
              <span>{alert.timestamp}</span>
            </div>
          </m.div>
        ))}
      </CardContent>
    </Card>
  );
}
