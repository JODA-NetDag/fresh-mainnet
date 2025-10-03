"use client";

 import { useState } from "react";
 import Image from "next/image";
 import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  { href: "/dvpn", label: "dVPN" },
  { href: "/faq", label: "FAQ" },
  { href: "/whitepaper", label: "Whitepaper" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/NetDagLogoBrown.png" alt="NetDag" width={28} height={28} />
          <span className="font-semibold tracking-tight">NetDag</span>
        </Link>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:underline">
              {l.label}
            </Link>
          ))}
          <Link href="/get-started" className="btn-primary">Get started</Link>
        </nav>

        {/* hamburger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[var(--brand-weak)]"
        >
          <span className="sr-only">Open menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/get-started" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
 }