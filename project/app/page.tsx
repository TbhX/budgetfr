import { MainNav } from '@/components/main-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Euro } from 'lucide-react'
import Link from 'next/link'
import { AboutDialog } from '@/components/about-dialog'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <Button asChild>
              <Link href="/auth/login">Connexion</Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container px-4 py-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Euro className="h-20 w-20 text-primary animate-bounce" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Simulateur de Budget de l'État Français
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Créez, ajustez et partagez votre vision du budget de l'État français. 
            Explorez les différentes missions et programmes, analysez l'impact de vos décisions.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/simulateur">Commencer la simulation</Link>
            </Button>
            <AboutDialog />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}