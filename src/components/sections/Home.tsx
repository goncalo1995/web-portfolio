import TypewriterText from "@/components/smoothui/typewriter-text";
import ButtonCopy from "@/components/smoothui/button-copy";
import BasicAccordion from "@/components/smoothui/basic-accordion";
import { Github, Linkedin, Download, FileText } from "lucide-react";
import { CertificationCard } from "../CertificationCard";
import type { TabId } from '@/constants/tabs';
import { workExperience, cvData } from '@/constants/cvData';
// import ExpandableCards from "@/components/expandable-card-demo-standard";
import { CoreExpertise } from "./CoreExpertise";

interface HomeProps {
  onTabChange?: (tab: TabId) => void;
}

export const Home = ({ onTabChange }: HomeProps) => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Hero Overview */}
      <div className="flex flex-col items-center text-center space-y-8 py-12">
        <div className="relative group cursor-default">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent-yellow to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="w-48 h-48 md:w-56 md:h-56 relative bg-background rounded-full p-1 ring-1 ring-border shadow-2xl">
              <img 
                src={cvData.personalInfo.imageUrl} 
                alt={cvData.personalInfo.name} 
                className="w-full h-full object-cover rounded-full"
              />
          </div>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              <span className="block text-xl md:text-2xl mt-4 text-primary font-light">Fullstack Engineer & Cloud Architect</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
               {cvData.personalInfo.profile}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center">
              <div className="flex items-center gap-2 font-mono text-sm px-4 py-2 bg-secondary/50 rounded-full border border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" /> 6+ Years Experience
              </div>
              <div className="flex items-center gap-2 font-mono text-sm px-4 py-2 bg-secondary/50 rounded-full border border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /> MSc in Computer Engineering
              </div>
            </div>
        </div>
      </div>

      {/* 2. Core Expertise */}
      <CoreExpertise />

      {/* 6. Education Section */}
      <div className="bg-surface p-6 rounded-2xl border border-border space-y-6 shadow-sm">
        <h4 className="text-sm font-mono text-muted-foreground w-full md:w-auto">Academic Foundation (2013-2019) </h4>
        
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

      
      {/* 4. Experience Section */}
      <div>
        <div className="mb-6 px-4">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">Experience</h3>
          <p className="text-muted-foreground text-sm">My professional journey</p>
        </div>
        
        <div className="flex flex-col gap-6 px-4 w-full">
          {workExperience.map((exp) => (
            <div key={exp.id} className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group hover:border-primary/20 shadow-sm transition-colors w-full">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border bg-white p-2 flex items-center justify-center">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 w-full max-w-full overflow-hidden">
                <h2 className="text-xl font-bold text-foreground mb-1">{exp.company} // {exp.role}</h2>
                <p className="text-muted-foreground font-mono text-sm mb-4">{exp.period}</p>
                
                <p className="text-foreground/90 leading-relaxed text-sm mb-6">
                  {exp.summary}
                </p>

                {exp.awards && (
                    <div className="bg-accent-yellow/10 border border-accent-yellow/20 rounded-lg p-3 mb-6 flex items-start gap-3">
                        <span className="text-lg">🏆</span>
                        <p className="text-sm text-foreground/90 font-medium">
                        {exp.awards}
                        </p>
                    </div>
                )}

                <div className="space-y-4">
                  <BasicAccordion items={
                    exp.details.map((detail: any) => ({
                        id: detail.id || detail.title.replace(/\s+/g, '-').toLowerCase(),
                        title: (
                            <div className="flex items-center gap-3">
                                {detail.icon && <detail.icon className="w-5 h-5 text-primary shrink-0" />}
                                <span>{detail.title}</span>
                            </div>
                        ),
                        content: (
                            <div className="space-y-4 pb-2 text-sm text-foreground/80">
                                {detail.role && (
                                    <p className="text-xs font-mono text-primary font-medium tracking-wide">
                                        ROLE: {detail.role}
                                    </p>
                                )}
                                
                                {typeof detail.description === 'string' ? (
                                    <p className="leading-relaxed text-muted-foreground">{detail.description}</p>
                                ) : (
                                    <div className="space-y-3 mt-2">
                                        {detail.description.challenge && (
                                            <p className="leading-relaxed"><strong className="text-foreground font-medium block mb-0.5 text-xs font-mono uppercase text-muted-foreground">Context</strong> {detail.description.challenge}</p>
                                        )}
                                        {detail.description.solution && (
                                            <p className="leading-relaxed"><strong className="text-foreground font-medium block mb-0.5 text-xs font-mono uppercase text-muted-foreground">Execution</strong> {detail.description.solution}</p>
                                        )}
                                        {detail.description.impact && (
                                            <p className="leading-relaxed"><strong className="text-foreground font-medium block mb-0.5 text-xs font-mono uppercase text-muted-foreground">Outcome</strong> {detail.description.impact}</p>
                                        )}
                                    </div>
                                )}
                                
                                <div className="flex gap-2 flex-wrap font-mono text-xs pt-2">
                                    {detail.technologies.map((tech: string) => (
                                        <span key={tech} className="bg-secondary px-2 py-1 rounded border border-border">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )
                    }))
                  } />
                </div>
                <div className="pt-4 border-t border-border mt-4">
                     <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Key Technologies</p>
                     <div className="flex flex-wrap gap-2">
                         {exp.technologies.map(tech => (
                            <span key={tech} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-md text-xs font-mono">
                              {tech}
                            </span>
                         ))}
                     </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      {/* <div className="mb-6 px-4 pt-8">
        <h3 className="text-sm font-mono text-accent-yellow tracking-wider uppercase mb-2">Featured Products</h3>
        <p className="text-muted-foreground text-sm mb-6">A selection of my recent works</p>
        
        <ExpandableCards items={personalProjects.slice(0, 3).map(p => ({
          title: p.title,
          description: p.description,
          src: p.image || undefined,
          ctaText: p.url ? "Live Demo" : undefined,
          ctaLink: p.url || undefined,
          content: (
            <div className="space-y-4">
              <p className="text-sm text-foreground/80 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 bg-secondary rounded text-xs font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          )
        }))} />
      </div> */}

      {/* 5. Certifications */}
      <div className="mb-6 px-4">
          <h3 className="text-sm font-mono text-accent-yellow tracking-wider uppercase mb-2">IT Certifications</h3>
          {/* <p className="text-muted-foreground text-sm">My professional journey</p> */}
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CertificationCard cert={
          {
            name: "Professional Cloud Developer",
            description: "Google Cloud Certified ",
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
            name: "Professional Cloud Architect",
            description: "Google Cloud Certified",
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

      {/* 8. Navigation Hub */}
      <div className="mt-16 py-12 border-t border-border/50">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-md bg-secondary/30 rounded-lg p-4 border border-border/50 font-mono">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs text-muted-foreground">
              <TypewriterText speed={40}>
                root@goncalo:~$ system_status --next-steps
              </TypewriterText>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center px-4">
            <button
              onClick={() => onTabChange?.('process')}
              className="group relative flex flex-col items-start p-4 rounded-xl border border-border bg-surface hover:border-primary/50 transition-all duration-300 sm:w-64"
            >
              <span className="text-[10px] font-mono text-primary uppercase tracking-tighter mb-1">Module_01</span>
              <span className="text-sm font-bold text-foreground group-hover:translate-x-1 transition-transform">
                My Process →
              </span>
            </button>

            <button
              onClick={() => onTabChange?.('portfolio')}
              className="group relative flex flex-col items-start p-4 rounded-xl border border-border bg-surface hover:border-accent-yellow/50 transition-all duration-300 sm:w-64"
            >
              <span className="text-[10px] font-mono text-accent-yellow uppercase tracking-tighter mb-1">Module_02</span>
              <span className="text-sm font-bold text-foreground group-hover:translate-x-1 transition-transform">
                My Portfolio →
              </span>
            </button>
          </div>
        </div>
      </div>

       {/* 6. Contact Hub & Resume */}
       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 bg-surface p-4 md:p-6 rounded-2xl border border-border shadow-sm">

        <h4 className="text-sm font-mono text-success w-full md:w-auto">
          Contacts
        </h4>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto md:justify-end">

          {/* Email */}
          <div className="flex items-center justify-between sm:justify-start gap-2 text-sm text-foreground/80 bg-secondary/50 px-3 py-2 rounded-lg border border-border w-full sm:w-auto">
            <span className="truncate">
              cerejagoncalo@gmail.com
            </span>
            <ButtonCopy 
              className="bg-transparent text-muted-foreground hover:text-foreground shadow-none !p-1 border-none shrink-0"
              onCopy={async () => {
                await navigator.clipboard.writeText("cerejagoncalo@gmail.com");
              }} 
            />
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
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
            {/* <a 
              href="https://files.rochanegra.com/cv/CV-Goncalo_Cereja_Pereira.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors text-sm shrink-0"
              title="Download CV"
            >
              <Download size={16} />
              <span>CV</span>
            </a> */}
          </div>

        </div>
      </div>

    </div>
  );
};
