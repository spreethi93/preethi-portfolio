export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  points: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export interface Honor {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  photo: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  svg?: string;
}

export interface Skills {
  "Frontend Web Technologies": Skill[];
  "Backend & APIs": Skill[];
  "Performance & Monitoring": Skill[];
  "Architecture/Strategy": Skill[];
  "DevOps & Tooling": Skill[];
  "Design & Collaboration": Skill[];
  "Leadership": Skill[];
}
