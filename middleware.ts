import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const referrer = request.headers.get('referer');

  // === Bot Blocking & Logging ===
  if (isBotScan(pathname)) {
    console.log(`[BOT_BLOCKED] ${pathname}`);
    return new NextResponse(null, { status: 404 });
  }

  // === Search Query Logging (only when successful) ===
  if (referrer) {
    const query = getSearchQuery(referrer);
    
    if (query) {
      const source = getSource(referrer);
      console.log(`[SEARCH_REFERRAL] query="${query}" source="${source}" path="${pathname}"`);
    }
  }

  return NextResponse.next();
}

function isBotScan(pathname: string): boolean {
  const lower = pathname.toLowerCase();
  return lower.includes('wp-admin') ||
         lower.includes('wp-login') ||
         lower.includes('wp-content') ||
         lower.includes('xmlrpc') ||
         lower.includes('.env') ||
         lower.includes('wp-json');
}

function getSearchQuery(referrer: string): string | null {
  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();
    const params = url.searchParams;

    if (hostname.includes('google')) return params.get('q') || params.get('p');
    if (hostname.includes('duckduckgo')) return params.get('q') || params.get('query');
    if (hostname.includes('bing')) return params.get('q');
    if (hostname.includes('yahoo')) return params.get('p') || params.get('q');

    return null;
  } catch {
    return null;
  }
}

function getSource(referrer: string): string {
  try {
    const h = new URL(referrer).hostname.toLowerCase();
    if (h.includes('google')) return 'google';
    if (h.includes('duckduckgo')) return 'duckduckgo';
    if (h.includes('bing')) return 'bing';
    return 'other';
  } catch {
    return 'unknown';
  }
}

export const config = {
  matcher: '/:path*',
};