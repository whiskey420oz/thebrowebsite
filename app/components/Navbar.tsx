import Link from "next/link";

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
      <div className="bg-[#030712]/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/#home"
              className="flex items-center gap-3 font-semibold tracking-tight text-white"
              aria-label="The Bro Laptop Store"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1D4ED8] shadow-lg shadow-[#1D4ED8]/30">
                <span className="text-sm font-bold">TB</span>
              </span>
              <span className="leading-tight">
                The Bro Laptop Store
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="relative md:hidden">
              <details className="group">
                <summary className="cursor-pointer list-none select-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 shadow-sm">
                  Menu
                </summary>
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-[#030712] p-3 shadow-lg shadow-black/30">
                  <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

