import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Whitepaper() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="w-full max-w-4xl px-6 py-12 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-6">
            NetDag Whitepaper
          </h1>

          {/* Problem & Philosophy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Problem & Philosophy</h2>
            <p className="mb-3">
              The crypto industry has been dominated by speculation, hype cycles, and sudden
              crashes. Many projects launch with promises but collapse under volatility and lack
              of utility. This creates mistrust among users and investors.
            </p>
            <p>
              NetDag’s philosophy is simple: <strong>deliver real-world value with long-term
              stability.</strong> We achieve this by combining Directed Acyclic Graph (DAG)
              scalability with Bonding Curve mechanics, ensuring fairness, predictable pricing,
              and sustainable adoption.
            </p>
          </section>

          {/* Core Principles */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Core Principles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trust, scalability, and real-world utility</li>
              <li>Volatility protection via DAG + Bonding Curve model</li>
              <li>Permanent 25% presale reserve for stability</li>
              <li>Transparent, on-chain governance</li>
              <li>Charity-first model — every transaction contributes globally</li>
            </ul>
          </section>

          {/* Tokenomics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Tokenomics</h2>
            <p><strong>Total Supply:</strong> 499,999,000 NDG tokens.</p>
            <p>
              <strong>Presale Revenue:</strong> 25% permanently locked in reserve, ensuring
              price stability and protecting against dumps. Remaining revenue supports
              development, audits, and ecosystem growth.
            </p>
            <p>
              <strong>Bonding Curve:</strong> Provides predictable token pricing and
              fair entry for early adopters, while maintaining an automatic safeguard
              against volatility.
            </p>
          </section>

          {/* Focus Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Focus Areas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Financial services & payment solutions</li>
              <li>Web3 rewards for everyday users</li>
              <li>Digitalisation of real-world assets (RWA)</li>
              <li>Private, censorship-resistant dVPN access</li>
              <li>Cross-chain DeFi lending & borrowing</li>
              <li>AI-powered Neuron Layer for smarter trading</li>
              <li>Gaming, micropayments, and next-gen digital commerce</li>
            </ul>
          </section>

          {/* Risk Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Risk Management Model</h2>
            <p>
              NetDag’s <strong>DAG + Bonding Curve</strong> framework is the first
              of its kind: a built-in <em>shock absorber</em> to protect assets.
              By freezing a constant 25% reserve of presale revenue, NetDag
              establishes a price floor, reduces volatility, and creates a safer
              environment for investors and users.
            </p>
          </section>

          {/* Roadmap */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Roadmap & Milestones</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Q1: Presale launch, community building, initial dApp</li>
              <li>Q2: dVPN rollout, AI Neuron Layer beta</li>
              <li>Q3: Cross-chain lending integration, first charity disbursements</li>
              <li>Q4: Gaming & micropayments, governance DAO launch</li>
              <li>Beyond: Ongoing audits, RWA expansion, ecosystem partnerships</li>
            </ol>
          </section>

          {/* Governance */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Governance & Transparency</h2>
            <p>
              NetDag is community-driven. Governance decisions are recorded on-chain,
              ensuring transparency. Audits and regular reports will reinforce accountability
              and long-term trust.
            </p>
          </section>

          {/* Charity */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Charity & Social Impact</h2>
            <p>
              2% of ecosystem revenue is dedicated to global charities. Every contribution
              is tracked on-chain for maximum transparency, ensuring that every transaction
              supports meaningful causes worldwide.
            </p>
          </section>

          <div className="mt-10 text-center">
            <a
              href="/whitepaper.pdf"
              className="rounded-xl border border-[#1E40B8] px-5 py-3 text-sm hover:bg-white/50"
              download
            >
              Download Full PDF (coming soon)
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}