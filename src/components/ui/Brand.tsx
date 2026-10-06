import Link from "next/link";

interface BrandProps {
  closeMenu?: () => void;
}

export default function Brand({ closeMenu }: BrandProps) {
  return (
    <Link
      href="/"
      onClick={closeMenu}
      className="text-lg font-bold tracking-tight text-zinc-900 transition-colors hover:text-rose-600"
    >
      Diba Portfolio<span className="text-rose-600">.</span>
    </Link>
  );
}
