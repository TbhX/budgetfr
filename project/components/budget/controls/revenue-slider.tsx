"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { formatAmount } from "@/lib/budget-utils"

interface RevenueSliderProps {
  initialValue: number
  onChange: (value: number) => void
  type: string
}

export function RevenueSlider({ initialValue, onChange, type }: RevenueSliderProps) {
  const [value, setValue] = useState(initialValue)

  // Define realistic limits based on revenue type
  const getLimits = (type: string, baseValue: number) => {
    const limits = {
      TVA: { min: baseValue * 0.8, max: baseValue * 1.2 }, // TVA: variation de ±20%
      IMPOT_REVENU: { min: baseValue * 0.7, max: baseValue * 1.3 }, // IR: variation de ±30%
      IMPOT_SOCIETE: { min: baseValue * 0.6, max: baseValue * 1.4 }, // IS: variation de ±40%
      COTISATIONS: { min: baseValue * 0.9, max: baseValue * 1.1 }, // Cotisations: variation de ±10%
      AUTRES: { min: baseValue * 0.75, max: baseValue * 1.25 }, // Autres: variation de ±25%
    }[type] || { min: baseValue * 0.5, max: baseValue * 1.5 }

    return {
      min: Math.round(limits.min * 10) / 10,
      max: Math.round(limits.max * 10) / 10,
    }
  }

  const limits = getLimits(type, initialValue)

  const handleChange = (newValue: number[]) => {
    const updatedValue = newValue[0]
    setValue(updatedValue)
    onChange(updatedValue)
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Montant actuel</span>
        <span className="font-medium">{formatAmount(value)} Mds €</span>
      </div>
      <Slider
        value={[value]}
        min={limits.min}
        max={limits.max}
        step={0.1}
        onValueChange={handleChange}
        className="cursor-pointer"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatAmount(limits.min)} Mds €</span>
        <span>{formatAmount(limits.max)} Mds €</span>
      </div>
    </div>
  )
}