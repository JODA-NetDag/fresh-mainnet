export default function Footer() {
  return (
    <footer className="bg-sky-50 border-t border-blue-100">
      <div className="mx-auto max-w-6xl px-4 py-8 text-slate-700">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} NetDag. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:hello@netdag.com"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-blue-300"
            >
              hello@netdag.com
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-blue-300"
            >
              X/Twitter
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 hover:underline underline-offset-4 decoration-blue-300"
            >
              Telegram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
