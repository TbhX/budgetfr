"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Budget } from "@/types/budget"
import { formatAmount } from "@/lib/budget-utils"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

interface BudgetComparisonProps {
  currentBudget: Budget
  previousBudget: Budget
}

export function BudgetComparison({ currentBudget, previousBudget }: BudgetComparisonProps) {
  const expenseDiff = currentBudget.totalExpenses - previousBudget.totalExpenses
  const revenueDiff = currentBudget.totalRevenues - previousBudget.totalRevenues
  const deficitDiff = currentBudget.deficit - previousBudget.deficit

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Évolution des dépenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            {expenseDiff > 0 ? (
              <ArrowUpIcon className="h-4 w-4 text-red-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-green-500" />
            )}
            <span className={`text-2xl font-bold ${
              expenseDiff > 0 ? "text-red-600" : "text-green-600"
            }`}>
              {formatAmount(Math.abs(expenseDiff))}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Évolution des recettes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            {revenueDiff > 0 ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-2xl font-bold ${
              revenueDiff > 0 ? "text-green-600" : "text-red-600"
            }`}>
              {formatAmount(Math.abs(revenueDiff))}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Impact sur le déficit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            {deficitDiff > 0 ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-2xl font-bold ${
              deficitDiff > 0 ? "text-green-600" : "text-red-600"
            }`}>
              {formatAmount(Math.abs(deficitDiff))}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}