import type { ExplainerConversation, ExplainerMessage } from '@/lib/types';

export interface ExplainerStats {
  totalReceived: number;
  totalSent: number;
  todayReceived: number;
  todaySent: number;
}

export interface ExplainerSlice {
  conversations: ExplainerConversation[];
  messagesByConversation: Record<string, ExplainerMessage[]>;
  selectedConversationId: string | null;
  stats: ExplainerStats | null;
  isLoadingConversations: boolean;
  isLoadingMessages: Record<string, boolean>;
  isLoadingStats: boolean;
  isLiveSubscribed: boolean;
  fetchConversations: () => Promise<void>;
  fetchMessages: (conversationId: string) => Promise<void>;
  fetchStats: () => Promise<void>;
  selectConversation: (id: string | null) => void;
  applyLiveMessage: (message: ExplainerMessage) => void;
  subscribeToLiveMessages: () => void;
  unsubscribeFromLiveMessages: () => void;
}
