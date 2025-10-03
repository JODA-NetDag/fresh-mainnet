import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";

type QA = { q: string; a: React.ReactNode };

const items: QA[] = [
  {
    q: "What is NetDag (NDG) and what problem does it solve?",
    a: (
      <>
        NetDag is a blockchain project designed to deliver trust, scalability, and real-world
        utility. It is the world’s first unifier of DAG (Directed Acyclic Graph) and Bonding Curve
        mechanics—a model that acts as a <em>shock absorber</em> to protect assets from volatility.
        <br />
        <br />
        NetDag focuses on:
        <ul className="mt-2 list-disc pl-6">
          <li>Financial services &amp; payment solutions</li>
          <li>Web3 rewards for everyday users</li>
          <li>Digitalisation of real-world assets (RWA)</li>
          <li>Private, censorship-resistant dVPN access</li>
          <li>Cross-chain DeFi lending and borrowing</li>
          <li>AI-powered trading support</li>
        </ul>
      </>
    ),
  },
  { q: "What is the total supply of NDG tokens?", a: <>499,999,000 NDG tokens.</> },
  {
    q: "How is presale revenue used?",
    a: (
      <>
        25% of all presale revenue is permanently locked as a reserve to stabilize the market.
        The remaining funds are allocated to development, audits, and ecosystem growth.
      </>
    ),
  },
  {
    q: "How does the bonding curve protect token holders?",
    a: (
      <>
        The bonding curve ensures predictable token pricing. Early adopters get a fair entry,
        while the reserve acts as a safeguard against sudden price crashes, keeping the ecosystem healthy.
      </>
    ),
  },
  {
    q: "How do I join the presale?",
    a: (
      <>
        You will be asked to connect your wallet via the official NetDag dApp.
        Stay tuned for the official launch details.
      </>
    ),
  },
  {
    q: "What is the AI Neuron Layer?",
    a: (
      <>
        The AI Neuron Layer supports decision-making across the ecosystem. It also helps traders by
        reducing the impact of human psychology (fear, greed, hesitation) in trading decisions.
      </>
    ),
  },
  {
    q: "What is the decentralized VPN (dVPN)?",
    a: (
      <>
        It is a peer-to-peer bandwidth marketplace where anyone can sell or buy internet access securely
        using NDG tokens—private, censorship-resistant, and unstoppable.
      </>
    ),
  },
  {
    q: "How does cross-chain lending work?",
    a: (
      <>
        Imagine you hold ETH in one wallet but want to borrow NDG for digital services. NetDag allows you
        to seamlessly use ETH as collateral and borrow NDG across chains—bridging assets and making them
        truly interoperable.
      </>
    ),
  },
  {
    q: "What about charity?",
    a: (
      <>
        2% of ecosystem revenue is dedicated to charitable causes worldwide, with full transparency on-chain.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="w-full max-w-4xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-center text-gray-700">
            We’ll keep adding answers as NetDag evolves.
          </p>

          <div className="mt-8 space-y-3">
            {items.map(({ q, a }, i) => (
              <details
                key={i}
                className="group rounded-xl border border-black/10 bg-white/80 backdrop-blur px-4 py-3 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none select-none py-1 text-base font-medium text-gray-900 outline-none marker:hidden">
                  <div className="flex items-center justify-between gap-3">
                    <span>{q}</span>
                    <span className="text-gray-500 transition group-open:rotate-180">⌄</span>
                  </div>
                </summary>
                <div className="mt-2 text-gray-700 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}