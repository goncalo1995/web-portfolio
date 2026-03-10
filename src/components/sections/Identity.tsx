import TypewriterText from "@/components/smoothui/typewriter-text";
import AnimatedTags from "@/components/smoothui/animated-tags";

export const Identity = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-4">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase">System Overview</h3>
        <p className="text-xl text-gray-200 leading-relaxed font-light">
          <TypewriterText speed={30}>
            Hello, I am Goncalo Cereja. A Senior Fullstack Engineer & Cloud Architect.
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

        {/* Hobbies / Interests */}
        <div className="bg-surface/30 p-6 rounded-2xl border border-white/5">
          <h4 className="text-accent-yellow font-mono text-sm mb-4">{"//"} Personal_Interests</h4>
          <div className="pointer-events-none">
             {/* Note: the AnimatedTags component by default might allow editing, but we can pass initial ones and style them. 
                 Using it here as a display. The component is client-side but works in React. */}
             <AnimatedTags 
               initialTags={["Sports", "Travel", "Tech", "Photography", "Cooking"]} 
               selectedTags={["Sports", "Travel", "Tech"]}
               className="w-full !p-0"
             />
          </div>
        </div>
      </div>
    </div>
  );
};
