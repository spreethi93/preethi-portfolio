"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { contactInfo } from "@/data/portfolio"
import { useEffect, useState } from "react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container py-8">
        <div className="flex justify-center items-center pt-4">
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center" suppressHydrationWarning>
            © {currentYear ?? ""} Preethi Sathiyanarayanan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
