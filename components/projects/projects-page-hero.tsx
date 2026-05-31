"use client";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";

export function ProjectsPageHero(): ReactNode {
  const { t } = useI18n();

  return (
    <FadeIn className="flex flex-col items-center gap-5 text-center">
      <h1 className="text-foreground font-serif text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[3.25rem] lg:text-[3.75rem]">
        {t.projectsPage.title}
      </h1>
      <p className="text-foreground/65 max-w-[33ch] text-[20px] leading-[1.4] tracking-tight sm:text-[22px]">
        {t.projectsPage.description}
      </p>
    </FadeIn>
  );
}
