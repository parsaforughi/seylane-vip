'use client';

import { create } from 'zustand';
import type { ActivityLog } from '@/lib/types';

interface LogStreamState {
  logs: ActivityLog[];
  connected: boolean;
  connect: (endpoint: string) => void;
  disconnect: () => void;
}

export const useLogStreamStore = create<LogStreamState>((set) => {
  let source: EventSource | null = null;

  return {
    logs: [],
    connected: false,
    connect: (endpoint) => {
      source?.close();
      source = new EventSource(endpoint);
      set({ logs: [], connected: true });
      source.onmessage = (event: MessageEvent<string>) => {
        try {
          const payload = JSON.parse(event.data) as ActivityLog;
          set((state) => ({ logs: [payload, ...state.logs].slice(0, 25) }));
        } catch (error) {
          console.error('log parse error', error);
        }
      };
      source.onerror = () => {
        source?.close();
        set({ connected: false });
      };
    },
    disconnect: () => {
      source?.close();
      source = null;
      set({ connected: false });
    },
  };
});
