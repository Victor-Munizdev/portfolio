import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { DisableCopy } from "@/components/disable-copy"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  icons: "/logo.png",
  title: "Victor Muniz - Desenvolvedor Full Stack",
  description: "Portfólio profissional de Victor Muniz, desenvolvedor full stack especializado em React, Next.js e soluções web modernas.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <DisableCopy />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics debug={false} />
      </body>
    </html>
  )
}
