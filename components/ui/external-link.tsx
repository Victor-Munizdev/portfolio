import type { ComponentProps } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExternalLinkProps extends ComponentProps<"a"> {
  /** Texto para leitores de tela avisando que abre em nova aba. */
  newTabLabel: string
}

export function ExternalLink({ className, children, newTabLabel, ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group inline-flex min-h-6 items-center gap-1.5 py-1 text-sm font-medium text-bone", className)}
      {...props}
    >
      <span className="link-line">{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-4 text-fog transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone"
      />
      <span className="sr-only">({newTabLabel})</span>
    </a>
  )
}
