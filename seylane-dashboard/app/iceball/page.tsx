import { ModuleShell } from '@/components/dashboard/module-shell';
import { IceballHub } from './components/iceball-hub';

export default function IceballPage() {
  return (
    <ModuleShell titleKey="modules.iceball.title" subtitleKey="modules.iceball.subtitle">
      <IceballHub />
    </ModuleShell>
  );
}
