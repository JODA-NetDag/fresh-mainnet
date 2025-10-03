import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DvpnPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          NetDag dVPN
        </h1>

        <p className="mt-4 text-gray-700">
          A decentralized, peer-to-peer bandwidth marketplace. Community
          operators run lightweight WireGuard nodes; users choose a node and
          pay per-GB in NDG. No central authority, no central logs.
        </p>

        <ul className="mt-6 list-disc pl-6 space-y-2 text-gray-700">
          <li>On-chain staking for node operators and marketplace ranking.</li>
          <li>Session escrow &amp; settlement; DNS-leak protection and kill-switch roadmap.</li>
          <li>Clear ToS and country allow-lists to reduce abuse risk.</li>
        </ul>

        <div className="mt-8">
          <Link
            href="/"
            className="rounded-lg bg-[#1E40B8] px-5 py-3 text-white hover:bg-[#17379c] transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}