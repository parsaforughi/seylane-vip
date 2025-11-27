import { ModuleShell } from '@/components/dashboard/module-shell';
import { AutoHub } from '@/app/autodm/components/auto-hub';

export default function DashboardAutoDmPage() {
  return (
    <ModuleShell title="Auto DM" subtitle="module // stark" showSidebar={false}>
      <AutoHub />
    </ModuleShell>
  );
}
