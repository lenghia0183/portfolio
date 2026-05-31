"use client";

import type { ReactNode } from "react";

import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/mixpanel";
import { HeroCtas } from "./hero-ctas";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/images/photo2.jpg";
const PORTRAIT_HOVER_SRC = "/images/photo1.jpg";

export function Hero(): ReactNode {
  const { t } = useI18n();

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-foreground text-[20px] leading-tight font-medium tracking-tight">
              {t.hero.intro}
            </p>

            <h1 className="text-foreground text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">
                {t.hero.titleLine1}
              </span>
              <span className="block whitespace-nowrap">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p className="text-foreground/65 max-w-[34ch] text-[22px] leading-[1.4] tracking-tight">
              {t.hero.description}
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div onMouseEnter={() => track(EVENTS.HOVER_ANH_CHAN_DUNG)} className="border-foreground/8 bg-background relative aspect-square w-full overflow-hidden rounded-4xl border p-1.5 shadow-sm md:max-w-105">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt={t.hero.portraitAlt}
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
