"use client"

import { motion } from "framer-motion"
import { Code, Database, Gauge, Building, Wrench, Palette, Users } from "lucide-react"
import { skills } from "@/data/portfolio"
import { RotatingSkills } from "@/components/ui/rotating-skills"

const skillIcons = {
  "Frontend Web Technologies": Code,
  "Backend & APIs": Database,
  "Performance & Monitoring": Gauge,
  "Architecture/Strategy": Building,
  "DevOps & Tooling": Wrench,
  "Design & Collaboration": Palette,
  "Leadership": Users,
}

export function Skills() {
  return (
    <section id="skills" className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit built over 9+ years of frontend engineering experience
          </p>
        </motion.div>

        {/* Rotating Skills Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <RotatingSkills />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => {
            const IconComponent = skillIcons[category as keyof typeof skillIcons]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill: string, skillIndex: number) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.1) + (skillIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">9+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">67K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Customers Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Engineers Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">200+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Vulnerabilities Fixed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
