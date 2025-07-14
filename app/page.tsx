import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { TeamSection } from "@/components/home/team-section"
import { VisionMissionSection } from "@/components/home/vision-mission-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { PoliciesSection } from "@/components/home/policies-section"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ProjectsSection />
        <TeamSection />
        <PoliciesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
