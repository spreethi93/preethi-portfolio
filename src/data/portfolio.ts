import { 
  PersonalInfo, 
  Skills, 
  Experience, 
  Project, 
  Certification, 
  Honor, 
  Education, 
  ContactInfo 
} from "@/types"

export const personalInfo: PersonalInfo = {
  name: "Preethi Sathiyanarayanan",
  title: "Lead Software Engineer",
  summary: "Frontend Technical Lead with 9+ years of experience architecting scalable, accessible (WCAG 2.1), highly performant & user-centric web applications using modern technologies to solve enterprise-level SaaS product(B2C, B2B) needs. Proven expertise in React (v18), TypeScript, modular architecture, and micro-frontends. Strategic problem-solver with strong mentoring, business goal alignment, and stakeholder collaboration across cross-functional teams. Experienced in performance optimisation, CI/CD integration, and leading technical transformations. Looking to drive frontend excellence in an innovative product environment.",
  photo: "/assets/images/preethi-sathiyanarayanan.jpg",
  resumeUrl: "/resume.pdf"
}

export const skills: Skills = {
  "Frontend Web Technologies": [
    { name: "HTML5", svg: "html-5.svg" },
    { name: "CSS3", svg: "css-3.svg" },
    { name: "JavaScript", svg: "javascript.svg" },
    { name: "TypeScript", svg: "typescript.svg" },
    { name: "React", svg: "react.svg" },
    { name: "Ember", svg: "ember.svg" },
    { name: "Next.js", svg: "next-js.svg" },
    { name: "Storybook", svg: "storybook.svg" },
    { name: "Tailwind CSS", svg: "tailwind.svg" },
    { name: "Accessibility", svg: "accessibility.svg" },
    { name: "RTL", svg: "testing-methodologies.svg" },
  ],
  "Backend & APIs": [
    { name: "RoR", svg: "rails.svg" },
    { name: "Java", svg: "java.svg" },
    { name: "REST API", svg: "rest-api.svg" },
    { name: "MySQL", svg: "mysql.svg" }
  ],
  "Performance & Monitoring": [
    { name: "Lighthouse", svg: "lighthouse-svgrepo-com.svg" },
    { name: "Web Vitals", svg: "monitoring.svg" },
    { name: "Performance Optimization", svg: "performance-optimisation.svg" },
    { name: "Page Speed Optimisation", svg: "page-speed-optimisation.svg" },
    { name: "Chrome DevTools", svg: "chrome-devtools.svg" },
    { name: "Code Splitting", svg: "code-splitting.svg" },
    { name: "Monitoring", svg: "monitoring.svg" },
    { name: "Sentry", svg: "sentry.svg" },
    { name: "Apdex", svg: "apdex.svg" }
  ],
  "Architecture/Strategy": [
    { name: "Micro-frontends", svg: "micro-frontend-architecture.svg" },
    { name: "Modular Architecture", svg: "modular-components.svg" },
    { name: "System Design", svg: "design-systems.svg" },
    { name: "Microservices", svg: "modular-components.svg" },
    { name: "AI and MCP for FE", svg: "ai.svg" }
  ],
  "DevOps & Tooling": [
    { name: "CI/CD", svg: "jenkins.svg" },
    { name: "Git", svg: "git.svg" },
    { name: "GitHub Actions", svg: "github-actions.svg" },
    { name: "Postman", svg: "postman.svg" },
    { name: "Vercel", svg: "vercel.svg" },
    { name: "Jenkins", svg: "jenkins.svg" },
    { name: "Jira", svg: "jira.svg" }
  ],
  // "Design & Collaboration": [
  //   { name: "Figma", svg: "figma.svg" },
  //   { name: "Invision", svg: "invision.svg" },
  //   { name: "UI/UX Design", svg: "ui-ux.svg" },
  //   { name: "Agile/Scrum", svg: "agile-scrum.svg" }
  // ],
  // "Leadership": [
  //   { name: "Mentoring", svg: "mentoring.svg" },
  //   { name: "Agile Practices", svg: "agile-scrum.svg" },
  //   { name: "Cross-functional Collaboration", svg: "cross-functional-collaboration.svg" },
  //   { name: "Code Standards", svg: "modular-components.svg" },
  //   { name: "Project Planning", svg: "project-planning.svg" },
  //   { name: "Stakeholder Communication", svg: "stakeholder-communication.svg" },
  //   { name: "Technical Decision Making", svg: "decision-making.svg" }
  // ]
}

export const experiences: Experience[] = [
  {
    company: "Freshworks",
    position: "Lead Frontend Engineer,",
    duration: "Jun 2017 - Present",
    location: "Chennai, India",
    product: "Freshservice",
    productUrl: "https://www.freshworks.com/products/freshservice/",
    productCaption: "From Tickets to Transformation",
    productDescription: "Freshservice unifies IT services, assets, and operations on one intuitive platform, boosting employee support, driving agent productivity, and lowering total cost of ownership.",
    techStack: ["React", "TypeScript", "JavaScript", "Ember", "MFE architecture", "Accessibility", "Performance Optimization"],
    points: [
      "Architected and led frontend development of Freshservice SPA (67k+ customers) using React, TypeScript, JavaScript, and micro-frontend architecture for modular scalability in a DevSecOps culture.",
      "Mentored 10+ engineers across squads, conducted PR code reviews, and defined application codebase quality by implementing robust CI checks(used every day by 400 engineers) for accessibility (A11y), security benchmarks, linting, unit test coverage(90%), build size monitoring, Storybook documenting, and SVG optimizations etc.",
      "Scaled engineering velocity by 20% across 3 revenue-generating products by building reusable components for the UI component libraries.",
      "Strengthened platform security by mitigating 200+ vulnerabilities, including XSS, CSRF, and other attack vectors. Conducted regular security audits to detect and address risks, ensuring application compliance with modern security standards",
      "Enhanced product performance by cutting page load time from 12s to 4s by minimising API calls, reducing WebSocket subscriptions, implementing incremental loading, & leveraging service worker caching with unique cache bursting logics using AWS S3 and CloudFront for frontend asset delivery.",
      "Improved first-page load time by 5s through code splitting, memory leak fixes, and preload/prefetch/defer strategies, significantly boosting APDEX scores.",
      "Orchestrated technical initiatives, including PoC research, technology evaluations, and security audits with comprehensive documentation.",
      "Championed complex tech migrations (e.g., jQuery/RoR to React/Ember) for 4 core modules in the product, whilst enhancing UI/UX, cross-browser compatibility, accessibility, and API efficiency.",
      "Fostered cross-functional collaboration, aligning frontend, backend, design, product, platform, analytics and QA teams through structured communication, clear documentation, and effective sprint rituals.",
      "Owned full development lifecycle: requirements gathering, analysis, system design, grooming, API contracts, development, release planning, delivery, and post-release monitoring (APDEX, Heap, feature usage) using agile methodologies."
    ],
    logo: "/assets/images/freshworks.png"
  },
  {
    company: "Bounteous",
    position: "Software Engineer - Fullstack",
    duration: "Sep 2015 – Jun 2017",
    location: "Chennai, India",
    productDescription: "Bounteous is a digital marketing agency that helps businesses grow their revenue through digital marketing.",
    techStack: ["Ionic", "Angular JS", "Node.js", "Salesforce developer", "Visualforce", "Apex", "JavaScript", "RESTful integrations"],
    points: [
      "Built hybrid apps with Ionic (Angular JS, Node.js) and web apps using Visualforce, Apex, and JavaScript, designing RESTful integrations between Salesforce and external systems while adhering to ISV standards.",
      "Delivered time-sensitive, scalable solutions for multi-time-zone clients, ensuring optimal performance and user experiences.",
    ],
    logo: "/bounteous-logo.png"
  }
]

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    image: "/project1.jpg"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    image: "/project2.jpg"
  }
]

export const certifications: Certification[] = [
  {
    name: "Web Design Accessibility",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-06a24d9f-c11f-4553-9b8f-41ba1ac40c66/"
  },
  {
    name: "Typescript",
    issuer: "Great Learning",
    url: "https://www.mygreatlearning.com/certificate/HHAYCALA" 
  },
  {
    name: "Learn React by CodeAcademy",
    issuer: "CodeAcademy",
    url: "https://www.codecademy.com/learn/react-101"
  }
]

export const honors: Honor[] = [
  {
    title: "Employee of the Year",
    company: "Company Name 1",
    date: "2023",
    description: "Recognized for outstanding performance and leadership in delivering critical projects."
  },
  {
    title: "Innovation Award",
    company: "Company Name 2",
    date: "2021",
    description: "Awarded for developing innovative solutions that improved team productivity by 30%."
  }
]

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "SSN College of Engineering, Anna University",
    duration: "Apr 2015",
    location: "Chennai, India",
    gpa: "8.73/10 - First Class with Distinction"
  }
]

export const contactInfo: ContactInfo = {
  email: "preethisathiya229@gmail.com",
  phone: "+91 - 9003267723",
  linkedin: "https://www.linkedin.com/in/preethisathiya",
  github: "https://github.com/spreethi93",
  location: "Chennai, India (Open to relocation)"
}
