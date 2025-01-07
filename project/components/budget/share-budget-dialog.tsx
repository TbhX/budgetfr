'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Budget } from "@/types/budget"
import { formatAmount } from "@/lib/budget-utils"

interface ShareBudgetDialogProps {
  budget: Budget
}

export function ShareBudgetDialog({ budget }: ShareBudgetDialogProps) {
  const [description, setDescription] = useState("")

  // URL et texte pour le partage
  const shareUrl = `https://budgetfr.fr/share/${budget.year}`
  const shareText = `Mon budget pour la France ${budget.year} - Total: ${formatAmount(budget.totalExpenses)}`

  // Liens pour les réseaux sociaux
  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2" variant="outline">
          <Share2 className="h-4 w-4" />
          Partager mon budget
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Partager votre budget</DialogTitle>
          <DialogDescription>
            Partagez votre vision du budget de l'État avec la communauté
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Lien de partage</label>
            <div className="flex gap-2">
              <Input value={shareUrl} readOnly />
              <Button
                onClick={() => navigator.clipboard.writeText(shareUrl)}
                variant="outline"
              >
                Copier
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description (optionnel)</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Expliquez vos choix budgétaires..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Partager sur les réseaux</label>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.twitter, "_blank")}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.facebook, "_blank")}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.linkedin, "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
