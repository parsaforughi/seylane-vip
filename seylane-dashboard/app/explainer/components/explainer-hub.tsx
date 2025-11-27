'use client';

import { useEffect, useMemo } from 'react';
import { LucideActivitySquare, LucideMessageSquare, LucideArrowRight } from 'lucide-react';
import { m } from 'framer-motion';
import { useExplainerStore } from '../store';
import { useLogStreamStore } from '@/lib/state/log-stream-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import type { ExplainerConversation, ExplainerMessage } from '@/lib/types';
import type { ExplainerStats } from '../types';
import { getExplainerBaseUrl } from '@/lib/api/config';

export function ExplainerHub() {
  const stats = useExplainerStore((state) => state.stats);
  const conversations = useExplainerStore((state) => state.conversations);
  const selectedConversationId = useExplainerStore((state) => state.selectedConversationId);
  const messagesByConversation = useExplainerStore((state) => state.messagesByConversation);
  const fetchStats = useExplainerStore((state) => state.fetchStats);
  const fetchConversations = useExplainerStore((state) => state.fetchConversations);
  const selectConversation = useExplainerStore((state) => state.selectConversation);
  const isLoadingStats = useExplainerStore((state) => state.isLoadingStats);
  const isLoadingConversations = useExplainerStore((state) => state.isLoadingConversations);
  const isLoadingMessages = useExplainerStore((state) => state.isLoadingMessages);
  const subscribeToLiveMessages = useExplainerStore((state) => state.subscribeToLiveMessages);
  const unsubscribeFromLiveMessages = useExplainerStore((state) => state.unsubscribeFromLiveMessages);

  useEffect(() => {
    void fetchStats();
    void fetchConversations();
    subscribeToLiveMessages();
    return () => {
      unsubscribeFromLiveMessages();
    };
  }, [fetchStats, fetchConversations, subscribeToLiveMessages, unsubscribeFromLiveMessages]);

  const activeMessages = selectedConversationId ? messagesByConversation[selectedConversationId] ?? [] : [];
  const chatLoading = selectedConversationId ? isLoadingMessages[selectedConversationId] : false;
  const selectedConversation =
    conversations.find((conversation) => conversation.id === selectedConversationId) ?? null;

  return (
    <div className="space-y-6">
      <StatsRow stats={stats} isLoading={isLoadingStats} />
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <ConversationColumn
          conversations={conversations}
          isLoading={isLoadingConversations}
          selectedConversationId={selectedConversationId}
          onSelect={(conversationId) => selectConversation(conversationId)}
        />
        <div className="space-y-6">
          <ChatWindow conversation={selectedConversation} messages={activeMessages} isLoading={chatLoading ?? false} />
          <ExplainerLogs />
        </div>
      </div>
    </div>
  );
}

function StatsRow({ stats, isLoading }: { stats: ExplainerStats | null; isLoading: boolean }) {
  const statCards = [
    { label: 'Total Received', key: 'totalReceived' as const },
    { label: 'Total Sent', key: 'totalSent' as const },
    { label: 'Today Received', key: 'todayReceived' as const },
    { label: 'Today Sent', key: 'todaySent' as const },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {statCards.map((card) => (
        <Card key={card.key} className="border-white/5 bg-gradient-to-br from-white/10 to-transparent">
          <CardContent className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">{card.label}</p>
            {isLoading && !stats ? (
              <Skeleton className="h-10 w-1/2" />
            ) : (
              <p className="text-3xl font-semibold">{stats ? stats[card.key].toLocaleString() : '—'}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

interface ConversationColumnProps {
  conversations: ExplainerConversation[];
  selectedConversationId: string | null;
  isLoading: boolean;
  onSelect: (conversationId: string) => void;
}

function ConversationColumn({ conversations, selectedConversationId, isLoading, onSelect }: ConversationColumnProps) {
  return (
    <Card className="h-full border-white/5 bg-white/5">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-base">
          <LucideMessageSquare className="h-4 w-4 text-cyan-300" />
          Live Conversations
        </CardTitle>
        <span className="text-xs uppercase tracking-[0.4em] text-white/50">{conversations.length} open</span>
      </CardHeader>
      <CardContent>
        {isLoading && !conversations.length ? (
          <Skeleton className="h-64 w-full" />
        ) : (
          <ScrollArea className="max-h-[520px] overflow-y-auto pr-3">
            <div className="space-y-3">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => onSelect(conversation.id)}
                  className={cn(
                    'w-full rounded-2xl border px-4 py-3 text-left transition',
                    selectedConversationId === conversation.id
                      ? 'border-cyan-400/70 bg-white/10 shadow-neon'
                      : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10',
                  )}
                >
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="font-semibold text-white">{conversation.username}</span>
                    <span>{formatRelativeTime(conversation.lastMessageAt)}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <span className="rounded-full border border-cyan-500/40 px-3 py-1 text-cyan-100">
                      Inbound {conversation.inboundCount}
                    </span>
                    <span className="rounded-full border border-fuchsia-500/40 px-3 py-1 text-fuchsia-100">
                      Outbound {conversation.outboundCount}
                    </span>
                  </div>
                </button>
              ))}
              {!conversations.length && (
                <p className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-sm text-white/60">
                  No active conversations detected yet.
                </p>
              )}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

interface ChatWindowProps {
  conversation: ExplainerConversation | null;
  messages: ExplainerMessage[];
  isLoading: boolean;
}

function ChatWindow({ conversation, messages, isLoading }: ChatWindowProps) {
  if (!conversation) {
    return (
      <Card className="border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center">
        <CardContent className="py-16 text-white/70">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Explainer feed</p>
          <p className="mt-4 text-xl font-semibold text-white">Choose a conversation to open the Stark thread.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-white/5 bg-white/5">
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle>{conversation.username}</CardTitle>
          <p className="text-xs text-white/60">{conversation.inboundCount} inbound / {conversation.outboundCount} outbound</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/50">
          <LucideArrowRight className="h-3 w-3" />
          thread
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading && !messages.length ? (
          <Skeleton className="h-72 w-full" />
        ) : (
          <ScrollArea className="h-[360px] pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <m.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'max-w-[75%] rounded-2xl border px-4 py-3',
                    message.from === 'user'
                      ? 'border-white/10 bg-white/10 text-left text-white'
                      : 'ml-auto text-right text-white border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/10',
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="mt-1 text-xs text-white/60">{new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </m.div>
              ))}
              {!messages.length && (
                <p className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-sm text-white/60">
                  Messages will stream in once the explainer responds.
                </p>
              )}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

function ExplainerLogs() {
  const logs = useLogStreamStore((state) => state.logs);
  const connected = useLogStreamStore((state) => state.connected);
  const connect = useLogStreamStore((state) => state.connect);
  const disconnect = useLogStreamStore((state) => state.disconnect);

  useEffect(() => {
    connect(`${getExplainerBaseUrl()}/logs`);
    return () => disconnect();
  }, [connect, disconnect]);

  const filteredLogs = useMemo(() => logs.filter((log) => log.source === 'explainer'), [logs]);

  return (
    <Card className="border-white/5 bg-white/5">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-base">
          <LucideActivitySquare className="h-4 w-4 text-emerald-300" />
          Explainer Logs
        </CardTitle>
        <span className={cn('text-xs uppercase tracking-[0.4em]', connected ? 'text-emerald-300' : 'text-white/40')}>
          {connected ? 'streaming' : 'offline'}
        </span>
      </CardHeader>
      <CardContent className="space-y-3">
        <ScrollArea className="h-[220px] pr-3">
          <div className="space-y-2">
            {filteredLogs.map((log) => (
              <m.div key={log.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                <p className="text-white">{log.message}</p>
                <p className="text-xs text-white/50">{new Date(log.timestamp).toLocaleTimeString()}</p>
              </m.div>
            ))}
            {!filteredLogs.length && (
              <p className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-3 text-sm text-white/50">
                Waiting for StarkOS pulses…
              </p>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function formatRelativeTime(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.max(1, Math.floor(diffMs / 60000));
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
