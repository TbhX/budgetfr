"use client"

import { create } from "zustand"
import { Budget } from "@/types/budget"
import { getInitialBudget } from "@/lib/budget-utils"

interface BudgetStore {
  budget: Budget
  updateMissionBudget: (missionId: string, newBudget: number) => void
  updateRevenue: (revenueId: string, newAmount: number) => void
}

export const useBudgetStore = create<BudgetStore>((set) => ({
  budget: getInitialBudget(2024),
  updateMissionBudget: (missionId, newBudget) =>
    set((state) => ({
      budget: {
        ...state.budget,
        missions: state.budget.missions.map((mission) =>
          mission.id === missionId
            ? { ...mission, budget: newBudget }
            : mission
        ),
        totalExpenses: state.budget.missions.reduce(
          (sum, mission) =>
            mission.id === missionId ? sum + newBudget : sum + mission.budget,
          0
        ),
      },
    })),
  updateRevenue: (revenueId, newAmount) =>
    set((state) => ({
      budget: {
        ...state.budget,
        revenues: state.budget.revenues.map((revenue) =>
          revenue.id === revenueId
            ? { ...revenue, amount: newAmount }
            : revenue
        ),
        totalRevenues: state.budget.revenues.reduce(
          (sum, revenue) =>
            revenue.id === revenueId ? sum + newAmount : sum + revenue.amount,
          0
        ),
      },
    })),
}))