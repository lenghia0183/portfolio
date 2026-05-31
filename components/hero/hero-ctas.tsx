"use client";

import { ArrowRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactButton } from "@/components/contact/contact-button";
import { Magnetic } from "@/components/ui/magnetic";
import { useI18n } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/mixpanel";
import { EASE } from "@/lib/motion";

export function HeroCtas(): ReactNode {
  const { t } = useI18n();

  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-2 flex flex-wrap items-center gap-3"
      >
        <Magnetic><ContactButton href="/contact" /></Magnetic>

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <Magnetic>
            <Link
              href="/projects"
              onClick={() => track(EVENTS.BAM_XEM_DU_AN, { vi_tri: "hero" })}
              className="border-foreground/5 focus-ring group bg-background text-foreground hover:bg-foreground/4 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium shadow-2xl transition-colors"
            >
              {t.hero.viewWork}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
