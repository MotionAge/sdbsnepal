import Link from "next/link"
import { Facebook, Youtube, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SDB</span>
              </div>
              <span className="font-bold">SDB Nepal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sanatan Dharma Bigyan Samaj - Preserving culture, serving humanity
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://youtube.com" target="_blank">
                  <Youtube className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://tiktok.com" target="_blank">
                  <Music className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-muted-foreground hover:text-foreground">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-foreground">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-foreground">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-foreground">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-foreground">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/members-donors" className="text-muted-foreground hover:text-foreground">
                  Members & Donors
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Thali (Kageshwori Manohara-05)</p>
              <p>Kathmandu, Nepal</p>
              <p>Email: sdbnepal.org@gmail.com</p>
              <p>Phone: 9843549625</p>
              <p>Established: 2081/07/26 B.S.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sanatan Dharma Bigyan Samaj (SDB Nepal). All rights reserved.</p>
          <p className="mt-1">Registered at Chief District Officer's Office, Kathmandu</p>
        </div>
      </div>
    </footer>
  )
}
