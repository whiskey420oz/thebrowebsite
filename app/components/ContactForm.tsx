"use client";

import type React from "react";
import { useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-white/[0.1] bg-[#020617]/80 px-3.5 py-2.5 text-white shadow-inner shadow-black/20 placeholder:text-slate-500 outline-none transition-[border-color,box-shadow] focus:border-sky-500/40 focus:ring-2 focus:ring-sky-500/20";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-sky-500/25 via-transparent to-blue-600/20 opacity-60 blur-sm" />
      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_28px_56px_-32px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.05] sm:p-8">
        <div className="absolute inset-0 bg-tech-grid opacity-40" aria-hidden />
        <div className="relative space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={fieldClass}
              autoComplete="name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={fieldClass}
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className={`${fieldClass} resize-none`}
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/25 bg-red-950/40 px-3 py-2 text-sm text-red-200" role="alert">
              {error}
            </div>
          ) : null}

          {status === "success" ? (
            <div
              className="rounded-xl border border-emerald-500/25 bg-emerald-950/35 px-3 py-2 text-sm text-emerald-200"
              role="status"
            >
              Thanks! Your message has been sent. We’ll get back to you soon.
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-4 py-3.5 text-sm font-bold text-white shadow-[0_0_28px_-6px_rgba(37,99,235,0.75)] ring-1 ring-white/10 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_rgba(56,189,248,0.45)] disabled:translate-y-0 disabled:opacity-60"
          >
            <span className="relative z-10">{status === "loading" ? "Sending…" : "Send message"}</span>
            <span
              className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-white/0 via-white/10 to-white/0 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </form>
  );
}
