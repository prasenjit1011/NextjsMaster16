// middleware.ts

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ar', 'hi', 'bn', 'ur'];
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: false
});


export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ============================
  // Redirect locale/locale
  // e.g.
  // /en/ar -> /ar
  // /hi/en -> /en
  // /bn/ur -> /ur
  // ============================
  const parts = pathname.split('/').filter(Boolean);

  if (
    parts.length === 2 &&
    locales.includes(parts[0]) &&
    locales.includes(parts[1])
  ) {
    return NextResponse.redirect(
      new URL(`/${parts[1]}`, request.url)
    );
  }

  // ============================
  // Authentication
  // ============================
  const token = request.cookies.get('token')?.value;

  const localePattern = locales.join('|');

  const isProtected = new RegExp(
    `^(/(${localePattern}))?/dashboard(/|$)`
  ).test(pathname);

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ============================
  // next-intl
  // ============================
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next|.*\\..*).*)'
  ]
};