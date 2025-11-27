import { apiFetch } from '@/lib/api/client';
import type { ExplainerConversation, ExplainerMessage } from '@/lib/types';
import type { ExplainerStats } from './types';

async function fetchExplainerStats() {
  return apiFetch<ExplainerStats>('/stats');
}

async function fetchExplainerConversations() {
  return apiFetch<ExplainerConversation[]>('/conversations');
}

async function fetchExplainerMessages(conversationId: string) {
  const query = `?conversationId=${encodeURIComponent(conversationId)}`;
  return apiFetch<ExplainerMessage[]>(`/messages${query}`);
}

export const explainerApi = {
  stats: fetchExplainerStats,
  conversations: fetchExplainerConversations,
  messages: fetchExplainerMessages,
};
