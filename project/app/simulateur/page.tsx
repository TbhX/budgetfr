"use client"

import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { BudgetSimulator } from "@/components/budget/simulator/budget-simulator"
import { ShareBudgetDialog } from "@/components/budget/share-budget-dialog"
import { useBudget } from "@/lib/hooks/use-budget"
import Link from "next/link"
import { ErrorBoundary } from "@/components/error-boundary"

export default function SimulateurPage() {
  const { budget } = useBudget()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <ShareBudgetDialog budget={budget} />
            <Button variant="outline" asChild>
              <Link href="/auth/login">Sauvegarder</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Simulateur de Budget {budget.year}
            </h1>
            <p className="text-muted-foreground">
              Ajustez les dépenses et recettes pour créer votre vision du budget de l'État
            </p>
          </div>

          <ErrorBoundary
            fallback={
              <div className="p-4 text-center">
                <p>Une erreur est survenue lors du chargement du simulateur.</p>
                <Button onClick={() => window.location.reload()} className="mt-4">
                  Réessayer
                </Button>
              </div>
            }
          >
            <BudgetSimulator />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  )
}