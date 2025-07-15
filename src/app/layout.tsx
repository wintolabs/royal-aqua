// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Royal Aqua – RO Sales & Service in Gurgaon",
  description:
    "20 years of trusted RO water-purifier sales, installation & repair. Book home service anywhere in Gurgaon in minutes.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://royalaqua.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
