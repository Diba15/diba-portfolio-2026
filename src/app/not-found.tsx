import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center font-sans text-zinc-900">
        <h1 className="font-extrabold text-6xl text-rose-600 sm:text-7xl">
          404
        </h1>
        <h2 className="mt-4 font-bold text-2xl text-zinc-900 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-2 max-w-md text-sm text-zinc-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/en"
          className="mt-6 inline-flex items-center rounded-full bg-rose-600 px-6 py-2.5 font-semibold text-sm text-white shadow-xs transition-colors hover:bg-rose-700"
        >
          Return to Home
        </Link>
      </body>
    </html>
  );
}
