import Image from "next/image";
import HashNavLink from "./components/HashNavLink";
import ContactForm from "./components/ContactForm";
import ProductCard, { type Product } from "./components/ProductCard";
import RevealOnScroll from "./components/RevealOnScroll";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import { getMapsEmbedUrl, site } from "@/lib/site";

function IconLaptop() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3.5" y="4.5" width="17" height="13" rx="2" />
      <path d="M7 20h10" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M14.5 6.5a4 4 0 0 0-5.8 5.2L3.7 16.7a2 2 0 0 0 2.8 2.8l4.9-5a4 4 0 0 0 5.2-5.8Z" />
      <path d="M15.5 5.5 18.5 2.5" />
    </svg>
  );
}

function IconMemory() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 10h.01" />
      <path d="M12 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h8" />
    </svg>
  );
}

function IconDrive() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7" />
      <path d="M9.5 11.5h.01" />
    </svg>
  );
}

function IconThermal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M10 2v6l-3 4a6 6 0 1 0 10 0l-3-4V2" />
      <path d="M12 12v4" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 2 20 6v6c0 5-3.6 9.6-8 10-4.4-.4-8-5-8-10V6l8-4Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

/** Real laptop photos (Unsplash — free to use under the Unsplash License). */
const products: Product[] = [
  {
    name: "Lenovo Legion 5",
    specs: "Ryzen 7, RTX 3070, 16GB RAM",
    price: "₱55,000",
    imageSrc:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "ASUS TUF Gaming",
    specs: "i5, RTX 3050, 16GB RAM",
    price: "₱45,000",
    imageSrc:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Acer Nitro 5",
    specs: "Ryzen 5, GTX 1650",
    price: "₱35,000",
    imageSrc:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "HP Victus",
    specs: "i5, RTX 3050",
    price: "₱48,000",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section id="home" className="scroll-mt-28">
          <div className="relative overflow-hidden border-b border-white/[0.06]">
            <div className="absolute inset-0 bg-tech-grid opacity-[0.35]" aria-hidden />
            <div
              className="pointer-events-none absolute -left-24 top-1/2 h-[120%] w-px -translate-y-1/2 rotate-[12deg] bg-gradient-to-b from-transparent via-sky-500/25 to-transparent motion-pulse-soft"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]"
              aria-hidden
            />

            <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
              <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
                <div className="motion-fade-rise">
                  <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm text-slate-200 shadow-inner shadow-black/20 ring-1 ring-white/[0.04]">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                    </span>
                    <span className="min-w-0 leading-snug">
                      IT-grade laptops · upgrades · repairs
                    </span>
                  </div>

                  {/* Solid colors only — gradient clip-text can render invisible in some browsers */}
                  <h1 className="font-display motion-fade-rise motion-delay-1 mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white drop-shadow-sm">The Bro</span>
                    <span className="mt-1 block text-sky-300 drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                      Laptop Store
                    </span>
                  </h1>

                  <p className="motion-fade-rise motion-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                    Based in <span className="font-semibold text-slate-300">Pasig City</span>. Quality
                    laptops, affordable prices, trusted service.
                  </p>

                  <div className="motion-fade-rise motion-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <HashNavLink
                      href="/#products"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_32px_-6px_rgba(37,99,235,0.75)] ring-1 ring-white/10 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_rgba(56,189,248,0.45)]"
                    >
                      View Products
                    </HashNavLink>
                    <HashNavLink
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/25 ring-1 ring-white/[0.06] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-white/[0.07]"
                    >
                      Contact Us
                    </HashNavLink>
                  </div>

                  <div className="motion-fade-rise motion-delay-4 mt-12 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Affordable pricing", value: "Student-friendly deals" },
                      { label: "Trusted service", value: "Diagnostics + honesty" },
                      { label: "Upgrades", value: "RAM · SSD · Cooling" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-4 ring-1 ring-white/[0.04]"
                      >
                        <div className="font-display text-sm font-bold text-white">{item.label}</div>
                        <div className="mt-1 text-xs leading-relaxed text-slate-400">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative motion-fade-rise motion-delay-2 lg:justify-self-end">
                  <div
                    className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-transparent to-blue-700/10 blur-2xl"
                    aria-hidden
                  />
                  <div className="relative -rotate-1 rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[0_32px_64px_-34px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.06] sm:p-8 lg:rotate-0 lg:rounded-[2.25rem]">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-sky-400/95">
                          Featured
                        </div>
                        <div className="mt-2 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                          Gaming-ready builds
                        </div>
                        <div className="mt-1 max-w-[18rem] text-sm text-slate-400">
                          Performance you can feel — with upgrade paths when you’re ready.
                        </div>
                      </div>
                      <span className="rounded-2xl border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-sky-200/95">
                        Support
                      </span>
                    </div>

                    <div className="mt-7 flex items-center justify-center">
                      <div className="relative aspect-[5/4] w-full max-w-sm overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0b1f36] via-[#061226] to-[#020617] shadow-inner shadow-black/40">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.18),transparent_60%)]" />
                        <Image
                          src={products[0].imageSrc}
                          alt={products[0].name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 400px"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-3">
                      {[
                        { label: "Fast setup", value: "Same-day options" },
                        { label: "Tech support", value: "Real humans" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-white/[0.08] bg-black/25 p-4 ring-1 ring-white/[0.04]"
                        >
                          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            {stat.label}
                          </div>
                          <div className="mt-1 font-display text-base font-bold text-white">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-28 relative py-20 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#030a18] to-[#020617]" aria-hidden />
          <div className="absolute inset-0 bg-tech-grid opacity-25" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Products"
                title="Laptops built for work and play"
                description="Affordable options with upgrade-friendly performance. Tap “Inquire Now” and we’ll help you pick the right machine."
              />

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
              <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-600">
                Photos are real web images (Unsplash) for display.                 Message us on{" "}
                <a
                  href={site.messengerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400/90 underline decoration-sky-500/30 underline-offset-2 hover:text-sky-300"
                >
                  Messenger
                </a>{" "}
                or text{" "}
                <a
                  href={site.smsUrl}
                  className="text-sky-400/90 underline decoration-sky-500/30 underline-offset-2 hover:text-sky-300"
                >
                  {site.phoneDisplay}
                </a>{" "}
                for photos of units in stock.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-28 relative py-20 sm:py-24">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050f24] to-[#020617]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/25 to-transparent"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll delayMs={40}>
              <SectionHeading
                eyebrow="Services"
                title="Upgrades, repair, and maintenance"
                description="From selling to cooling and checkups — we keep your laptop reliable for the long haul."
              />

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Laptop Selling"
                icon={<IconLaptop />}
                description="Curated picks for students, gamers, and professionals."
              />
              <ServiceCard
                title="Laptop Repair"
                icon={<IconWrench />}
                description="Troubleshooting, parts replacement, and diagnostics."
              />
              <ServiceCard
                title="RAM Upgrade"
                icon={<IconMemory />}
                description="Boost multitasking with reliable memory upgrades."
              />
              <ServiceCard
                title="SSD Upgrade"
                icon={<IconDrive />}
                description="Faster boot times and improved everyday performance."
              />
              <ServiceCard
                title="Cleaning & Thermal Repaste"
                icon={<IconThermal />}
                description="Reduce temps and keep your system stable under load."
              />
              <ServiceCard
                title="Laptop Checkup"
                icon={<IconShield />}
                description="Quick inspection and honest recommendations."
              />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 relative py-20 sm:py-24">
          <div className="absolute inset-0 bg-[#020617]" aria-hidden />
          <div className="absolute inset-0 bg-tech-grid opacity-20" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll delayMs={80}>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="About us"
                  title="Reliable tech at the best price"
                  description={`${site.name} provides affordable and quality laptops for students, gamers, and professionals. We also offer upgrades, repair, and maintenance services. Our goal is to provide reliable technology at the best price.`}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  {
                    title: "Quality-first",
                    desc: "We prioritize stable performance and dependable parts.",
                  },
                  {
                    title: "Upgrade-friendly",
                    desc: "RAM and SSD upgrades explained clearly — no jargon traps.",
                  },
                  {
                    title: "Trusted service",
                    desc: "Diagnostics and maintenance you can count on.",
                  },
                  {
                    title: "Local mindset",
                    desc: "Built for real budgets — students, gamers, and pros alike.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="card-shine rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 shadow-[0_20px_44px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04]"
                  >
                    <div className="font-display text-lg font-extrabold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 relative border-t border-white/[0.06] py-20 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#041024] to-[#020617]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll delayMs={120}>
            <SectionHeading
              eyebrow="Contact us"
              title="Get a quote or book a checkup"
              description="Send your inquiry — we’ll respond as soon as possible."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-start">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              <aside className="space-y-6 lg:col-span-2">
                <div className="rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_24px_48px_-32px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] sm:p-7">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone
                  </div>
                  <div className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                    <a
                      className="text-white transition-colors hover:text-sky-300"
                      href={`tel:${site.phoneTel}`}
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Call or message us for laptop questions and service availability.
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_24px_48px_-32px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] sm:p-7">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Social
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={site.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm font-bold text-white ring-1 ring-white/[0.05] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-white/[0.07]"
                    >
                      Facebook Page
                    </a>
                    <a
                      href={site.messengerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-4 py-3 text-sm font-bold text-white shadow-[0_0_24px_-6px_rgba(37,99,235,0.65)] ring-1 ring-white/10 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_32px_-4px_rgba(56,189,248,0.4)]"
                    >
                      Messenger
                    </a>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-500">
                    Same store on Facebook — chat on Messenger or reach us at{" "}
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="text-sky-400/90 underline decoration-sky-500/30 underline-offset-2 hover:text-sky-300"
                    >
                      {site.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_24px_48px_-32px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05] sm:p-7">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Store location
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.1] ring-1 ring-white/[0.05]">
                    <iframe
                      title="Store location map"
                      className="h-64 w-full"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={getMapsEmbedUrl()}
                    />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    Serving <span className="text-slate-400">{site.mapsQuery}</span> and nearby areas.
                  </p>
                </div>
              </aside>
            </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
    </div>
  );
}
