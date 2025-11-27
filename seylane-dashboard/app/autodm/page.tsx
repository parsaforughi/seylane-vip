import { ModuleShell } from '@/components/dashboard/module-shell';
import { AutoHub } from './components/auto-hub';

export default function AutoDmPage() {
  return (
    <ModuleShell titleKey="modules.autodm.title" subtitleKey="modules.autodm.subtitle">
      <AutoHub />
    </ModuleShell>
  );
}
