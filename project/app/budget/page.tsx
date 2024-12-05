"use client"

import { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { BudgetOverview } from "@/components/budget/budget-overview"
import { EconomicIndicatorsDisplay } from "@/components/budget/economic-indicators"
import { MissionCard } from "@/components/budget/mission-card"
import { ShareBudgetDialog } from "@/components/budget/share-budget-dialog"
import { BudgetComparison } from "@/components/budget/budget-comparison"
import { BudgetChart } from "@/components/budget/budget-chart"
import { getInitialBudget } from "@/lib/budget-utils"
import { DEFAULT_ECONOMIC_INDICATORS } from "@/lib/constants"

export default function BudgetPage() {
  const [budget] = useState(() => getInitialBudget(2024))
  const previousBudget = getInitialBudget(2023)

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight">
              Budget de l'État 2024
            </h1>
          </FadeIn>
          <FadeIn>
            <ShareBudgetDialog budget={budget} />
          </FadeIn>
        </div>

        <div className="space-y-8">
          <FadeIn delay={0.1}>
            <BudgetOverview budget={budget} />
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Comparaison avec 2023</h2>
                <BudgetComparison
                  currentBudget={budget}
                  previousBudget={previousBudget}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Indicateurs Économiques</h2>
                <EconomicIndicatorsDisplay indicators={DEFAULT_ECONOMIC_INDICATORS} />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Répartition du Budget</h2>
              <BudgetChart missions={budget.missions} />
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Détail des Missions</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {budget.missions.map((mission, index) => (
                  <FadeIn key={mission.id} delay={0.1 * index}>
                    <MissionCard
                      mission={mission}
                      totalBudget={budget.totalExpenses}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}