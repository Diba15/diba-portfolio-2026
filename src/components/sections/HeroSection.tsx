"use client";

import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/assets/icons";
import { buttonVariants } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { profileData } from "@/data/profileData";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-16 lg:py-24"
    >
      {/* Background Interactive Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        staticity={80}
        ease={80}
        size={1.2}
        color="#e11d48"
        refresh
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Profile Info & Actions Column */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/90 px-3.5 py-1.5 text-xs font-semibold text-rose-700 shadow-xs backdrop-blur-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-rose-600" />
              </span>
              {profileData.availability}
            </div>

            {/* Headline Greeting & Name */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="text-zinc-900">{profileData.fullName}</span>
            </h1>

            {/* Typing Animation for Roles */}
            <div className="mt-3 flex min-h-10 items-center text-2xl font-bold text-rose-600 sm:text-3xl">
              <TypingAnimation
                words={profileData.roles}
                loop
                className="text-rose-600"
                typeSpeed={70}
                deleteSpeed={35}
                pauseDelay={1600}
              />
            </div>

            {/* Bio Summary */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              {profileData.shortBio}
            </p>

            {/* Action Buttons & Social Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/#projects"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full shadow-md",
                )}
              >
                View Projects
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full",
                )}
              >
                Contact Me
              </Link>

              {/* Social Link Icons */}
              <div className="flex items-center gap-1 pl-2">
                <Link
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full text-zinc-600 hover:text-rose-600",
                  )}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="size-5" />
                </Link>

                <Link
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full text-zinc-600 hover:text-rose-600",
                  )}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="size-5" />
                </Link>

                <Link
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full text-zinc-600 hover:text-rose-600",
                  )}
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="size-5" />
                </Link>

                <Link
                  href={`mailto:${profileData.email}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full text-zinc-600 hover:text-rose-600",
                  )}
                  aria-label="Email Me"
                >
                  <Mail className="size-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Portrait Frame Column */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <div className="group relative">
              {/* Crimson Glow Layer */}
              <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-rose-500 to-rose-600 opacity-20 blur-2xl transition duration-500 group-hover:opacity-35" />

              {/* Outer Decorative Ring */}
              <div className="relative flex size-64 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-linear-to-b from-rose-50 to-zinc-100 shadow-2xl ring-1 ring-zinc-200/80 sm:size-80">
                {!imgError ? (
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.fullName}
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Stylized Monogram Avatar Fallback */
                  <div className="flex size-full flex-col items-center justify-center bg-linear-to-br from-rose-100 via-rose-50 to-zinc-100 text-rose-600">
                    <span className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                      DB
                    </span>
                    <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Dimas Bagas
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
