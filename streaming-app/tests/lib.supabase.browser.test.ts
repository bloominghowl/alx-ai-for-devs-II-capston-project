import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('createBrowserSupabase', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://test.supabase.co')
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'test-anon-key')
  })

  it('should create a Supabase client with auth property', async () => {
    const { createBrowserSupabase } = await import('../lib/supabase/browser')
    
    const client = createBrowserSupabase()
    
    expect(client).toBeDefined()
    expect(client).toHaveProperty('auth')
  })
})