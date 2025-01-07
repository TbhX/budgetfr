// app/budget/page.tsx
import React from "react";
import { BudgetOverview } from "@/components/budget/budget-overview";  // Assurez-vous que ce fichier est importé correctement
import { Budget } from "@/types/budget";

const budgetData: Budget = {
  totalBudget: 100000,
  totalExpenses: 50000,
  totalRevenues: 80000,
  deficit: 20000,
  debtRatio: 0.5,
  revenues: 75000,
  year: 2025,
  missions: [
    { id: 1, name: "Mission A", budget: 20000, description: "Description A", programs: ["Program 1", "Program 2"] },
    { id: 2, name: "Mission B", budget: 15000, description: "Description B", programs: ["Program 3", "Program 4"] },
  ],
};

const BudgetPage = () => {
  return (
    <div>
      <BudgetOverview budget={budgetData} />
    </div>
  );
};

export default BudgetPage;
