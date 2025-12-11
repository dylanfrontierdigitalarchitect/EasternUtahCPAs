import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}
