import { streamLogs } from '@/lib/api/log-stream';

export const runtime = 'edge';

export function GET() {
  return streamLogs('iceball');
}
