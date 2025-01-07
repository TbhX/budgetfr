"use client"

import { Button } from "@/components/ui/button"
import { ErrorIcon } from "@/components/ui/error-icon"
import { ErrorMessage } from "@/components/ui/error-message"
import Link from "next/link"
import React from "react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-md text-center space-y-6 p-6">
        <div className="flex justify-center">
          <ErrorIcon />
        </div>
        <ErrorMessage 
          title="Page non trouvée"
          description="Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
        />
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}