import "../styles/globals.css";
import { Footer } from "@/components/site-footer";
import { Navbar } from "@/components/site-navbar";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
