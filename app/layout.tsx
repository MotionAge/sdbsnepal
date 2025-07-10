import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanatan Dharma Bigyan Samaj (SDB Nepal) - Scientific Understanding of Eternal Wisdom",
  description:
    "A registered NGO dedicated to the scientific understanding, preservation, and promotion of eternal wisdom systems rooted in Vedas, Puranas, Upanishads, Geeta, and Tripiṭaka for sustainable well-being.",
  keywords:
    "Sanatan Dharma, Vedas, Upanishads, Geeta, Sanskrit, Gurukul, Nepal, spiritual science, ancient wisdom, SDB Nepal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
