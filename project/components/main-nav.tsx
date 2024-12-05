import Link from "next/link"
import { Euro } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <Euro className="h-6 w-6" />
        <span className="font-bold">BudgetFr</span>
      </Link>
      <Link
        href="/missions"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Missions
      </Link>
      <Link
        href="/simulateur"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Simulateur
      </Link>
      <Link
        href="/budget"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Mon Budget
      </Link>
      <Link
        href="/community"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Communauté
      </Link>
    </div>
  )
}