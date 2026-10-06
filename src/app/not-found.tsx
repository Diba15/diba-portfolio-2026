import { Compass, Home, Sparkles } from "lucide-react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[78vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <BlurFade delay={0.05} inView>
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            <Sparkles className="size-3.5" />
            404 Error
          </div>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          {/* Large 404 Display */}
          <h1 className="mt-6 font-black text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-rose-600 via-rose-500 to-zinc-300 select-none sm:text-9xl">
            404
          </h1>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Page Not Found
            <span className="text-rose-600">.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved, renamed, or perhaps the link you followed is
            broken.
          </p>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          {/* Action Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 shadow-xs transition-all hover:shadow-md",
              )}
            >
              <Home className="mr-2 size-4" />
              Back to Home
            </Link>

            <Link
              href="/#projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50",
              )}
            >
              <Compass className="mr-2 size-4 text-rose-600" />
              View Projects
            </Link>
          </div>

          {/* Quick Contact Help */}
          <p className="mt-10 text-xs text-zinc-400">
            Lost or looking for something specific?{" "}
            <Link
              href="/#contact"
              className="font-medium text-rose-600 hover:underline"
            >
              Send me a message
            </Link>
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
