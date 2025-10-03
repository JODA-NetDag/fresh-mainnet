import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhitepaperPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Whitepaper</h1>

        <p className="mt-4 text-gray-700">
          This is a living document. It formalizes NetDag’s core mechanics:
          <b> Risk Management (DAG + Bonding Curve)</b> with a constant reserve of
          <b> 25% of presale revenue</b>, token flows, governance, and the rollout
          plan for AI Neuron Layer, dVPN, Cross-Chain Lending, Gaming &amp; Micropayments,
          and Charity.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contents (draft)</h2>
        <ol className="mt-3 list-decimal pl-6 space-y-1 text-gray-700">
          <li>Problem &amp; Philosophy</li>
          <li>Token Design &amp; Supply</li>
          <li>DAG + Bonding Curve Risk Model</li>
          <li>Security Reserve &amp; Audits</li>
          <li>Utility Modules (AI, dVPN, Lending, Gaming, Charity)</li>
          <li>Roadmap &amp; Milestones</li>
          <li>Governance &amp; Transparency</li>
        </ol>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="rounded-lg bg-[#1E40B8] px-5 py-3 text-white hover:bg-[#17379c] transition"
          >
            Back to Home
          </Link>
          <Link
            href="/vision"
            className="rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition"
          >
            Our Vision
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}