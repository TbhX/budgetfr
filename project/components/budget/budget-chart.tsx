"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Mission } from "@/types/budget"; // Importation du type Mission existant
import { formatAmount } from "@/lib/budget-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Pas besoin de redéclarer le type Mission ici, il est déjà importé

interface BudgetChartProps {
  missions: Mission[]; // Utilisation du type Mission importé
}

export function BudgetChart({ missions }: BudgetChartProps) {
  const data = missions.map((mission) => ({
    name: mission.name,
    value: mission.budget,
  }))

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition du Budget par Mission</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name} (${formatAmount(value)})`}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatAmount(value)}
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </CardContent>
    </Card>
  )
}
