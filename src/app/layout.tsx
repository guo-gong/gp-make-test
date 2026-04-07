import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "CIS Robotics - Innovating Tomorrow with Intelligent Robotics",
  description: "Harnessing the power of AI to build autonomous solutions for a smarter, more efficient world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
