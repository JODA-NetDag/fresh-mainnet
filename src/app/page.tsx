import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      {/* Top nav */}
      <Navbar />

      {/* Page container (centered) */}
      <div className="flex-1 flex items-start justify-center">
        <div className="w-full max-w-5xl px-4 md:px-6 py-10 md:py-14">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              NetDag — <span className="underline decoration-black/20">Simple crypto</span>,{" "}
              <span className="underline decoration-black/20">real utility</span>.
            </h1>

            <p className="mt-4 text-gray-700 md:text-lg">
              We’re building a lightweight token for real users — starting with shopper rewards
              and a simple, private peer-to-peer dVPN.
            </p>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="/get-started"
                className="rounded-lg bg-[#1E40B3] px-5 py-3 text-white hover:bg-[#173b8f] transition"
              >
                Get started
              </Link>

              <Link
                href="/whitepaper"
                className="rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition"
              >
                View tokenomics
              </Link>
            </div>

            {/* Secondary CTAs */}
            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              <Link
                href="/whitepaper"
                className="rounded-lg bg-white px-5 py-3 text-gray-900 border hover:bg-white/70 transition"
              >
                Read Whitepaper
              </Link>
              <Link
                href="/vision"
                className="rounded-lg border px-5 py-3 hover:bg-white/60 transition"
              >
                Our Vision
              </Link>
            </div>
          </section>

          {/* Features */}
          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
              Features & Innovation
            </h2>
            <p className="mt-2 text-center text-gray-700">
              Focused, practical tech — shipped step by step.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Risk Management (DAG + Bonding Curve)</h3>
                <p className="mt-2 text-gray-700">
                  Ceiling + shock-absorber design to reduce outsized volatility while supporting
                  sustainable growth.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">AI Neuron Layer</h3>
                <p className="mt-2 text-gray-700">
                  Agentic insights that learn market behavior and guide safer user actions.
                  Not just blockchain — a decision layer.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Cross-Chain Lending</h3>
                <p className="mt-2 text-gray-700">
                  Lock value on Chain A, borrow usable NDG on NetDag — practical liquidity for DeFi,
                  commerce, and gaming.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Gaming & Micropayments</h3>
                <p className="mt-2 text-gray-700">
                  Ultra-fast, low-fee rails for in-game items, streaming tips, and micro-commerce at scale.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Charity Fee (2%)</h3>
                <p className="mt-2 text-gray-700">
                  A transparent 2% route to good causes — recorded on-chain and published for
                  community audit.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Decentralized VPN (dVPN)</h3>
                <p className="mt-2 text-gray-700">
                  Peer-to-peer bandwidth marketplace: community WireGuard nodes, pay per GB in NDG,
                  no central logs.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}