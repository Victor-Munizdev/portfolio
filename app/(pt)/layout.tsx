import type { ReactNode } from "react"
import type { Viewport } from "next"
import { RootShell } from "@/components/layout/root-shell"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata("pt")

export const viewport: Viewport = { themeColor: "#101010", colorScheme: "dark" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="pt">{children}</RootShell>
}
