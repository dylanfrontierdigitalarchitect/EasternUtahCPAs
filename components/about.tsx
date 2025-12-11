import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Utah licensed full-service CPA firm",
  "Members of AICPA and Utah Association of CPAs",
  "Also licensed in Colorado and Georgia",
  "Current with GASB and Governmental Auditing Standards",
  "Single Audit Act compliance expertise",
  "Library of current FASB and GASB publications",
  "Subscribers to Practitioners Publishing Company updates",
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About Eastern Utah CPAs</h2>
            <p className="text-foreground/70 mb-4">
              Eastern Utah CPA's, PLLC is a Utah licensed full-service CPA firm with significant experience in
              governmental and non-profit auditing. We provide comprehensive services to governmental units and
              not-for-profit organizations.
            </p>
            <p className="text-foreground/70 mb-6">
              Our team's expertise spans accounting, tax planning, management services, business planning, personnel
              guidance, budgeting, and consulting. We stay current with the latest governmental accounting standards and
              requirements.
            </p>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-white border border-border">
              <CardContent className="pt-6">
                <h3 className="font-bold text-primary mb-2">Location</h3>
                <p className="text-sm text-foreground/70">
                  134 West Main, Suite 101
                  <br />
                  Vernal, Utah 84078
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border">
              <CardContent className="pt-6">
                <h3 className="font-bold text-primary mb-2">Hours</h3>
                <p className="text-sm text-foreground/70">
                  <strong>Tuesday & Thursday:</strong> 8 AM - 5 PM
                  <br />
                  <strong>Monday, Wednesday, Friday:</strong> By Appointment Only
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border">
              <CardContent className="pt-6">
                <h3 className="font-bold text-primary mb-2">Contact</h3>
                <p className="text-sm text-foreground/70">
                  <a href="tel:4357890960" className="text-primary hover:underline font-semibold">
                    435-789-0960
                  </a>
                  <br />
                  Let's talk about your accounting needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
