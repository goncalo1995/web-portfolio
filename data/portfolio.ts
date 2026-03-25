import {
  Bot,
  Briefcase,
  Building2,
  Car,
  Cog,
  Eye,
  FileSearch,
  Globe,
  Landmark,
  Layers,
  Mail,
  MessageSquare,
  Server,
  ShieldCheck,
  Store,
  Target,
  User,
  Zap,
  Cpu,
  Clock,
} from "lucide-react"
import type { Experience, NavItem, ProcessStep, Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Cloud-Native Payment Gateway",
    description: "Enterprise-scale payment processing system handling 10M+ daily transactions",
    challenge:
      "Legacy monolithic payment system causing 15% transaction failures during peak hours, with scaling issues and maintenance overhead.",
    solution:
      "Architected a microservices-based payment gateway on GKE with auto-scaling, circuit breakers, and real-time fraud detection using Cloud ML.",
    stack: ["GCP", "Kubernetes", "Node.js", "Redis", "BigQuery", "Pub/Sub"],
    category: "cloud",
    images: [
      "https://files.rochanegra.com/projects/jobzapp-dashboard.png?height=600&width=800&text=Architecture+Overview",
      "/placeholder.svg?height=600&width=800&text=Dashboard+View",
      "https://files.rochanegra.com/projects/jobzapp-dashboard.png?height=600&width=800&text=Metrics+Panel",
    ],
    link: "#",
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "Live data visualization platform processing 500K events/second",
    challenge: "Business stakeholders needed real-time insights but existing batch processing had 6-hour delays.",
    solution:
      "Built streaming data pipeline with Apache Beam on Dataflow, feeding a React dashboard with WebSocket updates.",
    stack: ["React", "TypeScript", "Dataflow", "BigQuery", "WebSocket", "D3.js"],
    category: "fullstack",
    images: [
      "/placeholder.svg?height=600&width=800&text=Dashboard+Main",
      "/placeholder.svg?height=600&width=800&text=Real-time+Charts",
    ],
    github: "#",
  },
  {
    id: 3,
    title: "Infrastructure as Code Platform",
    description: "Self-service cloud provisioning with GitOps workflows",
    challenge: "Dev teams waiting 2+ weeks for infrastructure requests, creating bottlenecks and shadow IT.",
    solution:
      "Created Terraform modules with GitHub Actions, enabling self-service provisioning with compliance guardrails.",
    stack: ["Terraform", "GitHub Actions", "GCP", "Python", "Go", "OPA"],
    category: "devops",
    images: [
      "/placeholder.svg?height=600&width=800&text=GitOps+Flow",
      "/placeholder.svg?height=600&width=800&text=Portal+UI",
      "/placeholder.svg?height=600&width=800&text=Approval+Workflow",
    ],
  },
  {
    id: 4,
    title: "ML-Powered Fraud Detection",
    description: "Real-time fraud scoring reducing false positives by 60%",
    challenge:
      "Rule-based fraud detection flagging legitimate transactions, causing customer friction and support overhead.",
    solution:
      "Deployed ensemble ML models on Vertex AI with feature store for real-time inference under 50ms latency.",
    stack: ["Vertex AI", "Python", "TensorFlow", "BigQuery ML", "Cloud Functions"],
    category: "ai",
    images: [
      "/placeholder.svg?height=600&width=800&text=Model+Architecture",
      "/placeholder.svg?height=600&width=800&text=Performance+Metrics",
    ],
  },
  {
    id: 5,
    title: "Multi-Region Database Architecture",
    description: "Globally distributed database with 99.999% uptime SLA",
    challenge: "Single-region database causing latency issues for global users and lacking disaster recovery.",
    solution: "Implemented Cloud Spanner with custom replication policies and automated failover procedures.",
    stack: ["Cloud Spanner", "Go", "gRPC", "Terraform", "Cloud Monitoring"],
    category: "cloud",
    images: [
      "/placeholder.svg?height=600&width=800&text=Global+Architecture",
      "/placeholder.svg?height=600&width=800&text=Replication+Map",
      "/placeholder.svg?height=600&width=800&text=Failover+Dashboard",
    ],
  },
  {
    id: 6,
    title: "Developer Portal & API Gateway",
    description: "Unified API management serving 200+ internal and external consumers",
    challenge: "API sprawl with inconsistent documentation and no rate limiting causing system instability.",
    solution:
      "Built centralized API gateway with Apigee, developer portal with Next.js, and automated API documentation.",
    stack: ["Apigee", "Next.js", "GraphQL", "OpenAPI", "Kong", "PostgreSQL"],
    category: "fullstack",
    images: [
      "/placeholder.svg?height=600&width=800&text=Portal+Home",
      "/placeholder.svg?height=600&width=800&text=API+Documentation",
    ],
    link: "#",
  },
]

export const experiences: Experience[] = [
  {
    id: "feedzai",
    company: "Feedzai",
    role: "Fullstack Engineer",
    period: "2024 — 2025",
    location: "Lisbon, Portugal",
    summary:
      "Worked on backend and frontend systems for a large-scale fraud detection platform in a high-security environment. Developed services in Java (Quarkus), improved data processing flows, and built internal tools using React with a microfrontend approach. Also handled deployments using Docker and Kubernetes (Helm), and supported IAM-related topics (Keycloak) across the team.",
    awards:
      "Internal Hackathon Winner: Built a PoC creating custom fraud detection rules via a chatbot that automatically filled forms for user review and approval.",
    details: [
      {
        id: "feedzai-backend",
        icon: Server,
        title: "Backend Development (35%)",
        description:
          "Engineered and maintained backend services in Java (Quarkus), focusing on improving data processing efficiency and scalability in a high-security environment. Managed application deployments with Docker.",
        technologies: ["Java", "Quarkus", "Docker", "Kubernetes", "Helm"],
      },
      {
        id: "feedzai-frontend",
        icon: Globe,
        title: "Frontend Development (45%)",
        description:
          "Built modern, responsive user interfaces for financial crime monitoring tools using a micro frontend architecture.",
        technologies: ["React", "TypeScript", "Micro Frontends"],
      },
      {
        id: "feedzai-iam",
        icon: ShieldCheck,
        title: "IAM & Tech Support (10%)",
        description:
          "Provided technical support and mentorship to colleagues across the company on Identity and Access Management (IAM) systems and internal problems. Monitored with Grafana.",
        technologies: ["Keycloak", "IAM", "Grafana", "Prometheus"],
      },
      {
        id: "feedzai-agile",
        icon: Briefcase,
        title: "Agile & Planning (10%)",
        description:
          "Discussed implementations and participated actively in agile ceremonies and common planning meetings, ensuring feature alignment.",
        technologies: ["Agile", "Jira"],
      },
    ],
    technologies: ["AWS", "Java (Quarkus)", "React", "TypeScript", "Kubernetes", "Docker"],
  },
  {
    id: "link",
    company: "Link Consulting",
    role: "Consultant",
    period: "2019 — 2024",
    location: "Lisbon, Portugal",
    summary:
      "Worked as a fullstack developer across multiple projects in banking, public sector, and automotive. Built and integrated conversational AI solutions using Dialogflow and Google Cloud, developed APIs and web apps (Node.js, React, Vue), and contributed to e-commerce platforms and internal tools. Also worked on system integrations and automation using Azure services, connecting tools like Dynamics, SharePoint, and Teams.",
    details: [
      {
        id: "link-heyhi",
        icon: Bot,
        title: "AI Solutions & Call Analysis (Hey Hi Labs / Salvador Caetano)",
        role: "AI Solutions Engineer",
        description: {
          challenge:
            "Needed to efficiently manage and extract structured data from diverse internal processes like call centers and knowledge bases.",
          solution:
            "Developed customized AI solutions including voice recognition analysis, a role-based vector database for document queries, and a multi-language internal chatbot.",
          impact: "Streamlined internal data retrieval and automated the structured analysis of call center operations.",
        },
        technologies: ["AI", "LLMs", "Vector DB", "Speech Recognition", "Prompt Engineering"],
      },
      {
        id: "link-banking",
        icon: Landmark,
        title: "AI Digital Assistant for Banking",
        role: "Full-stack Developer",
        description: {
          challenge:
            "Bank support teams were overloaded with repetitive banking queries, requiring an automated, scalable solution.",
          solution:
            "Architected a secure, cloud-native conversational AI on GCP integrated with internal Bank systems via ETL, plus custom Data Studio dashboards.",
          impact:
            "Significantly reduced manual query load, provided accurate 24/7 internal support, and empowered business users to safely manage content.",
        },
        technologies: ["Google Dialogflow", "GCP", "BigQuery", "Data Studio", "ETL"],
      },
      {
        id: "link-ctt",
        icon: MessageSquare,
        title: "'Fale Connosco' AI Portal (CTT)",
        role: "Full-stack Developer",
        description: {
          challenge:
            "CTT required a modern portal to intelligently classify and handle a high volume of varying user inquiries.",
          solution:
            "Engineered a scalable backend API (Adonis.js) integrated with an ML classification model (NeuralShift), alongside an interactive React frontend.",
          impact:
            "Successfully diverted traffic from human operators by providing immediate AI-driven classifications and answers.",
        },
        technologies: ["React", "Adonis.js", "Node.js", "AWS", "Machine Learning"],
      },
      {
        id: "link-hyundai",
        icon: Car,
        title: "E-Commerce Platform for Automotive (Hyundai)",
        role: "Full-stack Developer",
        description: {
          challenge:
            "Needed to quickly launch an online vehicle sales platform, but building custom solutions per brand was costly and slow.",
          solution:
            "Helped with the development of the 'Click to Buy' platform using a generic Quarkus backend on AWS EKS and established a white-label Vue.js frontend library.",
          impact:
            "Kickstarted Hyundai's digital sales while dramatically reducing the time-to-market for onboarding future automotive brands.",
        },
        technologies: ["Vue.js", "Storybook", "Quarkus", "Java", "AWS EKS"],
      },
      {
        id: "link-carplus",
        icon: Store,
        title: "E-commerce Platform for Used Cars (Carplus)",
        role: "Full-stack Developer",
        description: {
          challenge:
            "Wanted to replace the legacy website with a modern e-commerce platform focused on lead generation and trade-ins.",
          solution:
            "Rapidly deployed a digital store utilizing the previously established 'White Label' Vue.js component library and generic backend infrastructure.",
          impact:
            "Successfully modernized the shopping experience, resulting in streamlined digital lead generation for used vehicles.",
        },
        technologies: ["Vue.js", "Storybook", "Framework7", "Quarkus"],
      },
      {
        id: "link-gisla",
        icon: Cog,
        title: "Process Management Portal (GISLA)",
        role: "Full-stack Developer",
        description: {
          challenge:
            "Client needed to manage dozens of distinct, complex business workflows without building custom UIs for each scenario.",
          solution:
            "Created a comprehensive process portal featuring standalone components that dynamically generate complex forms and validation logic straight from JSON objects.",
          impact:
            "Decreased the deployment time of new business workflows from months to days, creating immense operational flexibility.",
        },
        technologies: ["Vue.js", "Java", "REST APIs"],
      },
      {
        id: "link-adc",
        icon: Globe,
        title: "Chatbot for Abu Dhabi Customs (ADC)",
        role: "Conversational AI Developer",
        description: {
          challenge:
            "Citizens needed a seamless way to check customs clearances and book services across web and mobile platforms in two languages.",
          solution:
            "Implemented a responsive Oracle Digital Assistant chatbot in English and Arabic, deeply integrated with ADC's internal legacy systems via APIs.",
          impact:
            "Enhanced accessibility for citizens through 24/7 multi-language support and automated common booking workflows.",
        },
        technologies: ["Oracle Digital Assistant", "Chatbots", "Integrations"],
      },
      {
        id: "link-dgc",
        icon: Building2,
        title: "Consumer Portal Chatbots (DGC & DGAE)",
        role: "Conversational AI Developer",
        description: {
          challenge:
            "Consumer websites lacked instant support to help citizens and businesses navigate common catering and property regulations.",
          solution:
            "Deployed multiple specialized chatbots and backoffices allowing administrators to consult conversation histories and manage intent flows.",
          impact: "Automated the handling of frequent public inquiries, providing immediate domain-specific assistance at scale.",
        },
        technologies: ["Chatbots", "Backoffice", "NLP"],
      },
      {
        id: "link-internal",
        icon: Briefcase,
        title: "Internal Process Integration",
        role: "Software Engineer",
        description: {
          challenge:
            "Internal processes required better synchronization across fragmented collaboration tools within the company.",
          solution:
            "Developed an automated integration pipeline connecting Teams, Edoclink, SharePoint, and Atlas using Angular, Azure Functions, and an Azure Bot.",
          impact: "Reduced manual data entry and improved cross-platform workflow harmony for employees.",
        },
        technologies: ["Angular", "Azure Functions", "Azure Bot", "Teams"],
      },
      {
        id: "link-research",
        icon: FileSearch,
        title: "AI & LLM Research Initiative",
        role: "AI Researcher",
        description: {
          challenge: "Needed to bridge the gap between theoretical AI advancements and practical enterprise implementation.",
          solution:
            "Dedicated intense research to Generative AI, LLMs, and semantic search via Vector Databases, focusing heavily on applied prompt engineering.",
          impact:
            "Gained deep expertise in manipulating LLM outcomes safely, forming the foundation for subsequent enterprise AI feature deployments.",
        },
        technologies: ["Generative AI", "LLMs", "Vector Databases", "Prompt Engineering"],
      },
    ],
    technologies: ["GCP", "Azure", "Dialogflow", "Vue.js", "Java (Quarkus)", "Node"],
  },
]

export const processSteps = [
  {
    label: "Discover",
    icon: Target,
    description: "Understand and align on goals, users, and constraints",
    details: [
      "Stakeholder alignment",
      "User & problem analysis",
      "Project scope definition",
    ],
    outcome: "Clear direction and validated requirements",
  },
  {
    label: "Plan",
    icon: Layers,
    description: "Define scope, timeline, and technical approach",
    details: [
      "Technical architecture",
      "Milestones & deliverables",
      "Risk identification",
    ],
    outcome: "A predictable roadmap with no surprises",
  },
  {
    label: "Design & Build",
    icon: Cpu,
    description: "Create, iterate, and develop your product",
    details: [
      "UI/UX design iteration",
      "Scalable development",
      "Continuous feedback loops",
    ],
    outcome: "A polished, production-ready product",
  },
  {
    label: "Launch",
    icon: Clock,
    description: "Deploy, test, and go live with confidence",
    details: [
      "QA & performance checks",
      "Deployment & infrastructure",
      "Final refinements",
    ],
    outcome: "A confident, stable release",
  },
  {
    label: "Support",
    icon: Eye,
    description: "I help you monitor, improve, and scale.",
    details: [
      "Performance monitoring",
      "Feature improvements",
      "Long-term scaling",
    ],
    outcome: "Continuous growth and reliability",
  },
];

export const navItems: NavItem[] = [
  { id: "hero", icon: User, label: "Profile" },
  { id: "process", icon: Zap, label: "Process" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Layers, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
]
