import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"

// Mock blog post data - in production, fetch from database
const blogPost = {
  id: 1,
  title: "The Importance of Dharmic Education in Modern Times",
  content: `
    <p>In our fast-paced modern world, the timeless wisdom of dharmic education offers a foundation for ethical living and spiritual growth. As we navigate the complexities of contemporary life, the principles embedded in our ancient traditions provide guidance that is both practical and profound.</p>

    <h2>Understanding Dharmic Education</h2>
    <p>Dharmic education goes beyond mere academic learning. It encompasses the development of character, moral values, and spiritual awareness. This holistic approach to education has been the cornerstone of our civilization for millennia, shaping individuals who contribute positively to society.</p>

    <h2>Relevance in Today's World</h2>
    <p>In an era marked by technological advancement and rapid social change, the need for dharmic education has never been more pressing. It provides:</p>
    <ul>
      <li>A moral compass in an increasingly complex world</li>
      <li>Tools for inner peace and mental well-being</li>
      <li>A sense of purpose and connection to something greater</li>
      <li>Practical wisdom for ethical decision-making</li>
    </ul>

    <h2>Our Educational Initiatives</h2>
    <p>At Sanatan Dharma Nepal, we have implemented various educational programs that integrate traditional dharmic teachings with modern pedagogical approaches. Our rural education initiatives serve over 50 villages, providing quality education that honors both academic excellence and moral development.</p>

    <p>Through our programs, we have witnessed remarkable transformations in communities. Children who receive dharmic education demonstrate not only academic success but also strong character, compassion for others, and a deep sense of responsibility toward their communities.</p>

    <h2>The Path Forward</h2>
    <p>As we look to the future, we remain committed to expanding our educational initiatives. We believe that by nurturing the next generation with dharmic values, we are investing in a more compassionate, ethical, and harmonious world.</p>

    <p>We invite you to join us in this sacred mission. Whether through donations, volunteering, or simply spreading awareness, every contribution helps us reach more children and communities with the transformative power of dharmic education.</p>
  `,
  author: "Pandit Rajesh Sharma",
  date: "2024-01-15",
  category: "Education",
  image: "/placeholder.svg?height=400&width=800",
  readTime: "5 min read",
  tags: ["Education", "Dharma", "Community", "Values"],
}

const relatedPosts = [
  {
    id: 2,
    title: "Community Service: A Path to Spiritual Growth",
    image: "/placeholder.svg?height=150&width=250",
    date: "2024-01-10",
  },
  {
    id: 5,
    title: "The Role of Youth in Dharmic Society",
    image: "/placeholder.svg?height=150&width=250",
    date: "2023-12-20",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <Card className="mb-8">
            <div className="aspect-video">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-8">
              <Badge className="mb-4">{blogPost.category}</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{blogPost.title}</h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  <span className="mr-6">{blogPost.author}</span>
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="mr-6">{new Date(blogPost.date).toLocaleDateString()}</span>
                  <span>{blogPost.readTime}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 mr-2" />
                Comments
              </h3>
              <div className="text-center py-8 text-gray-500">
                <p>Comments section coming soon...</p>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group">
                    <div className="flex space-x-4">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold group-hover:text-orange-600 transition-colors">{post.title}</h4>
                        <p className="text-sm text-gray-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
