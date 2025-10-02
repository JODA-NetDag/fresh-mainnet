export default function Footer() {
  return (
    <footer className="px-4 py-12 border-t">
      <div className="mx-auto max-w-6xl text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} NetDag. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@netdag.com" className="hover:text-gray-800">
            hello@netdag.com
          </a>
          <a href="#" className="hover:text-gray-800">X/Twitter</a>
          <a href="#" className="hover:text-gray-800">Telegram</a>
        </div>
      </div>
    </footer>
  );
}