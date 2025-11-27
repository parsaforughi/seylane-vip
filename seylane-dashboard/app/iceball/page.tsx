import { ModuleShell } from '@/components/dashboard/module-shell';
import { IceballHub } from './components/iceball-hub';

export default function IceballPage() {
  return (
    <ModuleShell title="Iceball" subtitle="module // stark">
      <IceballHub />
    </ModuleShell>
  );
}
