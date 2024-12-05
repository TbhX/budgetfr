"use client"

import { EconomicIndicators, Mission } from "@/types/budget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BudgetChart } from "../budget-chart"
import { EconomicIndicatorsDisplay } from "../economic-indicators"

interface ImpactAnalysisProps {
  indicators: EconomicIndicators
  missions: Mission[]
}

export function ImpactAnalysis({ indicators, missions }: ImpactAnalysisProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Impact Économique</CardTitle>
        </CardHeader>
        <CardContent>
          <EconomicIndicatorsDisplay indicators={indicators} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Répartition du Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <BudgetChart missions={missions} />
        </CardContent>
      </Card>
    </div>
  )
}