import ScrambleHover from "@/components/smoothui/scramble-hover";
import { Network, PenTool, Code2, LineChart } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      id: "01",
      title: "STRATEGIZE",
      icon: <Network size={24} className="text-primary" />,
      description: "Understand and challenge requirements to ensure they thoroughly align with business goals and user needs before writing a single line of code.",
      tags: ["Requirements Analysis", "Business Alignment", "Feasibility"]
    },
    {
      id: "02",
      title: "DESIGN & ARCHITECT",
      icon: <PenTool size={24} className="text-accent-yellow" />,
      description: "Define the technical strategy, from precise API design to resilient and scalable cloud infrastructure (GCP/AWS).",
      tags: ["System Architecture", "Cloud Infrastructure", "API Design"]
    },
    {
      id: "03",
      title: "IMPLEMENT & ITERATE",
      icon: <Code2 size={24} className="text-success" />,
      description: "Perform full-stack development with an uncompromising focus on scalability, robust security, and exceptionally clean, maintainable code.",
      tags: ["Full-Stack Dev", "Security", "Clean Code"]
    },
    {
      id: "04",
      title: "MONITOR & OPTIMIZE",
      icon: <LineChart size={24} className="text-blue-400" />,
      description: "Track performance metrics (SLAs/KPIs) and gather actionable data to recursively feed back into requirement analysis and iteration.",
      tags: ["DevOps", "Monitoring", "Performance Tuning"]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header */}
      <div className="bg-surface p-6 rounded-2xl border border-border space-y-4 mt-4 shadow-sm">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase">
          <ScrambleHover>System Operations :: The Recursive Engineering Loop</ScrambleHover>
        </h3>
        <p className="text-xl text-foreground/90 leading-relaxed font-light">
          My approach to software engineering goes beyond simply resolving JIRA tickets. I treat development as a living, continuous loop of creating real Business Value through reliable tech.
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
        
        <div className="space-y-8 md:space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">
              
              {/* Timeline Marker */}
              <div className="hidden md:flex flex-col items-center mt-2 relative z-10 shrink-0 h-full">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center transform group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-sm overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary z-0 opacity-50"></div>
                  <div className="relative z-10">
                    {step.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-surface p-6 md:p-8 rounded-2xl border border-border group-hover:border-primary/30 transition-all duration-300 shadow-sm relative overflow-hidden">
                <div className="absolute -right-3 -top-3 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                   <span className="text-8xl font-bold font-mono text-foreground">{step.id}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center shadow-sm">
                        {step.icon}
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">STEP {step.id}</span>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* <h4 className="text-xs font-mono text-muted-foreground hidden md:block tracking-widest">STEP {step.id}</h4> */}
                  <h2 className="text-2xl font-bold text-foreground tracking-wide">{step.title}</h2>
                  <p className="text-foreground/80 leading-relaxed text-base shadow-sm">
                    {step.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {step.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary rounded-md text-xs font-mono text-muted-foreground border border-border">
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
