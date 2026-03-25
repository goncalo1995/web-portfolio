"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"
import Image from "next/image"

const categoryColors: Record<Project["category"], string> = {
  cloud: "bg-cloud-blue/10 text-cloud-blue border-cloud-blue/20",
  fullstack: "bg-cyber-green/10 text-cyber-green border-cyber-green/20",
  devops: "bg-amber/10 text-amber border-amber/20",
  ai: "bg-purple-400/10 text-purple-400 border-purple-400/20",
}

interface ProjectLightboxProps {
  project: Project
  onClose: () => void
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex((prev) => prev - 1)
      }
      if (e.key === "ArrowRight" && currentImageIndex < project.images.length - 1) {
        setCurrentImageIndex((prev) => prev + 1)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, currentImageIndex, project.images.length])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project.id])

  const hasPrevImage = currentImageIndex > 0
  const hasNextImage = currentImageIndex < project.images.length - 1

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-elevated rounded-2xl"
      >
        <div className="sticky top-0 z-10 glass-elevated p-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <span className={cn("text-xs px-2.5 py-1 rounded-full border", categoryColors[project.category])}>
              {project.category}
            </span>
            <h2 className="font-semibold">{project.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-video bg-secondary/50 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image src={project.images[currentImageIndex]} alt={project.title} width={1920} height={1080} className="w-full h-full object-contain" />
              <span className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                {project.images[currentImageIndex].split("text=")[1]?.replace(/\+/g, " ") ||
                  `Image ${currentImageIndex + 1}`}
              </span>
            </motion.div>
          </AnimatePresence>

          {hasPrevImage && (
            <button
              onClick={() => setCurrentImageIndex((prev) => prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {hasNextImage && (
            <button
              onClick={() => setCurrentImageIndex((prev) => prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    idx === currentImageIndex
                      ? "bg-cloud-blue"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 space-y-6">
          <p className="text-muted-foreground">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-xs font-mono uppercase tracking-wider text-destructive mb-2">
                {"// "}The Challenge
              </div>
              <p className="text-sm text-muted-foreground">{project.challenge}</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <div className="text-xs font-mono uppercase tracking-wider text-cyber-green mb-2">
                {"// "}The Solution
              </div>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              {"// "}Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 rounded-lg bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.link || project.github) && (
            <div className="flex gap-3 pt-4 border-t border-border">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cloud-blue text-white hover:bg-cloud-blue/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
