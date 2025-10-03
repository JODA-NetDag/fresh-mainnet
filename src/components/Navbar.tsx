"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mainLinks = [
  { href: "/#vision", label: "Vision" },
  { href: "/#dvpn", label: "dVPN" },
  { href: "/#tokenomics", label: "Tokenomics" },
  { href: "/#whitepaper", label: "Whitepaper" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#d0e2f7]/80 backdrop-blur border-b">
      <div className="mx-auto max-w-5xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2">
          <Image src="/images/NetDagLogoBrown.png" alt="NetDag" width={28} height={28} />
          <span className="font-semibold">NetDag</span>
        </Link>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-800 hover:underline">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#get-started"
            className="rounded-md bg-[#1E40B3] px-3 py-2 text-white hover:bg-[#173b8f]"
          >
            Get started
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

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-[#d0e2f7]">
          <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#get-started"
              onClick={() => setOpen(false)}
              className="rounded-md bg-[#1E40B3] px-3 py-2 text-white text-center"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
