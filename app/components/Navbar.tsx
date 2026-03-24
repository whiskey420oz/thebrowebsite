import BrandLaptopMark from "./BrandLaptopMark";
import HashNavLink from "./HashNavLink";
import MobileNav from "./MobileNav";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/[0.08] bg-[#020617]/75 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgba(255,255,255,0.04)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[4.25rem] items-center justify-between gap-4">
            <HashNavLink
              href="/#home"
              className="group flex min-w-0 items-center gap-3 text-white"
              aria-label="The Bro Laptop Store"
            >
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] text-white shadow-[0_0_32px_-4px_rgba(37,99,235,0.55)] ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-[1.03]">
                <BrandLaptopMark className="h-[1.35rem] w-[1.35rem]" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <span className="font-display min-w-0 text-sm font-bold leading-tight tracking-tight sm:text-base">
                <span className="block truncate">The Bro</span>
                <span className="block truncate text-xs font-semibold text-sky-300/90 sm:text-sm">
                  Laptop Store
                </span>
              </span>
            </HashNavLink>

            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <HashNavLink
                  key={item.href}
                  href={item.href}
                  className="group relative px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className="absolute inset-x-2 bottom-1.5 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                </HashNavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <HashNavLink
                href="/#contact"
                className="hidden rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(37,99,235,0.7)] ring-1 ring-white/10 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_rgba(56,189,248,0.45)] sm:inline-flex"
              >
                Get a quote
              </HashNavLink>

              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
