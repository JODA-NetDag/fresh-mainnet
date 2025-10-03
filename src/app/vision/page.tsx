 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";

export default function Vision() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="max-w-4xl w-full px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Vision</h1>
          <p className="mt-4 text-lg text-gray-700">
            NetDag aims to make crypto useful for everyday people: fast rewards for shopping, and
            private, censorship-resistant access to the internet via our decentralized VPN (dVPN).
          </p>
          <p className="mt-4 text-gray-700">
            We grow step by step: ship an MVP, invite real users, measure, then improve.
            The project emphasizes sustainability (DAG + bonding curve mechanics),
            practical utility, and open integrations for partners.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}