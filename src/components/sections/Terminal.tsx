import ScrambleHover from "@/components/smoothui/scramble-hover";
import NotificationBadge from "@/components/smoothui/notification-badge";

export const Terminal = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Certifications (Glow Hover Cards alternative) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-white/10 to-white/0 hover:from-primary/30 hover:to-primary/5 transition-all duration-500">
          <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl"></div>
          <div className="h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-4 relative z-10">
             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
               <span className="text-xl">🏆</span>
             </div>
             <h3 className="text-lg font-bold text-white">Google Cloud Professional</h3>
             <p className="text-gray-400 text-sm">Cloud Architect</p>
             <div className="pt-2">
               <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">Cert ID: #109823</span>
             </div>
          </div>
        </div>

        <div className="group relative rounded-2xl p-0.5 bg-gradient-to-br from-white/10 to-white/0 hover:from-accent-yellow/30 hover:to-accent-yellow/5 transition-all duration-500">
          <div className="absolute inset-0 bg-accent-yellow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl"></div>
           <div className="h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-4 relative z-10">
             <div className="w-12 h-12 rounded-xl bg-accent-yellow/10 flex items-center justify-center border border-accent-yellow/20 mb-4">
               <span className="text-xl">⭐</span>
             </div>
             <h3 className="text-lg font-bold text-white">Google Cloud Professional</h3>
             <p className="text-gray-400 text-sm">Cloud Developer</p>
             <div className="pt-2">
               <span className="text-xs font-mono text-accent-yellow bg-accent-yellow/10 px-2 py-1 rounded-md">Cert ID: #109844</span>
             </div>
          </div>
        </div>
      </div>

      {/* Skill Matrix */}
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-6">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-4 border-b border-white/10 pb-4">
          <ScrambleHover>SYSTEM RESOURCES :: SKILL_MATRIX</ScrambleHover>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 mb-2">/usr/bin/languages</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Java</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">TypeScript</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Python</ScrambleHover>
                <NotificationBadge variant="dot" status="away" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">PHP</ScrambleHover>
                <NotificationBadge variant="dot" status="offline" />
              </div>
            </div>
          </div>

          {/* Cloud */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 mb-2">/var/cloud</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Google Cloud (GCP)</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">AWS</ScrambleHover>
                <NotificationBadge variant="dot" status="away" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Azure</ScrambleHover>
                <NotificationBadge variant="dot" status="offline" />
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 mb-2">/sys/backend</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Kubernetes</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Docker</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Quarkus</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
              <div className="flex items-center justify-between">
                <ScrambleHover className="font-mono text-sm text-gray-200">Node.js</ScrambleHover>
                <NotificationBadge variant="dot" status="online" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
