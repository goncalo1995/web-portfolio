import { AiBranch } from "@/components/smoothui/ai-branch";
import AgentAvatar from "@/components/smoothui/agent-avatar";

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

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-6">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <AgentAvatar seed="banking-bot-v1" size={48} animated />
          <div>
            <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-1">AI LAB :: Experimental Systems</h3>
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
    </div>
  );
};
