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
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-600 dark:text-slate-400" suppressHydrationWarning>
            © {currentYear ?? ""} Preethi Sathiyanarayanan. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
