import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="text-white font-semibold">The Bro Laptop Store</div>
            <p className="mt-3 text-sm leading-relaxed">
              Quality laptops, upgrades, and trusted service at the best price.
            </p>
            <div className="mt-4 text-sm">
              <span className="text-white/80">Phone:</span>{" "}
              <a className="hover:text-white transition-colors" href="tel:+639123456789">
                +63 912 345 6789
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white/90">Facebook</div>
              <Link
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                Visit our Page
              </Link>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/90">Quick Links</div>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <Link className="hover:text-white transition-colors" href="/#products">
                  Products
                </Link>
                <Link className="hover:text-white transition-colors" href="/#services">
                  Services
                </Link>
                <Link className="hover:text-white transition-colors" href="/#contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} The Bro Laptop Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

