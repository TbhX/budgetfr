"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatAmount } from "@/lib/budget-utils"

const communitySimulations = [
  {
    id: 1,
    user: {
      name: "Thomas Martin",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    },
    title: "Budget Écologique 2024",
    description: "Priorité à la transition écologique et aux énergies renouvelables",
    totalBudget: 450.5,
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    user: {
      name: "Marie Dubois",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
    },
    title: "Innovation et Recherche",
    description: "Investissement massif dans la recherche et le développement",
    totalBudget: 380.2,
    likes: 189,
    comments: 32,
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold tracking-tight mb-8">
            Communauté BudgetFr
          </h1>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communitySimulations.map((simulation, index) => (
            <FadeIn key={simulation.id} delay={index * 0.1}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={simulation.user.image} />
                      <AvatarFallback>{simulation.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{simulation.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        par {simulation.user.name}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {simulation.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Budget total</span>
                      <span className="font-medium">
                        {formatAmount(simulation.totalBudget)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>❤️ {simulation.likes}</span>
                      <span>💬 {simulation.comments}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}