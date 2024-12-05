"use client"

import { Budget } from "@/types/budget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatAmount } from "@/lib/budget-utils"
import { AlertCircle, TrendingDown, TrendingUp } from "lucide-react"

interface BudgetAnalysisProps {
  budget: Budget
}

export function BudgetAnalysis({ budget }: BudgetAnalysisProps) {
  const isDeficit = budget.deficit < 0
  const deficitPercentage = (Math.abs(budget.deficit) / budget.totalRevenues) * 100
  const debtRatio = budget.debtRatio

  function generateAnalysis() {
    let analysis = ""
    let implications = ""
    let recommendations = ""

    // Analyse du déficit
    if (isDeficit) {
      analysis = `Ce budget présente un déficit de ${formatAmount(Math.abs(budget.deficit))} Mds €, 
        soit ${deficitPercentage.toFixed(1)}% des recettes totales. Ce niveau de déficit est ${
        deficitPercentage > 3 ? "supérieur" : "inférieur"
      } au seuil de 3% recommandé par les critères de Maastricht.`

      implications = `Un tel déficit pourrait augmenter la dette publique et réduire la marge de 
        manœuvre budgétaire future. L'impact sur la notation financière de l'État pourrait 
        entraîner une hausse des coûts d'emprunt.`

      recommendations = `Il serait prudent d'envisager :
        - Une optimisation des dépenses publiques
        - Une révision des niches fiscales
        - Un renforcement de la lutte contre la fraude fiscale
        - Des réformes structurelles pour stimuler la croissance`
    } else {
      analysis = `Ce budget dégage un excédent de ${formatAmount(budget.deficit)} Mds €, 
        représentant ${deficitPercentage.toFixed(1)}% des recettes totales. Cette situation 
        favorable permet d'envisager une réduction de la dette publique ou des investissements stratégiques.`

      implications = `Cet excédent offre une opportunité de :
        - Réduire la dette publique
        - Constituer des réserves pour faire face aux chocs futurs
        - Investir dans des secteurs stratégiques
        - Renforcer la protection sociale`

      recommendations = `Il serait judicieux de :
        - Maintenir la discipline budgétaire
        - Investir dans la transition écologique
        - Renforcer la compétitivité économique
        - Améliorer les services publics`
    }

    // Analyse de la répartition des dépenses
    const topMissions = [...budget.missions]
      .sort((a, b) => b.budget - a.budget)
      .slice(0, 3)

    const spendingAnalysis = `Les trois principaux postes de dépenses sont :
      ${topMissions.map(m => `${m.name} (${formatAmount(m.budget)} Mds €)`).join(", ")}.
      Cette répartition reflète les priorités gouvernementales en matière de politiques publiques.`

    return { analysis, implications, recommendations, spendingAnalysis }
  }

  const { analysis, implications, recommendations, spendingAnalysis } = generateAnalysis()

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CardTitle>Analyse Budgétaire</CardTitle>
          {isDeficit && deficitPercentage > 3 && (
            <AlertCircle className="h-5 w-5 text-destructive" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center space-x-2">
                <span>Situation budgétaire</span>
                {isDeficit ? (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                ) : (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{analysis}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Répartition des dépenses</h3>
              <p className="text-sm text-muted-foreground">{spendingAnalysis}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Implications</h3>
              <p className="text-sm text-muted-foreground">{implications}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Recommandations</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{recommendations}</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Cette analyse est générée automatiquement à partir des données budgétaires et des critères 
                économiques standards. Elle ne constitue pas un avis financier professionnel.
              </p>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}