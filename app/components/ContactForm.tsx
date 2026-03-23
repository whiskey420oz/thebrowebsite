"use client";

import type React from "react";
import { useState } from "react";

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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-[#030712] px-3 py-2 text-white placeholder:text-white/40 outline-none focus:border-[#60A5FA]/60"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-[#030712] px-3 py-2 text-white placeholder:text-white/40 outline-none focus:border-[#60A5FA]/60"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-[#030712] px-3 py-2 text-white placeholder:text-white/40 outline-none focus:border-[#60A5FA]/60"
              placeholder="What laptop are you looking for? Any budget or specs?"
            />
          </div>

          {error ? (
            <div className="text-sm text-red-300" role="alert">
              {error}
            </div>
          ) : null}

          {status === "success" ? (
            <div className="text-sm text-green-300" role="status">
              Thanks! Your message has been sent. We’ll get back to you soon.
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1D4ED8]/20 transition-colors hover:bg-[#1E40AF] disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}

