import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Dharmic Education in Modern Times",
    excerpt:
      "Exploring how traditional dharmic teachings remain relevant and essential in today's rapidly changing world.",
    content:
      "In our fast-paced modern world, the timeless wisdom of dharmic education offers a foundation for ethical living and spiritual growth...",
    author: "Pandit Rajesh Sharma",
    date: "2024-01-15",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Community Service: A Path to Spiritual Growth",
    excerpt: "How serving others through charitable work becomes a means of personal and spiritual development.",
    content:
      "Service to humanity has always been at the heart of dharmic traditions. Through our community service programs...",
    author: "Dr. Priya Thapa",
    date: "2024-01-10",
    category: "Spirituality",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Preserving Cultural Heritage Through Temple Restoration",
    excerpt: "Our ongoing efforts to restore and maintain Nepal's ancient temples and their cultural significance.",
    content:
      "Nepal's temples are not just architectural marvels; they are repositories of our cultural and spiritual heritage...",
    author: "Amit Gurung",
    date: "2024-01-05",
    category: "Heritage",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Healthcare Initiatives in Rural Nepal",
    excerpt: "Bringing modern healthcare to remote villages while respecting traditional healing practices.",
    content: "Access to healthcare remains a challenge in many rural areas of Nepal. Our mobile healthcare units...",
    author: "Dr. Priya Thapa",
    date: "2023-12-28",
    category: "Healthcare",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "The Role of Youth in Dharmic Society",
    excerpt: "Engaging young people in preserving traditions while embracing positive change.",
    content: "Today's youth are the guardians of tomorrow's traditions. Our youth programs focus on...",
    author: "Pandit Rajesh Sharma",
    date: "2023-12-20",
    category: "Youth",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Sustainable Development Through Dharmic Principles",
    excerpt: "How ancient wisdom guides our approach to environmental conservation and sustainable living.",
    content: "The concept of living in harmony with nature is deeply embedded in dharmic philosophy...",
    author: "Amit Gurung",
    date: "2023-12-15",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=400",
    readTime: "6 min read",
  },
]

const categories = ["All", "Education", "Spirituality", "Heritage", "Healthcare", "Youth", "Environment"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, stories, and updates from our work in preserving dharmic values and serving communities.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-orange-100"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="mb-4">{blogPosts[0].category}</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">{blogPosts[0].author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                <Link href={`/blog/${blogPosts[0].id}`}>
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-transparent">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}
