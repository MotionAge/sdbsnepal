"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "ne" | "sa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translateText: (text: string) => Promise<string>
  isTranslating: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isTranslating, setIsTranslating] = useState(false)
  const [translationCache, setTranslationCache] = useState<Map<string, string>>(new Map())

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem("sdb-language") as Language
    if (savedLanguage && ["en", "ne", "sa"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("sdb-language", language)

    // Apply Google Translate to the entire page
    if (language !== "en") {
      applyGoogleTranslate(language)
    } else {
      removeGoogleTranslate()
    }
  }, [language])

  const applyGoogleTranslate = (targetLang: Language) => {
    // Remove existing Google Translate elements
    removeGoogleTranslate()

    // Create Google Translate element
    const googleTranslateDiv = document.createElement("div")
    googleTranslateDiv.id = "google_translate_element"
    googleTranslateDiv.style.display = "none"
    document.body.appendChild(googleTranslateDiv)

    // Load Google Translate script
    if (!window.google?.translate) {
      const script = document.createElement("script")
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.head.appendChild(script)
    }

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ne,sa",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      )

      // Auto-translate to selected language
      setTimeout(() => {
        const langCode = targetLang === "ne" ? "ne" : "sa"
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (selectElement) {
          selectElement.value = langCode
          selectElement.dispatchEvent(new Event("change"))
        }
      }, 1000)
    }

    // If Google Translate is already loaded, initialize it
    if (window.google?.translate) {
      window.googleTranslateElementInit()
    }
  }

  const removeGoogleTranslate = () => {
    // Remove Google Translate elements
    const googleTranslateDiv = document.getElementById("google_translate_element")
    if (googleTranslateDiv) {
      googleTranslateDiv.remove()
    }

    // Remove Google Translate toolbar
    const toolbar = document.getElementById("goog-gt-tt")
    if (toolbar) {
      toolbar.remove()
    }

    // Remove Google Translate styles
    const frames = document.querySelectorAll('iframe[src*="translate.google"]')
    frames.forEach((frame) => frame.remove())

    // Reset page to original language
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (selectElement) {
      selectElement.value = "en"
      selectElement.dispatchEvent(new Event("change"))
    }
  }

  const translateText = async (text: string): Promise<string> => {
    if (language === "en" || !text.trim()) return text

    const cacheKey = `${text}-${language}`
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey)!
    }

    setIsTranslating(true)
    try {
      // Use Google Translate API for individual text translation
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${language}&dt=t&q=${encodeURIComponent(text)}`,
      )
      const data = await response.json()

      if (data && data[0] && data[0][0] && data[0][0][0]) {
        const translatedText = data[0][0][0]
        setTranslationCache((prev) => new Map(prev).set(cacheKey, translatedText))
        return translatedText
      }
    } catch (error) {
      console.error("Translation error:", error)
    } finally {
      setIsTranslating(false)
    }

    return text
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateText, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Extend window object for Google Translate
declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}
