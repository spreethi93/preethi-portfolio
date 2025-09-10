"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
  color: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
      { name: "Ember", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg", color: "#E04E39" },
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "#D24939" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "#000000" },
    ]
  },
  {
    category: "Design & Collaboration",
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
      { name: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg", color: "#FF4785" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", color: "#4A154B" },
    ]
  }
]

// Scrolling skills component
function ScrollingSkills({ skills, direction = "left", speed = 30 }: { 
  skills: Skill[], 
  direction?: "left" | "right",
  speed?: number 
}) {
  // Calculate the width of one complete set of skills
  const skillWidth = 140 // Increased width for better readability
  const gap = 20 // Increased gap for better spacing
  const singleSetWidth = skills.length * (skillWidth + gap)

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Gradient fade edges for smooth visual transition */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        animate={{
          x: direction === "left" 
            ? [0, -singleSetWidth] 
            : [0, singleSetWidth]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-5 whitespace-nowrap py-2"
      >
        {/* Render skills multiple times for continuous loop */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl border border-slate-200/60 dark:border-slate-700/60 transition-all duration-500 group flex-shrink-0"
            style={{ 
              minWidth: `${skillWidth}px`,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="relative w-7 h-7 flex-shrink-0">
              <div 
                className="absolute inset-0 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500 blur-sm"
                style={{ backgroundColor: skill.color }}
              />
              <Image
                src={skill.icon}
                alt={skill.name}
                width={28}
                height={28}
                className="w-7 h-7 relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function RotatingSkills() {
  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Elegant title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Technical <span className="text-gradient">Expertise</span>
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Technologies and tools I work with daily
        </p>
      </motion.div>

      {/* Skills categories with scrolling animations */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: categoryIndex * 0.2 
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Category header */}
            <div className="flex items-start gap-8 mb-6">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white min-w-fit whitespace-nowrap pt-2">
                {category.category}:
              </h4>
              
              {/* Scrolling skills */}
              <div className="flex-1">
                <ScrollingSkills 
                  skills={category.skills} 
                  direction={categoryIndex % 2 === 0 ? "left" : "right"}
                  speed={35 + categoryIndex * 5}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/5 dark:bg-blue-900/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200/5 dark:bg-purple-900/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}