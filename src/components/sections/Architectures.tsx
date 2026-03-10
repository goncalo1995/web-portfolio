import ExpandableCards, { type Card } from "@/components/smoothui/expandable-cards";
import BasicAccordion from "@/components/smoothui/basic-accordion";
import NotificationBadge from "@/components/smoothui/notification-badge";

export const Architectures = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Feedzai // Fullstack Engineer",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      content: (
        <div className="space-y-4 font-mono text-sm text-gray-300">
          <p className="text-secondary-foreground font-medium">2024 - 2025</p>
          <p>• Engineered backend/frontend features for large-scale fraud systems.</p>
          <p>• Managed Kubernetes deployments with Helm and Docker.</p>
          <p>• Specialized in Identity and Access Management (IAM).</p>
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
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      content: (
        <div className="space-y-4">
          <p className="text-secondary-foreground font-medium font-mono text-sm mb-4">2019 - 2024</p>
          <BasicAccordion items={[
            {
              id: "item-1",
              title: "Grupo Salvador Caetano // E-commerce & GISLA",
              content: <p className="text-sm text-gray-400">Delivered a white-label e-commerce platform on AWS EKS and a JSON-driven dynamic form engine (GISLA).</p>
            },
            {
              id: "item-2",
              title: "Commercial Process Automation // Azure",
              content: <p className="text-sm text-gray-400">Integrated Dynamics CRM and SharePoint to eliminate manual workflows.</p>
            },
            {
              id: "item-3",
              title: "Conversational AI // Banking",
              content: <p className="text-sm text-gray-400">Architected secure chatbots on GCP with dynamic knowledge bases for major banks.</p>
            }
          ]} />
        </div>
      )
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6 px-4">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-2">Systems Architecture</h3>
        <p className="text-gray-400 text-sm">Select a node to inspect deployment details and infrastructure specifics.</p>
      </div>
      <ExpandableCards cards={cards} />
    </div>
  );
};