'use client';

import { m } from 'framer-motion';
import { LucideActivity, LucideGauge, LucideArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkline } from '@/components/ui/sparkline';
import { Badge } from '@/components/ui/badge';
import { cn, formatNumber } from '@/lib/utils';
import type { Conversation, Message, ModuleStats } from '@/lib/types';

interface Props {
  modules: ModuleStats[];
  conversations: Conversation[];
  messages: Message[];
}

const moduleAccent: Record<string, string> = {
  explainer: 'from-cyan-400/80 to-fuchsia-400/70',
  autodm: 'from-amber-400/80 to-orange-500/70',
  iceball: 'from-blue-400/80 to-cyan-500/70',
};

export function ModulesOverview({ modules, conversations, messages }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {modules.map((item) => (
          <m.div key={item.module} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card className="relative overflow-hidden border-white/5 bg-white/5">
              <div className={cn('absolute inset-x-0 top-0 h-1.5 rounded-full bg-gradient-to-r', moduleAccent[item.module])} />
              <CardHeader className="flex items-center justify-between text-xs text-white/60">
                <CardTitle className="text-white/80 capitalize">{item.module}</CardTitle>
                <div className="flex items-center gap-1 text-emerald-300">
                  <LucideArrowUpRight className="h-3 w-3" />
                  <span>+{item.delta}%</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-semibold">{formatNumber(item.throughput)}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">throughput</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <LucideActivity className="h-4 w-4 text-cyan-300" />
                    <span>{item.accuracy}% integrity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LucideGauge className="h-4 w-4 text-fuchsia-300" />
                    <span>{item.responseTime}s latency</span>
                  </div>
                </div>
                <Sparkline points={item.trend} />
              </CardContent>
            </Card>
          </m.div>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-white/5 bg-white/5">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Explainer Conversations</CardTitle>
            <Badge>Live</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {conversations.map((conversation) => (
              <m.div key={conversation.id} className="rounded-2xl border border-white/10 bg-white/5 p-4" whileHover={{ scale: 1.01 }}>
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
                  <span>{conversation.owner}</span>
                  <span>{conversation.updatedAt}</span>
                </div>
                <p className="mt-2 text-lg font-semibold">{conversation.topic}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-white/70">
                  <span className="capitalize">{conversation.state}</span>
                  <span>{conversation.progress}% synced</span>
                </div>
              </m.div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-white/5 bg-white/5">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Explainer Messages</CardTitle>
            <Badge className="bg-fuchsia-500/20 text-fuchsia-200">Pulse</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {messages.map((message) => (
              <m.div key={message.id} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="font-semibold text-white">{message.author}</span>
                  <span>{message.timestamp}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-cyan-300">#{message.channel}</p>
                <p className="mt-3 text-sm text-white/80">{message.content}</p>
              </m.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
