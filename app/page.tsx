"use client"

import { useState, useEffect, useCallback, useRef, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import {
  Activity,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Server,
  Terminal,
  User,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Briefcase,
  Layers,
  Eye,
  Target,
  Cpu,
  Zap,
  ArrowRight,
  Globe,
  ShieldCheck,
  Bot,
  Landmark,
  MessageSquare,
  Car,
  Store,
  Cog,
  Building2,
  FileSearch,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// ============================================================================
// TYPES
// ============================================================================

interface Project {
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

interface LinkProject {
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

interface FeedzaiDetail {
  id: string
  icon: LucideIcon
  title: string
  description: string
  technologies: string[]
}

interface ExperienceFeedzai {
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

interface ExperienceLink {
  id: "link"
  company: string
  role: string
  period: string
  location: string
  summary: string
  details: LinkProject[]
  technologies: string[]
}

type Experience = ExperienceFeedzai | ExperienceLink

// ============================================================================
// DATA
// ============================================================================

const projects: Project[] = [
  {
    id: 1,
    title: "Cloud-Native Payment Gateway",
    description: "Enterprise-scale payment processing system handling 10M+ daily transactions",
    challenge: "Legacy monolithic payment system causing 15% transaction failures during peak hours, with scaling issues and maintenance overhead.",
    solution: "Architected a microservices-based payment gateway on GKE with auto-scaling, circuit breakers, and real-time fraud detection using Cloud ML.",
    stack: ["GCP", "Kubernetes", "Node.js", "Redis", "BigQuery", "Pub/Sub"],
    category: "cloud",
    images: ["https://files.rochanegra.com/projects/jobzapp-dashboard.png?height=600&width=800&text=Architecture+Overview", "/placeholder.svg?height=600&width=800&text=Dashboard+View", "/placeholder.svg?height=600&width=800&text=Metrics+Panel"],
    link: "#",
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "Live data visualization platform processing 500K events/second",
    challenge: "Business stakeholders needed real-time insights but existing batch processing had 6-hour delays.",
    solution: "Built streaming data pipeline with Apache Beam on Dataflow, feeding a React dashboard with WebSocket updates.",
    stack: ["React", "TypeScript", "Dataflow", "BigQuery", "WebSocket", "D3.js"],
    category: "fullstack",
    images: ["/placeholder.svg?height=600&width=800&text=Dashboard+Main", "/placeholder.svg?height=600&width=800&text=Real-time+Charts"],
    github: "#",
  },
  {
    id: 3,
    title: "Infrastructure as Code Platform",
    description: "Self-service cloud provisioning with GitOps workflows",
    challenge: "Dev teams waiting 2+ weeks for infrastructure requests, creating bottlenecks and shadow IT.",
    solution: "Created Terraform modules with GitHub Actions, enabling self-service provisioning with compliance guardrails.",
    stack: ["Terraform", "GitHub Actions", "GCP", "Python", "Go", "OPA"],
    category: "devops",
    images: ["/placeholder.svg?height=600&width=800&text=GitOps+Flow", "/placeholder.svg?height=600&width=800&text=Portal+UI", "/placeholder.svg?height=600&width=800&text=Approval+Workflow"],
  },
  {
    id: 4,
    title: "ML-Powered Fraud Detection",
    description: "Real-time fraud scoring reducing false positives by 60%",
    challenge: "Rule-based fraud detection flagging legitimate transactions, causing customer friction and support overhead.",
    solution: "Deployed ensemble ML models on Vertex AI with feature store for real-time inference under 50ms latency.",
    stack: ["Vertex AI", "Python", "TensorFlow", "BigQuery ML", "Cloud Functions"],
    category: "ai",
    images: ["/placeholder.svg?height=600&width=800&text=Model+Architecture", "/placeholder.svg?height=600&width=800&text=Performance+Metrics"],
  },
  {
    id: 5,
    title: "Multi-Region Database Architecture",
    description: "Globally distributed database with 99.999% uptime SLA",
    challenge: "Single-region database causing latency issues for global users and lacking disaster recovery.",
    solution: "Implemented Cloud Spanner with custom replication policies and automated failover procedures.",
    stack: ["Cloud Spanner", "Go", "gRPC", "Terraform", "Cloud Monitoring"],
    category: "cloud",
    images: ["/placeholder.svg?height=600&width=800&text=Global+Architecture", "/placeholder.svg?height=600&width=800&text=Replication+Map", "/placeholder.svg?height=600&width=800&text=Failover+Dashboard"],
  },
  {
    id: 6,
    title: "Developer Portal & API Gateway",
    description: "Unified API management serving 200+ internal and external consumers",
    challenge: "API sprawl with inconsistent documentation and no rate limiting causing system instability.",
    solution: "Built centralized API gateway with Apigee, developer portal with Next.js, and automated API documentation.",
    stack: ["Apigee", "Next.js", "GraphQL", "OpenAPI", "Kong", "PostgreSQL"],
    category: "fullstack",
    images: ["/placeholder.svg?height=600&width=800&text=Portal+Home", "/placeholder.svg?height=600&width=800&text=API+Documentation"],
    link: "#",
  },
]

const experiences: Experience[] = [
  {
    id: "feedzai",
    company: "Feedzai",
    role: "Fullstack Engineer",
    period: "2024 — 2025",
    location: "Lisbon, Portugal",
    summary: "Worked on backend and frontend systems for a large-scale fraud detection platform in a high-security environment. Developed services in Java (Quarkus), improved data processing flows, and built internal tools using React with a microfrontend approach. Also handled deployments using Docker and Kubernetes (Helm), and supported IAM-related topics (Keycloak) across the team.",
    awards: "Internal Hackathon Winner: Built a PoC creating custom fraud detection rules via a chatbot that automatically filled forms for user review and approval.",
    details: [
      {
        id: "feedzai-backend",
        icon: Server,
        title: "Backend Development (35%)",
        description: "Engineered and maintained backend services in Java (Quarkus), focusing on improving data processing efficiency and scalability in a high-security environment. Managed application deployments with Docker.",
        technologies: ["Java", "Quarkus", "Docker", "Kubernetes", "Helm"]
      },
      {
        id: "feedzai-frontend",
        icon: Globe,
        title: "Frontend Development (45%)",
        description: "Built modern, responsive user interfaces for financial crime monitoring tools using a micro frontend architecture.",
        technologies: ["React", "TypeScript", "Micro Frontends"]
      },
      {
        id: "feedzai-iam",
        icon: ShieldCheck,
        title: "IAM & Tech Support (10%)",
        description: "Provided technical support and mentorship to colleagues across the company on Identity and Access Management (IAM) systems and internal problems. Monitored with Grafana.",
        technologies: ["Keycloak", "IAM", "Grafana", "Prometheus"]
      },
      {
        id: "feedzai-agile",
        icon: Briefcase,
        title: "Agile & Planning (10%)",
        description: "Discussed implementations and participated actively in agile ceremonies and common planning meetings, ensuring feature alignment.",
        technologies: ["Agile", "Jira"]
      }
    ],
    technologies: ["AWS", "Java (Quarkus)", "React", "TypeScript", "Kubernetes", "Docker"]
  },
  {
    id: "link",
    company: "Link Consulting",
    role: "Consultant",
    period: "2019 — 2024",
    location: "Lisbon, Portugal",
    summary: "Worked as a fullstack developer across multiple projects in banking, public sector, and automotive. Built and integrated conversational AI solutions using Dialogflow and Google Cloud, developed APIs and web apps (Node.js, React, Vue), and contributed to e-commerce platforms and internal tools. Also worked on system integrations and automation using Azure services, connecting tools like Dynamics, SharePoint, and Teams.",
    details: [
      {
        id: "link-heyhi",
        icon: Bot,
        title: "Project: AI Solutions & Call Analysis (Hey Hi Labs / Salvador Caetano)",
        role: "AI Solutions Engineer",
        description: {
          challenge: "Needed to efficiently manage and extract structured data from diverse internal processes like call centers and knowledge bases.",
          solution: "Developed customized AI solutions including voice recognition analysis, a role-based vector database for document queries, and a multi-language internal chatbot.",
          impact: "Streamlined internal data retrieval and automated the structured analysis of call center operations."
        },
        technologies: ["AI", "LLMs", "Vector DB", "Speech Recognition", "Prompt Engineering"]
      },
      {
        id: "link-banking",
        icon: Landmark,
        title: "Project: AI Digital Assistant for Banking",
        role: "Full-stack Developer",
        description: {
          challenge: "Bank support teams were overloaded with repetitive banking queries, requiring an automated, scalable solution.",
          solution: "Architected a secure, cloud-native conversational AI on GCP integrated with internal Bank systems via ETL, plus custom Data Studio dashboards.",
          impact: "Significantly reduced manual query load, provided accurate 24/7 internal support, and empowered business users to safely manage content."
        },
        technologies: ["Google Dialogflow", "GCP", "BigQuery", "Data Studio", "ETL"]
      },
      {
        id: "link-ctt",
        icon: MessageSquare,
        title: "Project: 'Fale Connosco' AI Portal (CTT)",
        role: "Full-stack Developer",
        description: {
          challenge: "CTT required a modern portal to intelligently classify and handle a high volume of varying user inquiries.",
          solution: "Engineered a scalable backend API (Adonis.js) integrated with an ML classification model (NeuralShift), alongside an interactive React frontend.",
          impact: "Successfully diverted traffic from human operators by providing immediate AI-driven classifications and answers."
        },
        technologies: ["React", "Adonis.js", "Node.js", "AWS", "Machine Learning"]
      },
      {
        id: "link-hyundai",
        icon: Car,
        title: "Project: E-Commerce Platform for Automotive (Hyundai)",
        role: "Full-stack Developer",
        description: {
          challenge: "Needed to quickly launch an online vehicle sales platform, but building custom solutions per brand was costly and slow.",
          solution: "Helped with the development of the 'Click to Buy' platform using a generic Quarkus backend on AWS EKS and established a white-label Vue.js frontend library.",
          impact: "Kickstarted Hyundai's digital sales while dramatically reducing the time-to-market for onboarding future automotive brands."
        },
        technologies: ["Vue.js", "Storybook", "Quarkus", "Java", "AWS EKS"]
      },
      {
        id: "link-carplus",
        icon: Store,
        title: "Project: E-commerce Platform for Used Cars (Carplus)",
        role: "Full-stack Developer",
        description: {
          challenge: "Wanted to replace the legacy website with a modern e-commerce platform focused on lead generation and trade-ins.",
          solution: "Rapidly deployed a digital store utilizing the previously established 'White Label' Vue.js component library and generic backend infrastructure.",
          impact: "Successfully modernized the shopping experience, resulting in streamlined digital lead generation for used vehicles."
        },
        technologies: ["Vue.js", "Storybook", "Framework7", "Quarkus"]
      },
      {
        id: "link-gisla",
        icon: Cog,
        title: "Project: Process Management Portal (GISLA)",
        role: "Full-stack Developer",
        description: {
          challenge: "Client needed to manage dozens of distinct, complex business workflows without building custom UIs for each scenario.",
          solution: "Created a comprehensive process portal featuring standalone components that dynamically generate complex forms and validation logic straight from JSON objects.",
          impact: "Decreased the deployment time of new business workflows from months to days, creating immense operational flexibility."
        },
        technologies: ["Vue.js", "Java", "REST APIs"]
      },
      {
        id: "link-adc",
        icon: Globe,
        title: "Project: Chatbot for Abu Dhabi Customs (ADC)",
        role: "Conversational AI Developer",
        description: {
          challenge: "Citizens needed a seamless way to check customs clearances and book services across web and mobile platforms in two languages.",
          solution: "Implemented a responsive Oracle Digital Assistant chatbot in English and Arabic, deeply integrated with ADC's internal legacy systems via APIs.",
          impact: "Enhanced accessibility for citizens through 24/7 multi-language support and automated common booking workflows."
        },
        technologies: ["Oracle Digital Assistant", "Chatbots", "Integrations"]
      },
      {
        id: "link-dgc",
        icon: Building2,
        title: "Project: Consumer Portal Chatbots (DGC & DGAE)",
        role: "Conversational AI Developer",
        description: {
          challenge: "Consumer websites lacked instant support to help citizens and businesses navigate common catering and property regulations.",
          solution: "Deployed multiple specialized chatbots and backoffices allowing administrators to consult conversation histories and manage intent flows.",
          impact: "Automated the handling of frequent public inquiries, providing immediate domain-specific assistance at scale."
        },
        technologies: ["Chatbots", "Backoffice", "NLP"]
      },
      {
        id: "link-internal",
        icon: Briefcase,
        title: "Project: Internal Process Integration",
        role: "Software Engineer",
        description: {
          challenge: "Internal processes required better synchronization across fragmented collaboration tools within the company.",
          solution: "Developed an automated integration pipeline connecting Teams, Edoclink, SharePoint, and Atlas using Angular, Azure Functions, and an Azure Bot.",
          impact: "Reduced manual data entry and improved cross-platform workflow harmony for employees."
        },
        technologies: ["Angular", "Azure Functions", "Azure Bot", "Teams"]
      },
      {
        id: "link-research",
        icon: FileSearch,
        title: "Project: AI & LLM Research Initiative",
        role: "AI Researcher",
        description: {
          challenge: "Needed to bridge the gap between theoretical AI advancements and practical enterprise implementation.",
          solution: "Dedicated intense research to Generative AI, LLMs, and semantic search via Vector Databases, focusing heavily on applied prompt engineering.",
          impact: "Gained deep expertise in manipulating LLM outcomes safely, forming the foundation for subsequent enterprise AI feature deployments."
        },
        technologies: ["Generative AI", "LLMs", "Vector Databases", "Prompt Engineering"]
      }
    ],
    technologies: ["GCP", "Azure", "Dialogflow", "Vue.js", "Quarkus", "Node"]
  }
]

const processSteps = [
  { icon: Target, label: "Strategize", description: "Define objectives & constraints" },
  { icon: Layers, label: "Architect", description: "Design scalable solutions" },
  { icon: Cpu, label: "Implement", description: "Build with best practices" },
  { icon: Eye, label: "Observe", description: "Monitor & iterate" },
]

const navItems = [
  { id: "hero", icon: User, label: "Profile" },
  { id: "process", icon: Zap, label: "Process" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Layers, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
]

// ============================================================================
// COMPONENTS
// ============================================================================

// Scramble Text Effect
function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(true)
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    if (!isScrambling) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index]
            if (char === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsScrambling(false)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [text, isScrambling])

  return <span className={cn("font-mono", className)}>{displayText}</span>
}

// Magnetic Button
function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// Status Badge
function StatusBadge({ status, pulse = true }: { status: string; pulse?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm">
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green" />
      </span>
      <span className="text-muted-foreground">{status}</span>
    </div>
  )
}

// Recursive Loop Diagram - Symmetrical with curved arrows
function RecursiveLoop() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Grid layout for perfect symmetry */}
      <div className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square">
        {/* Top center - Strategize */}
        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <ProcessNode step={processSteps[0]} index={0} activeStep={activeStep} />
        </div>

        {/* Middle left - Observe */}
        <div className="col-start-1 row-start-2 flex items-center justify-center">
          <ProcessNode step={processSteps[3]} index={3} activeStep={activeStep} />
        </div>

        {/* Center SVG for curved arrows */}
        <div className="col-start-2 row-start-2 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
            {/* Curved paths connecting nodes */}
            {[0, 1, 2, 3].map((i) => {
              const angles = [
                { start: 270, end: 0, cx: 85, cy: 15 },    // Top to Right
                { start: 0, end: 90, cx: 85, cy: 85 },     // Right to Bottom
                { start: 90, end: 180, cx: 15, cy: 85 },   // Bottom to Left
                { start: 180, end: 270, cx: 15, cy: 15 },  // Left to Top
              ]
              const a = angles[i]
              const isActive = activeStep === i
              
              return (
                <g key={i}>
                  {/* Background path */}
                  <path
                    d={`M ${50 + 35 * Math.cos((a.start * Math.PI) / 180)} ${50 + 35 * Math.sin((a.start * Math.PI) / 180)} 
                        Q ${a.cx} ${a.cy} 
                        ${50 + 35 * Math.cos((a.end * Math.PI) / 180)} ${50 + 35 * Math.sin((a.end * Math.PI) / 180)}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-border"
                  />
                  {/* Animated arrow on active path */}
                  {isActive && (
                    <motion.path
                      d={`M ${50 + 35 * Math.cos((a.start * Math.PI) / 180)} ${50 + 35 * Math.sin((a.start * Math.PI) / 180)} 
                          Q ${a.cx} ${a.cy} 
                          ${50 + 35 * Math.cos((a.end * Math.PI) / 180)} ${50 + 35 * Math.sin((a.end * Math.PI) / 180)}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-cloud-blue"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  )}
                </g>
              )
            })}
            
            {/* Arrow heads */}
            {[0, 1, 2, 3].map((i) => {
              const endAngles = [0, 90, 180, 270]
              const angle = endAngles[i]
              const x = 50 + 35 * Math.cos((angle * Math.PI) / 180)
              const y = 50 + 35 * Math.sin((angle * Math.PI) / 180)
              const rotation = angle + 90
              const isActive = activeStep === i
              
              return (
                <motion.polygon
                  key={`arrow-${i}`}
                  points="0,-4 4,4 -4,4"
                  transform={`translate(${x}, ${y}) rotate(${rotation})`}
                  className={cn(
                    "transition-colors duration-300",
                    isActive ? "fill-cloud-blue" : "fill-muted-foreground/50"
                  )}
                  animate={{
                    scale: isActive ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              )
            })}
          </svg>
        </div>

        {/* Middle right - Architect */}
        <div className="col-start-3 row-start-2 flex items-center justify-center">
          <ProcessNode step={processSteps[1]} index={1} activeStep={activeStep} />
        </div>

        {/* Bottom center - Implement */}
        <div className="col-start-2 row-start-3 flex items-center justify-center">
          <ProcessNode step={processSteps[2]} index={2} activeStep={activeStep} />
        </div>
      </div>
    </div>
  )
}

function ProcessNode({ step, index, activeStep }: { step: typeof processSteps[0]; index: number; activeStep: number }) {
  const Icon = step.icon
  const isActive = activeStep === index

  return (
    <motion.div
      animate={{
        scale: isActive ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div
        className={cn(
          "flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl transition-all duration-300",
          isActive ? "glass-elevated glow-blue" : "glass"
        )}
      >
        <div
          className={cn(
            "p-2.5 md:p-3 rounded-lg transition-colors",
            isActive ? "bg-cloud-blue/20 text-cloud-blue" : "bg-secondary text-muted-foreground"
          )}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <span className={cn("text-xs md:text-sm font-medium text-center", isActive ? "text-foreground" : "text-muted-foreground")}>
          {step.label}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground text-center hidden sm:block max-w-[80px] md:max-w-[100px]">
          {step.description}
        </span>
      </div>
    </motion.div>
  )
}

// Project Card with Glow
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  const categoryColors = {
    cloud: "text-cloud-blue border-cloud-blue/30",
    fullstack: "text-cyber-green border-cyber-green/30",
    devops: "text-amber border-amber/30",
    ai: "text-purple-400 border-purple-400/30",
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-px rounded-xl bg-gradient-to-r from-cloud-blue/50 via-cyber-green/50 to-amber/50 opacity-0 blur-xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      <div className="relative glass rounded-xl overflow-hidden">
        {/* Image placeholder */}
        <div className="aspect-video bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {project.images.length > 1 && (
            <div className="absolute bottom-2 right-2 z-20 px-2 py-1 rounded-md bg-background/80 text-xs text-muted-foreground">
              {project.images.length} images
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-semibold text-lg group-hover:text-cloud-blue transition-colors line-clamp-2">
              {project.title}
            </h3>
            <span className={cn("shrink-0 text-xs px-2 py-1 rounded-full border", categoryColors[project.category])}>
              {project.category}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Link Project Item with STAR format inside
function LinkProjectItem({ 
  project, 
  isExpanded, 
  onToggle 
}: { 
  project: LinkProject
  isExpanded: boolean
  onToggle: () => void 
}) {
  const Icon = project.icon

  return (
    <div className="border-l-2 border-cloud-blue/30 pl-4">
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="w-full text-left py-3 flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-secondary">
            <Icon className="w-4 h-4 text-cloud-blue" />
          </div>
          <div>
            <span className="text-sm font-medium group-hover:text-cloud-blue transition-colors block">
              {project.title}
            </span>
            <span className="text-xs text-muted-foreground">{project.role}</span>
          </div>
        </div>
        <ChevronDown 
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200",
            isExpanded && "rotate-180"
          )} 
        />
      </button>
      
      <div 
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-4 space-y-3">
          {/* STAR format for each project */}
          <div className="grid gap-2">
            <div className="p-3 rounded-lg bg-secondary/30">
              <div className="text-[10px] font-mono uppercase tracking-wider text-destructive mb-1">
                {"// "}Challenge
              </div>
              <p className="text-xs text-muted-foreground">{project.description.challenge}</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyber-green mb-1">
                {"// "}Solution
              </div>
              <p className="text-xs text-muted-foreground">{project.description.solution}</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cloud-blue mb-1">
                {"// "}Impact
              </div>
              <p className="text-xs text-muted-foreground">{project.description.impact}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Feedzai Detail Item (simple list format)
function FeedzaiDetailItem({ detail }: { detail: FeedzaiDetail }) {
  const Icon = detail.icon

  return (
    <div className="p-4 rounded-lg bg-secondary/50">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-cloud-blue/10">
          <Icon className="w-4 h-4 text-cloud-blue" />
        </div>
        <span className="text-sm font-medium">{detail.title}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{detail.description}</p>
      <div className="flex flex-wrap gap-1">
        {detail.technologies.map((tech) => (
          <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

// Experience Card - simplified without delays
function ExperienceCard({ 
  experience, 
  isExpanded, 
  onToggle,
}: { 
  experience: Experience
  isExpanded: boolean
  onToggle: () => void
}) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  // Reset expanded project when card closes
  useEffect(() => {
    if (!isExpanded) {
      setExpandedProject(null)
    }
  }, [isExpanded])

  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-cloud-blue/50 rounded-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cloud-blue/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-cloud-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{experience.company}</h3>
              <p className="text-muted-foreground">{experience.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{experience.location}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">{experience.period}</span>
            <div className="mt-2 flex justify-end">
              <ArrowRight className={cn(
                "w-5 h-5 text-muted-foreground transition-transform duration-200",
                isExpanded && "rotate-90"
              )} />
            </div>
          </div>
        </div>
      </button>

      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 space-y-4">
          {/* Summary */}
          <p className="text-sm text-muted-foreground">{experience.summary}</p>

          {/* Awards for Feedzai */}
          {experience.id === "feedzai" && experience.awards && (
            <div className="p-3 rounded-lg bg-amber/10 border border-amber/20">
              <div className="text-xs font-mono uppercase tracking-wider text-amber mb-1">
                {"// "}Achievement
              </div>
              <p className="text-xs text-muted-foreground">{experience.awards}</p>
            </div>
          )}

          {/* Details based on company type */}
          {experience.id === "feedzai" ? (
            <div className="grid gap-3 md:grid-cols-2">
              {experience.details.map((detail) => (
                <FeedzaiDetailItem key={detail.id} detail={detail} />
              ))}
            </div>
          ) : (
            <div className="pt-4 border-t border-border">
              <div className="text-xs font-mono uppercase tracking-wider text-amber mb-3">
                {"// "}Projects
              </div>
              <div className="space-y-1">
                {experience.details.map((project) => (
                  <LinkProjectItem
                    key={project.id}
                    project={project}
                    isExpanded={expandedProject === project.id}
                    onToggle={() => setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-4 border-t border-border">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              {"// "}Core Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Project Lightbox - arrows iterate through project images
function ProjectLightbox({ project, onClose }: {
  project: Project
  onClose: () => void
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(prev => prev - 1)
      }
      if (e.key === "ArrowRight" && currentImageIndex < project.images.length - 1) {
        setCurrentImageIndex(prev => prev + 1)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, currentImageIndex, project.images.length])

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project.id])

  const categoryColors = {
    cloud: "bg-cloud-blue/10 text-cloud-blue border-cloud-blue/20",
    fullstack: "bg-cyber-green/10 text-cyber-green border-cyber-green/20",
    devops: "bg-amber/10 text-amber border-amber/20",
    ai: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  }

  const hasPrevImage = currentImageIndex > 0
  const hasNextImage = currentImageIndex < project.images.length - 1

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-elevated rounded-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass-elevated p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <span className={cn("text-xs px-2.5 py-1 rounded-full border", categoryColors[project.category])}>
              {project.category}
            </span>
            <h2 className="font-semibold">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Gallery */}
        <div className="aspect-video bg-secondary/50 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Cloud className="w-24 h-24 text-muted-foreground/20" />
              <span className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                {project.images[currentImageIndex].split('text=')[1]?.replace(/\+/g, ' ') || `Image ${currentImageIndex + 1}`}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Image Navigation arrows */}
          {hasPrevImage && (
            <button
              onClick={() => setCurrentImageIndex(prev => prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {hasNextImage && (
            <button
              onClick={() => setCurrentImageIndex(prev => prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    idx === currentImageIndex ? "bg-cloud-blue" : "bg-muted-foreground/50 hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-muted-foreground">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-xs font-mono uppercase tracking-wider text-destructive mb-2">
                {"// "}The Challenge
              </div>
              <p className="text-sm text-muted-foreground">{project.challenge}</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-xs font-mono uppercase tracking-wider text-cyber-green mb-2">
                {"// "}The Solution
              </div>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              {"// "}Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="text-sm px-3 py-1.5 rounded-lg bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.link || project.github) && (
            <div className="flex gap-3 pt-4 border-t border-border">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cloud-blue text-white hover:bg-cloud-blue/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Sidebar Navigation (left side index)
function SideNav({ activeSection, onNavigate }: { activeSection: string; onNavigate: (section: string) => void }) {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col justify-center pl-6"
    >
      <div className="glass-elevated rounded-2xl p-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                isActive ? "bg-cloud-blue/20 text-cloud-blue" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className={cn(
                "text-sm font-medium whitespace-nowrap transition-all overflow-hidden",
                isActive ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100"
              )}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cloud-blue rounded-r-full"
                />
              )}
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}

// Mobile Bottom Navigation
function MobileNav({ activeSection, onNavigate }: { activeSection: string; onNavigate: (section: string) => void }) {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden"
    >
      <div className="glass-elevated rounded-2xl p-2 flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <MagneticButton
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative p-3 rounded-xl transition-colors",
                isActive ? "bg-cloud-blue/20 text-cloud-blue" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute inset-0 rounded-xl bg-cloud-blue/10 -z-10"
                />
              )}
            </MagneticButton>
          )
        })}
      </div>
    </motion.nav>
  )
}

// Progress Bar (vertical for desktop)
function ProgressBar({ progress }: { progress: number }) {
  return (
    <>
      {/* Desktop - vertical on left */}
      <div className="fixed left-0 top-0 bottom-0 z-30 w-1 bg-secondary hidden lg:block ml-2">
        <motion.div
          className="w-full bg-gradient-to-b from-cloud-blue via-cyber-green to-amber"
          style={{ height: `${progress}%` }}
        />
      </div>
      {/* Mobile - horizontal on top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-secondary lg:hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cloud-blue via-cyber-green to-amber"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================

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
      const sections = ["hero", "process", "experience", "projects", "contact"]
      for (const section of sections) {
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
                    <User className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground/30" />
                  </div>
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2">
                  <StatusBadge status="Available" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <StatusBadge status="System Status: Active" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  <ScrambleText text="Fullstack & Cloud Architect" className="text-foreground" />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl text-muted-foreground mb-2"
                >
                  Gonçalo Cereja
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
                  className="flex justify-center lg:justify-start"
                >
                  <MagneticButton
                    onClick={() => handleNavigate("process")}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cloud-blue text-white hover:bg-cloud-blue/90 transition-colors"
                  >
                    <Terminal className="w-5 h-5" />
                    <span>Explore My Process</span>
                  </MagneticButton>
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
                {"// "}The Recursive Loop
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Engineering Process</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A continuous cycle of strategic thinking, architectural design, implementation excellence, and observability-driven iteration.
              </p>
            </motion.div>

            <RecursiveLoop />
          </div>
        </section>

        {/* ===================== EXPERIENCE SECTION ===================== */}
        <section
          id="experience"
          className="min-h-screen flex items-center justify-center px-6 py-20"
        >
          <div className="max-w-3xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-cyber-green mb-4 block">
                {"// "}Career Log
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
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
                <MagneticButton className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cloud-blue text-white hover:bg-cloud-blue/90 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>hello@goncalocereja.dev</span>
                </MagneticButton>
              </div>

              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social) => (
                  <MagneticButton
                    key={social.label}
                    className="p-3 rounded-xl glass hover:bg-secondary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </MagneticButton>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  © 2026 Gonçalo Cereja. Built with Next.js, Tailwind CSS & Framer Motion.
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
