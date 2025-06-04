import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loem Ipsum",
  description: "Lorem ipsum dolor est amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <body
        className="flex flex-col min-h-screen font-sans"
      >
        <NavBar />
        <main className="flex-grow p-4 sm:p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
