"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">En savoir plus</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>À propos de BudgetFr</DialogTitle>
          <DialogDescription>
            Comprendre et participer au débat budgétaire
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] mt-4">
          <div className="space-y-4 pr-4">
            <section>
              <h3 className="font-semibold mb-2">Notre Mission</h3>
              <p className="text-sm text-muted-foreground">
                BudgetFr est un simulateur interactif du budget de l'État français, conçu pour rendre accessible et compréhensible la complexité des finances publiques. Notre plateforme permet à chaque citoyen de comprendre, d'analyser et de proposer sa vision du budget national.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Fonctionnalités Principales</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Simulation détaillée du budget de l'État</li>
                <li>Analyse de l'impact des choix budgétaires</li>
                <li>Visualisation interactive des données</li>
                <li>Partage des simulations avec la communauté</li>
                <li>Comparaison avec les budgets précédents</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Objectifs Pédagogiques</h3>
              <p className="text-sm text-muted-foreground">
                Notre simulateur vise à :
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mt-2">
                <li>Démocratiser la compréhension des finances publiques</li>
                <li>Encourager le débat citoyen sur les choix budgétaires</li>
                <li>Sensibiliser aux enjeux de la gestion publique</li>
                <li>Favoriser la transparence des décisions budgétaires</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Données et Méthodologie</h3>
              <p className="text-sm text-muted-foreground">
                Les données utilisées sont basées sur les documents budgétaires officiels de l'État français. Notre simulateur prend en compte les principales missions budgétaires et permet d'explorer différents scénarios tout en visualisant leur impact sur les finances publiques.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}