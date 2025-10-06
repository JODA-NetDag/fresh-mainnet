// src/app/whitepaper/page.tsx
import React from "react";

export const metadata = {
  title: "NetDag (NDG) — Whitepaper",
  description:
    "Official NetDag (NDG) Whitepaper: Problem & Philosophy, Core Principles, Tokenomics, Focus Areas, Risk Management, Roadmap, Governance & Charity.",
};

export default function WhitepaperPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 text-zinc-900">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
          NetDag (NDG) Whitepaper
        </h1>
        <p className="mt-3 text-zinc-800">
          A decentralized framework for trust, stability, and real-world utility.
        </p>
      </header>

      {/* TOC: light card, no borders */}
      <nav className="mb-10 rounded-2xl bg-zinc-100 p-5 text-zinc-900 shadow-sm">
        <h2 className="mb-3 font-semibold text-zinc-900">Contents</h2>
        <ol className="space-y-1 list-decimal list-inside text-zinc-800">
          <li><a className="hover:underline" href="#problem">Problem &amp; Philosophy</a></li>
          <li><a className="hover:underline" href="#principles">Core Principles</a></li>
          <li><a className="hover:underline" href="#tokenomics">Tokenomics</a></li>
          <li><a className="hover:underline" href="#focus">Focus Areas</a></li>
          <li><a className="hover:underline" href="#risk">Risk Management</a></li>
          <li><a className="hover:underline" href="#roadmap">Roadmap &amp; Milestones</a></li>
          <li><a className="hover:underline" href="#governance">Governance &amp; Transparency</a></li>
          <li><a className="hover:underline" href="#charity">Charity &amp; Global Impact</a></li>
        </ol>
      </nav>

      {/* 1. Problem & Philosophy */}
      <section id="problem" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Problem &amp; Philosophy</h2>
        <p className="mt-3 text-zinc-800">
          The global digital economy has outpaced the financial infrastructure supporting it.
          Legacy systems remain expensive, exclusionary, and opaque, while existing crypto
          solutions struggle with volatility and fragmentation. NetDag was created to unify
          real-world financial utility with decentralized scalability, trust, and inclusion.
          Our philosophy is to build <span className="font-medium">trust through transparency</span>,
          enable <span className="font-medium">growth through utility</span>, and stabilize the crypto
          economy via innovative mechanisms that merge DAG concepts with bonding-curve dynamics.
        </p>
      </section>

      <Divider />

      {/* 2. Core Principles */}
      <section id="principles" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Core Principles</h2>
        <div className="mt-4 space-y-5 text-zinc-800">
          <div>
            <h3 className="font-semibold text-zinc-900">Trust, Scalability, and Real-World Utility</h3>
            <p>
              NetDag bridges traditional finance and decentralized systems with a transparent,
              scalable architecture. Every mechanism—distribution, governance, and rewards—is
              engineered for practical utility and long-term adoption.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">Volatility Protection via DAG + Bonding Curve</h3>
            <p>
              A self-balancing model that blends DAG principles with bonding-curve pricing
              moderates extreme price swings by aligning supply, demand, and liquidity in
              near real time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">Liquidity-Backed 25% Reserve</h3>
            <p>
              A permanent <span className="font-medium">25% of presale revenue</span> (not tokens)
              is locked on-chain as a real-value reserve. This provides tangible liquidity
              backing and stability—protecting market integrity beyond simple token locking.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">Transparent, On-Chain Governance</h3>
            <p>
              Holders propose and vote on changes. All actions are recorded on-chain,
              ensuring verifiable accountability and community-led evolution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">Charity-First Model</h3>
            <p>
              A small share of network activity funds verified charities. Every transaction
              becomes a positive, traceable contribution to real-world impact.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* 3. Tokenomics */}
      <section id="tokenomics" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Tokenomics</h2>
        <p className="mt-3 text-zinc-800">
          The maximum total supply is <span className="font-medium">499,999,000 NDG</span>,
          allocated to balance fairness, growth, and sustainability.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Card title="Presale — 50%">
            For community participation and early liquidity formation.
          </Card>
          <Card title="Liquidity Reserve — 25%">
            Permanently locked portion of <span className="font-medium">presale revenue</span> held
            on-chain as tangible backing for price stability.
          </Card>
          <Card title="Partnerships &amp; Advertising — 10%">
            Strategic collaborations, awareness, and ecosystem visibility.
          </Card>
          <Card title="Staking Rewards — 10%">
            Incentives for long-term holders who support and secure the network.
          </Card>
          <Card title="Ecosystem Development — 5%">
            Future integrations, innovation grants, and dApp support.
          </Card>
        </div>

        <h3 className="mt-6 font-semibold text-zinc-900">Emission Schedule</h3>
        <p className="mt-2 text-zinc-800">
          Circulating supply increases by <span className="font-medium">10% every two weeks</span>
          over <span className="font-medium">14 cycles (~7 months)</span>. This controlled release
          maintains liquidity and reduces volatility, aligning token entry with organic demand.
        </p>

        <h3 className="mt-6 font-semibold text-zinc-900">Investor Communication</h3>
        <p className="mt-2 text-zinc-800">
          Follow our official website, app, and verified social channels for presale
          announcements, schedules, and rewards information.
        </p>
      </section>

      <Divider />

      {/* 4. Focus Areas */}
      <section id="focus" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Focus Areas</h2>
        <div className="mt-4 space-y-5 text-zinc-800">
          <Item
            title="Financial services & payment solutions"
            body="Fast, low-cost, borderless payments that connect crypto, fiat, and tokenized assets under a single liquidity model."
          />
          <Item
            title="Web3 rewards for everyday users"
            body="Turn daily digital actions—shopping, referrals, content—into meaningful tokenized rewards."
          />
          <Item
            title="Digitalisation of real-world assets (RWA)"
            body="Tokenize property, commodities, and equity for fractional access, transparent ownership, and global liquidity."
          />
          <Item
            title="Private, censorship-resistant dVPN"
            body="Privacy-first networking that secures identity and freedom without centralized gatekeepers."
          />
          <Item
            title="Cross-chain DeFi lending & borrowing"
            body="Seamless lending, borrowing, and yield across ecosystems via automated, collateralized smart contracts."
          />
          <Item
            title="AI-powered Neuron Layer"
            body="Adaptive intelligence that analyzes market behavior to optimize liquidity and mitigate irrational volatility."
          />
          <Item
            title="Gaming, micropayments & digital commerce"
            body="Low-fee microtransactions, NFT utility, and creator-friendly rails for next-gen entertainment and retail."
          />
        </div>
      </section>

      <Divider />

      {/* 5. Risk Management */}
      <section id="risk" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Risk Management</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Card title="Smart Contract Audits">
            Independent third-party reviews before and after deployment to minimize vulnerabilities.
          </Card>
          <Card title="Liquidity Protection">
            The locked reserve of presale revenue provides immediate stabilization capacity in volatile conditions.
          </Card>
          <Card title="Adaptive Bonding Curve">
            Programmatic alignment of supply, demand, and pricing to discourage manipulation and shocks.
          </Card>
          <Card title="Community Safeguards">
            On-chain voting plus multisig controls for treasury and parameter changes ensure accountability.
          </Card>
          <Card title="Controlled Emissions">
            10%-per-cycle releases reduce inflation risk and support healthy market participation.
          </Card>
        </div>
      </section>

      <Divider />

      {/* 6. Roadmap */}
      <section id="roadmap" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Roadmap &amp; Milestones</h2>
        <p className="mt-3 text-zinc-800">
          The project began with a mission to merge trust, utility, and scalability in a single
          decentralized framework. Early phases focused on foundation, prototyping, and community.
        </p>
        <ul className="mt-4 space-y-2 text-zinc-800 list-disc list-inside">
          <li><span className="font-medium">Current:</span> Presale, awareness, and first dApp deployment.</li>
          <li><span className="font-medium">Q2:</span> dVPN rollout and AI Neuron Layer beta.</li>
          <li><span className="font-medium">Q3:</span> Cross-chain lending, staking, and first charity disbursements.</li>
          <li><span className="font-medium">Q4:</span> Gaming & micropayments, DAO launch, and strategic partnerships.</li>
          <li><span className="font-medium">Beyond:</span> Continued audits, RWA expansion, and global ecosystem alliances.</li>
        </ul>
      </section>

      <Divider />

      {/* 7. Governance */}
      <section id="governance" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Governance &amp; Transparency</h2>
        <p className="mt-3 text-zinc-800">
          NetDag uses transparent, on-chain governance. Holders can propose and vote on upgrades,
          treasury allocations, and integrations. All outcomes are immutably recorded, while multisig
          treasury controls prevent unilateral actions. Public dashboards keep the community informed.
        </p>
      </section>

      <Divider />

      {/* 8. Charity */}
      <section id="charity" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold text-zinc-900">Charity &amp; Global Impact</h2>
        <p className="mt-3 text-zinc-800">
          A portion of network activity funds verified charities and humanitarian causes. Donations
          are on-chain and traceable, aligning economic participation with measurable global impact.
        </p>
      </section>

      <Divider />

      {/* Footer */}
      <footer className="mt-10 text-sm text-zinc-700">
        © {new Date().getFullYear()} NetDag. All rights reserved.
      </footer>
    </main>
  );
}

/* --- UI helpers --- */
function Divider() {
  // No line—spacing only (line removed)
  return <div className="my-10" />;
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  // Light card, no border, dark text for readability
  return (
    <div className="rounded-xl bg-zinc-100 p-4 text-zinc-900 shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2">{children}</p>
    </div>
  );
}

function Item({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-semibold text-zinc-900">{title}</h3>
      <p className="text-zinc-800">{body}</p>
    </div>
  );
}