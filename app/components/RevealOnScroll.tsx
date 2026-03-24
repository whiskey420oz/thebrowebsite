"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger sibling reveals (ms) */
  delayMs?: number;
};

export default function RevealOnScroll({ children, className, delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => setVisible(true));
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""}${className ? ` ${className}` : ""}`}
      style={
        delayMs > 0 ? ({ ["--reveal-delay"]: `${delayMs}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
