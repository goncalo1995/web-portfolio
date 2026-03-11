"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

export type CardItem = {
  title: string;
  description: string;
  src?: string;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  content: React.ReactNode | (() => React.ReactNode);
};

export default function ExpandableCards({ items }: { items: CardItem[] }) {
  const [active, setActive] = useState<CardItem | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-0">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-surface border border-border rounded-full h-8 w-8 z-[110]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col bg-surface border border-border sm:rounded-3xl overflow-hidden shadow-xl"
            >
              <motion.div 
                layoutId={`image-${active.title}-${id}`}
                className="w-full h-32 lg:h-40 bg-secondary flex items-center justify-center overflow-hidden relative"
              >
                {active.src ? (
                  <img
                    width={400}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="scale-[2.5] text-primary/50">
                    {active.icon}
                  </div>
                )}
                {/* Gradient overlay for better text contrast if we wanted title on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent bottom-0 h-1/2 mt-auto"></div>
              </motion.div>

              <div className="flex-1 overflow-auto">
                <div className="flex justify-between items-start p-6 pb-2">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xl text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-muted-foreground text-sm mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active.ctaLink && active.ctaText && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-2 text-sm rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0 ml-4"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
                <div className="p-6 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-foreground/80 text-sm md:text-base flex flex-col items-start gap-4"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={`card-${item.title}-${id}`}
            onClick={() => setActive(item)}
            className="p-5 flex flex-col justify-between items-start bg-secondary/30 border border-border hover:border-primary/40 hover:bg-secondary/50 transition-colors rounded-xl cursor-pointer group shadow-sm"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div 
                layoutId={`image-${item.title}-${id}`}
                className="h-12 w-12 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0 mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm"
              >
                {item.src ? (
                  <img
                    width={48}
                    height={48}
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-foreground">
                    {item.icon}
                  </div>
                )}
              </motion.div>
              <div className="w-full">
                <motion.h3
                  layoutId={`title-${item.title}-${id}`}
                  className="font-bold text-foreground text-lg"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${item.description}-${id}`}
                  className="text-muted-foreground text-sm mt-1 line-clamp-2"
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
