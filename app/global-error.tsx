'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="bg-background text-foreground">
        <div className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
              
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Application Error
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Something went wrong with the application. Please try refreshing the page.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset} className="flex-1 sm:flex-none">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button variant="outline" asChild className="flex-1 sm:flex-none">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Link>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  If the problem persists, please{' '}
                  <Link href="/contact" className="text-accent hover:underline">
                    contact support
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
