import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import localFont from "next/font/local";


import "./globals.css";

const urbanistSans = Urbanist({
  subsets: ["latin"],
});

const gilgan = localFont({
  src: "../../public/fonts/gilgan.ttf",
  variable: "--font-gilgan",
});
export const metadata: Metadata = {
  title: "Artificialbeingz",
  description: "Artificialbeingz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanistSans.className} ${gilgan.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
