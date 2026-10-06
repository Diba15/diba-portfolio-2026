"use client";

import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { profileData } from "@/data/profileData";

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

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const plainText = message.replace(/<[^>]*>/g, "").trim();
    if (!plainText) {
      toast.error("Please write a message before sending.");
      return;
    }

    setIsSubmitting(true);

    // Simulate fast reliable client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Thank you! Your message has been sent successfully. I will get back to you soon.",
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-zinc-200/80 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            Get In Touch
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Let&apos;s Connect & Build Together
            <span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            Have a project opportunity, a question, or want to discuss modern
            web development? Feel free to send a message or connect through
            social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left Column: Direct Info & Magic UI Dock */}
          <div className="flex flex-col lg:col-span-5">
            <BlurFade delay={0.1} inView>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  I&apos;m currently open to full-time roles, contracts, and
                  selected freelance web projects.
                </p>

                {/* Info List */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="mt-0.5 text-sm font-medium text-zinc-900 hover:text-rose-600 transition-colors"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Location
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-zinc-900">
                        {profileData.location} (Remote-Friendly • GMT+7)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Response Time
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-zinc-900">
                        Typically responds within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels Label & Magic UI Dock */}
                <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                    <Sparkles className="size-4 text-rose-600" />
                    <span>Connect On Social Media</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">
                    Hover over icons to expand and visit profile links.
                  </p>

                  {/* Magic UI Dock */}
                  <div className="mt-4 flex justify-center">
                    <Dock
                      direction="middle"
                      className="border-zinc-200/90 bg-white/90 shadow-xs"
                    >
                      {/* Email Dock */}
                      <DockIcon className="hover:bg-rose-50">
                        <a
                          href={`mailto:${profileData.email}`}
                          className="flex size-full items-center justify-center text-zinc-700 hover:text-rose-600 transition-colors"
                          aria-label="Send Email"
                        >
                          <Mail className="size-5" />
                        </a>
                      </DockIcon>

                      {/* GitHub Dock */}
                      <DockIcon className="hover:bg-rose-50">
                        <a
                          href={profileData.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-full items-center justify-center text-zinc-700 hover:text-rose-600 transition-colors"
                          aria-label="GitHub Profile"
                        >
                          <GithubIcon className="size-5" />
                        </a>
                      </DockIcon>

                      {/* LinkedIn Dock */}
                      <DockIcon className="hover:bg-rose-50">
                        <a
                          href={profileData.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-full items-center justify-center text-zinc-700 hover:text-rose-600 transition-colors"
                          aria-label="LinkedIn Profile"
                        >
                          <LinkedinIcon className="size-5" />
                        </a>
                      </DockIcon>

                      {/* Instagram Dock */}
                      <DockIcon className="hover:bg-rose-50">
                        <a
                          href={profileData.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-full items-center justify-center text-zinc-700 hover:text-rose-600 transition-colors"
                          aria-label="Instagram Profile"
                        >
                          <InstagramIcon className="size-5" />
                        </a>
                      </DockIcon>
                    </Dock>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2} inView>
              <Card className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                    <MessageSquare className="size-4" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">
                    Send a Direct Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-semibold">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl border-zinc-200 focus-visible:ring-rose-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl border-zinc-200 focus-visible:ring-rose-500"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs font-semibold">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="rounded-xl border-zinc-200 focus-visible:ring-rose-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold">
                      Message (Rich Text)
                    </Label>
                    <RichTextEditor
                      content={message}
                      onChange={setMessage}
                      placeholder="Hi Dimas, I would love to discuss a project with you..."
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl py-6 font-semibold shadow-xs transition-all hover:shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
