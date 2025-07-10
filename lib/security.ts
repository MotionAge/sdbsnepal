import type { NextRequest } from "next/server"

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(ip: string, limit = 100, windowMs: number = 15 * 60 * 1000) {
  const now = Date.now()
  const key = `rate_limit_${ip}`

  const current = rateLimitStore.get(key)

  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: limit - 1 }
  }

  if (current.count >= limit) {
    return { allowed: false, remaining: 0 }
  }

  current.count++
  return { allowed: true, remaining: limit - current.count }
}

export function validateInput(data: any, schema: any) {
  // In production, use Zod or similar validation library
  const errors: string[] = []

  if (schema.required) {
    for (const field of schema.required) {
      if (!data[field]) {
        errors.push(`${field} is required`)
      }
    }
  }

  if (schema.email && data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push("Invalid email format")
    }
  }

  if (schema.amount && data.amount) {
    const amount = Number.parseFloat(data.amount)
    if (isNaN(amount) || amount <= 0) {
      errors.push("Amount must be a positive number")
    }
  }

  return { isValid: errors.length === 0, errors }
}

export function sanitizeInput(input: string): string {
  // Basic HTML sanitization
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
}

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const real = request.headers.get("x-real-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  if (real) {
    return real
  }

  return "unknown"
}

export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function verifyCSRFToken(token: string, sessionToken: string): boolean {
  // In production, implement proper CSRF token verification
  return token === sessionToken
}
