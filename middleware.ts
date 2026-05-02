import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { track } from '@vercel/analytics/server';

export function middleware(request: NextRequest) {
  const referrer = request.headers.get('referer');

  if (referrer) {
    const searchQuery = getSearchQuery(referrer);

    if (searchQuery) {
      // Log to Vercel Logs (visible in dashboard)
      console.log(`[Search Referral] "${searchQuery}" | ${referrer}`);

      // Track as Custom Event in Vercel Analytics
      track('Search Referral', {
        query: searchQuery,
        referrer: referrer,
        path: request.nextUrl.pathname,
        source: getSource(referrer), // e.g., "google", "bing"
      });
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
    if (hostname.includes('bing')) return params.get('q');
    if (hostname.includes('duckduckgo')) return params.get('q');
    if (hostname.includes('yahoo')) return params.get('p') || params.get('q');
    
    // Brave Search
    if (hostname.includes('search.brave.com') || hostname.includes('brave.com')) {
      return params.get('q');
    }

    return null;
  } catch {
    return null;
  }
}

function getSource(referrer: string): string {
  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    if (hostname.includes('google')) return 'google';
    if (hostname.includes('bing')) return 'bing';
    if (hostname.includes('duckduckgo')) return 'duckduckgo';
    if (hostname.includes('yahoo')) return 'yahoo';
    return 'other';
  } catch {
    return 'unknown';
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};