import { NextResponse } from 'next/server';
import { summarizeExplainerTraffic } from '@/lib/api/mock-data';

export function GET() {
  return NextResponse.json(summarizeExplainerTraffic());
}
