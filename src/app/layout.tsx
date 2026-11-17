import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rimon Hossain | Full Stack Developer",
  description:
    "Full Stack Developer building scalable web applications with clean code, type safety, and security. Experienced with React, Next.js, Node.js, NestJS, MongoDB, and PostgreSQL.",
  keywords: [
    "Rimon Hossain",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Rimon Hossain" }],
  openGraph: {
    title: "Rimon Hossain | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications with clean code, type safety, and security.",
    type: "website",
    locale: "en_US",
    siteName: "Rimon Hossain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimon Hossain | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications with clean code, type safety, and security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#fafafa] text-[#292929] min-h-screen selection:bg-black selection:text-white font-[family-name:var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
