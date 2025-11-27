'use client';

import { create } from 'zustand';
import { iceballApi } from './api';
import type { IceballSlice } from './types';

export const useIceballStore = create<IceballSlice>((set) => ({
  nodes: [],
  alerts: [],
  loading: false,
  hydrate: async () => {
    set({ loading: true });
    try {
      const payload = await iceballApi.stats();
      set({ nodes: payload.nodes, alerts: payload.alerts, loading: false });
    } catch (error) {
      console.error('iceball hydrate error', error);
      set({ loading: false });
    }
  },
}));
