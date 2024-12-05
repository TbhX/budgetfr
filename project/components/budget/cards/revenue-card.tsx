"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Revenue } from "@/types/budget"
import { RevenueSlider } from "@/components/budget/controls/revenue-slider"

interface RevenueCardProps {
  revenue: Revenue
  onAmountChange: (newAmount: number) => void
}

export function RevenueCard({ revenue, onAmountChange }: RevenueCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{revenue.type}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{revenue.description}</p>
        <RevenueSlider
          initialValue={revenue.amount}
          onChange={onAmountChange}
          type={revenue.type}
        />
      </CardContent>
    </Card>
  )
}