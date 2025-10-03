export default function FAQ() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
        Frequently Asked Questions (FAQ)
      </h1>

      {/* What is NetDag */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">What is NetDag (NDG) and what problem does it solve?</h2>
        <p className="mt-2 text-gray-700">
          NetDag is a blockchain project designed to bring <b>trust, scalability, and real utility</b> to crypto.
          It is the world’s <b>first unifier of DAG (Directed Acyclic Graph) and Bonding Curve mechanics</b> —
          a model that acts as a <b>shock-absorber</b> to protect assets from volatility.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
          <li>Financial services & payment solutions</li>
          <li>Web3 rewards for everyday users</li>
          <li>Digitalisation of real-world assets (RWA)</li>
          <li>Private, censorship-resistant dVPN access</li>
          <li>Cross-chain DeFi lending and borrowing</li>
          <li>AI-powered trading support</li>
        </ul>
      </div>

      {/* Total Supply */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">What is the total supply of NDG tokens?</h2>
        <p className="mt-2 text-gray-700">499,999,000 NDG tokens.</p>
      </div>

      {/* Presale Revenue */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">How is presale revenue used?</h2>
        <p className="mt-2 text-gray-700">
          25% of all presale revenue is permanently locked as a reserve to stabilize the market.
          The remaining funds are allocated to development, audits, and ecosystem growth.
        </p>
      </div>

      {/* Bonding Curve */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">How does the bonding curve protect token holders?</h2>
        <p className="mt-2 text-gray-700">
          The bonding curve ensures predictable token pricing. Early adopters get fair entry,
          while the <b>reserve acts as a safeguard</b> against sudden price crashes,
          keeping the ecosystem healthy.
        </p>
      </div>

      {/* Presale Join */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">How do I join the presale?</h2>
        <p className="mt-2 text-gray-700">
          You will be directed to connect your wallet via the official NetDag dApp. Stay tuned for the official launch details.
        </p>
      </div>

      {/* AI Neuron Layer */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">What is the AI Neuron Layer?</h2>
        <p className="mt-2 text-gray-700">
          The AI Neuron Layer supports decision-making in the ecosystem and is also used by
          <b> traders</b> to help eliminate the impact of <b>human psychology</b>
          (fear, greed, hesitation) in trading decisions.
        </p>
      </div>

      {/* dVPN */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">What is the decentralized VPN (dVPN)?</h2>
        <p className="mt-2 text-gray-700">
          A <b>peer-to-peer bandwidth marketplace</b> where anyone can sell or buy internet access securely using NDG tokens —
          private, censorship-resistant, and unstoppable.
        </p>
      </div>

      {/* Cross-chain Lending */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">How does cross-chain lending work?</h2>
        <p className="mt-2 text-gray-700">
          Imagine you hold ETH in one wallet but want to borrow NDG for your digital services.
          NetDag allows you to <b>seamlessly use ETH as collateral</b> and borrow NDG across chains —
          bridging assets and making them truly interoperable.
        </p>
      </div>

      {/* Charity */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">What about charity?</h2>
        <p className="mt-2 text-gray-700">
          2% of ecosystem revenue is dedicated to charitable causes worldwide,
          with <b>full transparency on-chain</b>.
        </p>
      </div>
    </main>
  );
}