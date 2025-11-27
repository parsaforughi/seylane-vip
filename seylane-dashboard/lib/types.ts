export type ModuleKey = 'explainer' | 'autodm' | 'iceball';

export interface ModuleStats {
  module: ModuleKey;
  throughput: number;
  accuracy: number;
  mood: string;
  delta: number;
  trend: number[];
  uptime: number;
  responseTime: number;
}

export interface Conversation {
  id: string;
  topic: string;
  owner: string;
  state: 'resolving' | 'training' | 'shipped';
  progress: number;
  updatedAt: string;
  waveform?: number[];
}

export interface Message {
  id: string;
  author: string;
  channel: string;
  content: string;
  timestamp: string;
  priority?: 'low' | 'medium' | 'high';
}

export type ExplainerConversation = {
  id: string;
  userId: string;
  username: string;
  lastMessageAt: string;
  inboundCount: number;
  outboundCount: number;
};

export type ExplainerMessage = {
  id: string;
  conversationId: string;
  from: 'user' | 'bot';
  text: string;
  createdAt: string;
};

export interface ActivityLog {
  id: string;
  source: ModuleKey;
  message: string;
  timestamp: string;
}
