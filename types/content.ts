import type { Localized } from "@/lib/i18n"

export interface Metric {
  value: string
  label: Localized
  /** De onde o número veio e em qual período foi medido. */
  context: Localized
}

export interface CaseSection {
  problem: Localized
  solution: Localized
  role: Localized
  architecture: Localized<string[]>
  result: Localized
}

export interface CaseImage {
  src: string
  width: number
  height: number
  alt: Localized
  /** Legenda visível: diz exatamente o que a imagem mostra. */
  caption?: Localized
  /** Screenshot de fundo claro precisa de moldura clara. */
  tone: "dark" | "light"
}

export interface CaseStudy extends CaseSection {
  slug: string
  client: string
  title: Localized
  kind: Localized
  period?: Localized
  stack: string[]
  metric?: Metric
  image?: CaseImage
  link?: { href: string; label: Localized }
}

export interface CompactProject {
  slug: string
  client: string
  summary: Localized
  stack: string[]
  metric?: Metric
  link?: { href: string; label: Localized }
}

export interface Role {
  company: string
  title: Localized
  period: Localized
  location: Localized
  summary: Localized
  highlights: Localized<string[]>
  stack: string[]
}

export interface ProcessStep {
  id: string
  name: Localized
  description: Localized
  outputs: Localized<string[]>
}

export interface StackGroup {
  name: Localized
  summary: Localized
  items: Localized<string[]>
}

export interface Service {
  name: Localized
  description: Localized
}

export interface Credential {
  title: Localized
  issuer: Localized
  year: string
  detail?: Localized
  file: string
}
