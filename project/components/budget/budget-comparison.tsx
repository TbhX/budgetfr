// components/budget/budget-comparison.tsx
import React from "react";
import { Budget } from "@/types/budget";

interface BudgetComparisonProps {
  currentBudget: Budget;
  previousBudget: Budget;
}

export const BudgetComparison: React.FC<BudgetComparisonProps> = ({ currentBudget, previousBudget }) => {
  return (
    <div>
      <h3>Budget Comparison</h3>
      <div>Current Budget: {currentBudget.totalBudget}</div>
      <div>Previous Budget: {previousBudget.totalBudget}</div>
      {/* Add comparison logic here */}
    </div>
  );
};
