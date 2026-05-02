import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { track } from '@vercel/analytics/server';

export function middleware(request: NextRequest) {
  const referrer = request.headers.get('referer');
  
  // Always log that middleware ran
  console.log(`[Middleware] Path: ${request.nextUrl.pathname} | Referrer: ${referrer ? 'present' : 'none'}`);

  if (referrer) {
    const query = getSearchQuery(referrer);
    if (query) {
      const source = getSource(referrer);
      console.log(`[SEARCH_REFERRAL] query="${query}" source="${source}" path="${request.nextUrl.pathname}"`);
      
      // Optional: track even if on Hobby (it just won't show in Events panel)
      try {
        track('Search Referral', { query, source, path: request.nextUrl.pathname });
      } catch (e) {}
    }
  }

  return NextResponse.next();
}

function getSearchQuery(referrer: string): string | null {
  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();
    const params = url.searchParams;

    if (hostname.includes('google')) return params.get('q') || params.get('p');
    if (hostname.includes('duckduckgo')) return params.get('q');
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
    return 'other';
  } catch {
    return 'unknown';
  }
}

export const config = {
  matcher: '/:path*',
};