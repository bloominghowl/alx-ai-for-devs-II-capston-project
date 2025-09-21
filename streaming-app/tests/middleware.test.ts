import { describe, it, expect, vi } from 'vitest'

// Mock NextResponse
const NextResponse = {
  redirect: (url: string) => ({ redirected: true, url }),
  next: () => ({ next: true }),
}

vi.mock('next/server', async () => {
  return {
    NextResponse,
  }
})

// Mock supabase auth helpers server-side check
vi.mock('@supabase/auth-helpers-nextjs', () => {
  return {
    // simulate getUser or getSessionFromCookie behavior used in middleware
    getUser: async () => {
      return { data: null } // no session
    },
  }
})

// Import middleware under test path
describe('middleware', () => {
  it('redirects unauthenticated requests to /auth/signin', async () => {
    // dynamic import so mocks are applied
    const mw = await import('../middleware')
    // Build a fake request URL starting with /dashboard
    const req = new Request('http://localhost/dashboard')
    const res = await mw.middleware(req)
    expect(res.redirected).toBeTruthy()
    expect(res.url).toMatch('/auth/signin')
  })
})