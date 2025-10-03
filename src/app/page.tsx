
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
 import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero */}
        <Hero />

        {/* Primary CTAs under hero */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/whitepaper" className="btn-primary">
            Read Whitepaper
          </Link>

          <Link href="/vision" className="btn-outline">
            Our Vision
          </Link>
        </div>

        {/* Features section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Features & Innovation
          </h2>
          <p className="mt-2 text-gray-700">
            Focused, practical tech — shipped step by step.
          </p>

          {/* Cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Features />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}