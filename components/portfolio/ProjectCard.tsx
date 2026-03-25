"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"
import Image from "next/image"
import { Cloud } from "lucide-react"

const categoryColors: Record<Project["category"], string> = {
  Cloud: "text-cloud-blue border-cloud-blue/30",
  Fullstack: "text-cyber-green border-cyber-green/30",
  DevOps: "text-amber border-amber/30",
  Mobile: "text-purple-400 border-purple-400/30",
  Web: "text-purple-400 border-purple-400/30",
  SaaS: "text-purple-400 border-purple-400/30",
  PoC: "text-purple-400 border-purple-400/30",
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      <motion.div
        className="absolute -inset-px rounded-xl bg-gradient-to-r from-cloud-blue/50 via-cyber-green/50 to-amber/50 opacity-0 blur-xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      <div className="relative glass rounded-xl overflow-hidden">
        <div className="aspect-video bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card/10 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            {project.images?.[0] ? (
              <Image src={project.images[0]} alt={project.title} width={800} height={600} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cloud-blue/20 to-cyber-green/20 flex items-center justify-center">
                <Cloud className="w-12 h-12 text-cloud-blue" />
              </div>
            )}
          </div>
          {project.images && project.images.length > 1 && (
            <div className="absolute bottom-2 right-2 z-20 px-2 py-1 rounded-md bg-background/80 text-xs text-muted-foreground">
              {project.images.length} images
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-semibold text-lg group-hover:text-cloud-blue transition-colors line-clamp-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className={cn("shrink-0 text-xs px-2 py-1 rounded-full border", categoryColors[project.category])}>
                {project.category}
              </span>
              {project.hasAI && (
                <span className="shrink-0 text-xs px-2 py-1 rounded-full border border-purple-400/30 text-purple-400">
                  AI
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
