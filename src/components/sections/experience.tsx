"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Building2 } from "lucide-react"
import { experiences } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building scalable solutions and leading technical transformations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              
              <div className="flex gap-6">
                {/* Company logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-200 dark:border-blue-800 flex items-center justify-center relative z-10 shadow-lg">
                    <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Experience content */}
                <div className="flex-1 modern-card group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-gradient mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {experience.points.map((point, pointIndex) => (
                      <motion.div
                        key={pointIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.2) + (pointIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
