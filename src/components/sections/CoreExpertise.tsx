import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coreExpertise } from '@/constants/cvData';
import ScrambleHover from '../smoothui/scramble-hover';

export const CoreExpertise = () => {
  const [activeTab, setActiveTab] = useState(coreExpertise.sections[0].id);
  const activeData = coreExpertise.sections.find((s) => s.id === activeTab);

  if (!activeData) return null;

  return (
    <div className="bg-surface p-4 md:p-6 rounded-2xl border border-border shadow-sm space-y-6">
      <h3 className="text-sm font-mono text-primary tracking-wider uppercase border-b border-border pb-4">
        <ScrambleHover>Technical Skills</ScrambleHover>
      </h3>

      {/* 1. Horizontal Navigation: Icon below text on mobile, right on desktop */}
      <div className="flex flex-row gap-2 md:gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth justify-start">
        {coreExpertise.sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeTab === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-3 p-3 min-w-[90px] md:min-w-fit rounded-xl border transition-all duration-300 ${
                isActive 
                  ? 'bg-secondary/50 border-primary shadow-[0_0_15px_rgba(66,133,244,0.1)]' 
                  : 'bg-transparent border-transparent hover:bg-secondary/30'
              }`}
            >
              <div 
                className="transition-transform duration-300 scale-100 md:scale-110"
                style={{ color: isActive ? section.color : 'var(--muted-foreground)' }}
              >
                <Icon size={20} />
              </div>
              <span className={`text-[10px] md:text-xs font-mono uppercase tracking-tighter whitespace-nowrap ${isActive ? 'text-foreground font-bold' : 'text-muted-foreground'}`}>
                {/* On mobile show only first word, on desktop show full name */}
                <span className="md:hidden">{section.name.split(' ')[0]}</span>
                <span className="hidden md:inline">{section.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Dynamic Content Area */}
      <div className="min-h-[300px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Header: Name & Certification Badge */}
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-3">
                {activeData.name}
                {activeData.achievements && (
                  <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                    CERTIFIED
                  </span>
                )}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {activeData.summary}
              </p>
            </div>

            {/* Grid for Stack and Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Categorized Technical Stack */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-primary uppercase tracking-widest font-bold">
                  Technical Stack
                </span>
                <div className="space-y-4">
                  {Object.entries(activeData.stack).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-tight font-semibold">
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((item: string) => (
                          <span 
                            key={item} 
                            className="text-[11px] px-2 py-1 rounded-md bg-secondary/50 border border-border text-foreground hover:border-primary/40 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability List */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-primary uppercase tracking-widest font-bold">
                  Core Capabilities
                </span>
                <ul className="space-y-3">
                  {activeData.capabilities.map((cap) => (
                    <li key={cap} className="text-xs text-muted-foreground flex items-start gap-3 group">
                      <span className="text-primary mt-0.5 group-hover:translate-x-1 transition-transform">▹</span> 
                      <span className="leading-normal">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};