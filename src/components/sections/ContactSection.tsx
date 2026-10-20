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
import { useLocale, useTranslations } from "next-intl";
import { type SubmitEvent, useState } from "react";
import { toast } from "sonner";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/assets/icons";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { getProfileData } from "@/data/profileData";
import { sendContactEmail } from "@/lib/contact";

export default function ContactSection() {
  const locale = useLocale();
  const t = useTranslations("contactSection");
  const profile = getProfileData(locale);
  const isId = locale === "id";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const plainText = message.replace(/<[^>]*>/g, "").trim();
    if (!name.trim() || !email.trim() || !subject.trim()) {
      toast.error(
        isId
          ? "Harap isi semua kolom yang diperlukan."
          : "Please fill in all required fields.",
      );
      return;
    }
    if (!plainText) {
      toast.error(
        isId
          ? "Harap tulis pesan terlebih dahulu."
          : "Please write a message before sending.",
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      if (result.success) {
        toast.success(t("form.successDesc"));
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(result.error ?? t("form.errorDesc"));
      }
    } catch {
      toast.error(t("form.errorDesc"));
    } finally {
      setIsSubmitting(false);
    }
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
            {t("badge")}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            {t("title")}
            <span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left Column: Direct Info & Magic UI Dock */}
          <div className="flex flex-col lg:col-span-5">
            <BlurFade delay={0.1} inView>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  {isId ? "Informasi Kontak" : "Contact Information"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {isId
                    ? "Saya terbuka untuk posisi full-time, kontrak, maupun proyek rekayasa web terpilih."
                    : "I'm currently open to full-time roles, contracts, and selected freelance web projects."}
                </p>

                {/* Info List */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {isId ? "Alamat Email" : "Email Address"}
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-0.5 text-sm font-medium text-zinc-900 hover:text-rose-600 transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {isId ? "Lokasi" : "Location"}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-zinc-900">
                        {profile.location} (Remote-Friendly • GMT+7)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {isId ? "Waktu Respons" : "Response Time"}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-zinc-900">
                        {isId
                          ? "Biasanya merespons dalam waktu 24 jam"
                          : "Typically responds within 24 hours"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels Label & Magic UI Dock */}
                <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                    <Sparkles className="size-4 text-rose-600" />
                    <span>
                      {isId
                        ? "Terhubung di Media Sosial"
                        : "Connect On Social Media"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">
                    {isId
                      ? "Arahkan kursor ke ikon untuk melihat tautan profil."
                      : "Hover over icons to expand and visit profile links."}
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
                          href={`mailto:${profile.email}`}
                          className="flex size-full items-center justify-center text-zinc-700 hover:text-rose-600 transition-colors"
                          aria-label="Send Email"
                        >
                          <Mail className="size-5" />
                        </a>
                      </DockIcon>

                      {/* GitHub Dock */}
                      <DockIcon className="hover:bg-rose-50">
                        <a
                          href={profile.socials.github}
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
                          href={profile.socials.linkedin}
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
                          href={profile.socials.instagram}
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
                    {isId ? "Kirim Pesan Langsung" : "Send a Direct Message"}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-semibold">
                        {t("form.name")}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={t("form.namePlaceholder")}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl border-zinc-200 focus-visible:ring-rose-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold">
                        {t("form.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("form.emailPlaceholder")}
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
                      {t("form.subject")}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder={t("form.subjectPlaceholder")}
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="rounded-xl border-zinc-200 focus-visible:ring-rose-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold">
                      {t("form.message")}
                    </Label>
                    <RichTextEditor
                      content={message}
                      onChange={setMessage}
                      placeholder={t("form.messagePlaceholder")}
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
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4" />
                        {t("form.send")}
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
