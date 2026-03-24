"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "scroll" | "href"> & {
  /** Must be a path + hash, e.g. `/#products` */
  href: string;
  onNavigate?: () => void;
};

/**
 * Same-page /#section links: Next.js App Router often won't scroll to the hash.
 * We prevent the default client transition and scroll the target into view.
 */
export default function HashNavLink({ href, onNavigate, onClick, ...rest }: Props) {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (!href.startsWith("/#")) return;

    const isHome = pathname === "/" || pathname === "";
    if (!isHome) return;

    e.preventDefault();
    onNavigate?.();

    const id = href.replace(/^\/#/, "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    });
  }

  return <Link href={href} {...rest} scroll={false} onClick={handleClick} />;
}
