 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";

export default function Dvpn() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="max-w-4xl w-full px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">NetDag dVPN</h1>
          <p className="mt-4 text-lg text-gray-700">
            A decentralized, peer-to-peer bandwidth marketplace. Community operators run
            lightweight WireGuard nodes; users choose a node and pay per-GB in NDG.
            No central authority, no central logs.
          </p>
          <ul className="mt-8 grid gap-4 text-left md:grid-cols-2">
            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>On-chain staking</b> for node operators and marketplace ranking.
            </li>
            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>Session escrow &amp; settlement</b>; DNS-leak protection and kill-switch planned.
            </li>
            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>Clear ToS &amp; country allow-lists</b> to reduce abuse risk.
            </li>
            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>Simple UX</b>: pick a node, connect, and browse.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}