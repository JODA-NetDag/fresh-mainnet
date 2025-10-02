function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border p-6 hover:shadow-sm transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="px-4 py-12 md:py-16 border-t">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Features & Innovation
        </h2>
        <p className="mt-2 text-gray-600">
          Focused, practical tech — shipped step by step.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card
            title="Risk Management (DAG + Bonding Curve)"
            text="Ceiling + shock-absorber design to reduce outsized volatility while supporting sustainable growth."
          />
          <Card
            title="AI Neuron Layer"
            text="Agentic insights that learn market behavior and guide safer user actions. Not just blockchain — a decision layer."
          />
          <Card
            title="Cross-Chain Lending"
            text="Lock value on Chain A, borrow usable NDG on NetDag — practical liquidity for DeFi, commerce, and gaming."
          />
          <Card
            title="Gaming & Micropayments"
            text="Ultra-fast, low-fee rails for in-game items, streaming tips, and micro-commerce at scale."
          />
          <Card
            title="Charity Fee (2%)"
            text="A transparent 2% route for good causes — recorded on-chain and published for community audit."
          />
          <Card
            title="Decentralized VPN (dVPN)"
            text="Peer-to-peer bandwidth marketplace: community WireGuard nodes, pay-per-GB in NDG, no central logs."
          />
        </div>
      </div>
    </section>
  );
}