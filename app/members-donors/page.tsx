import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Heart, Users, Megaphone, Vote, UserCheck, Crown } from "lucide-react"

export const metadata = {
  title: "Members & Donors - SDB Nepal",
  description:
    "Meet our valued members, donors, and supporters who make our humanitarian and cultural preservation work possible.",
}

export default function MembersDonorsPage() {
  const members = [
    {
      name: "Ram Bahadur Sharma",
      type: "Lifetime Member",
      joinDate: "2023-01-15",
      donation: 25000,
      purpose: "Orphanage Support",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sita Devi Thapa",
      type: "Annual Member",
      joinDate: "2023-03-20",
      donation: 5000,
      purpose: "Cultural Preservation",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Hari Prasad Gautam",
      type: "Monthly Member",
      joinDate: "2023-06-10",
      donation: 1200,
      purpose: "General Support",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Kamala Shrestha",
      type: "Lifetime Member",
      joinDate: "2022-11-05",
      donation: 50000,
      purpose: "Old Age Care",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Bishnu Prasad Poudel",
      type: "Annual Member",
      joinDate: "2023-08-18",
      donation: 8000,
      purpose: "Education Support",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Gita Rani Joshi",
      type: "Monthly Member",
      joinDate: "2023-09-22",
      donation: 600,
      purpose: "Project Development",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const donors = [
    {
      name: "Anonymous Donor",
      amount: 100000,
      purpose: "Emergency Relief Fund",
      date: "2024-01-10",
      type: "Major Donor",
    },
    {
      name: "Rajesh Kumar Acharya",
      amount: 15000,
      purpose: "Gurukula Development",
      date: "2024-01-08",
      type: "Regular Donor",
    },
    {
      name: "Sunita Maharjan",
      amount: 7500,
      purpose: "Orphanage Supplies",
      date: "2024-01-05",
      type: "Supporter",
    },
    {
      name: "Deepak Shrestha",
      amount: 20000,
      purpose: "Cultural Programs",
      date: "2024-01-03",
      type: "Major Donor",
    },
  ]

  const promoters = [
    {
      name: "Dr. Prakash Sharma",
      role: "Cultural Ambassador",
      contribution: "Promoting Sanskrit education",
      since: "2022",
    },
    {
      name: "Laxmi Devi Pant",
      role: "Community Organizer",
      contribution: "Organizing local events",
      since: "2023",
    },
    {
      name: "Mohan Bahadur KC",
      role: "Youth Coordinator",
      contribution: "Engaging young volunteers",
      since: "2023",
    },
  ]

  const volunteers = [
    {
      name: "Anita Gurung",
      role: "Teaching Volunteer",
      hours: 120,
      area: "Education",
    },
    {
      name: "Suresh Tamang",
      role: "Event Coordinator",
      hours: 85,
      area: "Events",
    },
    {
      name: "Priya Maharjan",
      role: "Healthcare Support",
      hours: 95,
      area: "Healthcare",
    },
  ]

  const executiveCommittee = [
    {
      name: "Pandit Rajesh Sharma",
      position: "President",
      term: "2023-2025",
      experience: "25 years",
    },
    {
      name: "Dr. Sita Devi",
      position: "Vice President",
      term: "2023-2025",
      experience: "15 years",
    },
    {
      name: "Ram Bahadur Thapa",
      position: "Secretary",
      term: "2023-2025",
      experience: "10 years",
    },
    {
      name: "Gita Sharma",
      position: "Treasurer",
      term: "2023-2025",
      experience: "12 years",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Members & Donors</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our valued community members, generous donors, and dedicated supporters who make our mission
              possible.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by name or type..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <Tabs defaultValue="members" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="members" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Members
                </TabsTrigger>
                <TabsTrigger value="donors" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Donors
                </TabsTrigger>
                <TabsTrigger value="promoters" className="flex items-center gap-2">
                  <Megaphone className="h-4 w-4" />
                  Promoters
                </TabsTrigger>
                <TabsTrigger value="voters" className="flex items-center gap-2">
                  <Vote className="h-4 w-4" />
                  Voters
                </TabsTrigger>
                <TabsTrigger value="volunteers" className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4" />
                  Volunteers
                </TabsTrigger>
                <TabsTrigger value="executive" className="flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  Executive
                </TabsTrigger>
              </TabsList>

              <TabsContent value="members" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{member.name}</CardTitle>
                            <Badge variant={member.type === "Lifetime Member" ? "default" : "secondary"}>
                              {member.type}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Joined:</span>
                            <span>{new Date(member.joinDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Donation:</span>
                            <span className="font-semibold">NPR {member.donation.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Purpose:</span>
                            <span>{member.purpose}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="donors" className="mt-6">
                <div className="space-y-4">
                  {donors.map((donor, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                              <Heart className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{donor.name}</h3>
                              <p className="text-sm text-muted-foreground">{donor.purpose}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">NPR {donor.amount.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(donor.date).toLocaleDateString()}
                            </div>
                            <Badge variant="outline">{donor.type}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="promoters" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {promoters.map((promoter, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <Megaphone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{promoter.name}</CardTitle>
                            <Badge variant="secondary">{promoter.role}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Contribution:</span>
                            <p>{promoter.contribution}</p>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Since:</span>
                            <span>{promoter.since}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="voters" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Voting Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Voting rights are available to lifetime members and annual members who have been active for more
                      than one year.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">156</div>
                        <div className="text-sm text-muted-foreground">Total Voters</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-green-600">89</div>
                        <div className="text-sm text-muted-foreground">Lifetime Members</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">67</div>
                        <div className="text-sm text-muted-foreground">Annual Members</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="volunteers" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {volunteers.map((volunteer, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                            <UserCheck className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                            <Badge variant="secondary">{volunteer.role}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Hours Contributed:</span>
                            <span className="font-semibold">{volunteer.hours}h</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Area:</span>
                            <span>{volunteer.area}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="executive" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {executiveCommittee.map((member, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <Crown className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{member.name}</CardTitle>
                            <Badge variant="default">{member.position}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Term:</span>
                            <span>{member.term}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Experience:</span>
                            <span>{member.experience}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
