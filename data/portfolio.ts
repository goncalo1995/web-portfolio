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
  BrainCircuit,
  Cloud,
} from "lucide-react"
import type { Experience, NavItem, ProcessStep, Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Jobzapp",
    description: "AI-powered ecosystem for automated job tracking and interview intelligence.",
    challenge: "Job seekers struggle with fragmented application tracking and lack personalized, data-driven preparation for specific role requirements.",
    solution: "Built an integrated SaaS platform leveraging AI to analyze job descriptions, track applications, and generate custom interview prep modules using Supabase for high-performance data handling.",
    stack: ["NextJS", "Supabase", "OpenAI", "Tailwind"],
    category: "SaaS",
    hasAI: true,
    status: "live",
    images: [
      "https://files.rochanegra.com/projects/jobzapp-home.png",
      "https://files.rochanegra.com/projects/jobzapp-dashboard-1.png",
      "https://files.rochanegra.com/projects/jobzapp-blog.png"
    ],
    link: "http://jobs.rochanegra.com",
    github: "https://github.com/goncalo1995/jobzapp"
  },
  {
    id: 2,
    title: "AIRoast.app",
    description: "Viral AI validation tool that 'roasts' startups and business ideas to find flaws.",
    challenge: "Entrepreneurs often operate in echo chambers and need brutally honest, instant feedback on their business models before investing capital.",
    solution: "Developed a lightweight, high-traffic web app using LLM logic to deconstruct business pitches and provide critical analysis, optimized for viral sharing and low-latency responses.",
    stack: ["NextJS", "Supabase", "OpenRouter", "Edge Functions"],
    category: "SaaS",
    hasAI: true,
    status: "beta",
    link: "http://airoast.app",
    images: [
      "https://files.rochanegra.com/projects/ai-roast-home.png",
      "https://files.rochanegra.com/projects/ai-roast-blog.png",
      "https://files.rochanegra.com/projects/ai-roast-report.png"
    ],
  },
  // {
  //   id: 3,
  //   title: "NotJustFlows",
  //   description: "Mobile-first AI agent that generates complex n8n automation workflows.",
  //   challenge: "Creating sophisticated low-code automations (n8n) is time-consuming and requires deep knowledge of node structures and JSON transformations.",
  //   solution: "Architected a React Native mobile application integrated with custom AI models to translate natural language prompts into ready-to-import n8n workflow JSONs.",
  //   stack: ["React Native", "Supabase", "AI Models", "Expo"],
  //   category: "Mobile",
  //   status: "dev",
  //   link: "https://apps.apple.com/pt/app/notjustflows/id6744860073?l=en-GB",
  //   images: ["https://files.rochanegra.com/projects/notjustflows-dashboard.png"],
  // },
  {
    id: 4,
    title: "Rocha Negra Life OS",
    description: "Comprehensive Personal Operating System for task, finance, and knowledge management.",
    challenge: "Off-the-shelf tools lack the flexibility to implement a unified PARA-method organization alongside custom financial tracking and private data storage.",
    solution: "Engineered a private enterprise-grade Life OS using a Spring Boot backend and NextJS frontend, centralizing personal productivity and encrypted financial data.",
    stack: ["Springboot", "NextJS", "Supabase", "PostgreSQL"],
    category: "SaaS",
    status: "dev",
    link: "http://dev.rochanegra.com",
    github: "https://github.com/goncalo1995/rocha-negra",
    images: [
      "https://files.rochanegra.com/projects/rochanegra-home.png",
      "https://files.rochanegra.com/projects/rochanegra-projects.png",
      "https://files.rochanegra.com/projects/rochanegra-vehicles.png"
    ],
  },
  // {
  //   id: 5,
  //   title: "Rebelco.pt",
  //   description: "High-performance digital catalog for advanced industrial and ballistic materials.",
  //   challenge: "Managing a complex inventory of hundreds of specialized materials with distinct technical specifications and data sheets in a searchable format.",
  //   solution: "Designed and deployed a custom WordPress/PHP catalog system with advanced filtering and optimized asset delivery for heavy technical documentation.",
  //   stack: ["WordPress", "PHP", "JavaScript", "MySQL"],
  //   category: "Web",
  //   status: "live",
  //   link: "https://rebelco.pt",
  //   images: ["https://files.rochanegra.com/projects/rebelco-dashboard.png"],
  // },
  {
    id: 6,
    title: "Munzua",
    description: "Strategic brand presence and digital hub for an Angolan corporate group.",
    challenge: "Establishing a modern, fast-loading digital identity in a market where mobile performance and data efficiency are critical.",
    solution: "Developed a clean, SEO-optimized NextJS site focusing on high performance and international accessibility standards.",
    stack: ["NextJS", "TypeScript", "Framer Motion"],
    category: "Web",
    status: "live",
    github: "https://github.com/goncalo1995/munzua",
    link: "https://munzua.com",
    images: [
      "https://files.rochanegra.com/projects/munzua-home.png?text=Homepage",
      "https://files.rochanegra.com/projects/munzua-servicos.png?text=Services",
      "https://files.rochanegra.com/projects/munzua-projetos.png?text=Projects"
    ],
  },
  {
    id: 7,
    title: "Helena Colaço",
    description: "Digital gallery and administrative CMS for a contemporary visual artist.",
    challenge: "The artist required a minimalist aesthetic that didn't compromise on powerful back-office management for artwork collections and subscribers.",
    solution: "Built a custom Headless CMS solution using NextJS and Supabase, allowing seamless management of high-resolution media and automated subscriber newsletters.",
    stack: ["NextJS", "Supabase", "PostgreSQL", "Cloudflare"],
    category: "Web",
    status: "live",
    link: "https://helenacolaco.com",
    github: "https://github.com/goncalo1995/lena-art",
    images: [
      "https://files.rochanegra.com/projects/lena-home.png?text=Homepage",
      "https://files.rochanegra.com/projects/lena-contacts.png?text=Contacts",
      "https://files.rochanegra.com/projects/lena-admin-media.png?text=Admin Media"
    ],
  },
  {
    id: 8,
    title: "Ausse",
    description: "Real Estate SaaS for instant, professional property landing page generation.",
    challenge: "Real estate agents need to generate high-quality, unique landing pages for properties in seconds, not hours.",
    solution: "Prototyped a multi-tenant SaaS using InstantDB for real-time state synchronization, enabling agents to deploy property sites instantly with one-click templates.",
    stack: ["NextJS", "InstantDB", "React", "Tailwind"],
    category: "SaaS",
    status: "PoC",
    link: "https://beta.ausse.pt",
    images: [
      "https://files.rochanegra.com/projects/ausse-home.png?text=Homepage",
      "https://files.rochanegra.com/projects/ausse-marketing.png?text=Marketing",
      "https://files.rochanegra.com/projects/ausse-section-edit.png?text=Section Edit"
    ],
  },
  // {
  //   id: 9,
  //   title: "José António Santos",
  //   description: "",
  //   challenge: "",
  //   solution: "",
  //   stack: ["NextJS"],
  //   category: "Web",
  //   status: "live",
  //   link: "https://helenacolaco.com",
  //   github: "",
  //   images: [
  //     "https://files.rochanegra.com/projects/lena-home.png?text=Homepage",
  //     "https://files.rochanegra.com/projects/lena-contacts.png?text=Contacts",
  //     "https://files.rochanegra.com/projects/lena-admin-media.png?text=Admin Media"
  //   ],
  // },
];

export const experiences: Experience[] = [
  {
    id: "feedzai",
    company: "Feedzai",
    role: "Fullstack Engineer",
    period: "2024 — 2025",
    location: "Lisbon, Portugal",
    summary:
      "Worked on backend and frontend systems for a large-scale fraud detection platform in a high-security environment. Developed services in Java (Quarkus), improved data processing flows, and built internal tools using React with a microfrontend approach. Also handled deployments using Docker and Kubernetes, and supported IAM-related topics across the team.",
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
            "Needed to efficiently manage and extract structured data from hundreds of daily calls and pre-evaluate them according to business needs.",
          solution:
            "Built an AI-powered call analysis system with voice recognition, dynamic prompts adapted to different call scripts, and a review interface with audio replay and augmented insights.",
          impact:
            "Transformed quality assurance from 5 random manual evaluations per operator to automatic analysis of 100% of calls, with human override capabilities ensuring accuracy.",
        },
        technologies: ["AI", "LLMs", "Vector DB", "Speech Recognition", "Azure"],
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
            "Hyundai needed to launch an online vehicle sales platform, but the client wanted robust, reusable code to enable faster rollouts for future brands.",
          solution:
            "Developed the 'Click to Buy' platform using a generic Quarkus backend on AWS EKS and established a white-label Vue.js frontend library designed for multi-brand reuse.",
          impact:
            "Kickstarted Hyundai's digital sales while architecting the foundation for rapid onboarding of additional automotive brands.",
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
            "Leveraged the previously established white-label Vue.js component library and generic backend infrastructure to rapidly deploy a fully customized digital store.",
          impact:
            "Successfully modernized the shopping experience in record time, validating the white-label architecture and streamlining digital lead generation for used vehicles.",
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
            "Built a dynamic process portal with multi-step forms, complex field dependencies, and backend automation for DUA forms, Excel reports, and custom Word documents — all driven by JSON configuration.",
          impact:
            "Reduced workflow deployment from months to days, enabling rapid creation and updates of business processes with minimal development effort.",
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
            "Employees needed quick access to import data and internal services across web and mobile platforms in English and Arabic.",
          solution:
            "Implemented an Oracle Digital Assistant chatbot enabling staff to search by product names or unique import codes, view detailed customs information, and reserve Teams meeting rooms directly in chat — fully integrated with internal legacy systems.",
          impact:
            "Boosted internal efficiency through 24/7 multi-language access to customs data and automated room bookings, deployed across both website and mobile app.",
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

export const coreExpertise = {
  title: "Technical Ecosystem",
  sections: [
    {
      id: "ai-intelligence",
      name: "AI & Intelligence",
      icon: BrainCircuit,
      color: "#4285F4",
      summary: "Applying AI in real products, from chatbots to automation and internal tools.",
      stack: {
        "AI/ML": ["LLMs", "Dialogflow", "Generative AI"],
        "Concepts": ["Prompt Engineering", "RAG", "NLP", "Vector Databases"]
      },
      capabilities: [
        "Conversational AI and chatbots",
        "AI-powered automation and workflows",
        "Knowledge base and semantic search systems"
      ]
    },
    {
      id: "backend-data",
      name: "Backend & Data",
      icon: Server,
      color: "#4285F4",
      summary: "Building scalable backend services and data-driven systems.",
      stack: {
        "Languages": ["Java", "TypeScript", "Python", "SQL"],
        "Frameworks": ["Quarkus", "Node.js (AdonisJS)", "Spring Boot"],
        "Databases": ["PostgreSQL", "Firestore", "MongoDB", "BigQuery"]
      },
      capabilities: [
        "API Design & Microservices (REST)",
        "Data modeling and query optimization",
        "Event-driven systems (Pub/Sub)"
      ]
    },
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "#4285F4",
      summary: "Deploying and operating systems in cloud-native environments.",
      stack: {
        "Infrastructure": ["GCP", "AWS (EKS)", "Azure", "Docker", "Kubernetes"],
        "CI/CD & Tools": ["Jenkins", "Azure DevOps", "GitHub Actions", "Git"],
        "Observability": ["Grafana", "Prometheus"]
      },
      capabilities: [
        "Containerized deployments (Docker/Kubernetes)",
        "CI/CD pipelines and automation",
        "Monitoring and system reliability"
      ]
    },
    {
      id: "frontend-mobile",
      name: "Frontend & Mobile",
      icon: Globe,
      color: "#4285F4",
      summary: "Building modern web and mobile applications with focus on usability and performance.",
      stack: {
        "Web": ["React", "Next.js", "TypeScript", "Vue.js"],
        "Mobile": ["React Native", "Expo"],
        "Tools": ["Tailwind CSS", "Storybook", "Vite"]
      },
      capabilities: [
        "Component-driven development",
        "Responsive and cross-platform apps",
        "Performance optimization and UX focus"
      ]
    }
  ]
};

export const navItems: NavItem[] = [
  { id: "hero", icon: User, label: "Profile" },
  { id: "process", icon: Zap, label: "Process" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Layers, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
]
