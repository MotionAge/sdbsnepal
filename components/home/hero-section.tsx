import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center cultural-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20" />
      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Sanatan Dharma Bigyan Samaj
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground">सनातन धर्म बिज्ञान समाज (SDB Nepal)</p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Preserving ancient wisdom, serving humanity with compassion, and building a better tomorrow through cultural
            heritage and humanitarian work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/membership">
                <Users className="mr-2 h-5 w-5" />
                Join Us
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/library">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Library
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
