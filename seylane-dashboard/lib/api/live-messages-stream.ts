'use client';

import type { ExplainerMessage } from '@/lib/types';
import { getExplainerBaseUrl } from '@/lib/api/config';

type MessageEventPayload = {
  type: 'message';
  message: ExplainerMessage;
};

export type MessageListener = (message: ExplainerMessage) => void;

export function subscribeToLiveMessages(listener: MessageListener) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const source = new EventSource(`${getExplainerBaseUrl()}/live-messages`);
  const handler = (event: MessageEvent<string>) => {
    try {
      const payload = JSON.parse(event.data) as MessageEventPayload;
      if (payload.type === 'message' && payload.message) {
        listener(payload.message);
      }
    } catch (error) {
      console.error('live message parse error', error);
    }
  };

  source.addEventListener('message', handler);

  return () => {
    source.removeEventListener('message', handler);
    source.close();
  };
}
