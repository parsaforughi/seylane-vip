'use client';

import { create } from 'zustand';

type ThemeAccent = 'cyan' | 'violet' | 'fuchsia';

interface ThemeState {
  accent: ThemeAccent;
  setAccent: (accent: ThemeAccent) => void;
}

export const useThemeAccent = create<ThemeState>((set) => ({
  accent: 'cyan',
  setAccent: (accent) => set({ accent }),
}));
