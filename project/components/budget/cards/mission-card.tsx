"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mission } from "@/types/budget"
import { formatAmount } from "@/lib/budget-utils"
import { MissionSlider } from "../controls/mission-slider"

interface MissionCardProps {
  mission: Mission
  onBudgetChange: (newBudget: number) => void
  maxBudget: number
}

export function MissionCard({ mission, onBudgetChange, maxBudget }: MissionCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{mission.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{mission.description}</p>
        <MissionSlider
          initialValue={mission.budget}
          maxValue={maxBudget}
          onChange={onBudgetChange}
        />
      </CardContent>
    </Card>
  )
}