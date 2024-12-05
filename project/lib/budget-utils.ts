// budget-utils.ts

// Formatte une valeur monétaire en milliards d'euros
export function formatAmount(amount: number): string {
  const formattedAmount = (amount / 1_000_000).toFixed(1); // Divide by 1 million for proper formatting
  return `${formattedAmount} Mds €`;
}

// Fournit le budget initial pour une année donnée
export function getInitialBudget(year: number) {
  return {
    totalBudget: 500_000_000_000, // Exemple : 500 milliards d'euros
    totalExpenses: 490_000_000_000,
    missions: [
      { id: 1, name: "Éducation", budget: 100_000_000_000 },
      { id: 2, name: "Santé", budget: 150_000_000_000 },
      { id: 3, name: "Défense", budget: 70_000_000_000 },
    ],
    year, // On inclut l'année comme méta-information
  };
}
