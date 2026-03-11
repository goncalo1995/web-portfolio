import TypewriterText from "@/components/smoothui/typewriter-text";
import ButtonCopy from "@/components/smoothui/button-copy";
import ScrambleHover from "@/components/smoothui/scramble-hover";
import BasicAccordion from "@/components/smoothui/basic-accordion";
import ExpandableCards, { type CardItem } from "@/components/expandable-card-demo-standard";
import { Github, Linkedin, Download, FileText } from "lucide-react";
import { CertificationCard } from "../CertificationCard";
import type { TabId } from '@/constants/tabs';
import { coreTechnologies } from '@/constants/cvData';

interface HomeProps {
  onTabChange?: (tab: TabId) => void;
}

export const Home = ({ onTabChange }: HomeProps) => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. System Overview */}
      <div className="bg-surface p-6 rounded-2xl border border-border space-y-4 mt-4 shadow-sm">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase">System Overview</h3>
        <p className="text-xl text-foreground/90 leading-relaxed font-light">
          Hello, I am Goncalo Cereja. A Senior Fullstack Engineer & Cloud Architect.
          <TypewriterText speed={15}>
            I build robust, secure, and scalable solutions that bridge the gap between 
            complex backend infrastructure and intuitive frontend experiences.
          </TypewriterText>
        </p>
      </div>

      {/* Soft Skills */}
      <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
        <h4 className="text-accent-yellow font-mono text-sm mb-4">{"//"} Soft_Skills</h4>
        <div className="flex flex-wrap gap-2">
            {["Teamwork", "Problem Solving", "Time Management", "Critical Thinking", "Project Planning"].map(skill => (
                <span key={skill} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                    {skill}
                </span>
            ))}
        </div>
      </div>

      {/* 2. Core Expertise */}
      <div className="bg-surface p-6 rounded-2xl border border-border space-y-8 shadow-sm">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-4 border-b border-border pb-4">
          <ScrambleHover>CORE EXPERTISE</ScrambleHover>
        </h3>
        
        <ExpandableCards 
          items={coreTechnologies.categories.map(cat => ({
            title: cat.name,
            description: Object.values(cat.details).flat().slice(0, 3).join(", ") + "...",
            icon: <cat.icon size={28} className={cat.color.replace('bg-', 'text-')} />,
            content: () => (
              <div className="space-y-6 w-full mt-4">
                {Object.entries(cat.details).map(([key, items], i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">{key}</span>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item: string) => (
                        <span key={item} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          })) as CardItem[]} 
        />
      </div>

      {/* 4. Experience Section */}
      <div>
        <div className="mb-6 px-4">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">Systems Architecture (Experience)</h3>
          <p className="text-muted-foreground text-sm">Professional journey and key deployments.</p>
        </div>
        
        <div className="flex flex-col gap-6 px-4 w-full">
          {/* Feedzai */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group hover:border-primary/20 shadow-sm transition-colors w-full">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border bg-white p-2 flex items-center justify-center">
              <img src="feedzai.jpeg" alt="Feedzai" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 w-full max-w-full overflow-hidden">
              <h2 className="text-xl font-bold text-foreground mb-1">Feedzai // Fullstack Engineer</h2>
              <p className="text-muted-foreground font-mono text-sm mb-4">2024 - 2025</p>
              
              <p className="text-foreground/90 leading-relaxed text-sm mb-6">
                Developed features for large-scale fraud detection systems, built UIs using micro frontends, and managed deployments in a high-security Kubernetes environment.
              </p>

              <div className="bg-accent-yellow/10 border border-accent-yellow/20 rounded-lg p-3 mb-6 flex items-start gap-3">
                <span className="text-lg">🏆</span>
                <p className="text-sm text-foreground/90 font-medium">
                  Internal Hackathon Winner: Built a PoC creating custom fraud detection rules via a chatbot that automatically filled forms for user review and approval.
                </p>
              </div>

              <div className="space-y-4">
                <BasicAccordion items={[
                  {
                    id: "feedzai-backend",
                    title: "Backend Development (40%)",
                    content: (
                      <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                        <p>Engineered and maintained backend services in Java (Quarkus), focusing on improving data processing efficiency and scalability in a high-security environment.</p>
                        <div className="flex gap-2 font-mono text-xs">
                           <span className="bg-secondary px-2 py-1 rounded">Java</span>
                           <span className="bg-secondary px-2 py-1 rounded">Quarkus</span>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "feedzai-frontend",
                    title: "Frontend Development (25%)",
                    content: (
                      <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                        <p>Built modern, responsive user interfaces for financial crime monitoring tools using a micro frontend architecture.</p>
                        <div className="flex gap-2 font-mono text-xs">
                           <span className="bg-secondary px-2 py-1 rounded">React</span>
                           <span className="bg-secondary px-2 py-1 rounded">TypeScript</span>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "feedzai-devops",
                    title: "DevOps & Deployment (15%)",
                    content: (
                      <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                        <p>Managed the full deployment lifecycle, containerizing applications with Docker and orchestrating them with Helm charts in Kubernetes (AWS EKS), and implementing monitoring with Grafana.</p>
                        <div className="flex flex-wrap gap-2 font-mono text-xs">
                           <span className="bg-secondary px-2 py-1 rounded">Docker</span>
                           <span className="bg-secondary px-2 py-1 rounded">Kubernetes</span>
                           <span className="bg-secondary px-2 py-1 rounded">Helm</span>
                           <span className="bg-secondary px-2 py-1 rounded">Grafana</span>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "feedzai-iam",
                    title: "IAM & Tech Support (10%)",
                    content: (
                      <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                        <p>Provided technical support and mentorship to colleagues across the company on Identity and Access Management (IAM) systems and internal problems.</p>
                        <div className="flex gap-2 font-mono text-xs">
                           <span className="bg-secondary px-2 py-1 rounded">Keycloak</span>
                           <span className="bg-secondary px-2 py-1 rounded">IAM</span>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "feedzai-agile",
                    title: "Agile & Planning (10%)",
                    content: (
                      <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                        <p>Discussed implementations and participated actively in agile ceremonies and common planning meetings, ensuring feature alignment.</p>
                        <div className="flex gap-2 font-mono text-xs">
                           <span className="bg-secondary px-2 py-1 rounded">Agile</span>
                           <span className="bg-secondary px-2 py-1 rounded">Jira</span>
                        </div>
                      </div>
                    )
                  }
                ]} />
              </div>
              <div className="pt-4 border-t border-border mt-4">
                   <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Key Technologies</p>
                   <div className="flex flex-wrap gap-2">
                       {["AWS", "Quarkus (Java)", "React", "TypeScript", "Kubernetes", "Docker"].map(tech => (
                          <span key={tech} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-md text-xs font-mono">
                            {tech}
                          </span>
                       ))}
                   </div>
                </div>
            </div>
          </div>

          {/* Link Consulting */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group hover:border-primary/20 shadow-sm transition-colors w-full">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border bg-white p-2 flex items-center justify-center">
              <img src="linkconsulting.jpeg" alt="Link Consulting" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 w-full max-w-full overflow-hidden">
              <h2 className="text-xl font-bold text-foreground mb-1">Link Consulting // Consultant</h2>
              <p className="text-muted-foreground font-mono text-sm mb-4">2019 - 2024</p>
              
              <p className="text-foreground/90 text-sm mb-6 leading-relaxed">
                Architected and developed sophisticated, client-facing AI and full-stack solutions for major clients in finance, public sector, automotive, and logistics.
              </p>

              <div className="w-full space-y-4">
                <BasicAccordion items={[
                  {
                      id: "link-gisla",
                      title: "Project: Process Management Portal (GISLA)",
                      content: (
                        <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                          <p>Created a comprehensive process management portal featuring dynamic JSON-based forms, enabling rapid development and deployment of complex business workflows.</p>
                          <div className="flex gap-2 flex-wrap font-mono text-xs">
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Vue.js</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Java</span>
                          </div>
                        </div>
                      )
                  },
                  {
                      id: "link-carplus",
                      title: "Project: E-commerce Platform for Used Cars (Carplus)",
                      content: (
                        <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                          <p>Developed a white-label e-commerce 'Digital Store' focusing on lead generation and online sales of used vehicles. Established the 'White Label' UI component library.</p>
                          <div className="flex gap-2 flex-wrap font-mono text-xs">
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Vue.js</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Storybook</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Framework7</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Quarkus</span>
                          </div>
                        </div>
                      )
                  },
                  {
                    id: "link-hyundai",
                    title: "Project: E-Commerce Platform for Automotive (Hyundai)",
                    content: (
                      <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                        <p>Led development on the 'Click to Buy' platform, establishing a white-label frontend (Vue.js) and a generic backend (Java/Quarkus) on AWS EKS to rapidly onboard new automotive brands.</p>
                        <div className="flex gap-2 flex-wrap font-mono text-xs">
                           <span className="bg-secondary px-2 py-1 rounded border border-border">Vue.js</span>
                           <span className="bg-secondary px-2 py-1 rounded border border-border">Quarkus</span>
                           <span className="bg-secondary px-2 py-1 rounded border border-border">Java</span>
                           <span className="bg-secondary px-2 py-1 rounded border border-border">AWS EKS</span>
                        </div>
                      </div>
                    )
                  },
                  {
                      id: "link-cgd",
                      title: "Project: AI Digital Assistant for Banking (CGD)",
                      content: (
                        <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                          <p>Architected and delivered a secure, cloud-native conversational AI solution on GCP using Dialogflow. Key features included a dynamic knowledge base managed by business users and custom analytics dashboards in Google Data Studio.</p>
                          <div className="flex gap-2 flex-wrap font-mono text-xs">
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Google Dialogflow</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">GCP</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">BigQuery</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Data Studio</span>
                          </div>
                        </div>
                      )
                  },
                  {
                      id: "link-ctt",
                      title: "Project: 'Fale Connosco' AI Portal (CTT)",
                      content: (
                        <div className="space-y-3 pb-2 text-sm text-muted-foreground">
                          <p>Performed full-stack development of a customer support portal, engineering a scalable backend API with Adonis.js (Node.js) to classify user questions based on an ML model.</p>
                          <div className="flex gap-2 flex-wrap font-mono text-xs">
                             <span className="bg-secondary px-2 py-1 rounded border border-border">React</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Adonis.js</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">Node.js</span>
                             <span className="bg-secondary px-2 py-1 rounded border border-border">AWS</span>
                          </div>
                        </div>
                      )
                  }
                ]} />
                
                <div className="pt-4 border-t border-border mt-4">
                   <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Key Technologies</p>
                   <div className="flex flex-wrap gap-2">
                       {["GCP", "Azure", "Dialogflow", "Vue.js", "Quarkus", "Node"].map(tech => (
                          <span key={tech} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-md text-xs font-mono">
                            {tech}
                          </span>
                       ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Education Section */}
      <div className="bg-surface p-6 rounded-2xl border border-border space-y-6 shadow-sm">
        <h4 className="text-sm font-mono text-muted-foreground w-full md:w-auto">{"//"} Academic_Foundation</h4>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border bg-white p-2 flex items-center justify-center">
            <img src="/ist_logo.jpeg" alt="Instituto Superior Técnico" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <h2 className="text-xl font-bold text-foreground mb-2">Instituto Superior Técnico</h2>
            <div className="space-y-4">
              <p className="text-foreground/80 font-medium font-mono text-sm">Information Systems and Computer Engineering</p>
              <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                <li>Master's Degree (MSc) in Information Systems and Computer Engineering</li>
                <li>Bachelor's Degree (BSc) in Information Systems and Computer Engineering</li>
              </ul>
              
              <div className="bg-secondary/30 p-5 rounded-xl border border-border mt-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                            <FileText size={16} className="text-primary"/>
                            Thesis: A Conversational Agent for Academic Services (18 / 20)
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2 max-w-2xl">
                        Developed and evaluated a chatbot to automate responses to frequently asked questions within a university's academic services department, improving response times and user satisfaction.
                        </p>
                    </div>
                    <a 
                        href="https://fenix.tecnico.ulisboa.pt/downloadFile/1689244997260269/78669-Goncalo-Pereira_dissertacao.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 rounded-lg text-xs font-mono font-medium border border-primary/20 hover:border-primary/40 shrink-0 self-start mt-2 md:mt-0"
                    >
                        <Download size={14} /> Download Thesis
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Certifications */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <CertificationCard cert={
          {
            name: "Google Cloud Certified Developer",
            description: "",
            issueDate: "2023-06-26",
            expiryDate: "2025-06-26",
            credentialId: "1a42b013ebce4ebd8b8baf0eb2e9d68c",
            credentialUrl: "https://www.credly.com/badges/7e0df718-f438-468c-b0b7-0ddf4aeb9539",
            issuer: "Google",
            logo: "cert-google-pcd.png",
            skills: ["Best Practices", "Testing", "CI/CD", "Security"]
          }
        }/>
        <CertificationCard cert={
          {
            name: "Google Cloud Certified Architect",
            description: "",
            issueDate: "2021-10-21",
            expiryDate: "2023-10-21",
            credentialId: "5fk4QM",
            credentialUrl: "https://example.com",
            issuer: "Google",
            logo: "cert-google-pca.png",
            skills: ["Architecture", "Security", "Scalability", "Reliability"]
          }
        }/>
      </div>

       {/* 6. Contact Hub & Resume */}
       <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-surface p-6 rounded-2xl border border-border shadow-sm">
        <h4 className="text-sm font-mono text-muted-foreground shrink-0 w-full md:w-auto">{"//"} Connection_Port</h4>
        
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto justify-end flex-wrap">

          {/* Socials & CV */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-foreground/80 bg-secondary/50 px-3 rounded-lg border border-border">
              <span>cerejagoncalo@gmail.com</span>
              <ButtonCopy 
                className="bg-transparent text-muted-foreground hover:text-foreground shadow-none !p-1 border-none ml-1"
                onCopy={async () => {
                  await navigator.clipboard.writeText("cerejagoncalo@gmail.com");
                }} 
              />
            </div>
            <a 
              href="https://github.com/goncalo1995" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary/30 transition-colors shadow-sm"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/gonçalo-pereira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary/30 transition-colors shadow-sm"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://files.rochanegra.com/cv/CV-Goncalo_Cereja_Pereira.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors text-sm shrink-0"
              title="Download CV"
            >
              <Download size={16} />
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* 8. Navigation Hub */}
      <div className="bg-surface p-6 rounded-2xl border border-border flex flex-col items-center justify-center space-y-8 mt-12 py-12 shadow-sm">
        <div className="text-center space-y-2">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase">Navigation Hub</h3>
          <p className="text-muted-foreground text-sm">Proceed to next module.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl">
          <button
            onClick={() => onTabChange && onTabChange('process')}
            className="w-full sm:w-auto px-6 py-3 bg-secondary hover:cursor-pointer hover:bg-primary/20 text-foreground/90 hover:text-primary transition-all duration-300 rounded-lg border border-border hover:border-primary/30 font-medium"
          >
            Engineering Process →
          </button>
          <button
            onClick={() => onTabChange && onTabChange('portfolio')}
            className="w-full sm:w-auto px-6 py-3 bg-secondary hover:cursor-pointer hover:bg-accent-yellow/20 text-foreground/90 hover:text-accent-yellow transition-all duration-300 rounded-lg border border-border hover:border-accent-yellow/30 font-medium"
          >
            Project Portfolio →
          </button>
        </div>

        <div className="mt-4 text-sm font-mono text-muted-foreground text-center w-full">
          <TypewriterText speed={50}>
            root@cereja:~$ select_next_module _
          </TypewriterText>
        </div>
      </div>

    </div>
  );
};
