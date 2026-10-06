import {
  ArrowRight,
  Award,
  Code2,
  Globe,
  GraduationCap,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const aboutFeatures = [
  {
    Icon: Code2,
    name: "Professional Story",
    description:
      "Bachelor of Informatics Engineering graduate from Telkom University dedicated to Frontend Web Development. Passionate about crafting high-performance, accessible, and user-centric web applications.",
    href: "/about",
    cta: "Read Full Bio",
    className: "md:col-span-2 lg:col-span-2",
    background: (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 shadow-2xs">
          Telkom University
        </span>
        <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-2xs">
          Frontend Engineer
        </span>
      </div>
    ),
  },
  {
    Icon: Layers,
    name: "Core Tech Stack",
    description:
      "Crafting performant apps with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zustand client store, and TanStack Query server state.",
    href: "/about#skills",
    cta: "Explore Skills Matrix",
    className: "md:col-span-1 lg:col-span-1",
    background: (
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-800">
          React 19
        </span>
        <span className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700">
          Next.js 16
        </span>
      </div>
    ),
  },
  {
    Icon: GraduationCap,
    name: "Education & Growth",
    description:
      "S1 & D3 Teknik Informatika Telkom University, complemented by Fullstack Software Engineering at RevoU covering end-to-end architectures.",
    href: "/about#education",
    cta: "View Education Details",
    className: "md:col-span-1 lg:col-span-1",
    background: (
      <div className="flex">
        <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800">
          S1 & D3 Graduate
        </span>
      </div>
    ),
  },
  {
    Icon: Award,
    name: "Certifications",
    description:
      "Certified in Oracle Database Design & SQL Programming, and Learn SOLID Programming Principles by Dicoding Indonesia.",
    href: "/about#certificates",
    cta: "View Credentials",
    className: "md:col-span-1 lg:col-span-1",
    background: (
      <div className="flex">
        <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
          Oracle & Dicoding
        </span>
      </div>
    ),
  },
  {
    Icon: Globe,
    name: "Location & Availability",
    description:
      "Based in Indonesia (GMT+7). Remote-friendly, highly adaptable, and available for full-time roles, contracts, or select freelance projects.",
    href: "/#contact",
    cta: "Get In Touch",
    className: "md:col-span-1 lg:col-span-1",
    background: (
      <div className="flex">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Online • GMT+7
        </span>
      </div>
    ),
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full border-t border-zinc-200/80 bg-zinc-50/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            About Me
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            A Glimpse Into My Journey & Capabilities
            <span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            Combining academic computer science foundations with modern web
            engineering practices to deliver reliable digital solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="lg:grid-rows-2">
          {aboutFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        {/* Action Link to Full About Page */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-full border-zinc-300 bg-white px-6 shadow-xs hover:border-rose-300 hover:bg-rose-50/50 hover:text-rose-600",
            )}
          >
            Explore Complete Profile (Bio, Education & Skills)
            <ArrowRight className="ms-2 size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
