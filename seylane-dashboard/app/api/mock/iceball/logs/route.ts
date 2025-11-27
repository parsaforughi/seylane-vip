import { streamLogs } from '@/lib/api/log-stream';

export function GET() {
  return streamLogs('iceball');
}
