"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  { href: "/dvpn", label: "dVPN" },
  { href: "/faq", label: "FAQ" },
  { href: "/whitepaper", label: "Whitepaper" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/NetDagLogoBrown.png"
            alt="NetDag"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-[#D4AF37]">NetDag</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:text-black/80">
              {l.label}
            </Link>
          ))}
          <a
            href="#cta"
            className="rounded-xl px-4 py-2 text-white bg-[#2563EB] hover:opacity-90"
          >
            Get started
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-sm hover:text-black/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#cta"
              className="mt-2 rounded-xl px-4 py-2 text-white bg-[#2563EB] hover:opacity-90 w-fit"
              onClick={() => setOpen(false)}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}