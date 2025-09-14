import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { Certifications } from "@/components/sections/certifications"
import { Experience } from "@/components/sections/experience"
// import { Honors } from "@/components/sections/honors"
// import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="mt-16 h-[calc(100vh-4rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <Hero />
        <Skills />
        <Certifications />
        <Experience />
        {/* <Honors /> */}
        {/* <Education /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
