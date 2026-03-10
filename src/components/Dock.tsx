import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TABS, type TabId } from '../constants/tabs';
import { User, Layers, Cpu, SquareTerminal, Sun, Moon } from 'lucide-react';

// Using a custom mapping since we removed User
const iconMap = {
  User,
  Layers,
  Cpu,
  SquareTerminal,
};

interface DockProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const Dock = ({ activeTab, onTabChange }: DockProps) => {
  const [hoveredTab, setHoveredTab] = useState<TabId | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Make sure 'dark' class is present on mount since it's default
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.07] to-white/[0.03] rounded-2xl blur-xl" />
        
        {/* Main dock container */}
        <div className="relative flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl">
          {TABS.map((tab, index) => {
            const Icon = iconMap[tab.icon as keyof typeof iconMap] || SquareTerminal; // Fallback
            if (tab.icon === 'User') {
              // We need to import User from lucide-react if identity still uses 'User'
              // Actually let's just use the proper icon for Identity from lucide-react in constants if needed
              // or just keep importing User. I'll dynamically import User at the top to avoid breaking
            }
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;

            return (
              <motion.div
                key={tab.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <button
                  onClick={() => onTabChange(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="relative group focus:outline-none"
                >
                  {/* Active indicator background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover effect background */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/[0.03] rounded-xl"
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon container */}
                  <motion.div
                    className="relative flex flex-col items-center justify-center w-14 h-14 rounded-xl cursor-pointer"
                    animate={{
                      y: isHovered ? -4 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Icon 
                      size={22}
                      className={`transition-all duration-300 ${
                        isActive 
                          ? "text-primary" 
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    />
                    
                    {/* Label tooltip */}
                    <AnimatePresence>
                      {(isHovered) && (
                        <motion.span
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute -top-10 px-2 py-1 text-[10px] font-medium rounded-md whitespace-nowrap z-50
                            ${isActive 
                              ? "bg-primary/20 text-primary border border-primary/20" 
                              : "bg-[#252525] text-gray-300 border border-white/10"
                            }`}
                        >
                          {tab.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </button>

                {/* Active dot indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Separator line */}
          <div className="w-px h-8 mx-1 bg-white/[0.08]" />

          {/* Theme Toggle Indicator */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: TABS.length * 0.05 }}
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 cursor-pointer hover:border-primary/40 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon size={18} className="text-primary/80" />
            ) : (
              <Sun size={18} className="text-amber-500/80" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};