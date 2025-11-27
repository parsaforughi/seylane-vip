'use client';

import { createContext, useContext, useMemo } from 'react';
import en from '@/locales/en.json';
import fa from '@/locales/fa.json';
import { useLanguageStore, type Language } from '@/lib/state/language-store';

const dictionaries = {
  en,
  fa,
} as const;

type TranslationParams = Record<string, string | number>;

interface LanguageContextValue {
  language: Language;
  t: (key: string, params?: TranslationParams) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);

  const value = useMemo<LanguageContextValue>(() => {
    const dictionary = dictionaries[currentLanguage] as Record<string, string>;
    const translate = (key: string, params?: TranslationParams) => {
      const template = dictionary[key] ?? key;
      if (!params) return template;
      return template.replace(/\{\{(.*?)\}\}/g, (_, rawToken: string) => {
        const token = String(rawToken).trim();
        const replacement = params[token];
        return replacement !== undefined ? String(replacement) : '';
      });
    };
    return { language: currentLanguage, t: translate };
  }, [currentLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  return useContext(LanguageContext);
}
