import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/app/ui/navigation/navigation-bar";
import { Footer } from "@/app/ui/footer";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ReTech",
  description: "Electrics Waste Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        <NextUIProvider>
          {children}
          <Toaster />
        </NextUIProvider>
        <Footer />
      </body>
    </html>
  );
}
