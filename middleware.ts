import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { rateLimit, getClientIP } from "@/lib/security"

export function middleware(request: NextRequest) {
  const ip = getClientIP(request)
  const pathname = request.nextUrl.pathname

  // Apply rate limiting
  const { allowed, remaining } = rateLimit(ip)

  if (!allowed) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "X-RateLimit-Limit": "100",
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      },
    })
  }

  // Add security headers
  const response = NextResponse.next()
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")
  response.headers.set("X-RateLimit-Limit", "100")
  response.headers.set("X-RateLimit-Remaining", remaining.toString())

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("auth-token")
    const userData = request.cookies.get("user-data")

    if (!token || !userData) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      const user = JSON.parse(userData.value)
      if (user.role !== "admin") {
        return NextResponse.redirect(new URL("/user/dashboard", request.url))
      }
    } catch {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Protect user dashboard routes
  if (pathname.startsWith("/user/dashboard") || pathname === "/dashboard") {
    const token = request.cookies.get("auth-token")

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return response
}

export const config = {
  matcher: ["/api/:path*", "/admin/:path*", "/user/:path*", "/dashboard", "/donate/:path*"],
}
