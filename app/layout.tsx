import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/theme/core";

export const metadata: Metadata = {
  title: "Valley ",
  description: "An Platform for the Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.ppNeue.variable} font-sans`}>{children}</body>
    </html>
  );
}
