'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideMessageCircle, LucideSnowflake, LucideLayoutGrid, LucideSparkles } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/dashboard', label: 'Overview', icon: LucideLayoutGrid },
  { href: '/dashboard/explainer', label: 'Explainer', icon: LucideSparkles },
  { href: '/dashboard/autodm', label: 'Auto DM', icon: LucideMessageCircle },
  { href: '/dashboard/iceball', label: 'Iceball', icon: LucideSnowflake },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col justify-between border-r border-white/10 bg-[#05060d]/70 p-6 backdrop-blur-2xl">
      <div>
        <div className="mb-10 flex items-center gap-3">
          <Image src="/assets/logo.svg" width={42} height={42} alt="Mastermind OS" className="drop-shadow-[0_0_25px_rgba(59,130,246,0.75)]" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Mastermind OS</p>
            <p className="text-xl font-semibold text-white">Control</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm transition-all',
                  active
                    ? 'border-cyan-400/40 bg-white/10 text-white shadow-[0_0_25px_rgba(59,130,246,0.45)]'
                    : 'text-white/60 hover:border-white/10 hover:bg-white/5 hover:text-white',
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4 text-xs text-white/70">
        <p className="mb-1 font-semibold text-white">Stability Index</p>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full border border-white/10 bg-white/10 text-center text-lg font-bold leading-[48px] text-cyan-300">
            97
          </div>
          <p>
            Systems nominal. Mastermind firewall active and monitoring {new Date().toLocaleDateString()} telemetry.
          </p>
        </div>
      </div>
    </aside>
  );
}
