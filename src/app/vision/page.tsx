import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Vision</h1>
        <p className="mt-4 text-gray-700">
          NetDag aims to make crypto useful for everyday people: fast rewards for shopping,
          and private, censorship-resistant access to the internet via our decentralized VPN (dVPN).
        </p>
        <p className="mt-4 text-gray-700">
          We grow step by step: ship an MVP, invite real users, measure, then improve.
          The project emphasizes sustainability (DAG + bonding curve mechanics), practical utility,
          and open integrations for partners.
        </p>
      </main>
      <Footer />
    </>
  );
}