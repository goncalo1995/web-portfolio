import { useState } from "react";
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

  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 py-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase">
          <ScrambleHover>Engineering Lifecycle</ScrambleHover>
        </h3>
        <p className="text-xl text-foreground/90 leading-relaxed font-light">
          Software engineering is more than closing tickets. It's a recursive loop of aligning tech with business value, securing data, and optimizing through feedback.
        </p>
      </div>

      {/* Interactive Process Steps */}
      <div className="max-w-3xl mx-auto w-full space-y-3">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <div 
              key={step.id} 
              className={`group relative overflow-hidden flex flex-col block bg-surface px-6 py-5 rounded-2xl border transition-all duration-300 cursor-pointer 
                ${isActive ? 'border-primary/50 shadow-md ring-1 ring-primary/20 scale-[1.02] bg-surface/100' : 'border-border hover:border-primary/30 hover:bg-surface/80'}`}
              onClick={() => setActiveStep(isActive ? null : step.id)}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-center gap-4 w-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${isActive ? 'bg-primary/10' : 'bg-secondary/50 group-hover:bg-secondary'}`}>
                  {step.icon}
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className={`text-[10px] font-mono transition-colors tracking-widest uppercase ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>Phase {step.id}</span>
                    <h2 className="text-lg font-bold text-foreground tracking-tight">{step.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="pl-0 sm:pl-16">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {step.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-secondary/50 rounded text-[10px] font-mono text-muted-foreground border border-border/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};