import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhitepaperPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Whitepaper</h1>

        <p className="mt-4 text-slate-700">
          This page summarizes the key sections of the NetDag whitepaper. The full text
          will remain a living document and will be published here (not as a PDF) so it loads
          quickly on mobile and stays inside our site shell.
        </p>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-lg font-semibold">Introduction</h2>
            <p className="mt-2 text-slate-700">
              NetDag is a lightweight crypto project for real users — starting with shopper rewards and
              a simple, private peer-to-peer dVPN — designed for sustainable growth and strong risk
              management.
            </p>
          </article>

          <article className="card">
            <h2 className="text-lg font-semibold">Tokenomics</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li><b>Total Supply:</b> 499,999,000 NDG</li>
              <li><b>Security Reserve:</b> 25% of presale revenue locked as a constant reserve</li>
              <li><b>Fair Distribution:</b> mechanisms designed to discourage pump-and-dump cycles</li>
            </ul>
          </article>

          <article className="card">
            <h2 className="text-lg font-semibold">Risk Model</h2>
            <p className="mt-2 text-slate-700">
              DAG + Bonding Curve act as a shock-absorber to reduce outsized volatility while
              supporting sustainable growth.
            </p>
          </article>

          <article className="card">
            <h2 className="text-lg font-semibold">Utility Modules</h2>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>AI Neuron Layer (agentic insights, trader psychology dampening)</li>
              <li>Decentralized VPN (dVPN) — WireGuard nodes, on-chain settlement</li>
              <li>Cross-Chain Lending</li>
              <li>Gaming & Micropayments</li>
              <li>Charity Fee (2%) — on-chain and publicly auditable</li>
            </ul>
          </article>

          <article className="card">
            <h2 className="text-lg font-semibold">Roadmap</h2>
            <p className="mt-2 text-slate-700">
              Ship MVP → invite users → measure → iterate; audits and open integrations as we grow.
            </p>
          </article>

          <article className="card">
            <h2 className="text-lg font-semibold">Governance</h2>
            <p className="mt-2 text-slate-700">
              Transparent releases, clear ToS, and staged decentralization toward a DAO.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}