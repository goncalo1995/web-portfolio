import ScrambleHover from "@/components/smoothui/scramble-hover";
import AnimatedTags from "@/components/smoothui/animated-tags";
import { CertificationCard } from "../CertificationCard";

// Links from /google.accredible.com no longer work...
// Candidate ID: 2f17d2c7-74ad-437c-b902-42241ffcf22e
export const Terminal = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Certifications (Glow Hover Cards alternative) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CertificationCard cert={
          {
            name: "Google Cloud Certified - Professional Cloud Developer",
            description: "",
            issueDate: "2023-06-26",
            expiryDate: "2025-06-26",
            credentialId: "1a42b013ebce4ebd8b8baf0eb2e9d68c",
            credentialUrl: "https://www.credly.com/badges/7e0df718-f438-468c-b0b7-0ddf4aeb9539",
            issuer: "Google",
            logo: "cert-google-pcd.png",
            skills: ["Java", "TypeScript", "Python", "PHP", "Go", "GCP", "AWS", "Azure", "Vercel", "Cloudflare", "Kubernetes", "Docker", "Helm", "Terraform", "GitHub Actions"]
          }
        }/>
        <CertificationCard cert={
          {
            name: "Google Cloud Certified - Professional Cloud Architect",
            description: "",
            issueDate: "2021-10-21",
            expiryDate: "2023-10-21",
            credentialId: "5fk4QM",
            credentialUrl: "https://example.com",
            issuer: "Google",
            logo: "cert-google-pca.png",
            skills: ["Java", "TypeScript", "Python", "PHP", "Go", "GCP", "AWS", "Azure", "Vercel", "Cloudflare", "Kubernetes", "Docker", "Helm", "Terraform", "GitHub Actions"]
          }
        }/>
      </div>

      {/* Skill Matrix */}
      <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 space-y-8">
        <h3 className="text-sm font-mono text-primary tracking-wider uppercase mb-4 border-b border-white/10 pb-4">
          <ScrambleHover>SYSTEM RESOURCES :: SKILL_MATRIX</ScrambleHover>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none">
          {/* Languages */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 mb-2">/usr/bin/languages</h4>
            <AnimatedTags 
              initialTags={["Java", "TypeScript", "Python", "PHP", "Go"]}
              selectedTags={["Java", "TypeScript", "Python"]}
              className="w-full !p-0"
            />
          </div>

          {/* Cloud */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 mb-2">/var/cloud</h4>
            <AnimatedTags 
              initialTags={["GCP", "AWS", "Azure", "Vercel", "Cloudflare"]}
              selectedTags={["GCP", "AWS", "Azure"]}
              className="w-full !p-0"
            />
          </div>

          {/* DevOps */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 mb-2">/sys/devops</h4>
            <AnimatedTags 
              initialTags={["Kubernetes", "Docker", "Helm", "Terraform", "GitHub Actions"]}
              selectedTags={["Kubernetes", "Docker", "Helm"]}
              className="w-full !p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
