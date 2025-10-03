"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <header className="sticky top-0 z-50 bg-sky-50/90 backdrop-blur border-b border-blue-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 h-16">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/NetDagLogoBrown.png"
            alt="NetDag"
            width={28}
            height={28}
            priority
            className="rounded-full"
          />
          <span className="text-[17px] font-semibold tracking-tight text-slate-900">
            NetDag
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-800 hover:text-slate-900 hover:underline underline-offset-4 decoration-blue-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#get-started"
            className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Get started
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 text-slate-800"
        >
          <span className="i-[menu]" />
          {/* simple burger */}
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-sky-50/95">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-800 hover:text-slate-900"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#get-started"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 transition-colors w-max"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
