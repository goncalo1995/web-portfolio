"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navItems } from "@/data/portfolio"
import { MagneticButton } from "./MagneticButton"

interface MobileNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden"
    >
      <div className="glass-elevated rounded-2xl p-2 flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <MagneticButton
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative p-3 rounded-xl transition-colors",
                isActive
                  ? "bg-cloud-blue/20 text-cloud-blue"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute inset-0 rounded-xl bg-cloud-blue/10 -z-10"
                />
              )}
            </MagneticButton>
          )
        })}
      </div>
    </motion.nav>
  )
}
