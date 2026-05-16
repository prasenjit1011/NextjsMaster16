// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';


export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const isProtected = request.nextUrl.pathname.startsWith('/dashboard');

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export default createMiddleware({
  locales: ['en', 'bn', 'hi'],
  defaultLocale: 'en'
});

export const config = {
  matcher: [
    '/', 
    '/(bn|en|hi)/:path*',
    '/dashboard/:path*'
  ],
};