import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { Provider } from "~/app/provider"
import { NavBar } from "~/components/navbar"
import { Footer } from "~/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs + Fidely UI",
  description: "Build modern apps with speed and flexibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
