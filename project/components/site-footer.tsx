import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Créé par{" "}
          <Link
            href="https://www.tamsir.fr"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Kollab A
          </Link>
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} BudgetFr. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}