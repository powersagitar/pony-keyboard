import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pony Keyboard",
  description: "An energetic pony stepping on random keys on a keyboard.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
