import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Djopa",
  description: "Conectando talentos às oportunidades",
};

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${mulish.className} antialiased`}>{children}</body>
    </html>
  );
}
