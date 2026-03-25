import type { LucideIcon } from "lucide-react"

export interface Project {
  id: number
  title: string
  description: string
  challenge: string
  solution: string
  stack: string[]
  category: "cloud" | "fullstack" | "devops" | "ai"
  images: string[]
  link?: string
  github?: string
}

export interface LinkProject {
  id: string
  icon: LucideIcon
  title: string
  role: string
  description: {
    challenge: string
    solution: string
    impact: string
  }
  technologies: string[]
}

export interface FeedzaiDetail {
  id: string
  icon: LucideIcon
  title: string
  description: string
  technologies: string[]
}

export interface ExperienceFeedzai {
  id: "feedzai"
  company: string
  role: string
  period: string
  location: string
  summary: string
  awards: string
  details: FeedzaiDetail[]
  technologies: string[]
}

export interface ExperienceLink {
  id: "link"
  company: string
  role: string
  period: string
  location: string
  summary: string
  details: LinkProject[]
  technologies: string[]
}

export type Experience = ExperienceFeedzai | ExperienceLink

export interface ProcessStep {
  icon: LucideIcon
  label: string
  description: string
  details: string[]
  outcome: string
}

export interface NavItem {
  id: string
  icon: LucideIcon
  label: string
}
