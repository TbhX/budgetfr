"use client"

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

interface BarChartProps {
  data: Array<{
    name: string
    budget: number
  }>
}

export function BarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <XAxis 
          dataKey="name"
          tick={{ fill: 'hsl(var(--foreground))' }}
        />
        <YAxis 
          tickFormatter={(value) => `${value} Mds €`}
          tick={{ fill: 'hsl(var(--foreground))' }}
        />
        <Tooltip
          formatter={(value: number) => [`${value} Mds €`, "Budget"]}
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Bar 
          dataKey="budget" 
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}