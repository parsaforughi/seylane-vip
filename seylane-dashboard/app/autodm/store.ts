'use client';

import { create } from 'zustand';
import { autoDmApi } from './api';
import type { AutoDmSlice } from './types';

export const useAutoDmStore = create<AutoDmSlice>((set) => ({
  stats: [],
  sequences: [],
  loading: false,
  hydrate: async () => {
    set({ loading: true });
    try {
      const payload = await autoDmApi.stats();
      set({ stats: payload.stats, sequences: payload.sequences, loading: false });
    } catch (error) {
      console.error('autodm hydrate error', error);
      set({ loading: false });
    }
  },
}));
