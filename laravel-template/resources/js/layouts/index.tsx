import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navbar"
import { Provider } from "@/provider"

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <NavBar />
      {children}
      <Footer />
    </Provider>
  )
}