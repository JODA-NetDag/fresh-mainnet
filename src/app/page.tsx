import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      {/* Top nav */}
      <Navbar />

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-5xl px-4 md:px-6 py-10 md:py-14 space-y-16">
          {/* HERO */}
          <section id="top" className="text-center scroll-mt-28">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
  NetDAG — <span className="text-slate-900 dark:text-slate-100">Simple crypto, real utility.</span>
</h1>

            <p className="mt-4 text-gray-700 md:text-lg">
              A lightweight token for real users — shopper rewards and a private peer-to-peer dVPN.
            </p>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="#get-started"
                className="rounded-lg bg-[#1E40B3] px-5 py-3 text-white hover:bg-[#173b8f] transition"
              >
                Get started
              </Link>

              <Link
                href="#tokenomics"
                className="rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition"
              >
                View tokenomics
              </Link>
            </div>

            {/* Secondary CTAs */}
            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              <Link
                href="#whitepaper"
                className="rounded-lg bg-white px-5 py-3 text-gray-900 border hover:bg-white/70 transition"
              >
                Read Whitepaper
              </Link>
              <Link
                href="#vision"
                className="rounded-lg border px-5 py-3 hover:bg-white/60 transition"
              >
                Our Vision
              </Link>
            </div>
          </section>

          {/* VISION */}
          <section id="vision" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
            <p className="mt-2 text-gray-700">
              Make crypto useful for everyday people: rewards, private internet access, and a fair,
              transparent token design that supports sustainable growth.
            </p>
          </section>

          {/* FEATURES */}
          <section id="features" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Features & Innovation</h2>
            <p className="mt-2 text-gray-700">Focused, practical tech — shipped step by step.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Risk Mgmt (DAG + Bonding Curve)</h3>
                <p className="mt-2 text-gray-700">
                  Ceiling + shock-absorber design reduces outsized volatility while supporting growth.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">AI Neuron Layer</h3>
                <p className="mt-2 text-gray-700">
                  Agentic insights learn market behavior and guide safer user actions.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Cross-Chain Lending</h3>
                <p className="mt-2 text-gray-700">
                  Lock value on Chain A, borrow usable NDG on NetDag for DeFi, commerce, and gaming.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Gaming & Micropayments</h3>
                <p className="mt-2 text-gray-700">
                  Ultra-fast, low-fee rails for in-game items, streaming tips, and micro-commerce.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Charity Fee (2%)</h3>
                <p className="mt-2 text-gray-700">
                  A transparent route to good causes — recorded on-chain and published for audit.
                </p>
              </article>

              <article className="bg-white rounded-xl p-5 shadow-sm border">
                <h3 className="font-semibold">Decentralized VPN (dVPN)</h3>
                <p className="mt-2 text-gray-700">
                  P2P bandwidth marketplace: community WireGuard nodes, pay per GB in NDG.
                </p>
              </article>
            </div>
          </section>

          {/* TOKENOMICS */}
          <section id="tokenomics" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Tokenomics (preview)</h2>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
              <li><b>Total Supply:</b> 499,999,000 NDG</li>
              <li><b>Security Reserve:</b> 25% of presale revenue held as constant reserve</li>
              <li><b>Chain:</b> BNB Smart Chain (low fees, fast)</li>
              <li><b>Distribution:</b> Fair routes; designed to reduce pump-and-dump cycles</li>
              <li><b>Utility:</b> Rewards, dVPN, AI, gaming, lending, micropayments</li>
            </ul>
          </section>

          {/* dVPN */}
          <section id="dvpn" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">NetDag dVPN</h2>
            <p className="mt-2 text-gray-700">
              A decentralized, peer-to-peer bandwidth marketplace. Operators run lightweight
              WireGuard nodes; users select a node and pay per-GB in NDG.
            </p>
          </section>

          {/* WHITEPAPER */}
          <section id="whitepaper" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Whitepaper</h2>
            <p className="mt-2 text-gray-700">
              This living whitepaper formalizes risk management (DAG + Bonding Curve), token flows,
              governance, and rollout. The downloadable PDF will return later — for now, read here.
            </p>
            <div className="mt-4">
              <Link
                href="#get-started"
                className="rounded-lg bg-[#1E40B3] px-5 py-3 text-white hover:bg-[#173b8f] transition"
              >
                Continue — Get started
              </Link>
            </div>
          </section>

          {/* GET STARTED */}
          <section id="get-started" className="scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Get started</h2>
            <ol className="mt-3 list-decimal pl-6 text-gray-700 space-y-2">
              <li>Install a wallet (e.g., MetaMask).</li>
              <li>Switch to BNB Smart Chain.</li>
              <li>Stay tuned for presale link and dApp launch.</li>
            </ol>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
 }