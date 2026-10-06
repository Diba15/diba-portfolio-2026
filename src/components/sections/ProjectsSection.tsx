import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { projectsData } from "@/data/projectsData";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full border-t border-zinc-200/80 bg-zinc-50/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            Featured Projects
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Selected Applications & Platforms
            <span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            A curated showcase of applications I&apos;ve built, ranging from
            fullstack escrow solutions to client-side persistent productivity
            tools.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <BlurFade key={project.id} delay={0.15 * index} inView>
              <Card className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                {/* Visual Header / Mockup Preview */}
                <div>
                  <div className="relative flex h-48 w-full flex-col justify-between overflow-hidden border-b border-zinc-100 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 p-4 text-white">
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
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />
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
                        Featured
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-rose-600">
                      {project.title}
                    </h3>

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

                {/* Card Action Buttons */}
                <div className="flex items-center gap-3 border-t border-zinc-100 bg-zinc-50/50 p-6 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "flex-1 rounded-lg text-xs font-semibold shadow-xs",
                      )}
                    >
                      <ExternalLink className="mr-1.5 size-3.5" />
                      Website
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "flex-1 rounded-lg text-xs font-semibold hover:border-zinc-300 hover:bg-white hover:text-rose-600",
                      )}
                    >
                      <GithubIcon className="mr-1.5 size-3.5" />
                      GitHub
                    </a>
                  )}
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
                  Want to explore more repositories & experiments?
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-600">
                  Browse through all my open-source projects, algorithms, and
                  development repositories on GitHub.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://github.com/dimaabagas73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 shadow-sm transition-all hover:shadow-md",
                  )}
                >
                  <GithubIcon className="mr-2 size-4" />
                  Explore on GitHub
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
      </div>
    </section>
  );
}
