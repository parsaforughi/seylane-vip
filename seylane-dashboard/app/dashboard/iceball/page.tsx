import { ModuleShell } from '@/components/dashboard/module-shell';
import { IceballHub } from '@/app/iceball/components/iceball-hub';

export default function DashboardIceballPage() {
  return (
    <ModuleShell title="Iceball" subtitle="module // stark" showSidebar={false}>
      <IceballHub />
    </ModuleShell>
  );
}
