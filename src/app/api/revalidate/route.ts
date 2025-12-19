// ============================================================================
// PSEO ENGINE - ON-DEMAND ISR REVALIDATION API
// 1000x SEO Enhancement: Webhook-based revalidation for real-time content updates
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

// ============================================================================
// TYPES
// ============================================================================

interface RevalidationRequest {
  type: 'path' | 'tag' | 'pattern';
  targets: string[];
  secret?: string;
}

interface RevalidationResponse {
  success: boolean;
  revalidated: string[];
  failed: string[];
  timestamp: string;
  message?: string;
}

// ============================================================================
// CONFIGURATION
// ============================================================================

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'default-secret-change-me';

// Pattern mappings for bulk revalidation
const REVALIDATION_PATTERNS: Record<string, string[]> = {
  // Content types
  'all-services': ['/services', '/local'],
  'all-locations': ['/local', '/areas'],
  'all-blog': ['/blog'],
  'all-prices': ['/prices', '/costs', '/cost-guides'],
  'all-emergency': ['/emergency', '/urgent', '/same-day'],
  
  // Location-specific patterns
  'location:hampstead': ['/local/hampstead', '/streets/hampstead', '/reviews/hampstead'],
  'location:highgate': ['/local/highgate', '/streets/highgate', '/reviews/highgate'],
  
  // Service-specific patterns
  'service:plumbing': ['/local/*/plumbing', '/prices/plumbing', '/emergency/plumber'],
  'service:electrical': ['/local/*/electrical', '/prices/electrical', '/emergency/electrician'],
  
  // Global patterns
  'sitemap': ['/sitemap.xml'],
  'homepage': ['/'],
  'all': ['/'],
};

// ============================================================================
// VALIDATION
// ============================================================================

function validateSecret(providedSecret: string | undefined): boolean {
  if (!providedSecret) return false;
  
  // Constant-time comparison to prevent timing attacks
  if (providedSecret.length !== REVALIDATION_SECRET.length) return false;
  
  let result = 0;
  for (let i = 0; i < providedSecret.length; i++) {
    result |= providedSecret.charCodeAt(i) ^ REVALIDATION_SECRET.charCodeAt(i);
  }
  return result === 0;
}

function sanitizePath(path: string): string {
  // Ensure path starts with /
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  // Remove trailing slash except for root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  // Remove query strings and fragments
  path = path.split('?')[0].split('#')[0];
  return path;
}

// ============================================================================
// REVALIDATION LOGIC
// ============================================================================

async function revalidateByPath(paths: string[]): Promise<{ success: string[]; failed: string[] }> {
  const success: string[] = [];
  const failed: string[] = [];

  for (const rawPath of paths) {
    const path = sanitizePath(rawPath);
    try {
      revalidatePath(path);
      success.push(path);
    } catch (error) {
      console.error(`Failed to revalidate path ${path}:`, error);
      failed.push(path);
    }
  }

  return { success, failed };
}

async function revalidateByTag(tags: string[]): Promise<{ success: string[]; failed: string[] }> {
  const success: string[] = [];
  const failed: string[] = [];

  for (const tag of tags) {
    try {
      revalidateTag(tag);
      success.push(tag);
    } catch (error) {
      console.error(`Failed to revalidate tag ${tag}:`, error);
      failed.push(tag);
    }
  }

  return { success, failed };
}

async function revalidateByPattern(patterns: string[]): Promise<{ success: string[]; failed: string[] }> {
  const success: string[] = [];
  const failed: string[] = [];
  const pathsToRevalidate = new Set<string>();

  for (const pattern of patterns) {
    const mappedPaths = REVALIDATION_PATTERNS[pattern];
    if (mappedPaths) {
      mappedPaths.forEach(p => pathsToRevalidate.add(p));
      success.push(pattern);
    } else {
      failed.push(pattern);
    }
  }

  // Actually revalidate the resolved paths
  for (const path of pathsToRevalidate) {
    try {
      // Handle wildcard patterns
      if (path.includes('*')) {
        // For wildcards, revalidate the base path
        const basePath = path.split('*')[0].replace(/\/$/, '');
        revalidatePath(basePath, 'layout');
      } else {
        revalidatePath(path);
      }
    } catch (error) {
      console.error(`Failed to revalidate pattern path ${path}:`, error);
    }
  }

  return { success, failed };
}

// ============================================================================
// API HANDLER
// ============================================================================

export async function POST(request: NextRequest): Promise<NextResponse<RevalidationResponse>> {
  const startTime = Date.now();

  try {
    // Parse request body
    const body: RevalidationRequest = await request.json();
    const { type, targets, secret } = body;

    // Validate secret
    if (!validateSecret(secret)) {
      return NextResponse.json(
        {
          success: false,
          revalidated: [],
          failed: targets || [],
          timestamp: new Date().toISOString(),
          message: 'Invalid or missing revalidation secret',
        },
        { status: 401 }
      );
    }

    // Validate request
    if (!type || !targets || !Array.isArray(targets) || targets.length === 0) {
      return NextResponse.json(
        {
          success: false,
          revalidated: [],
          failed: [],
          timestamp: new Date().toISOString(),
          message: 'Invalid request: type and targets array required',
        },
        { status: 400 }
      );
    }

    // Limit number of targets to prevent abuse
    if (targets.length > 100) {
      return NextResponse.json(
        {
          success: false,
          revalidated: [],
          failed: targets,
          timestamp: new Date().toISOString(),
          message: 'Too many targets: maximum 100 per request',
        },
        { status: 400 }
      );
    }

    // Perform revalidation based on type
    let result: { success: string[]; failed: string[] };

    switch (type) {
      case 'path':
        result = await revalidateByPath(targets);
        break;
      case 'tag':
        result = await revalidateByTag(targets);
        break;
      case 'pattern':
        result = await revalidateByPattern(targets);
        break;
      default:
        return NextResponse.json(
          {
            success: false,
            revalidated: [],
            failed: targets,
            timestamp: new Date().toISOString(),
            message: `Invalid type: ${type}. Must be 'path', 'tag', or 'pattern'`,
          },
          { status: 400 }
        );
    }

    const duration = Date.now() - startTime;

    return NextResponse.json({
      success: result.failed.length === 0,
      revalidated: result.success,
      failed: result.failed,
      timestamp: new Date().toISOString(),
      message: `Revalidation completed in ${duration}ms`,
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      {
        success: false,
        revalidated: [],
        failed: [],
        timestamp: new Date().toISOString(),
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// ============================================================================
// GET HANDLER (for health checks)
// ============================================================================

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    availablePatterns: Object.keys(REVALIDATION_PATTERNS),
    documentation: {
      path: 'Revalidate specific paths: { type: "path", targets: ["/local/hampstead/plumbing"], secret: "..." }',
      tag: 'Revalidate by cache tag: { type: "tag", targets: ["blog", "services"], secret: "..." }',
      pattern: 'Revalidate by pattern: { type: "pattern", targets: ["all-services", "location:hampstead"], secret: "..." }',
    },
  });
}
