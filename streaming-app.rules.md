# Streaming App - Project Rules (AI/IDE friendly)

1. Folder & routing
   - Use Next.js App Router: pages under `/app/*`.
   - Media routes and server endpoints live under `/app/api/*`.
   - Shared UI components go in `/components/`.
   - Helpers and clients live in `/lib/`.

2. Forms & UI patterns
   - Use `react-hook-form` for form state; validate with `zod`.
   - Use `shadcn/ui` components for consistent design. Keep forms small and accessible.
   - Player UI is a client component; metadata pages are server components.

3. Supabase usage
   - Use `lib/supabase/browser.ts` for browser code and `lib/supabase/server.ts` for server-only operations.
   - Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client (it must appear only in server env).
   - Use RLS and RPCs for sensitive write logic (e.g., casting votes, incrementing play counts, publishing episodes).

4. Testing & CI
   - Unit tests via Vitest for helpers and small units.
   - E2E tests via Playwright for auth + protected routes + basic playback flows.
   - Add tests when adding critical server logic (e.g., upload token minting, middleware).

5. AI scaffolding expectations
   - When using IDE AI to scaffold code, ensure:
     - It uses `react-hook-form`/`zod` for forms when required.
     - Server access uses server supabase client, not the browser anon key.
     - Middleware must import `@supabase/auth-helpers-nextjs` or explicit JWT verification as per project standard.
   - If generated code deviates from these rules, update the rule file with the new pattern and fix generated code.

---