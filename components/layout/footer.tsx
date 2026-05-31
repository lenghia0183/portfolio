"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { SOCIAL_LINKS, OWNER } from "@/lib/constants";
import { ScrollFadeIn } from "@/components/ui/motion-primitives";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { labelKey: "home", href: "/" },
  { labelKey: "projects", href: "/projects" },
  { labelKey: "about", href: "/about" },
  { labelKey: "contact", href: "/contact" },
] as const;

const SOCIALS = [
  { href: SOCIAL_LINKS.github, icon: Github, label: "GitHub" },
  { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: SOCIAL_LINKS.facebook, icon: Facebook, label: "Facebook" },
  { href: SOCIAL_LINKS.email, icon: Mail, label: "Email" },
];

export function Footer(): ReactNode {
  const { t } = useI18n();

  return (
    <footer className="mt-24 border-t border-foreground/8">
      <ScrollFadeIn>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Left — name + tagline */}
          <div className="flex flex-col gap-3">
            <p className="font-serif text-[1.35rem] font-medium tracking-tight text-foreground">
              {OWNER.name}
            </p>
            <p className="max-w-xs text-[13px] leading-6 text-foreground/50">
              Full-stack Developer · Shopify App Developer
            </p>
            <div className="mt-1 flex items-center gap-2">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/8 text-foreground/45 transition-colors hover:border-foreground/20 hover:text-foreground/80"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right — nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-[13px] text-foreground/50 transition-colors hover:text-foreground/80"
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-1 border-t border-foreground/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-foreground/35">
            © 2026 {OWNER.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-foreground/35">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
      </ScrollFadeIn>
    </footer>
  );
}
