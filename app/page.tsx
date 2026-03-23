import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ProductCard, { type Product } from "./components/ProductCard";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";

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

const products: Product[] = [
  {
    name: "Lenovo Legion 5",
    specs: "Ryzen 7, RTX 3070, 16GB RAM",
    price: "₱55,000",
    imageSrc: "/laptops/lenovo-legion-5.svg",
  },
  {
    name: "ASUS TUF Gaming",
    specs: "i5, RTX 3050, 16GB RAM",
    price: "₱45,000",
    imageSrc: "/laptops/asus-tuf-gaming.svg",
  },
  {
    name: "Acer Nitro 5",
    specs: "Ryzen 5, GTX 1650",
    price: "₱35,000",
    imageSrc: "/laptops/acer-nitro-5.svg",
  },
  {
    name: "HP Victus",
    specs: "i5, RTX 3050",
    price: "₱48,000",
    imageSrc: "/laptops/hp-victus.svg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section id="home" className="scroll-mt-24">
          <div className="relative overflow-hidden border-b border-white/10 bg-[#030712]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,78,216,0.35),transparent_55%)]" />
            <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                    <span className="h-2 w-2 rounded-full bg-[#60A5FA]" />
                    IT-grade laptops and upgrades
                  </div>

                  <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    The Bro Laptop Store
                  </h1>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
                    Quality Laptops. Affordable Prices. Trusted Service.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/#products"
                      className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1D4ED8]/20 transition-colors hover:bg-[#1E40AF]"
                    >
                      View Products
                    </Link>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 shadow-lg shadow-black/20 transition-colors hover:bg-white/10"
                    >
                      Contact Us
                    </Link>
                  </div>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Affordable Pricing", value: "Best deals" },
                      { label: "Trusted Service", value: "Quality checks" },
                      { label: "Upgrades Available", value: "RAM / SSD / Cooling" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-sm font-semibold text-white">
                          {item.label}
                        </div>
                        <div className="mt-1 text-xs text-white/70">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(96,165,250,0.35),transparent_60%)] blur-xl" />
                  <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold tracking-widest text-[#60A5FA] uppercase">
                          Featured
                        </div>
                        <div className="mt-2 text-lg font-semibold text-white">
                          Gaming-Ready Laptops
                        </div>
                        <div className="mt-1 text-sm text-white/70">
                          Upgrades and repairs available.
                        </div>
                      </div>
                      <span className="rounded-xl bg-[#1D4ED8]/20 px-3 py-2 text-xs font-semibold text-[#93C5FD] border border-[#1D4ED8]/30">
                        Warranty Support
                      </span>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                      <div className="relative h-56 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#061A33]">
                        <Image
                          src="/laptops/lenovo-legion-5.svg"
                          alt="Featured laptop"
                          fill
                          className="object-contain p-6"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[
                        { label: "Fast Setup", value: "Ready" },
                        { label: "Tech Support", value: "On-call" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-white/10 bg-black/20 p-4"
                        >
                          <div className="text-xs text-white/60">{stat.label}</div>
                          <div className="mt-1 text-base font-semibold text-white">
                            {stat.value}
                          </div>
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
        <section id="products" className="scroll-mt-24 bg-[#030712] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Products"
              title="Laptops Built for Work and Play"
              description="Affordable options with upgrade-friendly performance. Tap “Inquire Now” to get assistance."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 py-16 sm:py-20 bg-gradient-to-b from-[#030712] to-[#040A1D]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Upgrades, Repair, and Maintenance"
              description="From selling to cooling and checkups—our team keeps your laptop running reliably."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard title="Laptop Selling" icon={<IconLaptop />} description="Curated picks for students, gamers, and professionals." />
              <ServiceCard title="Laptop Repair" icon={<IconWrench />} description="Troubleshooting, parts replacement, and diagnostics." />
              <ServiceCard title="RAM Upgrade" icon={<IconMemory />} description="Boost multitasking with reliable memory upgrades." />
              <ServiceCard title="SSD Upgrade" icon={<IconDrive />} description="Faster boot times and improved performance." />
              <ServiceCard title="Cleaning & Thermal Repaste" icon={<IconThermal />} description="Reduce temps and keep your system stable." />
              <ServiceCard title="Laptop Checkup" icon={<IconShield />} description="Quick inspection and honest recommendations." />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-16 sm:py-20 bg-[#030712]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="About Us"
              title="Reliable Tech at the Best Price"
              description="The Bro Laptop Store provides affordable and quality laptops for students, gamers, and professionals. We also offer upgrades, repair, and maintenance services. Our goal is to provide reliable technology at the best price."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Quality-First",
                  desc: "We prioritize stable performance and reliable parts.",
                },
                {
                  title: "Upgrade-Friendly",
                  desc: "RAM and SSD upgrades made practical and clear.",
                },
                {
                  title: "Trusted Service",
                  desc: "Diagnostics, repair, and maintenance you can count on.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
                >
                  <div className="text-lg font-semibold text-white">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20 bg-[#030712]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Contact Us"
              title="Get a Quote or Book a Checkup"
              description="Send us your inquiry and we’ll respond as soon as possible."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:items-start">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              <aside className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                  <div className="text-sm font-semibold text-white">
                    Phone Number
                  </div>
                  <div className="mt-3 text-lg font-bold">
                    <a
                      className="text-white hover:text-[#60A5FA] transition-colors"
                      href="tel:+639123456789"
                    >
                      +63 912 345 6789
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    Call or message us for laptop questions and service availability.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                  <div className="text-sm font-semibold text-white">Social</div>
                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
                    >
                      Facebook Page
                    </a>
                    <a
                      href="https://m.me/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1D4ED8]/20 hover:bg-[#1E40AF] transition-colors"
                    >
                      Messenger
                    </a>
                  </div>
                  <p className="mt-4 text-xs text-white/60">
                    Replace the links with your real Facebook/Messenger URLs.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                  <div className="text-sm font-semibold text-white">
                    Store Location
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                    <iframe
                      title="Store Location"
                      className="h-64 w-full"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=Philippines&output=embed"
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/60">
                    Google Maps embed placeholder—update the address as needed.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

