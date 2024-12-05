export const MISSION_CATEGORIES = [
  {
    id: 'defense',
    name: 'Défense',
    description: 'Protection du territoire et des intérêts français',
    defaultBudget: 49.9,
  },
  {
    id: 'education',
    name: 'Enseignement scolaire',
    description: 'Formation et éducation de la jeunesse',
    defaultBudget: 55.2,
  },
  {
    id: 'research',
    name: 'Recherche et enseignement supérieur',
    description: 'Innovation et formation supérieure',
    defaultBudget: 29.1,
  },
  {
    id: 'solidarity',
    name: 'Solidarité, insertion et égalité des chances',
    description: 'Cohésion sociale et aide aux plus démunis',
    defaultBudget: 29.8,
  },
  {
    id: 'ecology',
    name: 'Écologie, développement et mobilité durables',
    description: "Protection de l'environnement et transition écologique",
    defaultBudget: 21.6,
  },
  {
    id: 'security',
    name: 'Sécurité',
    description: 'Sécurité intérieure et ordre public',
    defaultBudget: 21.7,
  },
  {
    id: 'justice',
    name: 'Justice',
    description: 'Service public de la justice',
    defaultBudget: 12.8,
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Promotion et accès à la culture',
    defaultBudget: 3.7,
  },
] as const

export const REVENUE_CATEGORIES = [
  {
    id: 'tva',
    name: 'TVA',
    description: 'Taxe sur la Valeur Ajoutée',
    defaultAmount: 92.4,
  },
  {
    id: 'ir',
    name: 'Impôt sur le revenu',
    description: 'Impôt progressif sur les revenus des ménages',
    defaultAmount: 77.0,
  },
  {
    id: 'is',
    name: 'Impôt sur les sociétés',
    description: 'Impôt sur les bénéfices des entreprises',
    defaultAmount: 39.4,
  },
  {
    id: 'cotisations',
    name: 'Cotisations sociales',
    description: 'Contributions aux organismes sociaux',
    defaultAmount: 251.3,
  },
  {
    id: 'autres',
    name: 'Autres recettes',
    description: "Autres sources de revenus de l'État",
    defaultAmount: 52.8,
  },
] as const

export const DEFAULT_ECONOMIC_INDICATORS = {
  gdp: 2500.9,
  publicDebt: 2956.8,
  deficitRatio: -4.7,
  unemploymentRate: 7.1,
  inflationRate: 2.1,
} as const

export const CHART_COLORS = {
  revenue: 'hsl(var(--chart-1))',
  expense: 'hsl(var(--chart-2))',
  deficit: 'hsl(var(--chart-3))',
  debt: 'hsl(var(--chart-4))',
  other: 'hsl(var(--chart-5))',
} as const