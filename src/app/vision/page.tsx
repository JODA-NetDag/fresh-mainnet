import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Our Vision
        </h1>

        <p className="mt-4 text-gray-700">
          NetDag aims to make crypto useful for everyday people: fast rewards
          for shopping, and private, censorship-resistant access to the internet
          via our decentralized VPN (dVPN). We’ll grow step-by-step: ship MVPs,
          invite real users, measure, and improve — with sustainability (DAG +
          bonding curve), practical utility, and open partner integrations.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            href="/whitepaper"
            className="rounded-lg bg-[#1E40B8] px-5 py-3 text-white hover:bg-[#17379c] transition"
          >
            Read Whitepaper
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}