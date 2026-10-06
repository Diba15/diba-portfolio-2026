"use client";

import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectImageSlideProps {
  src: string;
  alt: string;
  title: string;
}

export function ProjectImageSlide({ src, alt, title }: ProjectImageSlideProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative aspect-video w-full flex flex-col items-center justify-center p-6 text-center bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white select-none">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-rose-400 mb-3 shadow-inner">
          <ImageIcon className="size-7" />
        </div>
        <p className="font-semibold text-base text-zinc-100">{title} Preview</p>
        <p className="mt-1 text-xs text-zinc-400 font-mono">
          Place file at: <span className="text-rose-300">{src}</span>
        </p>
        <span className="mt-3 inline-flex items-center rounded-full bg-rose-500/15 px-3 py-1 text-[11px] font-medium text-rose-300 border border-rose-500/25">
          Ready for image upload in public/
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        onError={() => setHasError(true)}
        className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
      />
    </div>
  );
}
