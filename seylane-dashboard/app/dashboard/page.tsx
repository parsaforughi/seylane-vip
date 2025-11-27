import { ModulesOverview } from '@/components/dashboard/modules-overview';
import { ActivityPanel } from '@/components/dashboard/activity-panel';
import { listModuleStats, getExplainerConversations, getExplainerMessages } from '@/lib/api/mock-data';

export default function DashboardPage() {
  const stats = listModuleStats();
  const conversations = getExplainerConversations();
  const messages = getExplainerMessages();

  return (
    <div className="space-y-8">
      <ModulesOverview modules={stats} conversations={conversations} messages={messages} />
      <ActivityPanel />
    </div>
  );
}
