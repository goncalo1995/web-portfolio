"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { processSteps } from "@/data/portfolio"
import type { ProcessStep } from "@/types"

interface ProcessNodeProps {
  step: ProcessStep
  index: number
  activeStep: number
}

function ProcessNode({ step, index, activeStep }: ProcessNodeProps) {
  const Icon = step.icon
  const isActive = activeStep === index

  return (
    <motion.div
      animate={{ scale: isActive ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div
        className={cn(
          "flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl transition-all duration-300",
          isActive ? "glass-elevated glow-blue" : "glass"
        )}
      >
        <div
          className={cn(
            "p-2.5 md:p-3 rounded-lg transition-colors",
            isActive ? "bg-cloud-blue/20 text-cloud-blue" : "bg-secondary text-muted-foreground"
          )}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <span className={cn("text-xs md:text-base font-medium text-center", isActive ? "text-foreground" : "text-muted-foreground")}>
          {step.label}
        </span>
        <span className="text-[10px] md:text-xs text-muted-foreground text-center hidden sm:block max-w-[80px] md:max-w-[100px]">
          {step.description}
        </span>
      </div>
    </motion.div>
  )
}

export function RecursiveLoop() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square">
        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <ProcessNode step={processSteps[0]} index={0} activeStep={activeStep} />
        </div>

        <div className="col-start-1 row-start-2 flex items-center justify-center">
          <ProcessNode step={processSteps[3]} index={3} activeStep={activeStep} />
        </div>

        <div className="col-start-2 row-start-2 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
            {[0, 1, 2, 3].map((i) => {
              const angles = [
                { start: 270, end: 0, cx: 85, cy: 15 },
                { start: 0, end: 90, cx: 85, cy: 85 },
                { start: 90, end: 180, cx: 15, cy: 85 },
                { start: 180, end: 270, cx: 15, cy: 15 },
              ]
              const a = angles[i]
              const isActive = activeStep === i

              return (
                <g key={i}>
                  <path
                    d={`M ${50 + 35 * Math.cos((a.start * Math.PI) / 180)} ${50 + 35 * Math.sin((a.start * Math.PI) / 180)} 
                        Q ${a.cx} ${a.cy} 
                        ${50 + 35 * Math.cos((a.end * Math.PI) / 180)} ${50 + 35 * Math.sin((a.end * Math.PI) / 180)}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-border"
                  />
                  {isActive && (
                    <motion.path
                      d={`M ${50 + 35 * Math.cos((a.start * Math.PI) / 180)} ${50 + 35 * Math.sin((a.start * Math.PI) / 180)} 
                          Q ${a.cx} ${a.cy} 
                          ${50 + 35 * Math.cos((a.end * Math.PI) / 180)} ${50 + 35 * Math.sin((a.end * Math.PI) / 180)}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-cloud-blue"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  )}
                </g>
              )
            })}

            {[0, 1, 2, 3].map((i) => {
              const endAngles = [0, 90, 180, 270]
              const angle = endAngles[i]
              const x = 50 + 35 * Math.cos((angle * Math.PI) / 180)
              const y = 50 + 35 * Math.sin((angle * Math.PI) / 180)
              const rotation = angle + 90
              const isActive = activeStep === i

              return (
                <motion.polygon
                  key={`arrow-${i}`}
                  points="0,-4 4,4 -4,4"
                  transform={`translate(${x}, ${y}) rotate(${rotation})`}
                  className={cn(
                    "transition-colors duration-300",
                    isActive ? "fill-cloud-blue" : "fill-muted-foreground/50"
                  )}
                  animate={{ scale: isActive ? 1.3 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              )
            })}
          </svg>
        </div>

        <div className="col-start-3 row-start-2 flex items-center justify-center">
          <ProcessNode step={processSteps[1]} index={1} activeStep={activeStep} />
        </div>

        <div className="col-start-2 row-start-3 flex items-center justify-center">
          <ProcessNode step={processSteps[2]} index={2} activeStep={activeStep} />
        </div>
      </div>
    </div>
  )
}
