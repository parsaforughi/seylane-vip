import { nextActivityLog } from '@/lib/api/mock-data';
import type { ModuleKey } from '@/lib/types';

const encoder = new TextEncoder();

export function streamLogs(module: ModuleKey) {
  const stream = new ReadableStream({
    start(controller) {
      let timer: ReturnType<typeof setTimeout> | null = null;
      const push = () => {
        const payload = JSON.stringify(nextActivityLog(module));
        controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
      };

      controller.enqueue(encoder.encode('retry: 1000\n\n'));
      const schedule = () => {
        timer = setTimeout(() => {
          push();
          schedule();
        }, 1000 + Math.random() * 2000);
      };
      push();
      schedule();

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
