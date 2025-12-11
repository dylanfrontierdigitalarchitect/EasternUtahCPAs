import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const team = [
  {
    name: "Samuel J. Nay",
    credentials: "CPA, MBA",
    description:
      "Experienced accounting and auditing professional with expertise in governmental and non-profit sectors.",
  },
  {
    name: "Linda Nay",
    credentials: "CPA",
    description: "Dedicated CPA with deep knowledge of accounting standards and compliance requirements.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-lg text-foreground/70">Experienced professionals dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                <CardTitle className="text-primary">{member.name}</CardTitle>
                <p className="text-sm text-accent font-semibold mt-1">{member.credentials}</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
