import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Check if the request is for protected routes
  if (req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/creator')) {
    // If no session, redirect to signin
    if (!session) {
      return NextResponse.redirect(new URL('/auth/signin', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/creator/:path*']
}