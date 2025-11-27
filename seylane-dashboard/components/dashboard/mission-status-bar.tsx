'use client';

import { useLanguageStore } from '@/lib/state/language-store';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fa', label: 'Persian' },
];

export function MissionStatusBar() {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 bg-[#0b101f]/80 px-6 py-4 backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Mission Status</p>
        <p className="text-xl font-semibold text-white">Operational</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
          <span className="text-white/60">Secure Link</span>
          <span className="text-emerald-300">Active</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70">
          <span>Neural Load</span>
          <span className="text-fuchsia-300">62%</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70">
          <span>Operator</span>
          <span className="text-cyan-300">Online</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-white/70">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`rounded-full px-3 py-1 text-[10px] transition ${
                currentLanguage === lang.code ? 'bg-white text-[#0b101f]' : 'text-white/70'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
