import BasicAccordion from "@/components/smoothui/basic-accordion";
import NotificationBadge from "@/components/smoothui/notification-badge";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Feedzai // Fullstack Engineer",
      image: "feedzai.jpeg",
      content: (
        <div className="space-y-4 font-mono text-sm text-gray-300">
          <p className="text-secondary-foreground font-medium">2024 - 2025</p>
          <div className="space-y-2">
            <p>• Engineered backend/frontend features for large-scale fraud systems.</p>
            <p>• Managed Kubernetes deployments with Helm and Docker.</p>
            <p>• Specialized in Identity and Access Management (IAM).</p>
          </div>
          <p className="text-gray-400 italic text-xs mt-4">Focus: Deep-dive into fraud detection, micro-frontends, and enterprise automation.</p>
          <div className="flex gap-4 pt-4 flex-wrap">
            <NotificationBadge variant="status" status="online">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20">Kubernetes</span>
            </NotificationBadge>
            <NotificationBadge variant="status" status="online">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20">Quarkus</span>
            </NotificationBadge>
            <NotificationBadge variant="status" status="online">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20">React</span>
            </NotificationBadge>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Link Consulting // Consultant",
      image: "https://logo.clearbit.com/linkconsulting.com",
      content: (
        <div className="space-y-4">
          <p className="text-secondary-foreground font-medium font-mono text-sm mb-4">2019 - 2024</p>
          <p className="text-gray-400 text-sm mb-6">Specialised in architecting and developing enterprise-level web applications and AI-powered solutions, taking projects from initial concept to cloud deployment.</p>
          <div className="w-full">
            <BasicAccordion items={[
              {
                id: "item-1",
                title: "Grupo Salvador Caetano // E-commerce & GISLA",
                content: (
                  <div className="space-y-2 pb-2">
                    <p className="text-sm text-gray-400">Delivered a suite of solutions to manage complex multi-brand operations.</p>
                    <ul className="list-disc list-inside text-sm text-gray-400 pl-2">
                      <li>Enterprise e-commerce platform (Quarkus/Java, Vue.js) on AWS.</li>
                      <li>Process management portal (GISLA) with a dynamic JSON-driven form engine.</li>
                      <li>AI-powered call center analytics tool for operator evaluation.</li>
                    </ul>
                  </div>
                )
              },
              {
                id: "item-2",
                title: "Commercial Process Automation // Azure",
                content: <p className="text-sm text-gray-400 pb-2">Initiated and engineered an internal automation system on Azure integrating Dynamics CRM and SharePoint. The solution eliminated manual workflows, significantly reducing project setup time and human error.</p>
              },
              {
                id: "item-3",
                title: "Conversational AI // Banking",
                content: <p className="text-sm text-gray-400 pb-2">Architected a secure, scalable chatbot on GCP for a major bank. A key feature was a dynamic knowledge base empowering business users to manage content directly, ensuring accuracy.</p>
              },
              {
                id: "item-4",
                title: "Other Projects",
                content: <p className="text-sm text-gray-400 pb-2">Contributed as a full-stack developer on the CTT customer support portal (AdonisJs, React) and multiple chatbots for DGAE, DGC, and Abu Dhabi Customs.</p>
              }
            ]} />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
      
      {/* Experience Section */}
      <div>
        <div className="mb-6 px-4">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">Systems Architecture</h3>
          <p className="text-gray-400 text-sm">Professional journey and key deployments.</p>
        </div>
        
        <div className="flex flex-col gap-6 px-4 w-full">
          {experiences.map((card) => (
            <div key={card.id} className="bg-surface/30 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group hover:border-white/10 transition-colors w-full">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-white p-2 flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 w-full max-w-full overflow-hidden">
                <h2 className="text-xl font-bold text-white mb-4">{card.title}</h2>
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="mb-6 px-4">
          <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">Academic Foundation</h3>
          <p className="text-gray-400 text-sm">Degrees and formal education.</p>
        </div>
        
        <div className="flex flex-col gap-6 px-4 w-full">
          <div className="bg-surface/30 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group hover:border-white/10 transition-colors w-full">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-white p-2 flex items-center justify-center">
              <img src="ist_logo.jpeg" alt="Instituto Superior Técnico" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 w-full max-w-full overflow-hidden">
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
      </div>
      
    </div>
  );
};