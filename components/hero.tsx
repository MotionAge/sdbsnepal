import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute top-32 right-20 text-4xl">📿</div>
        <div className="absolute bottom-20 left-20 text-5xl">🪔</div>
        <div className="absolute bottom-32 right-10 text-3xl">📚</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              Scientific Understanding of Eternal Wisdom
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sanatan Dharma Bigyan Samaj
            <span className="block text-3xl md:text-4xl text-orange-600 mt-2">(SDB Nepal)</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Preserving and promoting eternal knowledge systems from Vedas, Upanishads, Puranas, Bhagavad Geeta, and
            Tripiṭaka through scientific research, education, and community service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <Link href="/about">
                Learn About Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              asChild
            >
              <Link href="/donate">Support Our Research</Link>
            </Button>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <BookOpen className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ancient Wisdom Research</h3>
              <p className="text-gray-600 text-sm">
                Translating and digitizing sacred texts with scientific methodology
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sanskrit Gurukuls</h3>
              <p className="text-gray-600 text-sm">Establishing traditional learning centers across Nepal</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Service</h3>
              <p className="text-gray-600 text-sm">
                Supporting elderly, orphans, and students through humanitarian programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
