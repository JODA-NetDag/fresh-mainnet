"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Header goals:
 * - Left: Hamburger, Logo, Brand ("NetDag (NDG)")
 * - Right: Theme toggle, Language, Login/Register, Buy NDG, Whitepaper, Vision
 * - Removed from top bar: dVPN, Tokenomics, Get Started (moved to drawer)
 * - Header slightly darker than page body
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // load + apply theme
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const initial = saved ?? "light";
    setTheme(initial);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
    }
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-sky-50/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 md:px-4 md:py-3">
        {/* Left cluster */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* 3-dash menu */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white/70 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:h-10 md:w-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/NetDagLogo.png"   // transparent PNG you uploaded
              alt="NetDag"
              width={26}
              height={26}
              priority
              className="h-6 w-6 md:h-7 md:w-7 bg-transparent"
            />
            <span className="text-sm font-medium tracking-tight text-slate-800 dark:text-slate-100 md:text-base">
              NetDag <span className="opacity-60">(NDG)</span>
            </span>
          </Link>
        </div>

        {/* Right cluster */}
        <nav className="flex items-center gap-1.5 md:gap-2">
          {/* Smaller icons on mobile */}
          <button
            onClick={toggleTheme}
            className="rounded-md border border-black/10 px-2 py-1 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:px-3 md:py-2 md:text-sm"
            aria-label="Toggle theme"
            title="Toggle day/night"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Language (placeholder) */}
          <button
            className="rounded-md border border-black/10 px-2 py-1 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:px-3 md:py-2 md:text-sm"
            aria-label="Change language"
            title="Change language"
          >
            🌐
          </button>

          {/* Login/Register (anchors for now) */}
          <Link
            href="/#login"
            className="rounded-md border border-black/10 px-2.5 py-1.5 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:px-3 md:py-2 md:text-sm"
          >
            Login / Register
          </Link>

          {/* Buy NDG (connect wallet later) */}
          <Link
            href="/#buy-ndg"
            className="rounded-md bg-[#1E40B8] px-2.5 py-1.5 text-xs text-white shadow hover:opacity-90 md:px-3 md:py-2 md:text-sm"
          >
            Buy NDG
          </Link>

          {/* Hide these on mobile; show on md+ only */}
          <Link
            href="/whitepaper"
            className="hidden rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:inline-flex"
          >
            Whitepaper
          </Link>

          <Link
            href="/vision"
            className="hidden rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:inline-flex"
          >
            Vision
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden rounded-md border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Slide-down drawer for 3-dash menu */}
      {open && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
          <div className="mx-auto max-w-6xl px-3 py-3 md:px-4">
            <div className="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2 md:grid-cols-3">
              {/* Items we keep in the menu on mobile */}
              <Link href="/whitepaper" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Whitepaper
              </Link>
              <Link href="/vision" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Vision
              </Link>
              <Link href="/dvpn" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                dVPN
              </Link>
              <Link href="/faq" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                FAQ
              </Link>
              <Link href="/#tokenomics" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Tokenomics
              </Link>
              <Link href="/#get-started" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Get Started
              </Link>
              <Link href="/faq" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                FAQ
              </Link>
              <Link href="/#roadmap" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Roadmap
              </Link>
              <Link href="/#contact" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}