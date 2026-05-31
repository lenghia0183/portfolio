"use client";

import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { ScrollFadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import { ShaderFlow } from "../shaders/shader-flow";
import { trackContactClick } from "@/lib/mixpanel";
import { SOCIAL_LINKS } from "@/lib/constants";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

function ShaderBackground({ opacity = "opacity-45 dark:opacity-25" }: { opacity?: string }): ReactNode {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${opacity}`}
      style={{ WebkitMaskImage: CARD_FADE_MASK, maskImage: CARD_FADE_MASK }}
    >
      <ShaderFlow scale={3} brightness={3} />
    </div>
  );
}

export function ContactCard(): ReactNode {
  const { t } = useI18n();

  return (
    <section className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10">
      <ScrollFadeIn>
        <div className="border-foreground/8 bg-background relative w-full overflow-hidden rounded-4xl border p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <ShaderBackground />

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="text-foreground font-serif text-[2.25rem] leading-[1.05] font-medium tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]">
                  {t.contact.title}
                </h2>
                <p className="text-foreground/65 mb-6 max-w-[29ch] text-[18px] leading-[1.4] tracking-tight sm:text-[22px]">
                  {t.contact.description}
                </p>
                <ContactCardCtas />
              </div>

              <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[1.1rem] border border-foreground/8 p-6 sm:p-8">
                <ShaderBackground opacity="opacity-55 dark:opacity-30" />

                <p className="relative font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                  {t.contact.byline}
                </p>

                <div className="relative flex flex-wrap items-center justify-center gap-2.5">
                  <SocialIcon href={SOCIAL_LINKS.email}    label={t.contact.email}    lucideIcon={Mail} />
                  <SocialIcon href={SOCIAL_LINKS.phone}    label={t.contact.phone}    lucideIcon={Phone} />
                  <SocialIcon href={SOCIAL_LINKS.github}   label={t.contact.github}   lucideIcon={Github} />
                  <SocialIcon href={SOCIAL_LINKS.linkedin} label={t.contact.linkedin} lucideIcon={Linkedin} />
                  <SocialIcon href={SOCIAL_LINKS.facebook} label={t.contact.facebook} lucideIcon={Facebook} />
                </div>

                <p className="relative text-foreground/50 text-[12px] tracking-tight">
                  {t.contact.builtWith}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}): ReactNode {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      aria-label={label}
      onClick={() => trackContactClick(href, label, "contact-card")}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="border-foreground/8 hover:border-foreground/15 focus-ring bg-background text-foreground/70 hover:text-foreground inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
    >
      {LucideIcon ? <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" /> : null}
    </Link>
  );
}
