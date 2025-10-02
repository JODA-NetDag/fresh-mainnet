import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">FAQ</h1>
        <p className="mt-2 text-gray-700">We’ll keep adding answers here.</p>

        <div className="mt-6 space-y-6 text-sm text-gray-700">
          <div>
            <p className="font-medium">What is NetDag?</p>
            <p className="mt-1">A lightweight crypto project with real utility: shopper rewards and a decentralized VPN (dVPN).</p>
          </div>
          <div>
            <p className="font-medium">Which chain?</p>
            <p className="mt-1">BNB Smart Chain to start (low fees, fast). Testnet first, then audited mainnet.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}