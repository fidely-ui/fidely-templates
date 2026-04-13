"use client"

import { ThemeProvider } from "next-themes"

interface ProviderProps {
  children: React.ReactNode
}

export const Provider = (props: ProviderProps) => {
  const scriptProps =
    typeof window === 'undefined'
      ? undefined
      : ({ type: 'application/json' } as const)

  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      scriptProps={scriptProps}
    >
      {props.children}
    </ThemeProvider>
  )
}