"use client"

import { skills } from "@/data/portfolio"
import { Skill } from "@/types"
import Image from "next/image"
import { motion } from "framer-motion"

// Simplified icon component using skill object
const SkillIcon = ({ skill }: { skill: Skill }) => {
  if (skill.svg) {
    return (
      <Image 
        src={`/assets/logos/${skill.svg}`}
        alt={`${skill.name} logo`}
        width={24}
        height={24}
        className="w-6 h-6"
        onError={(e) => {
          // Hide the image if it fails to load
          e.currentTarget.style.display = 'none'
        }}
      />
    )
  }

  // Return empty div for skills without SVG
  return <div className="w-6 h-6" />
}

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="section min-h-screen relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      {/* Subtle animated shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="container relative z-10 py-16">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Skills Summary</span>
            </h2>
          </div>
          <div className="h-8 md:h-8"></div>
          <div className="flex flex-col gap-y-12">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div
                key={category}
                className="flex flex-col md:flex-row gap-12 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                {/* Category Title */}
                <div className="md:w-1/4 flex-shrink-0">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-200 tracking-wider mb-6 md:mb-0">
                    {category.toUpperCase()}
                  </h3>
                </div>
                {/* Skills Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skillList.map((skill: Skill) => (
                    <div
                      key={skill.name}
                      className="relative flex items-center gap-4 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-900/30 shadow-none font-medium text-white text-sm transition-all duration-200 select-none tracking-wide border border-transparent group"
                    >
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/30 opacity-40 pointer-events-none"></div>
                      <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                        <SkillIcon skill={skill} />
                      </div>
                      <span className="relative text-white group-hover:text-blue-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}