"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart } from "@/components/budget/charts/bar-chart"
import { MISSION_DETAILS, type MissionId } from "@/lib/data/mission-details"

interface MissionDetailsProps {
  mission: {
    id: string
    name: string
    description: string
    defaultBudget: number
  }
}

export function MissionDetails({ mission }: MissionDetailsProps) {
  const details = MISSION_DETAILS[mission.id as MissionId] || {
    longDescription: mission.description,
    keyObjectives: [],
    programs: [] as { name: string; budget: number; description: string }[] // Assurez-vous que `programs` est un tableau modifiable
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Présentation</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{details.longDescription}</p>
                {details.keyObjectives?.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Objectifs clés</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {details.keyObjectives.map((objective, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Global</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mission.defaultBudget} Mds €</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {details.programs?.length > 0 && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Répartition par Programme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <BarChart data={details.programs} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Détail des Programmes</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-4">
                    {details.programs.map((program, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">{program.name}</h3>
                          <span className="font-medium">{program.budget} Mds €</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {program.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
