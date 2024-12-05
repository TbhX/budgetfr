"use client"

import { Revenue } from "@/types/budget"
import { RevenueCard } from "@/components/budget/cards/revenue-card"
import { motion } from "framer-motion"

interface RevenuesGridProps {
  revenues: Revenue[]
  onRevenueChange: (revenueId: string, newAmount: number) => void
}

export function RevenuesGrid({ revenues, onRevenueChange }: RevenuesGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {revenues.map((revenue, index) => (
        <motion.div
          key={revenue.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <RevenueCard
            revenue={revenue}
            onAmountChange={(newAmount) => onRevenueChange(revenue.id, newAmount)}
          />
        </motion.div>
      ))}
    </div>
  )
}