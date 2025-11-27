import { ModuleShell } from '@/components/dashboard/module-shell';
import { AutoHub } from './components/auto-hub';

export default function AutoDmPage() {
  return (
    <ModuleShell title="Auto DM" subtitle="module // stark">
      <AutoHub />
    </ModuleShell>
  );
}
