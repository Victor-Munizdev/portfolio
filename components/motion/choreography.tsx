"use client"

import type { RefObject } from "react"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { bindAnchors } from "@/lib/motion/anchors"
import { playHeroRail } from "@/lib/motion/hero"
import { animateProcess } from "@/lib/motion/process"
import { animateSection } from "@/lib/motion/sections"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

const queries = {
  desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  compact: "(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
}

/**
 * Coreografia global do scroll. Um único matchMedia decide o modo:
 * desktop (smoothing + pin), compacto (scroll nativo + scrub leve) ou
 * movimento reduzido (nada além da navegação por âncoras).
 */
export default function Choreography({ scope }: { scope: RefObject<HTMLDivElement | null> }) {
  useGSAP(
    () => {
      const root = document.documentElement
      const mm = gsap.matchMedia()

      mm.add(queries, (context) => {
        const { desktop, reduce } = context.conditions as Record<keyof typeof queries, boolean>

        root.classList.toggle("motion-ok", !reduce)

        const smoother = desktop
          ? ScrollSmoother.create({
              wrapper: "#smooth-wrapper",
              content: "#smooth-content",
              smooth: 0.8,
              smoothTouch: false,
              normalizeScroll: false,
            })
          : null

        const releaseAnchors = bindAnchors(smoother, reduce)
        if (reduce) return releaseAnchors

        playHeroRail(desktop)
        // Criados na ordem do documento para o refresh respeitar o pin do processo.
        gsap.utils.toArray<HTMLElement>("main > section").forEach((section) => {
          animateSection(section)
          if (section.id === "process") animateProcess(section, desktop)
        })

        return releaseAnchors
      })
    },
    { scope },
  )

  return null
}
