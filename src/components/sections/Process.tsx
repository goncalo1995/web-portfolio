import ScrambleHover from "@/components/smoothui/scramble-hover";
import { Network, Code2, Search, ShieldCheck, Rocket, Activity } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      id: "01",
      title: "DISCOVER & CHALLENGE",
      icon: <Search size={24} className="text-primary" />,
      description: "I don't just take orders; I seek the 'why.' By challenging initial requirements, I ensure we aren't just shipping features, but solving actual business bottlenecks. This saves weeks of wasted engineering by aligning technical goals with reality early on.",
      tags: ["Goal Alignment", "Gap Analysis", "MVP Scoping"]
    },
    {
      id: "02",
      title: "ARCHITECT & MODEL",
      icon: <Network size={24} className="text-accent-yellow" />,
      description: "Designing for the 'Impossible Day.' Whether it's selecting a NoSQL store for speed or a relational DB for consistency, I draft blueprints that balance immediate delivery velocity with long-term system health and cloud costs.",
      tags: ["System Design", "Cloud Strategy", "API Contracts"]
    },
    {
      id: "03",
      title: "SECURE & GOVERN",
      icon: <ShieldCheck size={24} className="text-red-400" />,
      description: "Crucial for FinTech and Enterprise systems. I embed security (IAM, Encryption, SOC2) into the pipeline from day zero. Security isn't a final check; it's a foundational requirement that ensures trust is baked into the product.",
      tags: ["IAM / Keycloak", "OAuth2", "Data Privacy"]
    },
    {
      id: "04",
      title: "BUILD & VALIDATE",
      icon: <Code2 size={24} className="text-success" />,
      description: "Clean code is a given, but maintainability is the goal. I build modular microservices with high test coverage and clear domain logic. I focus on developer experience (DX) to ensure the team can iterate without fear of breaking the core.",
      tags: ["Clean Code", "Unit/Integration Testing", "DDD"]
    },
    {
      id: "05",
      title: "AUTOMATE & RELEASE",
      icon: <Rocket size={24} className="text-blue-400" />,
      description: "Deployment should be boring. I automate the path to production using CI/CD pipelines and Kubernetes, removing manual friction. My goal is a safe, reversible, and fully automated release process.",
      tags: ["K8s / Helm", "CI/CD Pipelines", "GitOps"]
    },
    {
      id: "06",
      title: "OBSERVE & OPTIMIZE",
      icon: <Activity size={24} className="text-purple-400" />,
      description: "Production is where the real learning starts. I use telemetry and logs to monitor SLAs and performance. These insights recursively inform the next cycle of discovery, turning operational data into the next strategic move.",
      tags: ["Monitoring", "Performance Tuning", "Telemetry"]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="bg-surface p-6 rounded-2xl border border-border space-y-4 mt-4 shadow-sm">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase">
          <ScrambleHover>Engineering Lifecycle</ScrambleHover>
        </h3>
        <p className="text-xl text-foreground/90 leading-relaxed font-light">
          Software engineering is more than closing JIRA tickets. It's a recursive loop of aligning tech with business value, securing the data, and optimizing through real-world feedback.
        </p>
      </div>

      

      {/* Process Steps */}
      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/50 hidden md:block"></div>
        
        <div className="space-y-8 md:space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">
              {/* Timeline Marker */}
              <div className="hidden md:flex flex-col items-center mt-2 relative z-10 shrink-0 h-full">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center transform group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/50 z-0 opacity-50"></div>
                  <div className="relative z-10">{step.icon}</div>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-surface p-6 md:p-8 rounded-2xl border border-border group-hover:border-primary/20 transition-all duration-300 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-6 opacity-[0.03] pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                   <span className="text-9xl font-bold font-mono text-foreground">{step.id}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center shadow-sm">
                        {step.icon}
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">PHASE {step.id}</span>
                </div>

                <div className="space-y-4 relative z-10">
                  <h4 className="text-[10px] font-mono text-primary/70 hidden md:block tracking-[0.2em] uppercase">Phase {step.id}</h4>
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">{step.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-2xl">
                    {step.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {step.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary/30 rounded text-[10px] font-mono text-muted-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};