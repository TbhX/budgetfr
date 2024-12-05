"use client"

import { useState } from "react"
import { MissionsGrid } from "./missions-grid"
import { ImpactAnalysis } from "./impact-analysis"
import { RevenuesGrid } from "./revenues-grid"
import { useBudget } from "@/lib/hooks/use-budget"
import { calculateImpact } from "@/lib/utils/budget"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DEFAULT_ECONOMIC_INDICATORS } from "@/lib/config/constants"

export function BudgetSimulator() {
  const { budget, updateMissionBudget, updateRevenue } = useBudget()
  const [activeTab, setActiveTab] = useState("missions")
  const indicators = calculateImpact(budget, DEFAULT_ECONOMIC_INDICATORS)

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <div className="space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="revenues">Recettes</TabsTrigger>
          </TabsList>
          <TabsContent value="missions" className="mt-6">
            <MissionsGrid
              missions={budget.missions}
              onMissionBudgetChange={updateMissionBudget}
              maxBudget={budget.totalRevenues}
            />
          </TabsContent>
          <TabsContent value="revenues" className="mt-6">
            <RevenuesGrid
              revenues={budget.revenues}
              onRevenueChange={updateRevenue}
            />
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <ImpactAnalysis
          indicators={indicators}
          missions={budget.missions}
        />
      </div>
    </div>
  )
}