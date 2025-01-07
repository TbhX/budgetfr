// components/budget/budget-overview.tsx
import React from "react";
import { Budget } from "@/types/budget";
import { MissionCard } from "./mission-card";  // Assurez-vous que ce fichier est importé correctement

interface BudgetOverviewProps {
  budget: Budget;
}

export const BudgetOverview: React.FC<BudgetOverviewProps> = ({ budget }) => {
  return (
    <div>
      <h2>Overview of Budget</h2>
      <div>
        <div>Total Budget: {budget.totalBudget}</div>
        <div>Total Revenues: {budget.totalRevenues}</div>
        <div>Total Expenses: {budget.totalExpenses}</div>
      </div>
      <div>
        {budget.missions.map((mission) => (
          <MissionCard
            key={mission.id}
            mission={mission}
            totalBudget={budget.totalBudget}
          />
        ))}
      </div>
    </div>
  );
};
