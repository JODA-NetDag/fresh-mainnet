import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Page background + default text color */}
      <main className="min-h-screen bg-[#F8FBFF] text-gray-900">
        {/* 1) Hero (your existing component) */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <Hero />

          {/* Primary CTAs under hero */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/whitepaper"
              className="rounded-lg bg-[#1E4ED8] px-5 py-3 text-white hover:bg-[#1740b3] transition"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/vision"
              className="rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition"
            >
              Our Vision
            </Link>
            <Link
              href="/dvpn"
              className="rounded-lg border px-5 py-3 hover:bg-white/60 transition"
            >
              dVPN
            </Link>
          </div>
        </section>

        {/* 2) Quick Intro / Why NDG */}
        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">Why NetDag?</h2>
            <p className="mt-3 text-gray-700">
              NetDag is designed with a fair, transparent supply and mechanisms that
              promote sustainable growth, decentralization, and security — built for
              real users and real utility.
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border p-4">
                <b>Total Supply:</b> 499,999,000 NDG
              </li>
              <li className="rounded-xl border p-4">
                <b>Security Reserve:</b> 25% of presale revenue locked as a constant reserve
              </li>
              <li className="rounded-xl border p-4">
                <b>Chain:</b> BNB Smart Chain (low fees, fast transactions)
              </li>
              <li className="rounded-xl border p-4">
                <b>Fair Distribution:</b> Designed to reduce pump-and-dump cycles
              </li>
              <li className="rounded-xl border p-4 sm:col-span-2">
                <b>Utility:</b> Rewards, dVPN, AI, gaming, lending, micropayments
              </li>
            </ul>
          </div>
        </section>

        {/* 3) Features grid (your existing component) */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Features & Innovation
          </h2>
          <p className="mb-6 text-gray-700">
            Focused, practical tech — shipped step by step.
          </p>
          <Features />
        </section>

        {/* 4) Tokenomics highlight cards */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">Tokenomics (at a glance)</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500">Supply</div>
              <div className="mt-1 text-lg font-semibold">499,999,000 NDG</div>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500">Reserve</div>
              <div className="mt-1 text-lg font-semibold">25% Presale → Locked</div>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500">Chain</div>
              <div className="mt-1 text-lg font-semibold">BNB Smart Chain</div>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500">Focus</div>
              <div className="mt-1 text-lg font-semibold">Fair, sustainable growth</div>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/whitepaper"
              className="inline-block rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition"
            >
              See details in the Whitepaper
            </Link>
          </div>
        </section>

        {/* 5) Roadmap teaser */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">Roadmap (snapshot)</h2>
            <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-700">
              <li>MVP & testnet; community feedback and audits</li>
              <li>dVPN marketplace launch; NDG staking for node ops</li>
              <li>AI Neuron Layer + cross-chain lending beta</li>
              <li>Gaming & micropayments integrations</li>
              <li>DAO transition; continued audits & transparency</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/faq"
                className="rounded-lg border px-5 py-3 hover:bg-white/60 transition"
              >
                Visit FAQ
              </Link>
              <Link
                href="/vision"
                className="rounded-lg border px-5 py-3 hover:bg-white/60 transition"
              >
                Read our Vision
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}