'use client';

import { create } from 'zustand';
import { explainerApi } from './api';
import type { ExplainerSlice } from './types';
import type { ExplainerMessage } from '@/lib/types';
import { subscribeToLiveMessages } from '@/lib/api/live-messages-stream';

export const useExplainerStore = create<ExplainerSlice>((set, get) => {
  let unsubscribeLive: (() => void) | null = null;

  const applyLiveMessage = (message: ExplainerMessage) => {
    set((state) => {
      const messages = state.messagesByConversation[message.conversationId] ?? [];
      const updatedMessages = [...messages, message];
      const messagesByConversation = { ...state.messagesByConversation, [message.conversationId]: updatedMessages };

      const conversations = state.conversations.map((conversation) => {
        if (conversation.id !== message.conversationId) return conversation;
        const updatedConversation = {
          ...conversation,
          lastMessageAt: message.createdAt,
          inboundCount: conversation.inboundCount + (message.from === 'user' ? 1 : 0),
          outboundCount: conversation.outboundCount + (message.from === 'bot' ? 1 : 0),
        };
        return updatedConversation;
      });

      const stats = state.stats
        ? {
            ...state.stats,
            totalReceived: state.stats.totalReceived + (message.from === 'user' ? 1 : 0),
            totalSent: state.stats.totalSent + (message.from === 'bot' ? 1 : 0),
            todayReceived:
              state.stats.todayReceived +
              (message.from === 'user' && isToday(message.createdAt) ? 1 : 0),
            todaySent:
              state.stats.todaySent +
              (message.from === 'bot' && isToday(message.createdAt) ? 1 : 0),
          }
        : null;

      return {
        messagesByConversation,
        conversations,
        stats,
      };
    });
  };

  return {
    conversations: [],
    messagesByConversation: {},
    selectedConversationId: null,
    stats: null,
    isLoadingConversations: false,
    isLoadingMessages: {},
    isLoadingStats: false,
    isLiveSubscribed: false,
    fetchConversations: async () => {
      set({ isLoadingConversations: true });
      try {
        const conversations = await explainerApi.conversations();
        set({ conversations, isLoadingConversations: false });
      } catch (error) {
        console.error('explainer conversations error', error);
        set({ isLoadingConversations: false });
      }
    },
    fetchMessages: async (conversationId: string) => {
      if (!conversationId) return;
      set((state) => ({
        isLoadingMessages: { ...state.isLoadingMessages, [conversationId]: true },
      }));
      try {
        const messages = await explainerApi.messages(conversationId);
        set((state) => ({
          messagesByConversation: { ...state.messagesByConversation, [conversationId]: messages },
          isLoadingMessages: { ...state.isLoadingMessages, [conversationId]: false },
        }));
      } catch (error) {
        console.error('explainer messages error', error);
        set((state) => ({
          isLoadingMessages: { ...state.isLoadingMessages, [conversationId]: false },
        }));
      }
    },
    fetchStats: async () => {
      set({ isLoadingStats: true });
      try {
        const stats = await explainerApi.stats();
        set({ stats, isLoadingStats: false });
      } catch (error) {
        console.error('explainer stats error', error);
        set({ isLoadingStats: false });
      }
    },
    selectConversation: (id: string | null) => {
      const previous = get().selectedConversationId;
      if (id && previous !== id && !get().messagesByConversation[id]) {
        void get().fetchMessages(id);
      }
      set({ selectedConversationId: id });
    },
    applyLiveMessage,
    subscribeToLiveMessages: () => {
      if (get().isLiveSubscribed) return;
      if (typeof window === 'undefined') return;

      unsubscribeLive = subscribeToLiveMessages((message) => {
        applyLiveMessage(message);
      });

      set({ isLiveSubscribed: true });
    },
    unsubscribeFromLiveMessages: () => {
      if (unsubscribeLive) {
        unsubscribeLive();
        unsubscribeLive = null;
      }
      set({ isLiveSubscribed: false });
    },
  };
});

function isToday(iso: string) {
  const now = new Date();
  const date = new Date(iso);
  return (
    now.getUTCFullYear() === date.getUTCFullYear() &&
    now.getUTCMonth() === date.getUTCMonth() &&
    now.getUTCDate() === date.getUTCDate()
  );
}
