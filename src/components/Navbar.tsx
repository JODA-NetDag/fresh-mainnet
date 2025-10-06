"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Navbar
 * - Left: hamburger + logo + brand
 * - Right (desktop): theme, language, Login/Register, Buy NDG, Whitepaper, Vision
 * - Right (mobile): only Login/Register + Buy NDG; the rest live in the drawer
 * - Whitepaper/ Vision use in-page anchors (/#whitepaper, /#vision)
 * - Theme is persisted in localStorage and toggles the <html>.dark class
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // hydrate theme from localStorage
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#dbe8fb]/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:py-3">
        {/* Left cluster */}
        <div className="flex items-center gap-3">
          {/* Hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white/70 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Logo + brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/NetDagLogo.png" // transparent PNG in public/images
              alt="NetDag"
              width={28}
              height={28}
              priority
              className="h-7 w-7"
            />
            <span className="text-sm font-medium tracking-tight text-slate-800 dark:text-slate-100">
              NetDag <span className="opacity-60">(NDG)</span>
            </span>
          </Link>
        </div>

        {/* Right cluster */}
        <nav className="flex items-center gap-2">
          {/* Theme & Language — hidden on mobile, visible ≥ md */}
          <button
            onClick={toggleTheme}
            className="hidden md:inline-flex rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
            title="Toggle day/night"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="hidden md:inline-flex rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
            aria-label="Change language"
            title="Change language"
          >
            🌐
          </button>

          {/* Login/Register + Buy NDG always visible (smaller on mobile) */}
          <Link
            href="/#login"
            className="rounded-md border border-black/10 px-2 py-1 text-xs md:px-3 md:py-2 md:text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
          >
            Login / Register
          </Link>

          <Link
            href="/#buy-ndg"
            className="rounded-md bg-[#1E40B8] px-2 py-1 text-xs text-white shadow hover:opacity-90 md:px-3 md:py-2 md:text-sm"
          >
            Buy NDG
          </Link>

          {/* Keep these only on desktop (mobile gets them in the drawer) */}
          <Link
  href="/whitepaper"
  className="hidden md:inline-flex rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
>
  Whitepaper
</Link>

          <Link
            href="/#vision"
            className="hidden md:inline-flex rounded-md border border-black/10 px-3 py-2 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
          >
            Vision
          </Link>
        </nav>
      </div>

      {/* Drawer (mobile & desktop if opened) */}
      {open && (
        <div className="border-t border-black/5 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
              {/* Move Theme + Language into the drawer for mobile use */}
              <button
                onClick={toggleTheme}
                className="rounded-md border border-black/10 px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
              >
                {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
              </button>
              <button className="rounded-md border border-black/10 px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                🌐 Language
              </button>

              {/* Site links */}
              <Link href="/#whitepaper" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Whitepaper
              </Link>
              <Link href="/#vision" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Vision
              </Link>
              <Link href="/dvpn" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                dVPN
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
