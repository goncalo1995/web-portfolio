"use client"

import { useState, useEffect, useCallback, useRef, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Activity,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Bot,
  Clock,
  Calendar,
  FileText,
  Code,
  User,
  Download,
} from "lucide-react"
import Image from "next/image"
import { projects, experiences, processSteps } from "@/data/portfolio"
import type { Project } from "@/types"

import TypewriterText from "@/components/portfolio/TypewriterText"
import { MagneticButton } from "@/components/portfolio/MagneticButton"
import { StatusBadge } from "@/components/portfolio/StatusBadge"
import { ExperienceCard } from "@/components/portfolio/ExperienceCard"
import { ProjectCard } from "@/components/portfolio/ProjectCard"
import { ProjectLightbox } from "@/components/portfolio/ProjectLightbox"
import { SideNav } from "@/components/portfolio/SideNav"
import { MobileNav } from "@/components/portfolio/MobileNav"
import { ProgressBar } from "@/components/portfolio/ProgressBar"
import ProcessTimeline from "@/components/portfolio/ProcessTimeline"
import CollaborateIcon from "@/components/portfolio/CollaborateIcon"
import Link from "next/link"

const SECTIONS = ["hero", "process", "experience", "projects", "contact"]

function PortfolioContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  // Handle URL query params for deep linking
  useEffect(() => {
    const projectId = searchParams.get("project")
    if (projectId) {
      const project = projects.find((p) => p.id === parseInt(projectId))
      if (project) setSelectedProject(project)
    }
  }, [searchParams])

  // Update URL when project changes
  const handleProjectSelect = useCallback((project: Project | null) => {
    setSelectedProject(project)
    if (project) {
      router.push(`?project=${project.id}`, { scroll: false })
    } else {
      router.push("/", { scroll: false })
    }
  }, [router])

  // Scroll handling for vertical layout
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((scrollTop / docHeight) * 100)

      // Determine active section
      for (const section of SECTIONS) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation
  const handleNavigate = useCallback((section: string) => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  // Simple experience toggle without delays
  const handleExperienceToggle = useCallback((company: string) => {
    setExpandedExperience(prev => prev === company ? null : company)
  }, [])

  return (
    <>
      <ProgressBar progress={scrollProgress} />
      <SideNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Vertical scrolling layout */}
      <div className="min-h-screen lg:pl-20">
        {/* ===================== HERO SECTION ===================== */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative shrink-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass glow-blue">
                  <div className="w-full h-full bg-gradient-to-br from-cloud-blue/20 to-cyber-green/20 flex items-center justify-center">
                    <Image loading="eager" src="https://files.rochanegra.com/cv/me-cropped.JPG" alt="Profile" width={192} height={192} className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2">
                  <StatusBadge status="Available" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="text-center lg:text-left">
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <StatusBadge status="System Status: Active" />
                </motion.div> */}

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  <TypewriterText className="text-foreground">Gonçalo Cereja</TypewriterText>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl text-muted-foreground mb-2"
                >
                  Fullstack & Cloud Architect
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-muted-foreground max-w-xl mb-8"
                >
                  Building enterprise-scale solutions with a focus on AI integration, cloud architecture, and modern fullstack development. 
                  Specializing in GCP, conversational AI, and scalable web applications.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
                >
                  {[
                    { icon: Cloud, label: "Cloud Architecture" },
                    { icon: Bot, label: "AI & Chatbots" },
                    { icon: Code2, label: "Fullstack" },
                    { icon: Database, label: "Data Engineering" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-3 py-2 glass rounded-lg"
                    >
                      <item.icon className="w-4 h-4 text-cloud-blue" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center lg:justify-start gap-3"
                >
                  <MagneticButton
                    onClick={() => handleNavigate("process")}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cloud-blue text-white hover:bg-cloud-blue/90 transition-colors cursor-pointer"
                  >
                    <Terminal className="w-5 h-5" />
                    <span>My Process</span>
                  </MagneticButton>
                  <CollaborateIcon onClick={() => handleNavigate("contact")} />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROCESS SECTION ===================== */}
        <section
          id="process"
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-cloud-blue mb-4 block">
                {"// "}My Engineering Process
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                A clear, structured process —
                <span className="text-white/60"> from idea to launch</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                I follow a proven workflow that keeps projects predictable, transparent,
                and focused on delivering real results — not just code.
              </p>
            </motion.div>

            <ProcessTimeline steps={processSteps} />

          </div>
        </section>

        {/* ===================== EXPERIENCE SECTION ===================== */}
        <section
          id="experience"
          className="min-h-fit flex items-center justify-center px-6 py-20"
        >
          <div className="max-w-3xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-cyber-green mb-4 block">
                {"// "}Career Log & Education
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
              <p className="text-muted-foreground">
                Building scalable systems across fintech, consulting, and enterprise domains.
              </p>
            </motion.div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  isExpanded={expandedExperience === exp.id}
                  onToggle={() => handleExperienceToggle(exp.id)}
                />
              ))}

              <div className="flex flex-col gap-6 w-full">
                <div className="glass p-6 rounded-2xl border border-border space-y-6 shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <h4 className="text-sm font-mono text-muted-foreground w-full md:w-auto">Academic Foundation</h4>
                    <span className="text-sm text-muted-foreground w-full md:w-auto">2013 — 2019</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border bg-white p-2 flex items-center justify-center">
                      <Image src="/ist_logo.jpeg" alt="Instituto Superior Técnico" className="w-full h-full object-contain" width={64} height={64} />
                    </div>
                    <div className="flex-1 w-full overflow-hidden">
                      <h2 className="text-xl font-bold text-foreground mb-2">Instituto Superior Técnico</h2>
                      <div className="space-y-4">
                        <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                          <li>Master's Degree (MSc) in Information Systems and Computer Engineering</li>
                          <li>Bachelor's Degree (BSc) in Information Systems and Computer Engineering</li>
                        </ul>
                        
                        <div className="bg-secondary/30 p-5 rounded-xl border border-border mt-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                              <div className="flex-1">
                                  <h4 className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                                      <FileText size={20} className="text-primary"/>
                                      Thesis: "Customer Service and Ticketing Chatbot: From Conception to Production" (18 / 20)
                                  </h4>
                                  <p className="text-muted-foreground text-sm leading-relaxed mt-2 max-w-2xl">
                                  Developed and evaluated a chatbot for the portuguese railway company CP (Comboios de Portugal), aiming to provide quick and accurate responses to frequently asked questions.
                                  </p>
                              </div>
                              <a 
                                  href="https://fenix.tecnico.ulisboa.pt/downloadFile/1689244997260269/78669-Goncalo-Pereira_dissertacao.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 rounded-lg text-xs font-mono font-medium border border-primary/20 hover:border-primary/40 shrink-0 self-start mt-2 md:mt-0"
                              >
                                  <Download size={14} /><span className="md:hidden">Download Thesis</span>
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROJECTS SECTION ===================== */}
        <section
          id="projects"
          className="min-h-screen px-6 py-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-amber mb-4 block">
                {"// "}Project Lab
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work (Soon)</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A selection of cloud architecture and fullstack projects demonstrating scalable solutions.
              </p>
            </motion.div>

            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectSelect(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ===================== CONTACT SECTION ===================== */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono uppercase tracking-wider text-cloud-blue mb-4 block">
                {"// "}Initialize Connection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Together</h2>
              <p className="text-muted-foreground mb-8">
                Available for freelance projects, technical consulting, and interesting collaboration opportunities.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <MagneticButton className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cloud-blue text-white hover:bg-cloud-blue/90 transition-colors"
                  onClick={() => window.open("mailto:cerejagoncalo@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5" />
                  <span>cerejagoncalo@gmail.com</span>
                </MagneticButton>
              </div>

              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/goncalo1995", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/gonçalo-pereira", label: "LinkedIn" },
                ].map((social) => (
                  <MagneticButton
                    key={social.label}
                    className="p-3 rounded-xl glass hover:bg-secondary transition-colors"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </MagneticButton>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Gonçalo Lascasas Cereja Ribeiro Pereira.<br/>Built with Love in Portugal.{" "}
                  <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Project Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectLightbox
            project={selectedProject}
            onClose={() => handleProjectSelect(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-cloud-blue animate-pulse" />
          <span className="text-muted-foreground">Loading system...</span>
        </div>
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  )
}
