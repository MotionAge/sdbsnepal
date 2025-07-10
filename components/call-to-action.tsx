import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Your contribution, no matter the size, helps us continue our sacred work of serving communities and
            preserving dharmic values across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/donate">
                Make a Donation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>🔒 Secure donations • Tax-deductible • 100% transparent</p>
          </div>
        </div>
      </div>
    </section>
  )
}
