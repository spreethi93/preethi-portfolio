"use client"

import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { personalInfo, contactInfo } from "@/data/portfolio"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
      {/* Subtle animated shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Clean profile photo */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-4xl">👩‍💻</div>
                </div>
              </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-medium mb-6 text-gradient"
            >
              {personalInfo.title}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary"
            >
              Get In Touch
            </button>
            
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="animate-float"
          >
            <button
              onClick={() => scrollToSection("#skills")}
              className="text-slate-400 hover:text-blue-500 transition-colors duration-300 group"
              aria-label="Scroll to skills section"
            >
              <ArrowDown className="h-6 w-6 mx-auto group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
