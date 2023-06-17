import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
