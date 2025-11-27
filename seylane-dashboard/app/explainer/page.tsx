import { ModuleShell } from '@/components/dashboard/module-shell';
import { ExplainerHub } from './components/explainer-hub';

export default function ExplainerPage() {
  return (
    <ModuleShell titleKey="modules.explainer.title" subtitleKey="modules.explainer.subtitle" actions={null}>
      <ExplainerHub />
    </ModuleShell>
  );
}
