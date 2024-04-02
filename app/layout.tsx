import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/store/provider";
import "./globals.css";
import { Naviga } from "./components/naviga";

const inter = Inter({ subsets: ["latin"] });  

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Naviga></Naviga>
        <main>

        <Providers> {children} </Providers>
        </main>
      
      </body>
    </html>
  );
}