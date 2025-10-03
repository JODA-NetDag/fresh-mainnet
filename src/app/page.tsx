// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col items-center justify-start">
      <div className="max-w-4xl w-full px-6 text-center">
        <section className="mt-12">
          <h1 className="text-4xl font-bold text-gray-900">
            NetDag — Simple crypto, <span className="text-blue-700">real utility.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We’re building a lightweight token for real users — starting with shopper rewards and a simple, private peer-to-peer dVPN.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href="/whitepaper" className="rounded-lg bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition">
              Read Whitepaper
            </a>
            <a href="/vision" className="rounded-lg border border-blue-600 text-blue-700 px-5 py-3 hover:bg-blue-100 transition">
              Our Vision
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Risk Management (DAG + Bonding Curve)</h3>
            <p className="mt-2 text-gray-700">
              Ceiling + shock-absorber design to reduce outsized volatility while supporting sustainable growth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">AI Neuron Layer</h3>
            <p className="mt-2 text-gray-700">
              Agentic insights that learn market behavior and guide safer user actions. Not just blockchain — a decision layer.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Cross-Chain Lending</h3>
            <p className="mt-2 text-gray-700">
              Lock value on-chain & borrow usable NDG on NetDag — practical liquidity for DeFi, commerce, and gaming.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Decentralized VPN (dVPN)</h3>
            <p className="mt-2 text-gray-700">
              Peer-to-peer bandwidth marketplace: community WireGuard nodes, pay per GB in NDG, no central logs.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}