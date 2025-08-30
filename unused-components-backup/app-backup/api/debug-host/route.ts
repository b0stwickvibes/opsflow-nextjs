import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('host');
  const userAgent = headersList.get('user-agent');
  
  return NextResponse.json({
    host,
    userAgent,
    timestamp: new Date().toISOString(),
    message: `Request from host: ${host}`
  });
}
