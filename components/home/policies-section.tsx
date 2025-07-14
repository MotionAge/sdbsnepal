import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Users, Heart, BookOpen, Scale } from "lucide-react"

export function PoliciesSection() {
  const policies = [
    {
      icon: Shield,
      title: "Transparency Policy",
      description:
        "All financial transactions and program activities are conducted with complete transparency and regular public reporting.",
    },
    {
      icon: Users,
      title: "Inclusion Policy",
      description: "We welcome people from all backgrounds while maintaining our core values and cultural identity.",
    },
    {
      icon: Heart,
      title: "Child Protection",
      description:
        "Strict safeguarding measures to protect children in our care with regular monitoring and evaluation.",
    },
    {
      icon: Eye,
      title: "Privacy Policy",
      description: "Protecting personal information of members, donors, and beneficiaries with utmost confidentiality.",
    },
    {
      icon: BookOpen,
      title: "Educational Standards",
      description: "Maintaining high educational standards in all our learning programs and institutions.",
    },
    {
      icon: Scale,
      title: "Ethical Guidelines",
      description:
        "All activities are guided by ethical principles rooted in Sanatan Dharma values and modern best practices.",
    },
  ]

  return (
    <section id="policies" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Policies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our organizational policies ensure ethical operations, transparency, and the highest standards of service
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <policy.icon className="h-5 w-5 text-white" />
                  </div>
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
