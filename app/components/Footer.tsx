import Link from "next/link";
import HashNavLink from "./HashNavLink";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020617] text-slate-400">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="font-display text-lg font-extrabold tracking-tight text-white">
              {site.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{site.description}</p>
            <p className="mt-2 text-xs font-medium text-slate-500">
              {site.addressLocality} · {site.addressRegion}
            </p>
            <div className="mt-5 text-sm">
              <span className="font-semibold text-slate-300">Phone:</span>{" "}
              <a
                className="text-sky-300 underline decoration-sky-500/40 underline-offset-4 transition-colors hover:text-sky-200"
                href={`tel:${site.phoneTel}`}
              >
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Facebook
              </div>
              <Link
                href={site.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/[0.05] transition-[transform,background-color] hover:bg-white/[0.08]"
              >
                Visit our Page
              </Link>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Quick links
              </div>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <HashNavLink className="w-fit text-slate-300 hover:text-white" href="/#products">
                  Products
                </HashNavLink>
                <HashNavLink className="w-fit text-slate-300 hover:text-white" href="/#services">
                  Services
                </HashNavLink>
                <HashNavLink className="w-fit text-slate-300 hover:text-white" href="/#contact">
                  Contact
                </HashNavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
