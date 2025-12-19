// ============================================================================
// PSEO ENGINE - EDGE MIDDLEWARE ENTRY POINT
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { edgeMiddleware } from '@/lib/edge-middleware';

export function middleware(request: NextRequest): NextResponse {
  return edgeMiddleware(request);
}

// Next.js requires `config` to be a literal object (not a variable reference).
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
