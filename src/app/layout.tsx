"use client";
import { Mulish } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Nav, NavLink } from "@/components/Nav";
import AuthButton from "@/components/AuthButton";
import Footer from "@/components/Footer";

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
      <body className={`${mulish.className} antialiased `}>
        <SessionProvider>
          <div className="flex flex-col items-center justify-items-center h-auto gap-24 w-full">
            <Nav>
              <NavLink href="/">Djopa</NavLink>

              <div className="navigators">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/contacto">Contacto</NavLink>
              </div>
              <div className="space-nav"></div>
              <div className="space-nav"></div>
              <div className="last-nav flex gap-1">
                <AuthButton />
              </div>
            </Nav>
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
