import Image from "next/image";
import HashNavLink from "./HashNavLink";

export type Product = {
  name: string;
  specs: string;
  price: string;
  imageSrc: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-shine group relative flex flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sky-500/25 hover:shadow-[0_28px_56px_-24px_rgba(37,99,235,0.35)]">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0c1929] to-[#020617] p-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(56,189,248,0.12),transparent_55%)]" />
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] overflow-hidden rounded-xl">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 280px"
            priority={false}
          />
        </div>
        <div className="relative mt-4 flex items-center justify-between gap-2">
          <span className="rounded-full border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-200/90">
            In stock
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Gaming / Work
          </span>
        </div>
      </div>

      <div className="relative mt-5 flex flex-1 flex-col">
        <h3 className="font-display text-lg font-bold tracking-tight text-white">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {product.specs}
        </p>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-white/[0.06] pt-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              From
            </div>
            <div className="font-display text-2xl font-extrabold tracking-tight text-white">
              {product.price}
            </div>
          </div>

          <HashNavLink
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-4 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_-4px_rgba(37,99,235,0.65)] ring-1 ring-white/10 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_28px_-2px_rgba(56,189,248,0.4)]"
            aria-label={`Inquire about ${product.name}`}
          >
            Inquire Now
          </HashNavLink>
        </div>
      </div>
    </article>
  );
}
