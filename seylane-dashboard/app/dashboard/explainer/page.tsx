import { ModuleShell } from '@/components/dashboard/module-shell';
import { ExplainerHub } from '@/app/explainer/components/explainer-hub';

export default function DashboardExplainerPage() {
  return (
    <ModuleShell title="Explainer" subtitle="module // stark" actions={null} showSidebar={false}>
      <ExplainerHub />
    </ModuleShell>
  );
}
