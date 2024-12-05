"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-md text-center space-y-6 p-6">
        <div className="flex justify-center">
          <AlertCircle className="h-20 w-20 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Une erreur est survenue
        </h1>
        <p className="text-muted-foreground">
          Nous nous excusons pour ce désagrément. Notre équipe a été notifiée et
          travaille à résoudre le problème.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={reset} variant="default">
            Réessayer
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}