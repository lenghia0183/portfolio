"use client";

import { Download } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactButton } from "./contact-button";
import { useI18n } from "@/lib/i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactCardCtas(): ReactNode {
  const { t } = useI18n();

  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-2 flex flex-wrap items-center gap-3"
      >
        <ContactButton href="/contact" />

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/Le-Cong-Nghia-CV.pdf"
            className="border-foreground/5 focus-ring group bg-background text-foreground inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium shadow-md/2 transition-colors"
          >
            {t.contact.downloadCv}
            <Download className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
