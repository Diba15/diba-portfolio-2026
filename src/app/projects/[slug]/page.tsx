import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  ExternalLink,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GithubIcon } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectImageSlide } from "@/components/ui/project-image-slide";
import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/data/projectsData";
import { cn } from "@/lib/utils";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Dimas Bagas Saputro",
    };
  }

  return {
    title: `${project.title} - Case Study | Dimas Bagas Saputro`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.thumbnail];

  const otherProjects = projectsData.filter((p) => p.slug !== slug);
  const cs = project.caseStudy;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Back Link */}
        <BlurFade delay={0.05} inView>
          <div className="mb-8">
            <Link
              href="/#projects"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "-ml-3 inline-flex items-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
              )}
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Projects
            </Link>
          </div>
        </BlurFade>

        {/* Project Header */}
        <BlurFade delay={0.1} inView>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant={
                  project.category === "Fullstack" ? "crimson" : "secondary"
                }
                className="text-xs font-semibold"
              >
                {project.category} Application
              </Badge>
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-0.5 text-xs font-medium text-zinc-600">
                Featured Case Study
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              {project.title}
              <span className="text-rose-600">.</span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              {project.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 shadow-xs transition-all hover:shadow-md",
                  )}
                >
                  <ExternalLink className="mr-2 size-4" />
                  Visit Live Website
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full px-6 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-rose-600",
                  )}
                >
                  <GithubIcon className="mr-2 size-4" />
                  View GitHub Repository
                </a>
              )}

              {project.docsUrl && (
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full px-6 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-rose-600",
                  )}
                >
                  <BookOpen className="mr-2 size-4" />
                  API Documentation (Swagger)
                </a>
              )}
            </div>
          </div>
        </BlurFade>

        {/* Section 4: Visual Suggestion (Screenshot Mockup Carousel) */}
        <BlurFade delay={0.15} inView>
          <div className="mt-12">
            <Carousel className="w-full" opts={{ loop: true }}>
              <div className="relative">
                <CarouselContent>
                  {images.map((imgSrc, index) => (
                    <CarouselItem key={imgSrc}>
                      <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-md">
                        {/* Mockup Top Window Bar */}
                        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full bg-rose-500/90" />
                            <span className="size-3 rounded-full bg-amber-500/90" />
                            <span className="size-3 rounded-full bg-emerald-500/90" />
                          </div>
                          <div className="flex items-center gap-1.5 rounded-md bg-zinc-800/80 px-3 py-1 font-mono text-[11px] text-zinc-400">
                            <span>{project.slug}</span>
                            <span className="text-zinc-500">/</span>
                            <span className="text-zinc-200">
                              screenshot-{index + 1}.png
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-zinc-500">
                            {index + 1} / {images.length}
                          </span>
                        </div>

                        {/* Screenshot Image with Graceful Error Fallback */}
                        <ProjectImageSlide
                          src={imgSrc}
                          alt={`${project.title} screenshot ${index + 1}`}
                          title={project.title}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Floating Navigation Arrows */}
                <div className="hidden sm:block">
                  <CarouselPrevious className="-left-4 size-10 border-zinc-200 bg-white/95 text-zinc-800 shadow-md hover:bg-white hover:text-rose-600 transition-all" />
                  <CarouselNext className="-right-4 size-10 border-zinc-200 bg-white/95 text-zinc-800 shadow-md hover:bg-white hover:text-rose-600 transition-all" />
                </div>
              </div>

              {/* Interaction Hint */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-zinc-400">
                <span>Swipe or click arrows to view gallery</span>
                <span className="font-medium text-rose-600">
                  {images.length} Screenshots
                </span>
              </div>
            </Carousel>
          </div>
        </BlurFade>

        <Separator className="my-14" />

        {/* Case Study Content (RevoU Slide Layout: 2 Balanced Columns) */}
        {cs ? (
          <>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* LEFT COLUMN: Project Background & Technical Stack */}
              <div className="space-y-8">
                {/* Block 1: Project Background */}
                <BlurFade delay={0.2} inView>
                  <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs sm:p-7 space-y-6">
                    <CardContent className="p-0 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs tracking-wider uppercase">
                          <Sparkles className="size-3.5" />
                          <span>Section 1: Project Summary</span>
                        </div>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                          Project Background
                        </h2>
                      </div>

                      {/* Overview */}
                      <div className="space-y-1.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Overview
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.overview}
                        </p>
                      </div>

                      {/* Problem Statement */}
                      <div className="space-y-1.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Problem Statement
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.problemStatement}
                        </p>
                      </div>

                      {/* Problem -> Solution Mapping */}
                      {cs.problemSolutions &&
                        cs.problemSolutions.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                              Masalah &amp; Solusi Kunci
                            </h3>
                            <div className="space-y-2">
                              {cs.problemSolutions.map((item, idx) => (
                                <div
                                  key={item.problem}
                                  className="rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-3 text-xs space-y-1.5"
                                >
                                  <div className="flex items-start gap-2">
                                    <span className="shrink-0 rounded-md bg-zinc-200/80 px-1.5 py-0.5 font-mono font-bold text-[10px] text-zinc-700">
                                      P{item.idNumber ?? idx + 1}
                                    </span>
                                    <p className="font-semibold text-zinc-800 leading-snug">
                                      {item.problem}
                                    </p>
                                  </div>
                                  <div className="flex items-start gap-2 border-l-2 border-rose-300 pl-2 ml-2">
                                    <span className="shrink-0 font-bold text-[11px] text-rose-600">
                                      &rarr;
                                    </span>
                                    <p className="leading-snug text-zinc-600">
                                      {item.solution}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                </BlurFade>

                {/* Block 2: Technical Stack (Section 3: Tools & Method) */}
                <BlurFade delay={0.25} inView>
                  <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs sm:p-7 space-y-6">
                    <CardContent className="p-0 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs tracking-wider uppercase">
                          <Layers className="size-3.5" />
                          <span>Section 3: Tools &amp; Method</span>
                        </div>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                          Technical Stack
                        </h2>
                      </div>

                      <div className="space-y-4">
                        {cs.stackGroups.map((group) => (
                          <div key={group.category} className="space-y-2">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                              {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                              {group.items.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 py-1 font-medium text-xs text-zinc-800 transition-colors hover:border-rose-200 hover:bg-rose-50/60 hover:text-rose-700"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              </div>

              {/* RIGHT COLUMN: Methodology & Results/Output */}
              <div className="space-y-8">
                {/* Block 3: Objectives & Methodology */}
                <BlurFade delay={0.22} inView>
                  <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs sm:p-7 space-y-6">
                    <CardContent className="p-0 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs tracking-wider uppercase">
                          <Workflow className="size-3.5" />
                          <span>Methodology &amp; Strategy</span>
                        </div>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                          Objectives &amp; Methodology
                        </h2>
                      </div>

                      {/* Objectives */}
                      <div className="space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Objectives
                        </h3>
                        <ul className="space-y-2 text-sm text-zinc-600">
                          {cs.objectives.map((obj) => (
                            <li key={obj} className="flex items-start gap-2.5">
                              <Target className="mt-0.5 size-4 shrink-0 text-rose-600" />
                              <span className="leading-snug">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution & Architecture */}
                      <div className="space-y-1.5 pt-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Solution &amp; Architecture
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.solution}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>

                {/* Block 4: Results & Output (Scope of Work / Achievements) */}
                <BlurFade delay={0.28} inView>
                  <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs sm:p-7 space-y-6">
                    <CardContent className="p-0 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs tracking-wider uppercase">
                          <ShieldCheck className="size-3.5" />
                          <span>
                            Section 2: Scope of Work &amp; Achievements
                          </span>
                        </div>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                          Results &amp; Output
                        </h2>
                      </div>

                      {/* Outcomes */}
                      <div className="space-y-2.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Outcomes &amp; Delivered Features
                        </h3>
                        <ul className="space-y-2 text-sm text-zinc-600">
                          {cs.outcomes.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-2.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Key Achievements &amp; Engineering Rigor
                        </h3>
                        <ul className="space-y-2 text-sm text-zinc-600">
                          {cs.keyAchievements.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <div className="mt-1 size-1.5 shrink-0 rounded-full bg-rose-600" />
                              <span className="leading-snug font-medium text-zinc-800">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      {cs.impact && (
                        <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4 space-y-1">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">
                            Impact &amp; Key Value
                          </h4>
                          <p className="text-xs leading-relaxed text-rose-950">
                            {cs.impact}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </BlurFade>
              </div>
            </div>

            {/* Section: Future Roadmap & Next Steps */}
            {cs.futurePlans && cs.futurePlans.length > 0 && (
              <BlurFade delay={0.3} inView>
                <div className="mt-12 space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-rose-600 font-semibold text-xs tracking-wider uppercase">
                      <Rocket className="size-3.5" />
                      <span>Future Roadmap &amp; Next Steps</span>
                    </div>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                      Rencana Pengembangan Masa Depan
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cs.futurePlans.map((plan) => (
                      <Card
                        key={plan.title}
                        className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300 hover:shadow-sm"
                      >
                        <CardContent className="p-0 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-sm text-zinc-900">
                              {plan.title}
                            </h4>
                            <span className="rounded-full border border-rose-200/80 bg-rose-50/70 px-2.5 py-0.5 text-[11px] font-semibold text-rose-700">
                              {plan.tag}
                            </span>
                          </div>
                          {plan.description && (
                            <p className="text-xs text-zinc-600 leading-relaxed">
                              {plan.description}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}
          </>
        ) : (
          <BlurFade delay={0.2} inView>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Project Overview &amp; Background
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                <p>{project.description}</p>
              </div>
            </section>
          </BlurFade>
        )}

        <Separator className="my-14" />

        {/* Section: Explore Other Projects */}
        <BlurFade delay={0.35} inView>
          <section className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
                <Compass className="size-4" />
                <span>Explore More</span>
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Other Featured Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherProjects.map((other) => (
                <Card
                  key={other.id}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-all hover:border-zinc-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          other.category === "Fullstack"
                            ? "crimson"
                            : "secondary"
                        }
                        className="text-[11px]"
                      >
                        {other.category}
                      </Badge>
                      <span className="text-xs font-medium text-zinc-400">
                        Featured
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-zinc-900 transition-colors group-hover:text-rose-600">
                      {other.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                      {other.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <Link
                      href={`/projects/${other.slug}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "w-full rounded-lg text-xs font-semibold hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600",
                      )}
                    >
                      View Case Study
                      <ArrowRight className="ms-1.5 size-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </BlurFade>

        <Separator className="my-14" />

        {/* Bottom CTA Banner */}
        <BlurFade delay={0.4} inView>
          <div className="rounded-2xl border border-rose-200/80 bg-linear-to-br from-rose-50/50 via-white to-zinc-50 p-8 text-center sm:p-12 shadow-xs">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Have a project in mind or want to build something together?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              I am open to full-time roles, contracts, and discussing innovative
              software products.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 shadow-xs hover:shadow-md",
                )}
              >
                Let&apos;s Talk
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="/#projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-6 hover:border-zinc-300 hover:bg-white",
                )}
              >
                Browse All Projects
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
