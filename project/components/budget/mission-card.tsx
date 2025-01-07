// components/budget/mission-card.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mission } from "@/types/budget";
import { formatAmount } from "@/lib/budget-utils";
import { Progress } from "@/components/ui/progress";

interface MissionCardProps {
  mission: Mission;
  totalBudget: number;
  onClick?: () => void;
}

export function MissionCard({ mission, totalBudget, onClick }: MissionCardProps) {
  const percentage = (mission.budget / totalBudget) * 100;

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader>
        <CardTitle>{mission.name}</CardTitle>
        <CardDescription>{mission.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Budget</span>
            <span className="text-sm font-medium">{formatAmount(mission.budget)}</span>
          </div>
          <Progress value={percentage} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{percentage.toFixed(1)}% du budget total</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
