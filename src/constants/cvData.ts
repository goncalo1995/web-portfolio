import { Server, Globe, BrainCircuit, Cloud, ShieldCheck, Cog, Car, Building2, Store, Landmark, MessageSquare, Bot, FileSearch, Briefcase } from "lucide-react";

// --- YOUR PERSONAL CV CONTENT ---
// This is the only file you'll need to edit in the future to update your CV.
// TECHNICAL SKILLS
// AI & ML: Generative AI, LLMs, NLP, Prompt Engineering, Google Dialogflow, RAG
// Languages: Java, Typescript, SQL, Python
// Cloud Platforms: Google Cloud Platform (GCP), Azure, AWS
// Backend & DevOps: API Design (REST), Docker, Kubernetes, Quarkus, Node.js
// Frontend: React, Vue.js
export const coreExpertise = {
  title: "Technical Ecosystem",
  sections: [
    {
      id: "backend-data",
      name: "Backend & Data",
      icon: Server,
      color: "#4285F4", // Google Blue
      summary: "Architecting resilient microservices and high-performance data layers.",
      stack: {
        "Languages": ["Java", "TypeScript", "Python", "SQL"],
        "Frameworks": ["Quarkus", "Spring Boot", "Node.js (AdonisJs)"],
        "Databases": ["PostgreSQL", "NoSQL (MongoDB, Firestore)", "BigQuery"]
      },
      capabilities: [
        "Scalable Microservices & API Design (REST)",
        "Database Schema Design & Query Optimization",
        "Data Pipelines (ETL) & Search Indexing"
      ]
    },
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "#34A853", // Google Green
      summary: "Certified Cloud Architect focused on automation, security, and observability.",
      stack: {
        "Infrastructure": ["GCP", "AWS (EKS)", "Azure", "Docker", "Kubernetes"],
        "CI/CD & Tools": ["Jenkins", "GitHub Actions", "Helm", "Git"],
        "Security": ["Keycloak (IAM)", "OAuth2", "OpenID Connect"]
      },
      achievements: true, // Triggers 'CERTIFIED' badge for GCP Architect/Developer
      capabilities: [
        "Container Orchestration & Deployment Automation",
        "Identity & Access Management (IAM)",
        "System Monitoring (Grafana/Prometheus)"
      ]
    },
    {
      id: "frontend-mobile",
      name: "Frontend & Mobile",
      icon: Globe,
      color: "#EA4335", // Google Red
      summary: "Building high-performance, responsive web and mobile experiences.",
      stack: {
        "Web": ["React", "Next.js", "TypeScript", "Vue.js"],
        "Mobile": ["React Native", "Expo"],
        "Tools": ["Tailwind CSS", "Framer Motion", "Storybook", "Vite"]
      },
      capabilities: [
        "Modern Micro-frontend Architecture",
        "Reusable Component Libraries",
        "Performance Optimization & SEO (SSR/ISR)"
      ]
    },
    {
      id: "ai-intelligence",
      name: "AI & Intelligence",
      icon: BrainCircuit,
      color: "#FBBC05", // Google Yellow
      summary: "Integrating GenAI and RAG patterns into enterprise workflows.",
      stack: {
        "AI/ML": ["Generative AI", "LLMs", "LangChain", "Dialogflow"],
        "Logic": ["Prompt Engineering", "RAG", "NLP", "Vector Databases"]
      },
      capabilities: [
        "Conversational AI & Chatbot Architecture",
        "Automated Support & Call Analytics",
        "Semantic Search & Knowledge Bases"
      ]
    }
  ]
};

export const cvData = {
    personalInfo: {
        name: "Gonçalo Lascasas Cereja Ribeiro Pereira",
        role: "Fullstack Engineer & AI Enthusiast",
        imageUrl: "https://files.rochanegra.com/cv/me-cropped.JPG", // Place your image in the `public` folder
        profile: `I am deeply passionate about developing technological solutions that streamline everyday tasks and enhance efficiency. With a strong focus on problem-solving, I aim to create systems that simplify complex processes and improve user experiences. I have a particular interest in chatbots and automation, and by combining my technical expertise with a keen understanding of user needs, I strive to build intuitive, scalable solutions that drive both productivity and ease of use.`,
        contacts: [
            { type: 'email', value: 'cerejagoncalo@gmail.com', href: 'mailto:cerejagoncalo@gmail.com' },
            // { type: 'phone', value: '+351 91', href: 'tel:+351' },
            { type: 'linkedin', value: 'linkedin.com/in/gonçalo-pereira', href: 'https://linkedin.com/in/gonçalo-pereira' },
            { type: 'github', value: 'github.com/goncalo1995', href: 'https://github.com/goncalo1995' },
        ]
    },
    sections: [
        {
            title: "Work Experience",
            type: 'experience',
            items: [
                {
                    role: "Self-Employed",
                    company: "Personal Projects",
                    period: "2025 - Present",
                    description: `Currently, I am focused on developing mobile applications using React Native, enabling the creation of cross-platform apps. Additionally, I am gaining expertise in building Software-as-a-Service (SaaS) systems, providing online tools that users can access from anywhere. I am also actively exploring the rapidly advancing field of Artificial Intelligence, including prompt engineering to optimize AI interactions, and learning how to implement and manage AI tools for personal use. I am passionate about staying current with emerging technologies and continuously enhancing my capabilities.`,
                    technologies: ["React Native", "SaaS Architecture", "AI", "Prompt Engineering"]
                },
                {
                    role: "Fullstack Engineer",
                    company: "Feedzai",
                    period: "2024 - 2025",
                    description: `Developed and maintained features for large-scale backend systems, improving data processing efficiency in a leading fraud detection company, working within a high-security environment. Built modern user interfaces for financial crime monitoring tools using micro frontends. Managed application deployments and configurations using Docker containers and Helm charts in a Kubernetes environment. Provided technical support and mentorship to colleagues on Identity and Access Management (IAM) systems.`,
                    technologies: ["React", "Java", "Quarkus", "Docker", "Kubernetes", "Grafana"]
                },
                {
                    role: "Consultant",
                    company: "Link Consulting",
                    period: "2019 - 2024",
                    description: `Engineered an automated workflow solution on Azure, creating a seamless data pipeline between Dynamics, Sharepoint, Teams, and Edoclink to enhance process efficiency and ensure data consistency. Engineered and deployed conversational AI solutions for public sector clients using Dialogflow and Google Cloud. Designed complex conversational flows and backend fulfilment logic to automate user support and enhance service accessibility 24/7. Developed the full-stack 'Talk to Us' web app for CTT, using AdonisJs (Node.js) for the backend API and React for the interactive frontend. As a full-stack developer on Hyundai's 'Click to Buy' platform, built features using Quarkus for the backend and Vue for the frontend.`,
                    technologies: ["Azure", "Dialogflow", "Google Cloud", "AdonisJs", "Node.js", "React", "Quarkus", "Vue"]
                },
            ]
        },
        {
            title: "Education",
            type: 'education',
            items: [
                {
                    degree: "Master in Information Systems and Computer Engineering",
                    institution: "Instituto Superior Técnico",
                    period: "2016 - 2019",
                    grade: "15.42 / 20",
                    details: ["Erasmus in Czech Technical University, Prague"],
                    thesis: {
                        title: "A Conversational Agent for Academic Services (18 / 20)",
                        description: "Developed and evaluated a chatbot to automate responses to frequently asked questions within a university's academic services department, improving response times and user satisfaction.",
                        fileUrl: "https://fenix.tecnico.ulisboa.pt/downloadFile/1689244997260269/78669-Goncalo-Pereira_dissertacao.pdf", // Place the PDF in your `public` folder,
                        extendedAbstract: "https://fenix.tecnico.ulisboa.pt/downloadFile/1689244997260194/78669-Goncalo-Pereira_resumo.pdf"
                    }
                },
                {
                    degree: "Bachelor in Information Systems and Computer Engineering",
                    institution: "Instituto Superior Técnico",
                    period: "2013 - 2016",
                    grade: "15.29 / 20"
                }
            ]
        },
        {
            title: "Achievements",
            type: 'achievements',
            items: [
                { name: "Google Certified Professional Cloud Developer", date: "July 2024" },
                { name: "Google Certified Professional Cloud Architect", date: "Oct 2021" },
            ]
        },
        {
            title: "Skills",
            type: 'skills',
            items: ["Teamwork", "Problem Solving", "Time Management", "Critical Thinking", "Project Planning"]
        },
        {
            title: "Languages",
            type: 'languages',
            items: [
                { name: "Portuguese", level: "Native" },
                { name: "English", level: "Fluent" },
                { name: "Spanish", level: "Basic" },
            ]
        }
    ]
};

export const experienceData = [
    {
        type: 'role', // A full-time role
        title: "Fullstack Engineer",
        company: "Feedzai",
        period: "2024 - 2025",
        location: "Lisbon, Portugal",
        summary: "Developed features for large-scale fraud detection systems, built UIs using micro frontends, and managed deployments in a high-security Kubernetes environment.",
        star: {
            situation: "Feedzai, a leader in fraud detection, required continuous development of its complex, high-security financial crime monitoring platform.",
            task: "As a Fullstack Engineer, my role was to develop and maintain features across the stack, from backend data processing to frontend user interfaces, while adhering to strict security and performance standards.",
            action: [ // Use an array for multiple points
                "Engineered and maintained backend services in Java (Quarkus), focusing on improving data processing efficiency and scalability.",
                "Built modern, responsive user interfaces for monitoring tools using React and a micro frontend architecture.",
                "Managed the full deployment lifecycle, containerizing applications with Docker and orchestrating them with Helm charts in a Kubernetes (EKS) environment.",
                "Provided technical mentorship and support for the company's Identity and Access Management (IAM) system, built on Keycloak."
            ],
            result: "Contributed to a more efficient and secure platform, improved the user experience for financial crime analysts, and strengthened the team's DevOps and security practices."
        },
        technologies: ["React", "Java", "Quarkus", "Docker", "Kubernetes", "Helm", "Keycloak"]
    },
    {
        type: 'role', // A long-term consulting role
        title: "Consultant",
        company: "Link Consulting",
        period: "2019 - 2024",
        location: "Lisbon, Portugal",
        summary: "Architected and developed sophisticated, client-facing AI and full-stack solutions for major clients in finance, public sector, automotive, and logistics.",
        // No 'star' here, because the details are in the individual project cards below
        technologies: ["GCP", "Azure", "Dialogflow", "AdonisJs", "React", "Vue.js", "Quarkus", "Java", "Node.js"]
    },
    {
        type: 'project', // A specific project from the consulting role
        title: "AI Digital Assistant for Banking",
        company: "",
        period: "2021",
        summary: "Architected and delivered a secure, cloud-native conversational AI solution on GCP to serve internal bank agents and call center operators.",
        star: {
            situation: "The bank's internal support teams were overwhelmed with repetitive queries about credit card products, leading to long wait times and inefficiency.",
            task: "Design and implement a scalable chatbot that could provide instant, accurate answers and integrate with internal systems, while empowering business users to manage the content.",
            action: [
                "Architected the solution on Google Cloud Platform using Dialogflow for the core conversational logic and Firestore for a dynamic knowledge base.",
                "Developed an ETL process to sync information from internal bank systems, ensuring the chatbot's data was always up-to-date.",
                "Created custom monitoring dashboards in Google Data Studio and BigQuery to provide business stakeholders with actionable insights on user interactions and chatbot performance."
            ],
            result: "Dramatically reduced the query load on human agents, provided instant 24/7 support, and gave the business team direct control over the chatbot's responses, leading to greater agility."
        },
        technologies: ["Google Dialogflow", "GCP", "BigQuery", "Data Studio", "ETL"]
    },
    {
        type: 'project', // Another project
        title: "Conversational AI for Public Sector",
        company: "DGAE & DGC",
        period: "2020",
        summary: "Implemented chatbots for government agencies to clarify citizen doubts regarding consumer rights and economic activities.",
        star: {
            situation: "The government agencies were overwhelmed with repetitive queries about consumer rights and economic activities, leading to long wait times and inefficiency.",
            task: "Design and implement a scalable chatbot that could provide instant, accurate answers and integrate with internal systems, while empowering business users to manage the content.",
            action: [
                "Architected the solution on Google Cloud Platform using Dialogflow for the core conversational logic and Firestore for a dynamic knowledge base.",
                "Developed an ETL process to sync information from internal bank systems, ensuring the chatbot's data was always up-to-date.",
                "Created custom monitoring dashboards in Google Data Studio and BigQuery to provide business stakeholders with actionable insights on user interactions and chatbot performance."
            ],
            result: "Dramatically reduced the query load on human agents, provided instant 24/7 support, and gave the business team direct control over the chatbot's responses, leading to greater agility."
        },
        technologies: ["Chatbots", "Backoffice", "NLP"]
    },
    // ... Add cards for CTT, Hyundai, Carplus, Abu Dhabi, INESC, Self-Employed ...
    {
        type: 'education_highlight', // A special type for education
        title: "Erasmus Exchange Program",
        company: "Czech Technical University in Prague",
        period: "Sep 2016 - Feb 2017",
        summary: "Participated in an international exchange program, focusing on advanced Computer Science topics and achieving a high academic standing.",
        star: {
            situation: "As part of my Master's degree, I sought to gain international experience and exposure to different academic approaches in computer science.",
            task: "To successfully complete a semester abroad, adapt to a new cultural and academic environment, and excel in advanced coursework.",
            action: ["Enrolled in courses covering topics such as advanced algorithms, distributed systems, and artificial intelligence.", "Collaborated with an international cohort of students on challenging projects, enhancing my teamwork and cross-cultural communication skills."],
            result: "Achieved an excellent final grade of 18/20, broadened my technical knowledge, and developed valuable soft skills in adaptability and global collaboration."
        },
        technologies: ["Computer Science", "Algorithms", "Distributed Systems"]
    }
];


// Delete the old 'simpleExperience' and 'detailedProjects' arrays.
// This is now your single source of truth for work experience.

export const workExperience = [
    {
        id: "feedzai",
        role: "Fullstack Engineer",
        company: "Feedzai",
        period: "2024 - 2025",
        location: "Lisbon, Portugal",
        logo: "feedzai.jpeg",
        summary: "Developed features for large-scale fraud detection systems, built UIs using micro frontends, and managed deployments in a high-security Kubernetes environment.",
        awards: "Internal Hackathon Winner: Built a PoC creating custom fraud detection rules via a chatbot that automatically filled forms for user review and approval.",
        details: [
            {
                id: "feedzai-backend",
                icon: Server,
                title: "Backend Development (45%)",
                description: "Engineered and maintained backend services in Java (Quarkus), focusing on improving data processing efficiency and scalability in a high-security environment. Managed application deployments with Docker.",
                technologies: ["Java", "Quarkus", "Docker", "Kubernetes", "Helm"]
            },
            {
                id: "feedzai-frontend",
                icon: Globe,
                title: "Frontend Development (35%)",
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
        technologies: ["AWS", "Quarkus (Java)", "React", "TypeScript", "Kubernetes", "Docker"]
    },
    {
        id: "link",
        role: "Consultant",
        company: "Link Consulting",
        period: "2019 - 2024",
        location: "Lisbon, Portugal",
        logo: "linkconsulting.jpeg",
        summary: "Architected and developed sophisticated, client-facing AI and full-stack solutions for major clients in finance, public sector, automotive, and logistics.",
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
                    solution: "Led the development of the 'Click to Buy' platform using a generic Quarkus backend on AWS EKS and established a white-label Vue.js frontend library.",
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
];

export const workExperienceOld = [
    {
        role: "Fullstack Engineer",
        company: "Feedzai",
        period: "2024 - 2025",
        location: "Lisbon, Portugal",
        // Short summary for the accordion trigger
        summary: "Developed features for large-scale fraud detection systems, built UIs using micro frontends, and managed deployments in a high-security Kubernetes environment.",
        // Detailed breakdown of responsibilities for the expanded view
        responsibilities: [
            {
                title: "Backend Development (50%)",
                description: "Developed and maintained features for large-scale backend systems, improving data processing efficiency and working within a high-security environment.",
                technologies: ["Java", "Quarkus"]
            },
            {
                title: "Frontend Development (30%)",
                description: "Built modern user interfaces for financial crime monitoring tools using a micro frontend architecture.",
                technologies: ["React", "TypeScript"]
            },
            {
                title: "DevOps & Deployment (15%)",
                description: "Managed application deployments and configurations using Docker containers and Helm charts in a Kubernetes environment.",
                technologies: ["Docker", "Kubernetes", "Helm", "Grafana"]
            },
            {
                title: "Mentorship & Support (5%)",
                description: "Provided technical support and mentorship on Identity and Access Management (IAM) systems.",
                technologies: ["Keycloak", "IAM"]
            },
        ],
        // Comprehensive list of all technologies for the footer badges
        technologies: ["React", "Java", "Quarkus", "Docker", "Kubernetes", "Helm", "Grafana", "Keycloak"]
    },
    {
        role: "Consultant",
        company: "Link Consulting",
        period: "2019 - 2024 (5 years)",
        location: "Lisbon, Portugal",
        summary: "Specialized in architecting and developing sophisticated, client-facing AI and full-stack solutions for major clients in finance, public sector, and automotive industries.",
        // Here we use the 'content' array for a more narrative, project-based structure
        content: [
            {
                type: 'intro',
                text: "My role began by initiating and engineering a process automation solution for the internal commercial team using Azure. From there, I transitioned to architecting and developing a wide range of sophisticated, client-facing AI and full-stack solutions."
            },
            {
                type: 'project_highlight',
                title: "AI-Powered Call Center Analytics",
                description: "Delivered an innovative AI platform to enhance call center operations by processing call transcriptions and automatically evaluating operator performance. I developed the comprehensive dashboard UI that provided managers with clear, data-driven insights.",
                technologies: ["AI/ML", "React", "Data Visualization"]
            },
            {
                type: 'project_highlight',
                title: "Conversational AI Architecture (Multi-Cloud)",
                description: "Architected and delivered secure, scalable conversational AI solutions for clients including a major financial institution, public sector agencies (DGAE, DGC), and Abu Dhabi Customs (Oracle Digital Assistant).",
                technologies: ["Google Dialogflow", "GCP", "Oracle Digital Assistant", "Chatbots"]
            },
            {
                type: 'project_highlight',
                title: "Full-Stack E-Commerce & Web App Development",
                description: "Led the full-stack development of the 'Fale Connosco' customer portal for CTT (AdonisJs/React) and contributed significantly to Hyundai's 'Click to Buy' e-commerce platform (Quarkus/Vue).",
                technologies: ["AdonisJs", "Node.js", "React", "Quarkus", "Vue.js"]
            }
        ],
        technologies: ["Azure", "Dialogflow", "GCP", "AdonisJs", "Node.js", "React", "Vue.js", "Quarkus", "Angular"]
    },
    // ... add your Self-Employed and other experiences in this same format
];

// This allows for a richer representation than the simple work experience list.
export const detailedProjects = [
    {
        client: "GISLA – Grupo Salvador Caetano",
        company: "Link Consulting",
        period: "05/2022 - Present",
        title: "Process Management Portal",
        summary: "Created a comprehensive process management portal featuring dynamic JSON-based forms, enabling rapid development and deployment of complex business workflows.",
        // --- NEW STAR METHOD FIELDS ---
        star: {
            situation: "The client needed to manage dozens of complex, multi-step business processes, but building a custom UI for each one was slow and expensive.",
            task: "My task was to design and build a generic, reusable system that could render complex forms and their associated logic (validation, dependent fields) from a simple JSON configuration.",
            action: "I led the development of a full-stack solution, creating standalone Vue.js components that parsed the JSON schema to build the UI, and a Java backend to handle the data persistence and workflow logic.",
            result: "We were able to deploy new business processes in days instead of months. The system now powers dozens of critical workflows, significantly reducing development costs and increasing the client's operational agility."
        },
        role: "Full-stack Developer",
        technologies: ["Vue.js", "Java"],
        tags: ['Automotive', 'Enterprise', 'Backend', 'Frontend']
    },
    {
        client: "Digital Store - Carplus Portugal",
        company: "Link Consulting",
        period: "01/2022 – 04/2022",
        title: "E-commerce Platform for Used Cars",
        summary: "Developed a white-label e-commerce 'Digital Store' to replace the old carplus.pt, focusing on lead generation and online sales of used vehicles.",
        description: `The website was designed around key user experiences: Vehicle Reservation/Sale, Trade-in Valuation, Information Requests, Test Drives, Price Drop Alerts, and Car Alerts. This project leveraged a 'White Label' UI component library and a generic common backend, allowing for rapid instantiation of new brands.`,
        role: "Full-stack Developer",
        technologies: ["Vue.js", "Storybook", "Framework7", "Quarkus (Java)", "AWS EKS"],
        tags: ['Automotive', 'E-commerce', 'Backend', 'Frontend', 'Cloud']
    },
    {
        client: "Digital Store – Hyundai Portugal",
        company: "Link Consulting",
        period: "10/2021 – 12/2021",
        title: "Click to Buy E-commerce Platform",
        summary: "Pioneered the 'Digital Store' platform for Hyundai, creating a 'White Label' frontend and generic backend to facilitate rapid expansion to other brands.",
        // --- NEW STAR METHOD FIELDS ---
        star: {
            situation: "Hyundai needed a rapid, scalable e-commerce platform to facilitate online vehicle sales, but building custom solutions for every new brand would be slow and costly.",
            task: "Develop a foundational 'Digital Store' architecture that could act as a white-label solution, allowing quick instantiation of new automotive brands within the Salvador Caetano Group.",
            action: "Pioneered the 'Click to Buy' platform using a generic Java backend (Quarkus) on AWS EKS and a reusable frontend component library (Vue.js/Storybook).",
            result: "Established a robust, scalable e-commerce foundation that not only launched Hyundai's online sales but also dramatically reduced the time-to-market for onboarding subsequent automotive brands."
        },
        description: `Creation of the 'Click to Buy' online store to generate leads and enable online sales of new stock cars. This was the foundational project for the Digital Store concept, establishing a reusable UI component library and a common backend architecture designed to quickly and robustly accommodate more brands from the Salvador Caetano Group.`,
        role: "Full-stack Developer",
        technologies: ["Vue.js", "Storybook", "Framework7", "Quarkus (Java)", "AWS EKS"],
        tags: ['Automotive', 'E-commerce', 'Backend', 'Frontend', 'Cloud']
    },
    {
        client: "CTT (Portuguese Postal Service)",
        company: "Link Consulting",
        period: "11/2020 – 09/2021",
        title: "'Fale Connosco' - AI Support Platform",
        summary: "Built the 'Talk to Us' full-stack web app, an AI-powered platform to answer user queries, leveraging an ML model for response classification.",
        // --- NEW STAR METHOD FIELDS ---
        star: {
            situation: "CTT required a modern, automated customer support portal to intelligently handle a massive volume of user inquiries regarding postal services and deliveries.",
            task: "Design and implement a machine-learning backed full-stack platform capable of classifying user questions and providing the most accurate, immediate answers.",
            action: "Engineered a scalable backend API using Adonis.js and Node.js deployed on AWS, integrated with a NeuralShift ML classification model, and built an interactive Vue.js frontend.",
            result: "Successfully diverted substantial traffic from human operators by providing instant, AI-driven answers to users, improving overall customer satisfaction and support efficiency."
        },
        description: `This platform was built on AWS, integrating a machine learning model from NeuralShift to classify and provide the best answers to CTT user questions. I developed the backend API using Adonis.js (Node.js) and the interactive frontend with Vue.js.`,
        role: "Full-stack Developer",
        technologies: ["Vue.js", "Adonis.js", "Node.js", "AWS", "Machine Learning"],
        tags: ['Public Sector', 'AI/ML', 'Backend', 'Frontend']
    },
    // {
    //     client: "Caixa Geral de Depósitos (CGD)",
    //     period: "03/2021 – 07/2021",
    //     title: "Cloud-Native AI Digital Assistant",
    //     // --- NEW STAR METHOD FIELDS ---
    //     star: {
    //         situation: "The bank's internal support teams were overwhelmed with repetitive queries, leading to long wait times and inefficiency across call centers and internal agency operations.",
    //         task: "Design and implement a secure, scalable chatbot on GCP capable of providing instant answers by integrating directly with internal bank systems, while giving business users control over content.",
    //         action: "Architected a cloud-native conversational AI using Google Dialogflow and Firestore. Developed ETL processes to sync internal data, and created custom analytics dashboards using Data Studio and BigQuery.",
    //         result: "Dramatically reduced the query load on human agents by providing instant 24/7 support. The custom dashboards and dynamic knowledge base empowered the business team with unparalleled agility."
    //     },
    //     description2: `Implemented a solution for a digital assistant based on Machine Learning and AI technologies, using Google Dialogflow and Google Cloud Platform...`,
    //     description: `The solution used Google Dialogflow and Google Cloud Platform, integrating with internal bank systems for dynamic information retrieval. It included an ETL process for updating the chatbot's knowledge base, allowing business users to manage intents and responses. I also created custom monitoring dashboards using Google Data Studio and BigQuery.`,
    //     role: "Developer & Technical Support",
    //     company: "Link Consulting",
    //     summary: "Implemented a cloud-native AI digital assistant on Google Cloud Platform to serve internal bank agents, including custom monitoring dashboards.",
    //     technologies: ["Google Dialogflow", "GCP", "ETL", "BigQuery", "Data Studio", "Firestore"], // <-- Added missing tech
    //     tags: ['Finance', 'AI/ML', 'Chatbot', 'Cloud'],
    //     // ... add a 'star' object
    // },
    {
        client: "Feedzai",
        role: "Fullstack Engineer",
        company: "Feedzai",
        period: "2024 - 2025",
        summary: "Developed features for large-scale fraud detection systems, built modern UIs using micro frontends, and managed deployments in a high-security Kubernetes environment.", // <-- Short summary
        description: `Developed and maintained features for large-scale backend systems, improving data processing efficiency in a leading fraud detection company...`, // <-- Full description for modal
        star: {
            situation: "Feedzai's leading fraud detection platform required rigorous continuous development to effectively process massive datasets securely and present complex monitoring data clearly.",
            task: "Develop and maintain robust full-stack features, optimize backend processing algorithms in Java, and build intuitive modern user interfaces for financial crime monitoring.",
            action: "Engineered backend services using Java/Quarkus, built responsive micro frontends with React, and managed the complete deployment lifecycle on AWS EKS using Docker and Helm.",
            result: "Significantly enhanced data processing capabilities and platform usability for financial analysts, while strengthening the company's DevOps, IAM (Keycloak), and security postures."
        },
        technologies: ["React", "Java", "Quarkus", "Docker", "Kubernetes", "Helm", "Grafana", "Keycloak"], // <-- Added missing tech
        tags: ['Finance', 'Security', 'Backend', 'Frontend', 'Cloud'],
    },
];

export const personalProjects = [
    {
        title: "jobzapp",
        status: "live",
        image: "https://files.rochanegra.com/projects/jobzapp-dashboard.png",
        url: "http://jobs.rochanegra.com",
        description: "AI-powered job application tracking and interview prep platform.",
        github: "",
        tags: ["AI", "SaaS", "Web", "Supabase"]
    },
    {
        title: "airoast.app",
        status: "live",
        url: "http://airoast.app",
        description: "AI roasting application.",
        tags: ["AI", "Web", "Supabase"]
    },
    {
        title: "notjustflows",
        status: "dev",
        url: "https://apps.apple.com/pt/app/notjustflows/id6744860073?l=en-GB",
        description: "React Native mobile app with AI model integration for generating smart n8n flows.",
        tags: ["Mobile", "AI", "React Native", "Supabase"]
    },
    {
        title: "rochanegra.com",
        status: "beta",
        url: "http://dev.rochanegra.com",
        description: "Personal life OS, a custom app to manage my task, projects, finances and more!",
        tags: ["Springboot", "Supabase", "NextJS"]
    },
    {
        title: "3dfry",
        status: "dev",
        url: "https://3dfry-web.vercel.app/",
        description: "A simple web app to search 3d model files from multiple sources using cursor-based pagination.",
        tags: ["Web"]
    },
    {
        title: "rebelco.pt",
        status: "live",
        url: "https://rebelco.pt",
        description: "E-commerce solution.",
        tags: ["Web", "Wordpress", "PHP"]
    },
    {
        title: "munzua",
        status: "PoC",
        url: "https://dario.munzua.com",
        description: "Brand website for a Angolan company",
        github: "https://github.com/goncalo1995/munzua",
        tags: ["Web", "NextJS"]
    },
    {
        title: "helenacolaco.com",
        status: "PoC",
        url: "https://helenacolaco.com",
        description: "Portfolio website.",
        tags: ["Supabase", "NextJS"]
    },
    {
        title: "beta.ausse.pt",
        status: "PoC",
        url: "https://beta.ausse.pt",
        description: "Beta landing page (pending final finishes).",
        tags: ["InstantDB", "NextJS"]
    },
    
];

// We need to keep the simple 'experience' section for the timeline view
export const simpleExperience = [
    // {
    //     role: "Self-Employed",
    //     company: "Personal Projects",
    //     period: "2025 - Present",
    //     // This summary will be shown on the main page
    //     summary: "Developing cross-platform mobile apps with React Native, building SaaS systems, and exploring AI/prompt engineering for personal productivity and automation tools."
    // },
    {
        role: "Fullstack Engineer",
        company: "Feedzai",
        period: "2024 - 2025",
        summary: "Developed features for large-scale fraud detection systems, built UIs using micro frontends, and managed deployments in a high-security Kubernetes environment.",
        achievements: [
            "Enhanced data processing efficiency in a leading fraud detection company.",
            "Built modern UIs for financial crime monitoring tools using micro frontends.",
            "Managed application deployments with Docker and Helm in Kubernetes.",
            "Provided technical support and mentorship on IAM systems (Keycloak)."
        ],
        technologies: ["React", "Java", "Quarkus", "Docker", "Kubernetes", "Helm", "Grafana", "Keycloak"],
        // --- NEW: Detailed responsibilities ---
        responsibilities: [
            {
                title: "Backend Development",
                description: "Developed and maintained features for large-scale backend systems, improving data processing efficiency in a leading fraud detection company, working within a high-security environment.",
                timePercentage: 50, // Estimated % of time spent
                technologies: ["Java", "Quarkus"]
            },
            {
                title: "Frontend Development",
                description: "Built modern user interfaces for financial crime monitoring tools using micro frontends.",
                timePercentage: 30,
                technologies: ["React", "TypeScript"]
            },
            {
                title: "DevOps & Deployment",
                description: "Managed application deployments and configurations using Docker containers and Helm charts in a Kubernetes environment.",
                timePercentage: 15,
                technologies: ["Docker", "Kubernetes", "Helm", "Grafana"]
            },
            {
                title: "Mentorship & Support",
                description: "Provided technical support and mentorship to colleagues on Identity and Access Management (IAM) systems.",
                timePercentage: 5,
                technologies: ["Keycloak", "IAM"]
            },
        ]
    },
    {
        role: "Consultant",
        company: "Link Consulting",
        period: "2019 - 2024",
        summary: "Consulted on AI/ML and cloud-native technologies for a leading bank, helping them implement AI-powered chatbots and cloud-native solutions.",
        location: "Lisbon, Portugal",
        // --- NEW: A flexible content array ---
        content: [
            {
                type: 'intro', // An introductory paragraph
                text: "My role began by initiating and engineering a process automation solution for the internal commercial team. By integrating Dynamics CRM with Azure and SharePoint, I built a system that automated project creation, saving significant time and eliminating manual errors. From there, I specialized in architecting and developing sophisticated, client-facing AI and full-stack solutions."
            },
            {
                type: 'project_highlight', // A specific project or area of focus
                title: "AI-Powered Call Center Analytics & Quality Assurance",
                description: "As a full-stack developer, I delivered an innovative AI platform to enhance call center operations. The system leveraged AI to process and analyze call transcriptions, automatically evaluating operator performance against script adherence and quality metrics. I developed the primary user interface—a comprehensive dashboard—that provided managers with clear, data-driven insights, enabling more effective operator coaching and performance evaluation.",
                technologies: ["AI/ML", "React", "Data Visualization"]
            },
            {
                type: 'project_highlight',
                title: "Conversational AI Architecture & Development",
                description: "Architected a secure, scalable conversational AI solution for a major financial institution on Google Cloud Platform. A key feature was a dynamic knowledge base, empowering business users to manage chatbot responses directly. Expanded my AI expertise by delivering additional chatbots for public sector agencies (DGAE, DGC) and a multi-platform (web & mobile) solution for Abu Dhabi Customs using Oracle Digital Assistant.",
                technologies: ["Google Dialogflow", "GCP", "Oracle Digital Assistant", "Chatbots"]
            },
            // You can add more 'project_highlight' or 'intro' blocks here
        ],
        // A comprehensive list of all technologies used during this role
        technologies: ["Azure", "Dialogflow", "GCP", "AdonisJs", "Node.js", "React", "Vue.js", "Quarkus", "Angular"],
        // --- NEW: Detailed responsibilities ---
        responsibilities: [
            {
                title: "Consulting",
                description: "Consulted on AI/ML and cloud-native technologies for a leading bank, helping them implement AI-powered chatbots and cloud-native solutions.",
                timePercentage: 100,
                technologies: ["AI/ML", "Cloud Native"]
            },
        ]
    }
];

export const partnerships = {
    n8n: {
        name: "n8n.io Partner",
        description: "As an official partner, I specialize in building custom workflow automations and integrations using n8n, helping businesses connect disparate systems and streamline their operations.",
        referralUrl: "https://n8n.io/?via=goncalo" // Your referral link
    }
};