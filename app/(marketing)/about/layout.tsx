import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  )
}