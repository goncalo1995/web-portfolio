import { useState, useMemo } from 'react';
import ScrambleHover from "@/components/smoothui/scramble-hover";
import { personalProjects } from "@/constants/cvData";
import { motion, AnimatePresence } from 'framer-motion';

type FilterType = 'All' | 'Live' | 'Development';

export const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>('All');

  // Map personal projects to standard format
  const persProjectsFormatted = personalProjects.map((p, idx) => {
    let statusClass = "bg-secondary text-muted-foreground border-border";
    if (p.status === 'live') statusClass = "bg-primary/10 text-primary border-primary/20";
    if (p.status === 'wip') statusClass = "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20";
    if (p.status === 'beta') statusClass = "bg-blue-500/10 text-blue-500 border-blue-500/20";
    
    const Wrapper = p.url ? 'a' : 'div';
    const wrapperProps = p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {};
    
    return {
      id: `pers-${idx}`,
      status: p.status, // We need this for filtering
      element: (
        // @ts-ignore
        <Wrapper {...wrapperProps} className="flex flex-col h-full bg-surface p-6 rounded-2xl border border-border space-y-3 hover:border-primary/30 transition-colors group relative overflow-hidden shadow-sm z-10 w-full">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-secondary to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
          <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
            {p.title}
            <span className={`text-xs font-mono px-2 py-0.5 rounded border ${statusClass}`}>
                {p.status}
            </span>
          </h4>
          <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {p.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono text-foreground/60 uppercase tracking-widest bg-secondary px-2 py-1 rounded border border-border">
                #{tag}
              </span>
            ))}
          </div>
        </Wrapper>
      )
    };
  });

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return persProjectsFormatted;
    if (filter === 'Live') return persProjectsFormatted.filter(p => p.status === 'live');
    if (filter === 'Development') return persProjectsFormatted.filter(p => p.status !== 'live');
    return persProjectsFormatted;
  }, [filter, persProjectsFormatted]);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 z-10 relative">
      
      {/* Header */}
      <div className="bg-surface p-6 md:p-8 rounded-2xl border border-border space-y-4 shadow-sm z-20 relative mt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">
                    <ScrambleHover>SYSTEM RESOURCES :: PROJECT_LAB</ScrambleHover>
                </h3>
                <p className="text-muted-foreground text-sm">A filterable repository of personal ventures and experiments.</p>
            </div>
            
            {/* Filters */}
            <div className="flex items-center gap-2 bg-secondary/50 p-1.5 rounded-lg border border-border backdrop-blur-sm self-start md:self-auto relative z-30">
                {(['All', 'Live', 'Development'] as FilterType[]).map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all duration-300 relative z-40 ${
                            filter === f 
                            ? 'bg-surface text-foreground shadow-sm border border-border font-semibold' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-surface/50 border border-transparent'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-2 relative z-10 w-full min-h-[500px]">
        <AnimatePresence mode="wait">
            <motion.div 
                key={filter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
                    {/* Rather than relying on GlowHover mapping which was buggy, we'll map manually or if GlowHover works, use it. But manually mapping is safer and avoids unclickable links */}
                    {filteredProjects.map((p) => (
                      <div key={p.id} className="relative z-10 w-full flex">
                        {p.element}
                      </div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
      </div>
      
    </div>
  );
};
