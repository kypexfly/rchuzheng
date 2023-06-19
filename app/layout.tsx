import "../styles/globals.css";
import { Footer } from "@/components/site-footer";
import { Navbar } from "@/components/site-navbar";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>
          <Navbar />
          <main className="container py-6">{children}</main>
          <Footer />
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
