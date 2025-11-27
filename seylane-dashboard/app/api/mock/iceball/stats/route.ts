import { NextResponse } from 'next/server';
import { getIceballPayload } from '@/lib/api/mock-data';

export function GET() {
  return NextResponse.json(getIceballPayload());
}
