import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WhitepaperPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Whitepaper</h1>
        <p className="mt-4 text-gray-700">
          We’re preparing a living whitepaper. For now, the summary and tokenomics are on the home page.
          When the PDF is ready, we’ll publish it here and on IPFS.
        </p>
        <div className="mt-6">
          <a
            href="/whitepaper.pdf"
            className="rounded-xl border border-[#D4AF37] px-5 py-3 text-sm hover:bg-white/50"
            download
          >
            Download (coming soon)
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}