"use client";

import { Mission } from "@/types/budget";
import { MissionCard } from "../cards/mission-card";
import { motion } from "framer-motion";

interface MissionsGridProps {
  missions: Mission[];
  onMissionBudgetChange: (missionId: string, newBudget: number) => void;
  maxBudget: number;
}

export function MissionsGrid({ missions, onMissionBudgetChange, maxBudget }: MissionsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {missions.map((mission, index) => (
        <motion.div
          key={mission.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MissionCard
            mission={mission}
            onBudgetChange={(newBudget) => onMissionBudgetChange(String(mission.id), newBudget)}
            maxBudget={maxBudget}
          />
        </motion.div>
      ))}
    </div>
  );
}
