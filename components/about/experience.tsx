"use client";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  context: string;
  responsibilities: readonly string[];
  modules?: readonly string[];
  moduleLinks?: readonly string[];
  stack: readonly string[];
  logoUrl?: string;
};

export function Experience(): ReactNode {
  const { t } = useI18n();
  const entries: readonly ExperienceItem[] = t.about.experienceItems;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-foreground font-serif text-[2.25rem] leading-none font-medium tracking-tight sm:text-[2.75rem]">
          {t.about.experience}
        </h2>
        <span className="hidden font-mono text-xs text-foreground/35 sm:inline">
          2024 - Present
        </span>
      </div>

      <div className="relative flex flex-col gap-4">
        {entries.map((entry, index) => (
          <FadeIn key={entry.company} delay={index * 0.08}>
            <article className="border-foreground/8 bg-background/80 rounded-3xl border p-5 shadow-sm backdrop-blur sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  {entry.logoUrl ? (
                    <span className="inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-xl">
                      <Image src={entry.logoUrl} alt="" width={44} height={44} className="h-11 w-11 object-cover" />
                    </span>
                  ) : null}
                  <div>
                    <h3 className="text-foreground text-[20px] font-semibold tracking-tight">
                      {entry.company}
                    </h3>
                    <p className="mt-1 text-[15px] text-foreground/65">
                      {entry.role}
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full border border-foreground/8 bg-foreground/[0.03] px-3 py-1 font-mono text-[12px] text-foreground/55">
                  {entry.period}
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-foreground/68">
                {entry.context}
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.9fr]">
                <div>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                    Responsibilities
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.responsibilities.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-foreground/8 bg-foreground/[0.03] px-3 py-1.5 text-[13px] text-foreground/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
                    Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-foreground px-2.5 py-1.5 font-mono text-[12px] text-background"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {entry.modules ? (
                <div className="mt-5 border-t border-foreground/8 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {entry.modules.map((module, i) => {
                      const href = entry.moduleLinks?.[i];
                      return href ? (
                        <Link
                          key={module}
                          href={href}
                          className="rounded-xl border border-foreground/8 px-3 py-2 text-[13px] text-foreground/62 transition-colors hover:border-foreground/20 hover:text-foreground/80"
                        >
                          {module}
                        </Link>
                      ) : (
                        <span
                          key={module}
                          className="rounded-xl border border-foreground/8 px-3 py-2 text-[13px] text-foreground/62"
                        >
                          {module}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
