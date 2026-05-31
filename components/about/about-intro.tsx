"use client";

import { ScrollFadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";

export function AboutIntro(): ReactNode {
  const { t } = useI18n();

  return (
    <ScrollFadeIn delay={0.1}>
      <div className="border-foreground/5 bg-foreground/1.5 dark:bg-foreground/3 rounded-4xl border p-8 sm:p-12">
        <h1 className="text-foreground font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
          {t.about.greeting}{" "}
          <span className="border-foreground/30 border-b pb-0.5">
            {t.about.name}
          </span>
          .
        </h1>
        <div className="text-foreground/75 mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight sm:text-[18px]">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </ScrollFadeIn>
  );
}
