import { AiBranch } from "@/components/smoothui/ai-branch";
import AgentAvatar from "@/components/smoothui/agent-avatar";
import GlowHover from "@/components/smoothui/glow-hover-card";

export const AILab = () => {
  const bankingChatbotBranches = [
    {
      id: "b1",
      userMessage: "How do I implement a secure knowledge base retrieval?",
      aiResponse: "For banking environments, I recommend using a GCP Vertex AI vector database with fine-grained IAM roles, ensuring that PII is masked before the embedding step. The chatbot accesses this DB using short-lived OAuth tokens.",
      timestamp: new Date(),
      isActive: true, // Only one should be active by default if needed, though LegacyAiBranch handles this
    },
    {
      id: "b2",
      userMessage: "What about call center analytics?",
      aiResponse: "By leveraging the GCP Speech-to-Text API coupled with an LLM for sentiment analysis, we can automatically flag high-friction calls. The data is piped into BigQuery for real-time dashboarding.",
      timestamp: new Date(),
      isActive: false,
    }
  ];

  const webProjects = [
    {
      id: "p1",
      element: (
        <a href="http://jobs.rochanegra.com" target="_blank" rel="noopener noreferrer" className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3 hover:bg-surface/80 transition-colors">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">jobzapp <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">live</span></h4>
          <p className="text-sm text-gray-400">AI-powered job application tracking and interview prep platform.</p>
        </a>
      )
    },
    {
      id: "p2",
      element: (
        <a href="http://airoast.app" target="_blank" rel="noopener noreferrer" className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3 hover:bg-surface/80 transition-colors">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">airoast.app <span className="text-xs font-mono bg-accent-yellow/20 text-accent-yellow px-2 py-0.5 rounded">wip</span></h4>
          <p className="text-sm text-gray-400">AI roasting application. (Payment integration pending).</p>
        </a>
      )
    },
    {
      id: "p3",
      element: (
        <div className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3">
          <h4 className="text-lg font-bold text-white">notjustflows</h4>
          <p className="text-sm text-gray-400">React Native mobile app with AI model integration.</p>
        </div>
      )
    },
    {
      id: "p4",
      element: (
        <a href="http://rochanegra.com" target="_blank" rel="noopener noreferrer" className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3 hover:bg-surface/80 transition-colors">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">rochanegra.com <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">live</span></h4>
          <p className="text-sm text-gray-400">Corporate web presence.</p>
        </a>
      )
    },
    {
      id: "p5",
      element: (
        <div className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3">
          <h4 className="text-lg font-bold text-white">3dfry</h4>
          <p className="text-sm text-gray-400">Custom 3D printing service portal.</p>
        </div>
      )
    },
    {
      id: "p6",
      element: (
        <a href="http://rebelco.pt" target="_blank" rel="noopener noreferrer" className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3 hover:bg-surface/80 transition-colors">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">rebelco.pt <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">live</span></h4>
          <p className="text-sm text-gray-400">E-commerce solution.</p>
        </a>
      )
    },
    {
      id: "p7",
      element: (
        <div className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3">
          <h4 className="text-lg font-bold text-white">munzua</h4>
          <p className="text-sm text-gray-400">Web application project.</p>
        </div>
      )
    },
    {
      id: "p8",
      element: (
        <a href="https://helenacolaco.com" target="_blank" rel="noopener noreferrer" className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3 hover:bg-surface/80 transition-colors">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">helenacolaco.com <span className="text-xs font-mono bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded">beta</span></h4>
          <p className="text-sm text-gray-400">Portfolio website.</p>
        </a>
      )
    },
    {
      id: "p9",
      element: (
        <div className="block h-full bg-surface p-6 rounded-2xl border border-white/5 space-y-3">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">beta.ausse.pt <span className="text-xs font-mono bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded">beta</span></h4>
          <p className="text-sm text-gray-400">Beta landing page (pending final finishes).</p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* AI Projects */}
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-6">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <AgentAvatar seed="banking-bot-v1" size={48} animated />
          <div>
            <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-1">AI LAB :: Chatbots & PoCs</h3>
            <p className="text-gray-400 text-sm">Reviewing dialogue flows & architecture patterns.</p>
          </div>
        </div>
        
        <div className="pt-4">
          <AiBranch 
            branches={bankingChatbotBranches} 
            onBranchSelect={(id) => console.log('Selected branch', id)} 
          />
        </div>
      </div>

      {/* Web & Mobile Projects */}
      <div className="space-y-6 pt-4">
        <div className="px-2">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-1">Web & Mobile Solutions</h3>
          <p className="text-gray-400 text-sm">A collection of live applications, side projects, and freelance work.</p>
        </div>
        
        <GlowHover 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          items={webProjects}
          maskSize={300}
        />
      </div>

    </div>
  );
};
