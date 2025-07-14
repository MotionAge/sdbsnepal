import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Pandit Rajesh Sharma",
      role: "President & Spiritual Guide",
      image: "/placeholder.svg?height=100&width=100",
      description: "Leading the organization with 25+ years of experience in Sanatan Dharma studies.",
    },
    {
      name: "Dr. Sita Devi",
      role: "Vice President & Research Head",
      image: "/placeholder.svg?height=100&width=100",
      description: "PhD in Sanskrit Literature, overseeing research and translation projects.",
    },
    {
      name: "Ram Bahadur Thapa",
      role: "Secretary & Operations Manager",
      image: "/placeholder.svg?height=100&width=100",
      description: "Managing daily operations and community outreach programs.",
    },
    {
      name: "Gita Sharma",
      role: "Treasurer & Finance Head",
      image: "/placeholder.svg?height=100&width=100",
      description: "Ensuring transparent financial management and donor relations.",
    },
    {
      name: "Hari Prasad Gautam",
      role: "Program Coordinator",
      image: "/placeholder.svg?height=100&width=100",
      description: "Coordinating various welfare programs and volunteer activities.",
    },
    {
      name: "Kamala Devi Shrestha",
      role: "Community Relations",
      image: "/placeholder.svg?height=100&width=100",
      description: "Building relationships with local communities and stakeholders.",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals who lead our mission of cultural preservation and humanitarian service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
