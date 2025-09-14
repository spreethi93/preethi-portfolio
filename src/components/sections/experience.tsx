"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Building2 } from "lucide-react"
import { experiences } from "@/data/portfolio"

export function Experience() {
  const featured = experiences.filter((e) => ["Freshworks", "Bounteous"].includes(e.company))

  return (
    <section id="experience" className="section min-h-[calc(100vh-4rem)] snap-start flex items-center justify-center relative overflow-hidden">
      {/* Modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      {/* Subtle animated shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card bg-white/80 dark:bg-slate-900/60 border border-blue-200/40 dark:border-blue-800/40 rounded-2xl"
            >
              <div className="p-6 md:p-8">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-20 h-20 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.company} logo`} className="w-14 h-14 object-contain" />
                  ) : (
                    <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.company}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{item.position}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-2">
                    <Calendar className="h-4 w-4" />
                    {item.duration}
                    <span>•</span>
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </div>
              </div>

              {item.productCaption && (
                <p className="text-sm italic text-blue-700 dark:text-blue-300 mb-2">{item.productCaption}</p>
              )}
              {item.productDescription && (
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{item.productDescription}</p>
              )}

              {item.techStack && item.techStack.length > 0 && (
                <div className="mt-4 flex items-start gap-4">
                  <h4 className="text-sm font-semibold text-white whitespace-nowrap">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 border border-blue-200/60 dark:border-blue-800/60">
                      {tech}
                    </span>
                  ))}
                  </div>
                </div>
              )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
