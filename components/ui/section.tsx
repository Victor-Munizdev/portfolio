import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title: string
  lead?: string
  children: ReactNode
  className?: string
  /** Seções de apoio (ex.: certificações) usam um título menor. */
  quiet?: boolean
}

/**
 * Moldura comum das seções: o hairline do topo é desenhado pelo scroll
 * (ver lib/motion/sections.ts).
 */
export function Section({ id, title, lead, children, className, quiet = false }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} tabIndex={-1} className={cn("px-5 md:px-10", className)}>
      <div className="relative mx-auto max-w-page pb-20 pt-16 md:pb-28 md:pt-20">
        <span aria-hidden="true" className="rail-track inset-x-0 top-0 h-px" />
        <span aria-hidden="true" data-section-signal className="rail-draw inset-x-0 top-0 h-px origin-left" />
        <header data-reveal className="max-w-3xl">
          <h2 id={headingId} className={quiet ? "text-heading" : "text-title"}>
            {title}
          </h2>
          {lead ? <p className="mt-4 max-w-prose text-lead text-text-2">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
