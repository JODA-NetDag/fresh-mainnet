export default function Footer() {
  return (
    <footer className="border-t bg-[#d0e2f7]">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-6 flex items-center justify-between text-sm text-gray-700">
        <span>© {new Date().getFullYear()} NetDag. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="mailto:hello@netdag.com" className="hover:underline">hello@netdag.com</a>
          <a href="https://x.com" target="_blank" className="hover:underline" rel="noreferrer">X/Twitter</a>
          <a href="https://t.me" target="_blank" className="hover:underline" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </footer>
  );
 }