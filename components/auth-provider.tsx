"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
  phone?: string
  createdAt?: string
  acceptNewsletter?: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string, additionalData?: any) => Promise<void>
  logout: () => void
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem("auth-token")
    if (token) {
      // Simulate token validation
      setUser({
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        role: "user",
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser = {
        id: "1",
        name: "John Doe",
        email,
        role: email === "admin@sanatandharma.org.np" ? ("admin" as const) : ("user" as const),
      }

      setUser(mockUser)
      localStorage.setItem("auth-token", "mock-jwt-token")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string, additionalData?: any) => {
    setIsLoading(true)
    try {
      // Simulate API call with additional validation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Determine user role based on email domain or other criteria
      const isAdmin = email.endsWith("@sanatandharma.org.np") || email === "admin@example.com"

      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
        role: isAdmin ? ("admin" as const) : ("user" as const),
        phone: additionalData?.phone || "",
        createdAt: new Date().toISOString(),
        acceptNewsletter: additionalData?.acceptNewsletter || false,
      }

      setUser(mockUser)
      localStorage.setItem("auth-token", "mock-jwt-token")
      localStorage.setItem("user-data", JSON.stringify(mockUser))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth-token")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
