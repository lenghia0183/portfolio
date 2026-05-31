"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export function GoToTop(): ReactNode {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Go to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            const lenis = (window as unknown as Record<string, unknown>).lenis as { scrollTo: (target: number) => void } | undefined;
            if (lenis) {
              lenis.scrollTo(0);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="focus-ring bg-foreground text-background hover:bg-foreground/85 fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-lg transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
