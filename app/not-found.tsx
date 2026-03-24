import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <div className="absolute inset-0 bg-tech-grid opacity-20" aria-hidden />
      <div className="relative max-w-lg">
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-sky-400/90">
          404
        </p>
        <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-slate-400 leading-relaxed">
          That link doesn’t exist on {site.name}. Head back home or jump to products.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-6 py-3 text-sm font-bold text-white shadow-[0_0_28px_-6px_rgba(37,99,235,0.75)] ring-1 ring-white/10 transition-[transform,box-shadow] hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-bold text-white ring-1 ring-white/[0.06] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-white/[0.07]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
