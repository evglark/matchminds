import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import ROUTES from '@/constants/routes';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('apiToken');

  // //Prevent access to pages that require authentication
  // if (!token && !req.nextUrl.pathname.includes('/')) {
  //   return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, req.url));
  // }

  //Prevent access to auth page when authenticated
  if (token && req.nextUrl.pathname.includes('/auth'))
    return NextResponse.redirect(new URL(ROUTES.DEFAULT, req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth/:path*'],
};
