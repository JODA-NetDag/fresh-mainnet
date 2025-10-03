import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-[#d0e2f7] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-start justify-center">
        <div className="max-w-3xl w-full px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
            Get started with NetDag
          </h1>

          <ol className="mt-8 space-y-4">
            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>1) Install a wallet (BNB Smart Chain compatible)</b>
              <p className="mt-2 text-gray-700">
                MetaMask or Rabby are good choices. We’ll publish a step-by-step guide soon.
              </p>
            </li>

            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>2) Connect to BNB Smart Chain</b>
              <p className="mt-2 text-gray-700">
                We start on BSC for low fees and fast confirmations (testnet first, then audited mainnet).
              </p>
            </li>

            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>3) Get NDG &amp; try the dVPN</b>
              <p className="mt-2 text-gray-700">
                When presale is live you’ll be able to acquire NDG and pay per-GB for private bandwidth on our dVPN.
              </p>
            </li>

            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>4) Learn the fundamentals</b>
              <p className="mt-2 text-gray-700">
                Read our <a href="/whitepaper" className="text-blue-700 underline">Whitepaper</a> for the
                DAG + Bonding Curve model, reserves, roadmap, and governance.
              </p>
            </li>

            <li className="bg-white rounded-lg p-5 shadow-md">
              <b>5) Stay in the loop</b>
              <p className="mt-2 text-gray-700">
                Follow updates on X/Twitter and Telegram. We’ll announce testnet and presale timing there.
              </p>
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="/whitepaper" className="rounded-lg bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition">
              Read Whitepaper
            </a>
            <a href="/dvpn" className="rounded-lg border border-[#D4AF37] px-5 py-3 hover:bg-white/60 transition">
              Explore dVPN
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}