"use client";

import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { GithubIcon } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { getProjectsData } from "@/data/projectsData";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const locale = useLocale();
  const t = useTranslations("projectsSection");
  const projects = getProjectsData(locale);
  const isId = locale === "id";

  return (
    <section
      id="projects"
      className="relative w-full border-t border-zinc-200/80 bg-zinc-50/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            {t("badge")}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            {isId
              ? "Aplikasi & Platform Pilihan"
              : "Selected Applications & Platforms"}
            <span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={0.15 * index} inView>
              <Card className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                {/* Visual Header / Mockup Preview */}
                <div>
                  <div className="relative flex h-48 w-full flex-col justify-between overflow-hidden border-b border-zinc-100 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-4 text-white">
                    {/* Browser Mockup Window Dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-rose-500/80" />
                      <span className="size-2.5 rounded-full bg-amber-500/80" />
                      <span className="size-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Project Title Watermark / Graphic */}
                    <div className="my-auto flex flex-col items-center text-center">
                      <span className="text-2xl font-black tracking-wider text-white/90 drop-shadow-xs transition-transform duration-300 group-hover:scale-105">
                        {project.title}
                      </span>
                      <span className="mt-1 text-xs font-medium tracking-widest uppercase text-rose-400">
                        {project.category} Application
                      </span>
                    </div>

                    {/* Bottom subtle glow line */}
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-rose-500/40 to-transparent" />
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        variant={
                          project.category === "Fullstack"
                            ? "crimson"
                            : "secondary"
                        }
                      >
                        {project.category}
                      </Badge>
                      <span className="text-xs font-medium text-zinc-400">
                        {isId ? "Unggulan" : "Featured"}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-rose-600">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                      {project.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button: View Details */}
                <div className="border-t border-zinc-100 bg-zinc-50/50 p-6 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "w-full rounded-xl font-semibold shadow-xs transition-all hover:shadow-md",
                    )}
                  >
                    {t("viewCaseStudy")}
                    <ArrowRight className="ms-2 size-4" />
                  </Link>
                </div>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* GitHub Explorer Banner with MagicCard */}
        <BlurFade delay={0.45} inView>
          <MagicCard
            gradientColor="#ffe4e6"
            gradientFrom="#e11d48"
            gradientTo="#fb7185"
            gradientSize={350}
            className="mt-14 rounded-2xl border border-rose-200/80 p-8 shadow-xs transition-all duration-300 hover:border-rose-300 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">
                  {isId
                    ? "Tertarik melihat repositori & eksperimen lainnya?"
                    : "Want to explore more repositories & experiments?"}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-600">
                  {isId
                    ? "Jelajahi seluruh proyek sumber terbuka, algoritma, dan repositori pengembangan saya di GitHub."
                    : "Browse through all my open-source projects, algorithms, and development repositories on GitHub."}
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://github.com/Diba15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 shadow-sm transition-all hover:shadow-md",
                  )}
                >
                  <GithubIcon className="mr-2 size-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
      </div>
    </section>
  );
}
