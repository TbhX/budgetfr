export interface Mission {
  id: string;
  name: string;
  budget: number;
  description: string;
  programs: Program[];
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
  year: number;
  totalRevenues: number;
  totalExpenses: number;
  deficit: number;
  debtRatio: number;
  missions: Mission[];
  revenues: Revenue[];
}

export interface EconomicIndicators {
  gdp: number;
  publicDebt: number;
  deficitRatio: number;
  unemploymentRate: number;
  inflationRate: number;
}