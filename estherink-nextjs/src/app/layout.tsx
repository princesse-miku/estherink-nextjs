import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esther Ink official fansite",
  description: "Esther Ink - Inkcha BNK48 supporters fansite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        {/* ใส่แท็ก Favicon หัวใจตรงนี้โดยตรง */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💖</text></svg>"
        />
      </head>
      <body className="min-h-screen relative bg-gradient-to-br from-pink-50 via-rose-50/60 to-purple-50/40 text-slate-800 antialiased">
        <div 
          className="fixed inset-0 pointer-events-none z-[-1] opacity-30"
          style={{
            backgroundImage: `radial-gradient(#f472b6 0.8px, transparent 0.8px), radial-gradient(#fb7185 0.8px, #fff5f7 0.8px)`,
            backgroundSize: `32px 32px`,
            backgroundPosition: `0 0, 16px 16px`,
          }}
        />
        {children}
      </body>
    </html>
  );
}