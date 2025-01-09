// utils/budget.ts
import type { 
  Budget, 
  Mission, 
  Revenue, 
  EconomicIndicators 
} from "@/types/budget"

import { 
  MISSION_CATEGORIES, 
  REVENUE_CATEGORIES, 
  DEFAULT_ECONOMIC_INDICATORS 
} from "@/lib/config/constants"

export function calculateTotalRevenues(revenues: Revenue[]): number {
  return revenues.reduce((sum, rev) => sum + rev.amount, 0)
}

export function calculateTotalExpenses(missions: Mission[]): number {
  return missions.reduce((sum, mission) => sum + mission.budget, 0)
}

export function calculateDeficit(revenues: Revenue[], missions: Mission[]): number {
  const totalRevenues = calculateTotalRevenues(revenues)
  const totalExpenses = calculateTotalExpenses(missions)
  return totalRevenues - totalExpenses
}

export function calculateDebtRatio(debt: number, gdp: number): number {
  return (debt / gdp) * 100
}

export function getInitialBudget(year: number): Budget {
  const missions = MISSION_CATEGORIES.map((category, index) => ({
    id: index + 1,
    name: category.name,
    budget: category.defaultBudget,
    description: category.description,
    programs: [],
  })) satisfies Mission[]

  const revenues = REVENUE_CATEGORIES.map(category => ({
    id: category.id,
    type: category.id.toUpperCase() as Revenue["type"],
    amount: category.defaultAmount,
    description: category.description,
  })) satisfies Revenue[]

  const totalRevenues = calculateTotalRevenues(revenues)
  const totalExpenses = calculateTotalExpenses(missions)
  const totalBudget = totalExpenses
  const deficit = totalRevenues - totalExpenses
  const debtRatio = calculateDebtRatio(
    DEFAULT_ECONOMIC_INDICATORS.publicDebt,
    DEFAULT_ECONOMIC_INDICATORS.gdp
  )

  return {
    year,
    totalRevenues,
    totalExpenses,
    totalBudget,
    deficit,
    debtRatio,
    missions,
    revenues,
  }
}

export function formatAmount(amount: number, currency: boolean = true): string {
  const formatted = new Intl.NumberFormat("fr-FR", {
    style: currency ? "currency" : "decimal",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(amount)
  
  return currency ? formatted : formatted + " Mds €"
}

export function calculateImpact(budget: Budget, baseIndicators: EconomicIndicators): EconomicIndicators {
  const deficitChange = budget.deficit - baseIndicators.deficitRatio
  const deficitRatioChange = (deficitChange / baseIndicators.gdp) * 100

  return {
    ...baseIndicators,
    deficitRatio: baseIndicators.deficitRatio + deficitRatioChange,
    publicDebt: baseIndicators.publicDebt - deficitChange,
  }
}