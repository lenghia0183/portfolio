"use client";

import { useRef, useEffect, type ReactNode } from "react";

import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import { track, EVENTS } from "@/lib/mixpanel";
import { ASSETS } from "@/lib/constants";
import { HeroCtas } from "./hero-ctas";
import { TextScramble } from "./text-scramble";
import { PortraitMorph } from "./portrait-morph";

export function Hero(): ReactNode {
  const { t } = useI18n();
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-foreground text-[20px] leading-tight font-medium tracking-tight">
              {t.hero.intro}
            </p>

            <h1 className="text-foreground text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[2.5rem] lg:text-[3.65rem]">
              <TextScramble text={t.hero.titleLine1} delay={0.3} className="block md:whitespace-nowrap" />
              <TextScramble text={t.hero.titleLine2} delay={0.6} className="block md:whitespace-nowrap" />
            </h1>

            <p className="text-foreground/65 max-w-[34ch] text-[22px] leading-[1.4] tracking-tight">
              {t.hero.description}
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div
              ref={portraitRef}
              onMouseEnter={() => track(EVENTS.HOVER_ANH_CHAN_DUNG)}
              style={{ willChange: "transform" }}
              className="border-foreground/8 bg-background relative aspect-square w-full overflow-hidden rounded-4xl border p-1.5 shadow-sm md:max-w-105"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={ASSETS.portrait}
                  srcB={ASSETS.portraitHover}
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
