import { NextResponse } from 'next/server';
import { getExplainerMessagesByConversation } from '@/lib/api/mock-data';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const conversationId = searchParams.get('conversationId');
  if (!conversationId) {
    return NextResponse.json({ error: 'conversationId query param is required' }, { status: 400 });
  }
  return NextResponse.json(getExplainerMessagesByConversation(conversationId));
}
