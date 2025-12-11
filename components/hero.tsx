import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
          Expert CPA Services for Your Business
        </h1>
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto">
          Nearly 50 years of combined accounting and auditing expertise. We specialize in governmental and non-profit
          auditing with a local touch in Vernal, Utah.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="#contact" className="inline-flex items-center gap-2">
              Book an Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:4357890960">Call: 435-789-0960</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm font-medium text-foreground/70">Years Combined Experience</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm font-medium text-foreground/70">CPA Licensed Staff</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-accent mb-2">Local</div>
            <div className="text-sm font-medium text-foreground/70">Uintah Basin Focused</div>
          </div>
        </div>
      </div>
    </section>
  )
}
