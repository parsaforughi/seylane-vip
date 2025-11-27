'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Language = 'en' | 'fa';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: 'en',
      setLanguage: (language) => set({ currentLanguage: language }),
    }),
    {
      name: 'mastermind-language',
      storage: createJSONStorage(() => (typeof window === 'undefined' ? undefined : localStorage)),
    },
  ),
);
