export default function Whitepaper() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        NetDag — Whitepaper (Overview)
      </h1>

      <p className="mt-4 text-gray-700">
        This live page summarizes the core elements of NetDag. A downloadable PDF may be added later,
        but this page is the primary source for fast mobile reading.
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1) What is NetDag?</h2>
          <p className="mt-2 text-gray-700">
            NetDag unifies DAG scalability with a Bonding Curve model as a{" "}
            <b>shock-absorber</b> to protect assets. Focus areas include financial services &amp; payments,
            Web3 rewards, digitalisation of real-world assets, dVPN, AI-assisted trading, and cross-chain lending.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2) Tokenomics (Snapshot)</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
            <li><b>Total Supply:</b> 499,999,000 NDG</li>
            <li><b>Reserve:</b> 25% of presale revenue locked for stability</li>
            <li><b>Charity:</b> 2% of ecosystem revenue on-chain</li>
            <li><b>Goal:</b> Fair distribution, long-term sustainability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3) Utilities</h2>
          <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
            <li><b>AI Neuron Layer:</b> supports decisions; traders use it to reduce human-emotion bias.</li>
            <li><b>dVPN:</b> peer-to-peer bandwidth marketplace, censorship-resistant access.</li>
            <li><b>Cross-Chain Lending:</b> use ETH as collateral to borrow NDG for digital services.</li>
            <li><b>Gaming &amp; Micropayments:</b> low-fee transactions for apps and games.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4) Governance &amp; Transparency</h2>
          <p className="mt-2 text-gray-700">
            Transition toward a DAO; audits and reserve proofs are published with on-chain references.
          </p>
        </div>

        <div className="mt-8 rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold">Presale</h3>
          <p className="mt-2 text-gray-700">
            You will be directed to connect your wallet via the official NetDag dApp. Stay tuned for launch details.
          </p>
        </div>
      </section>
    </main>
  );
}