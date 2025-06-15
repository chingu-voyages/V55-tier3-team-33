import type { Metadata } from "next";
import "../globals.css";
import "@styles/styles.scss";
import "@lib/fontawesome";

export const metadata: Metadata = {
  title: "Loem Ipsum",
  description: "Lorem ipsum dolor est amet",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="flex flex-col min-h-screen font-sans">
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
