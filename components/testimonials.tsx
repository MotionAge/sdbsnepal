import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Kathmandu, Nepal",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Sanatan Dharma Nepal has been instrumental in preserving our cultural heritage. Their temple restoration work is truly commendable.",
  },
  {
    name: "Priya Thapa",
    location: "Pokhara, Nepal",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The education programs have transformed our village. My children now have access to quality education rooted in our values.",
  },
  {
    name: "Dr. Amit Gurung",
    location: "Chitwan, Nepal",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Their healthcare initiatives have brought medical care to remote areas. The mobile clinics are a blessing for our community.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Voices from Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people whose lives have been touched by our work and the positive impact we're making
            together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-orange-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
