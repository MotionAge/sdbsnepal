export interface PasswordRequirement {
  text: string
  met: boolean
}

export interface PasswordStrength {
  score: number // 0-3 (weak to strong)
  isValid: boolean
  requirements: PasswordRequirement[]
}

export function validatePassword(password: string): PasswordStrength {
  const requirements: PasswordRequirement[] = [
    {
      text: "At least 8 characters long",
      met: password.length >= 8,
    },
    {
      text: "Contains uppercase letter",
      met: /[A-Z]/.test(password),
    },
    {
      text: "Contains lowercase letter",
      met: /[a-z]/.test(password),
    },
    {
      text: "Contains number",
      met: /\d/.test(password),
    },
    {
      text: "Contains special character (!@#$%^&*)",
      met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    },
    {
      text: "No common patterns (123, abc, qwerty)",
      met: !hasCommonPatterns(password),
    },
  ]

  const metRequirements = requirements.filter((req) => req.met).length
  const score = Math.min(3, Math.floor(metRequirements / 2))
  const isValid = metRequirements >= 4 && password.length >= 8

  return {
    score,
    isValid,
    requirements,
  }
}

function hasCommonPatterns(password: string): boolean {
  const commonPatterns = [
    /123/,
    /abc/i,
    /qwerty/i,
    /password/i,
    /admin/i,
    /user/i,
    /login/i,
    /welcome/i,
    /111/,
    /000/,
    /aaa/i,
  ]

  return commonPatterns.some((pattern) => pattern.test(password))
}

export function generatePasswordSuggestion(): string {
  const adjectives = ["Strong", "Secure", "Safe", "Protected", "Divine", "Sacred"]
  const nouns = ["Dharma", "Peace", "Light", "Hope", "Faith", "Love"]
  const numbers = Math.floor(Math.random() * 100)
  const symbols = ["!", "@", "#", "$", "%"]

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const symbol = symbols[Math.floor(Math.random() * symbols.length)]

  return `${adjective}${noun}${numbers}${symbol}`
}
