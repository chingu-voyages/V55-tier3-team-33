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
  return <div className="flex-grow flex flex-col">{children}</div>;
}
