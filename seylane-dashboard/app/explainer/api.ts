import { apiFetch } from '@/lib/api/client';
import { getExplainerBaseUrl } from '@/lib/api/config';
import type { ExplainerConversation, ExplainerMessage } from '@/lib/types';
import type { ExplainerStats } from './types';

async function fetchExplainerStats() {
  const base = getExplainerBaseUrl();
  return apiFetch<ExplainerStats>(`${base}/stats`);
}

async function fetchExplainerConversations() {
  const base = getExplainerBaseUrl();
  return apiFetch<ExplainerConversation[]>(`${base}/conversations`);
}

async function fetchExplainerMessages(conversationId: string) {
  const query = `?conversationId=${encodeURIComponent(conversationId)}`;
  const base = getExplainerBaseUrl();
  return apiFetch<ExplainerMessage[]>(`${base}/messages${query}`);
}

export const explainerApi = {
  stats: fetchExplainerStats,
  conversations: fetchExplainerConversations,
  messages: fetchExplainerMessages,
};
