'use client';

import { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { LucideActivitySquare, LucideDot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLogStreamStore } from '@/lib/state/log-stream-store';
import type { ModuleKey } from '@/lib/types';
import { getExplainerBaseUrl } from '@/lib/api/config';

const modules: ModuleKey[] = ['explainer', 'autodm', 'iceball'];

export function ActivityPanel() {
  const [selected, setSelected] = useState<ModuleKey>('explainer');
  const logs = useLogStreamStore((state) => state.logs);
  const connected = useLogStreamStore((state) => state.connected);
  const connect = useLogStreamStore((state) => state.connect);
  const disconnect = useLogStreamStore((state) => state.disconnect);

  useEffect(() => {
    const endpoint =
      selected === 'explainer' ? `${getExplainerBaseUrl()}/logs` : `/api/mock/${selected}/logs`;
    connect(endpoint);
    return () => {
      disconnect();
    };
  }, [connect, disconnect, selected]);

  const filteredLogs = logs.filter((log) => log.source === selected);

  return (
    <Card className="border-white/5 bg-white/5">
      <CardHeader className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <CardTitle>StarkOS Log Stream</CardTitle>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">neon glass firewall</p>
        </div>
        <div className="flex gap-2">
          {modules.map((mod) => (
            <Button key={mod} variant={mod === selected ? 'primary' : 'ghost'} size="sm" onClick={() => setSelected(mod)}>
              {mod}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <LucideActivitySquare className={connected ? 'text-emerald-300' : 'text-red-300'} size={16} />
          <span>{connected ? 'Live signal locked' : 'Reconnecting'}</span>
        </div>
        <div className="space-y-2 overflow-hidden">
          {filteredLogs.map((log) => (
            <m.div key={log.id} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <LucideDot className="h-4 w-4 text-cyan-400" />
              <div>
                <p className="text-white">{log.message}</p>
                <p className="text-xs text-white/50">{new Date(log.timestamp).toLocaleTimeString()}</p>
              </div>
            </m.div>
          ))}
          {!filteredLogs.length && <p className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/50">Listening for transmissions...</p>}
        </div>
      </CardContent>
    </Card>
  );
}
