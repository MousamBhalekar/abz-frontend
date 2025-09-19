import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { ScrollProgress } from "./component/common/scroll-progress";
import { PageLoader } from "./component/common/page-loader";

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
        className={`${urbanistSans.className} ${gilgan.variable} antialiased min-h-screen flex flex-col`}
      >
        <PageLoader />
        <ScrollProgress />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
