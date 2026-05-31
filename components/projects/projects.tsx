"use client";

import {
  ArrowRight,
  Boxes,
  Code2,
  ExternalLink,
  Factory,
  Palette,
  ShoppingBag,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { dictionaries, useI18n } from "@/lib/i18n";

type ProjectContent =
  (typeof dictionaries)[keyof typeof dictionaries]["projects"]["items"][number];

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  accent: string;
};


const PROJECTS: Project[] = [
  {
    id: "optis",
    icon: Boxes,
    iconLabel: "OPTIS",
    accent: "",
  },
  {
    id: "op-swatch",
    icon: Palette,
    iconLabel: "OP Swatch",
    accent: "",
  },
  {
    id: "hauifood",
    icon: ShoppingBag,
    iconLabel: "HAUIFOOD",
    accent: "",
  },
  {
    id: "mid-autumn",
    icon: Code2,
    iconLabel: "Mid-Autumn",
    accent: "",
  },
  {
    id: "vti-internal-tools",
    icon: Factory,
    iconLabel: "VTI",
    accent: "",
  },
];


export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

const SECTION_LABELS = {
  bss: { en: "BSS Commerce", vi: "BSS Commerce" },
  vti: { en: "VTI Solutions", vi: "VTI Solutions" },
  student: { en: "Student Projects", vi: "Dự án sinh viên" },
} as const;

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const { t, language } = useI18n();
  const items = viewMoreVisible ? PROJECTS.slice(0, 2) : PROJECTS;

  const groups = viewMoreVisible
    ? null
    : [
        { label: SECTION_LABELS.bss[language], projects: PROJECTS.slice(0, 2), startIndex: 0, logoUrl: "https://production-options-bucket.s3.us-east-2.amazonaws.com/po/dev-nghia-lc.myshopify.com-33131/1780217922968-943345868-download.png" },
        { label: SECTION_LABELS.vti[language], projects: PROJECTS.slice(4, 5), startIndex: 4, logoUrl: "https://production-options-bucket.s3.us-east-2.amazonaws.com/po/dev-nghia-lc.myshopify.com-33131/1780217886120-686653139-download1.png" },
        { label: SECTION_LABELS.student[language], projects: PROJECTS.slice(2, 4), startIndex: 2, logoUrl: null },
      ];

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
              {t.projects.title}
            </h2>
            <p className="text-foreground/65 max-w-[42ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
              {t.projects.description}
            </p>
          </FadeIn>
        ) : null}

        {groups ? (
          <div className="flex flex-col gap-14">
            {groups.map((group) => (
              <div key={group.label}>
                <FadeIn>
                  <div className="mb-6 flex items-center gap-3">
                    {group.logoUrl ? (
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-foreground/10 bg-white">
                        <Image src={group.logoUrl} alt="" width={32} height={32} className="h-8 w-8 object-contain p-0.5" />
                      </span>
                    ) : null}
                    <h3 className="font-mono text-[15px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                      {group.label}
                    </h3>
                  </div>
                </FadeIn>
                <div className="grid gap-6 lg:grid-cols-2">
                  {group.projects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                      content={
                        t.projects.items[group.startIndex + i] ??
                        dictionaries.en.projects.items[group.startIndex + i]!
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {items.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                content={
                  t.projects.items[index] ??
                  dictionaries.en.projects.items[index]!
                }
              />
            ))}
          </div>
        )}

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {t.projects.viewAll}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  content,
}: {
  project: Project;
  index: number;
  content: ProjectContent;
}): ReactNode {
  const Icon = project.icon;
  const category = "category" in content ? content.category : "Shopify App";
  const linkLabel =
    "linkLabel" in content ? content.linkLabel : "Shopify App Store";
  const publicLink = "link" in content ? content.link : null;
  const githubLink = "githubLink" in content ? content.githubLink : null;
  const logoUrl = "logoUrl" in content ? content.logoUrl : null;

  return (
    <FadeIn delay={Math.min(index * 0.08, 0.24)}>
      <article id={project.id} className="project-card border-foreground/8 bg-background flex h-full flex-col gap-5 rounded-3xl border p-4 sm:p-5">
        <div
          className="relative overflow-hidden rounded-2xl p-4
            border border-slate-200 bg-linear-to-br from-slate-100 to-slate-50
            dark:border-white/10 dark:bg-none dark:bg-[#111111]"
        >
          {/* grid lines – light */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55] dark:hidden"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,116,139,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.18) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          {/* grid lines – dark */}
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          {/* soft radial glow – light only */}
          <div
            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-30 dark:hidden"
            style={{ background: "radial-gradient(circle, #94a3b8 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <header className="relative flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl
                border border-slate-300 dark:border-white/12
                ${logoUrl ? "bg-white" : "bg-white dark:bg-white/8"}`}>
                {logoUrl ? (
                  <Image src={logoUrl} alt="" width={36} height={36} className="h-9 w-9 object-contain p-0.5" />
                ) : (
                  <Icon className="h-4 w-4 text-slate-600 dark:text-white" aria-hidden="true" />
                )}
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-700 dark:text-white">
                {project.iconLabel}
              </span>
            </div>
            <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 font-mono text-[11px] text-slate-500 dark:border-white/12 dark:bg-transparent dark:text-white/62">
              {category}
            </span>
          </header>

          <div className="relative mt-12 grid gap-3 sm:grid-cols-2">
            {[content.scale, content.rating].map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-slate-200 bg-white/60 p-3 backdrop-blur-sm dark:border-white/10 dark:bg-black/30"
              >
                <p className="font-mono text-[12px] leading-5 text-slate-600 dark:text-white/75">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-1">
          <div>
            <h3 className="text-foreground text-[22px] leading-[1.15] font-medium tracking-tight sm:text-[24px]">
              {content.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-foreground/65">
              {content.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MetaGroup title="Tính năng" items={content.features} />
            <MetaGroup
              title="Phạm vi kỹ thuật"
              items={content.responsibilities}
            />
          </div>

          <div className="mt-auto flex flex-col gap-4 border-t border-foreground/8 pt-4">
            <div className="flex flex-wrap gap-2">
              {content.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-foreground px-2.5 py-1.5 font-mono text-[12px] text-background"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {publicLink ? (
                <Link
                  href={publicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex w-fit items-center gap-2 rounded-xl border border-foreground/8 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/4"
                >
                  {linkLabel}
                  <ExternalLink
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <span className="inline-flex w-fit rounded-xl border border-foreground/8 px-4 py-2 text-sm font-medium text-foreground/55">
                  {linkLabel}
                </span>
              )}
              {githubLink ? (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex w-fit items-center gap-2 rounded-xl border border-foreground/8 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/4"
                >
                  GitHub
                  <ExternalLink
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

function MetaGroup({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}): ReactNode {
  return (
    <div>
      <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
        {title}
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-foreground/8 bg-foreground/3 px-3 py-1.5 text-[13px] text-foreground/72"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
