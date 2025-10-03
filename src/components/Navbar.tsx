"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/vision", label: "Vision" },
  { href: "/dvpn", label: "dVPN" },
  { href: "/faq", label: "FAQ" },
  { href: "/whitepaper", label: "Whitepaper" }, // page (not PDF)
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm transition ${
      pathname === href ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/NetDagLogoBrown.png"
            alt="NetDag"
            width={28}
            height={28}
            priority
          />
          <span className="text-base font-semibold">NetDag</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            Get started
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={linkClass(l.href)}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#get-started"
                  className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  Get started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}