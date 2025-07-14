import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/components/language-provider"
import { ChatWidget } from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanatan Dharma Bigyan Samaj (SDB Nepal) - Cultural & Humanitarian Organization",
  description:
    "SDB Nepal is dedicated to preserving Sanatan Dharma culture, supporting orphans, elderly care, and promoting spiritual education through various humanitarian projects.",
  keywords:
    "Sanatan Dharma, Nepal, NGO, Humanitarian, Orphanage, Old Age Care, Cultural Preservation, Spiritual Education",
  authors: [{ name: "SDB Nepal" }],
  openGraph: {
    title: "Sanatan Dharma Bigyan Samaj (SDB Nepal)",
    description: "Cultural & Humanitarian Organization dedicated to preserving Sanatan Dharma values",
    url: "https://sdbnepal.org",
    siteName: "SDB Nepal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SDB Nepal - Cultural & Humanitarian Organization",
    description: "Preserving Sanatan Dharma culture and supporting humanitarian causes",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .goog-te-banner-frame.skiptranslate {
              display: none !important;
            }
            body {
              top: 0px !important;
            }
            .goog-te-combo {
              display: none;
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <ChatWidget />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
