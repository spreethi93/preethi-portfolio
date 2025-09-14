"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { contactInfo } from "@/data/portfolio"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section min-h-[calc(100vh-4rem)] snap-start flex items-center justify-center relative overflow-hidden">
      {/* Modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      {/* Subtle animated shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container relative z-10 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and exciting projects. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 pointer-events-none"></span>
                  <span
                    style={{ padding: "8px 8px" }}
                    className="relative z-10 p-6 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </span>
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 pointer-events-none"></span>
                  <span
                    style={{ padding: "8px 8px" }}
                    className="relative z-10 p-6 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </span>
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80 pointer-events-none"></span>
                  <span
                    style={{ padding: "8px 8px" }}
                    className="relative z-10 p-6 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center"
                  >
                    <MapPin className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  </span>
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
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
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="modern-card p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-50/70 via-purple-50/40 to-pink-50/40 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/20 border border-blue-200/50 dark:border-blue-800/40 shadow-lg transform-gpu"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-slate-900/50 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">
                Send a Message
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
