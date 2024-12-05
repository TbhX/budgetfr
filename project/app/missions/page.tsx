"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MissionDetails } from "@/components/missions/mission-details"
import { MISSION_CATEGORIES } from "@/lib/constants"

export default function MissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Missions Budgétaires
          </h1>
          <p className="text-muted-foreground mb-8">
            Découvrez en détail les différentes missions du budget de l'État
          </p>
        </FadeIn>

        <Tabs defaultValue={MISSION_CATEGORIES[0].id} className="space-y-8">
          <ScrollArea className="w-full">
            <TabsList className="w-full flex flex-nowrap justify-start p-1 mb-4">
              {MISSION_CATEGORIES.map((mission) => (
                <TabsTrigger
                  key={mission.id}
                  value={mission.id}
                  className="flex-shrink-0"
                >
                  {mission.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>

          {MISSION_CATEGORIES.map((mission) => (
            <TabsContent key={mission.id} value={mission.id}>
              <MissionDetails mission={mission} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}