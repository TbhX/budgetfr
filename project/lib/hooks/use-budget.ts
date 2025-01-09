import { create } from "zustand"
import { Budget } from "@/types/budget"
import { getInitialBudget } from "@/lib/utils/budget"

interface BudgetStore {
  budget: Budget
  updateMissionBudget: (missionId: number, newBudget: number) => void
  updateRevenue: (revenueId: string, newAmount: number) => void
  resetBudget: () => void
}

export const useBudget = create<BudgetStore>((set) => ({
  budget: getInitialBudget(2024),
  
  updateMissionBudget: (missionId, newBudget) =>
    set((state) => {
      const updatedMissions = state.budget.missions.map((mission) =>
        mission.id === missionId ? { ...mission, budget: newBudget } : mission
      )
      
      const totalExpenses = updatedMissions.reduce(
        (sum, mission) => sum + mission.budget,
        0
      )
      
      return {
        budget: {
          ...state.budget,
          missions: updatedMissions,
          totalExpenses,
          deficit: state.budget.totalRevenues - totalExpenses,
        },
      }
    }),
    
  updateRevenue: (revenueId, newAmount) =>
    set((state) => {
      const updatedRevenues = state.budget.revenues.map((revenue) =>
        revenue.id === revenueId ? { ...revenue, amount: newAmount } : revenue
      )
      
      const totalRevenues = updatedRevenues.reduce(
        (sum, revenue) => sum + revenue.amount,
        0
      )
      
      return {
        budget: {
          ...state.budget,
          revenues: updatedRevenues,
          totalRevenues,
          deficit: totalRevenues - state.budget.totalExpenses,
        },
      }
    }),
    
  resetBudget: () =>
    set(() => ({
      budget: getInitialBudget(2024),
    })),
}))
