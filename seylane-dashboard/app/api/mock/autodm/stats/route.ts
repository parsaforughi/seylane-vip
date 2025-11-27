import { NextResponse } from 'next/server';
import { getAutoDmPayload } from '@/lib/api/mock-data';

export function GET() {
  return NextResponse.json(getAutoDmPayload());
}
