import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alif Apriansyah | Informatics Student & Software Builder",
  description:
    "Portfolio digital Alif Apriansyah: Fullstack Web, WebGIS Spasial, Go Backend, dan IoT Computer Vision dari Universitas Tadulako, Palu.",
  keywords: [
    "Alif Apriansyah",
    "Universitas Tadulako",
    "Informatika Untad",
    "Portfolio Developer",
    "Fullstack",
    "WebGIS",
    "Laravel",
    "Go",
    "Palu"
  ],
  authors: [{ name: "Alif Apriansyah" }],
  openGraph: {
    title: "Alif Apriansyah | Informatics Student & Software Builder",
    description:
      "Portfolio digital Alif Apriansyah: Fullstack Web, WebGIS, Go Backend, dan IoT Computer Vision dari Palu, Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 font-sans selection:bg-zinc-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}
