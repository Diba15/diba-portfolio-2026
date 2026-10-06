"use client";

import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { profileData } from "@/data/profileData";
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

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
          {/* Left Column: Profile Info & Actions */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
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

          {/* Right Column: Profile Portrait Frame */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
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
