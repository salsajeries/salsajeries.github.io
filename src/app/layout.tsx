import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salwa Jeries",
  description: "Welcome to my site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom-background text-custom-text">{children}</body>
    </html>
  );
}
