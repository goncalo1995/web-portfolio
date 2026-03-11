import TypewriterText from "@/components/smoothui/typewriter-text";
import AnimatedTags from "@/components/smoothui/animated-tags";
import ButtonCopy from "@/components/smoothui/button-copy";
import type { TabId } from '@/constants/tabs';

interface IdentityProps {
  onTabChange?: (tab: TabId) => void;
}

export const Identity = ({ onTabChange }: IdentityProps) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-4 mt-4">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase">System Overview</h3>
        <p className="text-xl text-gray-200 leading-relaxed font-light">
          Hello, I am Goncalo Cereja. A Senior Fullstack Engineer & Cloud Architect.
          <TypewriterText speed={15}>
            I build robust, secure, and scalable solutions that bridge the gap between 
            complex backend infrastructure and intuitive frontend experiences.
          </TypewriterText>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Soft Skills */}
        <div className="bg-surface/30 p-6 rounded-2xl border border-white/5">
          <h4 className="text-accent-yellow font-mono text-sm mb-4">{"//"} Soft_Skills</h4>
          <ul className="space-y-3 font-mono text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              Critical Thinking & Problem Solving
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              Project Planning & Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              Cross-functional Collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              Mentoring & Technical Leadership
            </li>
          </ul>
        </div>

        {/* Software / Tech Highlights */}
        <div className="bg-surface/30 p-6 rounded-2xl border border-white/5">
          <h4 className="text-success font-mono text-sm mb-4">{"//"} Personal_Interests</h4>
          <div className="pointer-events-none">
             <AnimatedTags 
               initialTags={["Sports", "Travel", "Tech", "Photography", "Cooking"]} 
               selectedTags={["Sports", "Travel", "Tech"]}
               className="w-full !p-0"
             />
          </div>
        </div>
      </div>

      {/* Contact Hub */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface/30 p-6 rounded-2xl border border-white/5">
        <h4 className="text-sm font-mono text-gray-400 w-full sm:w-auto">{"//"} Connection_Port</h4>
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>cerejagoncalo@gmail.com</span>
            <ButtonCopy 
              className="bg-transparent text-gray-400 hover:text-white shadow-none !p-1.5 border-none"
              onCopy={async () => {
                await navigator.clipboard.writeText("cerejagoncalo@gmail.com");
              }} 
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>+351 917 842 666</span>
            <ButtonCopy 
              className="bg-transparent text-gray-400 hover:text-white shadow-none !p-1.5 border-none"
              onCopy={async () => {
                await navigator.clipboard.writeText("+351 917 842 666");
              }} 
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-surface/30 p-6 rounded-2xl border border-white/5 space-y-6">
        <h4 className="text-sm font-mono text-gray-400 w-full md:w-auto">{"//"} Academic_Foundation</h4>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-white p-2 flex items-center justify-center">
            <img src="/ist_logo.jpeg" alt="Instituto Superior Técnico" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-2">Instituto Superior Técnico</h2>
            <div className="space-y-4">
              <p className="text-secondary-foreground font-medium font-mono text-sm">Information Systems and Computer Engineering</p>
              <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                <li>Master's Degree (MSc) in Information Systems and Computer Engineering</li>
                <li>Bachelor's Degree (BSc) in Information Systems and Computer Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Hub */}
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center space-y-8 mt-12 py-12">
        <div className="text-center space-y-2">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase">Navigation Hub</h3>
          <p className="text-gray-400 text-sm">Proceed to next module.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl">
          <button
            onClick={() => onTabChange && onTabChange('experience')}
            className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:cursor-pointer hover:bg-primary/20 text-gray-300 hover:text-primary transition-all duration-300 rounded-lg border border-white/5 hover:border-primary/30 font-medium"
          >
            Engineering Journey →
          </button>
          <button
            onClick={() => onTabChange && onTabChange('stack')}
            className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:cursor-pointer hover:bg-accent-yellow/20 text-gray-300 hover:text-accent-yellow transition-all duration-300 rounded-lg border border-white/5 hover:border-accent-yellow/30 font-medium"
          >
            Technical Stack →
          </button>
        </div>

        <div className="mt-4 text-sm font-mono text-gray-500 text-center w-full">
          <TypewriterText speed={50}>
            root@cereja:~$ select_next_module _
          </TypewriterText>
        </div>
      </div>
    </div>
  );
};
