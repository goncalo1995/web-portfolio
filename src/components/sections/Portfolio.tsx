import { useState, useMemo } from 'react';
import ScrambleHover from "@/components/smoothui/scramble-hover";
import { personalProjects } from "@/constants/cvData";
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Github } from 'lucide-react';

type StatusType = 'All' | 'Live' | 'PoC' |  'wip';

export const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusType>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags for the filter UI
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    personalProjects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return personalProjects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
      const matchesTag = !selectedTag || project.tags.includes(selectedTag);

      return matchesSearch && matchesStatus && matchesTag;
    });
  }, [searchQuery, statusFilter, selectedTag]);

  return (
    <div className="space-y-8 mb-12 relative z-10">
      
      {/* Search & Filter Header */}
      <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-mono text-primary tracking-wider uppercase">
                <ScrambleHover>Projects</ScrambleHover>
            </h3>
            <p className="text-muted-foreground text-xs font-mono">{filteredProjects.length} results found</p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
            <input 
              type="text"
              placeholder="Filter by tech, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/50 border border-border rounded-lg py-2 pl-9 pr-4 text-xs focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
          {(['All', 'Live', 'PoC'] as StatusType[]).map(f => (
            <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`px-4 py-1.5 rounded-md text-xs font-mono transition-all duration-300 relative z-40 ${
                    statusFilter === f 
                    ? 'bg-surface text-foreground shadow-sm border border-border font-semibold' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface/50 border border-transparent'
                }`}
            >
                {f}
            </button>
        ))}
        </div>

        </div>

        {/* Tag Cloud Filter */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
          <button 
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-md text-[10px] font-mono uppercase transition-all ${!selectedTag ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
          >
            #all_tech
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-md text-[10px] font-mono uppercase transition-all ${selectedTag === tag ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group bg-surface rounded-2xl border border-border overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300"
            >
              {/* Image Preview Area */}
              <div className="h-40 bg-secondary relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 font-mono text-4xl font-bold">
                    {project.title.substring(0, 2)}
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className={`text-[9px] font-mono px-2 py-1 rounded border bg-surface/80 backdrop-blur-sm uppercase tracking-tighter`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col space-y-3">
                <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono bg-secondary/50 px-2 py-0.5 rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 mt-auto border-t border-border/50">
                   {project.url && (
                     <a href={project.url} target="_blank" className="flex items-center gap-1.5 text-[11px] font-mono text-primary hover:underline">
                       <ExternalLink size={12} /> LIVE_DEMO
                     </a>
                   )}
                   {project.github && (
                     <a href={project.github} target="_blank" className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground hover:text-foreground">
                       <Github size={12} /> SOURCE
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};