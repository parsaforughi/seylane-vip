'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Language = 'en' | 'fa';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

const memoryStorage: Storage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  key: () => null,
  length: 0,
};

const storage = createJSONStorage(() => (typeof window === 'undefined' ? memoryStorage : localStorage));

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: 'en',
      setLanguage: (language) => set({ currentLanguage: language }),
    }),
    {
      name: 'mastermind-language',
      storage,
    },
  ),
);
