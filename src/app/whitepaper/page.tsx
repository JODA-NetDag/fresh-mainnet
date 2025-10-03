 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";

export default function Whitepaper() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="max-w-4xl w-full px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Whitepaper</h1>

          <p className="mt-4 text-lg text-gray-700">
            This is a living document. It formalizes NetDag’s core mechanics:
            <b> Risk Management (DAG + Bonding Curve)</b> with a constant reserve,
            token flows, governance, and the rollout plan for AI Neuron Layer, dVPN,
            Cross-Chain Lending, Gaming &amp; Micropayments, and Charity.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">Contents (draft)</h2>
          <ol className="mt-3 list-decimal pl-6 text-left text-gray-800 space-y-1">
            <li>Problem &amp; Philosophy</li>
            <li>Token Design &amp; Supply</li>
            <li>DAG + Bonding Curve Risk Model</li>
            <li>Security Reserve &amp; Audits</li>
            <li>Utility Modules (AI, dVPN, Lending, Gaming, Charity)</li>
            <li>Roadmap &amp; Milestones</li>
            <li>Governance &amp; Transparency</li>
          </ol>

          <div className="mt-8">
            <a
              href="/vision"
              className="rounded-lg bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition"
            >
              Read Vision
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}