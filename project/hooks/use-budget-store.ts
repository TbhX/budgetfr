"use client"

import { create } from "zustand"
import type { Budget, Mission, Revenue } from "@/types/budget"
import { getInitialBudget } from "@/lib/budget-utils"

interface BudgetStore {
  budget: Budget
  updateMissionBudget: (missionId: number, newBudget: number) => void
  updateRevenue: (revenueId: string, newAmount: number) => void
}

const calculateTotalExpenses = (missions: Mission[]) => {
  return missions.reduce((sum, mission) => sum + mission.budget, 0)
}

const calculateDeficit = (totalRevenues: number, totalExpenses: number) => {
  return totalRevenues - totalExpenses
}

const calculateDebtRatio = (totalRevenues: number, deficit: number) => {
  return (deficit / totalRevenues) * 100
}

export const useBudgetStore = create<BudgetStore>((set) => ({
  budget: {
    ...getInitialBudget(2024),
    totalRevenues: 0,
    deficit: 0,
    debtRatio: 0,
    revenues: []  // revenues est un tableau vide initialement
  },
  
  updateMissionBudget: (missionId: number, newBudget: number) =>
    set((state) => {
      const updatedMissions = state.budget.missions.map((mission) =>
        mission.id === missionId
          ? { ...mission, budget: newBudget }
          : mission
      )

      const totalExpenses = calculateTotalExpenses(updatedMissions)
      const deficit = calculateDeficit(state.budget.totalRevenues, totalExpenses)
      const debtRatio = calculateDebtRatio(state.budget.totalRevenues, deficit)

      return {
        budget: {
          ...state.budget,
          missions: updatedMissions,
          totalExpenses,
          deficit,
          debtRatio
        },
      }
    }),

  updateRevenue: (revenueId: string, newAmount: number) =>
    set((state) => {
      console.warn('updateRevenue not implemented - revenues is defined as number in Budget interface')
      return { budget: state.budget }
    }),
}))
