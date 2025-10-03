import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const items = [
  {
    q: "What is NetDag (NDG)?",
    a: "A lightweight crypto project focused on real utility: shopper rewards and a decentralized VPN (dVPN).",
  },
  {
    q: "What problem does it solve?",
    a: "Useful payments and services: private internet access, cross-chain lending, and simple rewards that everyday users can actually use.",
  },
  {
    q: "Why mention DAG + Bonding Curve?",
    a: "We combine DAG concepts with a bonding-curve reserve to act like a shock-absorber and discourage extreme volatility.",
  },
  {
    q: "Which chain?",
    a: "BNB Smart Chain to start (low fees, fast). Testnet first, then audited mainnet.",
  },
  {
    q: "How does dVPN work?",
    a: "Community WireGuard nodes provide bandwidth. Users pay per-GB in NDG; sessions are settled on-chain. No central logs.",
  },
  {
    q: "Cross-chain lending?",
    a: "Lock value on one chain and borrow usable NDG on NetDag for digital services, commerce, or gaming.",
  },
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="max-w-4xl w-full px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">FAQ</h1>
          <p className="mt-3 text-gray-700">We’ll keep adding answers here.</p>

          <div className="mt-8 space-y-4 text-left">
            {items.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-md">
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="mt-2 text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}