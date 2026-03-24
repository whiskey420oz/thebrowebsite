"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import HashNavLink from "./HashNavLink";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  /** Close when tapping outside (capture phase so it doesn’t fight link clicks) */
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (wrapRef.current?.contains(e.target as Node)) return;
      close();
    }
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, close]);

  return (
    <div className="relative md:hidden" ref={wrapRef}>
      <button
        type="button"
        className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-white shadow-inner shadow-white/[0.03] ring-1 ring-white/[0.06] transition-colors hover:bg-white/[0.07]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-2xl border border-white/10 bg-[#0f172a]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
          role="dialog"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <HashNavLink
                key={item.href}
                href={item.href}
                onNavigate={close}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </HashNavLink>
            ))}
            <HashNavLink
              href="/#contact"
              onNavigate={close}
              className="mt-1 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get a quote
            </HashNavLink>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
