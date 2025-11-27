'use client';

import { m } from 'framer-motion';
import type { AutoDmSequence } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  sequences: AutoDmSequence[];
  loading: boolean;
}

export function SequenceList({ sequences, loading }: Props) {
  return (
    <Card className="border-white/5 bg-white/5">
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle>Sequences</CardTitle>
          <p className="text-xs text-white/60">real-time autop messaging</p>
        </div>
        <Badge className="bg-emerald-500/20 text-emerald-100">{sequences.length} live</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && !sequences.length && <Skeleton className="h-48 w-full" />}
        {sequences.map((sequence) => (
          <m.div key={sequence.id} className="rounded-2xl border border-white/10 bg-white/5 p-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
              <span>{sequence.campaign}</span>
              <span>{sequence.audience}</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <div>
                <p className="text-xs text-white/50">Send rate</p>
                <p className="text-lg text-white">{sequence.sendRate}/m</p>
              </div>
              <div>
                <p className="text-xs text-white/50">Conversion</p>
                <p className="text-lg text-emerald-300">{sequence.conversion}%</p>
              </div>
            </div>
          </m.div>
        ))}
      </CardContent>
    </Card>
  );
}
