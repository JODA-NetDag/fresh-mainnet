import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type QA = { q: string; a: string };
const items: QA[] = [
  {
    q: "What is NetDag (NDG)?",
    a: "A lightweight crypto project focused on real utility: shopper rewards and a decentralized VPN (dVPN).",
  },
  {
    q: "What problem does NDG solve?",
    a: "Practical web3 access: fast rewards, private internet access, and simple rails for payments, on-chain services, and (future) tokenized real-world utilities.",
  },
  {
    q: "Why DAG + Bonding Curve?",
    a: "They act like a ‘shock-absorber’: aiming to reduce outsized volatility and improve sustainability for the treasury and community.",
  },
  {
    q: "Which chain?",
    a: "We start on BNB Smart Chain for low fees and speed; testnet first, then audited mainnet.",
  },
  {
    q: "How does the dVPN work?",
    a: "Community WireGuard nodes provide bandwidth. Users pay per-GB in NDG; sessions are settled on-chain.",
  },
  {
    q: "AI Neuron Layer?",
    a: "Agentic insights that learn market behavior and help guide safer actions; traders can also use it to reduce human psychology bias.",
  },
  {
    q: "Cross-Chain Lending?",
    a: "Imagine holding ETH elsewhere and seamlessly borrowing NDG for digital services — practical, lightweight liquidity.",
  },
  {
    q: "Presale?",
    a: "You’ll be prompted to connect your wallet when live. Stay tuned for dates and terms.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">FAQ</h1>
        <p className="mt-4 text-gray-700">We’ll keep adding answers here.</p>

        <div className="mt-8 space-y-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-black/5 bg-white/60 p-5">
              <h3 className="font-semibold">{it.q}</h3>
              <p className="mt-2 text-gray-700">{it.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}