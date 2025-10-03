import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import FAQs from "@/components/FAQs"; // ← your existing component (plural)

// Example FAQ items (edit freely)
const items = [
  {
    q: "What is NetDag (NDG)?",
    a: "A lightweight crypto project focused on real utility: shopper rewards and a decentralized VPN (dVPN).",
  },
  {
    q: "What problem does NDG solve?",
    a: "Useful payments and services: private internet access, cross-chain lending, and simple rewards that everyday users can actually use.",
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
    a: "Community WireGuard nodes provide bandwidth. Users pay per-GB in NDG; sessions are settled on-chain. No central logs.",
  },
  {
    q: "Cross-Chain Lending?",
    a: "Lock value on one chain and seamlessly borrow usable NDG on NetDag for digital services—practical, lightweight liquidity.",
  },
  {
    q: "Presale?",
    a: "You’ll be prompted to connect your wallet when live. Stay tuned for dates and terms.",
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
            We’ll keep adding answers here as NetDag evolves.
          </p>

          {/* Render your existing component and feed it the items */}
          <div className="mt-8">
            <FAQsList items={items} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// Add this below or update your FAQs.tsx file to accept props:
type FAQItem = { q: string; a: string };
type FAQsProps = { items: FAQItem[] };

function FAQsList({ items }: FAQsProps) {
  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="font-bold">{item.q}</h2>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  );
}
