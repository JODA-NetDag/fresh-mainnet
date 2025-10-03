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
      {/* Light blue site background; tweak bg-sky-50 to taste */}
      <body className="min-h-screen bg-sky-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
 }