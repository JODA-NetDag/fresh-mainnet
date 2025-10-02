export default function Hero() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          NetDag — Simple crypto, <span className="underline decoration-black/20">real utility</span>.
        </h1>
        <p className="mt-4 text-gray-600">
          We’re building a lightweight token for real users — starting with shopper rewards
          and a simple, private peer-to-peer dVPN.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#cta"
            className="rounded-xl bg-[#2563EB] text-white px-5 py-3 text-sm hover:opacity-90"
          >
            Get started
          </a>
          <a
            href="#tokenomics"
            className="rounded-xl border border-[#D4AF37] px-5 py-3 text-sm hover:bg-white/50"
          >
            View tokenomics
          </a>
        </div>
      </div>
    </section>
  );
}