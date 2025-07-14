import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Users, Home, GraduationCap, Building, Banknote } from "lucide-react"

export const metadata = {
  title: "Donate - SDB Nepal",
  description:
    "Support our humanitarian and cultural preservation efforts. Your donation helps us serve orphans, elderly, and preserve Sanatan Dharma heritage.",
}

export default function DonatePage() {
  const donationCategories = [
    {
      icon: Heart,
      title: "Ongoing Projects",
      description: "Support our current humanitarian and cultural preservation initiatives.",
      color: "text-red-500",
    },
    {
      icon: Building,
      title: "Future Projects",
      description: "Help us plan and implement new programs for community welfare.",
      color: "text-blue-500",
    },
    {
      icon: Users,
      title: "Orphanage Support",
      description: "Provide care, education, and shelter for orphaned children.",
      color: "text-green-500",
    },
    {
      icon: Home,
      title: "Old Age Homes",
      description: "Support elderly care facilities with medical and spiritual care.",
      color: "text-purple-500",
    },
    {
      icon: GraduationCap,
      title: "Gurukula Education",
      description: "Fund traditional education system combining ancient wisdom with modern learning.",
      color: "text-orange-500",
    },
    {
      icon: Banknote,
      title: "Operational Support",
      description: "General donation for SDB Nepal operational expenses and administration.",
      color: "text-gray-500",
    },
  ]

  const bankDetails = {
    bankName: "Nepal Bank Limited",
    accountName: "Sanatan Dharma Bigyan Samaj",
    accountNumber: "1234567890123456",
    branch: "Kathmandu Main Branch",
    swiftCode: "NBLNPKKA",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous contribution helps us preserve culture, serve humanity, and build a better tomorrow for all.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {donationCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    {/* <Button className="w-full bg-transparent" variant="outline">
                      Donate for This Cause
                    </Button> */}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center px-4">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Online Donation Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Full Name" />
                      <Input type="email" placeholder="Email Address" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Phone Number" />
                      <Input placeholder="Donation Amount (NPR)" type="number" />
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Donation Purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ongoing">Ongoing Projects</SelectItem>
                        <SelectItem value="future">Future Projects</SelectItem>
                        <SelectItem value="orphanage">Orphanage Support</SelectItem>
                        <SelectItem value="elderly">Old Age Homes</SelectItem>
                        <SelectItem value="gurukula">Gurukula Education</SelectItem>
                        <SelectItem value="operational">Operational Support</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Message (Optional)" rows={3} />
                    <Button type="submit" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Proceed to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card> */}

              <Card>
                <CardHeader>
                  <CardTitle>Bank Transfer Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm">Bank Name</h4>
                      <p className="text-muted-foreground">{bankDetails.bankName}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Account Name</h4>
                      <p className="text-muted-foreground">{bankDetails.accountName}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Account Number</h4>
                      <p className="text-muted-foreground font-mono">{bankDetails.accountNumber}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Branch</h4>
                      <p className="text-muted-foreground">{bankDetails.branch}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">SWIFT Code</h4>
                      <p className="text-muted-foreground font-mono">{bankDetails.swiftCode}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        After making a bank transfer, please send the transaction receipt to our email:
                        <span className="font-semibold"> sdbnepal.org@gmail.com</span>
                      </p>
                    </div>
                  </div>
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
