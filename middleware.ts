// middleware.ts

import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['ar', 'en', 'bn', 'hi'],
  defaultLocale: 'hi'
});

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const pathname = request.nextUrl.pathname;

  const isProtected =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/en/dashboard') ||
    pathname.startsWith('/bn/dashboard') ||
    pathname.startsWith('/hi/dashboard');

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};