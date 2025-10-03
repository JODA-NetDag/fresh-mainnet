// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetDag — Simple crypto, real utility.",
  description:
    "Lightweight crypto for real users: rewards, dVPN, cross-chain lending, AI neuron layer, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Set the site-wide background ONCE here */}
      <body className="min-h-screen bg-[#F8FBFF] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}