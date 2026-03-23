import Image from "next/image";
import Link from "next/link";

export type Product = {
  name: string;
  specs: string;
  price: string;
  imageSrc: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition-transform hover:-translate-y-1 hover:bg-white/10">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#061A33] border border-white/10">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            className="object-contain p-2"
            priority={false}
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-white">
            {product.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-white/70">
            {product.specs}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50">
            Price
          </div>
          <div className="text-2xl font-bold text-white">{product.price}</div>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1D4ED8]/20 transition-colors hover:bg-[#1E40AF]"
          aria-label={`Inquire about ${product.name}`}
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
}

