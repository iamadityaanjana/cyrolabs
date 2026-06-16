import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyro Labs — Building Products, Communities & Startup Ecosystems",
  description: "Cyro Labs helps founders, startups, and ecosystems launch products, grow communities, and scale innovation through fellowships, hackathons, and world-class development.",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
