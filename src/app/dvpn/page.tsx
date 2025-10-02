import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DvpnPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">NetDag dVPN</h1>
        <p className="mt-4 text-gray-700">
          A decentralized, peer-to-peer bandwidth marketplace. Community operators run lightweight
          WireGuard nodes; users choose a node and pay per-GB in NDG. No central authority, no central logs.
        </p>
        <ul className="mt-6 list-disc pl-5 text-gray-700 space-y-2">
          <li>On-chain staking for node operators and marketplace ranking.</li>
          <li>Session escrow & settlement; DNS-leak protection and kill-switch planned.</li>
          <li>Clear ToS and country allow-lists to reduce abuse risk.</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}