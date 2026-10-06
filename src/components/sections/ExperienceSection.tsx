import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card } from "@/components/ui/card";
import { experienceData } from "@/data/experienceData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full border-t border-zinc-200/80 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            Career Journey
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Work Experience & History<span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            A chronological timeline of my professional roles, engineering
            responsibilities, and technical contributions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative ml-4 space-y-12 border-l-2 border-rose-200 pl-6 sm:ml-8 sm:pl-10">
          {experienceData.map((exp, index) => (
            <BlurFade key={exp.id} delay={0.15 * index} inView>
              <div className="group relative">
                {/* Node point */}
                <div className="absolute -left-[31px] top-6 size-4 rounded-full border-2 border-white bg-rose-600 shadow-xs ring-4 ring-rose-100 transition-transform duration-300 group-hover:scale-125 sm:-left-[47px] sm:size-5" />

                <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md sm:p-8">
                  {/* Header info */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-rose-600">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-rose-600">
                        <Building2 className="size-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                        <Calendar className="size-3.5 text-zinc-500" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge
                        variant={
                          exp.type === "Contract" ? "crimson" : "secondary"
                        }
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Descriptions list */}
                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-600">
                    {exp.descriptions.map((desc) => (
                      <li key={desc} className="flex items-start gap-2.5">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-600" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-zinc-100 pt-5">
                    <span className="mr-1 text-xs font-semibold text-zinc-500">
                      Technologies:
                    </span>
                    {exp.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-zinc-50/50 text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
