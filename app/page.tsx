import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { OngoingCampaigns } from "@/components/ongoing-campaigns"
import { ImpactStats } from "@/components/impact-stats"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Mission />
      <OngoingCampaigns />
      <ImpactStats />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
