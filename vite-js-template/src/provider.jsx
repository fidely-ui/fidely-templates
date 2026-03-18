import { ThemeProvider } from "next-themes"

export const Provider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
