import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Youtube, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">SDB Nepal</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sanatan Dharma Bigyan Samaj - Dedicated to the scientific understanding, preservation, and promotion of
              eternal wisdom systems for sustainable well-being.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577443953136"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCzDZMzskdqqLecVULSvY5dg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@sanatandharmabigyansamaj" target="_blank" rel="noopener noreferrer">
                <svg
                  className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="https://www.sdbnepal.org.np" target="_blank" rel="noopener noreferrer">
                <Globe className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="text-gray-300 hover:text-white">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Research & Articles
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-300 hover:text-white">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white">
                  Support Our Mission
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-300 hover:text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-orange-500 mt-1" />
                <span className="text-gray-300 text-sm">
                  Thali (Kageshwori Manohara-05)
                  <br />
                  Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-orange-500" />
                <div className="text-gray-300 text-sm">
                  <div>9843549625 / 9741766637</div>
                  <div>9843233944 / 9841448898</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-orange-500" />
                <span className="text-gray-300 text-sm">sdbnepal.org@gmail.com</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              <p>Registration No: 111</p>
              <p>Registered at: Chief District Officer's Office, Kathmandu</p>
              <p>Established: 2081/07/26 B.S.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sanatan Dharma Bigyan Samaj (SDB Nepal). All rights reserved. |
            <span className="text-orange-500"> Preserving eternal wisdom through scientific understanding</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
