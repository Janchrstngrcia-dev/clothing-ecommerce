import type React from "react"
import type { Metadata } from "next"
import {  Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "DOPE DAYS - Essentials",
  description: "Timeless, minimalist clothing for the modern wardrobe.",
  icons: {
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`font-sans antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
