"use client"

import { motion } from "framer-motion"
import { Budget } from "@/types/budget"
import { formatAmount } from "@/lib/budget-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

interface BudgetOverviewProps {
  budget: Budget
}

export function BudgetOverview({ budget }: BudgetOverviewProps) {
  const deficitRatio = (budget.deficit / budget.totalRevenues) * 100

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Recettes Totales</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl font-bold text-blue-600 dark:text-blue-400"
          >
            {formatAmount(budget.totalRevenues)}
          </motion.div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Dépenses Totales</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-3xl font-bold text-red-600 dark:text-red-400"
          >
            {formatAmount(budget.totalExpenses)}
          </motion.div>
        </CardContent>
      </Card>

      <Card className={`bg-gradient-to-br ${
        budget.deficit >= 0 
          ? "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
          : "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
      }`}>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Solde Budgétaire</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className={`text-3xl font-bold ${
                budget.deficit >= 0 
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {formatAmount(budget.deficit)}
            </motion.div>
            <div className="flex items-center space-x-2">
              {budget.deficit >= 0 ? (
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
              )}
              <span className="text-sm text-muted-foreground">
                {Math.abs(deficitRatio).toFixed(1)}% des recettes
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}