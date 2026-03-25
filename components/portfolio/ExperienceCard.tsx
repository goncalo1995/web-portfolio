"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Briefcase, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Experience, FeedzaiDetail, LinkProject } from "@/types"

interface FeedzaiDetailItemProps {
  detail: FeedzaiDetail
}

function FeedzaiDetailItem({ detail }: FeedzaiDetailItemProps) {
  const Icon = detail.icon

  return (
    <div className="p-4 rounded-lg bg-secondary/50">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-cloud-blue/10">
          <Icon className="w-4 h-4 text-cloud-blue" />
        </div>
        <span className="text-sm font-medium">{detail.title}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{detail.description}</p>
      <div className="flex flex-wrap gap-1">
        {detail.technologies.map((tech) => (
          <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

interface LinkProjectItemProps {
  project: LinkProject
  isExpanded: boolean
  onToggle: () => void
}

function LinkProjectItem({ project, isExpanded, onToggle }: LinkProjectItemProps) {
  const Icon = project.icon

  return (
    <div className="border-l-2 border-cloud-blue/30 pl-4">
      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="w-full text-left py-3 flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-secondary">
            <Icon className="w-4 h-4 text-cloud-blue" />
          </div>
          <div>
            <span className="text-sm font-medium group-hover:text-cloud-blue transition-colors block">
              {project.title}
            </span>
            <span className="text-xs text-muted-foreground">{project.role}</span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-4 space-y-3">
          <div className="grid gap-2">
            <div className="p-3 rounded-lg bg-secondary/30">
              <div className="text-[10px] font-mono uppercase tracking-wider text-destructive mb-1">
                {"// "}Challenge
              </div>
              <p className="text-xs text-muted-foreground">{project.description.challenge}</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyber-green mb-1">
                {"// "}Solution
              </div>
              <p className="text-xs text-muted-foreground">{project.description.solution}</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cloud-blue mb-1">
                {"// "}Impact
              </div>
              <p className="text-xs text-muted-foreground">{project.description.impact}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-1.5 py-0.5 rounded bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ExperienceCardProps {
  experience: Experience
  isExpanded: boolean
  onToggle: () => void
}

export function ExperienceCard({ experience, isExpanded, onToggle }: ExperienceCardProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  useEffect(() => {
    if (!isExpanded) {
      setExpandedProject(null)
    }
  }, [isExpanded])

  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left focus:outline-none rounded-xl cursor-pointer"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cloud-blue/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-cloud-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{experience.company}</h3>
              <p className="text-muted-foreground">{experience.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{experience.location}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">{experience.period}</span>
            <div className="mt-2 flex justify-end">
              <ArrowRight
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200",
                  isExpanded && "rotate-90"
                )}
              />
            </div>
          </div>
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 space-y-4">
          <p className="text-sm text-muted-foreground">{experience.summary}</p>

          {experience.id === "feedzai" && experience.awards && (
            <div className="p-3 rounded-lg bg-amber/10 border border-amber/20">
              <div className="text-xs font-mono uppercase tracking-wider text-amber mb-1">
                {"// "}Achievement
              </div>
              <p className="text-xs text-muted-foreground">{experience.awards}</p>
            </div>
          )}

          {experience.id === "feedzai" ? (
            <div className="grid gap-3 md:grid-cols-2">
              {experience.details.map((detail) => (
                <FeedzaiDetailItem key={detail.id} detail={detail} />
              ))}
            </div>
          ) : (
            <div className="pt-4 border-t border-border">
              <div className="text-xs font-mono uppercase tracking-wider text-amber mb-3">
                {"// "}Projects
              </div>
              <div className="space-y-1">
                {experience.details.map((project) => (
                  <LinkProjectItem
                    key={project.id}
                    project={project}
                    isExpanded={expandedProject === project.id}
                    onToggle={() =>
                      setExpandedProject(expandedProject === project.id ? null : project.id)
                    }
                  />
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-border">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              {"// "}Core Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
