import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Building2, TrendingUp, Users, BarChart3, Briefcase } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Audit Services",
    description:
      "Comprehensive audits for governmental units and non-profit organizations with expertise in GAAFR and GASB standards.",
  },
  {
    icon: Building2,
    title: "Governmental Accounting",
    description:
      "Specialized services for government entities staying current with state and federal accounting requirements.",
  },
  {
    icon: BarChart3,
    title: "Accounting Services",
    description:
      "Full range of accounting support including bookkeeping, financial reporting, and compliance services.",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    description:
      "Strategic tax planning to optimize your business and organizational structure for maximum efficiency.",
  },
  {
    icon: Users,
    title: "Management Services",
    description: "Expert guidance on business operations, personnel matters, and organizational improvement.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Budgeting, forecasting, and strategic consulting to support your business growth and planning.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive accounting and auditing services tailored to your organization's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border border-border hover:border-primary/50 transition">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
