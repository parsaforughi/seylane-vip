'use client';

import { useEffect } from 'react';
import { useIceballStore } from '../store';
import { FrostNodes } from './nodes-grid';
import { AlertStack } from './alert-stack';
import { Skeleton } from '@/components/ui/skeleton';

export function IceballHub() {
  const { nodes, alerts, loading, hydrate } = useIceballStore();

  useEffect(() => {
    if (!nodes.length && !loading) {
      void hydrate();
    }
  }, [nodes.length, loading, hydrate]);

  if (loading && !nodes.length) {
    return <Skeleton className="h-64 w-full" />;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <FrostNodes nodes={nodes} />
      <AlertStack alerts={alerts} loading={loading} />
    </div>
  );
}
