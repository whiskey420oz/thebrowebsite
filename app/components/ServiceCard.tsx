import type React from "react";

export default function ServiceCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="card-shine group relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-6 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.04] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sky-500/20 hover:shadow-[0_24px_48px_-22px_rgba(37,99,235,0.28)]">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-600/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex items-start gap-4">
        <div className="relative mt-0.5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-500/20 bg-gradient-to-br from-[#0c1929] to-[#020617] text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05] transition-transform duration-300 group-hover:scale-[1.05]">
          <span className="absolute inset-0 rounded-2xl bg-sky-400/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">{icon}</span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold tracking-tight text-white">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </div>
  );
}
