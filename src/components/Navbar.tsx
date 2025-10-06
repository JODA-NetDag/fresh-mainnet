"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // load saved theme once
  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("theme") as "light" | "dark" | null)) || "light";
    setTheme(saved);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#d0e2f7]/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white/70 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/NetDagLogo.png"
              alt="NetDag"
              width={28}
              height={28}
              priority
              className="h-7 w-7 bg-transparent"
            />
            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
              NetDag <span className="opacity-60">(NDG)</span>
            </span>
          </Link>
        </div>

        {/* Right cluster (hidden on mobile) */}
        <nav className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md border border-black/10 px-2 py-1 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
            title="Toggle day/night"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            type="button"
            className="rounded-md border border-black/10 px-2 py-1 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
            aria-label="Change language"
            title="Change language"
          >
            🌐
          </button>

          <Link
            href="/#login"
            className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
          >
            Login / Register
          </Link>

          <Link
            href="/#buy-ndg"
            className="rounded-md bg-[#1E40B8] px-3 py-1 text-sm text-white shadow hover:opacity-90"
          >
            Buy NDG
          </Link>

          {/* these jump to sections on the home page */}
          <Link
            href="/#whitepaper"
            className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
          >
            Whitepaper
          </Link>

          <Link
            href="/#vision"
            className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10"
          >
            Vision
          </Link>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
              <Link href="/#whitepaper" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Whitepaper
              </Link>
              <Link href="/#vision" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Vision
              </Link>
              <Link href="/#tokenomics" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Tokenomics
              </Link>
              <Link href="/dvpn" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                dVPN
              </Link>
              <Link href="/faq" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                FAQ
              </Link>
              <Link href="/#contact" className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Contact
              </Link>
              {/* small utilities also inside drawer on mobile */}
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 w-full rounded-md border border-black/10 px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
              >
                {theme === "light" ? "🌙 Night mode" : "☀️ Day mode"}
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black/10 px-3 py-2 text-left hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
                aria-label="Change language"
              >
                🌐 Language
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
 }