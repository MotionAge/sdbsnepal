import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Crown, Users, UserPlus, Heart } from "lucide-react"

export const metadata = {
  title: "Membership - SDB Nepal",
  description:
    "Join Sanatan Dharma Bigyan Samaj (SDB Nepal) as a member and be part of our cultural preservation and humanitarian mission.",
}

export default function MembershipPage() {
  const membershipTypes = [
    {
      icon: Crown,
      title: "Lifetime Membership",
      price: "NPR 10,000",
      description: "One-time payment for lifetime membership with full voting rights and benefits.",
      benefits: [
        "Lifetime membership certificate",
        "Voting rights in general assembly",
        "Priority access to events and programs",
        "Annual reports and updates",
        "Special recognition in publications",
      ],
    },
    {
      icon: Users,
      title: "Annual Membership",
      price: "NPR 1,000/year",
      description: "Annual membership with renewable benefits and participation rights.",
      benefits: [
        "Annual membership certificate",
        "Participation in events",
        "Regular newsletters",
        "Access to library resources",
        "Community network access",
      ],
    },
    {
      icon: UserPlus,
      title: "Monthly Membership",
      price: "NPR 100/month",
      description: "Flexible monthly membership for ongoing support and engagement.",
      benefits: [
        "Monthly updates",
        "Event notifications",
        "Basic library access",
        "Community participation",
        "Volunteer opportunities",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Become a member of SDB Nepal and contribute to preserving Sanatan Dharma culture while supporting
              humanitarian causes.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {membershipTypes.map((membership, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <membership.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{membership.title}</CardTitle>
                    <div className="text-2xl font-bold text-orange-600">{membership.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{membership.description}</p>
                    <ul className="space-y-2 mb-6">
                      {membership.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    {/* <Button className="w-full">Choose This Plan</Button> */}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Membership Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Full Name" />
                      <Input placeholder="Father's Name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email Address" />
                      <Input placeholder="Phone Number" />
                    </div>
                    <Input placeholder="Address" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Occupation" />
                      <Input type="date" placeholder="Date of Birth" />
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Membership Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lifetime">Lifetime Membership</SelectItem>
                        <SelectItem value="annual">Annual Membership</SelectItem>
                        <SelectItem value="monthly">Monthly Membership</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Why do you want to join SDB Nepal?" rows={3} />
                    <Button type="submit" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Refer Your Loved Ones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Help us grow our community by referring family and friends who share our values and mission.
                  </p>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Referral's Full Name" />
                    <Input type="email" placeholder="Referral's Email" />
                    <Input placeholder="Referral's Phone" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Family Member</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="colleague">Colleague</SelectItem>
                        <SelectItem value="neighbor">Neighbor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Why would they be a good fit for SDB Nepal?" rows={3} />
                    <Button type="submit" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Send Referral
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
