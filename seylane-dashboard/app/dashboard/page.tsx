import { Sidebar } from '@/components/dashboard/sidebar';
import { TopBar } from '@/components/dashboard/top-bar';
import { ModulesOverview } from '@/components/dashboard/modules-overview';
import { ActivityPanel } from '@/components/dashboard/activity-panel';
import { SentinelEye } from '@/components/os/sentinel-eye';
import { listModuleStats, getExplainerConversations, getExplainerMessages } from '@/lib/api/mock-data';

export default function DashboardPage() {
  const stats = listModuleStats();
  const conversations = getExplainerConversations();
  const messages = getExplainerMessages();

  return (
    <div className="px-4 py-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="space-y-8">
          <TopBar />
          <SentinelEye />
          <ModulesOverview modules={stats} conversations={conversations} messages={messages} />
          <ActivityPanel />
        </div>
      </div>
    </div>
  );
}
