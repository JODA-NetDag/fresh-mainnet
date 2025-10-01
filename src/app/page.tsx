export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          🚀 JODA Fresh Mainnet
        </h1>
        <p className="text-gray-600">
          Built with Next.js + TypeScript + Tailwind. Auto-deployed via Vercel.
        </p>
        <button
          className="px-6 py-3 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          onClick={() => alert('Connect Wallet coming soon')}
        >
          Connect Wallet
        </button>
      </div>
    </main>
  );
}