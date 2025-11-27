import { ModuleShell } from '@/components/dashboard/module-shell';
import { ExplainerHub } from './components/explainer-hub';

export default function ExplainerPage() {
  return (
    <ModuleShell title="Explainer" subtitle="module // stark" actions={null}>
      <ExplainerHub />
    </ModuleShell>
  );
}
