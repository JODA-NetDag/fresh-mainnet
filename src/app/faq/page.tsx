export default function FAQ() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Frequently Asked Questions
      </h1>
      <div className="mt-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">What is NetDag?</h2>
          <p className="mt-2 text-gray-700">
            NetDag (NDG) is a next-generation blockchain ecosystem built on DAG +
            Bonding Curve mechanics to provide scalability, fairness, and asset
            protection. It focuses on payments, Web3 rewards, dVPN, lending, and
            AI-driven services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            How does the Bonding Curve protect investors?
          </h2>
          <p className="mt-2 text-gray-700">
            By locking 25% of presale revenue as a constant reserve, NetDag
            reduces pump-and-dump risks and creates a shock-absorber against
            volatility.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Where can I buy NDG?</h2>
          <p className="mt-2 text-gray-700">
            During presale, you will be directed to connect your wallet to the
            official dApp. Stay tuned for official announcements on listings.
          </p>
        </div>
      </div>
    </main>
  );
}