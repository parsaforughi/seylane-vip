'use client';

import { m } from 'framer-motion';
import type { AutoDmStat } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AutoStatGrid({ stats }: { stats: AutoDmStat[] }) {
  return (
    <Card className="border-white/5 bg-gradient-to-br from-white/10 to-transparent">
      <CardHeader>
        <CardTitle>AutoDM Telemetry</CardTitle>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">pulse verified</p>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {stats.map((stat) => (
          <m.div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4" whileHover={{ scale: 1.02 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-white/60">
              <span>Target {stat.target}</span>
              <span className="text-emerald-300">+{stat.delta}%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" style={{ width: `${Math.min(100, (stat.value / stat.target) * 100)}%` }} />
            </div>
          </m.div>
        ))}
      </CardContent>
    </Card>
  );
}
