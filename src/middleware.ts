// ============================================================================
// PSEO ENGINE - EDGE MIDDLEWARE ENTRY POINT
// Applies all edge optimizations: geo-routing, A/B testing, caching
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { edgeMiddleware, middlewareConfig } from '@/lib/edge-middleware';

export function middleware(request: NextRequest): NextResponse {
  return edgeMiddleware(request);
}

export const config = middlewareConfig;
