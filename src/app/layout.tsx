import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";  // adjust path
import { PersonSchema } from "@/components/Schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dawnmilnamow.com'),
  title: "Dawn Milnamow | Software Engineer",
  description: "Dawn Milnamow – Full-stack developer. Based in Hockessin, Delaware and Saint Petersburg, Florida.",
  keywords: ["Dawn Milnamow", "software engineer", "Next.js developer", "React developer", "front-end developer", "full-stack developer", "Delaware", "Florida"],
  openGraph: {
    title: "Dawn Milnamow – Software Engineer",
    description: "Dawn Milnamow – Full-stack developer. Based in Hockessin, Delaware and Saint Petersburg, Florida.",
    url: "https://www.dawnmilnamow.com",
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
      <head>
        <PersonSchema />
      </head>
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
