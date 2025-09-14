"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { certifications } from "@/data/portfolio"
import Image from "next/image"
import webDesignAccessibilityImg from "../../assets/images/certifications/web-design-accesibility.jpg"
import typescriptImg from "../../assets/images/certifications/typescript.jpg"

function getCertificationImage(certName: string) {
  const name = certName.toLowerCase()
  if (name.includes("accessibility") || name.includes("web design")) return webDesignAccessibilityImg
  if (name.includes("typescript")) return typescriptImg
  return undefined
}

export function Certifications() {
  return (
    <section id="certifications" className="min-h-[calc(100vh-4rem)] snap-start flex items-center justify-center relative overflow-hidden">
      {/* Modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      {/* Subtle animated shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="w-full flex flex-col justify-center px-3 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-start">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card group w-fit min-h-[26rem]"
              >
                <div className="relative h-56 md:h-72 mb-4 mt-4 rounded-lg bg-slate-100 dark:bg-slate-800 p-3 min-w-[420px]">
                  {(() => {
                    const img = getCertificationImage(cert.name)
                    return img ? (
                        <Image 
                          src={img} 
                          alt={`${cert.name} certificate`} 
                          fill 
                          className="object-contain"
                        />
                    ) : null
                  })()}
                </div>

                <div className="flex flex-col items-center text-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    <GraduationCap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-base font-medium transition-colors duration-300"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


