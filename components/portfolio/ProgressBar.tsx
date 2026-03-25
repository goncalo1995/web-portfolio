"use client"

import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 z-30 w-1 bg-secondary hidden lg:block ml-2">
        <motion.div
          className="w-full bg-gradient-to-b from-cloud-blue via-cyber-green to-amber"
          style={{ height: `${progress}%` }}
        />
      </div>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-secondary lg:hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cloud-blue via-cyber-green to-amber"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  )
}
