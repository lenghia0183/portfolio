"use client";

import { ContactButton } from "@/components/contact/contact-button";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

type Channel = {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const CHANNELS: Channel[] = [
  {
    label: "Email",
    value: "lenghia0108@gmail.com",
    href: "mailto:lenghia0108@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "0966 859 061",
    href: "tel:+84966859061",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/lenghia0183",
    href: "https://github.com/lenghia0183",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "nghia-le-366628384",
    href: "https://www.linkedin.com/in/nghia-le-366628384/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    value: "nghia.cong.le.2024",
    href: "https://www.facebook.com/nghia.cong.le.2024",
    icon: Facebook,
  },
];

const WORK_ITEMS_EN = [
  "Shopify app development and storefront customization",
  "Product options, variants, and merchant workflow systems",
  "React, Remix, and Next.js frontend implementation",
  "NestJS, Node.js APIs, CMS tools, and backend services",
];

const WORK_ITEMS_VI = [
  "Phát triển Shopify app và tùy chỉnh storefront",
  "Hệ thống product options, variants và merchant workflows",
  "Phát triển frontend với React, Remix và Next.js",
  "Backend services với NestJS, Node.js APIs và CMS tools",
];

const PROJECT_BRIEF_ITEMS_EN = [
  ["01", "What you want to build"],
  ["02", "Current store or product stage"],
  ["03", "Timeline, priority, and budget range"],
] as const;

const PROJECT_BRIEF_ITEMS_VI = [
  ["01", "Bạn muốn xây dựng gì"],
  ["02", "Giai đoạn hiện tại của sản phẩm"],
  ["03", "Timeline, độ ưu tiên và ngân sách"],
] as const;

export function ContactPageContent(): ReactNode {
  const { t, language } = useI18n();
  const WORK_ITEMS = language === "vi" ? WORK_ITEMS_VI : WORK_ITEMS_EN;
  const PROJECT_BRIEF_ITEMS = language === "vi" ? PROJECT_BRIEF_ITEMS_VI : PROJECT_BRIEF_ITEMS_EN;

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="relative mx-auto grid w-full max-w-275 gap-12 px-6 pt-44 pb-20 sm:px-10 sm:pt-56 sm:pb-28 lg:grid-cols-[1fr_0.82fr] lg:items-start">
        <FadeIn className="flex flex-col gap-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border-foreground/8 bg-foreground/[0.03] inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[12px] text-foreground/62">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Available for focused production work
            </span>
            <span className="border-foreground/8 bg-background inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[12px] text-foreground/55">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Hanoi, Vietnam
            </span>
          </div>

          <div>
            <h1 className="text-foreground max-w-[10ch] font-serif text-[3.4rem] leading-[0.96] font-medium tracking-tight sm:text-[4.6rem] lg:text-[5.4rem]">
              {t.contact.title}
            </h1>
            <p className="mt-7 max-w-[39ch] text-[19px] leading-[1.55] tracking-tight text-foreground/65 sm:text-[22px]">
              {t.contact.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ContactButton />
            <Link
              href="mailto:lenghia0108@gmail.com"
              className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/[0.04] inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {t.contact.workTogether}
              <Send
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </FadeIn>

        <ScaleUnblur delay={0.08}>
          <div className="border-foreground/8 bg-background/80 relative overflow-hidden rounded-4xl border p-1.5 shadow-sm backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-foreground/8 bg-foreground/[0.03] dark:bg-[#080808] p-5">
              {/* grid lines light */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.45] dark:hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(100,116,139,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.2) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              {/* grid lines dark */}
              <div
                className="pointer-events-none absolute inset-0 hidden opacity-35 dark:block"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between border-b border-foreground/8 pb-4">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/40">
                    Direct line
                  </p>
                  <h2 className="mt-2 text-[24px] font-medium tracking-tight text-foreground">
                    Start with context
                  </h2>
                </div>
                <MessageSquare className="h-5 w-5 text-foreground/40" />
              </div>

              <div className="relative mt-5 grid gap-3">
                {CHANNELS.map((channel) => (
                  <ChannelLink key={channel.href} channel={channel} />
                ))}
              </div>
            </div>
          </div>
        </ScaleUnblur>
      </section>

      <section className="mx-auto grid w-full max-w-275 gap-6 px-6 pb-24 sm:px-10 sm:pb-32 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn delay={0.12}>
          <div className="border-foreground/8 bg-foreground/[0.025] rounded-3xl border p-6">
            <div className="flex items-center gap-3">
              <span className="border-foreground/10 bg-background inline-flex h-10 w-10 items-center justify-center rounded-xl border">
                <BriefcaseBusiness
                  className="h-4 w-4 text-foreground"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h2 className="text-[18px] font-semibold tracking-tight text-foreground">
                  {language === "vi" ? "Dịch vụ" : "Services"}
                </h2>
                <p className="mt-1 text-[14px] text-foreground/55">
                  {language === "vi"
                    ? "Shopify và full-stack engineering hướng production."
                    : "Production-focused Shopify and full-stack engineering."}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {WORK_ITEMS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/8 bg-background px-3 py-1.5 text-[13px] text-foreground/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="border-foreground/8 bg-background rounded-3xl border p-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/38">
              {language === "vi" ? "Thông tin dự án" : "Project brief"}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {PROJECT_BRIEF_ITEMS.map(([index, label]) => (
                <div
                  key={index}
                  className="rounded-2xl border border-foreground/8 bg-foreground/[0.025] p-4"
                >
                  <span className="font-mono text-[12px] text-foreground/35">
                    {index}
                  </span>
                  <p className="mt-3 text-[15px] font-medium tracking-tight text-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

function ChannelLink({ channel }: { channel: Channel }): ReactNode {
  const Icon = channel.icon;
  const external = channel.href.startsWith("http");

  return (
    <Link
      href={channel.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-foreground/8 bg-background/60 p-3 transition-colors hover:bg-foreground/4 dark:bg-white/[0.035] dark:hover:bg-white/6.5"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/4 dark:bg-black/30">
          <Icon className="h-4 w-4 text-foreground/60 dark:text-white/72" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] text-foreground/45">
            {channel.label}
          </span>
          <span className="block truncate text-[14px] font-medium text-foreground/85">
            {channel.value}
          </span>
        </span>
      </span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-foreground/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground/70"
        aria-hidden="true"
      />
    </Link>
  );
}
