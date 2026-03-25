"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navItems } from "@/data/portfolio"

interface SideNavProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function SideNav({ activeSection, onNavigate }: SideNavProps) {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col justify-center pl-6"
    >
      <div className="glass-elevated rounded-2xl p-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all group",
                isActive
                  ? "bg-cloud-blue/20 text-cloud-blue"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {/* <span
                className={cn(
                  "text-sm font-medium whitespace-nowrap transition-all overflow-hidden",
                  isActive
                    ? "max-w-[100px] opacity-100"
                    : "max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100"
                )}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cloud-blue rounded-r-full"
                />
              )} */}
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}
