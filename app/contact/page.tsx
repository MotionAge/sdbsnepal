import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ContactSection } from "@/components/home/contact-section"

export const metadata = {
  title: "Contact Us - SDB Nepal",
  description:
    "Get in touch with Sanatan Dharma Bigyan Samaj (SDB Nepal) for inquiries, support, or collaboration opportunities.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
