import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  User,
  Search,
  Filter,
  Newspaper,
  Camera,
  Vote,
  Megaphone,
  Briefcase,
  PartyPopper,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Blogs & News - SDB Nepal",
  description:
    "Stay updated with latest news, press releases, events, and project updates from Sanatan Dharma Bigyan Samaj (SDB Nepal).",
}

async function getBlogs() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/blogs`, {
      cache: "no-store",
    })
    if (!response.ok) return []
    const blogs = await response.json()
    return blogs.filter((blog: any) => blog.status === "published")
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs()

  const blogCategories = [
    {
      name: "Press Releases",
      icon: Newspaper,
      count: blogs.filter((b: any) => b.category === "press-releases").length,
    },
    { name: "Galleries", icon: Camera, count: blogs.filter((b: any) => b.category === "galleries").length },
    { name: "Voting/Polling", icon: Vote, count: blogs.filter((b: any) => b.category === "voting-polling").length },
    { name: "Promotions", icon: Megaphone, count: blogs.filter((b: any) => b.category === "promotions").length },
    {
      name: "Project Updates",
      icon: Briefcase,
      count: blogs.filter((b: any) => b.category === "project-updates").length,
    },
    {
      name: "Event Releases",
      icon: PartyPopper,
      count: blogs.filter((b: any) => b.category === "event-releases").length,
    },
  ]

  const featuredPosts = blogs.filter((blog: any) => blog.featured)
  const regularPosts = blogs.filter((blog: any) => !blog.featured)

  const upcomingEvents = [
    {
      date: "2024-02-15",
      title: "Maha Shivaratri Celebration",
      location: "SDB Nepal Premises",
    },
    {
      date: "2024-03-08",
      title: "Holi Festival & Community Gathering",
      location: "Community Center",
    },
    {
      date: "2024-04-13",
      title: "New Year Celebration (Bikram Sambat)",
      location: "Main Hall",
    },
    {
      date: "2024-05-23",
      title: "Buddha Jayanti Special Program",
      location: "Temple Premises",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs & News</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest news, events, project updates, and community activities.
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
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {blogCategories.map((category) => (
                    <SelectItem key={category.name} value={category.name.toLowerCase()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {featuredPosts.map((post: any) => (
                        <Card key={post.id} className="hover:shadow-lg transition-shadow">
                          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                            <img
                              src={post.image_url || "/placeholder.svg?height=200&width=300"}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{post.category}</Badge>
                              <span className="text-sm text-muted-foreground">Featured</span>
                            </div>
                            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {post.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(post.created_at).toLocaleDateString()}
                              </div>
                            </div>
                            <Button asChild className="w-full mt-4">
                              <Link href={`/blogs/${post.id}`}>Read More</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Posts */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">All Articles</h2>
                  {blogs.length > 0 ? (
                    <div className="space-y-6">
                      {blogs.map((post: any) => (
                        <Card key={post.id} className="hover:shadow-lg transition-shadow">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-48 aspect-video md:aspect-square overflow-hidden">
                              <img
                                src={post.image_url || "/placeholder.svg?height=200&width=300"}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary">{post.category}</Badge>
                                  {post.featured && <Badge variant="default">Featured</Badge>}
                                </div>
                                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {post.author}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {new Date(post.created_at).toLocaleDateString()}
                                  </div>
                                </div>
                                <Button asChild variant="outline">
                                  <Link href={`/blogs/${post.id}`}>Read More</Link>
                                </Button>
                              </CardContent>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No articles found. Check back later for updates!</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {blogCategories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <category.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <Badge variant="outline">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="border-l-2 border-orange-500 pl-4">
                          <div className="text-sm font-semibold">{event.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(event.date).toLocaleDateString()} • {event.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter for latest updates and announcements.
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Your email address" type="email" />
                      <Button className="w-full" size="sm">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
