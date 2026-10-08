import type { ReactNode } from "react"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import { htmlLang, type Locale } from "@/lib/i18n"
import "@/app/globals.css"

// Antes do primeiro paint: marca que há motion para o CSS preparar o trilho do hero.
// Texto estático, sem entrada de usuário.
const motionFlag = `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion-ok")`

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body className={`${GeistSans.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
