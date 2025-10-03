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

  // Persist & apply theme
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#d7e9ff]/80 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left cluster */}
        <div className="flex items-center gap-3">
          {/* 3-dash menu */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/70 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:focus:ring-white/20"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/NetDagLogo.png"   // <-- transparent logo
              alt="NetDag"
              width={32}
              height={32}
              priority
              className="h-8 w-8 bg-transparent"
            />
            <span className="text-sm font-medium tracking-tight text-slate-800 dark:text-slate-100">
              NetDag <span className="opacity-60">(NDG)</span>
            </span>
          </Link>
        </div>

        {/* Right cluster */}
        <nav className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:hover:bg-white/10 dark:focus:ring-white/20"
            aria-label="Toggle theme"
            title="Toggle day/night"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Language (placeholder) */}
          <button
            className="rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:hover:bg-white/10 dark:focus:ring-white/20"
            aria-label="Change language"
            title="Change language"
          >
            🌐
          </button>

          {/* Login/Register (anchors for now) */}
          <Link
            href="/#login"
            className="rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:hover:bg-white/10 dark:focus:ring-white/20"
          >
            Login / Register
          </Link>

          {/* Buy NDG (connect wallet later) */}
          <Link
            href="/#buy-ndg"
            className="rounded-md bg-[#1E40B8] px-3 py-2 text-sm text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1E40B8]/40"
          >
            Buy NDG
          </Link>

          <Link
            href="/whitepaper"
            className="rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:hover:bg-white/10 dark:focus:ring-white/20"
          >
            Whitepaper
          </Link>

          <Link
            href="/vision"
            className="rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-white/10 dark:hover:bg-white/10 dark:focus:ring-white/20"
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
        <div className="border-t border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
              <Link href="/#tokenomics" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Tokenomics
              </Link>
              <Link href="/dvpn" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                dVPN
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