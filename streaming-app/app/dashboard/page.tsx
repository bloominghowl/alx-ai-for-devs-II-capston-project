import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg border p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Dashboard
          </h1>
          
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Welcome back!
              </h2>
              <p className="text-muted-foreground">
                You are signed in as: <span className="font-medium text-foreground">{session.user.email}</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">User ID</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {session.user.id}
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Last Sign In</h3>
                <p className="text-sm text-muted-foreground">
                  {session.user.last_sign_in_at ? 
                    new Date(session.user.last_sign_in_at).toLocaleString() : 
                    'N/A'
                  }
                </p>
              </div>
              
              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Email Confirmed</h3>
                <p className="text-sm text-muted-foreground">
                  {session.user.email_confirmed_at ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}