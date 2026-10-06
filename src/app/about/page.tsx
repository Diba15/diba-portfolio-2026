"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { certificationData, educationData, skillsData } from "@/data/aboutData";
import { profileData } from "@/data/profileData";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Back Link */}
        <BlurFade delay={0.05} inView>
          <div className="mb-10">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "-ml-3 inline-flex items-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
              )}
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </div>
        </BlurFade>

        {/* Hero / Profile Header */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
                <Sparkles className="size-3.5" />
                About Me
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
                {profileData.fullName}
                <span className="text-rose-600">.</span>
              </h1>
              <p className="mt-2 text-lg font-medium text-rose-600">
                {profileData.title} • Nickname: &quot;{profileData.nickName}
                &quot;
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                {profileData.headline}
              </p>

              {/* Status Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  {profileData.availability}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  <MapPin className="size-3 text-zinc-500" />
                  {profileData.location} (GMT+7)
                </span>
              </div>
            </div>

            {/* Quick Initials Box */}
            <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 font-extrabold text-2xl text-rose-600 shadow-xs sm:size-28 sm:text-3xl">
              DB
            </div>
          </div>
        </BlurFade>

        <Separator className="my-14" />

        {/* Section 1: Full Biography & Philosophy */}
        <BlurFade delay={0.15} inView>
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Biography & Engineering Philosophy
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">
              <p>{profileData.fullBio}</p>
              <p>
                My development workflow centers around building reliable,
                type-safe, and highly accessible user interfaces. I strongly
                value clean architecture principles (SOLID &amp; DRY) paired
                with pragmatic minimalism (KISS &amp; YAGNI). Every component is
                crafted with consideration for performance, search visibility,
                and seamless interaction design.
              </p>
              <p>
                Whether architecting dynamic single-page applications or
                integrating robust REST APIs, I prioritize delightful end-user
                experiences and maintainable, scalable codebases.
              </p>
            </div>
          </section>
        </BlurFade>

        <Separator className="my-14" />

        {/* Section 2: Education */}
        <BlurFade delay={0.2} inView>
          <section id="education" className="scroll-mt-24 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
                <GraduationCap className="size-5" />
                <span>Academic Journey</span>
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Education
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Formal computer science degrees and specialized software
                engineering training.
              </p>
            </div>

            <div className="space-y-6">
              {educationData.map((edu) => (
                <Card
                  key={edu.id}
                  className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xs transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">
                          {edu.degree}
                        </h3>
                        <p className="text-base font-medium text-rose-600">
                          {edu.institution}
                        </p>
                        {edu.location && (
                          <p className="mt-0.5 text-xs text-zinc-400">
                            {edu.location}
                          </p>
                        )}
                      </div>
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                        <Calendar className="size-3 text-zinc-400" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Descriptions */}
                    {edu.descriptions && (
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600">
                        {edu.descriptions.map((desc) => (
                          <li key={desc} className="flex items-start gap-2">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-500" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Chips */}
                    {edu.techStack && (
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100">
                        {edu.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-md font-medium text-[11px]"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </BlurFade>

        <Separator className="my-14" />

        {/* Section 3: Certifications */}
        <BlurFade delay={0.25} inView>
          <section id="certificates" className="scroll-mt-24 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
                <Award className="size-5" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Certifications &amp; Licenses
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Official certifications in relational database systems and
                software design principles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificationData.map((cert) => (
                <MagicCard
                  key={cert.id}
                  gradientColor="#ffe4e6"
                  gradientFrom="#e11d48"
                  gradientTo="#fb7185"
                  gradientSize={280}
                  className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 p-6 shadow-xs transition-all hover:border-zinc-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-700">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-medium text-zinc-400">
                        {cert.issueDate}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-tight text-zinc-900">
                      {cert.title}
                    </h3>

                    {cert.techStack && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cert.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <div className="mt-6 pt-4 border-t border-zinc-100">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "w-full rounded-lg text-xs font-semibold hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600",
                        )}
                      >
                        <ExternalLink className="mr-1.5 size-3.5" />
                        Verify Credential
                      </a>
                    </div>
                  )}
                </MagicCard>
              ))}
            </div>
          </section>
        </BlurFade>

        <Separator className="my-14" />

        {/* Section 4: Comprehensive Skills Matrix (Using Tabs) */}
        <BlurFade delay={0.3} inView>
          <section id="skills" className="scroll-mt-24 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
                <Code2 className="size-5" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                Comprehensive Skills Matrix
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Categorized overview of frameworks, languages, tools, and
                architectural workflows.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6 flex flex-wrap h-auto gap-2 bg-zinc-100/80 p-1.5 rounded-xl border border-zinc-200/80">
                <TabsTrigger
                  value="all"
                  className="rounded-lg px-4 py-2 text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-xs"
                >
                  All Skills
                </TabsTrigger>
                {skillsData.map((cat) => (
                  <TabsTrigger
                    key={cat.category}
                    value={cat.category}
                    className="rounded-lg px-4 py-2 text-xs font-semibold data-[state=active]:bg-white data-[state=active]:text-rose-600 data-[state=active]:shadow-xs"
                  >
                    {cat.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* All Skills Tab */}
              <TabsContent value="all" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {skillsData.map((cat) => (
                    <Card
                      key={cat.category}
                      className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs"
                    >
                      <h3 className="text-base font-bold text-zinc-900 border-b border-zinc-100 pb-3">
                        {cat.category}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-zinc-50/70 px-3 py-1.5 text-xs"
                          >
                            <span className="font-medium text-zinc-800">
                              {skill.name}
                            </span>
                            {skill.level && (
                              <span
                                className={cn(
                                  "rounded px-1.5 py-0.2 text-[10px] font-semibold",
                                  skill.level === "Advanced"
                                    ? "bg-rose-50 text-rose-600"
                                    : "bg-zinc-200/60 text-zinc-600",
                                )}
                              >
                                {skill.level}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Individual Category Tabs */}
              {skillsData.map((cat) => (
                <TabsContent key={cat.category} value={cat.category}>
                  <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-xs">
                    <h3 className="text-lg font-bold text-zinc-900 border-b border-zinc-100 pb-3">
                      {cat.category}
                    </h3>
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-3.5 transition-colors hover:border-rose-200 hover:bg-rose-50/30"
                        >
                          <span className="font-semibold text-sm text-zinc-900">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <Badge
                              variant={
                                skill.level === "Advanced"
                                  ? "crimson"
                                  : "secondary"
                              }
                              className="text-[10px]"
                            >
                              {skill.level}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </BlurFade>

        <Separator className="my-14" />

        {/* Bottom CTA Banner */}
        <BlurFade delay={0.35} inView>
          <div className="rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/50 via-white to-zinc-50 p-8 text-center sm:p-12 shadow-xs">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Interested in collaborating or discussing an opportunity?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              I am always eager to take on new software challenges and craft
              impactful web applications.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 shadow-xs hover:shadow-md",
                )}
              >
                <Mail className="mr-2 size-4" />
                Get In Touch
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="/#projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-6 hover:border-zinc-300 hover:bg-white",
                )}
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
