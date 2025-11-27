import { NextResponse } from 'next/server';
import { getExplainerThreadConversations } from '@/lib/api/mock-data';

export function GET() {
  return NextResponse.json(getExplainerThreadConversations());
}
