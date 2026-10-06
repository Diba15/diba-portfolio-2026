import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-semibold text-rose-700">
        <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
        Available for new projects
      </div>

      <h1 className="mt-8 max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
        Building thoughtful, performant web experiences
        <span className="text-rose-600">.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
        Frontend Developer focusing on modern React, Next.js, and clean software
        architecture.
      </p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <Link
          href="/#projects"
          className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
        >
          View Projects
        </Link>
        <Link
          href="/#contact"
          className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
