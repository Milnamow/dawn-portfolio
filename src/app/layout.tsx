import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";  // adjust path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dawn Milnamow | Software Engineer & Front-End Developer",
  description: "Dawn Milnamow – Full-stack developer specializing in Next.js, React, Tailwind CSS, and shadcn/ui. Based in Hockessin, Delaware and Saint Petersburg, Florida. View projects, resume, and contact.",
  keywords: ["Dawn Milnamow", "software engineer", "Next.js developer", "React developer", "front-end developer", "Delaware", "Florida"],
  openGraph: {
    title: "Dawn Milnamow – Software Engineer",
    description: "Dawn Milnamow – Full-stack developer specializing in Next.js, React, Tailwind CSS, and shadcn/ui. Based in Hockessin, Delaware and Saint Petersburg, Florida. View projects, resume, and contact.",
    url: "https://dawnmilnamow.com",
    siteName: "Dawn Milnamow Portfolio",
    images: ["/images/dawnmilnamow.jpg"],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dawnmilnamow.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"          // "light" | "dark" | "system"
          enableSystem
          disableTransitionOnChange      // ← prevents flash on initial load
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
