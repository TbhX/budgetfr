"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { formatAmount } from "@/lib/budget-utils"

interface MissionSliderProps {
  initialValue: number
  maxValue: number
  onChange: (value: number) => void
}

export function MissionSlider({ initialValue, maxValue, onChange }: MissionSliderProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (newValue: number[]) => {
    const updatedValue = newValue[0]
    setValue(updatedValue)
    onChange(updatedValue)
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Budget actuel</span>
        <span className="font-medium">{formatAmount(value)}</span>
      </div>
      <Slider
        value={[value]}
        max={maxValue}
        step={0.1}
        onValueChange={handleChange}
        className="cursor-pointer"
      />
    </div>
  )
}