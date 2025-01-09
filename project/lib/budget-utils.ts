import { Budget } from "@/types/budget";

export const getInitialBudget = (year: number): Budget => {
  return {
    totalBudget: 0,
    totalExpenses: 0,
    totalRevenues: 0,
    deficit: 0,
    debtRatio: 0,
    missions: [],
    revenues: [],  // revenues est un tableau vide initialement
    year: year,
  };
};

// @/lib/budget-utils.ts

export const formatAmount = (amount: number): string => {
  return amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
};