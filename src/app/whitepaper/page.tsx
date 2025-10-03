export default function Whitepaper() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Whitepaper (Overview)
      </h1>
      <p className="mt-4 text-gray-700">
        This live whitepaper highlights NetDag’s core mechanics: Risk Management
        (DAG + Bonding Curve), a 25% presale security reserve, governance, and
        the rollout of AI Neuron Layer, dVPN, Cross-Chain Lending, Gaming &
        Micropayments, and Charity.
      </p>

      <ul className="mt-6 list-disc pl-5 space-y-2 text-gray-700">
        <li>Problem &amp; Philosophy</li>
        <li>Token Design &amp; Supply</li>
        <li>DAG + Bonding Curve Risk Model</li>
        <li>Utility Modules (AI, dVPN, Lending, Gaming, Charity)</li>
        <li>Roadmap &amp; Milestones</li>
        <li>Governance &amp; Transparency</li>
      </ul>
    </main>
  );
}