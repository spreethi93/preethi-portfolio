"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
  color: string
}

const skillsData: Skill[] = [
  // Frontend Technologies
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
  { name: "Ember", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg", color: "#E04E39" },
  
  // Backend & APIs
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  
  // DevOps & Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "#D24939" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "#000000" },
  
  // Design & Collaboration
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "Storybook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg", color: "#FF4785" },
  
  // Performance & Monitoring
  { name: "Chrome DevTools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg", color: "#4285F4" },
  
  // Additional Skills
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
]

export function RotatingSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let rotation = 0

    const animate = () => {
      rotation += 0.5 // Adjust speed here
      container.style.transform = `rotateX(-10deg) rotateY(${rotation}deg)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-96 flex items-center justify-center perspective-1000">
      <div
        ref={containerRef}
        className="relative w-80 h-80 transform-gpu preserve-3d"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {skillsData.map((skill, index) => {
          const angle = (index / skillsData.length) * 360
          const radius = 160 // Distance from center
          
          return (
            <motion.div
              key={skill.name}
              className="absolute w-16 h-16 flex items-center justify-center"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="w-full h-full rounded-xl shadow-lg flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{
                  boxShadow: `0 4px 20px ${skill.color}20`,
                }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      {/* Center glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
      </div>
    </div>
  )
}
