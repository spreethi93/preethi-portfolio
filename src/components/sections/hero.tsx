"use client";

import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { personalInfo, contactInfo } from "@/data/portfolio";

const SUBTITLES = [
  "Frontend Technical Lead",
  "Micro-Frontend Architect",
  "AI-Augmented Engineer",
  "Tech Innovator",
];

export function Hero() {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentSubtitle = SUBTITLES[currentSubtitleIndex];

    if (isTyping) {
      // Typing effect
      if (displayText.length < currentSubtitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentSubtitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next subtitle
        setCurrentSubtitleIndex((prev) => (prev + 1) % SUBTITLES.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentSubtitleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="section min-h-[calc(100vh-4rem)] snap-start flex items-center justify-center relative overflow-hidden"
    >
      {/* Modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Subtle animated shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Photo - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="relative w-80 h-80 lg:w-[26rem] lg:h-[26rem]">
                {/* Gradient border with glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-75"></div>
                <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/assets/images/preethi-sathiyanarayanan.jpg"
                    alt="Preethi Sathiyanarayanan"
                    className="w-full h-full object-cover filter brightness-110 contrast-110"
                  />
                  {/* Subtle overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-purple-900/10"></div>
                </div>
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Hi, I&apos;m{" "}
                    <p className="text-xl md:text-4xl lg:text-5xl  text-gradient">
                      {personalInfo.name}
                    </p>
                  </h1>
                  {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
                    {personalInfo.title}
                  </h2> */}
                  {/* Animated Subtitles */}
                  <div className="ml-2 mt-2">
                    <span className="text-lg md:text-xl text-blue-600 dark:text-white font-bold">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                  {/* Tech Stack Section */}
                  <div className="flex flex-wrap justify-start gap-4 mt-6 mb-2 pl-1">
                    {["React", "Typescript", "Javascript", "System Design"].map(
                      (tech) => (
                        <div key={tech} className="relative">
                          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/30 opacity-40 pointer-events-none"></div>
                          <div
                            className="relative block w-auto p-6 rounded-xl bg-blue-50/70 dark:bg-blue-900/30 shadow-none font-medium text-white text-xs md:text-sm transition-all duration-200 select-none tracking-wide border border-transparent"
                            style={{ padding: "8px 8px" }}
                          >
                            {tech}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Stats section */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                        10+
                      </div>
                      <div className="text-sm text-slate-400">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                        10+
                      </div>
                      <div className="text-sm text-gray-400">
                        Engineers Mentored
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                        67K+
                      </div>
                      <div className="text-sm text-gray-400">
                        Customers Served
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                        200+
                      </div>
                      <div className="text-sm text-gray-400">
                        Vulnerabilities Fixed
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* Get in touch section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <div className="relative inline-block">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 pointer-events-none"></div>
                    <button
                      onClick={() => scrollToSection("#contact")}
                      className="relative block w-auto px-8 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/40 shadow-lg hover:shadow-xl font-semibold text-blue-800 dark:text-blue-100 text-base md:text-lg transition-all duration-200 cursor-pointer select-none tracking-wide text-center border border-transparent"
                      style={{ padding: "10px 8px" }}
                    >
                      Get In Touch
                    </button>
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 pointer-events-none"></div>
                    <a
                      href={personalInfo.resumeUrl}
                      download
                      className="relative block w-auto px-8 py-2 rounded-xl bg-white/90 dark:bg-slate-900/80 shadow-lg hover:shadow-xl font-semibold text-blue-800 dark:text-blue-100 text-base md:text-lg transition-all duration-200 cursor-pointer select-none tracking-wide text-center border border-transparent"
                      style={{ padding: "8px 8px" }}
                    >
                      <span className="inline-flex items-center gap-2 justify-center w-full">
                        <Download className="h-5 w-5" />
                        Download Resume
                      </span>
                    </a>
                  </div>
                </motion.div>
                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex justify-center lg:justify-start gap-8"
                >
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="relative inline-block group"
                    aria-label="Email"
                  >
                    <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 pointer-events-none"></span>
                    <span
                      style={{ padding: "8px 8px" }}
                      className="relative z-10 p-6 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center justify-center"
                    >
                      <Mail className="h-5 w-5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" />
                    </span>
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block group"
                    aria-label="LinkedIn"
                  >
                    <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 pointer-events-none"></span>
                    <span
                      style={{ padding: "8px 8px" }}
                      className="relative z-10 p-6 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center justify-center"
                    >
                      <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" />
                    </span>
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block group"
                    aria-label="GitHub"
                  >
                    <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 pointer-events-none"></span>
                    <span
                      style={{ padding: "8px 8px" }}
                      className="relative z-10 p-6 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/30 flex items-center justify-center"
                    >
                      <Github className="h-5 w-5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
