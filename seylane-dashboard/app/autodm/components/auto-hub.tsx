'use client';

import { useEffect } from 'react';
import { useAutoDmStore } from '../store';
import { AutoStatGrid } from './auto-stat-grid';
import { SequenceList } from './sequence-list';
import { Skeleton } from '@/components/ui/skeleton';

export function AutoHub() {
  const { stats, sequences, loading, hydrate } = useAutoDmStore();

  useEffect(() => {
    if (!stats.length && !loading) {
      void hydrate();
    }
  }, [stats.length, loading, hydrate]);

  if (loading && !stats.length) {
    return <Skeleton className="h-80 w-full" />;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <AutoStatGrid stats={stats} />
      <SequenceList sequences={sequences} loading={loading} />
    </div>
  );
}
