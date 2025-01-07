export interface Mission {
  id: number;  // Assurez-vous que 'id' est un nombre
  name: string;
  budget: number;
  description: string;
  programs: string[];
}

  export interface Program {
    id: string;
    name: string;
    budget: number;
    description: string;
    actions: Action[];
  }

  export interface Action {
    id: string;
    name: string;
    budget: number;
    description: string;
  }

  export interface Revenue {
    id: string;
    type: 'TVA' | 'IMPOT_REVENU' | 'IMPOT_SOCIETE' | 'COTISATIONS' | 'AUTRES';
    amount: number;
    description: string;
  }

  export interface Budget {
    totalBudget: number;
    totalExpenses: number;
    totalRevenues: number;
    deficit: number;
    debtRatio: number;
    revenues: number;
    year: number;
    missions: Mission[];
  }

  export interface EconomicIndicators {
    gdp: number;
    publicDebt: number;
    deficitRatio: number;
    unemploymentRate: number;
    inflationRate: number;
  }