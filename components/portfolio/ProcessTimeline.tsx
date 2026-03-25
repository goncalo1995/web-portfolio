"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { ProcessStep } from "@/types";

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full px-6 max-w-6xl mx-auto">
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-6">
          {steps.map((step, i) => {
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Step indicator */}
                <motion.div
                  className={`
                    absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-sm
                    ${isActive ? "bg-white text-black" : "bg-white/10 text-white"}
                  `}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                >
                  {i + 1}
                </motion.div>

                {/* Card */}
                <motion.div
                  layout
                  onClick={() => setActive(isActive ? null : i)}
                  className={`
                    rounded-2xl border p-6 cursor-pointer
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-black border-white shadow-xl shadow-white/10"
                        : "bg-white/5 text-white border-white/10 hover:border-white/30"
                    }
                  `}
                  whileHover={{ scale: 1.015 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      {step.label}
                    </h3>

                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      className="text-xl"
                    >
                      +
                    </motion.div>
                  </div>

                  <p
                    className={`mt-2 text-sm ${
                      isActive ? "text-black/70" : "text-white/60"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Expanded */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                          {/* Details */}
                          <div>
                            <h4 className="text-base font-bold mb-2 opacity-70">
                              What happens here
                            </h4>
                            <ul className="space-y-2 text-sm opacity-80">
                              {step.details.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcome */}
                          <div>
                            <h4 className="text-base font-bold mb-2 opacity-70 ">
                              Outcome
                            </h4>
                            <p className="text-sm opacity-80">
                              {step.outcome}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}