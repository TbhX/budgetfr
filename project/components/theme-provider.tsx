"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Utilisation de React.PropsWithChildren pour typer correctement les props
export function ThemeProvider({ children, ...props }: React.PropsWithChildren<any>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
