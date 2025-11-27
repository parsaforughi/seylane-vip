'use client';

import { Button } from '@/components/ui/button';
import { useLanguageStore, type Language } from '@/lib/state/language-store';
import { useTranslation } from '@/components/providers/language-provider';

const options: Language[] = ['en', 'fa'];

export function LanguageToggle() {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs uppercase tracking-[0.3em] text-white/50">{t('language.toggle')}</span>
      <div className="flex rounded-full border border-white/10 bg-white/5 p-0.5">
        {options.map((lang) => (
          <Button
            key={lang}
            variant={currentLanguage === lang ? 'primary' : 'ghost'}
            size="sm"
            className="text-xs"
            onClick={() => setLanguage(lang)}
          >
            {lang === 'en' ? t('language.english') : t('language.persian')}
          </Button>
        ))}
      </div>
    </div>
  );
}
