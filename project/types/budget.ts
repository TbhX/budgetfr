export interface Mission {
  id: number;  // Assurez-vous que 'id' est un nombre
  name: string;
  budget: number;
  description: string;
  programs: string[];  // Liste des programmes associés à la mission
}

export interface Program {
  id: string;
  name: string;
  budget: number;
  description: string;
  actions: Action[];  // Liste des actions dans le programme
}

export interface Action {
  id: string;
  name: string;
  budget: number;
  description: string;
}

export interface Revenue {
  id: string;
  type: 'TVA' | 'IMPOT_REVENU' | 'IMPOT_SOCIETE' | 'COTISATIONS' | 'AUTRES';  // Types de revenus
  amount: number;
  description: string;
}

export interface Budget {
  totalBudget: number;
  totalExpenses: number;
  totalRevenues: number;
  deficit: number;
  debtRatio: number;
  revenues: Revenue[];   // Revenus maintenant sous forme de tableau d'objets Revenue[]
  year: number;
  missions: Mission[];   // Liste des missions associées au budget
}

export interface EconomicIndicators {
  gdp: number;  // PIB
  publicDebt: number;  // Dette publique
  deficitRatio: number;  // Ratio du déficit
  unemploymentRate: number;  // Taux de chômage
  inflationRate: number;  // Taux d'inflation
}
