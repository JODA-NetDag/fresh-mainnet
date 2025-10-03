"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
        {/* LEFT: single hamburger + logo */}
         <div className="flex items-center gap-2 md:gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-white/70 hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:h-9 md:w-9"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

           <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/NetDagLogo.png"      // transparent PNG
              alt="NetDag"
              width={26}
              height={26}
              priority
              className="h-6 w-6 md:h-7 md:w-7 bg-transparent"
            />
            <span className="text-sm font-medium tracking-tight text-slate-800 dark:text-slate-100 md:text-[15px]">
              NetDag <span className="opacity-60">(NDG)</span>
            </span>
          </Link>
        </div>

        {/* RIGHT: small buttons; theme/lang hidden on mobile (moved into drawer) */}
        <nav className="flex items-center gap-1.5">
          {/* Theme + Language on desktop only */}
          <button
            onClick={toggleTheme}
            className="hidden rounded-md border border-black/10 px-2.5 py-1 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:inline-flex"
            aria-label="Toggle theme"
            title="Toggle day/night"
          >
            {theme === "light" ? "🌙" : "☀️"}
           </button>
          <button
            className="hidden rounded-md border border-black/10 px-2.5 py-1 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:inline-flex"
            aria-label="Change language"
            title="Change language"
          >
            🌐
          </button>

           <Link
            href="/#login"
            className="rounded-md border border-black/10 px-2.5 py-1.5 text-xs hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:text-sm"
          >
            Login / Register
          </Link>

           <Link
            href="/#buy-ndg"
            className="rounded-md bg-[#1E40B8] px-3 py-1.5 text-xs text-white shadow hover:opacity-90 md:text-sm"
          >
            Buy NDG
          </Link>

          {/* Keep these only on desktop; mobile users get them in the drawer */}
          <Link
            href="/whitepaper"
            className="hidden rounded-md border border-black/10 px-3 py-1.5 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:inline-flex"
          >
            Whitepaper
           </Link>
          <Link
            href="/vision"
            className="hidden rounded-md border border-black/10 px-3 py-1.5 text-sm hover:bg-white/70 dark:border-white/10 dark:hover:bg-white/10 md:inline-flex"
          >
            Vision
          </Link>
        </nav>
       </div>

      {/* DROP-DOWN MENU (under header, not covering the page) */}
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-black/5 bg-white/95 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
          <div className="mx-auto max-w-6xl px-3 py-3 md:px-4">
            <div className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2 md:grid-cols-3">
              {/* Mobile-only controls */}
              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="rounded-md px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/10"
              >
                {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
              </button>
              <button className="rounded-md px-3 py-2 text-left hover:bg-black/5 dark:hover:bg-white/10">
                Language (🌐) — coming soon
              </button>

              {/* Navigation items */}
              <Link href="/whitepaper" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Whitepaper
              </Link>
              <Link href="/vision" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Vision
              </Link>
              <Link href="/dvpn" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                dVPN
              </Link>
              <Link href="/faq" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                FAQ
              </Link>
              <Link href="/#tokenomics" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Tokenomics
              </Link>
              <Link href="/#get-started" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Get Started
              </Link>
              <Link href="/#roadmap" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Roadmap
              </Link>
              <Link href="/#contact" onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
 }