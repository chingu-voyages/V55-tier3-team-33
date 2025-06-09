import type { Metadata } from "next";
import "./globals.css";
import "@styles/styles.scss";
import "@lib/fontawesome";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Loem Ipsum",
  description: "Lorem ipsum dolor est amet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // background image must go only on homepage
  return (
    <html lang="en" className="">
      <body className="bg-homepage flex flex-col min-h-screen font-sans">
        <NavBar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
