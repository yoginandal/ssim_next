import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/pages/Header/Header";
import Footer from "@/pages/Footer/Footer";
import QueryProvider from "@/components/QueryProvider";
import ConditionalBanner from "@/components/ConditionalBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SSIM - Siva Sivani Institute of Management",
  description:
    "Siva Sivani Institute of Management - Excellence in Management Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Header />
          <ConditionalBanner />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
