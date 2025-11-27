import type { ReactNode } from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { MissionStatusBar } from '@/components/dashboard/mission-status-bar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen w-full bg-[#07090F] text-white overflow-hidden">
      <Sidebar />
      <section className="flex flex-1 flex-col overflow-y-auto">
        <MissionStatusBar />
        <div className="space-y-6 p-6">
          {children}
        </div>
      </section>
    </main>
  );
}
