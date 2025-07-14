import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AboutSection } from "@/components/home/about-section"
import { TeamSection } from "@/components/home/team-section"
import { VisionMissionSection } from "@/components/home/vision-mission-section"
import { PoliciesSection } from "@/components/home/policies-section"

export const metadata = {
  title: "About Us - SDB Nepal",
  description:
    "Learn about Sanatan Dharma Bigyan Samaj (SDB Nepal), our mission, vision, team, and commitment to cultural preservation and humanitarian service.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SDB Nepal</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our journey, mission, and the dedicated team working to preserve Sanatan Dharma culture while
              serving humanity.
            </p>
          </div>
        </div>
        <AboutSection />
        <VisionMissionSection />
        <TeamSection />
        <PoliciesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
